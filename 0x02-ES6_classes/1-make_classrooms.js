import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const room10 = new ClassRoom(10);
  const room20 = new ClassRoom(20);
  const room34 = new ClassRoom(34);
  return [room10, room20, room34];
}
