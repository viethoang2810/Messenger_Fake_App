import GlobalStyle from './components/GlobalStyle/GlobalStyle'
import './App.css';
import DefaultLayout from './components/Layout/DefaultLayout/DefaultLayout'
function App() {
  return (
    <div className="App">
      <GlobalStyle>
        <DefaultLayout />
      </GlobalStyle>
    </div>
  );
}

export default App;
