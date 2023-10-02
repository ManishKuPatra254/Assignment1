import './App.css';
import { Search } from './Search/Search';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Page1 } from './Page1/Page1';
import { Page2 } from './Page2/Page2';
import { PageNumbers } from './PageNumbers/PageNumbers';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Search />
        <Routes>
          <Route path='/' element={<Page1 />} />
          <Route path='/page2' element={<Page2 />} />
        </Routes>
        <PageNumbers />
      </BrowserRouter>

    </div>
  );
}

export default App;
