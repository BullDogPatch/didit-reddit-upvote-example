import { db } from '@/db';

export const getPost = async (postId) => {
  const { rows: posts } = await db.query(
    `SELECT posts.id, posts.title, posts.body, posts.created_at, users.name, 
    COALESCE(SUM(votes.vote), 0) AS vote_total
    FROM posts
    JOIN users ON posts.user_id = users.id
    LEFT JOIN votes ON votes.post_id = posts.id
    WHERE posts.id = $1
    GROUP BY posts.id, users.name
    LIMIT 1;`,
    [postId]
  );

  return posts;
};

export const getUser = async (userId) => {
  const user = await db.query(`SELECT * FROM users WHERE id = $1`, [userId]);
  console.log(user.rows[0]);
  return user.rows[0];
};
