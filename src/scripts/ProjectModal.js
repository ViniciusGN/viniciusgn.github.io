import { openDetailModal } from './ProjectDetailModal.js'

const CATEGORY_TAGS = ['AI', 'Cybersecurity', 'AI Security', 'Others']

const DEMO_INTRO_TEXT =
  'Due to the scope and depth of this project, it has a complete, interactive web-based version available through the buttons below.'

function openModal(trigger) {
  const overlay = document.getElementById('modal-overlay')
  const dotEl = document.getElementById('modal-dot')
  const catLabel = document.getElementById('modal-category-label')
  const titleEl = document.getElementById('modal-title')
  const descEl = document.getElementById('modal-description')
  const readMoreBtn = document.getElementById('modal-read-more')
  const tagsEl = document.getElementById('modal-tags')
  const demoBanner = document.getElementById('modal-demo-banner')
  const demoLink = document.getElementById('modal-btn-demo')
  const githubBtn = document.getElementById('modal-btn-github')

  if (!overlay || !dotEl || !catLabel || !titleEl || !descEl || !readMoreBtn || !tagsEl || !demoBanner || !demoLink || !githubBtn) return

  const title = trigger.dataset.modalTitle || ''
  const description = trigger.dataset.modalDescription || ''
  const color = trigger.dataset.modalColor || '#6B7280'
  const tagsRaw = trigger.dataset.modalTags || ''
  const github = trigger.dataset.modalGithub || '#'
  const hasDemo = trigger.dataset.modalHasDemo === 'true'
  const demoUrl = trigger.dataset.modalDemoUrl || ''

  dotEl.style.background = color
  titleEl.textContent = title
  githubBtn.href = github

  // For demo projects, append the standard explanatory note after the
  // project's own description so the demo button below makes sense.
  descEl.textContent = hasDemo && demoUrl
    ? `${description} ${DEMO_INTRO_TEXT}`
    : description

  const allTags = tagsRaw ? tagsRaw.split(',').map(t => t.trim()) : []

  catLabel.textContent = allTags.find(t => CATEGORY_TAGS.includes(t)) || ''

  tagsEl.innerHTML = allTags
    .map(tag => `<span class="chip ${CATEGORY_TAGS.includes(tag) ? 'chip-accent' : ''}">${tag}</span>`)
    .join('')

  if (hasDemo && demoUrl) {
    demoBanner.classList.add('visible')
    demoLink.style.display = ''
    demoLink.href = demoUrl
  } else {
    demoBanner.classList.remove('visible')
    demoLink.style.display = 'none'
  }

  overlay.classList.add('active')
  document.body.style.overflow = 'hidden'

  // "Read more" — reset clamp state for the incoming project, then check
  // (after the modal is actually visible, so layout is real) whether the
  // description overflows its clamped height. Only then show the button;
  // short descriptions stay exactly as they were before this feature.
  descEl.classList.remove('expanded')
  readMoreBtn.textContent = 'Read more'
  readMoreBtn.style.display = 'none'

  requestAnimationFrame(() => {
    if (descEl.scrollHeight > descEl.clientHeight + 1) {
      readMoreBtn.style.display = 'inline-flex'
    }
  })
}

function closeModal() {
  const overlay = document.getElementById('modal-overlay')
  if (!overlay) return

  overlay.classList.remove('active')
  document.body.style.overflow = ''
}

function toggleReadMore() {
  const descEl = document.getElementById('modal-description')
  const readMoreBtn = document.getElementById('modal-read-more')
  if (!descEl || !readMoreBtn) return

  const expanded = descEl.classList.toggle('expanded')
  readMoreBtn.textContent = expanded ? 'Show less' : 'Read more'
}

document.querySelectorAll('.proj-card').forEach(el => {
  el.setAttribute('tabindex', '0')

  const hasDemo = el.dataset.modalHasDemo === 'true'
  const hasDetail = el.dataset.modalHasDetail === 'true'

  // Routing: demo projects always use the small popup (with the standard
  // demo note). Non-demo projects with a dedicated detail file open the
  // large detail window. Everything else falls back to the small popup.
  const handleOpen = () => {
    if (!hasDemo && hasDetail) {
      openDetailModal(el)
    } else {
      openModal(el)
    }
  }

  el.addEventListener('click', handleOpen)

  el.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleOpen()
    }
  })
})

document.getElementById('modal-close-x')?.addEventListener('click', closeModal)
document.getElementById('modal-btn-close')?.addEventListener('click', closeModal)
document.getElementById('modal-read-more')?.addEventListener('click', toggleReadMore)

document.getElementById('modal-overlay')?.addEventListener('click', function (e) {
  if (e.target === this) closeModal()
})

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal()
})