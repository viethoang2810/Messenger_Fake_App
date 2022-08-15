
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import { publicRoutes } from "./Routes/index";
import MainLayout from './components/Layout/MainLayout/MainLayout'
import { Context } from "./components/Layout/MainLayout/Context";
import "./App.css";
import {Fragment} from 'react' ;
import { AuthContextProvider } from "./components/Firbase/GoogleAuth";
function App() {
  return (
    <Router>
      <div className="App">
        <AuthContextProvider>
          <Routes>
            {/* <Route path="/" element={<DefaultLayout />} />
            <Route path="/home" element={<ChatRoom />} /> */}
            {
              publicRoutes.map((route,index) => {
                const Page = route.component;
                let Layout = MainLayout ;
                if(route.default){
                  Layout = Fragment ;
                }else{
                  Layout = MainLayout ;
                }
                return(
                  <Route 
                  key={index}
                  path={route.path}
                  element={
                    <Context.Provider value={Page}>
                        <Layout>
                          <Page />
                        </Layout>
                    </Context.Provider>
                  }
                />
                )
              })
            }
          </Routes>
        </AuthContextProvider>
      </div>
    </Router>
  );
}

export default App;
