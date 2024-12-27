import { GetServerSideProps } from 'next';

type PageProps = {
  params: {
    slug: string;
  };
};

const BlogPage: React.FC<PageProps> = ({ params }) => {
  const { slug } = params;

  return <div>Blog Post: {slug}</div>;
};

export default BlogPage;

// Fixing getServerSideProps
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  // Ensure that params is typed correctly
  return {
    props: {
      params: {
        slug: params?.slug as string,
      },
    },
  };
};
