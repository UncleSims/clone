const Timer = (props) => {
    const className =`timer ${props.type}`
    return (
        <>
        <p className={className}>00.00</p>
        </>
    );
}
 
export default Timer;