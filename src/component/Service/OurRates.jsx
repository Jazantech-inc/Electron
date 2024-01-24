import React from 'react';

const OurRates = () => {
  return (
    <div>
    <div className='text-2xl mb-5 text-orange-500 text-center m-5 font-semibold'>
      Our Rates
    </div>
    <div className='text-5xl mb-5 text-black text-center m-5 font-semibold'>
      Electrical Service Prices
    </div>
    <div className='mx-auto p-2 lg:w-5/12 mb-5'>
      Our prices for all of our electrical services are as competitive as anywhere in the market place. All of our prices include labour and materials but exclude VAT.
    </div>
    {/* table */}
    <table className='w-64 sm:w-screen lg:w-fit mb-24 mx-auto'>
      <thead className='bg-orange-500 border-2 text-white border-orange-600 md:text-xl'>
        <tr>
          <th className=' p-3 font-semibold tracking-wide text-left'>Common Job</th>
          <th className=' p-3  font-semibold tracking-wide text-left'>Cost*</th>
          <th className=' p-3  font-semibold tracking-wide text-left'>Description</th>
        </tr>
      </thead>
      <tbody className='text-gray-500 text-lg'>
        <tr className='bg-white'>
          <td className='p-3'>Install ceiling fan	</td>
          <td className='p-3'>$ 100</td>
          <td className='p-3'>You supply ceiling fan to suit your home.</td>
        </tr>
        <tr className=' bg-slate-100'>
          <td className='p-3'>Supply ceiling fan</td>
          <td className='p-3'>$75</td>
          <td className='p-3'>You supply house to bolt it to.</td>
        </tr>
        <tr className='  bg-white'>
          <td className='p-3'>Install new double power</td>
          <td className='p-3'>$90</td>
          <td className='p-3'>Includes labour, cable, gpo, everything</td>
        </tr>
        <tr className=' bg-slate-100'>
          <td className='p-3'>Install double power outside</td>
          <td className='p-3'>$150</td>
          <td className='p-3'>Includes everything + weatherporoof gpo</td>
        </tr>
        <tr className='  bg-white'>
          <td className='p-3'> Install new light in new location</td>
          <td className='p-3'>$90</td>
          <td className='p-3'>Includes everything except new light</td>
        </tr>

        <tr className=' bg-slate-100 '>
          <td className='p-3'>Install 92mm LED downlight</td>
          <td className='p-3'>$90</td>
          <td className='p-3'>As above but includes LED downlight.</td>
        </tr>

        <tr className='  bg-white'>
          <td className='p-3'>Replace light</td>
          <td className='p-3'>$45</td>
          <td className='p-3'>Replace light where there is a cable</td>
        </tr>

        <tr className=' bg-slate-100 '>
          <td className='p-3'>Supply and install ceiling exhaust fan</td>
          <td className='p-3'>$150</td>
          <td className='p-3'>Supply and install ceiling exhaust fan</td>
        </tr>

        <tr className=' bg-white'>
          <td className='p-3'>Supply and install Sensor light</td>
          <td className='p-3'>$160</td>
          <td className='p-3'>Includes Twin 150w Sensor light.</td>
        </tr>

        <tr className=' bg-slate-100'>
          <td className='p-3'>Fault Finding hourly Call out</td>
          <td className='p-3'>$40</td>
          <td className='p-3'>fee applies in this case</td>
        </tr>

        <tr className=' bg-white'>
          <td className='p-3'>Hot water element</td>
          <td className='p-3'>$200	</td>
          <td className='p-3'>Replace most electric hot water elements</td>
        </tr>

        <tr className=' bg-slate-100'>
          <td className='p-3'>Accurate responses to client’s requirments</td>
          <td className='p-3'>$220</td>
          <td className='p-3'> Element or thermostat is all it could be</td>
        </tr>

        <tr className=' bg-white'>
          <td className='p-3'>Install CCTV systems package</td>
          <td className='p-3'>$500 +	</td>
          <td className='p-3'>Those 4 camera eBay CCTV systems</td>
        </tr>

        <tr className=' bg-slate-100 '>
          <td className='p-3'>Install IXL 3 in 1 type bathroom light</td>
          <td className='p-3'>$150</td>
          <td className='p-3'>Must have roof cavity. Cannot go downstairs</td>
        </tr>


        <tr className='  bg-white'>
          <td className='p-3'>  Install oven / stove new circuit</td>
          <td className='p-3'>	$350 +	</td>
          <td className='p-3'>Stoves require heavy duty cable</td>
        </tr>

        <tr className=' bg-slate-100 '>
          <td className='p-3'>Replace oven / stove</td>
          <td className='p-3'>$100</td>
          <td className='p-3'> You have new one there</td>
        </tr>
      </tbody>
    </table>
    </div>
  
  );
}

export default OurRates;
