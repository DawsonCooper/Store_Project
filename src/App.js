import './App.css';
import {useEffect, useState} from 'react';

function App() {
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
              <h4 className='infoListItem'>{item.name}</h4>
              <h4 className='infoListItem'>${item.price}</h4>
              <img src={item.images.picture_url} alt='Unit Not Loaded' height='250px' width='250px'></img>

          
          
          </div>

        ) 
      }) 
      : skeletonList.map((item, index) => {
        // these should be our skeleton grid items
        return <div className='skeletonGridItem' key={`skeleton${index}`}>Skeleton</div>
      })}
    </div>
  );
}

export default App;
