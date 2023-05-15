import './aircoverModal.css'
import {useEffect} from 'react'
export default function AircoverModal(props){
    const handleClose = () => {
        // dismount this modal from the dom
        const backdrop = document.querySelector('.backdrop');
        const modal = document.querySelector('.aircover-modal');
        setTimeout(() => {
            backdrop.style.opacity = '0%';
            modal.style.opacity = '0%';
            
        }, 1);
        setTimeout(() => {
            props.setMountState(false);
        },205)
        
            
    }
    
    useEffect(() => {
        if(props.mountState){
            document.body.style.overflow = 'hidden';
            const backdrop = document.querySelector('.backdrop');
            const modal = document.querySelector('.aircover-modal');
            setTimeout(() => {
                backdrop.style.opacity = '70%';
                modal.style.opacity = '100%';
            }, 1);
            
        }else{
            document.body.style.overflow = 'auto';
        }
        
        console.log('mounted') 
    }, [props.mountState])
    
    return props.mountState ? 
        <div className='aircover-modal-wrapper'>
            <div className='backdrop' onClick={handleClose}></div>
            <div className='aircover-modal'> 
                <div className='close-svg-wrapper' onClick={handleClose}>
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className='close-svg' aria-hidden="true" role="presentation" focusable="false">
                        <path d="m6 6 20 20"></path><path d="m26 6-20 20"></path>
                    </svg>
                </div>
                
                <div className='aircover-modal-header'>
                    <img className='aircover-modal-title' src='https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg' alt='aircover' />
                    <p className='aircover-modal-subtitle'>AirCover is comprehensive protection included for free with every booking.</p>
                </div>
                <div className='aircover-modal-content'>
                    <div>
                        <h3 className='aircover-modal-content-headers'>Booking Protection Guarantee</h3>
                        <p className='aircover-modal-content-para'>In the unlikely event a Host needs to cancel your booking within 30 days of check-in, we'll find you a similar or better home, or we'll refund you.</p>
                    </div>
                    <div>
                        <h3 className='aircover-modal-content-headers'>Check-In Guarantee</h3>
                        <p className='aircover-modal-content-para'>If you can't check into your home and the Host cannot resolve the issue, we'll find you a similar or better home for the length of your original stay, or we'll refund you.</p>
                    </div>
                    <div>
                        <h3 className='aircover-modal-content-headers'>Get-What-You-Booked Guarantee</h3>
                        <p className='aircover-modal-content-para'>If at any time during your stay you find your listing isn't as advertised—for example, the refrigerator stops working and your Host can't easily fix it, or it has fewer bedrooms than
                        listed—you'll have three days to report it and we'll find you a similar or better home, or we'll refund you.</p>
                    </div>
                    <div>
                        <h3 className='aircover-modal-content-headers'>24-hour Safety Line</h3>
                        <p className='aircover-modal-content-para'>If you ever feel unsafe, you'll get priority access to specially-trained safety agents, day or night.</p>
                    </div>
                    
                    
                    
                    
                </div>


            </div>
        </div> 
        : null    
        

}