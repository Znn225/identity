import { TIERS } from './app.js?v=3';

export function getTierIndexFromSearch(search) {
  const params = new URLSearchParams(search);
  const values = params.getAll('tier');
  if (values.length !== 1 || !/^(?:0|[1-9]\d*)$/.test(values[0])) return null;

  const index = Number(values[0]);
  return Number.isSafeInteger(index) && index < TIERS.length ? index : null;
}

if (typeof document !== 'undefined') {
  const tierIndex = getTierIndexFromSearch(window.location.search);
  if (tierIndex === null) {
    window.location.replace('./');
  } else {
    const tier = TIERS[tierIndex];
    const resultImage = document.querySelector('#result-image');
    resultImage.src = tier.image;
    resultImage.alt = `${tier.identity}，${tier.grade}，名义年俸：${tier.stipend}。${tier.verdict}`;
    document.querySelector('#again').addEventListener('click', () => {
      window.location.assign('./');
    });
  }
}
