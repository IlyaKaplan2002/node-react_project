const getToken = state => state.auth.token;
const getRefreshToken = state => state.auth.refreshToken;
const getIsLoggedIn = state => Boolean(state.auth.token);
const getUser = state => state.auth.user;

const selectors = { getToken, getRefreshToken, getIsLoggedIn, getUser };

export default selectors;
