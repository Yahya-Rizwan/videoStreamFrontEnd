import { forwardRef, useId } from "react";


const input = forwardRef(function Input({label,type = "text",placeholder= "input in...",classname = "",...props},ref){
     const id = useId();
     return(
        <div className="w-fit h-fit">
            {
                label&&(<label className="inline-block mb-1 pl-1" htmlFor={id}>
                    {label}
                </label> 
                )
            }
            <input type={type} className={`${classname}`} placeholder={placeholder}  ref={ref} {...props} id={id} />

        </div>
     )
})

export default input