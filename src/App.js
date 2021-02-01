import {BrowserRouter, Switch, Redirect, Route} from "react-router-dom"
import Portal from "@/view/portal"
import Home from "@/view/home"
import NotFound from "@/view/notFound"

const App = () => (
    <BrowserRouter>
        <Switch>
            <Redirect exact from='/' to='/portal'/>
            <Route path='/portal' render={() => <Portal/>}/>
            <Route path='/home' render={() => <Home/>}/>
            <Route path="*" render={() => <NotFound/>}/>
        </Switch>
    </BrowserRouter>
)

export default App
