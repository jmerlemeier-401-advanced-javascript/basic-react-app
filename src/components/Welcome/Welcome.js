import React from 'react';

const Welcome = (props) => {
  return (
    <h1>Welcome, {props.name}</h1>
  )
}

export default Welcome;
// const element = <Welcome name="Julie" />;
// ReactDOM.render(element, document.getElementById('root'));