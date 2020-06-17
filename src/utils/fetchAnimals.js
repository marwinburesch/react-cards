export default async function fetchAnimals() {
  return fetch("https://api.jsonbin.io/b/5ee9c253ccc9877ac37d56e1")
    .then((response) => response.json())
    .then((data) => data.animals);
}
