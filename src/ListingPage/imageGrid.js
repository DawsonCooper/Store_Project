import './imageGrid.css'

export default function ImageGrid(props){
    const img1 = require('./images/stock0.jpg');
    const img2 = require('./images/stock1.jpg');
    const img3 = require('./images/stock2.jpg');
    const img4 = require('./images/stock3.jpg');
    return(
        <div className='image-grid'>
            <img className='image-grid-item gi-1' src={props.img} alt='Listing unit'></img>
            <img className='image-grid-item gi-2' src={img1} alt='Stock Unit 1'></img>
            <img className='image-grid-item gi-3' src={img2} alt='Stock Unit 2'></img>
            <img className='image-grid-item gi-4' src={img3} alt='Stock Unit 3'></img>
            <img className='image-grid-item gi-5' src={img4} alt='Stock Unit 4'></img>
        </div>
    )
}