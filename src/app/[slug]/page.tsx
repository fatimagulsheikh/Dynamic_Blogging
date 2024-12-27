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

// Updated getServerSideProps with better typing
export const getServerSideProps: GetServerSideProps<PageProps> = async ({ params }) => {
  // Yeh ensure karte hain ke params aur slug sahi hain
  if (!params || typeof params.slug !== 'string') {
    return {
      notFound: true, // Agar slug nahi milta toh 404 page show hoga
    };
  }

  return {
    props: {
      params: {
        slug: params.slug, // Slug ko props mein bhej rahe hain
      },
    },
  };
};
