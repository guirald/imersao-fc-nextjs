// @flow 
type TitleProps = {
    
};
const Title: React.FunctionComponent<TitleProps> = (props) => {
    return (
        <h1 className="text-5xl leading-normal text-gray-500 dark:text-white">
            {props.children}
        </h1>        
    );
};

export default Title;