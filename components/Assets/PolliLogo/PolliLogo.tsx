// components/PolliLogo.tsx

import Image from 'next/image';
import React from 'react';

interface PolliLogoProps {
  size: number;
}

export const PolliLogoPrimary: React.FC<PolliLogoProps> = ({ size }) => {
  const height = size;
  const width = (size / 1671) * 1080;

  return (
    <div className="relative" style={{ width: `${width}px`, height: `${height}px` }}>
      <Image
        src="/logo/Polli v2.0.2_1671t.png"
        width={width}
        height={height}
        alt="Polli Logo Primary"
        style={{objectFit: "contain"}}
      />
    </div>
  );
};

export const PolliLogoP: React.FC<PolliLogoProps> = ({ size }) => {
  const height = size;
  const width = (size / 950) * 1443;

  return (
    <div className="relative" style={{ width: `${width}px`, height: `${height}px` }}>
      <Image
        src="/logo/PolliP_v1.0_trans_4x.png"
        width={width}
        height={height}
        alt="Polli Logo P"
        style={{objectFit: "contain"}}
      />
    </div>
  );
};

export const PolliLabsTrans: React.FC<PolliLogoProps> = ({ size }) => {
  const height = size;
  const width = height * 3; // Adjust the width based on the 3:1 ratio

  return (
    <div className="relative" style={{ width: `${width}px`, height: `${height}px` }}>
      <Image
        src="/logo/PolliLabs.v0.1.5.300t.png"
        width={width}
        height={height}
        alt="Polli Labs Logo"
        style={{objectFit: "contain"}}
      />
    </div>
  );
};

export const PolliOSTrans: React.FC<PolliLogoProps> = ({ size }) => {
  const height = size;
  const width = (size / 768) * 262;

  return (
    <div className="relative" style={{ width: `${width}px`, height: `${height}px` }}>
      <Image
        src="/logo/PolliOS.v0.1t.png"
        width={width}
        height={height}
        alt="PolliOS Logo"
        style={{objectFit: "contain"}}
      />
    </div>
  );
};

