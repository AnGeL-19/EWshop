
import { Stars } from '../product/Stars'

interface Props {
    setValue: (value:number) => void;
}

export const Filters = ({setValue}:Props) => {
 

  return (
    <div className="flex flex-col gap-2">
        <h4 className="text-base font-semibold text-slate-700">MOST QUALIFIED PRODUCTS</h4>

        <div className="flex flex-col gap-1">
            <div onClick={() => setValue(5)} className="cursor-pointer hover:text-red-700">
                <Stars value={5} />
            </div>
            <div onClick={() => setValue(4)} className="cursor-pointer hover:text-red-700">
                <Stars value={4} />
            </div>
            <div onClick={() => setValue(3)} className="cursor-pointer hover:text-red-700">
                <Stars value={3} />
            </div>
            <div onClick={() => setValue(2)} className="cursor-pointer hover:text-red-700">
                <Stars value={2} />
            </div>
            <div onClick={() => setValue(1)} className="cursor-pointer hover:text-red-700">
                <Stars value={1} />
            </div>
        </div>         

    </div>
  )
}
