import React, { Component} from 'react';


class Allergic extends Component {
    state = {
        allergy: ""
    }
    render() {
        return (
            <div>
                <h3>Allergies</h3>
                <select>
                    <option value="dairy">Dairy</option>
                    <option value="egg">Egg</option>
                    <option value="nuts">Nuts</option>
                    <option value="wheat">wheat</option>
                    <option value="fish">Fish</option>
                    <option value="sesame">Sesame</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }

}

export default Allergic;