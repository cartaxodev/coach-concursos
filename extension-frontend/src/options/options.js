import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  return (
    <div>
      OPTIONS TESTE!
    </div>
  )
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

const container = document.createElement('div');
document.body.appendChild(container);
const root = ReactDOM.createRoot(container);
root.render(<App />);