import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const promises = [createUser(), uploadPhoto()];
  Promise.all(promises).then((results) => {
    const [userResult, photoResult] = results;
    const Name = `${userResult.firstName} ${userResult.lastName}`;
    const { body } = photoResult;
    console.log(`${body} ${Name}`);
  }).catch((e) => console.log(e));
}
