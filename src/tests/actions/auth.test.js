import { login, logout } from '../../actions/auth';

test('should setup login action object', () => {
    const action = login('abc123aa');
    expect(action).toEqual({
        type: 'LOGIN',
        uid: 'abc123aa'
    });
});

test('should setup logout action object', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    });
});