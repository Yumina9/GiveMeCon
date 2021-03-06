import React from "react";
import styled from "styled-components";
import Header from "components/Header";
import TitleBox from "components/TitleBox";

// **** Images
import FullLogo from "components/asset/images/fullLogo.png";
import Youtube from "components/asset/images/Youtube.png";
import Producing from "components/asset/images/Producing.png";
import Instargram from "components/asset/images/Instargram.png";
import Facebook from "components/asset/images/Facebook.png";
import Mail from "components/asset/images/Mail.png";
import Intro from "components/asset/images/Intro.jpg";

const Wrapper = styled.div`
  background-image: url(${Intro});
  height: 400px;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 60px;
`;

const Cover = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 400px;
  background: rgba(0, 0, 0, 0.4);
`;

const Message = styled.div`
  color: white;
  font-size: 36px;
  line-height: 50px;
  text-align: center;
`;

const String = styled.div`
  color: yellow;
  font-size: 48px;
  margin-top: 40px;
`;

const IntroduceWrapper = styled.div`
  width: 100%;
`;

const Main = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const ContentsContainer = styled.div`
  margin-bottom: 100px;
`;

const FirstContents = styled.div`
  text-align: center;
`;

const Power = styled.span`
  font-size: 24px;
  color: #f7323f;
`;

const LowerPower = styled(Power)`
  font-size: 16px;
`;

const ContentsItemLeft = styled.div`
  margin-bottom: 40px;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 20px;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 200px;
`;

const ContentsItemRight = styled(ContentsItemLeft)`
  grid-template-columns: 1fr 200px;
  grid-template-rows: 200px;
`;

const ItemTitle = styled.div`
  margin-bottom: 20px;
`;

const ContentsItem = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  min-width: 300px;
  margin-bottom: 20px;
`;

const Icon = styled.img`
  border-radius: 10px;
  margin-right: 20px;
`;

const SNSContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Text = styled.div`
  max-height: 130px;
  overflow: auto;

  &::-webkit-scrollbar-track {
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar {
    width: 10px;
    background-color: #f5f5f5;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #6b6b6b;
    border-radius: 4px;
  }
`;

const IntroducePresenter = () => {
  return (
    <IntroduceWrapper>
      <Header />
      <Wrapper>
        <Cover>
          <Message>
            크리에이터와 구독자의 <br /> 컨텐츠 소통 공간 <br />{" "}
            <String>기브미콘</String>
          </Message>
        </Cover>
      </Wrapper>

      <Main>
        <ContentsContainer>
          <TitleBox title="GIVE ME CON" />
          <FirstContents>
            <Power>Give Me Contents</Power> 를 줄인 말로 써 크리에이터에게
            도움을 주는 플랫폼입니다.
          </FirstContents>
        </ContentsContainer>

        <ContentsContainer>
          <TitleBox title="SERVICES" />
          <div>
            <ContentsItemLeft>
              <img src={Youtube} alt="유튜브 사진" />
              <div>
                <ItemTitle>
                  컨텐츠 <LowerPower>추천 및 순위 서비스</LowerPower>
                </ItemTitle>

                <Text>
                  급속도로 변화하는 트렌드에 대해서 너무 걱정하지 마세요.
                  <br />
                  기브미콘은{" "}
                  <LowerPower>
                    최신 트렌드에 맞춰 콘텐츠들을 순위별로
                  </LowerPower>{" "}
                  사용자분들이 쉽고 편하게 보실 수 있게끔 하는 서비스를 제공하고
                  있습니다. <br />
                  보다 좋은 서비스 제공을 위하여 여러분이 직접 기준을 정하여
                  보고 싶은 키워드의 영상들을 입맛대로 골라보실 수 있습니다.
                  <br />
                </Text>
              </div>
            </ContentsItemLeft>

            <ContentsItemRight>
              <div>
                <ItemTitle>
                  컨텐츠 <LowerPower>프로듀싱 서비스</LowerPower>
                </ItemTitle>
                <Text>
                  시청자들이 보고싶어하는 컨텐츠를 해주는 건 어떨까요?
                  <br />
                  기브미콘은 시청자들이 컨텐츠 제작 방향에 대한 아이디어를
                  공유할 수 있는 <LowerPower>컨텐츠 프로듀싱 서비스</LowerPower>
                  를 제공하고 있습니다. <br /> 본 서비스로 인해 한 시청자
                  머릿속의 작은 아이디어로 제작 된 영상이 10만, 100만의
                  시청자들이 보는 영상이 될 수 있습니다.
                </Text>
              </div>
              <img src={Producing} alt="프로듀싱 사진" />
            </ContentsItemRight>
          </div>
        </ContentsContainer>

        <ContentsContainer>
          <TitleBox title="CONTACT US" />
          <SNSContainer>
            <div>
              <ContentsItem>
                <Icon src={Instargram} alt="인스타그램 아이콘" />
                <div>인스타그램@인스타그램</div>
              </ContentsItem>
              <ContentsItem>
                <Icon src={Facebook} alt="페이스북 아이콘" />
                <div>페이스북@페이스북</div>
              </ContentsItem>
              <ContentsItem>
                <Icon src={Mail} alt="메일 아이콘" />
                <div>메일메일메일@메일메일메일</div>
              </ContentsItem>
            </div>
            <img src={FullLogo} alt="풀로고 사진" />
          </SNSContainer>
        </ContentsContainer>
      </Main>
    </IntroduceWrapper>
  );
};

export default IntroducePresenter;
