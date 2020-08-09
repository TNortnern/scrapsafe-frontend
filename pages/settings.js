import { useState } from "react";
import Layout from "../components/layout/Layout";
import Wrapper from "../components/layout/Wrapper";
import FreePaidButton from "../components/FreePaidButton";
import Button from "../components/common/Button";

const settings = () => {
  const [active, setActive] = useState("free");
  return (
    <Layout>
      <Wrapper>
        <div>
          <h1 className="text-5xl text-center">Switch Membership</h1>
          <p className="text-center sm:text-left px-4">
            A description of what you get with a paid plan that can be either
            long or short
          </p>
          <FreePaidButton active={active} setActive={setActive} />

          <Button className="w-56 mt-10 mx-auto block">
            {active === "free" ? (
              <span>Confirm changes</span>
            ) : (
              <span>Proceed to payment</span>
            )}
          </Button>
        </div>
      </Wrapper>
    </Layout>
  );
};

export default settings;
