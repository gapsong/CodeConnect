import 'whatwg-fetch';

export function updateTask(task, project_id) {
  return (dispatch) => {
    return fetch('/projects/' + project_id + '/tasks/' + task.task_id, {
      method: 'put',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin', // By default, fetch won't send any cookies to the server
      body: JSON.stringify({task: task})
    }).then((response) => {
      return dispatch({type: 'UPDATE_TASK_SUCCESSFUL', task: task});
    });
  };
}

export function addTask(name, project_id) {
  return (dispatch) => {
    return fetch('/projects/' + project_id + '/tasks', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin', // By default, fetch won't send any cookies to the server
      body: JSON.stringify({name: name})
    }).then((response) => {
      return response.json().then(function(json) {
        return dispatch({type: 'ADD_TASK_SUCCESSFUL', name: name, task_id: json.task_id, project_id: project_id});
      });
    });
  }
}

export function deleteTask(task, project_id) {
  return (dispatch) => {
    return fetch('/projects/' + project_id + '/tasks/' + task.task_id, {
      method: 'delete',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin' // By default, fetch won't send any cookies to the server
    }).then((response) => {
      return response.json().then(function(json) {
        return dispatch({type: 'DELETE_TASK_SUCCESSFUL', task_id: task.task_id, project_id: project_id});
      });
    })
  }
}

export function participateTask(task) {
  return (dispatch) => {
    return fetch('/participate', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin', // By default, fetch won't send any cookies to the server
      body: JSON.stringify({task_id: task.task_id})
    }).then((response) => {
      return response.json().then(function(json) {
        return dispatch({type: 'PARTICIPATE_TO_TASK', task_id: task.task_id})
      })
    })
  }
}
