const removeItemAtIndex = (arr, idx) => {
  return [...arr.slice(0, idx), ...arr.slice(idx + 1)];
};

const replaceItemAtIndex = (arr, idx, newItem) => {
  return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
};

export { removeItemAtIndex, replaceItemAtIndex };
