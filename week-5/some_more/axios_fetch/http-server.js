const express = require("express");
const app = express();


const todos = [
  {
    id: 1,
    title: "Todo 1",
    description: "This is todo 1",
    completed: false,
  },
  {
    id: 2,
    title: "Todo 2",
    description: "This is todo 2",
    completed: false,
  },
  {
    id: 3,
    title: "Todo 3",
    description: "This is todo 3",
    completed: true,
  },
  {
    id: 4,
    title: "Todo 4",
    description: "This is todo 4",
    completed: false,
  },
];


app.get("/todos", (req, res) => {
    const randomCount = Math.floor(Math.random() * todos.length) + 1;

    const shuffledTodos = [...todos].sort(() => 0.5 - Math.random());

    const randomTodos = shuffledTodos.slice(0, randomCount);

    res.json({
        todos: randomTodos,
    });
});

app.listen(3000);