
import './App.css';
import {useSelector} from 'react-redux'
import ListTask from './component/ListTask'

function App() {
  const state = useSelector((state) => ({...state}));
  console.log("state",state);

  return (
    <div className="App">
      <ListTask/>
    </div>
  );
}

export default App;