import React from 'react'
import { Link } from 'react-router-dom'
import { imgPromoSectionArr } from '../../DummyData'

export default function PromosCard(props) {
    const { promoDetails }= props
    const { id, smallImg, bigImg, paragraph} = promoDetails
  return (
    <Link to={''} className='ppgnd-prm'>
    <div>
        {width >= 800 ? (
              <img
                src={bigImg}
                className='imgn-prm-prpgnd' 
                alt={paragraph}
              />
            ) : (
              <img
                src={backgroundSmall}
                className='bg-img'
                alt='Disfruta de viajar por Colombia y el mundo con LATAM Airlines'
              />
            )}
        </div>
        <div>
        </div>
    </Link>
  )
}
