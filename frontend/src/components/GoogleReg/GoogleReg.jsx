const BASE_URL = `http://localhost:5000/api`;

const AuthGoogle = () => {
  return (
    <>
      <a href={`${BASE_URL}/auth/google`}>Google</a>
    </>
  );
};

export default AuthGoogle;
