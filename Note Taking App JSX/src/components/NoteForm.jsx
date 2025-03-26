import React from 'react'
import CreatableSelect from 'react-select/creatable';
// import Select from "react-select";

export const NoteForm = () => {

    const handleSubmit = (e) =>{

        e.preventDefault()

                console.log('Form submitted')
    }

    const handleChange = (e) =>{
        console.log(e.target.value)
    }

    const options = [
        {value : 'admin', label : 'Admin'},
        {value : 'user', label : 'User'},
        {value : 'guest', label : 'Guest'},
    ]
    const handleCancel = () =>{
        console.log('Form cancelled')
    }


  return (

    <>
    
<div className="container mx-auto p-4">
    <form onSubmit={handleSubmit} className="space-y-4">
        <div className='form-group'>
        <label className="block text-gray-700">Username</label>
    <input
            type="text"
            name="username"

            onChange={handleChange}
            className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-300"
            placeholder="Enter username"
            required
          />

        </div>
   
        {/* React Select Dropdown */}
        <div className='form-group'>
          <label className="block text-gray-700">Role</label>
       
        <CreatableSelect isMulti />

        </div>

        <div className="form-group">

<label className="form-group"> 
Description
</label>

<textarea

name='description'
className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-300"
placeholder="Enter description"
rows="15"
required

></textarea>
<div className="buttons flex justify-center gap-3">
<button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600  mt-4">
  Submit
</button>
<button onClick={handleCancel} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600  mt-4">
    Cancel
</button>

</div>


        </div>


    </form>

</div>

    
    
    </>
  )
}
