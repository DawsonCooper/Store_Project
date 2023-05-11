import './aircoverModal.css'
import {useEffect} from 'react'
export default function AircoverModal(props){
    const handleClose = () => {
        // dismount this modal from the dom
        props.setMountState(false);
    }
    useEffect(() => {
        props.mountState ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'  
    }, [props.mountState])
    
    return props.mountState ? <div className='aircover-modal-wrapper'>
        <div className='backdrop' onClick={handleClose}></div>
        <div className='aircover-modal'>
            <button onClick={handleClose}>close</button>
        </div>
    </div> : null    
        

}