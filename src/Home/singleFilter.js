import {useState} from 'react';
import {Link} from 'react-router-dom'

export default function SingleFilterListing(props){
    const item = props.item
    const image = require('./logo.png')
    const [ogImage, setOgImage] = useState(item.images.picture_url)
    const [altImage, setAltImage] = useState('Loading image please wait...')
    
    const imageError = () => {
        setOgImage(image)
        setAltImage('Image and Fallback image failed to load')
    }
    return (
        <Link to={`/listing/${item._id}`}>
              <div className='singleListingGridItem' key={item._id}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" className="bi bi-heart heart" viewBox="0 0 16 16">
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                </svg>
                <div className='gridImage'><img src={ogImage} alt={altImage} onError={imageError} />
                </div>

                <h4 className='infoListItem'>{item.address.market}, {item.address.country} </h4>
                <p className='infoListItem altInfo'>{item.name === undefined ? 'No Name' : item.name.slice(0, 30) + '...'}</p>
                <p className='infoListItem'><strong>${item.price}</strong>/night</p>
              </div>
        </Link>
    )
    
}