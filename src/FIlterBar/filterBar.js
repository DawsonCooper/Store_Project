import './filterBar.css';
import React , {useContext} from 'react'

import { FilterContext } from '../FilterContext';
export default function FilterBar(props){
    const {changeFilter} = useContext(FilterContext)
    return (
        <div className='filterBar'>
            <span className='filterImage waterFront' onClick={() => {changeFilter('/waterfront/')}}>
                <img src='https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg' alt='water front' className='waterFrontImg' />
                Water Front
            </span>
            <span className='filterImage pools'  onClick={() => {changeFilter('/pools/')}}>
                <img alt='Pools' src='https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg' className='poolImg' />
                Pools
            </span>
            <span className='filterImage mansions'  onClick={() => {changeFilter('//')}}>
                <img alt='Mansions' src='https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg' className='poolImg mansions' />
                Mansions</span>
            <span className='filterImage ' onClick={() => {changeFilter('/bed and/')}}>
                <img alt='Bed & Breakfast' src='https://a0.muscache.com/pictures/5ed8f7c7-2e1f-43a8-9a39-4edfc81a3325.jpg' className='poolImg bedAndBreakfast' />
                Bed & Breakfast
            </span>
            <span className='filterImage ' onClick={() => {changeFilter('/Tree/')}}>
                <img alt='Tree House' src='https://a0.muscache.com/pictures/4d4a4eba-c7e4-43eb-9ce2-95e1d200d10e.jpg' className='poolImg treeHouse' />
                Treehouse
            </span>
            <span className='filterImage ' onClick={() => {changeFilter('/Cabin/')}}>
                <img alt='Cabins' src='https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg' className='poolImg cabins' />
                Cabins
            </span>
            <span className='filterImage ' onClick={() => {changeFilter('/boat/')}}>
                <img alt='House Boats' src='https://a0.muscache.com/pictures/c027ff1a-b89c-4331-ae04-f8dee1cdc287.jpg' className='poolImg houseBoat' />
                House Boats
            </span>
            <span className='filterImage ' onClick={() => {changeFilter('/Earth/')}}>
                <img alt='Earth House' src='https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg' className='poolImg earthHouse' />
                Earth House
            </span>
            <span className='filterImage ' onClick={() => {changeFilter('/wheelchair/')}}>
                <img alt='Adapted' src='https://a0.muscache.com/pictures/e22b0816-f0f3-42a0-a5db-e0f1fa93292b.jpg' className='poolImg adapted' />
                Adapted
            </span>
            <span className='filterImage ' onClick={() => {changeFilter('/Farm/')}}>
                <img alt='Farm' src='https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg' className='poolImg farm' />
                Farms
            </span>
            <span className='filterImage ' onClick={() => {changeFilter('/kitchen/')}}>
                <img alt='Chefs Kitchen' src='https://a0.muscache.com/pictures/ddd13204-a5ae-4532-898c-2e595b1bb15f.jpg' className='poolImg chefKitchen' />
                Chef's Kitchen
            </span>
            <span className='filterImage ' onClick={() => {changeFilter('/view/')}}>
                <img alt='Amazing View' src='https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg' className='poolImg amazingView' />
                Amazing View
            </span>
            <span className='filterImage ' onClick={() => {changeFilter(200)}}>
                <img alt='Trending' src='https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg' className='poolImg trending' />
                Trending
            </span>
            <span className='filterImage ' onClick={() => {changeFilter('//')}}>
                <img alt='Park' src='https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg' className='poolImg park' />
                Parks
            </span>
            <span className='filterImage '>
                <img alt='Mansions' src='https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg' className='poolImg mansions' />
                Mansions
            </span>
        </div>
    )
}