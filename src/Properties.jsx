import React from 'react';

const Properties = (props) => {
  return (
    <div className="at">
      <p>{props.name}</p>
      <p>{props.class}</p>
      {/* Display the roll number (either from props or the default value) */}
      <p>{props.roll}</p>
    </div>
  );
};

// Define default props for the component
Properties.defaultProps = {
  roll: 89, // Make sure this default value is correctly set
};

export default Properties;
