export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const int8Array = new DataView(buffer);
  try {
    int8Array.setInt8(position, value);
  } catch (e) {
    throw new Error('Position outside range');
  }
  return int8Array;
}
