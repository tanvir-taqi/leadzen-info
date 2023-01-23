
import { useContext } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { Modecontext } from './Context/ModeContext';
import { router } from './router/router';

function App() {
  const {isDark} = useContext(Modecontext)
  return (
    <div className={`min-h-[100vh] ${isDark ? 'text-white bg-gray-700 ' : 'text-black bg-gray-100 '}`}>
      <RouterProvider router={router}>

      </RouterProvider>
     
    </div>
  );
}

export default App;
