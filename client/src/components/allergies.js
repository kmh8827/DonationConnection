import React, { Component} from 'react';
import "../assets/scss/form.scss";


class Allergic extends Component {
    state = {
        allergy: ""
    }
    render() {
        return (
            <div>
                <h3 className="h3">Allergies</h3>
                <select>
                    <option value="egg">Egg</option>
                    <option value="dairy">Dairy</option>
                    <option value="nuts">Nuts</option>
                    <option value="wheat">Wheat</option>
                    <option value="fish">Fish</option>
                    <option value="sesame">Sesame</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }

}

export default Allergic;