import './App.css'
import Home from './components/Home/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ListItemContainer from './components/itemListContainer/ListItemContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'


function App() {

  return (
    <>
    <Home/>
    <div className='App'>
        <BrowserRouter>
          <NavBar/>
          <Routes>
                <Route path="/" element={<ListItemContainer/>}  />
                <Route path="/categoty/:categoryId" element= {<ListItemContainer/>} />
                <Route path="/item/itemId" element={<ItemDetailContainer/>}  />
                <Route path="*" element={<h1>404 NOT FOUND</h1>}  />
             </Routes>
        </BrowserRouter>
        
      </div>
      </>
  )
}

export default App
