import { AjaxError, Observable } from 'rxjs';

export type Person = {
    id: number,
    name: string,
    age: number,
    sex: 'm' | 'f' | 'u'
}

export function getPersons(): Observable<{ response?: Array<Person>, error?: AjaxError }> {
    return Observable
        .ajax('/persons')
        .map(ajaxResult => ({ response: ajaxResult.response }))
        .catch(ajaxError => Observable.of({ error: ajaxError }))
}