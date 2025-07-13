// Test save
import React from "react";

const IPOCard = ({ companyName, openDate, closeDate, priceBand, lotSize, issueSize, listingDate, status, logoUrl, issueType }) => {
  return (
    <div className="bg-white rounded-[20px] shadow-[0_4px_24px_0_rgba(0,0,0,0.08)] border border-gray-100 px-7 py-8 pl-[10px] flex flex-col items-center w-full h-[337px] font-sans" style={{ fontFamily: 'Montserrat, ui-sans-serif, system-ui, sans-serif' }}>
      {/* Logo */}
      <div className="w-[120px] h-[48px] flex items-center justify-center mb-4">
        {logoUrl ? (
          <img src={logoUrl} alt={companyName + ' logo'} className="max-h-full max-w-full object-contain" />
        ) : (
          <span className="text-gray-400 text-lg font-bold">LOGO</span>
        )}
      </div>
      {/* Company Name */}
      <h2 className="text-[18px] font-bold text-[#1A4CD8] text-center mb-6 leading-tight">{companyName}</h2>
      {/* Details Section: Two Flex Columns with 20px Vertical Spacing and 20px Horizontal Gap */}
      <div className="flex flex-row w-full text-[13px] gap-x-5">
        {/* Left Column */}
        <div className="flex flex-col flex-1 space-y-5">
          <div>
            <div className="text-gray-400 font-medium text-[11px] mb-1">PRICE BAND</div>
            <div className="font-semibold text-gray-800">{priceBand}</div>
          </div>
          <div>
            <div className="text-gray-400 font-medium text-[11px] mb-1">CLOSE</div>
            <div className="font-semibold text-gray-800">{closeDate}</div>
          </div>
          <div>
            <div className="text-gray-400 font-medium text-[11px] mb-1">ISSUE TYPE</div>
            <div className="font-semibold text-gray-800">{issueType}</div>
          </div>
        </div>
        {/* Right Column */}
        <div className="flex flex-col flex-1 space-y-5">
          <div>
            <div className="text-gray-400 font-medium text-[11px] mb-1">OPEN</div>
            <div className="font-semibold text-gray-800">{openDate}</div>
          </div>
          <div>
            <div className="text-gray-400 font-medium text-[11px] mb-1">ISSUE SIZE</div>
            <div className="font-semibold text-gray-800">{issueSize}</div>
          </div>
          <div>
            <div className="text-gray-400 font-medium text-[11px] mb-1">LISTING DATE</div>
            <div className="font-semibold text-gray-800">{listingDate}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IPOCard; 