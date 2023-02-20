import React from "react";
import { connect } from "react-redux";
import { deleteRobot, getSingleRobot } from "../redux/robots";
import { Link } from "react-router-dom";
//import {getSingleCandy, increaseQuantity, decreaseQuantity} from '../reducers'

class SingleRobot extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getSingleRobot(this.props.match.params.id);
  }

  render() {
    console.log("props", this.props);
    const { singleRobot } = this.props;

    return (
      <div>
        <h2>Robot Information:</h2>
        <ul>
          <li>name: {singleRobot.name}</li>
          <li>imageURL: {singleRobot.imageUrl}</li>
          <li>fuel type: {singleRobot.fuelType}</li>
          <li>fuel level: {singleRobot.fuelLevel}</li>
        </ul>
        <p>
          <button
            // type="button"
            onClick={() => this.props.deleteRobot(this.props.match.params.id)}
          >
            X
          </button>
        </p>

        <h2> Projects Assigned:</h2>
        <ul>
          {singleRobot.projects && singleRobot.projects.length
            ? singleRobot.projects.map((project) => (
                <div key={project.id}>
                  <Link to={`/projects/${project.id}`}>
                    <li>{project.title}</li>
                  </Link>
                </div>
              ))
            : "No projects assigned"}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  singleRobot: state.robots.singleRobot,
});

const mapDispatchToProps = (dispatch, { history }) => ({
  getSingleRobot: (id) => dispatch(getSingleRobot(id)),
  // updateRobot: (todo) => dispatch(updateTodo(todo, history)),
  deleteRobot: (state) => dispatch(deleteRobot(state, history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleRobot);

// const mapStateToProps = ({ todo }) => ({`
//   todo
// });

// const mapDispatchToProps = (dispatch, { history }) => ({
//   updateTodo: (todo) => dispatch(updateTodo(todo, history)),
//   deleteTodo: (todo) => dispatch(deleteTodo(todo, history)),
//   fetchTodo: (id) => dispatch(fetchTodo(id)),
//   clearTodo: () => dispatch(_setTodo({}))
// });

// export default connect(mapStateToProps, mapDispatchToProps)(EditTodo);
