import styled, { css } from "styled-components";

export const CheckoutPageContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  ${props =>
    props.trans === true &&
    css`
      background-color: rgba(0, 0, 0, 0);
    `}

  button {
    margin-left: auto;
    margin-top: 50px;
  }
  @media screen and (max-width: 800px) {
    width: 100%;
  }
  .checkoutSpinner {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    height: 50%;
    &.inactive {
      display: none;
    }
  }
`;

export const CheckoutHeaderContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
  @media screen and (max-width: 800px) {
    width: 100%;
    padding: 0 10px 0 0;
  }
`;

export const HeaderBlockContainer = styled.div`
  text-transform: capitalize;
  width: 23%;
  &:last-child {
    width: 8%;
  }
`;

export const TotalContainer = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;

export const WarningContainer = styled.div`
  text-align: center;
  margin-top: 40px;
  font-size: 24px;
  color: red;
  display: none;
`;
