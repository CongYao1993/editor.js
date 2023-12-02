import { Editor } from './component/Editor'
import './App.css';

import data from './json/data1.json'

function App() {
  return (
    <div className="App">
      <Editor data={ data } />
    </div>
  );
}

export default App;
