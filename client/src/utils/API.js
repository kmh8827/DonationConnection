/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
    completeDonations: (id) => {
        return axios.post('api/donations/complete/' + id)
    },
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
    },
    // Gets all of a users donations
    myDonations: (userId) => {
        console.log('MYDONATIONS', userId);
        return axios.post('api/donations/userDonations', userId)
    },
};