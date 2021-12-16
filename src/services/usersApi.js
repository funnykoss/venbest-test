import axios from 'axios';

axios.defaults.baseURL = 'https://venbest-test.herokuapp.com/';

export const getUsers = async () => {
  try {
    const response = await axios.get('./users');
    return response;
  } catch (error) {
    console.log(error);
  }
};
