export default function shuffle(arr) {
  let tempArray = [];
  while (tempArray.length < arr.length) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const randomMember= arr[randomIndex];
    if (!tempArray.includes(randomMember)) {
      tempArray.push(randomMember);
    }
  }
  return tempArray;
}

