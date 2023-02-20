import axios from 'axios';

const SET_PROJECT = 'SET_PROJECT';

export const setProject = (project) => {
  return {
    type: SET_PROJECT,
    project,
  };
};

export const fetchProject = (id) => {
  return async (dispatch) => {
    const { data: project } = await axios.get(`/api/projects/${id}`);
    dispatch(setProject(project));
  };
};

export default (state = {}, action) => {
  switch (action.type) {
    case SET_PROJECT:
      return action.project;
    default:
      return state;
  }
};
