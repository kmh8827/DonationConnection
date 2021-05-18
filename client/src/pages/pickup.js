import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import { GridList } from '@material-ui/core/';
import Header from '../components/header'
import API from '../utils/API';
import ReserveCard from '../components/reserveCard';
import '../assets/scss/pickup.scss';



const Pickup = () => {

    const [slicePosition, setPosition] = useState({ start: 0, end: 6 });

    const [donations, setDonations] = useState([]);

    const [buttonHide, setButtonHide] = useState({display: ''});

    useEffect(() => {
        loadPickups();
        const onScroll = function () {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
              setButtonHide({display: ''})
            } 
            else {
                setButtonHide({display: 'none'})
            }
         }
         window.addEventListener('scroll', onScroll)
         return () => window.removeEventListener('scroll', onScroll)
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
            <div style={buttonHide} className="row fixed-bottom justify-content-center buttonRow p-2">
                
                {slicePosition.start - 6 < 0
                ? <Button disabled={true} className="btn btn-light mr-4 previousBtn">Previous</Button>
                : <Button 
                disabled={false}
                type="button"
                className="btn btn-light mr-4 previousBtn"
                onClick={() => { setPosition({ start: slicePosition.start - 6, end: slicePosition.end - 6 }); }}
            >Previous</Button>
                }

                {slicePosition.start + 6 > donations.length
                ? <Button disabled={true} className="btn btn-info ml-4 nextBtn">Next</Button>
                : <Button
                disabled={donations.length ? false : true }
                type="button"
                className="btn btn-info ml-4 nextBtn"
                onClick={() => { setPosition({ start: slicePosition.start + 6, end: slicePosition.end + 6 }); }}
            >Next</Button>
                }
            </div>
        </div>
    );
}

export default Pickup;