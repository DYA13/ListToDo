
import './App.css';
import image from './list.jpg';
import { ListGroup } from './ListGroup';





function App() {
  return (
    <div>
      <div className='box'>
      
    <img src={ image } width="200px" alt="list"/>
    <h1> What are your plans for today?</h1>
    </div>
    <div>
     <ListGroup/>
    </div>
    </div>
  );
}

export default App;
