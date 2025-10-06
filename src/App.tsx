import { Outlet } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.appContainer}>
      <Navbar />
      <main className={styles.mainContent}>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
