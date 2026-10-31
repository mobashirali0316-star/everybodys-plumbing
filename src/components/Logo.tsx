import React from 'react';

interface LogoProps {
  variant?: 'horizontal' | 'badge' | 'icon';
  theme?: 'light' | 'dark' | 'auto';
  className?: string;
  showLicense?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'horizontal',
  theme = 'auto',
  className = '',
  showLicense = true,
}) => {
  const isDark = theme === 'dark';

  // Primary brand ink colors
  const strokeColor = isDark ? '#E5E4DC' : '#202522';
  const fillColor = isDark ? '#F7F6F2' : '#202522';
  const accentCopper = '#D66A3A';
  const sealBg = isDark ? '#1A211D' : '#F7F6F2';

  // Precision Heritage Seal SVG
  const SealEmblem = ({ size = 44 }: { size?: number }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 transition-opacity duration-200"
      aria-label="Everybody's Plumbing Company emblem"
    >
      <defs>
        {/* Top curved path */}
        <path
          id="sealTopPath"
          d="M 28,100 A 72,72 0 1,1 172,100"
          fill="none"
        />
        {/* Bottom curved path */}
        <path
          id="sealBottomPath"
          d="M 172,100 A 72,72 0 0,1 28,100"
          fill="none"
        />
      </defs>

      {/* Outer Border Circle */}
      <circle
        cx="100"
        cy="100"
        r="96"
        fill={sealBg}
        stroke={strokeColor}
        strokeWidth="2.5"
      />

      {/* Concentric Inner Ring */}
      <circle
        cx="100"
        cy="100"
        r="64"
        fill="none"
        stroke={strokeColor}
        strokeWidth="1.25"
      />

      {/* Decorative Separation Dots */}
      <circle cx="27" cy="100" r="2" fill={accentCopper} />
      <circle cx="173" cy="100" r="2" fill={accentCopper} />

      {/* Top Text: EVERYBODY'S PLUMBING */}
      <text
        fontSize="12.5"
        fontWeight="700"
        fontFamily="'Manrope', -apple-system, sans-serif"
        letterSpacing="2.8"
        fill={fillColor}
      >
        <textPath href="#sealTopPath" startOffset="50%" textAnchor="middle">
          EVERYBODY'S PLUMBING
        </textPath>
      </text>

      {/* Bottom Text: COMPANY INC. */}
      <text
        fontSize="11"
        fontWeight="600"
        fontFamily="'Manrope', -apple-system, sans-serif"
        letterSpacing="3.2"
        fill={isDark ? '#A3A79F' : '#5C635E'}
      >
        <textPath href="#sealBottomPath" startOffset="50%" textAnchor="middle">
          COMPANY, INC.
        </textPath>
      </text>

      {/* Center Artwork: Classic Sillcock Faucet, Angled Pipe Wrench, and Water Droplet */}
      <g id="center-iconography">
        {/* Wall Flange Base */}
        <rect
          x="46"
          y="90"
          width="6"
          height="28"
          rx="1"
          fill={fillColor}
        />
        
        {/* Faucet Horizontal Body */}
        <path
          d="M 52,98 L 94,98 C 98,98 102,101 103,105 L 104,113 C 104,116 101,118 98,118 L 88,118 C 85,118 83,116 83,113 L 83,107 L 52,107 Z"
          fill={fillColor}
        />

        {/* Faucet Spout Tip */}
        <rect
          x="84"
          y="117"
          width="12"
          height="3"
          rx="0.5"
          fill={fillColor}
        />

        {/* Vertical Stem Housing */}
        <rect
          x="71"
          y="82"
          width="10"
          height="16"
          fill={fillColor}
        />

        {/* Faucet Sillcock Oval Wheel Handle */}
        <ellipse
          cx="76"
          cy="80"
          rx="14"
          ry="3.5"
          fill={fillColor}
        />
        <ellipse
          cx="76"
          cy="80"
          rx="5"
          ry="1.5"
          fill={sealBg}
        />

        {/* Falling Water Droplet (with terracotta accent touch) */}
        <path
          d="M 90,126 C 90,126 84,136 84,141 C 84,144.3 86.7,147 90,147 C 93.3,147 96,144.3 96,141 C 96,136 90,126 90,126 Z"
          fill={accentCopper}
        />

        {/* Angled Pipe Wrench */}
        <g transform="rotate(-38 122 88)">
          {/* Wrench Handle */}
          <rect
            x="112"
            y="86"
            width="48"
            height="9"
            rx="2"
            fill={isDark ? '#CBD0C9' : '#3E4641'}
          />
          {/* Hanging hole */}
          <circle cx="153" cy="90.5" r="2.2" fill={sealBg} />
          {/* Knurled nut */}
          <rect
            x="107"
            y="83"
            width="6"
            height="15"
            rx="1"
            fill={accentCopper}
          />
          {/* Lower Jaw */}
          <path
            d="M 99,86 L 108,86 L 108,95 L 101,95 L 97,91 Z"
            fill={isDark ? '#CBD0C9' : '#3E4641'}
          />
          {/* Hook Upper Jaw */}
          <path
            d="M 95,75 L 110,75 L 110,84 L 104,84 L 104,80 L 95,80 Z"
            fill={isDark ? '#CBD0C9' : '#3E4641'}
          />
        </g>
      </g>
    </svg>
  );

  if (variant === 'icon') {
    return (
      <div className={`inline-flex items-center ${className}`}>
        <SealEmblem size={40} />
      </div>
    );
  }

  if (variant === 'badge') {
    return (
      <div className={`inline-flex flex-col items-center text-center ${className}`}>
        <SealEmblem size={112} />
        {showLicense && (
          <div className="mt-3 text-[11px] font-medium tracking-wider uppercase text-[#737873]">
            Florida Lic. CFC 1428104
          </div>
        )}
      </div>
    );
  }

  // Refined Horizontal Lockup
  return (
    <div className={`inline-flex items-center gap-3.5 group select-none ${className}`}>
      <SealEmblem size={44} />
      <div className="flex flex-col text-left">
        <span className={`text-[15px] sm:text-base font-bold tracking-tight leading-tight ${isDark ? 'text-white' : 'text-[#202522]'}`}>
          Everybody's Plumbing
        </span>
        <div className="flex items-center gap-1.5 text-[11px] font-medium text-[#737873]">
          <span>Company, Inc.</span>
          {showLicense && (
            <>
              <span className="opacity-40">•</span>
              <span className="font-mono text-[10px] tracking-tight">CFC 1428104</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Logo;
