import {register} from '../user';
import {verifyUsername} from '../verify';
import axios from "axios";

jest.mock('../verify');
jest.mock('axios');

describe('register', () => {
  test('should post user when validated',  async () => {
	// TODO 19: add test here

	const username = "guhao";
	const password = "123";
	verifyUsername.mockReturnValue(true);
	axios.post.mockResolvedValue({ data: { username, password }});
	const result=register(username, password)
	await expect(result).resolves.toEqual({ username, password });
	expect()
  });

  test('should reject with Error when username is invalid', async () => {
	// TODO 20: add test here
    verifyUsername.mockReturnValue(false);
    const username = "guhao";
    const password = "123";
    await expect(register(username, password)).rejects.toThrowError(
        "wrong username or password"
    );
  });
});
