import axios from "axios";

const API = {
    getDonations: () => {
        return axios.get('/api/donations/receive')
    },
    reserveDonation: () => {
        return axios.post('/api/donations/receive')
    },
    myDonations: (id) => {
        return axios.get('api/donations/give')
    },
    newDonation: () => {
        return axios.get('api/donations/give')
    },
    removeDonation: () => {
        return axios.get('api/donations/give')
    }
};

export default API;