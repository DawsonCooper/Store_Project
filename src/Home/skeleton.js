
export default function Skeleton(props){
    return (
        <div className='skeletonGrid' key={`skeleton${props.index}`}>
            <div className='skeletonGridImage'></div>
            <div className='skeletonGridItem'></div>
            <div className='skeletonGridItem'></div>
            <div className='skeletonGridItem'></div>
        </div>
    )
}