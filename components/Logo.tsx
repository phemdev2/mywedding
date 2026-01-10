import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "text-4xl" }) => {
  return (
    <div className={`flex items-center font-serif tracking-tighter ${className}`}>
      <span className="text-wedding-green font-bold">V</span>
      <span className="font-cormorant italic text-wedding-gold mx-1 relative -top-0.5">
        &
      </span>
      <span className="text-wedding-green font-bold">O</span>
    </div>
  );
};

export default Logo;