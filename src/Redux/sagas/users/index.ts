import { all, call, put, takeLatest } from '@redux-saga/core/effects'
import { getUserFailure, getUserSuccess, UserType } from '../../actions';
import * as types from '../../types';
import axios from 'axios';


let userApi: UserType;
const userRequest = async (name: string) => {
    await axios.get(`https://api.github.com/users/${name}`)
        .then(({ data }) => {
            userApi = data
            return true
        }, error => {
            console.log(error)
            return false
        });
}

export function* userData(action: { type: string, payload: string }) {
    try {
        yield call(userRequest, action.payload)
        yield put(getUserSuccess(userApi))
    } catch (error) {
        yield put(getUserFailure(userApi))
    }
}

export default all([takeLatest(types.GET_USER_REQUEST, userData)])