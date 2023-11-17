import TodoList from "./TodoList";
import CountApp from "./CountApp";
import Increment3 from "./Increment3";
import FormControlled from "./FormControlled";
import NotControlFormData from "./NotControlFormData";
import FirstName from "./FirstName";
import TextArea from "./TextArea";
import ReverseDataFlow from "./ReverseDataFlow";

function App() {
  return (
    <>
      <ReverseDataFlow />
      <TextArea />
      <FirstName />
      <NotControlFormData />
      <FormControlled />
      <TodoList />
      <CountApp />
      <Increment3 />
    </>
  );
}

export default App;
