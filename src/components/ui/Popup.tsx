'use client';

import React, { useEffect } from 'react';
import { ZButton } from './Buttons';

type PopupProps = {
  type: 'rem_course' | 'rem_allcourse';
  dataBody?: string;
  closeLink: () => void;
  action?: () => void;
};

export default function Popup({ type, dataBody, closeLink, action }: PopupProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#425D5F]/75 backdrop-blur-xs">
      <div className="min-w-80 max-w-[80vw] rounded-3xl border-4 border-black bg-[#FFD3D3] p-8 shadow-[10px_10px_0_0_black]">
        <h2 className="mb-4 text-center font-poppins text-2xl font-bold text-black">
          {type === 'rem_course' ? 'Remove Course' : 'Remove All Courses'}
        </h2>
        <p className="mb-8 text-center font-poppins text-black">
          Are you sure you want to {type === 'rem_course' ? 'remove' : 'remove all'} courses?
          {dataBody && (
            <>
              <br />
              <strong>“{dataBody}”</strong>
            </>
          )}
        </p>
        <div className="flex justify-center gap-4">
          <ZButton type="regular" text="Cancel" color="yellow" onClick={closeLink} />
          <ZButton type="regular" text="Remove" color="red" onClick={action} />
        </div>
      </div>
    </div>
  );
}
