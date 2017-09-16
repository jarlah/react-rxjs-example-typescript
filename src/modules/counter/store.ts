import { Observable, Subject } from "rxjs";
import { createStore } from "react-rxjs";

const inc$ = new Subject<void>();
const dec$ = new Subject<void>();
const reducer$: Observable<(state: number) => number> = Observable.merge(
    inc$.map(() => (state: number) => state + 1),
    dec$.map(() => (state: number) => state - 1)
);
const store$ = createStore("example", reducer$, 0);

export const inc = () => inc$.next();
export const dec = () => dec$.next();
export default store$;