import './app.scss'
import Main from './components/main/Main';
import Parallax from './components/parallax/Parallax';
import Sidebar from './components/sidebar/Sidebar';

function App() {

  return (
    <>
    <Sidebar />
    <section id='Homepage'>
      <Main />
    </section>

    <section id='Parallax'>
      <Parallax />
    </section>

    <section id='Parallax2'>
      Parallax2
    </section>

    <section id='Skills'>
      Skills
    </section>

    <section id='Contact'>
      Contact
    </section>
    
    </>
  );
}

export default App;
