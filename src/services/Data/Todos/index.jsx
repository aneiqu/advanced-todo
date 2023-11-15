export function getTodos() {
  const data = localStorage.getItem("Todos");

  return JSON.parse(data) || [];
}

export function setTodos() {}
