function normalizeTask(text) {
  return text.trim();
}

function isValidTask(text) {
  return normalizeTask(text).length > 0;
}

function addTask(tasks, text) {
  if (!isValidTask(text)) {
    return tasks;
  }

  return [...tasks, normalizeTask(text)];
}

function removeTask(tasks, index) {
  if (index < 0 || index >= tasks.length) {
    return tasks;
  }

  return tasks.filter((_, taskIndex) => taskIndex !== index);
}

function countTasks(tasks) {
  return tasks.length;
}

module.exports = {
  normalizeTask,
  isValidTask,
  addTask,
  removeTask,
  countTasks,
};
