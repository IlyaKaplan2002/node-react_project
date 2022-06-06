const getAuthHeader = token => ({
  headers: { Authorization: `Bearer ${token}` },
});

export default getAuthHeader;
