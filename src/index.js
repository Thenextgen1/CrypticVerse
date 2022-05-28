import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import App from './containers/App';
import { Football, Cycling, Basketball, Rugby, Tennis } from './components'
import store from './app/store';
import 'antd/dist/antd.min.css';
import './index.css'


const root = createRoot(document.getElementById('root'))

root.render(
    <BrowserRouter>
        <Provider store={store}>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/football' element={<Football />} />
                <Route path='/cycling' element={<Cycling />} />
                <Route path='/basketball' element={<Basketball />} />
                <Route path='/rugby' element={<Rugby />} />
                <Route path='/tennis' element={<Tennis />} />
            </Routes>
        </Provider>
    </BrowserRouter>
)

