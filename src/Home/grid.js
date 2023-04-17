import './grid.css';
import {useEffect, useState} from 'react';
import 'bootstrap'
export default function HomeGrid() {
  const skeletonList = [1,2,3,4,5,6,7,8,9,10];
  const [listingArray, setListingArray] = useState([])

  // This useEffect will run onMount and will update the listing state using a fetch req to our server once reveived skeleton list should be replaced
  useEffect(() => {
    console.log('mount')
    fetch('/listings', {
      method: 'GET',
    }).then(response => {
        return response.json()
    }).then(result => {
        console.log({result})
        setListingArray(result)
    }).catch(err => console.log('Failed to get data from server'));
      console.log('--------------------------------')
    }, [])

  return (
    <div className='listingGrid'>
      {listingArray.length > 1 ?
        listingArray.map(item => {
        // jsx that uses properties from item to display listing information
        return(
          <div className='listingGridItem' key={item._id}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" className="bi bi-heart heart" viewBox="0 0 16 16">
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
            </svg>
            <img src={item.images.picture_url} alt='Unit Not Loaded' className='gridImage' />
            <h4 className='infoListItem'>{item.address.market}, {item.address.country} </h4>
            <p className='infoListItem altInfo'>{item.name}</p>
            <p className='infoListItem'><strong>${item.price}</strong>/night</p>
          </div>
        ) 
      }) 
      : skeletonList.map((item, index) => {
        // these should be our skeleton grid items
        return (
            <div className='skeletonGrid' key={`skeleton${index}`}>
                <div className='skeletonGridImage'></div>
                <div className='skeletonGridItem'></div>
                <div className='skeletonGridItem'></div>
                <div className='skeletonGridItem'></div>
            </div>
        )})}
    </div>
  );
}