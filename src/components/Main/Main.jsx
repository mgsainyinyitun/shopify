import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Contracts from '../Pages/Contacts/Contracts';
import Job from '../Pages/Job/Job';
import Profile from '../Pages/Profile/Profile';
import SignIn from '../Pages/Signin/SignIn';
import { Box } from '@mui/material';
import SignUp from '../Pages/Signup/SignUp';


function Main() {
    return (
        <Box mt={10}>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/contacts' element={<Contracts />} />
                <Route path='/job' element={<Job />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/signin' element={<SignIn />} />
                <Route path='/signup' element={<SignUp/>} />
            </Routes>
        </Box>
    );
}
export default Main;