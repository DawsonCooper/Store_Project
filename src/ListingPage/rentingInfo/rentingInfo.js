import './rentingInfo.css'

export default function RentInfo(props){
    const listing = props.listing
    return (
        <div className='rent-info-wrapper'>
            <div className='pricing-rating'>
                <div className='price'>
                    <span className='price-amount'>${listing.price}</span>
                    <span className='price-stay'>night</span>
                </div>
                <div className='rating'>
                <svg className='star-svg' viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false">
                    <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fillRule="evenodd">
                    </path>
                </svg>
                <h4>4.52</h4>
                <span className='bullet'></span>
                <p className='num-of-reviews'>{listing.number_of_reviews} review(s)</p>
                </div>
            </div>
            <div className='stay-info'>
                {/*
                    Check in-out divs will open a calendar modal when clicked 
                    User can type dates inside the modal in two check in-out sections
                    User can also click on the calendar once one day is clicked thats marked as the check in second click is marked as checkout
                    Close button will save those days to state and clear resets the modal completely
                */}
                <div className='top-row'>
                    <div className='check-in'></div>
                    <div className='check-out'></div>
                </div>

            </div>
            <div className='reserve'>
                {/*Button that has a linear gradient horizontal however it tracks the mouse and changes the gradient depending on the mouse location*/}
                <span className='reserve-button'>Reserve</span>
            </div>
            <div className='default-stay-info'>

            </div>
            <div className='stay-total'>

            </div>
        </div>
    )
}