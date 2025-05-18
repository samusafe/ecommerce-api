export const login = async (
  username: string,
  password: string,
): Promise<string> => {
  if (username === 'admin' && password === '1234') {
    // Aqui normalmente geras um JWT
    return 'fake-jwt-token';
  }

  throw new Error('Invalid credentials');
};

export const register = async (
  username: string,
  password: string,
): Promise<void> => {
  // Aqui normalmente crias o user na base de dados
  console.log(`User ${username} registado com sucesso.`);
};
