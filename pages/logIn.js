import Heading from "../components/heading";
import LoginForm from "../components/../components/admin/LoginForm";

export default function Login() {
  return (
    <>
      <div className="grid place-content-center">
        <Heading content="Log in" />
        <LoginForm />
      </div>
    </>
  );
}
