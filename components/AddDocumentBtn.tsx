"use client";

import React, { useState } from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import { createDocument } from '@/lib/actions/room.actions';
import { useRouter } from 'next/navigation';

const AddDocumentBtn = ({ userId, email }: AddDocumentBtnProps) => {
const router = useRouter();

const [loading, setLoading] = useState(false);

  const AddDocumentHandler = async () => {
    setLoading(true); // Set loading to true while creating the document
    try {
      const room = await createDocument({ userId, email });
      // Redirect to the new document, when created
      if(room) router.push(`/documents/${room.id}`);
    } catch (error) {
      console.log(`Error creating document ${error}`);
    }
    setLoading(false); // Set loading to false after creating the document
  }

  return (
    <Button type='submit' onClick={AddDocumentHandler} className='gradient-blue flex gap-1 shadow-md p-4' disabled={loading}>
        <Image 
          src="/assets/icons/add.svg"
          alt='Add icon'
          width={24}
          height={24}
        />
        {loading ? 'Creating...' : <p className='hidden sm:block'>Start a blank document</p>}
        
    </Button>
  )
}

export default AddDocumentBtn