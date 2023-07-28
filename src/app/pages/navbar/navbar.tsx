

import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';

import Dashboard from '@/app/screens/dashboard/dashboard';

import dot from '../../../assets/images/dot.png'
import image8 from "../../../assets/images/image8.png"
import logo from "../../../assets/images/logo.png"
import monke from "../../../assets/images/monke.png"
import monkedao from "../../../assets/images/monkedao.png"
import dashboardlogo from "../../../assets/images/dashboardlogo.png"


export default function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  return (
    <div>
      <Head>
        <title>Monke Dashboard</title>
        <a rel="icon" href="/favicon.ico"></a>
      </Head>
      <nav className="w-full shadow text-left" style={{
        backgroundImage: `url(/Maskgroup.png)`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        height: "120px",
        width: "100%"
      }} >
        <div className="flex justify-between px-4 md:px-8 lg:px-16 mx-auto md:items-center w-full">

          <div className="flex items-center justify-between  md:py-5 md:block w-1/3 ">
            <div className="w-30 h-30 lg:w-36 lg:h-14">
              <Image className="object-contain" src={monkedao} alt="monkedao" />
            </div>
          </div>
          <div className="flex justify-center items-center mt-2  w-14 h-16 lg:h-18 rounded-full overflow-hidden lg:w-1/3 ">
            <Image
              src={monke}
              alt="logo"
              className=" rounded-full "
            />
          </div>

          <div className="flex justify-end items-center w-1/3 ">

            <div className='flex flex-row justify-center items-center'>
              <div style={{}} className={`flex  lg:block md:pb-0 md:mt-0 ${navbar ? 'block' : 'hidden'
                }`}
              >
                <ul className="flex flex-row items-center justify-between m-2">
                  <li className="text-white border-r p-1" style={{ borderColor: 'rgba(255, 255, 255, 0.30)' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 512 512" id="IconChangeColor"><title>ionicons-v5_logos</title><path d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z" id="mainIconPathAttribute" fill="#ffffff" stroke-width="2" stroke="#000000"></path></svg>
                  </li>
                  <li className="text-white  border-r p-1" style={{ borderColor: 'rgba(255, 255, 255, 0.30)' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" id="mainIconPathAttribute" fill="#ffffff"></path> </svg>
                  </li>
                  <li className="text-white border-r p-1 " style={{ borderColor: 'rgba(255, 255, 255, 0.30)' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" id="IconChangeColor" height="20" width="20"><path d="M7 17H2a2 2 0 0 1-2-2V2C0 .9.9 0 2 0h16a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-5l4 2v1H3v-1l4-2zM2 2v11h16V2H2z" id="mainIconPathAttribute" fill="#ffffff"></path></svg>
                  </li>
                  <li className="text-white  border-r p-1" style={{ borderColor: 'rgba(255, 255, 255, 0.30)' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" id="mainIconPathAttribute" fill="#ffffff"></path> </svg>
                  </li>
                </ul>
              </div>
              <div className="ml-2 hidden lg:block w-[59px] h-[59px]"> <Image src={image8} alt="image8" /></div>
            </div>

            <div className="block lg:hidden">
              <button
                className="flex justify-center items-center p-2 m-4 ml-20 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
            <div className="relative hidden lg:block w-50 ml-4">
              <button id="dropdownInformationButton" onClick={toggleDropdown} className="flex  items-center bg-white hover:white focus:ring-4  font-medium  text-sm-14px px-5 py-2.5 text-center inline-flex  w-full " style={{ color: '#184623' }} type="button">

                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 19" id="home">
                  <path fill="#184623" fill-rule="evenodd" d="M299.875 576.212c0 .552-.476.788-1.063.788h-1.062c-.587 0-1.063-.236-1.063-.788v-1c0-1.105-.95-2.212-2.125-2.212h-2.125c-1.174 0-2.125 1.107-2.125 2.212v1c0 .552-.476.788-1.062.788h-1.063c-.586 0-1.062-.236-1.062-.788v-8.063c0-.133.056-.26.155-.354l5.458-5.136a1.109 1.109 0 0 1 1.503 0l5.479 5.156a.488.488 0 0 1 .155.353v8.044zm2.125-8.587a.974.974 0 0 0-.31-.706l-6.692-6.33a2.221 2.221 0 0 0-3.007-.006l-6.679 6.265a.972.972 0 0 0-.312.708v9.656c0 1.105.95 1.788 2.125 1.788h3.188c1.174 0 2.125-.683 2.125-1.788v-1c0-.552.476-1 1.062-1 .587 0 1.063.448 1.063 1v1c0 1.105.95 1.788 2.125 1.788h3.187c1.174 0 2.125-.683 2.125-1.788v-9.587z" transform="translate(-285 -560)"></path>
                </svg>
                <span className="ml-2">Dashboard</span>

                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M16.7071 14.7071C17.0676 14.3466 17.0953 13.7794 16.7903 13.3871L16.7071 13.2929L12.7071 9.29289C12.3466 8.93241 11.7794 8.90468 11.3871 9.2097L11.2929 9.29289L7.29289 13.2929C6.90237 13.6834 6.90237 14.3166 7.29289 14.7071C7.65338 15.0676 8.22061 15.0953 8.6129 14.7903L8.70711 14.7071L12 11.415L15.2929 14.7071C15.6534 15.0676 16.2206 15.0953 16.6129 14.7903L16.7071 14.7071Z" fill="#184623" />
                </svg>
              </button>


              <div id="dropdownInformation" style={{ color: '#184623', zIndex: 1000 }} className={`origin-top-right absolute w-full right-0 mt-2 shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${dropdownVisible ? 'block' : 'hidden'} w-full`}>
                {/* Dropdown content */}
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformationButton">
                  <li>
                    <a href="#" className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white uppercase" style={{ color: '#184623' }}>
                      <div className="flex flex-row items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 19" id="home">
                          <path fill="#184623" fill-rule="evenodd" d="M299.875 576.212c0 .552-.476.788-1.063.788h-1.062c-.587 0-1.063-.236-1.063-.788v-1c0-1.105-.95-2.212-2.125-2.212h-2.125c-1.174 0-2.125 1.107-2.125 2.212v1c0 .552-.476.788-1.062.788h-1.063c-.586 0-1.062-.236-1.062-.788v-8.063c0-.133.056-.26.155-.354l5.458-5.136a1.109 1.109 0 0 1 1.503 0l5.479 5.156a.488.488 0 0 1 .155.353v8.044zm2.125-8.587a.974.974 0 0 0-.31-.706l-6.692-6.33a2.221 2.221 0 0 0-3.007-.006l-6.679 6.265a.972.972 0 0 0-.312.708v9.656c0 1.105.95 1.788 2.125 1.788h3.188c1.174 0 2.125-.683 2.125-1.788v-1c0-.552.476-1 1.062-1 .587 0 1.063.448 1.063 1v1c0 1.105.95 1.788 2.125 1.788h3.187c1.174 0 2.125-.683 2.125-1.788v-9.587z" transform="translate(-285 -560)"></path>
                        </svg>
                        <span className="ml-2">Dashboard</span>
                      </div>
                      <div className='relative left-[10%]'>
                        <Image src={dashboardlogo} alt="dashboardlogo" />
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white uppercase" style={{ color: '#184623' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                      <span className="ml-2 text-[#869D8C] text-[12px]" >User LeaderBoard</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white uppercase" style={{ color: '#184623' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                      <span className="ml-2 text-[#869D8C] text-[12px]">Disconnect</span>
                    </a>
                  </li>
                </ul>
                <div className="py-2">
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 75 74" fill="none">
                      <circle cx="37.5" cy="37" r="35.7778" fill="#4A8F60" stroke="#F3EFCD" stroke-width="1.55556" />
                      <mask id="mask0_0_27" maskUnits="userSpaceOnUse" x="16" y="14" width="43" height="46">
                        <path d="M16.9112 14.7642H58.0876V59.6441H16.9112V14.7642Z" fill="white" />
                      </mask>
                      <g mask="url(#mask0_0_27)">
                        <path d="M16.9106 38.1915C16.9106 35.1844 18.8687 32.6256 21.6223 31.6111V25.6286V22.6351C23.7969 18.0701 30.076 14.7642 37.4988 14.7642C44.9218 14.7642 51.262 18.0022 53.3802 22.6351V25.6332V31.6111C56.1338 32.6256 58.0919 35.1888 58.0919 38.1915C58.0919 41.7826 55.2958 44.7445 51.6856 45.1838C51.8222 46.0216 51.8928 46.9137 51.8928 47.8648C51.8928 55.7902 47.1857 59.6396 37.5037 59.6396C27.8213 59.6396 23.1144 55.7856 23.1144 47.8648C23.1144 46.9137 23.185 46.0171 23.3215 45.1838C19.7113 44.7445 16.9153 41.7826 16.9153 38.1915H16.9106ZM46.6304 23.4186C42.6859 23.4186 41.0008 25.6332 37.5037 25.6332C34.0063 25.6332 32.3212 23.4186 28.3768 23.4186C27.4825 23.4186 26.6493 23.5364 25.8915 23.713V35.5195C25.8915 36.9732 26.0092 38.2549 26.2398 39.396C27.5531 38.1734 29.2852 37.2993 31.441 36.7557V31.3213C31.441 30.1529 32.4248 29.2109 33.6345 29.2109C34.8442 29.2109 35.828 30.1574 35.828 31.3213V36.1399C36.3692 36.1126 36.9246 36.0992 37.4988 36.0992C38.0732 36.0992 38.6426 36.1126 39.1887 36.1399V31.3213C39.1887 30.1529 40.1725 29.2109 41.3821 29.2109C42.5918 29.2109 43.5755 30.1574 43.5755 31.3213V36.7604C45.7219 37.3038 47.4495 38.1778 48.7579 39.396C48.9838 38.2594 49.1062 36.9777 49.1062 35.5195V23.7085C48.3484 23.5318 47.5153 23.4141 46.6257 23.4141L46.6304 23.4186ZM37.5037 55.5412C45.9055 55.5412 47.6282 52.4751 47.6282 47.8693C47.6282 43.2637 45.9055 40.1976 37.5037 40.1976C29.1017 40.1976 27.3789 43.2637 27.3789 47.8693C27.3789 52.4751 29.1017 55.5412 37.5037 55.5412Z" fill="#184623" />
                        <path d="M44.6051 45.5138V47.0309C44.6051 48.6974 43.353 50.1196 41.6397 50.3821C40.3735 50.5723 38.9991 50.6675 37.4975 50.6675C35.9961 50.6675 34.6404 50.5723 33.3837 50.3868C31.6751 50.1285 30.4183 48.7019 30.4183 47.0354V45.5274C32.1646 46.3788 34.5463 46.8136 37.4975 46.8136C40.4489 46.8136 42.854 46.3741 44.6051 45.5138Z" fill="#184623" />
                        <path d="M25.8862 35.516V23.7095C26.6441 23.5329 27.4772 23.4151 28.3715 23.4151C32.3159 23.4151 34.001 25.6297 37.4983 25.6297C40.9956 25.6297 42.6807 23.4151 46.625 23.4151C47.5195 23.4151 48.3526 23.5329 49.1057 23.7095V35.516C49.1057 36.9697 48.988 38.2512 48.7574 39.3925C47.4487 38.1744 45.7214 37.3003 43.575 36.7569V31.3178C43.575 30.1494 42.5912 29.2074 41.3816 29.2074C40.1719 29.2074 39.1882 30.1539 39.1882 31.3178V36.1364C38.642 36.1091 38.0774 36.0957 37.4983 36.0957C36.9194 36.0957 36.3638 36.1091 35.8272 36.1364V31.3178C35.8272 30.1494 34.8435 29.2074 33.6339 29.2074C32.4242 29.2074 31.4405 30.1539 31.4405 31.3178V36.7522C29.2847 37.2957 27.5525 38.1699 26.2393 39.3925C26.0133 38.2559 25.891 36.9742 25.891 35.516H25.8862Z" fill="#EEEAC8" />
                        <path d="M47.6231 47.8692C47.6231 52.4748 45.9002 55.5409 37.4983 55.5409C29.0964 55.5409 27.3737 52.4748 27.3737 47.8692C27.3737 43.2634 29.0964 40.1973 37.4983 40.1973C45.9002 40.1973 47.6231 43.2634 47.6231 47.8692ZM30.4191 45.5278V47.0357C30.4191 48.7025 31.6759 50.1289 33.3845 50.3871C34.6413 50.5773 36.0109 50.6723 37.4983 50.6723C38.9857 50.6723 40.3743 50.5773 41.6405 50.3871C43.3491 50.1289 44.606 48.7025 44.606 47.0357V45.5186C42.8548 46.3792 40.4685 46.8184 37.4983 46.8184C34.5283 46.8184 32.1654 46.3837 30.4191 45.5322V45.5278Z" fill="#EEEAC8" />
                      </g>
                    </svg>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                    <a href="#" className=" block   text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white text-[#869D8C] text-[10px] font-semibold" >
                      Powered By
                    </a>
                    <Image src={logo} alt="logo" className="m-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav >

    </div >
  );
}