const reserveList = (props) => {
    return(
        <ul className="infoList">
            <li>Comapny Name: {props.companyName}</li>
            <li>Perishable: {props.perishable}</li>
            <li>Expiration Date: {props.expDate}</li>
            <li>Availablity: {props.availability}</li>
            <li>Address: {props.address}</li>
            <li>Allergies: {props.allergies}</li>
        </ul> 
        
    )
}

export default reserveList;