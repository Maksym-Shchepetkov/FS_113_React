import Header from './Header/Header';

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
    </>
  );
};
export default App;
