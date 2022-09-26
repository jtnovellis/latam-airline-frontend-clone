import React from 'react';
import { Link } from 'react-router-dom';
const HeaderFlights = () => {
  return (
    <header className='headerFlights'>
      <div className='header-div'>
        <Link to='/home' className='latam-a' href='/'>
          <svg
            className='latam-icon'
            width='133px'
            height='32px'
            viewBox='0 0 235 73'>
            <g fill='none' fillRule='evenodd'>
              <path
                d='M228.193 55.666c-4.395 0-7.267 1.87-7.267 4.759 0 2.719 2.196 3.739 5.745 4.418l1.69.34c2.535.51 3.886 1.36 3.886 2.719 0 1.359-1.35 2.38-4.731 2.38-3.041 0-5.408-1.021-6.084-1.53l-.677 2.38c.677.339 3.043 1.359 6.591 1.359 4.734 0 7.438-1.87 7.438-4.758 0-2.72-2.367-4.078-6.085-4.76l-1.69-.34c-2.704-.51-3.549-1.019-3.549-2.378 0-1.36 1.522-2.38 4.562-2.38 2.536 0 4.395.51 5.24.85l.509-2.039c-1.015-.34-2.875-1.02-5.578-1.02zM75.596 72.32h2.533l-7.604-15.634c-.337-.51-.676-.68-1.182-.68h-1.859L59.542 72.32h2.534l2.029-4.248h9.462l2.03 4.248zm31.261 0v-5.947c1.184.679 2.874 1.019 4.734 1.019 1.013 0 1.69 0 2.533-.17l3.38 5.098h2.704l-3.718-5.777c2.368-1.02 3.887-3.06 3.887-5.439 0-3.058-2.534-5.268-7.097-5.268h-8.956V72.32h2.533zm62.866 0V58.896l11.152 12.745c.338.51.845.68 1.52.68h1.523V56.005h-2.367v12.916l-10.985-12.236c-.337-.51-.673-.68-1.519-.68h-1.691V72.32h2.367zm-97.17-6.456h-7.434l3.717-7.648 3.717 7.648zm39.206-.68c-1.86 0-3.718-.51-4.902-1.19v-6.118h6.592c3.212 0 4.394 1.699 4.394 3.228 0 2.21-1.692 4.08-6.084 4.08zm19.433 7.136h11.83v-2.21h-9.295V56.007h-2.535V72.32zm-41.91 0h2.537V56.006h-2.536V72.32zm107.309-16.314V72.32h13.013v-2.379h-10.477v-5.098h9.123v-2.21h-9.123v-4.417h10.138v-2.21h-12.674zM152.316 72.32h2.537V56.006h-2.537V72.32zM114.97 38.197h7.874l-12.263-24.3c-.643-1.195-1.279-1.652-2.747-1.652h-6.77L88.159 38.197h7.866l2.29-4.785h14.46l2.195 4.785zm64.528 0h7.778l-12.268-24.3c-.636-1.195-1.276-1.652-2.739-1.652h-6.773L152.59 38.197h7.871l2.287-4.785h14.462l2.288 4.785zm27.728-6.35c.279.92 1.375 1.565 2.565 1.565h7.414l5.491-15.273 5.215 20.058h6.955l-5.764-23.005c-.543-2.301-1.829-2.947-3.933-2.947h-7.232l-5.214 15.187-4.122-12.891c-.545-1.65-1.557-2.296-3.203-2.296h-8.143l-6.684 25.952h7.052l5.118-20.058 4.485 13.709zm-32.574-3.683h-9.615l4.856-10.398 4.759 10.398zm-64.44 0h-9.608l4.854-10.398 4.755 10.398zM82.668 38.197l2.927-5.984h-17.3V12.245h-7.412v25.952h21.785zm51.437 0h7.133V18.226l12.453-.828v-5.153h-32.036v5.153l12.45.828v19.97zM10.655 64.552l6.316-2.312c1.316-.481 1.316.584 1.316 2.172v2.922c0 2.364-.79 2.653-1.842 3.038l-5.79 2.119v-7.94m0-12.966l16.053-5.875c1.315-.482 1.315.583 1.315 2.17v2.911c0 2.376-.79 2.665-1.842 3.05l-15.526 5.683v-7.939M9.34 33.109l-8.158-2.986C.13 29.738.13 28.298.13 27.769c0 0 0 1.735 1.578 1.157l39.999-14.64c3.158-1.156 3.158-2.047 1.842-2.528 1.316.481 1.316.481 1.316 4.367 0 3.705 0 4.944-1.579 5.522L11.971 33.109c-1.316.481-1.316.481-2.631 0'
                fill='#FFF'
              />
              <path
                d='M3.55 18.023l13.974 5.115 10.845-3.97L2.235 9.603C.393 8.928.13 8.832.13 10.155v3.44c0 3.176 2.368 4.043 3.42 4.428m40 6.701l-4.336-1.586-10.845 3.969 6.868 2.514 6.47-2.368c3.158-1.156 3.158-2.047 1.842-2.529'
                fill='#ED1650'
              />
              <path
                d='M43.55 24.724c1.315.482 1.315 1.373-1.843 2.529L10.655 38.618v7.94l32.631-11.944c1.579-.578 1.579-1.818 1.579-5.522 0-3.886 0-3.886-1.316-4.368'
                fill='#FFF'
              />
              <path
                d='M43.55 11.758L12.76.488c-1.841-.674-2.105-.77-2.105.553v3.44c0 3.176 2.368 4.043 3.42 4.428l21.162 7.745 6.47-2.368c3.158-1.156 3.158-2.047 1.842-2.528M1.708 28.926l8.948-3.274-8.421-3.083C.393 21.895.13 21.8.13 23.122v4.647s0 1.735 1.578 1.157'
                fill='#ED1650'
              />
            </g>
          </svg>
        </Link>
        <div className='latam-btn-div'>
          <button className='latam-login-btn'>Iniciar sesión</button>
        </div>
      </div>
    </header>
  );
};

export default HeaderFlights;
