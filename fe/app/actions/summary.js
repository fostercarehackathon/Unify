import * as summaryApi from 'api/summary';

export const loadSummary = () => ({
  type: 'LOAD_SUMMARY',
  payload: summaryApi.loadSummary()
});
