import React, { useEffect, useState,useRef } from 'react'
import ChatInterface from './Chat_interface'
import { Card, CardFooter, CardHeader,CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { MessagesSquare, Plus, PlusCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
function createSessionId(){
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}
function Chat() {
    const [sessions, setSessions] = useState([]);
    const [currentSessionId, setCurrentSessionId] = useState(null);
    const initialized = useRef(false);
    function goToSession(id) {
      console.log("goToSession called with id:", id);
      setCurrentSessionId(id);
    }
    useEffect(()=>{
        console.log(sessions);
    },[sessions]);
    function startNewChat() {
      if (sessions.length === 0 || (sessions.length>0 && currentSessionId)) {
        const sessionId = createSessionId();
        const session = { id: sessionId, title: `Chat ${sessions.length + 1}`, messages: [] };
        setSessions(prev => [...prev, session]);
        
        setCurrentSessionId(sessionId);
      } else {
        console.log('chat already started');
      }
    }
  
    useEffect(() => {
      if(!initialized.current){
        startNewChat();
        initialized.current = true;
      }
    }, []);  
  return (
<div className="flex flex-row  mt-20 gap-2 w-full h-full p-10">
  {/* Sidebar - Fixed width */}
    <Card className='w-1/5 rounded-xl flex max-h-[calc(80vh)] flex-col hover:border-zinc-800 bg-[#15151524] border  border-zinc-900'>
        <CardHeader className='border-b p-3 flex flex-row items-center justify-center gap-2  text-center text-xl font '>
            <MessagesSquare />
            <div>My Chats</div>
        </CardHeader>
        <CardContent className='overflow-y-auto no-scrollbar'>
            {sessions.map((session,idx)=>(
                <div key={session.id} 
                className={cn('p-2   text-center text-white border-l m-2 rounded-md bg-zinc-900 border-zinc-800 hover:bg-zinc-800')}
                onClick={()=>goToSession(session.id)}
                >
                    {session.title}
                </div>
            ))}
        </CardContent>



        <CardFooter className='mt-auto text-center p-2'>
            <button 
            className={cn('p-2 rounded-xl text-lg flex gap-4 items-center font-thin justify-center w-full' , colors.purple)}
            onClick={startNewChat}
            >
                New Chat
                <PlusCircle strokeWidth={1}/>
            </button>
        </CardFooter>
    </Card>
  {/* Main Content - Takes remaining space */}
  <div className='flex-1 h-full items-center justify-center'>
    <ChatInterface className='' sessionId={currentSessionId} sessions={sessions} setSessions={setSessions}/>
    </div>
</div>

  )
}

export default Chat
const colors= {
    blue:
      "bg-blue-50 text-blue-700 border border-blue-200 hover:border-blue-300 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-700/30 dark:hover:border-blue-600/50",
    purple:
      "bg-purple-50 text-purple-700 border border-purple-200 hover:border-purple-300 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-700/30 dark:hover:border-purple-600/50",
    green:
      "bg-green-50 text-green-700 border border-green-200 hover:border-green-300 dark:bg-green-900/30 dark:text-green-300 dark:border-green-700/30 dark:hover:border-green-600/50"
}