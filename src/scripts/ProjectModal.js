const CATEGORY_TAGS = ['AI', 'Cybersecurity', 'AI Security', 'Others']

function openModal(trigger) {
  const overlay = document.getElementById('modal-overlay')
  const dotEl = document.getElementById('modal-dot')
  const catLabel = document.getElementById('modal-category-label')
  const titleEl = document.getElementById('modal-title')
  const descEl = document.getElementById('modal-description')
  const tagsEl = document.getElementById('modal-tags')
  const demoBanner = document.getElementById('modal-demo-banner')
  const demoLink = document.getElementById('modal-demo-link')
  const githubBtn = document.getElementById('modal-btn-github')

  if (!overlay || !dotEl || !catLabel || !titleEl || !descEl || !tagsEl || !demoBanner || !demoLink || !githubBtn) return

  const title = trigger.dataset.modalTitle || ''
  const description = trigger.dataset.modalDescription || ''
  const color = trigger.dataset.modalColor || '#6B7280'
  const tagsRaw = trigger.dataset.modalTags || ''
  const github = trigger.dataset.modalGithub || '#'
  const hasDemo = trigger.dataset.modalHasDemo === 'true'
  const demoUrl = trigger.dataset.modalDemoUrl || ''

  dotEl.style.background = color
  titleEl.textContent = title
  descEl.textContent = description
  githubBtn.href = github

  const allTags = tagsRaw ? tagsRaw.split(',').map(t => t.trim()) : []

  catLabel.textContent = allTags.find(t => CATEGORY_TAGS.includes(t)) || ''

  tagsEl.innerHTML = allTags
    .map(tag => `<span class="chip ${CATEGORY_TAGS.includes(tag) ? 'chip-accent' : ''}">${tag}</span>`)
    .join('')

  if (hasDemo && demoUrl) {
    demoBanner.classList.add('visible')
    demoLink.href = demoUrl
  } else {
    demoBanner.classList.remove('visible')
  }

  overlay.classList.add('active')
  document.body.style.overflow = 'hidden'
}

function closeModal() {
  const overlay = document.getElementById('modal-overlay')
  if (!overlay) return

  overlay.classList.remove('active')
  document.body.style.overflow = ''
}

document.querySelectorAll('.bb-card').forEach(el => {
  el.setAttribute('tabindex', '0')

  el.addEventListener('click', () => openModal(el))

  el.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      openModal(el)
    }
  })
})

document.getElementById('modal-close-x')?.addEventListener('click', closeModal)
document.getElementById('modal-btn-close')?.addEventListener('click', closeModal)

document.getElementById('modal-overlay')?.addEventListener('click', function (e) {
  if (e.target === this) closeModal()
})

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal()
})