import { Route } from 'react-router-dom'
import Home from './views/home/home'
import Dashboard from './views/dashboard/dashboard'


function App() {
    return (
        <div className="App">
            <Route exact path='/' component={Home} />
            <Route path='/dashboard' component={Dashboard} />
        </div>
    );
}

export default App;
