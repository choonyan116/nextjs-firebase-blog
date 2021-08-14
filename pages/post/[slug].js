import { useRouter } from 'next/router';
import { getFormattedDate } from '@lib/utils';
import { getPostBySlug } from '@lib/firebase';
import { Layout } from '@components';
import styles from '@styles/post.module.scss';

/* PostPage accept post prop and render the post */
const PostPage = ({ post }) => {
  //Ready to route user to other pages.
  const router = useRouter();
 
  /*Direct user to 404 page if post does not exists*/
  if (!post && typeof window !== 'undefined') {
    router.push('/404');
    return;
  }

  if(!post){
    return null;
  }

return (
    <Layout>
      <div className={styles.PostPage}>
        <img src={post.coverImage} alt={post.coverImageAlt} />
        <h1>{post.title}</h1>
        <span>Published {getFormattedDate(post.dateCreated)}</span>
        <p dangerouslySetInnerHTML={{ __html: post.content }}></p>
      </div>
    </Layout>
  );
}  
  

export async function getServerSideProps(context) {
    const post = await getPostBySlug(context.query.slug);
  
    return {
      props: {
        post,
      },
    };
  }
  

export default PostPage;
