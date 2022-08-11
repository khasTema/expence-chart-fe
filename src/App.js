
import './App.scss';
import AppWrapper from './components/AppWrapper/AppWrapper';
import Body from './components/Body/Body';
import Head from './components/Head/Head';



function App() {
  return (
    <div className="App">
      <AppWrapper>
        <Head/>
        <Body/>
      </AppWrapper>
    </div>
  );
}

export default App;
