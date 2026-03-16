"use client";
import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import Image from 'next/image';
import QR from "@/public/temp.webp"
interface CertificateData {
  serialNo: string;
  enrollNo: string;
  rollNo: string;
  studentName: string;
  collegeName: string;
  degreeName: string;
  examDate: string;
  issueDate: string;
  signer: string;
  signDate: string;
  imageUrl: string; // Added field for the hosted image link
}

interface CertificateProps {
  data: CertificateData;
}

const Certificate: React.FC<CertificateProps> = ({ data }) => {
  return (
    <div className="flex flex-col items-center py-10 px-4 bg-gray-100 min-h-screen font-serif">

      {/* Main Certificate Card */}
      <div id="certificate-frame" className="relative bg-[#fdfaf3] w-full max-w-[850px] border-[12px] border-double border-[#b8975a] p-6 md:p-12 shadow-2xl text-center overflow-hidden">

        {/* Watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.05] pointer-events-none">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/a/a5/Madhya_Pradesh_Medical_Science_University_logo.png"
            alt="watermark"
            className="w-3/4"
          />
        </div>

        {/* Header Metadata */}
        <div className="relative z-10 flex justify-between text-[10px] md:text-xs font-bold text-gray-700 mb-8 uppercase tracking-wider">
          <div className="text-left">S.No: {data.serialNo}</div>
          <div className="text-right leading-tight">
            Enroll No.: {data.enrollNo}<br />
            Roll no.: {data.rollNo}
          </div>
        </div>

        {/* Branding */}
        <div className="relative z-10 mb-8">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/a/a5/Madhya_Pradesh_Medical_Science_University_logo.png"
            alt="University Logo"
            className="w-24 md:w-32 mx-auto mb-4"
          />
          <h1 className="font-serif font-bold text-xl md:text-3xl text-gray-900 tracking-tight leading-snug px-4">
            Madhya Pradesh Medical Science University, Jabalpur
          </h1>
        </div>

        {/* Recipient Details */}
        <div className="relative z-10 space-y-6 text-gray-800">
          <p className="text-sm md:text-lg italic">This is to certify that</p>
          <h2 className="text-4xl md:text-6xl text-gray-900 my-4 py-2" style={{ fontFamily: "'Great Vibes', cursive" }}>
            {data.studentName}
          </h2>
          <p className="font-bold text-sm md:text-base uppercase max-w-xl mx-auto border-b border-[#b8975a]/20 pb-4">
            {data.collegeName}
          </p>
          <p className="italic font-bold text-lg md:text-2xl text-gray-900">"{data.degreeName}"</p>
          <div className="text-xs md:text-base leading-relaxed pt-4 max-w-lg mx-auto">
            from this University pursuant to her passing the<br />
            Final year examination held in <span className="font-bold">{data.examDate}</span>
          </div>
        </div>

        {/* Footer */}
        <div className="relative z-10 mt-12 md:mt-20 flex flex-col md:flex-row justify-between items-center md:items-end gap-10">
          <div className="flex flex-col items-center">
            <div className="text-sm md:text-base text-black font-medium order-last md:order-none pb-2">
            Jabalpur : {data.issueDate}
          </div>
         
          </div>
          
   <div className="p-2 bg-white border border-gray-200 shadow-sm">
              <QRCodeSVG
                value={data.imageUrl}
                size={100} // Increased size slightly for better visibility
                level="H"  // High error correction is REQUIRED when using center logos

              />
            </div>
          
          <div className="text-[10px] md:text-[11px] text-center min-w-[220px]">
            <div className="mb-2">
              <span className="text-green-700 font-bold border-2 border-green-700 px-3 py-1 rounded-sm -rotate-2 inline-block">✓ Signature Valid</span>
            </div>
            <div className="text-gray-700 font-semibold">Digitally signed by {data.signer}</div>
            <div className="font-bold text-black mt-3 border-t pt-1 uppercase">Vice Chancellor</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;