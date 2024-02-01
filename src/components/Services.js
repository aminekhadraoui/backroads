import React from 'react'
import Title from './Title'
import {services} from '../data'
function Services() {
  return (
    
   
    <section className="section services" id="services">
      <div className="section-title">
      <Title  title="our" subtitle="services" />
      </div>
      <div className="section-center services-center">

       {services.map(srv=>{
        return <article className="service" key={srv.id}>
        <span className="service-icon"><i className={srv.icon}></i></span>
        <div className="service-info">
          <h4 className="service-title">{srv.title}</h4>
          <p className="service-text">
            {srv.text}
          </p>
        </div>
      </article>
       })}
        
      </div>
    </section>
  )
}

export default Services
