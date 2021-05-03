import axios from "axios";

export default {
    getDonations: () => {
        return axios.get('/api/receive')
    },
    reserveDonation: () => {
        return axios.post('/api/receive')
    },
    myDonations: (id) => {
        return axios.get('api/give')
    },
    newDonation: () => {
        return axios.get('api/give')
    },
    removeDonation: () => {
        return axios.get('api/give')
    }
};