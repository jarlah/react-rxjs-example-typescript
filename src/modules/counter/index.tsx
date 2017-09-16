import * as React from 'react';
import { inject } from 'react-rxjs';
import View, { ViewProps } from './view';
import store$, { inc, dec } from './store';

export type ParentProps = {
    // history: History,
    // match: Match
}

const props = (storeState: number, parentProps: ParentProps): ViewProps => {
    console.log(parentProps);
    return {
        number: storeState,
        inc,
        dec
    };
};

export default inject(store$, props)(View);