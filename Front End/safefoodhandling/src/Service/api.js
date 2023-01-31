import axios from 'axios';

// const usersUrl = 'http://localhost:3003/users';
const usersUrl = 'http://localhost:8080';

export const addUser = async (user) => {
    return await axios.post(`${usersUrl}/signup`, user);
}