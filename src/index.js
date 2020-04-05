import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './components/App/App';

class Main extends React.Component {
  render() {
    return <App />;
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));

