import RicherLoader from './hoc/RicherLoader';
import Facebook from "./containers/Facebook/Facebook"
import './App.css';

function App() {
  return (
    <div className="App">
<RicherLoader>
<Facebook/>
</RicherLoader>
    </div>
  );
}

export default App;
