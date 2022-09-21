import React from 'react';
import { Link } from 'react-router-dom';

const ListItemFooter = props => {
  const { linkDetails } = props;
  const { id, url, description } = linkDetails;
  return (
    <li className='ListItem__Footer' id={id}>
      <Link to={url}>{description}</Link>
    </li>
  );
};

export default ListItemFooter;
