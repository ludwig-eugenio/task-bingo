import { useBingoUpdate } from "../BingoContext";
import { useNavigate } from "react-router-dom";

const BoardSetup = () => {
    const navigate = useNavigate();
    const {setDimension} = useBingoUpdate();

    const dimensions = [3, 5, 7];

    const hardestDimension = `${dimensions[dimensions.length - 1]}x${dimensions[dimensions.length - 1]}`

    const handleChooseDimension = (dimension) => {
        setDimension(dimension);
        navigate("/task-bingo/tasks");
    }

    return <div>
        <h2 className="heading">CHOOSE A SIZE
            <br /> 
            <span className='blurb'>
                MAN IF YOU CHOOSE {hardestDimension}?! 
                YOU ARE THE GOAT!
            </span>
        </h2>

        <div className="dimension-setup">
            {dimensions.map((dimension, i) =>
                <div className="dimension-options" key={dimension} onClick={() => handleChooseDimension(dimension)}>
                    {/* {i === dimensions.length - 1 &&
                        <BloodBackground />
                    } */}
                    <span>{dimension} X {dimension}</span>
                </div>
            )}
        </div>
    </div>
}

export default BoardSetup;