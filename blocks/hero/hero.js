export default function decorate(block) {
  const [image, title, subtitle, ctaRow] = [...block.children];

  if (!image || !title || !subtitle || !ctaRow) {
    return;
  }

  image.classList.add('hero-image');

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
      <path
        d="M3 12H19"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="square">
      </path>
      <path
        d="M13 6L19 12L13 18"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="square"
        stroke-linejoin="miter">
      </path>
    </svg>

    <svg class="arrow arrow-next" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M3 12H19"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="square">
      </path>
      <path
        d="M13 6L19 12L13 18"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="square"
        stroke-linejoin="miter">
      </path>
    </svg>
  </span>
`;

  const content = document.createElement('div');
  content.className = 'hero-content';

  content.append(title, subtitle, button);

  block.replaceChildren(image, content);
}