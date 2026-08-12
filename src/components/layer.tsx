import { useEffect, useState} from 'react';
import '../less/layer.less';
import { useForm} from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import axios from 'axios';

type LayerProps = {
    active: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
};
type FormData ={
    name: string;
    email: string;
}

export default function Layer({active, setActive}:LayerProps){
    const {register, handleSubmit, reset, formState: {errors}} = useForm<FormData>()
    const [success, setSuccess] = useState<boolean>(true);


    const onSubmit: SubmitHandler<FormData> = (data)=>{
        setSuccess(false);
        let name = data.name;
        let email = data.email;
        axios.post("https://formspree.io/f/xljrdpbg", {
            name: name,
            email: email
        })
        .then(()=>{
            setSuccess(true);
            reset();
        })
        .catch((e)=>alert("Error: " + e))
    }

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;

            if (target.tagName.toLowerCase() === "div") {
                setActive(false);
            }
        };

        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, [setActive]);
    return(
        <div className={active ? 'layer active' : 'layer'}>
            <form onSubmit={handleSubmit(onSubmit)}>
               {
                success ? (
                   <>
                        <h2>Sign in</h2>
                        <input {
                            ...register("name", {
                                required: "Enter Name",
                                minLength: {
                                    value: 3,
                                    message: "Min 3 characters"
                                }
                            })
                        } placeholder='Enter Name' required/>
                        {errors.name && (
                            <span>{errors.name.message}</span>
                        )}
                        <input {
                            ...register("email", {
                                required: "Enter Email",
                                pattern: {
                                    value: /^\S+@\S+\.\S+$/,
                                    message: "Некорректный Email"
                                }
                            })
                        } placeholder='Enter Email' required/>
                        {errors.email && (
                            <span>{errors.email.message}</span>
                        )}
                        <button>Send</button>
                   </>
                ) : (
                    <p>Success!</p>
                )
               }
            </form>
        </div>
    )
}
