import PostDetail from '@containers/PostDetail';
import { getAllPosts, getPostBlocks } from '@libs/notion';
import Layout from '@components/Layout';
import CONFIG from '../../morethan-log.config';
import type { NextPageWithLayout } from './_app';
import type { TPost } from '../types';
import generateRssFeed from '@/src/utils/rss';

export async function getStaticPaths() {
  const posts = await getAllPosts({ includePages: true });
  return {
    paths: posts.map((row) => `/${row.slug}`),
    fallback: true,
  };
}

export async function getStaticProps({ params: { slug } }: any) {
  try {
    const posts = await getAllPosts({ includePages: true });
    const post = posts.find((t) => t.slug === slug);
    if (!post) {
      throw new Error('Post not found');
    }
    const blockMap = await getPostBlocks(post.id);

    await generateRssFeed(posts);
    const getImage = () => {
      return `https://thumbnail.hyeok.dev/${encodeURIComponent(
        post.title,
      )}.png?subTitle=&theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fthumbnail.hyeok.dev%2Fassets%2FblogIcon.svg`;
    };
    const image = getImage();

    return {
      props: { post, blockMap, image },
      revalidate: 60,
    };
  } catch (error) {
    console.error('error');

    return;
  }
}

type Props = {
  post: TPost;
  blockMap: any;
};

const PostDetailPage: NextPageWithLayout<Props> = ({ post, blockMap }) => {
  if (!post) {
    return null;
  }
  return <PostDetail blockMap={blockMap} data={post} />;
};

PostDetailPage.getLayout = function getlayout(page) {
  if (!page.props.post) {
    return null;
  }

  return (
    <Layout
      metaConfig={{
        title: page.props.post.title,
        date: new Date(
          page.props.post.date?.start_date || page.props.post.createdTime,
        ).toISOString(),
        image: page.props.image,
        description: page.props.post.summary,
        type: page.props.post.type[0],
        url: `${CONFIG.link}/${page.props.post.slug}`,
      }}
      fullWidth={page.props.post.fullWidth}
    >
      {page}
    </Layout>
  );
};

export default PostDetailPage;
