
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

interface Props{
  currentValue: number;
  updateQuantity: (value:number) => void
}

export const Count = ({currentValue,updateQuantity}:Props) => {

  const addOrRemove = (value:number) => {

    const newValue = Math.max( currentValue + value, 1 )
    updateQuantity(newValue)
  }

  return (
    <div className='flex flex-row  h-9'>
        <button onClick={()=>addOrRemove(-1)}
        className='rounded-l-2xl w-9 border-2 border-gray-900 font-bold hover:bg-gray-300'>
          <FontAwesomeIcon icon={faMinus} />
        </button>
        <span className='w-10 bg-[#272727] flex justify-center items-center font-bold text-lg text-white'>
          {currentValue}
        </span>
        <button onClick={()=>addOrRemove(1)}
        className='rounded-r-2xl w-9 border-2 border-gray-900 font-bold hover:bg-gray-300'>
          <FontAwesomeIcon icon={faPlus} />
        </button>
    </div>
  )
}
