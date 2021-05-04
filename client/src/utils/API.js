import axios from "axios";

export default {
    getDonations: () => {
        return axios.get('/api/donations/receive')
    },
    reserveDonations: (id) => {
        return axios.post('/api/donations/receive/' + id)
    },
    myDonations: () => {
        return axios.get('api/donations/give')
    },
    newDonation: () => {
        return axios.get('api/donations/give')
    },
    removeDonation: (id) => {
        return axios.get('api/donations/give' + id)
    }
};