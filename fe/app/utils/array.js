export function removeFromArray(arr, item) {
  const index = arr.indexOf(item);

  if (index === -1) {
    return [...arr];
  }

  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

export function toggleItemInArray(arr, item) {
  const index = arr.indexOf(item);

  if (index === -1) {
    return [...arr, item];
  }

  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

export function isStrictEqual(arr1, arr2) {
  return arr1.length === arr2.length
    && arr1.every((item, i) => item === arr2[i]);
}
