import { takeLatest, call, put, all } from 'redux-saga/effects';
import api from '../../../services/api';
import history from '../../../services/history';
import { loginSuccess } from './actions';

export function* login({ payload }) {
  try {
    const { email, password } = payload;
    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    yield put(loginSuccess(token, user));
    history.push('/dashboard');
  } catch (error) {
    alert('erro');
  }
}
export default all([takeLatest('@auth/LOGIN_REQUEST', login)]);
