import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { addToPastes, updateToPastes } from '../redux/pasteSlice';

const Home = () => {
    const [title , setTitle] = useState("");
    const [value , setValue] = useState('');
    const [searchParams , setSearchParams] = useSearchParams();
    const pastId = searchParams.get("pastId")
    const dispatch = useDispatch();
    const allPastes = useSelector((state) => state.paste.pastes);

    useEffect(() => {
        console.log("inside use effect");
        if(pastId){
            const paste = allPastes.find((p) => p._id === pastId);
            console.log("Page Found")
            setTitle(paste.title);
            setValue(paste.content);
        }
    }, [pastId])

    

    function createPaste() {
     const paste = {
        title : title,
        content: value,
        _id: pastId ||
             Date.now().toString(36),
             createdAt:new Date().toISOString(),
     }

     if(pastId){
        // update 
        dispatch(updateToPastes(paste));
     }
     else {
     // create 
        dispatch(addToPastes(paste));
     }

     // after creation or updation 
     setTitle('');
     setValue('');
     setSearchParams({});
    }
  return (
   <div >
    <div className='h-3 '></div>
     <div className='flex flex-row gap-7 place-content-evenly'>
     <input className='bg-black pl-6 rounded-2xl mt-1 w-[80%] max-w-full'
      type='text'
      placeholder='enter title here'
      value={title}
      onChange={(e) => setTitle(e.target.value) }
     />
     <button
     onClick={createPaste}   
     className='bg-black  rounded-2xl mt-2 '>
        {
        pastId ? "update My Paste" : "Create My Paste"
        }
     </button>
    </div>
    <div className='flex mt-8 justify-center '>
        <textarea
        className='bg-black rounded-2xl mt-4 w-full md:w-[80%] max-w-full p-4 resize-none '
        value={value}
        placeholder='enter content here '
        onChange={(e) => setValue(e.target.value)}
        rows={20}
        />
    </div>
   </div>
  )
}

export default Home