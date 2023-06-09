import { useState } from "react";

export const useForm = (initialForm:any ={ }) => {
  
    const [formState, setFormState] = useState(initialForm);

    const onInputChange = ({ target }: any) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value,
            //Con esta forma de los corchetes cambio unicamente el valor que paso
        });
    }
    const onResetForm = () => {
        setFormState(initialForm);
    };
    return{
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}
