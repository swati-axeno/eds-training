function normalizeHeroHeadings(container) {
  const headings = [...container.querySelectorAll('h1, h2, h3, h4, h5, h6')];

  if (headings.length >= 2) {
    // Case: separate heading elements (h1+h2, h2+h3, etc.), regardless of nesting depth
    headings[0].classList.add('hero-title');
    headings[1].classList.add('hero-subtitle');
    headings.slice(2).forEach((h) => h.classList.add('hero-subtitle'));
    return;
  }

  if (headings.length === 1) {
    const heading = headings[0];
    heading.classList.add('hero-title');

    const br = heading.querySelector('br');
    if (br) {
      // Case: single heading, text + <br> + text
      const span = document.createElement('span');
      span.className = 'hero-subtitle-text';

      let next = br.nextSibling;
      while (next) {
        const toMove = next;
        next = next.nextSibling;
        span.appendChild(toMove);
      }

      br.after(span);
    }
  }
}

export default function decorate(block) {
  const children = [...block.children];

  const hasImage = children[0]?.querySelector('picture, img');

  let image;
  let title;
  let subtitle;
  let ctaRow;

  if (hasImage) {
    [image, title, subtitle, ctaRow] = children;
  } else {
    [title, subtitle, ctaRow] = children;
  }

  if (!title || !subtitle || !ctaRow) {
    return;
  }

  if (image) {
    image.classList.add('hero-image');
  } else {
    block.classList.add('text-only');
  }

  const ctaParts = [...ctaRow.querySelectorAll('h1, h2, h3, h4, h5, h6, p')];

  const ctaLabel = ctaParts[0]?.textContent.trim();
  const ctaUrlText = ctaParts[1]?.textContent.trim() || '#';

  const button = document.createElement('a');
  button.className = 'hero-cta';
  button.href = ctaUrlText.startsWith('http')
    ? ctaUrlText
    : `https://${ctaUrlText}`;

  button.innerHTML = `
    <span>${ctaLabel}</span>

    <span class="arrow-wrapper">
      <svg class="arrow arrow-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 12H19" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square"></path>
        <path d="M13 6L19 12L13 18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-linejoin="miter"></path>
      </svg>

      <svg class="arrow arrow-next" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 12H19" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square"></path>
        <path d="M13 6L19 12L13 18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-linejoin="miter"></path>
      </svg>
    </span>
  `;

  const content = document.createElement('div');
  content.className = 'hero-content';

  content.append(title, subtitle, button);

  normalizeHeroHeadings(content);

  if (image) {
    block.replaceChildren(image, content);
  } else {
    block.replaceChildren(content);
  }
}