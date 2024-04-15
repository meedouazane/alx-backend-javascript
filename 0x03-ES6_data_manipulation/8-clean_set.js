export default function cleanSet(set, startString) {
  let string = "";
  for (const value of set) {
    if (value.startsWith(startString)) {
      string += value + '-';
    } else {
      string = "";
    }
  }
  return string.slice(0, -2);
}
