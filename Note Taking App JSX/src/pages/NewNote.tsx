import React from 'react'
import { NoteForm } from '../components/NoteForm'

export const NewNote = () => {
  return (
    <div className='container mx-auto p-5 border-purple-200 border-2 rounded-lg mt-10'>
<h1 className='mb-4 text-center text-6xl text-purple-950'>

   Add Notes
</h1>
<NoteForm/>

    </div> 
  )
}
