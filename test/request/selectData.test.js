const { describe, it } = require('mocha');
const { assert } = require('chai');
const { selectData } = require('../../src/request');

describe('selectData', () => {
  describe('json selection', () => {
    it('should return value1 from key1 from json payload', () => {
      // given
      const jsonString = JSON.stringify({ key1: 'value1', key2: 'value2' });
      const request = { type: 'json', path: 'key1' };

      // when
      const res = selectData(jsonString, request);

      // then
      assert.equal(res, 'value1', 'Selected data doesn\'t match');
    });

    it('should return object under key1 from json payload', () => {
      // given
      const jsonString = JSON.stringify({ key1: { key3: 'value3' }, key2: 'value2' });
      const request = { type: 'json', path: 'key1' };

      // when
      const res = selectData(jsonString, request);

      // then
      assert.equal(res, JSON.stringify({ key3: 'value3' }), 'Selected data doesn\'t match');
    });

    it('should return value4 from from nested query in json payload', () => {
      // given
      const jsonString = JSON.stringify({ key1: [{ key3: 'value3' }, { key4: 'value4' }], key2: 'value2' });
      const request = { type: 'json', path: 'key1[1].key4' };

      // when
      const res = selectData(jsonString, request);

      // then
      assert.equal(res, 'value4', 'Selected data doesn\'t match');
    });
  });

  describe('xml selection', () => {
    it('should return value1 from key1 from xml payload', () => {
      // given
      const xmlString = '<key1>value1</key1>';
      const request = { type: 'xml', path: 'key1' };

      // when
      const res = selectData(xmlString, request);

      // then
      assert.equal(res, 'value1', 'Selected data doesn\'t match');
    });

    it('should return object under key1 from xml payload', () => {
      // given
      const xmlString = '<key1><key3>value3</key3></key1><key2>value2</key2>';
      const request = { type: 'xml', path: 'key1' };

      // when
      const res = selectData(xmlString, request);

      // then
      assert.equal(res, '<key3>value3</key3>', 'Selected data doesn\'t match');
    });
  });
});
