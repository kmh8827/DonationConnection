/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

export default {
    // Get user informaiton
    getUser: () => {
        return axios.get('/auth/user');
    },
    // Log the user out
    logout: () => {
        return axios.post('/auth/logout');
    },
    // Log the user in
    login: (username, password) => {
        return axios.post('/auth/login', { username, password });
    },
    // Allows a new user to register
    signup: (userData) => {
        return axios.post('/auth/signup', userData);
    }
};