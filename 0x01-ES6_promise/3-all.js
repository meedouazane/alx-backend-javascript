import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise
    .all([createUser(), uploadPhoto()])
    .then((result) => console.log(`${result[1].body} ${result[0].firstName} ${result[0].lastName}`))
    .catch(() => console.log('Signup system offline'));
}
