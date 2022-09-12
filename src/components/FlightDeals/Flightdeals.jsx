import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import FlightCard from "../FlightCard/FlightCard";
import { useState } from "react";
import { useEffect } from "react";
import { flightsArr } from "../../DummyData";


function FlightDeals() {
const [flights, setFlights]= useState([])

const [selectedCity ]= useState("Bogotá")

useEffect(()=>{
  const newFlights = flightsArr.filter(flight=>flight.from===selectedCity)
  setFlights(newFlights)
},[selectedCity])


  return (
    <>
      <div className="fly-offers-menu-container">
        <div className="city-selector-label">
          <span className="menu-label-offers">Ofertas de vuelo desde </span>
          <button id="cityselector">
            <h2 className="cityselected">
              <span className="cityselectedname">{selectedCity}</span>
              <span className="dropdown-arrow-menu">
                <FontAwesomeIcon icon={faAngleDown} className='faAngleDown' />
              </span>
            </h2>
          </button>
        </div>
      </div>
      <div className="offers-imgs-container">
        <div id="deals-carousel" className="doxKgH">
          <div className="cQREGG">
            <ul className="offers-carousel">
              {
                flights.map(flight=><FlightCard flightDetails={flight} key={flight.id}/>)
              }
              
            </ul>
          </div>
        </div>
      </div>
    </>

  )
}

export default FlightDeals;