import React from 'react';

const ListItemFooter = props => {
  const { linkDetails } = props;
  const { id, url, description } = linkDetails;
  return (
    <li className='ListItem__Footer' id={id}>
      <a className='redirectTo' href={url}>
        {description}
      </a>
    </li>
  );
};

export default ListItemFooter;
