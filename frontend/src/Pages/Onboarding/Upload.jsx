import { BentoCard } from '@/components/ui/bento-grid'
import { Card, CardContent, CardDescription } from '@/components/ui/card'
import { Heading, ScanText,SquarePen,PencilLine } from 'lucide-react'
import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

function Upload() {
    const navigate=useNavigate();
    const [isLoading, setisLoading] =useState(false);
    function handleFileUpload(file){
        setisLoading(true);
        setTimeout(()=>{
            console.log('file uploaded');
            console.log(file);
            setisLoading(false);
            navigate('/onboarding/profile')
        },4000);
    }
    return (
    <div className='bg-black w-screen h-screen flex flex-col items-center justify-center'>
        <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{duration:0.8}}
            className='w-5/6 h-5/6 flex flex-col items-center justify-center p-3 '>
        <Card className='w-3/4 h-3/4 flex flex-col items-center justify-center bg-black p-3'>
        <div className='text-4xl mb-10'>Choose a way to build your profile</div>
        <div className='flex items-center justify-center'>
            <Card className='w-72 h-72 flex flex-col items-center justify-center text-center m-6'>
                <CardContent className='flex flex-col items-center justify-center text-center '>
                <ScanText size="80" style={{marginBottom:"10",opacity:"60%"}} strokeWidth={1}/>
                <div className='text-xl font-medium mb-3'>Upload your resume</div>
                
                <CardDescription>use our resume parsing service to fill in details for you!</CardDescription>
                <input
                type="file"
                style={{ display: 'none' }}
                id="file-upload"
                onChange={(e) =>{if(e.target.files[0]) {
                    handleFileUpload(e.target.files[0])
                  }}}
                />
                <label
                htmlFor="file-upload"
                className="cursor-pointer flex items-center justify-center w-72 h-72 absolute "
                ></label>
                </CardContent>
            </Card>
            <Link to='/onboarding/profile'>
            <Card className='w-72 h-72 flex flex-col items-center justify-center text-center m-6'>
                <CardContent className='flex flex-col items-center justify-center text-center '>
                <PencilLine size="80" style={{marginBottom:"10",opacity:"60%"}} strokeWidth={1}/>
                <div className='text-xl font-medium mb-3'>Fill in Manually</div>
                
                <CardDescription>manually fill in your details to build your profile</CardDescription>
                </CardContent>

            </Card>
            </Link>
        </div>
        {isLoading?<div className='text-white'>File is being uploaded please wait..</div>:null}
        </Card>
        </motion.div>
        </div>
        
    )
}

export default Upload
