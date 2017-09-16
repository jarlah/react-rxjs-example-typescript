import {getPersons, Person}  from '../../models/person';
import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";
import { AjaxError } from "rxjs/Rx";

export type StoreProps = { response?: Array<Person>, error?: AjaxError };

export const getPersonsAction$ = new Subject<void>();

const store$: Observable<StoreProps> = getPersonsAction$.switchMap(getPersons).startWith({});

export default store$;