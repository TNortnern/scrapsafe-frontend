import Layout from "../components/layout/Layout";
import Wrapper from "../components/layout/Wrapper";
import FreePaidButton from "../components/FreePaidButton";
import Button from "../components/common/Button";

const settings = () => {
  return (
    <Layout>
      <Wrapper>
        <div>
          <h1 className="text-5xl text-center">Switch Membership</h1>
          <p className="text-center sm:text-left px-4">
            A description of what you get with a paid plan that can be either
            long or short
          </p>
          <FreePaidButton />

          <Button className="w-56 mt-10 mx-auto block">Confirm Changes</Button>
        </div>
      </Wrapper>
    </Layout>
  );
};

export default settings;
