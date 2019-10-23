import axios from 'axios';

export default {
  getProjects: () => {
    return axios.get('/api/projects');
  },

  getProject: id => {
    return axios.get(`/api/projects/${id}`);
  },

  createProject: projectData => {
    return axios.post('/api/projects', projectData);
  },

  editProject: (id, projectData) => {
    return axios.put(`/api/projects/${id}`, projectData);
  },

  deleteProject: id => {
    return axios.delete(`/api/projects/${id}`).then(resp => {
      console.log(resp).catch(err => console.log(err));
    });
  }
};
