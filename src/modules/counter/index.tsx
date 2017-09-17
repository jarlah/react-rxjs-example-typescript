import * as React from 'react';
import { inject } from 'react-rxjs';
import View, { ViewProps } from './view';
import store$, { inc, dec } from './store';

const props = (storeState: number): ViewProps => ({
    number: storeState,
    inc,
    dec
});

export default inject(store$, props)(View);