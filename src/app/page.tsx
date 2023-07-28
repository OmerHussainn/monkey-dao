'use client';

import * as React from 'react';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
import NavBar from '@/app/pages/navbar/navbar';
import Dashboard from '@/app/screens/dashboard/dashboard';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <>
      <NavBar />
      <div >
        <Dashboard />
      </div>
    </>
  );
}

// 'use client'
// import * as React from 'react';
// import NavBar from '@/app/pages/navbar/navbar';
// import Dashboard from '@/app/screens/dashboard/dashboard';
// import Testdashboard from '@/app/screens/dashboard/testdashboard';

// export default function HomePage() {
//   return (
//     // <>
//     //   <Dashboard />
//     // </>
//     <>

//       <div className='w-[100%] h-[100vh] mx-auto mt-2 flex items-center justify-center'>
//         <Testdashboard />
//       </div></>

//   );
// }













