import * as types from '../../types';

export type UserType = {
    avatar_url?: string;
    subscriptions_url: string;
    name?: string;
    email?: any;
    bio: string;
}

export function getUserRequest(name: string): {
    type: string;
    payload: string
} {
    return {
        type: types.GET_USER_REQUEST,
        payload: name
    }
}

export function getUserSuccess(user: UserType): {
    type: string
    payload: UserType
} {
    return {
        type: types.GET_USER_SUCCESS,
        payload: user
    }
}

export function getUserFailure(name: string): {
    type: string;
} {
    return {
        type: types.GET_USER_FAILURE
    }
}