import * as React from 'react';
import styles from './app.module.css';

type Props = {
  title: string;
}

const App: React.FC<Props> = ({ title }) => (
  <h1 className={styles.title}>
    {title}
  </h1>
);

export default App;
