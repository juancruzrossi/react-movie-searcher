import { MainTitle } from "./components/mainTitle/MainTitle";
import { MovieDetails } from "./pages/MovieDetails";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";

export function App() {
    return (
        <Router>
            <header>
               <Link to="/">
                   <MainTitle />
                </Link>
            </header>
            <main>
                <Switch>
                    <Route exact path="/movies/:movieId"> <MovieDetails /> </Route>
                    <Route path="/"> <LandingPage /> </Route>
                </Switch>
            </main>
        </Router>
    );
};