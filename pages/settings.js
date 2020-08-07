import Layout from '../components/layout/Layout';
import Wrapper from '../components/layout/Wrapper';
import FreePaidButton from '../components/FreePaidButton';
import Button from '../components/common/Button';

const settings = () => {
  return (
    <Layout>
      <Wrapper>
        <h1 className='text-5xl text-center'>Switch Membership</h1>
        <p>
          A description of what you get with a paid plan that can be either long
          or short
        </p>
        <FreePaidButton />

        <Button className='w-4/6 mt-10'>Confirm Changes</Button>
      </Wrapper>
    </Layout>
  );
};

export default settings;
