import React from 'react';
import Footer from './components/Footer/Footer';
import HelloSection from './components/HelloSection/HelloSection';
import Header from './components/Header/Header';
import Message from './components/Message/Message';
import cats from './assets/cats.json';
import Item from './components/Item/Item';

const App = () => {
  const age = 18;
  const isAdult = age > 18 ? <h2>Hello</h2> : <h2>Bye</h2>;
  return (
    <>
      <Header />
      {isAdult}

      {null && <h2>Hello</h2>}
      {false}
      {undefined}

      <Message author='Alex' text='Продам праску!' isOnline={true} />
      <Message author='Olena' text='Куплю хотдог!' isOnline={false} />
      <Message author='Ihor' text='Привіт!' isOnline />
      <ul>
        {cats.map((item, idx) => (
          <Item key={idx} item={item} />
        ))}
      </ul>
    </>
  );
};

export default App;
