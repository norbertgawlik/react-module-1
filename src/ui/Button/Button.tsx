import { type ComponentProps } from "react";
import { cn } from "../../utils/cn";

type Props = {
    label : string;
    className? : string;
} & ComponentProps<'button'>

const Button = ({label, className, ...rest} : Props) => {
    return(
        <button 
            className={cn(
                "text-sm text-cyan-700 bg-cyan-100 pt-1.5 pb-1.5 mt-1 mb-1 rounded-smborder border-cyan-200 hover:opacity-80 hover:border-cyan-200 transition ease-in focus:outline-none", 
                className)}
            {...rest}>
            {label}
        </button>
    )
};

export default Button;