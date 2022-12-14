import React, { useEffect, useState } from 'react';
import Footer from 'components/Footer-Register';
import HeaderRegister from '../components/Header-Register/HeaderRegister';
import { MuiAccordion } from 'components/MuiComponents/MuiAccordion';
import { useSelector } from 'react-redux';
import BodyPassengerForm from 'components/BodyPassengerForm';
import CommonButton from 'components/Buttons/CommonButton';
import { useRef } from 'react';

const Passenger = () => {
  const luggageTotal = useSelector(state => state.luggageReducer.totalPrice);
  const { passengersLuggage } = useSelector(state => state.luggageReducer);
  const { adults, kids, id } = useSelector(state => state.bookingReducer);
  const flightDataPrice = useSelector(state => state.bookingReducer.flightData);
  const passengersToRender = adults + kids;
  const [isDisable, setIsDisable] = useState(true);
  const [expanded, setExpanded] = useState(false);

  const {
    departureUser,
    arrivalUser,
    flightToGo,
    flightToReturn,
    passengerRelated,
  } = useSelector(state => state.flightsReducer);

  let totalSeatsDeparture = 0;
  departureUser.map(item => {
    let price = item.price;
    totalSeatsDeparture += price;
  });
  let totalSeatsArival = 0;
  arrivalUser.map(item => {
    let price = item.price;
    totalSeatsArival += price;
  });
  let seatsTotal = totalSeatsArival + totalSeatsDeparture;

  let flightTotal = 0;
  flightDataPrice.map(item => (flightTotal += item.price));

  const { name, lastname, documentType, phoneNumber, documentNumber } =
    useSelector(state => state.userReducer);
  const { departureCity, arrivalCity } = useSelector(
    state => state.bookingReducer
  );

  const handler = window.ePayco.checkout.configure({
    // eslint-disable-next-line no-undef
    key: process.env.REACT_APP_PUBLIC_KEY,
    test: true,
  });

  const data = {
    name: `LA${id}`,
    description: `Vuelo de ${departureCity.split(',')[0]} a ${
      arrivalCity.split(',')[0]
    }`,
    invoice: `${id}`,
    currency: 'cop',
    amount: `${seatsTotal + luggageTotal + flightTotal}`,
    tax_base: '0',
    tax: '0',
    country: 'co',
    lang: 'es',
    external: 'false',
    extra1: 'extra1',
    extra2: 'extra2',
    extra3: 'extra3',
    response: `https://latamairlines.vercel.app/payment-response`,
    name_billing: `${name || ''} ${lastname || ''}`,
    address_billing: '',
    type_doc_billing: `${documentType || ''}`,
    mobilephone_billing: `${phoneNumber || ''}`,
    number_doc_billing: `${documentNumber || ''}`,
    methodsDisable: ['SP', 'CASH', 'DP'],
  };

  const bookingData = {
    bookingId: id,
    tripGoFlight: flightToGo.id,
    tripGoBackFlight: flightToReturn.id,
    users: passengerRelated,
    reservedSeats: {
      tripGoSeats: departureUser,
      tripReturnSeats: arrivalUser,
    },
    luggage: passengersLuggage,
    isPaid: true,
  };

  const isUnable = useRef();

  useEffect(() => {
    if (passengerRelated.length === passengersToRender) {
      setIsDisable(false);
      isUnable.current.className = 'CommonButton__button';
    }
  }, [expanded]);

  const handleClick = () => {
    const listOfUsers = passengerRelated.map(user => {
      return `${user.firstName} ${user.lastName}`;
    });
    sessionStorage.setItem('listOfUsers', JSON.stringify(listOfUsers));
    sessionStorage.setItem('bookingData', JSON.stringify(bookingData));
    handler.open(data);
  };

  return (
    <div>
      <HeaderRegister />
      <div className='Passenger__bodycontainer'>
        <div className='Passenger__LATAM__grid'>
          <section className='Passenger__Form'>
            <ol className='Passenger__Form__list'>
              {[...Array(passengersToRender)].map((item, index) => (
                <li key={`pass${index}`}>
                  <MuiAccordion
                    classname='eachform'
                    idItem={index + 1}
                    title={`Pasajero ${index + 1}`}
                    expanded={expanded}
                    setExpanded={setExpanded}>
                    <BodyPassengerForm
                      passengerId={index}
                      setExpanded={setExpanded}
                    />
                  </MuiAccordion>
                </li>
              ))}
            </ol>
          </section>
          <aside className='Passenger__FlightDetails'>
            <div className='Passenger__FlightDetails__shoppingCart'>
              <h2>Detalle de viaje</h2>
              <div className='priceCards__main'>
                <div className='priceCards__main-img'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='32px'
                    height='32px'
                    viewBox='0 0 32 32'
                    fill='grey'
                    focusable='false'>
                    <path
                      fill='darkblue'
                      fillRule='evenodd'
                      d='M14.8993 17.6342C15.1121 17.5527 15.3412 17.6098 15.5703 17.7892C15.7339 17.9441 15.7748 18.1562 15.693 18.4253L13.4757 24.6236L15.9302 24.0282C16.143 23.9467 16.2739 23.8733 16.323 23.7917L21.3139 15.4975C21.4203 15.3343 21.5267 15.2446 21.633 15.2202L28.7676 12.6512C29.504 12.3902 30.0522 12.015 30.4122 11.5257C30.7722 11.0363 30.8377 10.5062 30.6331 9.92715C30.5758 9.7722 30.494 9.60095 30.3713 9.41337C30.2486 9.22579 30.0604 9.07082 29.7985 8.94033C29.5367 8.80984 29.1604 8.75275 28.6858 8.7609C28.2113 8.77721 27.5813 8.91587 26.7876 9.17685L21.5185 11.069C21.363 11.1179 21.1994 11.1179 21.0439 11.0526C20.8884 10.9874 20.7821 10.8732 20.7248 10.7182C20.6676 10.5388 20.6839 10.3676 20.7657 10.2208C20.8476 10.074 20.9621 9.97609 21.1258 9.92715L26.3949 8.03507C29.2749 7.03192 31.0667 7.53757 31.7867 9.5357C32.024 10.1963 32.0649 10.7917 31.9013 11.3299C31.7458 11.8682 31.4268 12.3494 30.9522 12.7735C30.4777 13.1976 29.8804 13.5401 29.1686 13.8011L22.2712 16.2886L17.3539 24.4687C17.1985 24.7541 16.8221 25.0069 16.2411 25.219L13.0339 25.9693C12.6575 26.0508 12.3875 25.9693 12.1993 25.7328C12.0111 25.4963 11.9784 25.219 12.0766 24.9009L14.0975 19.2164L9.30291 20.8802C7.98563 21.3287 6.75019 21.3695 5.59654 20.9943C4.4429 20.6273 3.55924 19.8852 2.92105 18.7842L0.188275 13.9642C-0.17991 13.2791 -0.00808601 12.8061 0.703738 12.5451L2.80649 11.7948C3.23195 11.6398 3.62469 11.7051 3.99287 11.9905L7.75652 14.7961L12.4693 13.0589L6.48015 7.21134C6.30015 6.97483 6.21835 6.72199 6.24289 6.46101C6.32471 6.20003 6.49654 6.01246 6.75836 5.90643H6.79926L9.81019 5.07457C10.1784 4.94408 10.5466 4.98485 10.9148 5.1969L17.1412 8.59781C17.2966 8.67936 17.3948 8.80169 17.4357 8.97296C17.4766 9.14423 17.4521 9.29918 17.3784 9.42967C17.2966 9.58463 17.1821 9.69064 17.0266 9.74773C16.8712 9.80482 16.7075 9.78852 16.5521 9.70696L10.3256 6.27345C10.3011 6.24898 10.252 6.24898 10.1702 6.27345L7.91198 6.90142L14.0484 12.8632C14.1057 12.9447 14.1466 13.0344 14.1875 13.1405C14.2284 13.2465 14.2366 13.3525 14.212 13.4586C14.1548 13.6706 14.0321 13.8174 13.8193 13.8908L7.87108 16.0602C7.63381 16.1173 7.44563 16.0847 7.31472 15.9786L3.1992 12.9366L1.37466 13.6053L3.95198 18.148C4.42652 19.0207 5.09742 19.5916 5.97288 19.8689C6.84834 20.1462 7.83835 20.0891 8.94291 19.6894L14.8993 17.6342Z'></path>
                  </svg>
                </div>
                <div className='priceCards__main-info'>
                  <div>
                    <p>Vuelos</p>
                  </div>
                  <div>
                    <span>COP {flightTotal.toLocaleString('en-US')}</span>
                  </div>
                </div>
              </div>
              <div className='priceCards__main'>
                <div className='priceCards__main-img'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='32px'
                    height='32px'
                    viewBox='0 0 32 32'
                    fill='none'
                    focusable='false'>
                    <path
                      fill='darkblue'
                      fillRule='evenodd'
                      d='M0.472913 3.32749C0.647577 3.26619 0.804826 3.28369 0.962024 3.37126C1.11922 3.45882 1.2237 3.58142 1.28483 3.75655L7.27613 23.3625C7.52939 24.2469 7.8699 24.9737 8.28037 25.5254C8.69083 26.0858 9.17127 26.5061 9.71273 26.7951C9.9398 26.9089 10.2017 27.0053 10.4812 27.0753C10.7694 27.1454 11.0661 27.1804 11.3805 27.1804C12.0093 27.1804 12.7692 27.0228 13.6687 26.7075C14.5682 26.3923 15.2845 26.1384 15.826 25.937C16.3675 25.7356 16.6815 25.6217 16.7688 25.5954C16.8562 25.5692 16.9788 25.5779 17.1535 25.6392C17.3281 25.7268 17.4416 25.8494 17.5202 26.0245C17.5901 26.1996 17.5988 26.366 17.5377 26.5412C17.5115 26.6287 17.4591 26.6988 17.3893 26.7513C17.3194 26.8126 17.2408 26.8476 17.1535 26.8827C16.9002 26.9702 16.6293 27.0665 16.3411 27.1804C15.7997 27.3818 15.0398 27.6532 14.0529 27.9947C13.0661 28.3362 12.1929 28.5114 11.4244 28.5114C10.9965 28.5114 10.5861 28.4676 10.2018 28.38C9.81758 28.2925 9.45079 28.1699 9.11019 27.9947C8.39407 27.627 7.77369 27.0841 7.24969 26.3835C6.7257 25.683 6.29803 24.8074 5.98363 23.7478L0.0362512 4.14184C-0.0248813 3.96671 -0.00758546 3.80909 0.0797468 3.65148C0.175812 3.49386 0.306981 3.38878 0.472913 3.32749ZM11.7737 4.40455C11.7737 5.2014 11.4855 5.90191 10.9178 6.4886C10.3502 7.07529 9.65158 7.36425 8.82193 7.36425C7.99227 7.36425 7.28473 7.07529 6.6996 6.4886C6.11447 5.90191 5.82628 5.21016 5.82628 4.40455C5.82628 3.57268 6.11447 2.86338 6.6996 2.27669C7.28473 1.69 7.99227 1.40103 8.82193 1.40103C9.65158 1.40103 10.3502 1.69875 10.9178 2.27669C11.4855 2.86338 11.7737 3.57268 11.7737 4.40455ZM10.4462 4.40455C10.4462 3.94921 10.289 3.55516 9.97456 3.22241C9.66016 2.88966 9.27606 2.73205 8.82193 2.73205C8.3678 2.73205 7.98326 2.89842 7.66887 3.22241C7.35447 3.55516 7.19724 3.94921 7.19724 4.40455C7.19724 4.8599 7.35447 5.24517 7.66887 5.5604C7.98326 5.87564 8.3678 6.03326 8.82193 6.03326C9.27606 6.03326 9.66016 5.87564 9.97456 5.5604C10.289 5.24517 10.4462 4.8599 10.4462 4.40455ZM24.1835 19.6322C23.9303 18.9142 23.5462 18.3888 23.0484 18.0473C22.5506 17.7058 21.9392 17.5306 21.2318 17.5306H15.2844C15.1098 17.5306 14.9698 17.4869 14.8563 17.3993C14.7428 17.3117 14.6729 17.1979 14.638 17.0578L13.1446 11.6988C12.97 11.1296 12.6206 10.683 12.0704 10.3678C11.529 10.0525 10.9263 10.0087 10.2714 10.2364L8.81297 10.6655L11.5988 19.7198L17.9743 20.7093C18.1752 20.7356 18.3235 20.8231 18.4195 20.9632C18.5156 21.1033 18.5506 21.2609 18.5244 21.4361C18.4982 21.6375 18.4109 21.7863 18.2711 21.8827C18.1314 21.979 17.9569 22.0228 17.756 21.9877L10.9963 20.9545C10.8827 20.9545 10.7778 20.9107 10.673 20.8231C10.577 20.7356 10.5074 20.6392 10.4812 20.5254L7.35459 10.4378C7.32839 10.2364 7.33696 10.0613 7.39809 9.90368C7.45049 9.74606 7.58186 9.64096 7.78273 9.57967L9.87861 8.93169C10.9091 8.61645 11.8436 8.68649 12.6994 9.14184C13.5553 9.59718 14.1229 10.3152 14.4111 11.2872L15.7821 16.1821H21.2143C22.1837 16.1821 23.0308 16.4361 23.7644 16.9352C24.4892 17.4343 25.0568 18.1699 25.4586 19.1419L29.0128 29.0981C29.0652 29.2732 29.0652 29.4396 28.9953 29.6147C28.9255 29.7898 28.8033 29.9037 28.6286 29.9562C28.6024 29.9825 28.5764 30 28.5676 30C28.5502 30 28.5329 30 28.5067 30H28.4192C28.2446 30 28.1046 29.965 27.9911 29.8949C27.8776 29.8249 27.8077 29.7198 27.7728 29.5709L24.1835 19.6322ZM30 9.16811C30 10.0875 29.7464 10.7881 29.2486 11.296C28.7508 11.7951 28.0437 12.049 27.1267 12.049H20.7077C20.5069 12.049 20.3409 11.9877 20.2186 11.8564C20.0876 11.725 20.0267 11.5762 20.0267 11.4098V2.91593C20.0267 1.99649 20.2799 1.28719 20.7951 0.770556C21.3104 0.253918 22.0175 0 22.9345 0H29.31C29.5109 0 29.6769 0.0612703 29.7992 0.192619C29.9302 0.323968 29.991 0.472838 29.991 0.639213V9.16811H30ZM22.9435 1.31349C22.402 1.31349 22.0089 1.44481 21.7644 1.69875C21.5199 1.95269 21.3977 2.35552 21.3977 2.89842V10.7093H27.1353C27.6767 10.7093 28.0698 10.5867 28.3143 10.3415C28.5589 10.0963 28.6811 9.70228 28.6811 9.15937V1.30472H22.9435V1.31349Z'></path>
                  </svg>
                </div>
                <div className='priceCards__main-info'>
                  <div>
                    <p>Asientos</p>
                  </div>
                  <div>
                    <span>
                      COP{' '}
                      {(totalSeatsDeparture + totalSeatsArival).toLocaleString(
                        'en-US'
                      )}
                    </span>
                  </div>
                </div>
              </div>

              <div className='priceCards__main'>
                <div className='priceCards__main-img'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='32px'
                    height='32px'
                    viewBox='0 0 32 32'
                    fill='none'
                    focusable='false'>
                    <path
                      fill='darkblue'
                      d='M18.5073 5.24576H23.3398V1.72944L18.5073 3.46389V5.24576ZM8.0008 9.53517H13.1624V6.01885L8.0008 7.70612V9.53517ZM15.9229 32C15.7389 32 15.5739 31.934 15.4576 31.7926C15.3318 31.6512 15.2638 31.5004 15.2638 31.3118V28.9362H5.74531V31.3118C5.74531 31.4909 5.67684 31.6512 5.53158 31.7926C5.39601 31.934 5.21243 32 4.9897 32C4.79602 32 4.63162 31.934 4.49604 31.7926C4.35078 31.6512 4.28231 31.5004 4.28231 31.3118V28.9362H1.74616C1.56216 28.9362 1.38759 28.8702 1.23264 28.7288C1.0777 28.5968 1 28.4365 1 28.248V12.0427C1 11.2791 1.23287 10.6758 1.70738 10.2139C2.17221 9.7614 2.80209 9.52574 3.58649 9.52574H6.54821V7.2442C6.54821 6.87654 6.70338 6.65032 7.02295 6.56547L13.6854 4.36909C13.9081 4.27482 14.1218 4.31239 14.3446 4.46323C14.5673 4.61406 14.6737 4.80268 14.6737 5.01008V10.2611C14.6737 10.4496 14.596 10.6097 14.441 10.7605C14.2861 10.9114 14.1115 10.987 13.9275 10.987H3.6054C3.19867 10.987 2.91773 11.0716 2.76278 11.2413C2.60784 11.411 2.53014 11.6751 2.53014 12.0427V27.5221H17.4519C17.8586 27.5221 18.1396 27.4467 18.2945 27.2958C18.4495 27.145 18.5272 26.8906 18.5272 26.523V10.9962H16.9289C16.7062 10.9962 16.5323 10.9208 16.3871 10.77C16.2418 10.6191 16.1733 10.4496 16.1733 10.2705C16.1733 10.0631 16.2418 9.88395 16.3871 9.74254C16.5226 9.60114 16.7062 9.53517 16.9289 9.53517H19.2242C19.4372 9.53517 19.6208 9.60114 19.766 9.74254C19.9016 9.88395 19.9798 10.0537 19.9798 10.2705V21.7811H28.5592C29.2177 21.7811 29.5474 21.4322 29.5474 20.7346V6.63153H17.7328C17.5391 6.63153 17.3747 6.56556 17.2391 6.42416C17.0939 6.28275 17.0264 6.12248 17.0264 5.94336V2.92671C17.0264 2.62504 17.1808 2.3988 17.4907 2.23854L23.8628 0.0513683C24.0855 -0.0429036 24.2983 -0.00510278 24.521 0.145732C24.7147 0.268286 24.8019 0.447246 24.8019 0.692352V5.25519H30.2926C30.4766 5.25519 30.642 5.32113 30.7872 5.43426C30.9325 5.55681 31 5.72653 31 5.94336V20.7346C31 21.5264 30.7866 22.1392 30.3702 22.5823C29.9441 23.0253 29.3443 23.2423 28.5696 23.2423H27.3978V25.203C27.3978 25.4104 27.3294 25.5802 27.1841 25.7027C27.0388 25.8253 26.865 25.8912 26.6422 25.8912C26.4195 25.8912 26.2546 25.8347 26.1287 25.7027C26.0028 25.5802 25.9348 25.4104 25.9348 25.203V23.2423H19.9798V26.5324C19.9798 27.296 19.7472 27.8898 19.3017 28.3141C18.8466 28.7383 18.2266 28.955 17.4519 28.955H16.6975V31.3307C16.6975 31.5098 16.6299 31.6701 16.4847 31.8115C16.32 31.9341 16.1457 32 15.9229 32Z'></path>
                  </svg>
                </div>
                <div className='priceCards__main-info'>
                  <div>
                    <p>Equipaje</p>
                  </div>
                  <div>
                    <span>COP {luggageTotal.toLocaleString('en-US')}</span>
                  </div>
                </div>
              </div>
              <div className='priceCards__main'>
                <div className='priceCards__main-img-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='32px'
                    height='32px'
                    viewBox='0 0 32 32'
                    fill=''
                    focusable='false'>
                    <path
                      d='M5.79951 2.00969C5.94303 2.00969 6.07709 2.06773 6.1937 2.17427C6.31031 2.28081 6.40005 2.41632 6.45387 2.58097L6.98296 5.19618H30.0546C30.4313 5.19618 30.7003 5.27366 30.8439 5.42862C30.9874 5.58358 31.0317 5.82571 30.9779 6.14532L29.1751 13.6902C29.1482 13.8161 29.0767 13.9225 28.978 14.0193C28.8704 14.1162 28.7626 14.1742 28.646 14.213L14.5812 17.1573C14.348 17.1864 14.1591 17.1575 14.0066 17.0606C13.8631 16.9638 13.7733 16.8088 13.7464 16.5861C13.7195 16.3633 13.7555 16.1792 13.8542 16.0145C13.9528 15.8596 14.1141 15.7627 14.3114 15.7336L27.9373 12.8377L29.4353 6.66836H7.27905L9.56624 17.4867C9.74564 18.31 10.0869 18.9103 10.5981 19.288C11.1094 19.6658 11.8537 19.8596 12.8135 19.8596H26.9685C27.1748 19.8596 27.3449 19.9273 27.4705 20.0726C27.605 20.2179 27.6684 20.402 27.6684 20.615C27.6684 20.8087 27.605 20.9734 27.4705 21.109C27.3359 21.2543 27.1659 21.322 26.9685 21.322H12.8135C11.4949 21.322 10.4454 21.0122 9.67398 20.3923C8.89359 19.7724 8.41831 18.8814 8.24788 17.7095C8.18509 17.4576 8.12255 17.1478 8.05079 16.7797C7.97903 16.4117 7.88007 15.9854 7.76346 15.4721C7.55715 14.523 7.33311 13.4672 7.08195 12.2953C6.83079 11.1234 6.58898 9.9516 6.35576 8.77968C6.23915 8.20825 6.12198 7.66593 6.00537 7.14293C5.88876 6.61993 5.78125 6.12594 5.70052 5.65136C5.58391 5.17678 5.48496 4.76027 5.4132 4.39223C5.34144 4.02419 5.26993 3.72399 5.21611 3.46248H1.69991C1.4936 3.46248 1.32355 3.39472 1.19797 3.24944C1.06342 3.10416 1 2.92977 1 2.70701C1 2.5133 1.06342 2.34864 1.19797 2.21305C1.33252 2.06777 1.4936 2 1.69991 2H5.79951V2.00969ZM17.3975 26.4941C17.3975 27.4723 17.0837 28.305 16.4558 28.983C15.8279 29.661 15.0562 30 14.1503 30C13.2712 30 12.5089 29.661 11.8631 28.983C11.2172 28.305 10.8942 27.4723 10.8942 26.4941C10.8942 25.5449 11.2172 24.7313 11.8631 24.0534C12.5089 23.3754 13.2712 23.0364 14.1503 23.0364C15.0562 23.0364 15.8279 23.3754 16.4558 24.0534C17.0837 24.7313 17.3975 25.5449 17.3975 26.4941ZM16.0433 26.4941C16.0433 25.9517 15.8546 25.4866 15.4958 25.0895C15.128 24.6924 14.6795 24.4988 14.1503 24.4988C13.6479 24.4988 13.2172 24.6924 12.8494 25.0895C12.4816 25.4866 12.3028 25.9517 12.3028 26.4941C12.3028 27.0655 12.4816 27.5497 12.8494 27.9372C13.2172 28.3342 13.6479 28.5278 14.1503 28.5278C14.6795 28.5278 15.128 28.3342 15.4958 27.9372C15.8546 27.5497 16.0433 27.0655 16.0433 26.4941ZM27.6859 26.4941C27.6859 27.4723 27.3722 28.305 26.7443 28.983C26.1164 29.661 25.3447 30 24.4387 30C23.5327 30 22.7619 29.661 22.134 28.983C21.5061 28.305 21.1914 27.4723 21.1914 26.4941C21.1914 25.5449 21.5061 24.7313 22.134 24.0534C22.7619 23.3754 23.5327 23.0364 24.4387 23.0364C25.3447 23.0364 26.1164 23.3754 26.7443 24.0534C27.3722 24.7313 27.6859 25.5449 27.6859 26.4941ZM26.3229 26.4941C26.3229 25.9517 26.1432 25.4866 25.7754 25.0895C25.4077 24.6924 24.9589 24.4988 24.4387 24.4988C23.9364 24.4988 23.4971 24.6924 23.1203 25.0895C22.7436 25.4866 22.5466 25.9517 22.5466 26.4941C22.5466 27.0655 22.7346 27.5497 23.1203 27.9372C23.4971 28.3342 23.9364 28.5278 24.4387 28.5278C24.9679 28.5278 25.4077 28.3342 25.7754 27.9372C26.1432 27.5497 26.3229 27.0655 26.3229 26.4941Z'
                      fill='#ffffff'></path>
                  </svg>
                </div>
                <div className='priceCards__main-info'>
                  <div>
                    <p>Precio final</p>
                  </div>
                  <div>
                    <span>
                      COP{' '}
                      {(seatsTotal + luggageTotal + flightTotal).toLocaleString(
                        'en-US'
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <div className='Passenger__FlightDetails__shoppingCart__button'></div>
              <div className='Passenger__FlightDetails__shoppingCart__button'>
                <CommonButton
                  isDisable={isDisable}
                  trigger={handleClick}
                  isUnable={isUnable}>
                  Continuar
                </CommonButton>
              </div>
            </div>
          </aside>
        </div>
      </div>
      <Footer />
    </div>
  );
};
//

export default Passenger;
