import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from '../pages/login'
import Finish from '../pages/finish'

function router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login />}/>
            <Route path='/last' element={<Finish />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default router;