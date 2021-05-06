const reserveList = (props) => {
    return(
        <div>
             <ul>
                <li>Comapny Name: {props.companyName}</li>
                <li>Perishable: {props.perishable}</li>
                <li>Expiration Date: {props.expDate}</li>
                <li>Availablity: {props.availability}</li>
                <li>Address: {props.address}</li>
                <li>Allergies: {props.allergies}</li>
                <li>Other Allergy Information: {props.allergies.otherInfo ? props.allergies.otherInfo : 'None'}</li>
              </ul> 
        </div>
    )
}

export default reserveList;