import React from 'react';
import TodoList from './app/Containers/TodoList';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
    return (
        <Router>
            <Switch>
                <div className="container vw-100">
                <Route path='/user/list/tasks' exact component={TodoList}/>
        </div>
            </Switch>
        </Router>
    )
}

export default App;
