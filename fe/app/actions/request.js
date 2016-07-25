export function load() {
  return {
    type: 'REQUEST_LOAD'
  };
}

export function error() {
  return {
    type: 'REQUEST_ERROR'
  };
}

export function finishLoading() {
  return {
    type: 'REQUEST_FINISH_LOADING'
  };
}
