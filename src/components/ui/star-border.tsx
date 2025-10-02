import React from 'react';

type StarBorderProps<T extends React.ElementType> = React.ComponentPropsWithoutRef<T> & {
  as?: T;
  className?: string;
  children?: React.ReactNode;
  color?: string;
  speed?: React.CSSProperties['animationDuration'];
  thickness?: number;
};

const StarBorder = <T extends React.ElementType = 'div'>({
  as,
  className = '',
  color = 'white',
  speed = '6s',
  thickness = 1,
  children,
  ...rest
}: StarBorderProps<T>) => {
  const Component = as || 'div';  // Changed from 'button' to 'div'
  
  return (
    <Component
      className={`relative inline-block overflow-hidden rounded-[20px] ${className}`}
      {...rest}
      style={{
        padding: '1px 0',
      }}
    >
      {/* Animated star border effect */}
      <div
        className="absolute inset-0"
        style={{
          background: `conic-gradient(from 0deg, ${color}, transparent 60%, ${color})`,
          animation: `spin ${speed} linear infinite`,
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 h-full w-full rounded-[20px] bg-inherit">
        {children}
      </div>
    </Component>
  );
};

export default StarBorder;
