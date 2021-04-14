import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from "./components/header";
import Register from "./components/authentication/register";
import Login from "./components/authentication/login";
import { UserProvider } from "./providers/userContext";

import { ThemeProvider } from "@material-ui/core";
import { createMuiTheme } from '@material-ui/core/styles';
import { blue, green, purple } from '@material-ui/core/colors';



function App() {

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: blue[500],
      },
      secondary: {
        main: green[500],
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <UserProvider>
          <Header />

          <Route path="/register">
            <Register />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

        </UserProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;