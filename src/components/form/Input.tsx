import React from 'react'

interface Props{
  type: string
  name: string;
  placeholder: string;
  onChange: (e:any) => void;
  value: string;
  maxLength?: {
    num: number,
    text: string
  }
  minLength?: {
    num: number,
    text: string
  }
}

export const Input = ({type,name,value,maxLength,minLength,placeholder,onChange}:Props) => {
  return (
    <div className="flex flex-col gap-1 xs:w-full">

        <div className="w-[350px] xs:w-full h-10">
            <input className={
              `w-full h-full p-3 border rounded-md outline-none text-gray-600 font-medium ${       
              (maxLength && minLength)
              &&
              ( value.length >= maxLength.num || value.length  < minLength.num )
              &&'border-red-600'}`
            } 
              type={type}
              name={name} 
              value={value} 
              placeholder={placeholder}
              onChange={onChange}
            />
        </div>
        
        {
          maxLength
          &&
            (value.length >= maxLength.num)
            &&
            <span className='font-bold text-sm text-red-500'>{
              `${maxLength.text ? maxLength.text : ''}`
            }
            </span>
        }
        {
          minLength
          &&
          (value.length < minLength.num )
          &&
          <span className='font-bold text-sm text-red-500'>{
            `${minLength.text ? minLength.text : ''}`
          }
          </span>
        }
        
    </div>
  )
}
