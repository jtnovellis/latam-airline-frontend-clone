import React, { useEffect, useState } from 'react';
import { adviceArr } from '../../DummyData';
import { CardAdvice } from './CardAdvice';
import { Link } from 'react-router-dom';

const AdviceSection = () => {
  const [advices, setAdvices] = useState([]);

  useEffect(() => {
    const newAdvices = adviceArr.map(advice => advice);
    setAdvices(newAdvices);
  }, []);

  return (
    <div className='vl-prpstn'>
      <div className='prpstn-container'>
        <div className='prpstn-pnl-nf'>
          <h2 className='prpstn-nf-ttl'>Experiencia LATAM, en todo momento</h2>
          <p className='prpstn-nf-p'>
            Cuando eliges volar con nosotros te acompañamos en cada etapa.
          </p>
        </div>
        <div className='prpstn-l-nf'>
          <div className='prpstn-crsl-container'>
            <div className='prpstn-crsl-ul-cntnr'>
              <ul className='prpstn-crsl-ul'>
                {advices.map(advice => (
                  <CardAdvice adviceDetails={advice} key={advice.id} />
                ))}
                <li className='prpstn-crsl-li'>
                  <div className='prpstn-crsl-l-element' aria-hidden='false'>
                    <Link to={''} className='prp-crsl-elmnt-a'>
                      <div className='prp-c-e-imgdiv'>
                        <picture>
                          <source type='image/webp' />
                        </picture>
                      </div>
                      <div className='prp-c-e-infodiv'>
                        <div className='prpCEinfo-container'>
                          <p aria-hidden='true' className='prpCEinfo-p'>
                            Descubre toda la experiencia latam
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdviceSection;
