import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromPastes } from '../redux/pasteSlice';
import toast from 'react-hot-toast';
import './past.css';

const Past = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  console.log("Redux Store Pastes:", pastes);
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  console.log("Filtered Data:", filteredData);

  const handleDelete = (pasteId) => {
    console.log("Deleting paste with ID:", pasteId);
    dispatch(removeFromPastes(pasteId));
  };

  const handleShare = (pasteId) => {
    const shareableLink = `${window.location.origin}/paste/${pasteId}`;
    // Copy link to clipboard (optional)
    navigator.clipboard.writeText(shareableLink).then(() => {
      toast.success("Link copied to clipboard!");
    });
  };
  
  

  return (
    <div>
      <div id='sam' className='flex justify-center'>
      <input
      id='sanyam'
        className='  p-5 rounded-2xl w-[90%] md:w-[50vw] mt-5 bg-black text-left placeholder-gray-400 placeholder-blink '
        type='search'
        placeholder ='search here .....'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      </div>
      
      <div className='flex justify-center  mt-5 '>
      <div className='flex flex-col gap-4 w-full max-w-screen-lg'>
        {filteredData.length > 0 && filteredData.map((paste) => {
          return (
            
            <div key={paste._id} className='flex flex-wrap justify-between items-center p-3 gap-2 border w-full rounded-xl  max-w-full overflow-hidden'>

  <div className='w-full sm:w-auto'>
    <div className='font-extrabold text-black text-xl sm:text-2xl md:text-3xl break-words max-w-full'>
      {paste.title.split("").slice(0, 20).join("")} --
    </div>
    <div className='font-medium text-black text-lg sm:text-xl md:text-2xl break-words max-w-full'>
      {paste.content.split("").slice(0, 20).join("")}.....
    </div>
  </div>

  <div className='flex flex-col justify-between w-full sm:w-auto'>
    <div className='flex flex-wrap gap-2 justify-center sm:justify-start'>
      <button><a href={`/?pastId=${paste._id}`}>Edit</a></button>
      <button><a href={`/pastes/${paste._id}`}>View</a></button>
      <button onClick={() => handleDelete(paste._id)}>Delete</button>
      <button onClick={() => {navigator.clipboard.writeText(paste.content); toast.success("Copied to Clipboard");}}>Copy</button>
      <button onClick={() => handleShare(paste._id)}>Share</button>
    </div>

    <div className='flex justify-center mt-2 text-sm sm:text-base'>
      <div>{new Date(paste.createdAt).toLocaleString()}</div>
    </div>
  </div>

</div>




          );
        })}
      </div>
      </div>


    </div>
  );
}

export default Past;
