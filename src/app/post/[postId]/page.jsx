import { CommentForm } from '@/components/CommentForm';
import { CommentList } from '@/components/CommentList';
import { Vote } from '@/components/Vote';
import { db } from '@/db';
import { getPost } from '@/utils/api';

export async function generateMetadata({ params }) {
  const postId = params.postId;
  const posts = await getPost(postId);
  const post = posts[0];

  if (!post) return { title: 'Post Not Found' };

  return {
    title: `${post.title}`,
    description: `Viewing ${post.title} page`,
  };
}

export default async function SinglePostPage({ params }) {
  const postId = params.postId;

  const posts = await getPost(postId);
  console.log(posts);

  const post = posts[0];

  const { rows: votes } = await db.query(
    `SELECT *, users.name from votes
     JOIN users on votes.user_id = users.id`
  );

  return (
    <div className='max-w-screen-lg mx-auto pt-4 pr-4'>
      <div className='flex space-x-6'>
        <Vote postId={post.id} votes={post.vote_total} />
        <div className=''>
          <h1 className='text-2xl'>{post.title}</h1>
          <p className='text-zinc-400 mb-4'>Posted by {post.name}</p>
        </div>
      </div>
      <main className='whitespace-pre-wrap m-4'>{post.body}</main>

      <CommentForm postId={post.id} />
      <CommentList postId={post.id} />
    </div>
  );
}
