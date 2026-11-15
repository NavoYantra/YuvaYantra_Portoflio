import React from "react";
import Link from "next/link";
import Image from "next/image";

export const YuvaYantraLogo: React.FC<{
  className?: string;
  variant?: "dark" | "light";
  showLink?: boolean;
}> = ({ className = "h-9 sm:h-11", variant = "dark", showLink = true }) => {
  const isLight = variant === "light";

  const content = (
    <div className={`relative flex items-center select-none shrink-0 ${className}`}>
      {isLight ? (
        // For Dark/Navy backgrounds (Footer, Hero, Industry card): High-contrast white & orange master logo
        <div className="relative h-9 sm:h-11 w-48 sm:w-60 shrink-0 flex items-center">
          <Image
            src="/primary-logo-white.png"
            alt="YuvaYantra Technology Pvt. Ltd."
            width={2062}
            height={458}
            priority
            className="h-full w-auto object-contain"
          />
        </div>
      ) : (
        // For Light/White backgrounds (Navbar, About): Official primary logo from public/primary logo.png
        <div className="relative h-9 sm:h-11 w-48 sm:w-60 shrink-0 flex items-center">
          <Image
            src="/primary-logo.png"
            alt="YuvaYantra Technology Pvt. Ltd."
            width={2062}
            height={458}
            priority
            className="h-full w-auto object-contain"
          />
        </div>
      )}
    </div>
  );

  if (showLink) {
    return (
      <Link href="/" className="inline-flex items-center transition-opacity hover:opacity-95 shrink-0">
        {content}
      </Link>
    );
  }

  return content;
};

export const NavoYantraLogo: React.FC<{
  className?: string;
  variant?: "dark" | "light";
}> = ({ className = "h-10 sm:h-12", variant = "dark" }) => {
  return (
    <div className={`relative ${className} w-auto max-w-[260px] shrink-0 flex items-center select-none`}>
      <Image
        src="/images/navoyantra-logo.png"
        alt="NavoYantra - STEM Kits & Lab Solutions"
        width={888}
        height={170}
        priority
        className="h-full w-auto object-contain"
      />
    </div>
  );
};

export const YuvaYantraMark: React.FC<{
  className?: string;
  size?: number;
}> = ({ className = "w-10 h-10", size = 48 }) => {
  return (
    <div className={`relative shrink-0 overflow-hidden ${className}`}>
      <Image
        src="/images/yuvayantra-mark.png"
        alt="YuvaYantra Icon Mark"
        width={size}
        height={size}
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export const NavoYantraMark: React.FC<{
  className?: string;
  size?: number;
}> = ({ className = "w-10 h-10", size = 48 }) => {
  return (
    <div className={`relative shrink-0 overflow-hidden ${className}`}>
      <Image
        src="/images/navoyantra-mark.png"
        alt="NavoYantra Mark"
        width={size}
        height={size}
        className="w-full h-full object-contain"
      />
    </div>
  );
};
