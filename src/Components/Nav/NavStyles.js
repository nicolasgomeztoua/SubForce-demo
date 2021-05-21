import styled from "styled-components";

export const NavBar = styled.div`
  overflow: hidden;
  background-color: #9999;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 100px;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px white solid;
`;

export const Links = styled.p`
  font-size: 1.25rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  text-align: left;
  padding-left: 1rem;
  &:hover {
    text-decoration: underline;
  }
`;
export const Title = styled.h1`
  padding-bottom: 20px;
  font-weight: 900;
  font-size: 2.441rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: center;
  @media screen and (max-width: 800px) {
    font-size: 1.953rem;
  }
  @media screen and (max-width: 500px) {
    font-size: 1.563rem;
    max-width: 120px;
  }
`;
export const DropDownContent = styled.div`
  padding-top: 20px;
  width: 200px;
  height: 200px;
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 220px;
  box-shadow: 10px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  &::before {
    border: solid transparent;
    content: "";
    height: 0;
    width: 0;
    position: absolute;
    bottom: 100%;
    right: 70px;
    pointer-events: none;
    border-color: rgba(0, 0, 0, 0);
    border-left-color: #ffffff;
    border-width: 25px;
    transform: rotate(-90deg);
  }
  @media screen and (max-width: 800px) {
    font-size: 1.563rem;
    max-width: 100px;
    &::before {
      right: 108px;
    }
  }
`;
export const DropDown = styled.div`
  overflow: hidden;
  font-size: 1.563rem;
  &:hover {
    ${DropDownContent} {
      display: grid;
      grid-template-rows: repeat(3, 1fr);
    }
  }
`;
export const DropDownBtn = styled.button`
  font-size: 16px;
  border: none;
  outline: none;
  color: white;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
`;

export const SearchBar = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-self: flex-end;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  border: 2px solid black;
  width: ${({ barOpened }) => (barOpened ? "300px" : "2rem")};

  cursor: ${({ barOpened }) => (barOpened ? "auto" : "pointer")};
  padding: 1rem;
  height: 2rem;
  border-radius: 10rem;
  transition: width 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
  @media screen and (max-width: 1000px) {
    max-width: 100px;
  }
`;

export const Input = styled.input`
  font-size: 14px;
  line-height: 1;
  background-color: transparent;
  width: 100%;
  margin-left: ${(props) => (props.barOpened ? "1rem" : "0rem")};
  border: none;
  color: black;
  transition: margin 300ms cubic-bezier(0.645, 0.045, 0.355, 1);

  &:focus,
  &:active {
    outline: none;
  }
  &::placeholder {
    color: black;
  }
`;
export const Button = styled.button`
  line-height: 1;
  pointer-events: ${({ barOpened }) => (barOpened ? "auto" : "none")};
  cursor: ${({ barOpened }) => (barOpened ? "pointer" : "none")};
  background-color: transparent;
  border: none;
  outline: none;
  color: white;
`;
export const FlagContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;
export const Flag = styled.img`
  width: 60px;
  height: 60px;
  transform: scale(0.8);
  margin: 3px;
`;
