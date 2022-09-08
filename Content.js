import React from 'react';
import './Content.css'

const Content = () => {
  return (

    <>
   <div className="container">
  <div className="row">
    <div className="col-lg-4">
      <div className="card">
        <img src="img/1.jpg" className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Shakarparian</h5>
        </div>
      </div>
    </div>
    <div className="col-lg-4">
      <div className="card">
        <img src="img/2.jpg" className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">SunSet</h5>
        </div>
      </div>
    </div>
    <div className="col-lg-4">
      <div className="card">
        <img src="img/3.jpg" className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Sea View</h5>
        </div>
      </div>
    </div>
    <div className="col-lg-4">
      <div className="card">
        <img src="img/4.jpg" className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Greenry</h5>
        </div>
      </div>
    </div>
  </div>
 </div>
    </>
  )
}
export default Content;