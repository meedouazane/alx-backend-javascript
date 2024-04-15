export default function cleanSet(set, startString) {
  let string = '';
  for (const value of set) {
    if (value.startsWith(startString)) {
      const st = value.replace(startString, '');
      string += `${st}-`;
    }
  }
  return string.slice(0, -1);
}
