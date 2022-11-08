import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Router/Routes/Routes';
import { Children } from 'react';

function App() {
  return (
    <div className="max-w-screen-xl mx-auto">
        <RouterProvider router={router}>
          {Children}
        </RouterProvider>
    </div>
  );
}

export default App;
