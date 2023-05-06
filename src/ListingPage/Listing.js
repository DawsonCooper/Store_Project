import { useParams } from 'react-router-dom';
import Navbar from './navbar';
import ImageGrid from './imageGrid';
import Info from './info';
import Header from './header';
import { useEffect, useState } from 'react';

export default function Listing(props){

    const {id} = useParams();
    const [listing, setListing] = useState(false);
    console.log(id)
    const handleListingResponse = (listing) => {
        setListing(listing.listing)
    }
    useEffect(() =>{
        fetch(`/singleListing?id=${id}`, {
            method: 'GET',
        }).then(response => {return response.json()})
        .then(result =>{ 
            handleListingResponse(result)
            
        })
        .catch(err => console.log(err))
        
    },[id]);

    
    
    return (
        <div className='listing-page-wrapper'>
            {listing ? (
                <>
                    <div className='listing-navbar-wrapper'><Navbar /></div>
                    <div className='listing-wrapper'>
                        <div className='listing-header-wrapper'><Header listing={listing}/></div>
                        <div className='listing-image-grid-wrapper'><ImageGrid /></div>
                        <div className='listing-info-wrapper'><Info /></div>
                    </div>
                </>
            ) : (<>Loading</>)}
        </div>
    )
} 