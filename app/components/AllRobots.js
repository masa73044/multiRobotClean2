import React from 'react';
import { connect } from 'react-redux';
import { fetchRobots } from '../redux/robots';
import { Link } from 'react-router-dom';
import Robot from './Robot';
import { deleteRobot } from '../redux/robots';

//axios

// Notice that we're exporting the AllRobots component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.

class AllRobots extends React.Component {
  componentDidMount() {
    this.props.fetchRobots();
  }

  render() {
    return (
      <div>
        <h3>All Robots</h3>
        <Link to="addrobot">New Robot</Link>
        <ul>
          {this.props.robots && this.props.robots.length
            ? this.props.robots.map((robot) => (
                <li key={robot.id}>
                  <Robot robot={robot} />
                </li>
              ))
            : 'Robots Loading...'}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state.robots;
};

const mapDispatchToProps = (dispatch) => ({
  fetchRobots: () => dispatch(fetchRobots()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllRobots);
