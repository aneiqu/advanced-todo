export function getCategories() {
  const data = localStorage.getItem("Categories");

  return JSON.parse(data) || [];
}

export function setCategories() {}
