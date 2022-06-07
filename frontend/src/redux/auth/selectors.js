const getToken = state => state.auth.token;
const getIsLoggedIn = state => Boolean(state.auth.token);
const getUser = state => state.auth.user;

const selectors = { getToken, getIsLoggedIn, getUser };

export default selectors;
