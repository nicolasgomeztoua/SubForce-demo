import React, { useState, useRef } from "react";
import {
  DropDown,
  DropDownBtn,
  DropDownContent,
  NavBar,
  SearchBar,
  Title,
  Button,
  Input,
  Links,
  Flag,
  FlagContainer,
} from "./NavStyles";
import Search from "../../Assets/pngegg.png";
import { FaCaretDown } from "react-icons/fa";
import Spain from "../../Assets/Spain.png";
import France from "../../Assets/france.webp";
import England from "../../Assets/england.webp";
const Nav = () => {
  const [input, setInput] = useState("");
  const [barOpened, setBarOpened] = useState(false);
  const formRef = useRef();
  const inputFocus = useRef();
  const onFormSubmit = (e) => {
    // When form submited, clear input, close the searchbar and do something with input
    e.preventDefault();
    setInput("");
    setBarOpened(false);
    // After form submit, do what you want with the input value
    console.log(`Form was submited with input: ${input}`);
  };
  return (
    <NavBar>
      <DropDown>
        Menu
        <DropDownBtn>
          <FaCaretDown />
        </DropDownBtn>
        <DropDownContent>
          <Links>Add a new game</Links>
          <Links>Contact us</Links>
          <FlagContainer>
            <Flag src={Spain}></Flag>
            <Flag src={France}></Flag>
            <Flag src={England}></Flag>
          </FlagContainer>
        </DropDownContent>
      </DropDown>
      <Title>Friend Code</Title>

      <SearchBar
        barOpened={barOpened}
        onClick={() => {
          setBarOpened(true);
          inputFocus.current.focus();
        }}
        onFocus={() => {
          setBarOpened(true);
          inputFocus.current.focus();
        }}
        // on blur close search bar
        onBlur={() => {
          setBarOpened(false);
        }}
        // On submit, call the onFormSubmit function
        onSubmit={onFormSubmit}
        ref={formRef}
      >
        <Button type="submit" barOpened={barOpened}>
          <img src={Search} alt="search" style={{ height: "20px" }} />
        </Button>
        <Input
          onChange={(e) => setInput(e.target.value)}
          ref={inputFocus}
          value={input}
          barOpened={barOpened}
          placeholder="Search"
        />
      </SearchBar>
    </NavBar>
  );
};

export default Nav;
