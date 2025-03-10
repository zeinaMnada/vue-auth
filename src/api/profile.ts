import api from './index';

export const getUserProfile = async () => {
  const response = await api.get('/users/profile');
  if (response.data) {
    return response.data;
  } else {
    return { error: 'Fetch user profile failed.'};
  }
};