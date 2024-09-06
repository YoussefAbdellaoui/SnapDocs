import AddDocumentBtn from '@/components/AddDocumentBtn';
import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { getDocuments } from '@/lib/actions/room.actions';
import { dateConverter } from '@/lib/utils';
import { SignedIn, UserButton } from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';

const Home = async () => {
  const clerkUser = await currentUser();
  if(!clerkUser) redirect('/sign-in');
  // yt 1:45:36
  const roomDocuments = await getDocuments(clerkUser.emailAddresses[0].emailAddress);

  return (
    <main className='home-container'>
      <Header className='sticky left-0 top-0'>
        <div className='flex items-center gap-2 lg:gap-4'> 
          Notification
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </Header>

      {roomDocuments.data.length > 0 ? (
        <div className='document-list-continer'>
          {/* global css must be updated to add space between the title and the button */}
          <div className='document-list-title gap-60 pb-9'>
            <h3 className='text-28-semibold'>All documents</h3>
            <AddDocumentBtn
              userId={clerkUser.id}
              email={clerkUser.emailAddresses[0].emailAddress}
            />
          </div>
          <ul className='document-ul'>
            {roomDocuments.data.map(({ id, metadata, createdAt }: any) => (
              <li key={id} className='document-list-item'>
                <Link href={`/documents/${id}`} className='flex flex-1 items-center gap-4'>
                  <div className='hidden rounded-md bg-dark-500 p-2 sm:block'>
                    <Image
                      src="/assets/icons/doc.svg"
                      alt='Document icon'
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className='space-y-1'>
                    <p className='line-clamp-1 text-lg'>{metadata.title}</p>
                    {/* shows how many days have passed since the creation of the document*/}
                    <p className='text-sm font-light'>Created {dateConverter(createdAt)}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ): (
        <div className='documents-list-empty'>
          <Image 
            src="/assets/icons/doc.svg"
            alt='Document icon'
            width={40}
            height={40}
            className='mx-auto mb-2'
          />

          <AddDocumentBtn 
            userId={clerkUser.id}
            email={clerkUser.emailAddresses[0].emailAddress}
          />
        </div>
      )}
    </main>
  )
}

export default Home
