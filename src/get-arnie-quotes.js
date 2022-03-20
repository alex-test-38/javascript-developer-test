const { createTestScheduler } = require('jest');
const { httpGet } = require('./mock-http-interface');

const getArnieQuotes = async (urls) => {
  // TODO: Implement this function.
  // return results;
  const httpRequests = urls.map(url => httpGet(url))
  const responses = await Promise.all(httpRequests)
  const results = responses.map(res => {
    const value = JSON.parse(res.body)
    if (res.status === 200) {
      return { 'Arnie Quote': value.message }
    } else {
      return { 'FAILURE': value.message }
    }
  })
  return results
}

module.exports = {
  getArnieQuotes,
};
