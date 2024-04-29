type Props = {
    children? : string;
};

const Text = ({children = 'none txt'} : Props) => {
    return(
        <p className="text-cyan-400">{children}</p>
    )
};

export default Text;