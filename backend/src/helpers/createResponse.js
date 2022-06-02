const createResponse = (code, data) => ({
  status: 'success',
  code,
  data,
});

module.exports = createResponse;
