import React from 'react'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import "./contain.css";

function CardSkeleton({count}) {
  return (
    Array(count).fill(0).map((_,id) =>
    <div className='card-skeleton' key={id}>
        <div className="upper">
            <Skeleton width={280} height={160} baseColor='grey' highlightColor='#E0E1E4' />
        </div>
        <div className="midd">
            <Skeleton width={240} height={20} baseColor='grey'/>
        </div>
        <div className="lower">
            <Skeleton width={80} height={26} baseColor='grey'/>
        </div>
    </div>)
  )
}
export default CardSkeleton