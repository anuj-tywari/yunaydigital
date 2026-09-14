import React from 'react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  /** 'dark' renders the wordmark for dark backgrounds, 'light' for light backgrounds */
  variant?: 'dark' | 'light';
}

const sizeMap = {
  sm: 'h-8',
  md: 'h-10',
  lg: 'h-12',
  xl: 'h-14'
};

const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  variant = 'dark'
}) => {
  if (!showText) {
    return (
      <Image
        src="/brand/logo-mark-512.png"
        alt="Yunay Digital"
        width={512}
        height={512}
        priority
        className={`${sizeMap[size]} w-auto ${className}`}
      />
    );
  }

  return (
    <Image
      src={`/brand/logo-${variant}-1024.png`}
      alt="Yunay Digital Services Private Limited"
      width={1024}
      height={220}
      priority
      className={`${sizeMap[size]} w-auto ${className}`}
    />
  );
};

export default Logo;
