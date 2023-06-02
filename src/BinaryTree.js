import React, { useState } from 'react';
import TreeNode from './TreeNode';

const BinaryTree = ({ tree }) => {
  const [highlightedNodes, setHighlightedNodes] = useState([]);

  const handleClickNode = (value) => {
    const index = tree.indexOf(value);
    const nodesToHighlight = [];
    let currentIndex = index;
    while (currentIndex >= 0) {
      nodesToHighlight.push(tree[currentIndex]);
      currentIndex = Math.floor((currentIndex - 1) / 2);
    }
    setHighlightedNodes(nodesToHighlight);
  }

    // Calculate the maximum number of levels in the binary tree
    const maxLevels = Math.floor(Math.log2(tree.length + 1));
  

  return (
    <div className="binary-tree">
    {tree.map((value, index) => {
      const level = Math.floor(Math.log2(index + 1));
      const levelStyle = { gridRow: level + 1, gridColumn: `span ${Math.pow(2, maxLevels - level)}` };

      return (
        <TreeNode
          key={index}
          value={value}
          highlighted={highlightedNodes.includes(value)}
          onClick={handleClickNode}
          levelStyle={levelStyle}
        />
      );
    })}
  </div>
  );
}

export default BinaryTree;