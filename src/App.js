import './App.css';
import Categories from './components/Categories';
import Header from './components/Header';
import Product from './components/Product';

function App() {
  return (
    <div className='pt-24 relative bg-slate-400'>
      <Header />
      <Categories />
      <div>
        <img src="https://m.media-amazon.com/images/I/61FuWeCuGCL._SX3000_.jpg" alt="" className='absolute'/>
        <div className='relative bg-gradient-to-t from-white w-full h-screen'/>
      </div>
      <Product />
    </div>
  );
}

export default App;
