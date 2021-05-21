import "./App.css";

import Nav from "./Components/Nav/Nav";
import Body from "./Components/Body/Body.jsx";
import GamesSection from "./Components/Games/GamesSection";
import Form from "./Components/Form";

function App() {
  return (
    <>
      <Nav></Nav>
      <Body></Body>
      <GamesSection></GamesSection>
      <Form></Form>
    </>
  );
}

export default App;
