export default function getResponseFromAPI() {
  const promise = new Promise((resolve) => {
    resolve('Stuff worked!');
  });
  return promise;
}
