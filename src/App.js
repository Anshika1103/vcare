import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/home/home';
import Contact from './page/contact/Contact';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />


        </Routes>


      </BrowserRouter>
    </div>
  );
}

export default App;
