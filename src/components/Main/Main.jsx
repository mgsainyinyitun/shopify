import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Contracts from '../Pages/Contacts/Contracts';
import Job from '../Pages/Job/Job';
import Profile from '../Pages/Profile/Profile';


function Main(){
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/contacts' element={<Contracts/>}/>
            <Route path='/job' element={<Job/>}/>
            <Route path='/profile' element={<Profile/>}/>
        </Routes>
    );
}
export default Main;