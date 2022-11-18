
const Box = ({task, onClick}) => {

    const {description, done} = task;

    const boxClass = `box ${done ? 'done' : ''}`;

    return (<div className={boxClass} onClick={onClick}>
        {description}
    </div>)
};


export default Box;