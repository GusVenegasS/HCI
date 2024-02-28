import logo from './logo.svg';
import './App.css';
import Footer from './moleculas/footer';
import Header from './moleculas/header';
import Formulario from './organismo/formulario';

function App() {
  return (
    <div className='template'>
      <Header titulo = {'Registrar Pago'}/>
      <Formulario/>
      <Footer/>
    </div>
  );
}

export default App;
