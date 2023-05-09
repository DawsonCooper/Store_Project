import './info.css'
import { useState } from 'react'
export default function Info(props){
    const listing = props.listing;
    const profilePic = require('./images/profile.jpg')
    const [hostPhoto, setHostPhoto] = useState(listing.host.host_picture_url)
    const [defaultHostPhoto, setDefaultHostPhoto] = useState(null)
    const handleError = () => {
        setHostPhoto(profilePic)
        setDefaultHostPhoto(null)
    }
    return(
        <div className='info'>
            <div className='host-info'>
                <div className='host-info-row1'>
                    <h2 className='host-info-header'>{listing.property_type} hosted by {listing.host.host_name}</h2>
                    {listing.host.host_has_profile_pic ? <img src={hostPhoto} alt={defaultHostPhoto} onError={handleError}></img> : <img src={profilePic} alt={defaultHostPhoto}></img>}
                </div>
                <div className='host-info-row2'>
                    <div className='host-info-row2-content'>{listing.beds === 1 ? <p className='row2-beds row2-para'>{listing.beds} bed</p> : <p className='row2-beds row2-para'>{listing.beds} beds</p>}</div>
                    <div className='host-info-row2-content'>{listing.bathrooms === 1 ? <p className='row2-bathrooms row2-para'>{listing.bathrooms} bathroom</p> : <p className='row2-bathrooms'>{listing.bathrooms} bathrooms</p>}</div>
                    <div className='host-info-row2-content'><p className='row2-accommodates row2-para'>Accommodates {listing.accommodates}</p></div>
                </div>
            </div>
            <div className='renting-info'>

            </div>
            <div className='unit-info'>
                <div className='unit-amenities'></div>
                <div className='unit-amenities'></div>
                <div className='unit-amenities'></div>
            </div>
        </div>
    )
}