import Product from "../components/inf.js";
import Data from '../data.json'
import { useParams } from "react-router-dom";
import React from 'react';
import { useState } from"react";
import Button from "../components/button.js";

 const Details = () => {
     
 const [isOpen, setIsOpen] = useState(false);
     let params = useParams();
 
     const id = params.id;
 
     return (
         <div className="product-page">

             {Data.data.map(inf => {
              if (inf.id == id) {
                return ( 
                    <div className="product-info">
                    
						<Product 
							id={inf.id}
							image={inf.img}
							title={inf.title}
							price={inf.price}
							
							
						/>
                          {isOpen && (
                      <div>
                         <div className="modal-overlay"></div>
                         <div className="modal">
                             <h3>Details</h3>
                             <p>Lorem ipsum dolor sit amet. Vel delectus voluptatem aut veniam facere et eius quis et ducimus quia hic modi itaque qui voluptatem omnis. Nam voluptates deserunt qui dicta sed dolor internos ab assumenda pariatur. Qui iusto quam ut corrupti necessitatibus aut unde repellendus non amet libero cum earum veritatis.</p>
                             <button className="close" onClick={() => setIsOpen(false)} >
				            close
			            </button>
                     </div>
                    </div>
                        )}
                         <button className="inf__more" onClick={() => setIsOpen(true)} >
				            More Info
			            </button>
                      
					</div>
              )
              
              }
            
                   
 })}

         </div>
     )
 }
 
 export default Details;
 