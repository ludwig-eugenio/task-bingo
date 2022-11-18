import React, {useEffect, useMemo, useState} from "react";
import { useBingo, useBingoUpdate } from "../BingoContext";
import Box from "../components/Box";
import toast from 'react-simple-toasts';

const Game = () => {
    const [wonCombinations, setWonCombinations] = useState({});
    const [fireworks, setFireworks] = useState(false);
    const { tasks, dimension } = useBingo();
    const { updateTask } = useBingoUpdate();
    const boxSize = Array.apply(null, Array(dimension)).reduce((a) => a + "1fr ","");

    const winningCombinations = useMemo(() => getWinningCombinations(dimension), [dimension]);
    
    useEffect(() => {
        winningCombinations.forEach(combination => {
            let winning = true;
    
            combination.forEach(index => {
                if(!tasks[index].done)
                    winning = false;
            })
    
            if(!wonCombinations[`${combination}`] && winning) {
                setWonCombinations(prev => ({...prev, [`${combination}`]: true }));
                setFireworks(true);
                toast("BINGO!!")
            }
        })
    }, [wonCombinations, winningCombinations, tasks]);

    useEffect(() => {
        if(fireworks) {
            setTimeout(() => {
                setFireworks(false)
            }, 2500)
        }
    }, [fireworks])

    return (
        <div className="game-container">
            <div className="game" style={{gridTemplateRows: boxSize, gridTemplateColumns: boxSize}}>
                {tasks.map(task => 
                    <Box 
                        key={task.id} 
                        task={task} 
                        onClick={() => updateTask(task.id)} 
                    />    
                )}
            </div>
            <div class={`pyro ${fireworks ? 'active' : ""}`}>
                <div class="before"></div>
                <div class="after"></div>
            </div>
        </div>
    )
}


function getWinningCombinations(dimension) {
    const horizonatalCombinations = [];
    const verticalCombinations = [];
    const leftCrossCombination = [];
    const RightCrossCombination = [];
    // 0
    Array.apply(null, Array(dimension)).forEach((box, outerIndex) => {
        const horizonatalCombination = [];
        const verticalCombination = [];
        // 1
        Array.apply(null, Array(dimension)).forEach((box, innerIndex) => {
            horizonatalCombination.push(innerIndex + (outerIndex * dimension));
            verticalCombination.push((outerIndex) + (innerIndex * dimension));
        })
        horizonatalCombinations.push(horizonatalCombination);
        verticalCombinations.push(verticalCombination);
        leftCrossCombination.push((outerIndex * dimension) + outerIndex);
        RightCrossCombination.push(((outerIndex * dimension) + dimension - outerIndex) - 1)
    });

    return [...horizonatalCombinations, ...verticalCombinations, leftCrossCombination, RightCrossCombination];
}

export default Game;