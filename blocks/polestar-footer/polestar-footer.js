const ARROW_ICON = `
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

const GLOBE = '/icons/globe.svg';

export default function decorate(block) {
  const columns = [...block.children];

  if (!columns.length) return;

  block.classList.add('footer-top');

  // Newsletter
  const newsletter = columns.shift();
  newsletter.classList.add('footer-newsletter');

  const button = newsletter.querySelector('a');
  if (button) {
    button.classList.add('footer-button');
    button.insertAdjacentHTML('beforeend', ARROW_ICON);
  }

  // Every remaining column is a footer nav
  columns.forEach((column) => {
    column.classList.add('footer-nav');
  });
  /* ---------------- Global ---------------- */

const globalLink = document.querySelector(
  '.polestar-footer-container .default-content-wrapper p:last-child a',
);
console.log(globalLink)
if (globalLink) {
  globalLink.classList.add('footer-global');

  globalLink.innerHTML = `
    <img src="${GLOBE}" alt="Global">
    <span>Global</span>
  `;
}
}