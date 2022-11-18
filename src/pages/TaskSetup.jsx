import { useRef } from "react";
import { useBingo, useBingoUpdate } from "../BingoContext";
import Anchor from "../components/Anchor";

const TaskSetup = () => {
    const { addTask } = useBingoUpdate();
    const { tasks, isTaskFilled } = useBingo();

    const taskInputRef = useRef();

    return (
        <div>
            <h2 className="heading">LIST YOUR TASK
            <br /> 
            <span className='blurb'>
                JUST YOU WAIT ! I'LL INTEGRATE THIS TO A TASK MANAGER
            </span>
        </h2>
        <div className="task-setup">
            <input ref={taskInputRef} type="text"/>
            <button onClick={()=> addTask(taskInputRef.current.value)}>ADD</button>
        </div>
        <div className="task-list">
            {tasks.map(task => !task.middle &&
                <div key={task.id}>
                    {task.description}
                </div>
            )}
        </div>
        {isTaskFilled &&
            <div className="actions">
                <Anchor to="/task-bingo/game">LET'S GO</Anchor>
            </div>
        }
    </div>)
    
}

export default TaskSetup;