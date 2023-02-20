import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import AllRobots from './AllRobots';
import AllProjects from './AllProjects';
import SingleProject from './SingleProject';
import SingleRobot from './SingleRobot';
import AddRobot from './AddRobot';
import AddProject from './AddProject';
import NotFound from './NotFound';

const Routes = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <button type="button">
                <Link to="/robots">All Robots</Link>
              </button>
            </li>
            <li>
              <button type="button">
                <Link to="/projects">All Projects</Link>
              </button>
            </li>
            <li>
              <button type="button">
                <Link to="/">Home</Link>
              </button>
            </li>
          </ul>
        </nav>

        <main>
          <h1>
            Welcome to StackBot Project Management: your robot employees are
            awaiting assignments!
          </h1>
          <p>This seems like a nice place to get started with some Routes!</p>
        </main>
        <Switch>
          <Route exact path="/robots" component={AllRobots} />
          <Route exact path="/robots/:id" component={SingleRobot} />
          <Route exact path="/addRobot" component={AddRobot} />
          <Route exact path="/addProject" component={AddProject} />
          <Route exact path="/projects" component={AllProjects} />
          <Route exact path="/projects/:id" component={SingleProject} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default Routes;
