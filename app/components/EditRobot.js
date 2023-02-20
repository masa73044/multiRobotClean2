import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateRobot } from '../redux/robots';

class EditRobot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
    this.handleKey = this.handleKey.bind(this);
  }

  handleKey(evt) {
    if (evt.key === 'Enter') {
      this.props.updateRobot(this.state.input);
      this.setState({ input: '' });
    }
  }

  render() {
    return (
      <div>
        <h2>Robot Name</h2>
        <input
          type="text"
          value={this.state.input}
          onChange={(evt) => this.setState({ input: evt.target.value })}
          onKeyDown={this.handleKey}
        />

        <h2>fuel level</h2>
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
            this.props.updateRobot(this.state.input);
          }}
        >
          Save Changes!
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, { history }) => ({
  updateRobot: (name) => dispatch(updateRobot(name, history)),
});

export default connect(null, mapDispatchToProps)(EditRobot);
