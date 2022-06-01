import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

import { UserState } from '../../Redux/reducers/user';
import { RootState, AppDispatch, getUserRequest } from '../../Redux'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';


export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()

const User = () => {
    const dispatch = useAppDispatch();
    const userState: UserState = useAppSelector(state => state.user);
    const [name, setName] = useState('')

    const handleUser = () => {
        dispatch(getUserRequest(name))
    }
    console.log(userState);

    return (
        <View>
            <Text>{userState.user.message}</Text>
            <TextInput
                style={{
                    padding: 16,
                    marginTop: 50,
                }}
                onChangeText={setName}
                value={name}
                placeholder={'Please type here…'}
            />
            <View>
                <Button
                    onPress={handleUser}
                    disabled={!name.length}
                    title="Procurar..."
                />
            </View>
        </View>
    );
}

export default User