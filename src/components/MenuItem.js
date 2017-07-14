import React from 'react';

export default ({ name, selected = false, children, onSelectItem, onClose }) => (
  <div className={`item ${name} ${selected ? 'item-selected' : 'item-not-selected'}`}>
    <a onClick={onSelectItem} className="item-link">
      {name}
    </a>
    {children(onClose)}
  </div>
)
