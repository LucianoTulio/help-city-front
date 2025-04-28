import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import colors from '@/constants/colors';
import { router } from 'expo-router';
import { useState } from 'react';
import { supabase } from '../../../lib/supabase';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from '@/src/contexts/AuthContext';


export default function Profile() {

    const {setAuth,user} = useAuth();

    async function handleLogout() {
        const { error } = await supabase.auth.signOut();
        setAuth(null);
        if (error) {
            Alert.alert('Error signing out:', error.message);
            return;
        }
        router.replace('/(auth)/signin/page');
    }



    return (
        <SafeAreaView style={styles.master}>
            
        <View style={styles.container}>

       

        <TouchableOpacity onPress={handleLogout} style={styles.button}>
                <Text style={{ color: '#fff', fontSize: 16 }}>Logout</Text>
            </TouchableOpacity>
            <Text style={styles.title}>Perfil</Text>
            <Text>{user?.email}asdasd</Text>
            

        </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    master: {
        flex: 1,
    },

    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2D3748',
        marginBottom: 20,
    },
    button: {
        marginHorizontal: 20,
        width: 100,
        alignItems: 'center',
        backgroundColor: colors.orange,
        padding: 10,
        borderRadius: 5,
        alignSelf: 'flex-end', // Moves the button to the right side
    },
});
