import axios from "axios";

export default {
    // Gets a list of all Donations
    getDonations: () => {
        return axios.get('/api/donations/receive')
    },
    // Allows a user to reserve a donation
    reserveDonations: (id) => {
        return axios.post('/api/donations/receive/' + id)
    },
    // Allows a user to create a donation
    newDonation: (donation) => {
        return axios({ 
            method: 'POST',
            url: 'api/donations/give',
            data: donation
        })
    }
};