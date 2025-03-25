import { ColorPicker } from './ColorPicker/ColorPicker';
import { Counter } from './Counter/Counter';
import Header from './Header/Header';
import { TodoList } from './TodoList/TodoList';
import Voting from './Voting/Voting';

const App = () => {
  return (
    <div>
      <Header />
      {/* <Counter /> */}
      {/* <ColorPicker /> */}
      {/* <Voting /> */}
      <TodoList />
    </div>
  );
};
export default App;
