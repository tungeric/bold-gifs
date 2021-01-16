/**
 * in-place shuffle. Grab a random element remaining and place it in the back
 * the unshuffled element in the back is then swapped to the front
 */
export function shuffle(array) {
  var m = array.length, t, i;

  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}

export async function sendGetRequest(url) {
  const response = await fetch(url);
  const body = await response.json();
  if (response.status !== 200) throw Error(body.message);
  return body;
};