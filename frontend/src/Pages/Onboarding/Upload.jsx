import { BentoCard } from '@/components/ui/bento-grid'
import { Card, CardContent, CardDescription } from '@/components/ui/card'
import { Heading, ScanText,SquarePen,PencilLine } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion'

function Upload() {
  return (
    <div className='bg-black w-screen h-screen flex items-center justify-center'>
        <Card className='w-3/4 h-3/4 flex flex-col items-center justify-center bg-black'>
        <div className='text-4xl mb-10'>Choose a way to build your profile</div>
        <div className='flex items-center justify-center'>
            <Card className='w-72 h-72 flex flex-col items-center justify-center text-center m-6'>
                <CardContent className='flex flex-col items-center justify-center text-center '>
                <ScanText size="80" style={{marginBottom:"10",opacity:"60%"}} strokeWidth={1}/>
                <div className='text-xl font-medium mb-3'>Upload your resume and build your profile</div>
                
                <CardDescription>use our resume parsing service to fill in details for you!</CardDescription>
                <input
                type="file"
                style={{ display: 'none' }}
                id="file-upload"
                onChange={(e) => console.log(e.target.files[0])}
                />
                <label
                htmlFor="file-upload"
                className="cursor-pointer flex items-center justify-center w-72 h-72 absolute "
                ></label>
                </CardContent>

            </Card>
            <Card className='w-72 h-72 flex flex-col items-center justify-center text-center m-6'>
                <CardContent className='flex flex-col items-center justify-center text-center '>
                <PencilLine size="80" style={{marginBottom:"10",opacity:"60%"}} strokeWidth={1}/>
                <div className='text-xl font-medium mb-3'>Fill in Manually</div>
                
                <CardDescription>manually fill in your details to build your profile</CardDescription>
                </CardContent>

            </Card>
        </div>
        </Card>
    </div>
  )
}

export default Upload
