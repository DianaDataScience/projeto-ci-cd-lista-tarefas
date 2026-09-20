const test = require("node:test");
const assert = require("node:assert/strict");

const {
  normalizeTask,
  isValidTask,
  addTask,
  removeTask,
  countTasks,
} = require("../task-utils");

test("remove espaços extras do texto", () => {
  assert.strictEqual(normalizeTask("  Estudar Docker  "), "Estudar Docker");
});

test("aceita uma tarefa que possui texto", () => {
  assert.strictEqual(isValidTask("Estudar GitHub"), true);
});

test("recusa uma tarefa vazia", () => {
  assert.strictEqual(isValidTask("   "), false);
});

test("adiciona uma tarefa à lista", () => {
  const tasks = ["Criar repositório"];
  const result = addTask(tasks, "Criar workflow");

  assert.deepStrictEqual(result, [
    "Criar repositório",
    "Criar workflow",
  ]);
});

test("remove uma tarefa pelo índice", () => {
  const tasks = ["Estudar GitHub", "Estudar Docker"];
  const result = removeTask(tasks, 0);

  assert.deepStrictEqual(result, ["Estudar Docker"]);
});

test("conta quantas tarefas existem", () => {
  const tasks = ["Tarefa 1", "Tarefa 2", "Tarefa 3"];

  assert.strictEqual(countTasks(tasks), 3);
});
