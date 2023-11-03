import Navbar from "./Navbar";
import Fichas from "./Fichas";
import { Route, Routes } from 'react-router-dom';
import Pacientes from "./Pacientes";

const Home = () => {
    return (
        <div className='row bg-white mx-auto'>
            <Navbar></Navbar>
            <Routes>
                <Route path='/fichas' element={<Fichas/>}></Route>
                <Route path='/pacientes' element={<Pacientes/>}></Route>
            </Routes>
        </div>
    );
};

export default Home;
