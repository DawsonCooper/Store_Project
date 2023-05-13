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
                <div className='rating'></div>
            </div>
            <div className='stay-info'>

            </div>
            <div className='reserve'>

            </div>
            <div className='default-stay-info'>

            </div>
            <div className='stay-total'>

            </div>
        </div>
    )
}