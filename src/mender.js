/* @flow */

import Rx from 'rxjs';
import axios from 'axios';
import {Axios} from 'axios';
import fs from 'fs-extra';
import type {AxiosPromise} from 'axios'; //
import type {
  Email,
  UUID,
  URL,
} from './types';

const fromAxiosPromise = <T>(promise: AxiosPromise<T>): Rx.Observable<T> => {
  return Rx.Observable.fromPromise(promise)
    .map(res => res.data);
};

export class Rxios {
  axios: Axios => *;
  constructor(it: Axios => *) {
    this.axios = it;
    // axios config has built runtime validation
  }

  get<T>(url: string, config: ?any = null): Rx.Observable<T> {
    return fromAxiosPromise(this.axios
      .get(url, config)
    );
  }

  delete<T>(url: string): Rx.Observable<T> {
    return fromAxiosPromise(this.axios
      .delete(url)
    );
  }

  post<T>(url: string, params: ?Object, config: ?any): Rx.Observable<T> {
    return fromAxiosPromise(this.axios
        .post(url, params, config)
      );
  }

  put<T>(url: string, params: ?Object): Rx.Observable<T> {
    return fromAxiosPromise(this.axios
        .put(url, params)
      );
  }

  patch<T>(url: string, params: ?Object): Rx.Observable<T> {
    return fromAxiosPromise(this.axios
        .patch(url, params)
      );
  }
}

class SimpleMender {
  rxios: Rxios;

  constructor(baseURL: URL) {
    this.rxios = new Rxios(axios.create({
      baseURL: baseURL
      //headers: {
      //  'Content-Type': 'application/json'
      //}
    }));
  }

}

export default class mender extends SimpleMender {

  constructor(baseURL: URL) {
    super(baseURL);
  }

}

export const decodeBase64 = (it: string): string => Buffer.from(it, 'base64').toString('ascii');

export const capital = (it: string): string => it.charAt(0).toUpperCase() + it.slice(1);

/**
 * @example
 * .retryWhen(it => backoffObs(it, 3))
 */
export const backoffObs = (errors: Rx.Observable<*>, n: number): Rx.Observable<*> => {
  return errors.zip(Rx.Observable.range(1, n), (_, i) => i)
    .flatMap(i => Rx.Observable.timer(i * 1000));
};

/**
 * @example jsonArray.json
 * [{id: 0, name: "zero"}, {id: 1, name: "one"}]
 * await readJsonArray("jsonArray.json").first().toPromise(); // {id: 0, name: "zero"}
 *
 */
export const readJsonArray = <T>(json: File): Rx.Observable<T> =>
  Rx.Observable.fromPromise(fs.readJson(json)).first().flatMap((it: Array<T>) => it);

export const readStdin = (): Rx.Observable<string> => {
  return readsStdin().toArray().map(it => it.join(""));
}

export const readsStdin = (): Rx.Observable<Array<string>> => {
  return Rx.Observable.create(it => {
    process.stdin.resume();
    process.stdin.setEncoding('utf8');
    process.stdin.on('data', _ => {
      it.next(_);
    });
    process.stdin.on('end', _ => {
      it.complete();
      //process.stdin.pause();
    });
  });
}

export const readJsonFromStdin = <T>(): Rx.Observable<T> =>
  readStdin().map(it => JSON.parse(it));

export const readJsonArrayFromStdin = <T>(): Rx.Observable<T> =>
  readJsonFromStdin().first().flatMap((it: Array<T>) => it);
