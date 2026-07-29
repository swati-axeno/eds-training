export default function decorate(block) {
  const [headingRow, descriptionRow, ctaRow] = [...block.children];

  if (!headingRow || !descriptionRow || !ctaRow) {
    return;
  }

  block.classList.add('charging');

  const left = document.createElement('div');
  left.className = 'charging-left';

  const right = document.createElement('div');
  right.className = 'charging-right';

  // Create the large arrow
  const icon = document.createElement('span');
  icon.className = 'charging-icon';
  icon.innerHTML = `
   <svg
  viewBox="0 0 64 64"
  aria-hidden="true">

  <path
    d="M16 48L48 16"
    fill="none"
    stroke="currentColor"
    stroke-width="3"
    stroke-linecap="round"/>

  <path
    d="M20 16H48"
    fill="none"
    stroke="currentColor"
    stroke-width="3"
    stroke-linecap="round"/>

  <path
    d="M48 16V44"
    fill="none"
    stroke="currentColor"
    stroke-width="3"
    stroke-linecap="round"/>

</svg>
`;


  left.append(icon, ...headingRow.children);

  right.append(...descriptionRow.children);

  const link = ctaRow.querySelector('a');

  if (link) {
    link.classList.add('charging-cta');

    link.insertAdjacentHTML(
      'beforeend',
      `
      <span class="arrow-wrapper">

        <svg class="arrow arrow-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 12H19" fill="none" stroke="currentColor" stroke-width="2"/>
          <path d="M13 6L19 12L13 18" fill="none" stroke="currentColor" stroke-width="2"/>
        </svg>

        <svg class="arrow arrow-next" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 12H19" fill="none" stroke="currentColor" stroke-width="2"/>
          <path d="M13 6L19 12L13 18" fill="none" stroke="currentColor" stroke-width="2"/>
        </svg>

      </span>
      `
    );

    right.append(ctaRow);
  }

  block.replaceChildren(left, right);
}