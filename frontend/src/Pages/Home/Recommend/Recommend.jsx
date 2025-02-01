import React, { useEffect } from 'react'
import { CoursesArray } from './CoursesArray'
import { useMutation, useQuery } from '@tanstack/react-query'
import toast from 'react-hot-toast'

function Recommend() {
  const [desiredRecs,setdesiredRecs] = React.useState(null);
  const [recs,setRecs] = React.useState(null);
  const {data,isPending,error}=useQuery({
    queryFn: async () => {
      const response=await fetch('/api/recommendations');
      const data=await response.json();
      if(!response.ok){
        throw new Error(data.error || 'Failed to fetch recommendations');
      }
      const res1=data.recs;
      const res2=data.drecs;
      if(res1){
        setRecs(Object.keys(res1.url).map(key => ({
          url: res1.url[key],
          title: res1.course_title[key],
          popularity: res1.popularity_score[key]
        })))
      }
      if(res2){
        setdesiredRecs(Object.keys(res2.url).map(key => ({
          url: res2.url[key],
          title: res2.course_title[key],
          popularity: res2.popularity_score[key]
        }))
        )
      }
      return data;
    },
    onError: (error) => {
      console.error('Failed to fetch recommendations:', error);
      toast.error(`Failed to fetch recommendations: ${error.message}`);
    },
  });
  return (
    <div className='mt-20 ml-0 scale-90'>
      <div className='p-10 pb-0'>
        <h1 className='text-4xl pl-10 -mb-3 font-thin'>Recommendations based on your <b className='text-violet-600'>desired skills</b></h1>
          <CoursesArray cards={desiredRecs} isLoading={isPending}/>
        <h1 className='text-4xl pl-10 -mb-3 font-thin'>Get better at what you <b className='text-emerald-300'>already know</b></h1>
          <CoursesArray cards={recs} isLoading={isPending}/>
      </div>
    </div>
  )
}

export default Recommend
