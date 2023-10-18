import Header from './components/header';
import Breadcrumbs from './components/breadcrumbs';
import MainContent from './components/content';

function App() {
  return (
    <div className="App bg-gray-100">
      <Header />
      <div className="main-page w-11/12 lg:w-10/12 xl:w-9/12 mx-auto text-left">
          <Breadcrumbs />
          <MainContent />
      </div>
    </div>
  );
}

export default App;
