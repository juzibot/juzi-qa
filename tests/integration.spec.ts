#!/usr/bin/env ts-node

import {
  test,
}             from 'tstest'

import {
  simpleQnAMaker,
}                               from '../src/'

test('integration testing', async (t) => {
  t.ok(simpleQnAMaker, 'should tbw')
})
