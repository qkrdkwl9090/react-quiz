import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { fetchQuiz } from "../api";
import { useEffect } from "react";
import { quizAtom } from "../atoms";
import { Response } from "../types";
import { useSetRecoilState } from "recoil";

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
  const setQuiz = useSetRecoilState(quizAtom);
  const { isLoading, isError, data } = useQuery<Response>({
    queryKey: ["quiz"],
    queryFn: fetchQuiz,
  });
  useEffect(() => {
    if (!data?.results?.length) return;

    setQuiz(
      data.results.map((result) => {
        return {
          ...result,
          isCorrect: false, // 정답 여부
          hasTried: false, // 시도 여부
          reviewNote: "", // 오답 노트
        };
      })
    );
  }, [data]);

  return (
    <Container>
      <SubTitle>QUIZ with React</SubTitle>
      <div>
        <Title>Let's play Quiz!</Title>
        <JoinButton disabled={isLoading || isError}>Join Quiz</JoinButton>
      </div>
    </Container>
  );
}
export default Intro;
