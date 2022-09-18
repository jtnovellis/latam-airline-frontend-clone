import React from 'react';
import { Link } from 'react-router-dom';

export const CardAdvice = props => {
  const { adviceDetails } = props;
  const { id, imgUrl, title, description, other } = adviceDetails;
  return (
    <li className='prpstn-crsl-li'>
      <div className='prpstn-crsl-l-element' aria-hidden='false'>
        <Link to={''} className='prp-crsl-elmnt-a'>
          <div className='prp-c-e-imgdiv' id={id}>
            <picture>
              <source type='image/webp' />
              <img
                src={imgUrl}
                alt={title}
                aria-hidden='true'
                className='prpCE-img'
              />
            </picture>
          </div>
          <div className='prp-c-e-infodiv'>
            <div className='prpCEinfo-container'>
              <h3 className='prpCEinfo-title' aria-hidden='true'>
                {title}
              </h3>
              <p aria-hidden='true' className='prpCEinfo-p'>
                {description}
              </p>
            </div>
            <p aria-hidden='true' className='prpCEI-link'>
              {other}
            </p>
          </div>
        </Link>
      </div>
    </li>
  );
};
