import React, {useContext, useState} from 'react';
import toast from 'react-simple-toasts';

const BingoContext = React.createContext();
const BingoUpdate = React.createContext();

export function useBingo() {
    return useContext(BingoContext)
}

export function useBingoUpdate() {
    return useContext(BingoUpdate)
}

export function BingoProvider({ children }) {
    const [dimension, setDimension] = useState(0);
    const [tasks, setTasks] = useState([]);
    const isTaskFilled = tasks.length === (dimension * dimension);

    const addTask = (task) => {
        if(isTaskFilled){
            toast("All good now!")
            return;
        }
        setTasks(prevTasks => {
            const isMiddle = Math.floor((dimension * dimension)/2);

            let newTask = {
                done: false,
                description: task,
                id: Date.now()
            };

            if(tasks.length === isMiddle) {
                newTask = {
                    done: true,
                    description: "I'M FREE",
                    id: Date.now(),
                    middle: true
                }
            }

            return [...prevTasks, newTask]
        })
    }

    const updateTask = (id) => {
        setTasks(prevTasks => {
            const updatedTasks = [...prevTasks];
            prevTasks.find((task, index) => {
                const found = task.id === id;
                if(found) {
                    updatedTasks[index].done = true;
                }
                return found;
            });

            return updatedTasks;
        });
    }

    return <BingoContext.Provider value={{dimension, tasks, isTaskFilled }}>
        <BingoUpdate.Provider value={{setDimension, addTask, updateTask}}>
            {children}
        </BingoUpdate.Provider>
    </BingoContext.Provider>
}