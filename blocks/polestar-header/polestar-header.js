const LOGO = '/icons/logo.svg';
const LOCATION = '/icons/location.svg';
const GLOBE = '/icons/globe.svg';

export default function decorate(block) {
  const rows = [...block.children];

  if (rows.length < 2) return;

  // Remove authoring labels row
  rows[0].remove();

  // Get content row
  const [logoCol, navCol, actionCol] = [...rows[1].children];

  // Clear block
  block.textContent = '';
  block.classList.add('header');

  /* ---------------- Logo ---------------- */

  logoCol.classList.add('header-logo');

  const logoLink = logoCol.querySelector('a');

  if (logoLink) {
    logoLink.innerHTML = `
      <img src="${LOGO}" alt="Polestar">
    `;
  }

  /* ---------------- Navigation ---------------- */

  navCol.classList.add('header-nav');

  /* ---------------- Action Icons ---------------- */

  actionCol.classList.add('header-actions');

  const actionLinks = [...actionCol.querySelectorAll('a')];

  actionLinks.forEach((link) => {
    const label = link.textContent.trim().toLowerCase();

    if (label === 'location') {
      link.innerHTML = `
        <img src="${LOCATION}" alt="Location">
      `;
    }

    if (label === 'global') {
      link.innerHTML = `
        <img src="${GLOBE}" alt="Global">
      `;
    }
  });

  /* ---------------- Right Wrapper ---------------- */

  const rightWrapper = document.createElement('div');
  rightWrapper.className = 'header-right';

  rightWrapper.append(
    navCol,
    actionCol,
  );

  /* ---------------- Append ---------------- */

  block.append(
    logoCol,
    rightWrapper,
  );
}