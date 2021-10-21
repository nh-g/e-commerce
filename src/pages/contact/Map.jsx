import { Map as LeafletMap, Marker, TileLayer, Popup } from "react-leaflet";
import { icon } from "leaflet";

import mapPin from "../../assets/images/map-pin.png";

export default function Map() {
  // Constants
  const zoomLevel = 15;
  const mapURL = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
  const attribution = `&copy <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors`;
  const myIcon = icon({ iconUrl: mapPin, iconSize: [30, 40] });
  const coordinates = [59.345894117035556, 18.06373253139708];

  return (
    <LeafletMap className="map" center={coordinates} zoom={zoomLevel}>
      <TileLayer url={mapURL} attribution={attribution} />
      <Marker position={coordinates} icon={myIcon}>
        <Popup>Hello, I am Veggie. Find me at Odengatan 21, Stockholm</Popup>
      </Marker>
    </LeafletMap>
  );
}
