import Header from './components/Header/Header';
import Message from './components/Message/Message';
import cats from './assets/cats.json';
import Item from './components/Item/Item';
import StyledSection from './components/StyledSection/StyledSection';
import Modal from './components/Modal/Modal';
import Button from './components/Button/Button';
const App = () => {
  return (
    <>
      <Header />

      <Button variant='outline'>Click</Button>
      <Button variant='xl'>Submit</Button>

      <h2 className='title'>Styles in React</h2>
      <Modal>
        <p className=''>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolore at molestiae cumque excepturi atque ullam magnam ipsam explicabo
          aperiam exercitationem dolores autem, odio voluptate ad suscipit incidunt optio enim.
        </p>
        <button>Click</button>
      </Modal>

      <Modal>
        <Message author='Alex' text='Продам праску!' isOnline={true} />
      </Modal>

      <Modal>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
        <button>Submit</button>
      </Modal>
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
