import { auth } from '@/auth';
import { LoginButton } from '@/components/LoginButton';
import { getUser } from '@/utils/api';
import Link from 'next/link';

export async function generateMetadata() {
  const session = await auth();
  const userId = session?.user?.id;
  const user = await getUser(userId);

  if (!user) return { title: 'Please log in' };

  return {
    title: `${user.name}`,
    description: `Viewing ${user.name}'s profile page`,
  };
}

const ProfilePage = async () => {
  const session = await auth();
  const userId = session?.user?.id;
  const user = await getUser(userId);

  if (!user) {
    return (
      <div className='h-[80vh] flex flex-col justify-center items-center'>
        <p className='m-4 text-red-800 font-bold'>Please log in first</p>
        <LoginButton />
      </div>
    );
  }

  return (
    <div className='h-[80vh] flex flex-col justify-center items-center'>
      <Link href={`/`} className='text-blue-500 hover:underline mb-4 block'>
        ← Back
      </Link>
      <p className='text-2xl font-bold'>{user.name}</p>
      <img
        src={user.image}
        alt={`Profile image of ${user.name}`}
        className='h-36 rounded-full m-4'
      />
      <p className='text-1xl font-bold'>{user.email}</p>
    </div>
  );
};

export default ProfilePage;
