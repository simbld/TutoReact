const todos = [
    'todo 1',
    'todo 2',
    'todo 3'
  ]

    function TodoList() {
      
        return <>
            <h1>Ma TodoList</h1>
            <ul>
              {todos.map(todo => (<li key={todo}>{todo}</li>))}
            </ul>
        </>
  }


  export default TodoList;