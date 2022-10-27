
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router, routes } from './Routes/Routes';


function App() {
  return (
   <div className=''>
      <RouterProvider router={router}>

      </RouterProvider>
   </div>
  );
}

export default App;
