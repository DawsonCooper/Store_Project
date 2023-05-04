import { useParams } from 'react-router-dom';

export default function Listing(props){
    const {id} = useParams();
    console.log(id)
    return (
        <>
            <h2>Hello listing page: {id} </h2>
        </>
    )
}