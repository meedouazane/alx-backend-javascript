export default function getSumOfHoods(initialNumber = 34, expansion1989 = 89, expansion2019 = 19) {
  /* eslint-disable no-param-reassign */
  if (expansion1989 === undefined) {
    expansion1989 = 89;
  }

  if (expansion2019 === undefined) {
    expansion2019 = 19;
  }
  return initialNumber + expansion1989 + expansion2019;
  /* eslint-disable no-param-reassign */
}