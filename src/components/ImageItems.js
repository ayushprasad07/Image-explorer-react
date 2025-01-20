import React, { useState } from "react";
import "./ImageItems.css";

export default function ImageItems(props) {

  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="container">
      <div
        className="card text-bg-dark my-3"
        style={{ width: "18rem", height: "25rem" }}
      >
        <img
          src={props.image}
          className="card-img"
          alt="Placeholder"
          style={{ width: "18rem", height: "25rem" }}
        />
        <div
          className="card-img-overlay d-flex flex-column mt-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end", 
            height: "100%", 
          }}
        >
          {isHovered && 
          <div >
            <div className="mt-auto" style={{cursor:"pointer"}}>
              <a href={props.full} className="btn btn-light">
              Full view
              </a>
            </div>
            <div className="my-2" style={{color:"white",cursor:"pointer"}}>
              <i class="bi bi-suit-heart-fill" ></i> {props.likes}
            </div>
          </div>
          
          }
        </div>
      </div>
    </div>
  );
}
