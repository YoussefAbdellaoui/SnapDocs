import AddDocumentBtn from '@/components/AddDocumentBtn';
import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { SignedIn, UserButton } from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server';
import Image from 'next/image';
import { redirect } from 'next/navigation';

const Home = async () => {
  const clerckUser = await currentUser();
  if(!clerckUser) redirect('/sign-in');

  const documents = [];

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

      {documents.length > 0 ? (
        <div>

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
            userId={clerckUser.id}
            email={clerckUser.emailAddresses[0].emailAddress}

          />
        </div>
      )}
    </main>
  )
}

export default Home
