import React from 'react'

import Card from '@/app/components/card'

const Dashboard = () => {
  const SVG = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" fill="none">
      <rect y="22" width="44" height="22" fill="white" />
      <rect x="66" y="22" width="22" height="22" fill="#F3EFCD" fillOpacity="0.5" />
      <rect y="22" width="22" height="22" fill="#F3EFCD" fillOpacity="0.5" />
      <rect y="66" width="22" height="22" fill="#184623" fillOpacity="0.5" />
      <rect x="44" width="22" height="22" fill="#F3EFCD" />
      <rect x="22" y="44" width="22" height="22" fill="#184623" />
    </svg>
  )
  const SVG1 = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="88" height="66" viewBox="0 0 88 66" fill="none">
      <rect x="22" width="66" height="22" fill="white" />
      <rect width="22" height="22" fill="#F3EFCD" fill-opacity="0.5" />
      <rect width="22" height="22" transform="matrix(1 0 0 -1 44 44)" fill="#184623" fill-opacity="0.5" />
      <rect width="22" height="22" transform="matrix(1 0 0 -1 66 66)" fill="#184623" />
    </svg>
  )
  const SVG2 = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="88" height="66" viewBox="0 0 88 66" fill="none">
      <g opacity="0.3">
        <rect width="66" height="22" fill="white" />
        <rect x="66" width="22" height="22" fill="#859A78" />
        <rect y="44" width="22" height="22" fill="#184623" fill-opacity="0.5" />
        <rect x="66" y="44" width="22" height="22" fill="#859A78" />
        <rect x="22" y="22" width="22" height="22" fill="#184623" />
      </g>
    </svg>
  )
  const SVG3 = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="88" height="66" viewBox="0 0 88 66" fill="none">
      <g opacity="0.3">
        <rect x="22" width="66" height="22" fill="white" />
        <rect y="44" width="22" height="22" fill="#859A78" />
        <rect width="22" height="22" transform="matrix(1 0 0 -1 44 44)" fill="#184623" fill-opacity="0.5" />
        <rect width="22" height="22" transform="matrix(1 0 0 -1 66 66)" fill="#184623" />
      </g>
    </svg>
  )



  return (
    <div className=" dashboard w-screen ">
      <div className="hidden lg:block corner-svg absolute left-0 top-[-5.5%]"><SVG /></div>
      <div className="hidden lg:block corner-svg relative top-[-4%] right-[1.5%] "><SVG1 /></div>
      <div className="hidden lg:block corner-svg bottom-left"><SVG2 /></div>
      <div className="hidden lg:block corner-svg bottom-right"><SVG3 /></div>
      <div className='lg:mt-10 w-[100%] h-full'>
        <Card />
      </div>

      <style jsx>{`
                .dashboard {
                    position: absolute;
                    background: #FDFBEE;
                    display: flex;
                    justify-content: center;
                    text-align: center;
                }
                .corner-svg {
                    position: absolute;
                    width: 88px;
                    height: 88px;
                }
                .top-left {
                    top: 0;
                    left: 0;
                }
                .top-right {
                    top: 0;
                    right: 0;
                }
                .bottom-left {
                    bottom: 0;
                    left: 0;
                }
                .bottom-right {
                    bottom: 0;
                    right: 0;
                }
                
            `}</style>
    </div>
  )
}

export default Dashboard
