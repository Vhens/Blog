import * as React from 'react';
import * as ReactDOM from 'react-dom'
import Store from './store';
import  { Provider } from 'mobx-react';
import { useStrict } from 'mobx';
import Page from './Page';
import registerServiceWorker from './registerServiceWorker';
const stores = { Store };
useStrict(true);

const render = (Component) => {
  ReactDOM.render(
    <Provider {...stores}>
       <Component />
    </Provider>,
    document.getElementById('root')
  )
}

render(Page)
registerServiceWorker();
