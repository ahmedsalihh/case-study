import Sidebar from './containers/Sidebar';

import Content from './components/Content';
import Navbar from './components/Navbar';
import Header from './containers/Header';
import Layout from './components/Layout';

import './App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className='container'>
        <Layout>
          <Sidebar />
          <Content />
        </Layout>
      </div>
    </div>
  );
};

export default App;
