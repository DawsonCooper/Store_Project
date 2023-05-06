import './header.css'

export default function Header(props){
    const listing = props.listing;
    console.log(listing);
    return(
        <div className='listing-header'>
            <div className='name-wrapper'>
                <span className='translate-svg'>
                    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-label="Automatically Translated title: Centre place Graslin - Private room La Cambronne" role="img" focusable="false"><path d="M9 0a1 1 0 0 1 .993.883L10 1v5h5a1 1 0 0 1 .993.883L16 7v8a1 1 0 0 1-.883.993L15 16H7a1 1 0 0 1-.993-.883L6 15v-5H1a1 1 0 0 1-.993-.883L0 9V1A1 1 0 0 1 .883.007L1 0h8zm1.729 7l-1.393.495.233.217.13.132c.125.127.227.245.308.352l.073.103.048.073.045.077H7.308v1.309h1.207l.166.52.09.266.112.29a6.294 6.294 0 0 0 1.109 1.789c-.495.315-1.119.607-1.87.87l-.331.112-.346.108-.445.134L7.72 15l.407-.125.386-.128c1.007-.349 1.836-.752 2.486-1.214.57.405 1.277.764 2.12 1.08l.369.134.386.128.406.125.72-1.153-.445-.134-.26-.08-.345-.115c-.783-.27-1.43-.57-1.94-.895a6.3 6.3 0 0 0 1.068-1.694l.128-.32.114-.33.165-.521h1.208V8.449H11.64l-.093-.231a3.696 3.696 0 0 0-.554-.917l-.126-.149-.14-.152zm1.35 2.758l-.042.133-.076.224-.103.264A4.985 4.985 0 0 1 11 11.76a4.952 4.952 0 0 1-.743-1.127l-.115-.254-.103-.264-.076-.224-.042-.133h2.158zM9 1H1v8h5V7c0-.057.005-.113.014-.167H3.827L3.425 8H2l2.257-6h1.486l1.504 4H9V1zM5 3.411L4.253 5.6h1.502L5 3.411z"></path>
                    </svg>
                </span>
                <p className='listing-name'>
                    {listing.name} - {listing.room_type}
                </p>
            </div>
            <div className='extra-content-row'>
                <div className='extra-content-section-0'>
                    <p className='review-count'>{listing.number_of_reviews} reviews </p>
                </div>
                <div className='extra-content-section-1'>

                </div>
            </div>
            
        </div>
    )
}