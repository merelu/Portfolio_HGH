import styled from "@emotion/styled";

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and(max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;
interface IButton {
  primary?: boolean;
  big?: boolean;
  fontBig?: boolean;
}

export const Button = styled.button<IButton>`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? "#FF4C60" : "#343a40")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background: ${({ primary }) => (primary ? "#343a40" : "#FF4C60")};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;
