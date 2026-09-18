import  { useContext } from 'react'
import { StayContext } from './context/StayContext';
import { AdminContext } from './context/AdminContext';
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Admin/Dashboard';
import AllAppointments from './pages/Admin/AllAppointments';
import AddStay from './pages/Admin/AddStay';
import StaysList from './pages/Admin/StaysList';
import Login from './pages/Login';
import StayAppointments from './pages/Stay/StayAppointments';
import StayDashboard from './pages/Stay/StayDashboard';
import StayProfile from './pages/Stay/StayProfile';

const App = () => {

  const { dToken } = useContext(StayContext)
  const { aToken } = useContext(AdminContext)

  return dToken || aToken ? (
    <div className='bg-[#F8F9FD]'>
      <ToastContainer />
      <Navbar />
      <div className='flex items-start'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<></>} />
          <Route path='/admin-dashboard' element={<Dashboard />} />
          <Route path='/all-appointments' element={<AllAppointments />} />
          <Route path='/add-stay' element={<AddStay />} />
          <Route path='/stay-list' element={<StaysList />} />
          <Route path='/stay-dashboard' element={<StayDashboard />} />
          <Route path='/stay-appointments' element={<StayAppointments />} />
          <Route path='/stay-profile' element={<StayProfile />} />
        </Routes>
      </div>
    </div>
  ) : (
    <>
      <ToastContainer />
      <Login />
    </>
  )
}

export default App