import React from 'react';

const TreeNode = ({ value, highlighted, levelStyle, onClick }) => {

  // trigger highlighted fn on BinaryTree
  const handleClick = () => {
    onClick(value);
  };

  return (
    <div className={`tree-node ${highlighted ? 'highlighted' : ''}`} style={levelStyle} onClick={handleClick}>
      <div >{value}</div>
    </div>
  );
}

export default TreeNode;