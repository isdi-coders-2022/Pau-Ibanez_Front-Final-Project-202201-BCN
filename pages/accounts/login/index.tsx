import Link from "next/link";
import RegisterForm from "../../../components/Forms/RegisterForm/RegisterForm";
import Layout from "../../../components/Layout/Layout";
import {
  CenteredContainer,
  Linkedin,
  MainTitle,
  Tips,
} from "../../../styles/global";

const LoginPage = () => {
  return (
    <Layout
      pageTitle="Login"
      header={{ title: "sign in", subtitle: "welcome" }}
    >
      <MainTitle>DRINK IT</MainTitle>
      <CenteredContainer>
        <Tips>
          Don&apos;t have an account?{" "}
          <Link href={"/accounts/register"} passHref>
            <Linkedin>Sign up</Linkedin>
          </Link>
        </Tips>
      </CenteredContainer>
    </Layout>
  );
};

export default LoginPage;
