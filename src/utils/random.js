export const getRandomNumberBetween = (min, max) => {
  let randomNum = Math.random () * (max - min) + min;
  return Math.round(randomNum);
};

export default getRandomNumberBetween;