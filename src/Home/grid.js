import './grid.css';
import {useEffect, useState, useContext} from 'react';
import 'bootstrap'
import './gridResponsive.css';
import { FilterContext } from '../FilterContext';

import Listing from './listing'
import Skeleton from './skeleton'


export default function HomeGrid() {
  const {filter} = useContext(FilterContext)
  const initPage = 1;
  const skeletonList = [1,2,3,4,5,6,7,8,9,10];
  const [listingArray, setListingArray] = useState([])
  const [page, setPage] = useState(initPage);

  // -----------------------------  FILTER FUNCTIONS  ----------------------------------- //
  useEffect(() => {
    console.log({filter})
    if(filter === ''){
      console.log('No filter')
    }else{
      setListingArray([])
      fetch(`/filtered?filter=${filter}`, {
        method: 'GET',
      }).then(response => {
          return response.json()
      }).then(result => {
          setListingArray(result)
      }).catch(err => console.log('Failed to get data from server'));
    }

  }, [filter])
  
  
  const filterMore = () => {
    return null
  }


  // Fetch the api for our first list of postings
  useEffect(() => {
    console.log('mount')
    
      fetch('/listings', {
        method: 'GET',
      }).then(response => {
          return response.json()
      }).then(result => {
          setListingArray(result)
      }).catch(err => console.log('Failed to get data from server'));
    // Add a listener that will check scroll location to detect when to call load more function
      
    }, [])


  // --------------------------- PAGINATION FUNCTIONS --------------------------------
  const onScroll = () => {
    const location = window.scrollY;
    const bottomY = window.scrollMaxY || document.body.offsetHeight - window.innerHeight;
    const updateArea = bottomY - location;
    if (updateArea <= .5){
      if(filter !== ''){
        filterMore()
      }else{
        loadMore()
      }
      
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {window.removeEventListener('scroll', onScroll)}
  }) 
  const loadMore = () => {
    setPage(page + 1);
    console.log(page)
    fetch(`/pagination?page=${page}`, {
        method: 'GET',
      }).then(response => {
          return response.json()
      }).then(result => {
          setListingArray(listingArray.concat(result))
      }).catch(err => console.log('Failed to get data from server'));
      console.log({listingArray})
  }


  // ---------------------------  COMPONENT   --------------------------- //
  return (
    <div className='listing-grid-wrapper'>
      <div className='listingGrid'>
        {listingArray.length >= 1 ?
          listingArray.map(item => {
          // Load listing componens when our listing array items are available
          return(
            <Listing item={item} />
          ) 
        }): skeletonList.map((item, index) => {
          // Skeleton Load when items aren't available
          return (
              <Skeleton index={index} />
          )})}
          
      </div>
    </div>
  );
}