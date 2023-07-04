import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './components/redux/store';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
