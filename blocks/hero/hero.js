const URL_PATTERN = /^(https?:\/\/|www\.)/i;

function isUrlLike(text) {
  return URL_PATTERN.test(text.trim());
}

export default function decorate(block) {
  console.log(block)
  const rows = [...block.children];
  if (!rows.length) return;

  // First row = image
  const imageRow = rows.shift();
  imageRow.classList.add('hero-image');

  const contentWrapper = document.createElement('div');
  contentWrapper.className = 'hero-content';

  let ctaLabel = null;
  let ctaUrl = null;

  rows.forEach((row, index) => {
    const text = row.textContent.trim();
      console.log(index, row.textContent.trim());

    // URL row (next to last row)
    if (isUrlLike(text) && index > 0) {
      ctaUrl = text.startsWith('http') ? text : `https://${text}`;
      return;
    }

    // Previous row becomes CTA label
    if (
      index < rows.length - 1 &&
      isUrlLike(rows[index + 1]?.textContent.trim() || '')
    ) {
      ctaLabel = text;
      return;
    }

    const heading = row.querySelector('h2,h3,h4,h5,h6');
    if (heading) {
      heading.classList.add('hero-subtitle');
    }

    contentWrapper.append(...row.children);
  });
console.log(ctaLabel);
    console.log(ctaUrl)
  // Build CTA button
  if (ctaLabel && ctaUrl) {
    console.log(ctaLabel);
    console.log(ctaUrl)
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container';

    const button = document.createElement('a');
    button.href = ctaUrl;
    button.className = 'hero-cta';

    button.innerHTML = `
      <span>${ctaLabel}</span>

      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        role="presentation">

        <polyline
          points="8 4 16 12 8 20"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round">
        </polyline>

      </svg>
    `;

    buttonContainer.append(button);
    contentWrapper.append(buttonContainer);
  }

  block.textContent = "";

  block.append(imageRow);
  block.append(contentWrapper);
}