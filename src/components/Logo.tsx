
import React from 'react';
import { Crown } from 'lucide-react';

interface LogoProps {
  textColor?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

const Logo = ({ textColor = 'dark', size = 'md' }: LogoProps) => {
  const textClasses = {
    light: {
      primary: 'text-gold-500',
      secondary: 'text-purple-300'
    },
    dark: {
      primary: 'text-gold-500',
      secondary: 'text-purple-600'
    }
  };

  const sizeClasses = {
    sm: {
      container: 'gap-1',
      icon: 'h-4 w-4',
      text: 'text-lg'
    },
    md: {
      container: 'gap-1.5',
      icon: 'h-5 w-5',
      text: 'text-2xl'
    },
    lg: {
      container: 'gap-2',
      icon: 'h-6 w-6',
      text: 'text-3xl'
    }
  };
  
  return (
    <div className={`flex items-center ${sizeClasses[size].container}`}>
      <Crown className={`${sizeClasses[size].icon} ${textClasses[textColor].primary}`} strokeWidth={2.5} />
      <div className={`font-serif font-bold ${sizeClasses[size].text} flex items-center`}>
        <span className={textClasses[textColor].primary}>Fiesta</span>
        <span className={textClasses[textColor].secondary}>Planner</span>
      </div>
    </div>
  );
};

export default Logo;
