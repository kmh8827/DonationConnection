import axios from "axios";

export default {
    getDonations: () => {
        return axios.get('/api/donations/receive')
    },
    reserveDonations: (id) => {
        return axios.post('/api/donations/receive/' + id)
    },
    newDonation: (donation) => {
        return axios({ 
            method: 'POST',
            url: 'api/donations/give',
            data: donation
        })
    }
};