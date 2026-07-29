export default function decorate(block) {
  block.querySelectorAll('p a').forEach((link) => {
    link.insertAdjacentHTML(
      'beforeend',
      `
      <span class="arrow-wrapper">

        <svg class="cta-icon arrow arrow-current" viewBox="0 0 24 24" aria-hidden="true">
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

        <svg class="cta-icon arrow arrow-next" viewBox="0 0 24 24" aria-hidden="true">
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
      `
    );
  });
}