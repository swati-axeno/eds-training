function decorateAccordion(el) {
  const titles = el.querySelectorAll(':scope > div:nth-child(odd)');
  titles.forEach((title) => {
    title.classList.add('item-title');

    title.querySelector(':scope > div:last-of-type').remove();

    title.nextElementSibling.classList.add('item-content');

    title.addEventListener('click', () => {
      title.classList.toggle('open');
    });
  });
}

const els = document.querySelectorAll('.accordion');
els.forEach((el) => {
  decorateAccordion(el);
});