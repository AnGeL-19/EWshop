import { useRef, useState } from "react"

// interface Props{
//     objValue: any
// }

export const useForm = <T>(objValue:any) => {

    const [values, setValues] = useState<T>(objValue);
    const [error, setError] = useState(objValue)
    
    // const isValid = useRef(false)

    const reset = () => {
        setValues(objValue);
    }

    const handleInputChange = ({target}: any) => {
        setValues((v:any)=>({
            ...v,
            [target.name]: target.value
        }));
    }

    const handleError = (name:string, value: boolean) => {
        setError((v:any)=>({
            ...v,
            [name]: value
        }));
    }

    const isError = () => {
        
        let objValidate = Object.keys(error || {})
        for(let i=0; i< objValidate.length; i++){
            if (error[objValidate[i]] === true) {
                return true
            } 
        }
        return false 
    }

    return {values, setValues, handleInputChange, reset, isError, handleError};
}