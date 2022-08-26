import { render } from 'preact';
import App from './components/app';
import './assets/global.css';
import { Provider } from 'react-redux';

render(<App />, document.getElementById('app') as HTMLElement);
