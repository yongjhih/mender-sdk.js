/* @flow */

import * as validators from 'flow-runtime-validators';
import fs from 'fs';
import validator from 'validator';

export type Email = string;
export type UUID = string;
export type URL = string;

Email.addConstraint(
  validators.length({max: 250}),
  it => {
    if (!validator.isEmail(it)) {
      return "must be valid Email";
    }
  }
);
//Email.prototype.faker = (it: string): Email => { faker.internet.email(); };
UUID.addConstraint(it => {
  if (!validator.isUUID(it, 4)) {
    return "must be valid UUID v4";
  }
});
//UUID.prototype.faker = (it: string): UUID => { faker.random.uuid(); };

URL.addConstraint(
  it => {
    if (!validator.isURL(it)) {
      return "must be valid URL";
    }
  }
);
