import React, { useEffect, useState } from 'react';
import { footerLinksAboutLATAM } from 'DummyData';
import ListItemFooter from './ListItemFooter';
import { footerLinksLegalInfo } from 'DummyData';
import certificado from '../../images/footer/icon.png';
import { associatedLinks } from 'DummyData';

const LargeFooter = () => {
  const [linkAboutLATAM, setLinkAboutLATAM] = useState([]);

  const [linkLegal, setLinkLegal] = useState([]);

  const [linkAsociated, setLinkAsociated] = useState([]);

  useEffect(() => {
    const linksLatam = footerLinksAboutLATAM.map(link => link);
    setLinkAboutLATAM(linksLatam);
  }, []);

  useEffect(() => {
    const linksLegal = footerLinksLegalInfo.map(link => link);
    setLinkLegal(linksLegal);
  }, []);

  useEffect(() => {
    const relatedLinks = associatedLinks.map(link => link);
    setLinkAsociated(relatedLinks);
  }, []);

  return (
    <div className='footer__Container'>
      <div className='big-footer-container'>
        <div className='bg-ftr-cntnr-margins'>
          <div className='ftr-inside-cntnr'>
            <hr />
            <div className='LATAM-self-information'>
              <div className='Ftr-info-cntnr'>
                <h5 className='Footer-titles'>LATAM Airlines</h5>
                <div className='FooterList__container'>
                  <ul>
                    {linkAboutLATAM.map(link => (
                      <ListItemFooter key={link.id} linkDetails={link} />
                    ))}
                  </ul>
                </div>
              </div>
              <div className='Ftr-info-cntnr'>
                <h5 className='Footer-titles'>Información Leegal</h5>
                <div className='FooterList__container'>
                  <ul>
                    {linkLegal.map(link => (
                      <ListItemFooter key={link.id} linkDetails={link} />
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className='Ftr-info-cntnr'>
              <h5 className='Footer-titles'>Portales asociados</h5>
              <div className='FooterList__container'>
                <ul>
                  {linkAsociated.map(link => (
                    <ListItemFooter key={link.id} linkDetails={link} />
                  ))}
                </ul>
              </div>
            </div>
            <div className='Ftr-info-cntnr' style={{ width: '100%' }}>
              <h5 className='Footer-titles'>Contacta con nosotros</h5>
              <ul className='FooterIconLink__UL'>
                <li className='FooterIconLink__LI'>
                  <a href=''>
                    <i className='FooterIconLink__LI-icon' aria-hidden='true'>
                      <svg
                        color='#3A5795'
                        xmlns='http://www.w3.org/2000/svg'
                        width='20px'
                        height='20px'
                        viewBox='0 0 20 20'
                        fill='none'
                        focusable='false'>
                        <path
                          fill='currentColor'
                          // fillRule='evenodd'
                          d='M20 0v20H0V0h20zm-7.636 4.8h-1.652C8.61 4.8 8.513 6.368 8.51 6.78V8.3H7.458v1.8H8.51V15h2.202v-4.95h1.451s.1-.75.2-1.6v-.2h-1.651v-1.2c0-.15.25-.4.45-.4h1.202V4.8z'></path>
                      </svg>
                    </i>
                  </a>
                </li>
                <li className='FooterIconLink__LI'>
                  <a href=''>
                    <i className='FooterIconLink__LI-icon' aria-hidden='true'>
                      <svg
                        color='#5EA9DD'
                        xmlns='http://www.w3.org/2000/svg'
                        width='20px'
                        height='20px'
                        viewBox='0 0 20 20'
                        fill='none'
                        focusable='false'>
                        <path
                          fill='currentColor'
                          fillRule='evenodd'
                          d='M20 0v20H0V0h20zm-7.987 5.4c-1.25 0-2.252 1-2.252 2.25 0 .15 0 .35.05.5-1.351-.1-2.553-.55-3.554-1.3-.35-.25-.65-.55-.95-.9-.1-.05-.15-.15-.201-.2-.2.35-.3.75-.3 1.15 0 .739.34 1.392.866 1.803l.135.097-.193-.012a2.06 2.06 0 01-.52-.144L4.757 8.5v.05c0 .75.4 1.4.95 1.8.25.2.551.35.902.4-.05 0-.15.05-.2.05a.929.929 0 01-.296.05h-.21a.929.929 0 01-.296-.05c.15.45.45.85.851 1.15.35.219.701.4 1.119.44l.183.01-.15.15c-.751.55-1.702.85-2.653.85-.15 0-.4 0-.55-.05.1.1.2.15.35.2.95.5 2.002.8 3.153.8 4.113 0 6.358-3.302 6.454-6.254l.003-.196v-.3c.3-.2.6-.5.85-.8.1-.1.2-.2.2-.4l-.35.144a2.592 2.592 0 01-.17.06l-.78.196c.35-.25.65-.5.85-.9.05-.1.1-.2.15-.35-.4.25-.9.45-1.4.55-.034-.033-.09-.066-.138-.1l-.063-.05c-.4-.35-.901-.55-1.502-.55z'></path>
                      </svg>
                    </i>
                  </a>
                </li>
                <li className='FooterIconLink__LI'>
                  <a href=''>
                    <span className='FooterIconLink__LI-span'></span>
                    <i className='FooterIconLink__LI-icon' aria-hidden='true'>
                      <svg
                        color='#CC181E'
                        xmlns='http://www.w3.org/2000/svg'
                        width='20px'
                        height='20px'
                        viewBox='0 0 20 20'
                        fill='none'
                        focusable='false'>
                        <path
                          fill='currentColor'
                          fillRule='evenodd'
                          d='M20 0v20H0V0h20zm-9.85 5.7h-.4c-1.4 0-2.75.05-4.1.1-1 0-1.8.8-1.8 1.75-.1.75-.15 1.55-.15 2.3 0 .8.05 1.55.1 2.35 0 .6.3 1.1.7 1.4.3.25.65.35 1.05.35 1.4.05 2.85.1 4.3.1 1.45 0 2.95-.05 4.3-.1 1 0 1.8-.8 1.8-1.75.05-.8.1-1.55.1-2.35.05-.75 0-1.55-.05-2.3 0-.4-.15-.8-.4-1.1-.3-.4-.8-.65-1.35-.65-1.35-.05-2.7-.1-4.1-.1zM7.7 7.9c0-.4.3-.55.65-.35l3.4 1.95c.15.05.2.15.25.25.1.2 0 .35-.2.5L8.4 12.2c-.2.1-.35.1-.45.05-.15-.05-.25-.2-.25-.45z'></path>
                      </svg>
                    </i>
                  </a>
                </li>
                <li className='FooterIconLink__LI'>
                  <a href=''>
                    <span className='FooterIconLink__LI-span'></span>
                    <i className='FooterIconLink__LI-icon' aria-hidden='true'>
                      <svg
                        color='#DC3175'
                        xmlns='http://www.w3.org/2000/svg'
                        width='20px'
                        height='20px'
                        viewBox='0 0 20 20'
                        fill='none'
                        focusable='false'>
                        <path
                          fill='currentColor'
                          fillRule='evenodd'
                          d='M20 0v20H0V0h20zm-9.124 3H9.119c-.907.003-1.258.01-1.682.028l-.138.006-.214.01c-.71.034-1.205.147-1.636.31l-.034.013c-.46.18-.851.419-1.24.808-.39.389-.629.78-.808 1.24-.173.445-.29.954-.325 1.699-.028.62-.039.889-.041 2.047v1.72c.002.907.01 1.258.027 1.682l.006.138.01.214c.034.71.147 1.205.31 1.636l.013.034c.18.46.419.851.808 1.24.389.39.78.629 1.24.808.445.173.954.29 1.699.325l.158.007c.516.023.833.032 1.888.034h.42l.532.001c1.44 0 1.884-.006 2.38-.025l.187-.008.236-.01c.71-.035 1.205-.148 1.636-.311l.034-.013c.46-.18.851-.419 1.24-.808.39-.389.629-.78.808-1.24.173-.445.29-.954.325-1.699l.007-.158c.023-.516.032-.833.034-1.888v-.42L17 9.888c0-1.44-.006-1.884-.025-2.38l-.008-.187-.01-.236c-.035-.71-.148-1.205-.311-1.636l-.013-.034a3.432 3.432 0 00-.808-1.24 3.425 3.425 0 00-1.24-.808c-.445-.173-.954-.29-1.699-.325h-.02c-.638-.03-.91-.04-2.225-.042zm-.231 1.167c1.118.002 1.472.008 1.952.029l.3.013c.643.031 1.01.135 1.258.228l.025.01.037.014a2.2 2.2 0 01.798.524c.249.25.403.486.532.818.096.248.204.603.24 1.234l.003.044.002.044c.028.614.038.877.04 1.996l.001.509v.882c-.001 1.234-.008 1.592-.03 2.098l-.011.265c-.03.642-.13 1.013-.223 1.263l-.016.042-.014.037c-.128.321-.28.554-.524.798a2.204 2.204 0 01-.819.532c-.24.093-.595.203-1.233.24l-.044.003-.044.002a35.45 35.45 0 01-1.996.04l-.509.001h-.882c-1.234-.001-1.592-.008-2.098-.03l-.265-.011c-.642-.03-1.013-.13-1.263-.223l-.042-.016-.037-.014a2.197 2.197 0 01-.798-.524 2.205 2.205 0 01-.532-.819c-.096-.248-.204-.602-.24-1.233l-.003-.044-.002-.044a35.984 35.984 0 01-.04-1.996l-.001-.509v-.925c0-.93.005-1.353.017-1.728l.007-.186.005-.14.013-.288c.03-.629.13-.994.222-1.241l.016-.042.014-.037a2.2 2.2 0 01.524-.798c.25-.249.486-.403.819-.532.25-.097.627-.213 1.32-.245l.247-.01c.535-.024.893-.03 2.259-.031zM10 6.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm0 1.167a2.333 2.333 0 110 4.666 2.333 2.333 0 010-4.666zm3.792-2.042a.875.875 0 100 1.75.875.875 0 000-1.75z'></path>
                      </svg>
                    </i>
                  </a>
                </li>
              </ul>
              <h5 className='Footer-titles'>Certificaciones</h5>
              <ul className='FooterIconLink__UL'>
                <li className='FooterIconLink__LI'>
                  <a href=''>
                    <i className='FooterIconLink__LI-icon' aria-hidden='true'>
                      <img src={certificado} alt='Logo certificado' />
                    </i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LargeFooter;
