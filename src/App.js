import { Route, BrowserRouter } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import NavigationBar from "./components/NavigationBar";
import { publicRoutes, privateRoutes } from './routes'
import PrivateRouting from "./utilities/PrivateRouting";

function App() {

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:4000/graphql"
  })

  return (
    <ApolloProvider client={client}>
      <div >
        <BrowserRouter>
          <NavigationBar />
          {
            publicRoutes.map((ele) => {
              return (
                <div key={ele.name}>
                  <Route
                    path={ele.path}
                    component={ele.component}
                  />
                </div>
              )
            })
          }

          {
            privateRoutes.map((ele) => {
              return (
                <div key={ele.name}>
                  <PrivateRouting
                    path={ele.path}
                    component={ele.component}
                  />
                </div>
              )
            })
          }
        </BrowserRouter>
      </div>
    </ApolloProvider>
  );
}

export default App;
