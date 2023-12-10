import React from 'react';
import "./App.css";
import TopComponent from "./Components/Top_component/TopComponent";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import ErrorBoundary from "./Components/ErrorBoundaries/ErrorBoundaries";

function App () {
  return (
    <div>
      <React.StrictMode>
        <ErrorBoundary>
          <TopComponent />
        </ErrorBoundary>
      </React.StrictMode>
      <React.StrictMode>
        <ErrorBoundary>
          <Main />
        </ErrorBoundary>
      </React.StrictMode>
      <React.StrictMode>
        <ErrorBoundary>
          <Footer />
        </ErrorBoundary>
      </React.StrictMode>
    </div>
  );
}

export default App;
