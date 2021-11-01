import instance from "./instance";

export const getTodosAPI = () => {
  const url = "/todo";
  return instance.get(url);

  //   return new Promise((resolve, reject) => {
  //     const url = "/todo";
  //     instance
  //       .get(url)
  //       .then((response) => resolve(response.data))
  //       .catch((err) => reject(err));
  //   });
};
export const addTodoAPI = (todo) => {
  const url = "/todo";
  return instance.post(url, todo);
};
export const deleteTodoAPI = (id) => {
  const url = `/todo/${id}`;
  return instance.delete(url);
};
export const updateTodoAPI = (todo) => {
  const url = `/todo/${todo.id}`;
  return instance.put(url, todo);
};
