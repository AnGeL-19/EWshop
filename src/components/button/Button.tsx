import React from 'react'

interface Props{
    type?: 'button' | 'submit';
    text: string;
    bgColor?: 'bg-white' | 'bg-black';
    color?: 'text-white' | 'text-black';
    rounded?: 'rounded-sm' | 'rounded-md' | 'rounded-lg' | 'rounded-3xl' ;
    border?: 'border' | 'border-2' | 'border-4' | 'rounded-xl';
    size?: 'sm' | 'md' | 'lg';
    onClick?: () => void;
    disabled?: boolean;
}

export const Button = ({type='button',text, bgColor = 'bg-white',color="text-black",border,rounded, size='md',onClick,disabled}:Props) => {
  return (
    <button
        disabled={disabled}
        type={type}
        onClick={onClick} 
        className={`
        ${bgColor}
        ${color}
        ${border}
        ${rounded}
        ${size === 'sm' && 'w-[85px] h-[40px]'}
        ${size === 'md' && 'w-[140px] h-[40px] font-semibold xs:w-full'}
        ${size === 'lg' && 'w-[345px] h-[45px] font-extrabold xs:w-full'}
        text-base
        ${disabled && 'bg-slate-600' }
    `}>
        {text}
    </button>
  )
}
