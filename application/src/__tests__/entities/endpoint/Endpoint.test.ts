import { Endpoint } from 'entities/endpoint/Endpoint';
import { Group } from 'entities/group/Group';
import { GroupKey } from 'entities/group/GroupKey';

describe('Endpoint', () => {
  let instance: Endpoint;
  beforeEach(() => {
    const groupKey = new GroupKey();
    const group = new Group(groupKey);
    instance = new Endpoint(
      group, 
      'foo/bar', 
      'GET', 
      {"Content-Type" : "application/json"},
      200, 
      {"x-api-key" : "abcde12345"},
      {"foo": "bar"}, 
      JSON.stringify({"aaa": "bbb"})
    )
  })
  it('check Endpoint.update() returns true', () => {
    expect(instance.update('POST')).toBe(true);
  })
})