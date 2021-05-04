const allergicCheckbox = () => {
    const allergies = ["egg", "dairy", "nuts", "wheat", "fish", "sesame", "none"];
    return (
        <div>
            <h3>Allergies</h3>
            <ul className="allergies">
                {allergies.map(Allergy => 
                <li key={Allergy}>
                    <p>{Allergy}</p>
                    <input
                    value={Allergy}
                    type="checkbox"
                    />
                </li>
                )}
            </ul>
        </div>
    )
}

export default allergicCheckbox;