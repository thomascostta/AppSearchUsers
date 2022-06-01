import { all } from '@redux-saga/core/effects';
import users from './users';

export default function* rootSaga(): Generator<any> {
    return yield all([users])
}