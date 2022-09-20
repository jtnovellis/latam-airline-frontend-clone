import React from 'react';
import { Link } from 'react-router-dom';

function Anchormenu({ content, className, anchorClass, path }) {
  return (
    <div className={className}>
      <Link to={path} className={anchorClass}>
        {content}
      </Link>
    </div>
  );
}
export default Anchormenu;
