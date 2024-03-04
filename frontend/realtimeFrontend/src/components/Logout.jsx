import React from 'react'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Logout() {
    const navigate = useNavigate()
    const logout = ()=>{
        navigate('/login')
    }
  return (
    <button className='bg-purple-400 w-6 h-6 md:w-10 md:h-10 mt-1.5 md:mt-3 items-center rounded-full text-white hover:opacity-80 hover:bg-indigo-700' onClick={logout}>
        <PowerSettingsNewIcon/>
    </button>
  )
}

export default Logout