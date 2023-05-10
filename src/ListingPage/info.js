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
    const aircoverModal = () => {
        console.log('modal open')
        return(
            null
        )
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
            <div className='air-cover-wrapper'>
                <img className='aircover-title' src='https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg' alt='aircover' />
                <p className='aircover-info'>Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in.</p>
                <span onClick={aircoverModal} className='aircover-link'>Learn more</span>
            </div>
        </div>
    )
}