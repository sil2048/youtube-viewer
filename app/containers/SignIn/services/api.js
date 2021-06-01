export default {
  login: ({ email, password }) => {
    const isValid = email === 'admin@email.com' && password === 'admin';
    if (isValid) {
      const data = {
        token: 'thisistermauthenticationtoken',
        message: 'Login success!',
      };
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(data);
        }, 1500);
      });
    }
    const error = { response: { message: 'Invalid email or password' } };
    throw error;
  },
};
