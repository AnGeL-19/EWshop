import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as faStartSolid } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-regular-svg-icons'

interface Props{
    value: number;
    color?: string;
}

export const Stars = ({value,color}:Props) => {
  
    const values = [1,2,3,4,5];
  
    return (
    <div>
        {
            values.map( v => {
                if (v <= Math.round(value)) {
                    return <FontAwesomeIcon key={v} icon={faStartSolid} color={color}/>
                }else{
                    return <FontAwesomeIcon key={v} icon={faStar} color={color} />
                }
            })
        }
    </div>
  )
}
