export function todoReducer(todos, action) {
  switch (action.type) {
    case "added": {
      const newTodo = {
        id: action.id,
        text: action.text,
        isCompleted: false,
      };
      return [...todos, newTodo];
    }
    case "changed": {
      return todos.map((t) =>
        t.id === action.id ? { ...t, text: action.text } : t
      );
    }
    case "deleted": {
      return todos.filter((t) => t.id !== action.id);
    }
    case "toggled": {
      return todos.map((t) => {
        if (t.id === action.id) {
          return { ...t, isCompleted: !t.isCompleted };
        }
        return t;
      });
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
