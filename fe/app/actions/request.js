export function load() {
  return {
    type: 'REQUEST_LOAD'
  };
}

export function finishLoading() {
  return {
    type: 'REQUEST_FINISH_LOADING'
  };
}
