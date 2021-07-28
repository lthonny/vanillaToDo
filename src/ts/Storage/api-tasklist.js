class TaskList {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.filter = 'All'
  }


  getTasks() {
    const endpoint = `${this.baseUrl}/tasks`;
    const response = fetch(endpoint, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    return response.then((response) => response.json());
  }


  createTask(text) {
    const endpoint = `${this.baseUrl}/tasks`;
    const response = fetch(endpoint, {
      method: 'POST',
      body: JSON.stringify({ text }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    return response.then((response) => response.json());
  }


  editTask(id, taskData) {
    const endpoint = `${this.baseUrl}/tasks/${id}`;
    const response = fetch(endpoint, {
      method: 'PUT',
      body: JSON.stringify(taskData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    return response.then((response) => response.json());
  }


  deleteTask(id) {
    const endpoint = `${this.baseUrl}/tasks/${id}`;
    const response = fetch(endpoint, {
      method: 'DELETE',
    });

    return response.then((response) => response.json());
  }


  setFilter(filter) {
    if (filter === 'All') {
      this.filter = 'All';
    }
    if (filter === 'Completed') {
      this.filter = 'Completed';
    }
    if (filter === 'InCompleted') {
      this.filter = 'InCompleted';
    }
  }
}

exports.module = TaskList;