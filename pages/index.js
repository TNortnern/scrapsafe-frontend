import Layout from '../components/layout/Layout';

const IndexPage = () => {
  return (
    <Layout>
      <div className='flex flex-col h-screen w-screen items-center justify-center'>
        <h1 className='text-5xl'>Upload</h1>
        <div className='border border-custom m-4 text-custom px-6'>
          Upload An Image
        </div>

        <div className='bg-custom text-white px-6'>Submit</div>
      </div>
    </Layout>
  );
};

export default IndexPage;
