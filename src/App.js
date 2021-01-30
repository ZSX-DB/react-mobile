import {BrowserRouter, Switch, Redirect, Route} from "react-router-dom"
import Home from "@/view/home"
import NotFound from "@/view/notFound"

const App = () => (
    <BrowserRouter>
        <Switch>
            <Redirect exact from='/' to='/home'/>
            <Route path='/home' render={() => <Home/>}/>
            <Route path="*" render={() => <NotFound/>}/>
        </Switch>
    </BrowserRouter>
)

export default App
