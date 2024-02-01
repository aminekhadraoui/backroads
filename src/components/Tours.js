import React from 'react'
import Title from './Title'
import {tours} from '../data'
function Tours() {
  return (
   
    <section className="section" id="tours">
      <div className="section-title">
        <Title  title="featured" subtitle="tours" />
       
      </div>

      <div className="section-center featured-center">

      {tours.map(tour=>{
        return(
        <article className="tour-card" key={tour.id}>
          <div className="tour-img-container">
            <img src={tour.pic} className="tour-img" alt="" />
            <p className="tour-date">august 26th, 2020</p>
          </div>
          <div className="tour-info">
            <div className="tour-title">
              <h4>{tour.title}</h4>
            </div>
            <p>
              {tour.text}
            </p>
            <div className="tour-footer">
              <p>
                <span><i className="fas fa-map"></i></span> {tour.map}
              </p>
              <p>{tour.date}</p>
              <p>{tour.price}</p>
            </div>
          </div>
        </article>
        )
  
})}
        

       
      </div>
    </section>
  )
}

export default Tours
