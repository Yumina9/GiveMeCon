import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  padding: 20px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #f5f5f5;
  border-radius: 14px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

const Title = styled.div`
  font-size: 36px;
`;

const SubTitle = styled.div`
  font-size: 16px;
`;

const Body = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const ChangeForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Button = styled.button`
  border: none;
  outline: none;
  background: #f7323f;
  border-radius: 4px;
  padding: 5px 10px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  margin-bottom: 20px;
`;

const IconContainer = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background: #3498db;
  border-radius: 4px 0px 0px 4px;
`;

const PwdContainer = styled(IconContainer)`
  background: #f55656;
`;

const Icon = styled(FontAwesomeIcon)`
  && {
    width: 20px;
    height: 20px;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  font-size: 18px;
  outline: none;
  padding: 0px 10px;
  border-style: none;
  border-radius: 0px 4px 4px 0px;
`;

const Sumbit = styled.input`
  border: none;
  border-radius: 4px;
  background: #28b279;
  color: white;
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
  cursor: pointer;
  outline: none;
  transition: 0.3s;

  &:hover {
    background: #15933a;
  }
`;

const LoginPresenter = ({
  changeAction,
  username,
  setUsername,
  password,
  setPassword,
  handleSubmit
}) => {
  return (
    <FormContainer>
      <Header>
        <Title>로그인</Title>
        <SubTitle>기브미콘</SubTitle>
      </Header>
      <Body>
        <Form onSubmit={handleSubmit}>
          <InputContainer>
            <IconContainer>
              <Icon icon={faUser} />
            </IconContainer>
            <Input
              type="text"
              name="username"
              value={username}
              onChange={event => setUsername(event.target.value)}
              placeholder="아이디"
            />
          </InputContainer>

          <InputContainer>
            <PwdContainer>
              <Icon icon={faKey} />
            </PwdContainer>
            <Input
              type="password"
              name="password"
              value={password}
              onChange={event => setPassword(event.target.value)}
              placeholder="패스워드"
            />
          </InputContainer>
          <Sumbit type="submit" value="로그인" />
        </Form>
      </Body>
      <ChangeForm>
        <div>회원이 아니신가요?</div>
        <Button onClick={changeAction}>회원가입</Button>
      </ChangeForm>
    </FormContainer>
  );
};

export default LoginPresenter;
