import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Home} from "./pages/home";
import {About} from "./pages/about";
import {Navbar} from "./components/Navbar";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <div className="container pt-4">
                <Switch>
                    <Route path={'/'} exact component={Home} />
                    <Route path={'/'} component={About} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;