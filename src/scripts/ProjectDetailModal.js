// ProjectDetailModal.js — populates and controls the large detail window
// for projects that have a dedicated file under src/data/projects/*.ts

const detailModules = import.meta.glob('../data/projects/*.ts', { eager: true })

function getDetailBySlug(slug) {
  for (const path in detailModules) {
    const fileSlug = path.split('/').pop()?.replace('.ts', '')
    if (fileSlug === slug) {
      return detailModules[path]?.default || null
    }
  }
  return null
}

function renderTeam(team) {
  const row = document.getElementById('detail-modal-team-row')
  if (!row) return

  if (!team || team.length === 0) {
    row.innerHTML = ''
    return
  }

  const names = team
    .map(member => `${member.name}${member.role ? ` (${member.role})` : ''}`)
    .join(', ')

  row.innerHTML = `<strong>Team:</strong> ${names}`
}

function renderInstitutions(institutions) {
  const row = document.getElementById('detail-modal-institutions-row')
  if (!row) return

  if (!institutions || institutions.length === 0) {
    row.innerHTML = ''
    return
  }

  const names = institutions.map(inst => inst.name).join(', ')
  row.innerHTML = `<strong>Institutions:</strong> ${names}`
}

function renderImages(images) {
  const wrap = document.getElementById('detail-modal-images')
  if (!wrap) return

  if (!images || images.length === 0) {
    wrap.innerHTML = ''
    return
  }

  wrap.innerHTML = images
    .map(
      img => `
        <figure>
          <img src="${img.src}" alt="${img.alt || ''}" loading="lazy" />
          <figcaption>${img.caption || ''}</figcaption>
        </figure>
      `
    )
    .join('')
}

function renderSections(sections) {
  const wrap = document.getElementById('detail-modal-sections')
  if (!wrap) return

  if (!sections || sections.length === 0) {
    wrap.innerHTML = ''
    return
  }

  wrap.innerHTML = sections
    .map(
      section => `
        <div>
          <p class="detail-modal-section-heading">${section.heading}</p>
          <p class="detail-modal-section-body">${section.body}</p>
        </div>
      `
    )
    .join('')
}

function renderHighlights(highlights) {
  const wrap = document.getElementById('detail-modal-highlights-wrap')
  const list = document.getElementById('detail-modal-highlights')
  if (!wrap || !list) return

  if (!highlights || highlights.length === 0) {
    wrap.style.display = 'none'
    return
  }

  wrap.style.display = ''
  list.innerHTML = highlights.map(item => `<li>${item}</li>`).join('')
}

export function openDetailModal(trigger) {
  const overlay = document.getElementById('detail-modal-overlay')
  const dotEl = document.getElementById('detail-modal-dot')
  const catLabel = document.getElementById('detail-modal-category-label')
  const titleEl = document.getElementById('detail-modal-title')
  const descEl = document.getElementById('detail-modal-description')
  const tagsEl = document.getElementById('detail-modal-tags')
  const githubBtn = document.getElementById('detail-modal-btn-github')
  const scrollEl = document.getElementById('detail-modal-scroll')

  if (!overlay || !dotEl || !catLabel || !titleEl || !descEl || !tagsEl || !githubBtn || !scrollEl) return

  const CATEGORY_TAGS = ['AI', 'Cybersecurity', 'AI Security', 'Others']

  const slug = trigger.dataset.modalSlug || ''
  const title = trigger.dataset.modalTitle || ''
  const color = trigger.dataset.modalColor || '#6B7280'
  const tagsRaw = trigger.dataset.modalTags || ''
  const github = trigger.dataset.modalGithub || '#'

  const detail = getDetailBySlug(slug)
  if (!detail) return

  dotEl.style.background = color
  titleEl.textContent = title
  githubBtn.href = github

  const allTags = tagsRaw ? tagsRaw.split(',').map(t => t.trim()) : []
  catLabel.textContent = allTags.find(t => CATEGORY_TAGS.includes(t)) || ''

  descEl.innerHTML = (detail.fullDescription || [])
    .map(paragraph => `<p>${paragraph}</p>`)
    .join('')

  renderTeam(detail.team)
  renderInstitutions(detail.institutions)
  renderImages(detail.images)
  renderSections(detail.sections)
  renderHighlights(detail.highlights)

  tagsEl.innerHTML = allTags
    .map(tag => `<span class="chip ${CATEGORY_TAGS.includes(tag) ? 'chip-accent' : ''}">${tag}</span>`)
    .join('')

  scrollEl.scrollTop = 0
  overlay.classList.add('active')
  document.body.style.overflow = 'hidden'
}

export function closeDetailModal() {
  const overlay = document.getElementById('detail-modal-overlay')
  if (!overlay) return

  overlay.classList.remove('active')
  document.body.style.overflow = ''
}

document.getElementById('detail-modal-close-x')?.addEventListener('click', closeDetailModal)
document.getElementById('detail-modal-btn-close')?.addEventListener('click', closeDetailModal)

document.getElementById('detail-modal-overlay')?.addEventListener('click', function (e) {
  if (e.target === this) closeDetailModal()
})

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeDetailModal()
})