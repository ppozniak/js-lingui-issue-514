import React, { Component } from 'react'
import {Trans} from '@lingui/react';
import {CONSTANT_FROM_OUTSIDE} from './constants';


// Workaround would be doing something like
// const _CONSTANT_FROM_OUTSIDE = CONSTANT_FROM_OUTSIDE;
// ...
// <Trans>This wont work {_CONSTANT_FROM_OUTSIDE}</Trans>

const CONSTANT_FROM_INSIDE = 'weo weo weo weo';
export default class Example extends Component {
  render() {
    return (
      <div>
        <Trans>This will work {CONSTANT_FROM_INSIDE}</Trans>
        <Trans>This wont work {CONSTANT_FROM_OUTSIDE}</Trans>
      </div>
    )
  }
}
