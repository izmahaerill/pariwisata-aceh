import React, { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const Maps = ({ location }) => {
  return (
    <div>
      <iframe
        width={600}
        height={500}
        frameBorder={0}
        scrolling="no"
        marginHeight={0}
        marginWidth={0}
        src={`https://maps.google.com/maps?q=${location.lat},${location.lng}&hl=es&z=14&output=embed&zoom=24`}
      ></iframe>
      <br />
    </div>
  );
};

export default Maps;

// const mapRef = useRef(null);

// const containerStyle = {
//   width: "100%",
//   height: "400px",
// };

// useEffect(() => {
//   // console.log("Location in Maps:", location); // Periksa nilai location di sini

//   const loader = new Loader({
//     apiKey: "AIzaSyDTH-es1duqFLWGFAW8akUMeMNrPZ_2qLI",
//     version: "weekly",
//   });

//   loader.load().then(async () => {
//     const { Map } = await google.maps.importLibrary("maps");

//     new Map(mapRef.current, {
//       center: { lat: location.lat, lng: location.lng },
//       zoom: 8,
//     });

//     new google.maps.Marker({
//       position: { lat: location.lat, lng: location.lng },
//       map: mapRef.current,
//       title: "Location",
//     });
//   });
// }, [location.lat, location.lng]);

// return <div ref={mapRef} style={{ height: "500px", width: "100%" }}></div>;
