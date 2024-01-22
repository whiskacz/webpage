import './app.scss'
import Main from './components/main/Main';
import Parallax from './components/parallax/Parallax';
import Sidebar from './components/sidebar/Sidebar';
import Bento from './components/bento/Bento';

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

    <section id='Bento'>
      <Bento />
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
