const reserveList = (props) => {
    return(
        <div>
             <ul>
                <li>Comapny Name: {props.companyName}</li>
                <li>Perishable: {props.perishable}</li>
                <li>Expiration Date: {props.expDate}</li>
                <li>Availablity: {props.availability}</li>
                <li>Address: {props.address}</li>
                  <ul>
                  {props.allergies.options.map(theseAllergies => 
                  <li key={theseAllergies}>{theseAllergies}</li>  
                  )}
                  </ul>
                <li>Other Allergy Information: {props.allergies.otherInfo ? props.allergies.otherInfo : 'None'}</li>
              </ul> 
        </div>
    )
}

export default reserveList;