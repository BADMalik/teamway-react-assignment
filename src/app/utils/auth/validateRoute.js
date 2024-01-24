export const ValidateAuthState = () => {
  
  const token = localStorage.getItem("loginUser");

  return token ? !!token : !!!token;
};

