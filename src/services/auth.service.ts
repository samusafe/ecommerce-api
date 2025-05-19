export const login = async (
  username: string,
  password: string,
): Promise<string> => {
  if (username === 'admin' && password === '1234') {
    // generate a JWT token
    return 'fake-jwt-token';
  }

  throw new Error('Invalid credentials');
};

export const register = async (
  username: string,
  password: string,
): Promise<void> => {
  console.log(`User ${username} registado com sucesso.`);
};
