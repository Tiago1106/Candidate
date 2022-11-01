import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Usuario from '../pages/Usuario'

function router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Usuario />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default router;