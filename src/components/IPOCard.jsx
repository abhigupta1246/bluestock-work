import novaLogo from '../assets/ipo logo 1.png';
import oyoLogo from '../assets/ipo logo 2.png';
import boatLogo from '../assets/ipo logo 2.png';
import cloudnineLogo from '../assets/ipo logo 4.jpg';
import olaLogo  from '../assets/ipo logo 5.png';
import mobikwikLogo  from '../assets/ipo logo 6.png';
import ixigoLogo  from '../assets/ipo logo 7.png';
import cmrLogo  from '../assets/ipo logo 8.jpg';
import wellnessLogo from '../assets/ipo logo 9.png';
import pkhLogo  from '../assets/ipo logo 10.jpg';
import React from "react";

const IPOCard = ({ companyName, openDate, closeDate, priceBand, lotSize, issueSize, listingDate, status, logo, issueType }) => {
  return (
    <div className="bg-white rounded-[20px] shadow-[0_4px_24px_0_rgba(0,0,0,0.08)] border-2 px-7 py-8 pl-[10px] flex flex-col w-full h-[337px] font-sans" style={{ backgroundColor: '#fff', borderColor: '#fff', fontFamily: 'Montserrat, ui-sans-serif, system-ui, sans-serif' }}>
      {/* Logo at the top */}
      <div className="w-[180px] h-[80px] flex items-center justify-center mb-4 self-center mt-12">
        {logo ? (
          <img
            src={logo}
            alt={companyName + ' logo'}
            className={
              ["Boat Ltd.", "Nova Agritech Ltd.", "ixigo Ltd.", "One Mobikwik Systems Ltd."].includes(companyName)
                ? "max-h-[50px] max-w-[100px] object-contain"
                : "max-h-[80px] max-w-[180px] object-contain"
            }
          />
        ) : (
          <span className="text-gray-400 text-lg font-bold">LOGO</span>
        )}
      </div>
      {/* Content below logo, no push to bottom */}
      <div className="w-full">
        {/* Responsive: Company Name above left labels for mobile, above details for larger screens */}
        <div className="w-full">
          {/* Mobile: company name above left labels */}
          <div className="sm:hidden w-full mb-4">
            <h2 className="text-[18px] font-bold text-[#1A4CD8] leading-tight text-left mb-2">{companyName}</h2>
      <div className="flex flex-row w-full text-[13px] gap-x-5">
        {/* Left Column */}
              <div className="flex flex-col flex-1" style={{ rowGap: '30px' }}>
          <div>
                  <div className="text-gray-400 font-medium text-[11px] mb-1 pl-8">PRICE BAND</div>
                  <div className="font-semibold text-gray-800">not issued</div>
          </div>
          <div>
                  <div className="text-gray-400 font-medium text-[11px] mb-1 pl-8">CLOSE</div>
                  <div className="font-semibold text-gray-800">not issued</div>
          </div>
          <div>
                  <div className="text-gray-400 font-medium text-[11px] mb-1 pl-8">ISSUE TYPE</div>
                  <div className="font-semibold text-gray-800">Book Built</div>
          </div>
        </div>
        {/* Right Column */}
              <div className="flex flex-col flex-1" style={{ rowGap: '30px' }}>
          <div>
            <div className="text-gray-400 font-medium text-[11px] mb-1">OPEN</div>
                  <div className="font-semibold text-gray-800">not issued</div>
          </div>
          <div>
            <div className="text-gray-400 font-medium text-[11px] mb-1">ISSUE SIZE</div>
            <div className="font-semibold text-gray-800">{issueSize}</div>
          </div>
          <div>
            <div className="text-gray-400 font-medium text-[11px] mb-1">LISTING DATE</div>
                  <div className="font-semibold text-gray-800">not issued</div>
                </div>
              </div>
            </div>
          </div>
          {/* Desktop: company name above details section */}
          <div className="hidden sm:block w-full">
            <h2 className="text-[18px] font-bold text-[#1A4CD8] mb-6 leading-tight">{companyName}</h2>
            <div className="flex flex-row w-full text-[13px] gap-x-5">
              {/* Left Column */}
              <div className="flex flex-col flex-1" style={{ rowGap: '30px' }}>
                <div>
                  <div className="text-gray-400 font-medium text-[11px] mb-1 pl-8">PRICE BAND</div>
                  <div className="font-semibold text-gray-800">not issued</div>
                </div>
                <div>
                  <div className="text-gray-400 font-medium text-[11px] mb-1 pl-8">CLOSE</div>
                  <div className="font-semibold text-gray-800">not issued</div>
                </div>
                <div>
                  <div className="text-gray-400 font-medium text-[11px] mb-1 pl-8">ISSUE TYPE</div>
                  <div className="font-semibold text-gray-800">Book Built</div>
                </div>
              </div>
              {/* Right Column */}
              <div className="flex flex-col flex-1" style={{ rowGap: '30px' }}>
                <div>
                  <div className="text-gray-400 font-medium text-[11px] mb-1">OPEN</div>
                  <div className="font-semibold text-gray-800">not issued</div>
                </div>
                <div>
                  <div className="text-gray-400 font-medium text-[11px] mb-1">ISSUE SIZE</div>
                  <div className="font-semibold text-gray-800">{issueSize}</div>
                </div>
                <div>
                  <div className="text-gray-400 font-medium text-[11px] mb-1">LISTING DATE</div>
                  <div className="font-semibold text-gray-800">not issued</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IPOCard; 