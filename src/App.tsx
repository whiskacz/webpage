import './app.scss'
import Hero from './components/hero/Hero';
import Parallax from './components/parallax/Parallax';
import Sidebar from './components/sidebar/Sidebar';
import Bento from './components/bento/Bento';
import AppPreview from './components/appPreview/AppPreview';

function App() {

  return (
    <>
    <Sidebar />
    <section id='Homepage'>
      <Hero />
    </section>

    <section id='Parallax'>
      <Parallax />
    </section>

    <section id='Bento'>
      <Bento />
    </section>

    <section id='AppPreview'>
      <AppPreview />
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
