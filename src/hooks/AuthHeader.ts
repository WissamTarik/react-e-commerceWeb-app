export const AuthHeader = () => ({
    headers: {
      token: localStorage.getItem('token') || '',
    }
  });