import React from 'react'
import { useNavigate } from 'react-router-dom';

function Data(props) {
  
    const redirect = useNavigate()
    let { id,title,descr,price,images } = props;
  return (
    <div>
      
              <div className="m-3">
              <div className="card p-3 border-0 rounded shadow" onClick={()=>redirect(`/about/${id}`)} >
                <img src={images} className="card-img-top" height="210vh" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{((title).slice(0,15))}</h5>
                  <p className="card-text">{(descr).slice(0,50).concat("...")}</p>
                  <a href="#" className="btn" >
                 Now Get at &#x24;{price}
                  </a>
               
        </div>
              </div>
              </div>
            
    </div>
  )
}

export default Data
