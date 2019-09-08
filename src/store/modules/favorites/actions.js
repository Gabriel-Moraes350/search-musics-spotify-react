export function addFavorite() {
  return {
    type: '@favorites/NEW',
    number: 1,
  };
}
export function readFavorites() {
  return {
    type: '@favorites/READ',
    number: 0,
  };
}
