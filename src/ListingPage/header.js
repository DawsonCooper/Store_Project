

export default function Header(props){
    const name = props.name;
    console.log(name);
    return(
        <div className='listing-header'>
            <p className='listing-name'>
                {name}
            </p>
        </div>
    )
}