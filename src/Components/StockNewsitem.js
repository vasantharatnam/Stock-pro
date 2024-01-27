import React from 'react'
import imgi from './img2.jpg'
// isLoged
function StockNewsitem({title , description , imageurl , newsurl,isLoged}) {


  // console.log(" Button ",isLooged)

  return (
<div>
 <div className="card" style={{width: '18rem'}}>
  <img src={(!imageurl)?(imgi):imageurl} className="card-img-top"/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    {isLoged ? (<><button className='btn btn-primary' ><a href={newsurl} target="_blank" style={{color: 'white'}}>Read More</a></button></>) : (<><button className='btn btn-primary' disabled ><a href={newsurl} target="_blank" style={{color: 'white'}}>Read More</a></button></>)}
    {/* <a  href={newsurl} target="_blank" rel="noreferrer" className="btn btn-primary" disabled>Read more</a> */}
  </div>
  </div>
 </div>
  )
}

export default StockNewsitem