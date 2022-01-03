import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Span from "../../../components/Span";
import Button from "../../../components/Button";
import FlexContainer from "../../../style/FlexContainer";
import FlexItem from "../../../style/FlexItem";
import { LinkToLogin } from "../../../nav";
import {
  FROM_TABLET_TO_PHONE,
  MediaQueries,
} from "../../../style/MediaQueries";

const WelcomeSection: React.FC = function WelcomeSection() {
  const nav = useNavigate();
  const handleNavToLogin = (e: React.MouseEvent) => {
    e.preventDefault();
    LinkToLogin(nav);
  };
  return (
    <FlexContainer direction="column" width="50%" alignItems="center">
      <StyledWelcomeContainer
        width="355px"
        direction="row"
        alignItems="space-between"
        justifyContent="center"
        height="100vh"
      >
        <FlexItem>
          <FlexContainer margin="30px 0 0 0 ">
            <Span
              fontWeight="bold"
              fontSize="34px"
              fontStyle="normal"
              lineHeight="51px"
              textAlign="left"
            >
              Welcome to SLONCH!
            </Span>
            <Span
              fontWeight="normal"
              fontSize="16px"
              fontStyle="normal"
              lineHeight="24px"
              textAlign="left"
            >
              슬론치에 오신 것을 환영합니다.
            </Span>
          </FlexContainer>
        </FlexItem>

        <Button
          btnType="block_positive"
          width="100%"
          margin="40px 0px"
          onClick={handleNavToLogin}
        >
          로그인
        </Button>
      </StyledWelcomeContainer>
    </FlexContainer>
  );
};
export default WelcomeSection;

const StyledWelcomeContainer = styled(FlexContainer)`
  height: fit-content;
  ${MediaQueries(FROM_TABLET_TO_PHONE)} {
    height: 100vh;
  }
`;
