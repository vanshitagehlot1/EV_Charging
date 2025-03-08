import { useState, useEffect } from "react";
import { getStations } from "../services/api";
import Map from "../components/Map";

const Stations = () => {
    const [stations, setStations] = useState([]);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            getStations(latitude, longitude)
                .then(res => setStations(res.data))
                .catch(err => console.error(err));
        });
    }, []);

    return (
        <div>
            <h1>Nearby Charging Stations</h1>
            <Map locations={stations} />
        </div>
    );
};

export default Stations;
