import './App.css';
import { Search } from './Search/Search';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Page1 } from './Page1/Page1';
import { Page2 } from './Page2/Page2';
import { Page3 } from './Page3/Page3';
import { Page4 } from './Page4/Page4';
import { Page5 } from './Page5/Page5';
import { Page6 } from './Page6/Page6';
import { Page7 } from './Page7/Page7';
import { Page8 } from './Page8/Page8';
import { Page9 } from './Page9/Page9';
import { Page10 } from './Page10/Page10';
import { PageNumbers } from './PageNumbers/PageNumbers';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Search />
        <Routes>
          <Route path='/' element={<Page1 />} />
          <Route path='/page2' element={<Page2 />} />
          <Route path='/page3' element={<Page3 />} />
          <Route path='/page4' element={<Page4 />} />
          <Route path='/page5' element={<Page5 />} />
          <Route path='/page6' element={<Page6 />} />
          <Route path='/page7' element={<Page7 />} />
          <Route path='/page8' element={<Page8 />} />
          <Route path='/page9' element={<Page9 />} />
          <Route path='/page10' element={<Page10 />} />
        </Routes>
        <PageNumbers />
      </BrowserRouter>

    </div>
  );
}

export default App;
