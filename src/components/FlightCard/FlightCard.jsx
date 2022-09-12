import React from "react"
import { Link } from "react-router-dom";


function FlightCard(props) {
    const {flightDetails}=props

    const {id, cityImg, city, returnDate, departDate, tripClass, price, tags}= flightDetails


    return (
        <li className="positions-in-carousel" key={id}>
            <div aria-hidden="false" className="ContainerOfContainer-carousel">
                <div className="container-carousel-element">
                    <div className="ListI-OfCarousel">
                        <Link to={''} className="carousel-item-redirect">
                            <div className="img-divisor">
                                <picture>
                                    <img aria-hidden="true" src={cityImg} alt="first-promotion-of-carousel" className="img-carousel" />
                                </picture>
                            </div>
                            <div className="info-item-div">
                                <div className="date-of-item">
                                    <div className="position-date">
                                        <div className="date-travel">
                                            <span className="when-is-the-travel">
                                                {
                                                    returnDate ?
                                                        <>Ida <strong>{departDate}</strong> · vuelta <strong>{returnDate}</strong></>
                                                        :
                                                        <>Viaja el <strong>{departDate}</strong></>
                                                }
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item-information">
                                    <div className="information-split">
                                        <div className="carousel-item-city">
                                            <h3 aria-hidden="true" className="city-information">{city}</h3>
                                        </div>
                                        <div className="carousel-item-flytype">
                                            <div className="trip-detail">
                                                <div className="one-way-or-round-trip">{returnDate === "" ? "Solo ida" : "Ida y vuelta"}</div>
                                            </div>
                                            <div className="trip-detail">
                                                <div className="type-of-fly">{tripClass}</div>
                                            </div>
                                        </div>
                                        <div className="carousel-item-price">
                                            <div>
                                                <p aria-hidden="true" className="price-description">Precio final desde</p>
                                                <p aria-hidden="true" className="price-offert">COP&nbsp; {price}</p>
                                            </div>
                                            <div className="red-arrow-item">
                                                <button className="red-round-arrow-button" tabIndex="-1" type="button" data-testid="undefined-icon-button" aria-hidden="true">
                                                    <span className="MuiButton-label">
                                                        <i className="arrow-icon" aria-hidden="true">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 20 20" fill="none" focusable="false">
                                                                <path fill="currentColor" d="M8.6 3.4L14.229 9H2v2h12.229L8.6 16.6 10 18l8-8-8-8z">
                                                                </path>
                                                            </svg>
                                                        </i>
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                        <p className="taxes-and-fly">{tags.join(" · ")}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default FlightCard;