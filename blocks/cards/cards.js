// import { createOptimizedPicture } from '../../scripts/aem.js';

// export default function decorate(block) {
//   /* change to ul, li */
//   const ul = document.createElement('ul');
//   [...block.children].forEach((row) => {
//     const li = document.createElement('li');
//     while (row.firstElementChild) li.append(row.firstElementChild);
//     [...li.children].forEach((div) => {
//       if (div.children.length === 1 && div.querySelector('picture')) div.className = 'cards-card-image';
//       else div.className = 'cards-card-body';
//     });
//     ul.append(li);
//   });
//   ul.querySelectorAll('picture > img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
//   block.replaceChildren(ul);
// }
export default function decorate(block) {

  block.querySelectorAll('p a').forEach((link) => {

    link.insertAdjacentHTML(
      'beforeend',
      `
      <svg
        class="cta-icon"
        viewBox="0 0 24 24"
        aria-hidden="true">

        <polyline
          points="8 4 16 12 8 20"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round">
        </polyline>

      </svg>
      `
    );

  });

}