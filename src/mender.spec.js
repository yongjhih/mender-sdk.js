/* @flow */

import Mender, {
  decodeBase64,
  capital,
} from './mender';
import Moment from 'moment';
import MomentTimeZone from 'moment-timezone';
import Rx from 'rxjs';
import faker from 'faker';
import fs from 'fs-extra';
import nock from 'nock';
import os from 'os';
import type {UUID, URL} from './types';

const mender = new Mender("");

it('should login with username/password and response Bearer token type', done => {
    nock(config.baseURL)
        .post('/login')
        .reply(200, {
          access_token: "access_token",
          expires_in: 3600,
          refresh_token: "refresh_token",
          token_type: "Bearer",
          user_id: faker.random.uuid()
        });
    mender.login("yongjhih@gmail.com", "xxx").subscribe(res => {
        // TODO: deep equalation
        expect(res.token_type).toBe("Bearer");
        expect(res.expires_in).toBe(3600);
        expect(res.access_token).not.toBeNull();
        done();
    },
    err => {
        console.error(err);
        done.fail(err);
    });
});

