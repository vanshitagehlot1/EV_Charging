import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Map = ({ locations }) => {
    const mapContainerStyle = { width: "100%", height: "500px" };

    return (
        <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
            <GoogleMap mapContainerStyle={mapContainerStyle} center={{ lat: 12.9716, lng: 77.5946 }} zoom={12}>
                {locations.map((station, index) => (
                    <Marker key={index} position={{ lat: station.location.lat, lng: station.location.lng }} />
                ))}
            </GoogleMap>
        </LoadScript>
    );
};

export default Map;
