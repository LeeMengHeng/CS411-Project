import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Search from "./pages/Search";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Username from"./pages/Username";

function App(){
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Login/>} />
            <Route path='home' element={<Home />} />
            <Route path="search/:input" element={<Search />} />
            <Route path="username/:username/:password" element={<Username />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

