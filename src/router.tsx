import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Hello from './modules/person/index';

const Router = () => (
    <BrowserRouter>
        <div>
            <Route path="/" component={Hello} />
        </div>
    </BrowserRouter>
);

export default Router;