import TodoList from "./TodoList";
import CountApp from "./CountApp";
import Increment3 from "./Increment3";
import FormControlled from "./FormControlled";



function App() {
 

    return (
    <>
        <FormNotControlled />

        <FormControlled />

        <TodoList />

        <CountApp />

        <Increment3 />
    </>
  );
}

export default App;