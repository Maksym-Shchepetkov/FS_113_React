import Header from './Header/Header';
import UseMemoExample from './UseMemoExample';
import UseRefRenderCountExample from './UseRefRenderCountExample';
import UseRefInputFile from './UseRefInputFile';
import UseContextExample from './UseContextExample/UseContextExample';

const App = () => {
  return (
    <div>
      <Header />
      {/* Step 1. Use memo calc logic */}
      <UseMemoExample />

      {/* Step 2. Use ref */}
      <UseRefRenderCountExample />

      {/* Step 3. Use ref file*/}
      <UseRefInputFile />

      {/* Step 4. Use forward ref */}
      {/* <UseRefForwardRefExample /> */}

      {/* Step 5. Use context */}
      <UseContextExample />
    </div>
  );
};
export default App;
