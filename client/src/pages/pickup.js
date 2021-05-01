import React, { useState, useEffect } from 'react';
import axios from "axios";
import reserveCard from '../components/reserveCard';

const Pickup = () => {
    const [data, setData] = useState({ donations: [] });

    useEffect(() => {
        const fetchData = async () => {
        const result = await axios.get('/');
        setData(result.data);
        };
        fetchData();
    }, []);

    return (
    <div>
        <reserveCard />
    </div>
    )
}

export default Pickup;