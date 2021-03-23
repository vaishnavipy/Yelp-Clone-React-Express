import React,{useState} from "react"
import { MapContainer, TileLayer, Marker, Popup,useMap } from 'react-leaflet'
import { useContext, useEffect } from "react/cjs/react.development";
import { searchContext } from "../searchContext";


function LeafletMap(){

    const {result} = useContext(searchContext);

    const [center,setCenter] = useState({lat:51.505,long:-0.09})

    const [markerArr,setMarkerArr] = useState([])

    useEffect(()=>{

        if(result.length !== 0){

            const {latitude,longitude} = result[0].coordinates;
            setCenter({lat: latitude  , long: longitude })

            result.map((obj,i) => setMarkerArr(prevState => [...prevState, {lat:obj.coordinates.latitude, long: obj.coordinates.longitude, name: obj.name,address: `${obj.location.address1},${obj.location.city}`} ]))


        }

    },[result])

    const markerComponents = markerArr.map((marker,i) => {
        return(
            <Marker position={[marker.lat, marker.long]} key={i}>
            <Popup>
                {marker.name} <br /> {marker.address}
            </Popup>
           
            </Marker>
        )
    }) 

    return(
    <div className="maps">
        <MapContainer center={[center.lat, center.long]} zoom={10} scrollWheelZoom={false} className="maps">
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {markerComponents}
           
            <ChangeMapView coords={[center.lat, center.long]} />
    </MapContainer>
    </div>)
}

function ChangeMapView({ coords }) {
    const map = useMap();
    console.log(coords)
    map.setView(coords, map.getZoom());
  
    return null;
  }
export default LeafletMap