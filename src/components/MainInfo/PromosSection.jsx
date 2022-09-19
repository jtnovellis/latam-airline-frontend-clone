import React, { useEffect } from 'react';
import { useState } from 'react';
import { imgPromoSectionArr } from '../../DummyData';
import PromosCard from '../PromosCard';

 function PromosSection() {

  const [promos, setPromos]= useState([]);
  
  useEffect(()=>{
    const newPromos = imgPromoSectionArr.map(
      promo=>promo
    );
    setPromos(newPromos)
  },[])


  
  return (
    <div className='hmppgnd'>
      <div className='splt-ppgnd'>
      {promos.map(promo => (
                <PromosCard promoDetails={promo} key={promo.id} />
              ))}
      </div>
    </div>
  );
}


export default PromosSection;
