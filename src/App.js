import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './router/Routes';
// import Swal from 'sweetalert2';
// import { useEffect } from 'react';

function App() {

  
  return (
    <div className='max-w-[1440px] mx-auto'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
