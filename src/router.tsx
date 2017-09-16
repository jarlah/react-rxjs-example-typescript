import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Counter from './modules/counter/index';

const Router = () => (
    <BrowserRouter>
        <div>
            <Route path="/" component={Counter} />
        </div>
    </BrowserRouter>
);

export default Router;