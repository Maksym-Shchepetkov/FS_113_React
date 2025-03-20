import Header from './components/Header/Header';
import Message from './components/Message/Message';
import cats from './assets/cats.json';
import Item from './components/Item/Item';
import StyledSection from './components/StyledSection/StyledSection';
const App = () => {
  return (
    <>
      <Header />
      <h2>Styles in React</h2>
      <section>
        <Message author='Alex' text='Продам праску!' isOnline={true} />
        <Message author='Olena' text='Куплю хотдог!' isOnline={false} />
        <Message author='Ihor' text='Привіт!' isOnline />
      </section>

      <ul>
        {cats.map((item, idx) => (
          <Item key={idx} item={item} />
        ))}
      </ul>
      <StyledSection />
    </>
  );
};

export default App;
