import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createRobot } from '../redux/robots';

class AddRobot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
    this.handleKey = this.handleKey.bind(this);
  }

  handleKey(evt) {
    if (evt.key === 'Enter') {
      this.props.createNewRobot(this.state.input);
      this.setState({ input: '' });
    }
  }

  render() {
    return (
      <div>
        <h2>Add a robot</h2>
        <input
          type="text"
          value={this.state.input}
          onChange={(evt) => this.setState({ input: evt.target.value })}
          onKeyDown={this.handleKey}
        />
        <button
          type="button"
          onClick={() => {
            // this.props.add(this.state.input);
            // this.setState({ input: '' });
            this.props.createNewRobot(this.state.input);
          }}
        >
          Add Robot
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, { history }) => ({
  createNewRobot: (name) => dispatch(createRobot(name, history)),
});

export default connect(null, mapDispatchToProps)(AddRobot);
