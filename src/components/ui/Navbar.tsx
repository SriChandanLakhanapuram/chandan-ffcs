'use client';

import React from 'react';
import { CCButton, FFCSButton, ZButton } from './Buttons';
import { useRouter } from 'next/navigation';

type NavbarProps = {
  page: 'landing' | '404' | 'slots' | 'mobile' | 'placeholder';
};

export default function Navbar({ page }: NavbarProps) {
  const router = useRouter();

  return (
    <div className="absolute top-0 left-0 w-full z-10 select-none">
      <div className="flex justify-between items-center p-4">
        <div className="flex gap-4 items-center">
          {(page === 'landing' || page === '404' || page === 'placeholder') && (
            <>
              <CCButton />
              <ZButton
                type="long"
                text="Slot View"
                color="yellow"
                onClick={() => router.push('/slots')}
              />
            </>
          )}
          {page === 'slots' && (
            <>
              <FFCSButton />
              <div
                className="text-4xl font-[pangolin] cursor-pointer"
                onClick={() => router.push('/')}
              >
                FFCS-inator
              </div>
            </>
          )}
          {page === 'mobile' && (
            <div
              className="text-3xl font-[pangolin] cursor-pointer"
              onClick={() => router.push('/')}
            >
              FFCS-inator
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
