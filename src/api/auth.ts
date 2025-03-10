import api from './index';
import { setToken, removeToken } from "../utils/cookie";
import { User } from '@/types/user';

export const signUp = async (user: User) => {
  try {
    const response = await api.post('/auth/signup', user);
    if (response.status === 201) {
      setToken(response.data.accessToken);
      return response.data;
    } else {
      return { error: 'Sign Up failed.' };
    }
  } catch (error) {
    return { error: 'Sign Up failed. Please try again.' };
  }
};

export const signIn = async (credentials: { email: string; password: string }) => {
  try {
    const response = await api.post('/auth/signin', credentials);
    if (response.status === 200) {
      setToken(response.data.accessToken);
      return response.data;
    } else {
      return { error: 'Sign In failed. Please check your credentials.' };
    }
  } catch (error) {
    return { error: 'Sign In failed. Please try again.' };
  }
};

export const signOut = async () => {
  try {
    await api.post('/auth/signout');
    removeToken();
  } catch (error) {
    console.error('Sign Out failed:', error);
  }
};