import React from 'react'
import "./Style/Card.css"


const Card = () => {
  return (
    <div className='card'>

            <div className="row">
                <div className="img">
                    <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt=""/>
                </div>
                <div className="title" >  
                <a href="./Cards/Card1" target="_blank"> 
                    <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h2>
                </a>
                <div className="desc">   
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure laudantium excepturi sed. Neque exercitationem sunt, officiis laborum dolore quaerat velit! Vero reiciendis nobis, suscipit possimus exercitationem minima explicabo totam eos! </p>
                    
                </div>
                </div>
           

            </div>    
    
    </div>
  )
}

export default Card