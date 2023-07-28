import Image, { StaticImageData } from 'next/image';
import React, { useState } from 'react';
import avatar1 from '../../assets/images/avatar1.png'
import avatar2 from '../../assets/images/avatar2.png'
import avatar3 from '../../assets/images/avatar3.png'
import avatar4 from '../../assets/images/avatar4.png'
import avatar5 from '../../assets/images/avatar5.png'
import avatar6 from '../../assets/images/avatar6.png'
import avatar7 from '../../assets/images/avatar7.png'
import avatar8 from '../../assets/images/avatar8.png'
import monke from '../../assets/images/monke.png'
import monke1 from '../../assets/images/monke1.png'
import monkeavatar from '../../assets/images/monkeavatar.png'
import vector1 from '../../assets/images/vector1.png'
import vector2 from '../../assets/images/vector2.png'
import drawer1 from '../../assets/images/drawer1.png'
import dotssvg from '../../assets/images/dotssvg.png'

const images = [
  { src: avatar1, alt: 'avatar1' },
  { src: avatar2, alt: 'avatar2' },
  { src: avatar3, alt: 'avatar3' },
  { src: avatar4, alt: 'avatar4' },
  { src: avatar5, alt: 'avatar5' },
  { src: avatar6, alt: 'avatar6' },
  { src: avatar7, alt: 'avatar7' },
  { src: avatar8, alt: 'avatar8' },

];
const SVG3 = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 88 88" fill="none">
    <rect y="22" width="44" height="22" fill="white" />
    <rect x="66" y="22" width="22" height="22" fill="#D8F5E2" />
    <rect y="66" width="22" height="22" fill="#184623" fill-opacity="0.5" />
    <rect x="44" width="22" height="22" fill="#D8F5E2" />
    <rect x="22" y="44" width="22" height="22" fill="#184623" />
  </svg>
)
const Card = () => {
  const [selectedImage, setSelectedImage] = useState<StaticImageData>(images[0]);

  const handleImageClick = (image: StaticImageData) => {
    setSelectedImage(image);
  }
  return (
    <>
      <div className="flex w-[100%] xl:w-[90%] flex-col lg:flex-row max-w-xl-[40%] md:w-[40%] max-w-sm md:max-w-lg mx-auto  overflow-hidden lg:bg-white">

        <div className="flex w-[100%] lg:hidden justify-between p-4 flex-row ">
          <div className="flex flex-row items-center">
            <div className="w-5 h-5 rounded-full overflow-hidden mr-2">
              <Image
                src={monke1}
                alt="monke1"
                objectFit="cover"
              />
            </div>
            <p className="font-bold text-left text-[#184623] text-[14px] lg:text-[8px]">MY SMB</p>
          </div>
          <p className="font-bold text-right text-[#184623] text-[14px] lg:text-[8px]" >Points: 5,000</p>
        </div>
        <div className="lg:hidden p-2 flex flex-row  w-[100%] h-[100%]" >
          <div className='flex flex-row justify-center items-center'>
            {images.slice(0, 2).map((image, index) => (

              <div key={index} className=' h-[75px] w-[75px] ' style={{ overflow: 'hidden', cursor: 'pointer', margin: 2 }}
                onClick={() => handleImageClick(image)}>
                <Image src={image.src} alt={image.alt} objectFit="cover" />
              </div>
            ))}
            <div className="flex justify-center bg-[#FFD1D8] h-[75px] w-[90px]  items-center">
              <div className="flex flex-col">
                <h2 className="font-semibold my-[-10px] lg:my-[-8px] text-[#FF93A4] text-[14px] lg:text-[8px]" >Gen 3</h2>
                <h2 className="font-extrabold text-[#FF93A4] text-[14px] lg:text-[8px]" >SMB #1741</h2>
              </div>
            </div>
            <div className='flex items-end mt-4 h-18 w-18 ml-2'>
              <Image src={dotssvg} alt="dotssvg" />
            </div>
          </div>
        </div>
        <div className='lg:hidden flex justify-center items-center w-full mb-4'>
          <Image src={drawer1} alt="drawer1" />
        </div>
        <div className="relative w-[100%]  lg:w-[40%] h-[100%] md:h-auto">
          <Image
            src={selectedImage.src}
            alt="avatar1"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>
        <div className="flex flex-col w-[100%] lg:w-[60%] h-[100%] justify-between mt-2">
          <div className='flex flex-col p-2'>
            <Section title="SMB #1741" imageSrc={monke} description="Gen 3" explain="Multiplier: 1x" />

            <div className='flex flex-row items-start justify-start space-y-0 border-y border-[#F5F5F5]'>
              <p className="font-semibold text-left text-[#184623] text-[14px] lg:text-[8px]" >All Task (5)</p>
              <p className="font-semibold ml-4 text-[#184623] text-[14px] lg:text-[8px]" >Completed</p>
            </div>

            <AnotherSection title="Twitter PFP" imageSrc={monke} Points="200 Points" description="User is awarded for using NFT as Twitter" />
            <AnotherSection title="Discord Reaction" imageSrc={monke1} Points="250 Points" description="User is awarded for Reacting to the latest annoucement" />
            <AnotherSection title="Discord Reaction" imageSrc={monke1} Points="250 Points" description="User is awarded for using NFT as Twitter" />

          </div>
          <div className='flex flex-col items-start justify-center w-full'>
            <div className='flex flex-row justify-between items-center w-full'>
              <div className='flex justify-end' style={{ overflow: 'hidden', textAlign: 'left' }}>
                <Image
                  src={monkeavatar}
                  alt="logo"
                  objectFit="cover"
                />
              </div>
              <div className="hidden lg:block flex flex-col items-start">
                <div className='flex justify-start w-14 h-4'>
                  <Image
                    src={vector1}
                    alt="logo"
                    objectFit="cover"
                  />
                </div>
                <div className='flex justify-end w-8 h-4 ml-6'>
                  <Image
                    src={vector2}
                    alt="logo"
                    objectFit="cover"
                  />
                </div>
                <div className="hidden lg:block corner-svg  ml-7 absolute"><SVG3 /></div>
              </div>


            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block flex w-[100%] xl:w-[90%] flex-col lg:flex-row mt-10 max-w-xl-[40%] md:w-[40%] max-w-sm md:max-w-lg mx-auto  overflow-hidden" >
        <div className="flex w-[100%]  justify-between p-4 flex-row ">
          <div className="flex flex-row items-center">
            <div className="w-5 h-5 rounded-full overflow-hidden mr-2">
              <Image
                src={monke1}
                alt="monke1"
                objectFit="cover"
              />
            </div>
            <p className="font-bold text-left text-[#184623] text-[14px] lg:text-[8px]">MY SMB</p>
          </div>
          <p className="font-bold text-right text-[#184623] text-[14px] lg:text-[8px]" >Points: 5,000</p>
        </div>
        <div className='flex flex-row  w-[100%] xl:w-[90%]  lg:flex-row max-w-xl-[40%] md:w-[40%] max-w-sm md:max-w-lg mx-auto my-5 overflow-hidden '>
          {images.map((image, index) => (
            <div key={index} className='dark:hover:bg-gray-700 h-full w-full' style={{ overflow: 'hidden', cursor: 'pointer' }}
              onClick={() => handleImageClick(image)}>
              <Image src={image.src} alt={image.alt} objectFit="cover" />
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
                .corner-svg {
                    position: absolute;
                    width: 88px;
                    height: 88px;
                }
            `}</style>
    </>

  );
};

interface SectionProps {
  title: string;
  description?: string;
  explain?: string;

  imageSrc?: StaticImageData;
}

const Section: React.FC<SectionProps> = ({ title, description, imageSrc, explain }) => (
  <div className="flex flex-col items-start w-[100%]">
    <h2 className="font-semibold my-[-10px] lg:my-[-8px] text-[#184623] text-[14px] lg:text-[8px]" >{description}</h2>
    <div className='flex flex-row items-center w-[100%] justify-between my-[-6px] lg:my-[-16px]'>
      <h2 className="font-extrabold text-[#184623] text-[14px] lg:text-[8px]" >{title}</h2>
      {imageSrc && (
        <div className="w-8 h-8 rounded-full overflow-hidden">
          <Image
            src={imageSrc}
            alt={title}
            objectFit="cover"
          />
        </div>
      )}
    </div>
    <h2 className="font-semibold my-[-2px] lg:my-[-8px] text-[#184623] text-[10px] lg:text-[6px]" >{explain}</h2>
  </div>

);
interface AnotherSectionProps {
  title: string;
  description?: string;
  Points?: string;
  imageSrc?: StaticImageData;
}

const AnotherSection: React.FC<AnotherSectionProps> = ({ title, description, imageSrc, Points }) => (
  <div className="flex flex-col mt-4 justify-start">
    <div className='flex flex-row items-center  w-[100%] justify-between my-[-6px] lg:my-[-16px]'>
      <h2 className="font-extrabold text-[#184623] text-[14px] lg:text-[8px] my-[-6px] lg:my-[-16px]">{title}</h2>
      {imageSrc && (
        <div className='flex flex-row items-center justify-end'>
          <div className="w-4 h-4 rounded-full overflow-hidden mr-2">
            <Image
              src={imageSrc}
              alt={title}
              objectFit="cover"
            />
          </div>
          <h2 className="font-extrabold text-[#184623] text-[14px] lg:text-[8px]" >{Points}</h2>
        </div>
      )}
    </div>
    <h2 className="font-semibold my-[-2px] lg:my-[-8px] text-left text-[#AAA] text-[12px] lg:text-[8px] " >{description}</h2>
  </div>
);


export default Card;



//         {/* New div elements */}
//         <div className='flex flex-col items-start justify-center p-4'>
//           <p className="font-semibold" style={{ color: '#184623', fontSize: '12px' }}>New Content</p>
//           <p className="font-bold text-left " style={{ color: '#184623', fontSize: '16px' }}>Some more new content</p>
//         </div>
//         <div className='flex flex-col items-start justify-center p-4'>
//           <p className="font-semibold" style={{ color: '#184623', fontSize: '12px' }}>Even More Content</p>
//           <p className="font-bold text-left " style={{ color: '#184623', fontSize: '16px' }}>Additional new content</p>
//         </div>
//         {/* End of new div elements */}
//       </div>
//     </div>
//   );
// };

// export default Card;





// import Image from 'next/image';
// import React, { useState } from 'react';

// import avatar1 from '../../assets/images/avatar1.png'
// import avatar2 from '../../assets/images/avatar2.png'
// import avatar3 from '../../assets/images/avatar3.png'
// import avatar4 from '../../assets/images/avatar4.png'
// import avatar5 from '../../assets/images/avatar5.png'
// import avatar6 from '../../assets/images/avatar6.png'
// import avatar7 from '../../assets/images/avatar7.png'
// import avatar8 from '../../assets/images/avatar8.png'
// import monke from '../../assets/images/monke.png'
// import monke1 from '../../assets/images/monke1.png'
// import monkeavatar from '../../assets/images/monkeavatar.png'
// import vector1 from '../../assets/images/vector1.png'
// import vector2 from '../../assets/images/vector2.png'



// const images = [
//   { src: avatar1, alt: 'avatar1' },
//   { src: avatar2, alt: 'avatar2' },
//   { src: avatar3, alt: 'avatar3' },
//   { src: avatar4, alt: 'avatar4' },
//   { src: avatar5, alt: 'avatar5' },
//   { src: avatar6, alt: 'avatar6' },
//   { src: avatar7, alt: 'avatar7' },
//   { src: avatar8, alt: 'avatar8' },

// ];
// const Card = () => {
//   const [selectedImage, setSelectedImage] = useState(images[0]);

//   const handleImageClick = (image: any) => {
//     setSelectedImage(image);
//   }
//   return (

//     <div className="flex flex-col  items-center bg-white border border-gray-200 md:flex-row md:max-w-xl ">
//       <div className="flex lg:flex-row flex-col justify-between w-full h-[60%] bg-white" >
//         <div className='relative w-[70%] h-70 md:w-48 md:h-auto md:rounded-none md:rounded-l-lg'>
//           <Image
//             src={selectedImage.src}
//             alt={selectedImage.alt}
//             className='w-[100%] h-[100%]'
//           />
//         </div>
//         <div className='flex flex-col w-[60%] h-[60%]'>
//           <div className='flex flex-col items-start justify-center p-4'>
//             <p className="font-semibold" style={{ color: '#184623', fontSize: '12px' }}>Gen 3</p>
//             <div className='flex flex-row  justify-between w-full'>
//               <p className=" font-bold text-left " style={{ color: '#184623', fontSize: '16px' }}>SMB #1741</p>
//               <div style={{ borderRadius: '50%', overflow: 'hidden', width: '60px', height: '60px', }}>
//                 <Image
//                   src={monke}
//                   alt="logo"
//                   width={60}
//                   height={60}
//                   objectFit="cover"
//                 />
//               </div>
//             </div>
//             <p className="font-bold" style={{ color: '#184623', fontSize: '10px', }}>Multiplier: 1x</p>
//           </div>
//           <div style={{ borderBottom: '1px solid #F5F5F5', }}></div>
//           <div className='flex flex-row items-start justify-start p-4'>
//             <p className="font-semibold text-left" style={{ color: '#184623', fontSize: '12px' }}>All Task (5)</p>
//             <p className="font-semibold ml-4" style={{ color: '#AAAAAA', fontSize: '12px' }}>Completed</p>
//           </div>


//           <div style={{ borderBottom: '1px solid #F5F5F5', }}></div>
//           <div className='flex flex-col items-start justify-center w-full p-4'>
//             <div className='flex flex-row justify-between w-full'>

//               <p className=" font-semibold text-left " style={{ color: '#184623', fontSize: '12px' }}>Twitter PFP</p>
//               <div className='flex flex-row justify-center items-center mr-10'>
//                 <div style={{ borderRadius: '50%', overflow: 'hidden', width: '20px', height: '20px', marginRight: 4 }}>
//                   <Image
//                     src={monke}
//                     alt="logo"
//                     width={40}
//                     height={40}
//                     objectFit="cover"
//                   />
//                 </div>
//                 <div>
//                   <p className="font-semibold" style={{ color: '#184623', fontSize: '12px' }}>200 Points</p>
//                 </div>
//               </div>

//             </div>
//             <p className="font-bold" style={{ color: '#AAAAAA', fontSize: '12px' }}>User is awarded for using NFT as Twitter</p>
//           </div>
//           <div className='flex flex-col items-start justify-center w-full p-4'>
//             <div className='flex flex-row justify-between w-full'>

//               <p className=" font-semibold text-left " style={{ color: '#184623', fontSize: '12px' }}>Discord Reaction</p>
//               <div className='flex flex-row justify-center items-center mr-10'>
//                 <div style={{ borderRadius: '50%', overflow: 'hidden', width: '20px', height: '20px', marginRight: 4 }}>
//                   <Image
//                     src={monke1}
//                     alt="logo"
//                     width={20}
//                     height={20}
//                     objectFit="cover"
//                   />
//                 </div>
//                 <div>
//                   <p className="font-semibold" style={{ color: '#184623', fontSize: '12px' }}>200 Points</p>
//                 </div>
//               </div>

//             </div>
//             <p className="font-bold" style={{ color: '#AAAAAA', fontSize: '12px', }}>User is awarded for Reacting to the latest</p>
//             <p className="font-bold" style={{ color: '#AAAAAA', fontSize: '12px', }}>annoucement</p>
//           </div>
//           <div className='flex flex-col items-start justify-center w-full p-4'>
//             <div className='flex flex-row justify-between w-full'>

//               <p className=" font-semibold text-left " style={{ color: '#184623', fontSize: '12px' }}>Twitter PFP</p>
//               <div className='flex flex-row justify-center items-center mr-10'>
//                 <div style={{ borderRadius: '50%', overflow: 'hidden', width: '20px', height: '20px', marginRight: 4 }}>
//                   <Image
//                     src={monke1}
//                     alt="logo"
//                     width={20}
//                     height={20}
//                     objectFit="cover"
//                   />
//                 </div>
//                 <div>
//                   <p className="font-semibold" style={{ color: '#184623', fontSize: '12px' }}>250 Points</p>
//                 </div>
//               </div>

//             </div>
//             <p className="font-bold" style={{ color: '#AAAAAA', fontSize: '12px' }}>User is awarded for using NFT as Twitter</p>
//           </div>
//           <div className='flex flex-col items-start justify-center w-full p-4'>
//             <div className='flex flex-row justify-between items-center w-full'>
//               <div style={{ overflow: 'hidden', }}>
//                 <Image
//                   src={monkeavatar}
//                   alt="logo"
//                   objectFit="cover"
//                 />
//               </div>
//               <div className="flex flex-col">
//                 <div style={{ overflow: 'hidden', width: '142px', }}>
//                   <Image
//                     src={vector1}
//                     alt="logo"
//                     objectFit="cover"
//                   />
//                 </div>
//                 <div style={{ display: 'flex', justifyContent: 'end', overflow: 'hidden', width: '84.915px', }}>
//                   <Image
//                     src={vector2}
//                     alt="logo"
//                     objectFit="cover"
//                   />
//                 </div>
//               </div>

//             </div>
//           </div>

//         </div>
//       </div >
//       <div className="flex flex-col items-center w-full fixed bottom-0 left-0 right-0" >
//         <div className="flex flex-row justify-between mb-10 ">
//           <div className="flex flex-row">
//             <div style={{ borderRadius: '50%', overflow: 'hidden', width: '20px', height: '20px', marginRight: 4 }}>
//               <Image
//                 src={monke1}
//                 alt="logo"
//                 width={40}
//                 height={40}
//                 objectFit="cover"
//               />
//             </div>
//             <p className="font-bold text-left" style={{ color: '#184623', flex: 1, fontSize: '20px', marginRight: 30 }}>MY SMB</p>
//           </div>
//           <p className="font-bold" style={{ color: '#184623', flex: 1, fontSize: '16px' }}>Points: 5,000</p>
//         </div>
//         <div className='flex flex-row'>
//           {images.map((image, index) => (
//             <div key={index} className='dark:hover:bg-gray-700' style={{ overflow: 'hidden', width: '152px', height: '152px', cursor: 'pointer' }}
//               onClick={() => handleImageClick(image)}>
//               <Image src={image.src} alt={image.alt} objectFit="cover" />
//             </div>
//           ))}
//         </div>
//       </div>

//     </div>
//   );
// };

// export default Card;


