import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

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

    return (
        <View>
            <View style={styles.conteinerText}>
                <Text style={styles.text}>
                    {userState.user.message} {userState.user.name}
                </Text>
            </View>
            <TextInput
                style={styles.input}
                onChangeText={setName}
                value={name}
                placeholder={'Please type here…'}
            />
            <View>
                <Button
                    onPress={handleUser}
                    disabled={!name.length}
                    title="Buscar..."
                />
            </View>
        </View>
    );
}

export const styles = StyleSheet.create({
    conteinerText: {
        marginTop: 50,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#cccccc'
    },
    text: {
        fontWeight: '700',
        fontSize: 20,
    },
    input: {
        borderColor: 'blue',
        borderWidth: 2,
        padding: 16,
        marginTop: 50,
        backgroundColor: '#cccccc',
    }
})

export default User