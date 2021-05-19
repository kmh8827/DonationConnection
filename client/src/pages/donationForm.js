import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Slide from '@material-ui/core/Slide';
import API from "../utils/API";
import { CurrentUserContext } from "../context/currentUser";
import Header from "../components/header";
import "../assets/scss/form.scss";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const Form = () => {
    const user = useContext(CurrentUserContext);

    const [checked, setChecked] = useState(true);
    const [disable, setDisable] = useState(true);
    const clickedNextP1 = true; 
    const clickedNextP2 = true;
    const clickedPrevP2 = true;
    const clickedPrevP3 = true;

    const [donation, setDonation] = useState({
        product: '',
        companyName: '',
        perishable: 'true',
        expDate: '',
        availability: 'true',
        address: '',
        specialInstructions: '',
        allergies: '',
        quantity: '',
        userId: '',
        reservedBy: '',
    });

    const [business, setBusiness] = useState({
        businessInfo: '',
        donationInfo: 'd-none',
        foodInfo: 'd-none',
    });

    const [open, setOpen] = React.useState(false);

    const history = useHistory();

    useEffect(() => {
         (donation.product !== "" && donation.companyName !== "" &&
            donation.address !== "" && donation.allergies !== "" &&
            donation.quantity !== 0) 
         ? setDisable(false)
         : setDisable(true)
    }, [donation])

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleInputChange = event => {
        console.log(donation);
        setDonation({
            ...donation,
            [event.target.name]: event.target.value,
            userId: user.user._id
        });
    };

    const handleClick = () => {

        if (checked === true) {
            setChecked(false);
            setDonation({
                ...donation,
                perishable: 'false'
            });
        }
        if (checked === false) {
            setChecked(true);
            setDonation({
                ...donation,
                perishable: 'false'
            });
        }
    }

    const handleSubmit = event => {
        handleClose();
        // window.location.reload();
        API.newDonation(donation)
            .catch(err => console.log(err));
        history.push('/dashboard')
    };

    const handlePreviousTwo = (event) => {
        event.preventDefault();
        const previousP2 = clickedPrevP2;

        if (previousP2 === true) {
            setBusiness({
                businessInfo: '',
                donationInfo: 'd-none',
                foodInfo: 'd-none'
            })
        }
    }

    const handlePreviousThree = (event) => {
        event.preventDefault();
        const previousP3 = clickedPrevP3;

        if (previousP3 === true) {
            setBusiness({
                businessInfo: 'd-none',
                donationInfo: '',
                foodInfo: 'd-none'
            })
        }
    }

    const handleNextOne = (event) => {
        event.preventDefault();
        const nextP1 = clickedNextP1;

        if (nextP1 === true) {
            setBusiness({
                businessInfo: 'd-none',
                donationInfo: '',
                foodInfo: 'd-none'
            })
        }
    }
    const handleNextTwo = (event) => {
        event.preventDefault();
        const nextP2 = clickedNextP2;

        if (nextP2 === true) {
            setBusiness({
                businessInfo: 'd-none',
                donationInfo: 'd-none',
                foodInfo: ''
            })
        }
    }

    return (

        <div>
            <Header />
            <div className="container loginContainer mb-5 w-50 h-50">
                <div className="row mb-2 ml-1">
                    <h2 className="font">Donate</h2>
                </div>
                <form className="pb-5">
                    <div className={business.businessInfo}>
                        <div className="form-group">
                            <label className="form-label">Company Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Ex. Papa John's"
                                id="companyName"
                                name="companyName"
                                value={donation.companyName}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group mb-4">
                            <label className="form-label">Address:</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Ex. 1003 main st Newbern NC"
                                id="address"
                                name="address"
                                value={donation.address}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div
                            disabled={disable}
                            type="button"
                            className="btn btn-info float-right nextBtn"
                            value={clickedNextP1}
                            onClick={handleNextOne}
                        >Next</div>
                    </div>

                    <div className={business.donationInfo}>
                        <div className="form-group mb-4">
                            <label className="form-label">Product:</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Ex. cheese pizzas"
                                id="Product"
                                name="product"
                                value={donation.product}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="ml-4 form-group mb-4">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                name="checked"
                                value=""
                                id="perishableCheck"
                                onChange={handleClick}
                            />
                            <label className="form-check-label">Perishable</label>
                        </div>
                        {/* hides expiration date unless perishable is checked */}
                        <div className={checked === true ? 'd-none' : ''}>
                            <div className="form-group mb-4">
                                <label className="form-label">Expiration Date:</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="expiration"
                                    name="expDate"
                                    value={donation.expDate}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div
                            type="button"
                            name="previous"
                            className="btn btn-light float-left previousBtn"
                            value={clickedPrevP2}
                            onClick={handlePreviousTwo}
                        >Previous</div>
                        <div
                            disabled={disable}
                            type="button"
                            className="btn btn-info float-right nextBtn"
                            value={clickedNextP2}
                            onClick={handleNextTwo}
                        >Next</div>
                    </div>

                    <div className={business.foodInfo}>
                        <div className="form-group mb-4">
                            <label className="form-label">Quantity:</label>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="#"
                                id="quantity"
                                name="quantity"
                                value={donation.quantity}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group mb-4">
                            <label className="form-label">Special Instructions:</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Ex. keep frozen until ready to eat"
                                id="specInstructions"
                                name="specialInstructions"
                                value={donation.specialInstructions}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group mb-4">
                            <label className="form-label">Allergies:</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Ex. Peanuts"
                                id="allergies"
                                name="allergies"
                                value={donation.allergies}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div
                            type="button"
                            name="previous"
                            className="btn btn-light float-left previousBtn"
                            value={clickedPrevP2}
                            onClick={handlePreviousThree}
                        >Previous</div>
                        <div
                            // disabled={disable}
                            type="button"
                            className="btn btn-success float-right submit"
                            onClick={handleClickOpen}
                        >Donate!</div>
                        <Dialog
                            open={open}
                            TransitionComponent={Transition}
                            keepMounted
                            onClose={handleClose}
                            aria-labelledby="alert-dialog-slide-title"
                            aria-describedby="alert-dialog-slide-description"
                        >
                            <DialogContent>
                            <DialogContentText className="m-4" id="alert-dialog-slide-description">
                                Please confirm everything you've entered is correct:
                            </DialogContentText>
                            <DialogContent className="row ">Company Name:<p className="ml-4 confirmItem">{donation.companyName}</p></DialogContent>
                            <DialogContent className="row ">Address:<p className="ml-4 confirmItem">{donation.address}</p></DialogContent>
                            <DialogContent className="row ">Product:<p className="ml-4 confirmItem">{donation.product}</p></DialogContent>
                            <DialogContent className="row ">Expiration Date:<p className="ml-4 confirmItem">{donation.expDate}</p></DialogContent>
                            <DialogContent className="row ">Quantity:<p className="ml-4 confirmItem">{donation.quantity}</p></DialogContent>
                            <DialogContent className="row ">Special Instructions:<p className="ml-4 confirmItem">{donation.specialInstructions}</p></DialogContent>
                            <DialogContent className="row ">Allergies:<p className="ml-4 confirmItem">{donation.allergies}</p></DialogContent>
                            </DialogContent>
                            <DialogActions>
                            <Button onClick={handleClose} color="primary">
                                Go Back
                            </Button>
                            <Button onClick={handleSubmit} disabled={disable} color="primary">
                                Confirm
                            </Button>
                            </DialogActions>
                        </Dialog>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form;