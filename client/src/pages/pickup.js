import React, { useState, useEffect } from 'react';
import { GridList } from '@material-ui/core/';
import Header from '../components/header'
import API from '../utils/API';
import ReserveCard from '../components/reserveCard';
import '../assets/scss/pickup.scss';

const Pickup = () => {
    const [donations, setDonations] = useState([]);

    useEffect(() => {
        loadPickups();
    }, [])

    const loadPickups = () => {
        API.getDonations()
            .then(res => {
                let donationList = res.data;
                // console.log(donationList);
                const formattedDonations = donationList.map(d => ({...d, isOpened: false}));
                setDonations(formattedDonations);
            })
            .catch(err => console.log(err));
    };

    const reservePickup = (id) => {
        API.reserveDonations(id)
            .then(res => {
                // alert("available")
                loadPickups()
            })
            .catch(err => console.log(err));
    };

    const handleOpenCard = (id) => {
        const closed = donations.map(d => ({...d, isOpened: false}));
        const newOpened = closed.map(c => {
            const thisClosed = c
            if(thisClosed._id === id) {
                thisClosed.isOpened = true;
            }
            return thisClosed;
        })
                
        setDonations(newOpened)    
      }

    const reserved = donations.availability;

    const gridTileStyle = {
        position: 'center',
        width: '100%',
        minHeight: '400px',
        overflow: 'hidden',
        height: '100% !important',
        justifyContent: 'center'
    }

    return (
        <div className="bg-image-pickup">
            <Header />
            <div className="pickupContainer">
                <GridList style={gridTileStyle}>
                    {/* {console.log(donations, 'donations')} */}
                    {/* need next and previous buttons for different slice(x, x) */}
                    
                    {donations && donations.slice(6, 12).map(thisDonation => {
                        // console.log(thisDonation._id)
                     return   (
                         
                        <ReserveCard
                        isOpened={thisDonation.isOpened}
                        handleOpenCard={handleOpenCard}
                        key={thisDonation._id}
                        product={thisDonation.product}
                        companyName={thisDonation.companyName}
                        perishable={thisDonation.perishable}
                        expDate={thisDonation.expDate}
                        availability={thisDonation.availability}
                        address={thisDonation.address}
                        allergies={thisDonation.allergies}
                        id={thisDonation._id}
                        loadPickups={loadPickups}
                        reserved={reserved}
                        reservePickup={reservePickup}
                    />
                    
                    )}

                    )}
                </GridList>
            </div>
            <div className="row fixed-bottom justify-content-center p-2">
                <div
                    type="button"
                    className="btn btn-light mr-4 previousBtn"
                // value={this.state.clickedPreviousP2}
                // onClick={this.handlePrevP2}
                >Previous</div>
                <div
                    // disabled={this.state.disable}
                    type="button"
                    className="btn btn-info ml-4 nextBtn"
                // value={this.state.clickedNextP2}
                // onClick={this.handleNextP2}
                >Next</div>
            </div>
        </div>
    );
}

export default Pickup;