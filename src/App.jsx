import GlobalStyle from "./styles/GlobalStyle.js";
import Router from "./Router.jsx";
import SignUp from "./pages/SignUp.jsx";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
      <SignUp />
    </>
  );
}

export default App;
