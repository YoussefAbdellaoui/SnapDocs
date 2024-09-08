'use client'

import { ClientSideSuspense, RoomProvider } from '@liveblocks/react/suspense'
import Header from '@/components/Header'
import { SignedOut, SignInButton, SignedIn, UserButton } from '@clerk/nextjs'
import { Editor } from '@/components/editor/Editor'
import ActiveCollaborators from './ActiveCollaborators'
import { useEffect, useRef, useState } from 'react'
import { Input } from './ui/input'
import Image from 'next/image'
import { updateDocument } from '@/lib/actions/room.actions'
import Loader from './Loader'

const CollaborativeRoom = ({ roomId, roomMetadata, users, currentUserType }: CollaborativeRoomProps) => {

  const [documentTitle, setDocumentTitle] = useState(roomMetadata.title);
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLDivElement>(null);

  // Function that triggers when the user clicks Enter on the keyboard to save the document title. 
  // If the document title is different from the roomMetadata.title, it will save the new document title.
  const updateTitleHandler = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter') {
      setLoading(true);
      
      // Checks if the document title is different from the roomMetadata.title
      try {
        if(documentTitle !== roomMetadata.title) {
          const updatedDocument = await updateDocument(roomId, documentTitle);

          if(updatedDocument) {
            setEditing(false);
          }
        }
      } catch (error) {
        console.error(error);
      }

      setLoading(false);
    }
  }
  // Function that saves the document title when the user clicks outside the input. e.target = event.target
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setEditing(false);
        updateDocument(roomId, documentTitle);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [roomId, documentTitle])

  // Function that focuses on the input when the user clicks on the edit icon.
  useEffect(() => {
    if(editing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editing])

  return (
    <RoomProvider id={roomId}>
        <ClientSideSuspense fallback={<Loader />}>
            <div className='collaborative-room'>
                <Header>
                    <div ref={containerRef} className='flex w-fit items-center justify-center gap-2'>
                      {editing && !loading ? (
                        <Input 
                          type='text'
                          value={documentTitle}
                          ref={inputRef}
                          placeholder='Enter the document title'
                          // event that triggers when the user adds the new document title. e = event      
                          onChange={(e) => setDocumentTitle(e.target.value)}
                          onKeyDown={updateTitleHandler}
                          disable={!editing}
                          className='document-title-input'
                        />
                      ) : (
                        <>
                          <p className='document-title'>{documentTitle}</p>
                        </>
                      )}

                      {currentUserType === 'editor' && !editing && (
                        <Image 
                          src="/assets/icons/edit.svg"
                          alt="Edit document title"
                          width={24}
                          height={24}
                          onClick={() => setEditing(true)}
                          className='cursor-pointer'                           
                        />
                      )}

                      {currentUserType !== 'editor' && !editing && (
                        <p className='view-only-tag'>View only</p>
                      )}
                      
                      {loading && <p className='text-sm text-gray-400'>Saving...</p>}
                    </div>
                    <div className='flex w-full flex-1 justify-end gap-2 sm:gap-3'>
                      <ActiveCollaborators />
                      <SignedOut>
                        <SignInButton />
                      </SignedOut>
                      <SignedIn>
                        <UserButton />
                      </SignedIn>
                    </div>
                </Header>
            <Editor 
              roomId={roomId}
              currentUserType={currentUserType}
            />
            </div>
        </ClientSideSuspense>
    </RoomProvider>
  )
}

export default CollaborativeRoom