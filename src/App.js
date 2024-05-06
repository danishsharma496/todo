import logo from './logo.svg';
import './App.css';
import Cd from './Cd';
import { useState , useEffect } from 'react';

function App() {

  const [input, setInput] = useState('');
  const [rows, setRows] = useState([]);
  const [filter, setFilter] = useState('All');

  const handleEdit = (index) => {
    const newText = prompt('Enter new text:', rows[index].text);
    if (newText !== null) {
      const updatedRows = [...rows];
      updatedRows[index].text = newText;
      setRows(updatedRows);
    }
  };

  const handleDelete = (index) => {
    const updatedRows = rows.filter((_, i) => i !== index);
    setRows(updatedRows);
  };

  const handleToggleCheck = (index) => {
    const updatedRows = [...rows];
    updatedRows[index].isChecked = !updatedRows[index].isChecked;
    setRows(updatedRows);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleAddRow = () => {
    if (input.trim() !== '') {
      setRows([...rows, { text: input, isChecked: false }]);
      setInput('');
    }
  };

console.log(rows)

const handleFilter = (type) => {
  setFilter(type);
};

const filteredRows = () => {
  switch (filter) {
    case 'Done':
      return rows.filter(row => row.isChecked);
    case 'Pending':
      return rows.filter(row => !row.isChecked);
    default:
      return rows;
  }
};

return (
  <div className="App">
    <header className="App-header">
      <div style={{ marginBottom: '10px' }}>
        <input type="text" value={input} onChange={handleInputChange} style={{ marginRight: '10px' }} />
        <button onClick={handleAddRow}>Add</button>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <button onClick={() => handleFilter('Done')}>Done</button>
        <button onClick={() => handleFilter('All')}>All</button>
        <button onClick={() => handleFilter('Pending')}>Pending</button>
      </div>
      {rows.map((row, index) => (
        <Cd
          key={index}
          input={row.text}
          isChecked={row.isChecked}
          onEdit={() => handleEdit(index)}
          onDelete={() => handleDelete(index)}
          onToggleCheck={() => handleToggleCheck(index)}
        />
      ))}
    </header>
  </div>
);
}

export default App;


