import { ColorPicker } from './ColorPicker/ColorPicker';
import { Counter } from './Counter/Counter';
import Header from './Header/Header';
import { TodoList } from './TodoList/TodoList';

const App = () => {
  return (
    <div>
      <Header />
      {/* <Counter /> */}
      <ColorPicker />
      <TodoList />
    </div>
  );
};
export default App;
