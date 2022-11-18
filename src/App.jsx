// COMPONENTS
import Anchor from "./components/Anchor";

function App() {
  return (
    <div className="home">
      <h1 className='heading'>
        TASK BINGO! 
        <br /> 
        <span className='blurb'>GET PRAISE ! ! !</span>
      </h1>
      <Anchor to="setup">START</Anchor>
    </div>
  );
}

export default App;
