import Layout from '../components/layout/Layout';

const settings = () => {
  return (
    <Layout>
      <div className='flex flex-col w-screen h-screen justify-center items-center'>
        <h1 className='text-5xl'>Switch Membership</h1>
        <p>
          A description of what you get with a paid plan that can be either long
          or short
        </p>
        <div className='flex my-4'>
          <div className='w-1/2 px-8 active'>Free</div>
          <div className='w-1/2 px-8 inactive'>Paid</div>
        </div>

        <div className='bg-custom text-white py-1 px-6'>Confirm Changes</div>
      </div>
    </Layout>
  );
};

export default settings;
