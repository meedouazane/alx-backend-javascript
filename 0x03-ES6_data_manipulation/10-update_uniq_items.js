export default function updateUniqueItems(map) {
  for (const [item, quantity] of map) {
    if (quantity === 1) {
      try {
        map.set(item, 100);
      } catch (e) {
        throw new Error('Cannot process');
      }
    }
  }
  return map;
}
