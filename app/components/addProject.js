import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../redux/projects';

class AddProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
    this.handleKey = this.handleKey.bind(this);
  }

  handleKey(evt) {
    if (evt.key === 'Enter') {
      this.props.createNewProject(this.state.input);
      this.setState({ input: '' });
    }
  }

  render() {
    return (
      <div>
        <h2>Add a Project</h2>
        <input
          type="text"
          value={this.state.input}
          onChange={(evt) => this.setState({ input: evt.target.value })}
          onKeyDown={this.handleKey}
        />
        <button
          type="button"
          onClick={() => {
            // change to this vvvv
            console.log('this..state.input', this.state.input);
            this.props.createNewProject(this.state.input);
          }}
        >
          Add Project
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, { history }) => ({
  createNewProject: (title) => dispatch(createProject(title, history)),
});

export default connect(null, mapDispatchToProps)(AddProject);

// import React, { Component } from 'react';
// import { createProject } from '../redux/projects';
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';

// class AddProject extends Component {
//   constructor() {
//     super();
//     this.state = {
//       projectName: '',
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(evt) {
//     this.setState({
//       [evt.target.title]: evt.target.value,
//     });
//   }

//   handleSubmit(evt) {
//     evt.preventDefault();
//     this.props.createProject({ ...this.state });
//   }

//   render() {
//     const { projectTitle } = this.state;
//     const { handleSubmit, handleChange } = this;

//     return (
//       <form id="project-form" onSubmit={handleSubmit}>
//         <label htmlFor="projectName">Project Title:</label>
//         <input
//           name="projectName"
//           onChange={handleChange}
//           value={projectTitle}
//         />

//         <button type="submit">Submit</button>
//         {/* <Link to="/">Cancel</Link> */}
//       </form>
//     );
//   }
// }
