import React from 'react';
import { Link } from 'react-router-dom';

function Anchormenu({ content, className, anchorClass }) {
  return (
    <div className={className}>
      <Link to='/centro-de-ayuda' className={anchorClass}>
        {content}
      </Link>
    </div>
  );
}
export default Anchormenu;
