import { ComponentProps } from "react";

type Props = {
    children : string;
} & ComponentProps<'h1'>;

const Header = ({children, ...rep} : Props) => {
    return(
        <h1 className="mb-5" {...rep}>{children}</h1>
    )
};

export default Header;