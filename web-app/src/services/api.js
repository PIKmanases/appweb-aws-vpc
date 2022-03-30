const axios = require('axios');

const API_URI = 'http://localhost:5000';

export function getData(){
    return axios.get(`${API_URI}/`);
}