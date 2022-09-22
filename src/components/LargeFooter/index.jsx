import React, { useEffect, useState } from 'react';
import { footerLinksAboutLATAM } from 'DummyData';
import ListItemFooter from './ListItemFooter';
import { footerLinksLegalInfo } from 'DummyData';
import { associatedLinks } from 'DummyData';

const LargeFooter = () => {
  const [linkAboutLATAM, setLinkAboutLATAM] = useState([]);

  useEffect(() => {
    const linksLatam = footerLinksAboutLATAM.map(link => link);
    setLinkAboutLATAM(linksLatam);
  }, []);

  const [linkLegal, setLinkLegal] = useState([]);

  useEffect(() => {
    const linksLegal = footerLinksLegalInfo.map(link => link);
    setLinkLegal(linksLegal);
  }, []);

  const [linkAsociated, setLinkAsociated] = useState([]);

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
            <div className='Ftr-info-cntnr' width='100%'>
              <h5 className='Footer-titles'>Contacta con nosotros</h5>
              <ul></ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LargeFooter;
