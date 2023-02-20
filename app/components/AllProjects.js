// import React from 'react';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { fetchProjects } from '../redux/projects';
// import Project from './Project';

// //axios

// // Notice that we're exporting the AllRobots component twice. The named export
// // (below) is not connected to Redux, while the default export (at the very
// // bottom) is connected to Redux. Our tests should cover _both_ cases.

// class AllProjects extends React.Component {
//   componentDidMount() {
//     this.props.fetchProjects();
//   }

//   render() {
//     console.log('all projects props', this.props);
//     return (
//       <main>
//         <h2>All Projects</h2>
//         <Link to="addproject">New Project</Link>
//         <ul>
//           {this.props.projects && this.props.projects.length
//             ? this.props.projects.map((project) => (
//                 <li key={project.id}>
//                   <Project project={project} />
//                 </li>
//               ))
//             : 'Projects Loading...'}
//         </ul>
//       </main>
//     );
//   }
// }

// const mapDispatchToProps = (dispatch) => ({
//   fetchProjects: () => dispatch(fetchProjects()),
// });

// export default connect(null, mapDispatchToProps)(AllProjects);
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchProjects } from '../redux/projects';
import Project from './Project';
//axios
// Notice that we're exporting the AllRobots component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.
class AllProjects extends React.Component {
  componentDidMount() {
    this.props.fetchProjects();
  }
  render() {
    console.log('all robots props', this.props);
    return (
      <main>
        <h2>All Projects</h2>
        <Link to="addproject">New Project</Link>
        <ul>
          {this.props.projects && this.props.projects.length
            ? this.props.projects.map((project) => (
                <li key={project.id}>
                  <Project project={project} />
                </li>
              ))
            : 'Projects Loading...'}
        </ul>
      </main>
    );
  }
}
const mapStateToProps = (state) => {
  return state.projects;
};
const mapDispatchToProps = (dispatch) => ({
  fetchProjects: () => dispatch(fetchProjects()),
});
export default connect(mapStateToProps, mapDispatchToProps)(AllProjects);
