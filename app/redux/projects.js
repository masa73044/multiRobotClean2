import axios from 'axios';
import { useHistory } from 'react-router-dom';

// ACTION TYPES
const SET_PROJECTS = 'SET_PROJECTS';
const GOT_SINGLE_PROJECT = 'GOT_SINGLE_PROJECT';
const CREATE_PROJECT = 'CREATE_PROJECT';
const DELETE_PROJECT = 'DELETE_PROJECT';

// ACTION CREATORS
const _setProjects = (projects) => {
  return {
    type: SET_PROJECTS,
    projects,
  };
};

const _gotSingleProject = (project) => ({
  type: GOT_SINGLE_PROJECT,
  project,
});

const _createProject = (project) => {
  return {
    type: CREATE_PROJECT,
    project,
  };
};

// const _updateProject = (project) => {
//   return {
//     type: UPDATE_PROJECT,
//     project,
//   };
// };

const _deleteProject = (project) => {
  return {
    type: DELETE_PROJECT,
    project,
  };
};

// THUNK CREATORS

export const fetchProjects = () => async (dispatch) => {
  try {
    const { data } = await axios.get('/api/projects');
    dispatch(_setProjects(data));
  } catch (err) {
    console.log(err);
  }
};
export const getSingleProject = (id) => async (dispatch) => {
  const { data } = await axios.get(`/api/projects/${id}`);
  console.log('project data', data);
  dispatch(_gotSingleProject(data));
};

// export const createProject = (projectTitle, history) => {
//   return async (dispatch) => {
//     const { data } = await axios.post('/api/projects', { title: projectTitle });
//     dispatch(_createProject(data));
//     history.push('/projects');
//   };
// };

export const createProject = (projectTitle, history) => async (dispatch) => {
  const { data } = await axios.post('/api/projects', { title: projectTitle });
  dispatch(_createProject(data));
  history.push('/projects');
};
export const deleteProject = (id, history) => async (dispatch) => {
  const { data } = await axios.delete(`/api/projects/${id}`);
  // const history = useHistory();
  console.log('history in delete project:');

  console.log(history);

  history.push('/projects');
  dispatch(_deleteProject(data));
};

// export const updateProject = (project, history) => {
//   return async (dispatch) => {
//     const { data: updated } = await axios.put(
//       `/api/projects/${project.id}`,
//       project
//     );
//     dispatch(_updateProject(updated));
//     history.push('/');
//   };
// };

// export const deleteProject = (id, history) => {
//   return async (dispatch) => {
//     const { data: project } = await axios.delete(`/api/projects/${id}`);
//     dispatch(_deleteProject(project));
//     history.push('/');
//   };
// };
// };

const initialState = {
  projects: [],
  singleProject: {},
};

const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROJECTS:
      return { ...state, projects: action.projects };
    case GOT_SINGLE_PROJECT:
      return { ...state, singleProject: action.project };
    case CREATE_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.project],
      };
    case DELETE_PROJECT:
      return state.projects.filter(
        (project) => project.id !== action.project.id
      );
    // case DELETE_PROJECT:
    //   return state.filter((project) => project.id !== action.project.id);
    // case UPDATE_PROJECT:
    //   return state.map((project) =>
    //     project.id === action.project.id ? action.project : project
    //   );
    default:
      return state;
  }
};

export default projectsReducer;
// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
