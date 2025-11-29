import React from 'react';

const Button = ({ children, href, variant = 'primary', className = '', icon: Icon, ...props }) => {
  const baseStyles = "px-8 py-3 rounded-full font-medium transition-all flex items-center gap-2";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-indigo-700 group",
    secondary: "text-slate-700 border border-slate-200 hover:border-primary hover:text-primary",
    outline: "border border-slate-200 hover:border-primary hover:text-primary"
  };

  const Component = href ? 'a' : 'button';

  return (
    <Component 
      href={href}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {Icon && <Icon size={18} className={variant === 'primary' ? "group-hover:translate-x-1 transition-transform" : ""} />}
    </Component>
  );
};

export default Button;
