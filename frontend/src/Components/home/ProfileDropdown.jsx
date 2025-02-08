import { DropdownMenu,DropdownMenuItem,DropdownMenuTrigger,DropdownMenuContent,DropdownMenuShortcut ,DropdownMenuSeparator} from '@/components/ui/dropdown-menu'

import { User,LogOut } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import React from 'react'
import { Button } from '../ui/button'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useQueryClient } from '@tanstack/react-query'
const API_BASE_URL=import.meta.env.VITE_API_BASE_URL;
function ProfileDropdown() {
    const queryClient=useQueryClient();
    const navigate = useNavigate();
    const handleLogout = () => {
        axios.post(`${API_BASE_URL}/auth/logout`,{}, { withCredentials: true })
        .then((res) => {
            console.log(res);
            toast.success('Logged out successfully');
            queryClient.invalidateQueries({ queryKey: ["authUser"] });
            navigate('/login');
        })
        .catch((err) => {
            console.log(err);
            toast.error(`Failed to logout: ${err.message}`);
        })
    }

  return (
    <DropdownMenu className='mt-2'>
        <DropdownMenuTrigger asChild>
            <User size={18}  strokeWidth={1}/>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-24'>
      {/* <Link to='/onboarding/upload'>
      <DropdownMenuItem>
        Profile
      </DropdownMenuItem>
      </Link>
      <DropdownMenuSeparator /> */}
        <DropdownMenuItem className='text-red-500' onClick={handleLogout} >
            Log out<LogOut size={18}  strokeWidth={1} />
        </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>

  )
}

export default ProfileDropdown
