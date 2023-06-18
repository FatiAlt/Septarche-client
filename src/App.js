import {  Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";

function App() {
  // return (
  //   <div>

  //         <BrowserRouter>
  //     <Routes>
  //     <Route path="/" element={<HomePage />} />
  //     <Route path="/home" element={<HomePage />} />
  //    </Routes>
  //   </BrowserRouter>
  //   </div>

  //   <div className='cart'>
  //     Panier
  //   </div>
  //);
  return (
    <BrowserRouter>
        <div className="App">
            <h1>LIBRAIRIE DE VENTE EN LIGNE</h1>
            
            <Routes>
                <Route element={<HomePage/>}>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="home" element={<HomePage />}/>
                </Route>

            </Routes>
         </div>
    </BrowserRouter>
)};

export default App;
