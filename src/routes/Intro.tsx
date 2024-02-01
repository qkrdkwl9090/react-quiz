import styled from "styled-components";

const Container = styled.div`
  padding: 32px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const SubTitle = styled.p`
  font-size: 24px;
  margin-bottom: 24px;
`;
const Title = styled.strong`
  font-size: 84px;
`;
const JoinButton = styled.button`
  color: ${(props) => props.theme.primaryColor};
  font-size: 24px;
  border: none;
  width: 100%;
  padding: 12px;
  margin-top: 24px;
  &:active {
    filter: brightness(0.8);
  }
`;
function Intro() {
  return (
    <Container>
      <SubTitle>QUIZ with React</SubTitle>
      <div>
        <Title>Let's play Quiz!</Title>
        <JoinButton>Join Quiz</JoinButton>
      </div>
    </Container>
  );
}
export default Intro;
