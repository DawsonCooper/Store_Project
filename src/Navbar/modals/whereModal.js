import './whereModal.css'

export default function WhereModal(props){
    return (
        <div>
            <h4>Search by region</h4>
            <div className='mapWrapper'>
                <div className='mapGridItem'>
                    <img src={require('./media/World-Map.png')} alt='World Map'></img>
                    <label>I'm flexable</label>
                </div>
                <div className='mapGridItem'>
                    <img src={require('./media/Europe-Map.png')} alt='Europe Map'></img>
                    <label>Europe</label>
                </div>
                <div className='mapGridItem'>
                    <img src={require('./media/North-America-Map.png')} alt='North America Map'></img>
                    <label>North America</label>
                </div>
                <div className='mapGridItem'>
                    <img src={require('./media/South-America-Map.png')} alt='South America Map'></img>
                    <label>South America</label>
                </div>
                <div className='mapGridItem'>
                    <img src={require('./media/Hong-Kong-Map.png')} alt='Hong Kong Map'></img>
                    <label>Hong Kong</label>
                </div>
                <div className='mapGridItem'>
                    <img src={require('./media/Australia-Map.png')} alt='Australia Map'></img>
                    <label>Australia</label>
                </div>

            </div>
        </div>
    )
}