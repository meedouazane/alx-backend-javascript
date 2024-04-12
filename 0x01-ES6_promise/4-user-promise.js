export default function signUpUser(firstName, lastName) {
  const obj = {
    firstName,
    lastName,
  };
  return new Promise((resolve) => {
    resolve(obj);
  });
}
