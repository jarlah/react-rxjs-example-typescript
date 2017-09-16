import store$, { StoreProps, getPersonsAction$ } from './store';
import { inject } from 'react-rxjs';
import Hello from './view';

type ParentProps = {
    history: History
}

function props(storeProps: StoreProps, parentProps: ParentProps) {
    console.log(parentProps.history.length);
    const firstPerson = storeProps.response && storeProps.response.length > 0 ? storeProps.response[0] : null;
    return {
        person: firstPerson,
        getPersons: () => getPersonsAction$.next()
    }
}

export default inject(store$, props)(Hello);