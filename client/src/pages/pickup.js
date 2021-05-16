import React, { useState, useEffect } from 'react';
import { GridList } from '@material-ui/core/';
import Header from '../components/header'
import API from '../utils/API';
import ReserveCard from '../components/reserveCard';
import '../assets/scss/pickup.scss';

// const nextPage = () => {
//     // setState({ start: this.state.start + 6 });
//     console.log("button clicked")
// }

const Pickup = () => {

    // const [state, setState] = useState({ start: 0, show: true })

    const [slicePosition, setState] = useState({ start: 0, end: 6, show: true });


    const [donations, setDonations] = useState([]);

    useEffect(() => {
        loadPickups();
    }, [])

    const loadPickups = () => {
        API.getDonations()
            .then(res => {
                let donationList = res.data;
                // console.log(donationList);
                const formattedDonations = donationList.map(d => ({ ...d, isOpened: false }));
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
        const closed = donations.map(d => ({ ...d, isOpened: false }));
        const newOpened = closed.map(c => {
            const thisClosed = c
            if (thisClosed._id === id) {
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

                    {/* need next and previous buttons for different slice(x, x) */}

                    {donations && donations.slice(slicePosition.start, slicePosition.end).map(thisDonation => {
                        // console.log(thisDonation._id)
                        return (

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

                        )
                    }

                    )}
                </GridList>
            </div>
            <div className="row fixed-bottom justify-content-center p-2">
                <div
                    type="button"
                    className="btn btn-light mr-4 previousBtn"
                    onClick={() => { setState({ start: slicePosition.start - 6, end: slicePosition.end - 6 }); }}
                >Previous</div>
                <div
                    disabled={ donations === null ? this.state.disable : ''}
                    type="button"
                    className="btn btn-info ml-4 nextBtn"
                    onClick={() => { setState({ start: slicePosition.start + 6, end: slicePosition.end + 6 }); }}
                >Next</div>
            </div>
        </div>
    );
}

export default Pickup;