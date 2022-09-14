import './App.css';
import TopBanner from "./component/TopBanner";
import Header from './component/Header';
import MainVisual from './component/MainVisual'

const App = () => {

  return (
    <div className="Wrap">
      <TopBanner />
      <Header/>
      <main>
        <MainVisual/>
      </main>
    </div>
  );
}

export default App;
