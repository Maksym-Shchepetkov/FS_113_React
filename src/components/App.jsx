import ControlledForm from './Forms/ControlledForm';
import UncontrolledForm from './Forms/UncontrolledForm';
import Header from './Header/Header';
import Test from './test/Test';
import UseIdExample from './UseIdExample/UseIdExample';

const App = () => {
  const register = credentials => {
    console.log('Data received!');
    setTimeout(() => {
      console.log('Send data...');
    }, 1000);
    setTimeout(() => {
      console.log('User was registered successfully!');
      console.log(credentials);
    }, 2000);
  };

  return (
    <>
      <Header />
      {/* <ControlledForm register={register} /> */}
      {/* <UseIdExample /> */}
      <Test />
    </>
  );
};
export default App;
