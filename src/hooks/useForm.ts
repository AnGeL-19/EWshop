import { useState } from "react"

// interface Props{
//     objValue: any
// }

export const useForm = <T>(objValue:any) => {

    const [values, setValues] = useState<T>(objValue);

    const reset = () => {
        setValues(objValue);
    }

    const handleInputChange = ({target}: any) => {
        setValues((v:any)=>({
            ...v,
            [target.name]: target.value
        }));
    }

    return {values, setValues, handleInputChange, reset};
}