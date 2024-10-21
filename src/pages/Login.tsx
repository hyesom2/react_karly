import { useNavigate } from "react-router-dom";
// > components
import Button from '@/components/Button';
import Input from '@/components/Input';
import List from '@/components/List';

function Login() {
  const navigate = useNavigate();
  function moveRegisterPage() {
    navigate("/register");
  }

  const flexColClassName = "flex flex-col items-center";

  return (
    <section className={`${flexColClassName} gap-44 py-80`} >
      <h1 className="label text-lg">로그인</h1>
      <form action="" className={`${flexColClassName} w-340`}>
        <div className={`${flexColClassName} gap-12 w-full mb-12`}>
          <Input srOnly={true} iconHide={true} type="email" height={50} placeholder="아이디를 입력해주세요." hintTextHide={true} />
          <Input srOnly={true} iconHide={true} type="password" height={50} placeholder="비밀번호를 입력해주세요." hintTextHide={true} />
        </div>
        <div className={`${flexColClassName} gap-12 w-full mt-28 order-last`}>
          <Button type="submit" height={54} bgColor="primary">로그인</Button>
          <Button type="button" height={54} bgColor="transparent" onClick={moveRegisterPage}>회원가입</Button>
        </div>
        <List type="find" />
      </form>
    </section>
  )
}

export default Login;