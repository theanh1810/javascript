const todos = [
{
 id: 1,
 completed: true,
 content: "Learning HTML"
    },
{ 
id: 2,
completed: true,
content: "Learning CSS"
    },
{
    id: 3,
    completed: false,
    content: "Learning JavaScript"
    }
]    

function e(tagName, attributes, ...child) {
  const tag = document.createElement(tagName);
  Object.assign(tag, attributes);
  tag.append(...child);

  return tag;
}

const app = document.getElementById("app");

function createTodoList(todos) {
    return e(
      div,
      { className: "container" },
      e(
        ul,
        {
          className: "Ds",
        },
        e(li, { className: "id" }, todos.id),
        e(li, { className: "completed" }, todos.completed),
        e(li, { className: "content" }, todos.content)
      )
    );
}


todos.forEach(function (todos) {
    app.append(createTodoList(todos));
    if (todos.completed == true) {
        const change = document.getElementsByClassName("content")
        change.style.color = "red"
    } else {
        return todos.content
    }
})

