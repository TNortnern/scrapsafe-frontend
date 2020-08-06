import Layout from '../components/layout/Layout';
import Wrapper from '../components/layout/Wrapper';

const settings = () => {
  return (
    <Layout>
      <Wrapper>
        <h1 className='text-5xl text-center'>Switch Membership</h1>
        <p>
          A description of what you get with a paid plan that can be either long
          or short
        </p>
        <div className='flex mt-6 w-full'>
          <button className='w-1/2 text-center py-1 active'>Free</button>
          <button className='w-1/2 text-center py-1 inactive'>Paid</button>
        </div>

        <button className='bg-custom text-white py-1 w-4/6 mt-10'>
          Confirm Changes
        </button>
      </Wrapper>
    </Layout>
  );
};

export default settings;
