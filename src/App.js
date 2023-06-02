import React, { useState } from 'react'
import './App.css';
import BinaryTree from './BinaryTree';

function App() {
  const [inputArray, setInputArray] = useState('');
  const [treeData, setTreeData] = useState([]);

  const handleInputChange = (event) => {
    setInputArray(event.target.value)
  }

  // cleans up the input; stores array on treeeData
  const handleSubmit = (event) => {
    event.preventDefault();
    const arr = inputArray.trim().split(',').map((item) => parseInt(item))
    setTreeData(arr)
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Input Array:  <input type="text" value={inputArray} onChange={handleInputChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      <BinaryTree
        tree={treeData}
      />
    </div>
  );
}

export default App;
