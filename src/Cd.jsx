import React from 'react';

const Cd = ({ input, isChecked, onEdit, onDelete, onToggleCheck }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <span style={{ marginRight: '10px', textDecoration: isChecked ? 'line-through' : 'none' }}>{input}</span>
      <input type="checkbox" checked={isChecked} onChange={onToggleCheck} style={{ marginRight: '10px' }} />
      <button onClick={onEdit} style={{ marginRight: '10px' }}>Edit</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default Cd;
