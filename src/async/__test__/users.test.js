import getUsers from '../users'
import axios from 'axios'

jest.mock('axios');
describe('users', () => {
  test('should get users data with mock axios get', async () => {
	// TODO 13: add async test with manual mock
	const users = [{name: 'haha'}, {name: 'xixi'}];
	const reps = {data: users};

	axios.get.mockImplementation(() => Promise.resolve(reps));

	return getUsers().then((data) => expect(data).toEqual(users));
  });
});
