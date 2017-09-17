import { Observable, Subject } from "rxjs";
import { createStore, Reducer } from "react-rxjs";

export type StoreProps = number;

const inc$ = new Subject<void>();
const dec$ = new Subject<void>();
const reducer$: Observable<Reducer<StoreProps>> = Observable.merge(
    inc$.map(() => (state: StoreProps) => state + 1),
    dec$.map(() => (state: StoreProps) => state - 1)
);
const initialState: StoreProps = 0;
const store$ = createStore("example", reducer$, initialState);

export const inc = () => inc$.next();
export const dec = () => dec$.next();
export default store$;