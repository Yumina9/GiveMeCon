import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "components/asset/images/logo.png";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background-color: white;
`;

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  height: 60px;
  margin: 0 auto;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const LogoIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

const Title = styled.h3`
  color: #f7323f;
  font-size: 20px;
`;

const HeaderList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  font-size: 20px;
  margin: 0;
}
`;

const ListItem = styled.li`
  padding: 0 20px;
  color: #6b6b6b;
  cursor: pointer;
`;

const LinkItem = styled(Link)`
  color: ${props => (props.current ? "#f7323f" : "#6b6b6b;")};
  text-decoration: none;
  &:hover {
    color: #f7323f;
  }
`;

const HeaderPresenter = () => {
  const { pathname } = window.location;

  const trendIndex = pathname.indexOf("trend");
  const productionIndex = pathname.indexOf("production");
  const introduceIndex = pathname.indexOf("introduce");
  const loginIndex = pathname.indexOf("login");

  return (
    <HeaderWrapper>
      <MainContainer>
        <LogoContainer>
          <LogoIcon src={Logo} alt="로고" />
          <Title>기브미콘</Title>
        </LogoContainer>

        <HeaderList>
          <ListItem>
            <LinkItem to="/trend" current={trendIndex === 1}>
              트렌드
            </LinkItem>
          </ListItem>
          <ListItem>
            <LinkItem to="/production" current={productionIndex === 1}>
              프로듀싱
            </LinkItem>
          </ListItem>
          <ListItem>
            <LinkItem to="/introduce" current={introduceIndex === 1}>
              소개
            </LinkItem>
          </ListItem>
          <ListItem>
            <LinkItem to="/login" current={loginIndex === 1}>
              로그인
            </LinkItem>
          </ListItem>
        </HeaderList>
      </MainContainer>
    </HeaderWrapper>
  );
};

export default HeaderPresenter;
