export default function decorate(block) {
  [...block.children].forEach((item) => {
    const cols = [...item.children];

    const text = cols[0]?.textContent.trim();
    const href = cols[1]?.textContent.trim();

    if (!text || !href) return;

    const link = document.createElement('a');
    link.href = href;
    link.className = 'cta-item';

  link.innerHTML = `
  <span>${text}</span>

  <svg
    class="cta-icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    role="presentation">

    <polyline
      points="8,4 16,12 8,20"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round">
    </polyline>

  </svg>
`;

    item.replaceWith(link);
  });
}