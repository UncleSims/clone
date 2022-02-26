
const TinyButton = (props) => {
    const className =`button ${props.type}`
    return ( 
            <button className={className} onClick={props.handleClick}>
        {props.label}
        </button>
     );
}
 
export default TinyButton; 