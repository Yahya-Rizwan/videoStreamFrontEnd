import { forwardRef, useId } from "react";

const Button = forwardRef(function Button({type="Submit" , className = "",buttonText="Submit",...props},ref){
    const id = useId();
    return(
        <div className=" w-full flex justify-center items-center h-fit">
            <button type = {type} className = {`${className}`} ref= {ref} id={id} {...props}>
                {buttonText}
            </button>
        </div>
    )
});
export  default Button;