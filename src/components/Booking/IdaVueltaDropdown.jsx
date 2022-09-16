import React from 'react';

function IdaVueltaDropdown() {
  return (
    <div className='idavuelta-dropdown'>
      <div className='container-drop'>
        <div className='box-drop'>
          <button value='both'>IdaVuelta</button>
        </div>
        <div className='line'></div>
        <div className='box-drop'>
          <button value='only'>Solo ida</button>
        </div>
      </div>
    </div>
  );
}

export default IdaVueltaDropdown;
