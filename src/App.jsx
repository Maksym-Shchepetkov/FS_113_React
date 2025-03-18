import React from 'react';
import Footer from './components/Footer/Footer';
import HelloSection from './components/HelloSection/HelloSection';
import Header from './components/Header/Header';
import Message from './components/Message/Message';

const App = () => {
  const age = 18;
  const isAdult = age > 18 ? <h2>Hello</h2> : <h2>Bye</h2>;
  return (
    <>
      <Header />
      {isAdult}

      <Message author='Alex' text='Продам праску!' isOnline={true} />
      <Message author='Olena' text='Куплю хотдог!' isOnline={false} />
      <Message author='Ihor' text='Привіт!' isOnline />
    </>
  );
};

export default App;
