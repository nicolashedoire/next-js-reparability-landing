import Layout from "../layouts/Layout";
import Step1 from "../containers/home/step1";
import Step2 from "../containers/home/step2";
import Step3 from "../containers/home/step3";
import Step5 from "../containers/home/step5";

const IndexPage = () => {
  return (
    <Layout title="Home">
      <Step1 />
      <Step2 />
      <Step3 />
      <Step5 />
    </Layout>
  );
};

export default IndexPage;
