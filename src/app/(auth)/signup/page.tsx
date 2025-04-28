import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Pressable,
    ScrollView,
    Alert,
    TouchableOpacity
} from 'react-native';
import colors from '@/constants/colors';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { supabase } from '../../../lib/supabase';


export default function Signup() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [loading, setLoading] = useState(false);


    async function handleSignup() {
        setLoading(true);

        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password,
            options: {
                data: {
                    name: name,
                    phone: phone
                }
            }

        })
        setLoading(false);
        if (error) {
            Alert.alert('Error signing up:', error.message);
            return;
        }

        setLoading(false);
        router.replace('/(auth)/signin/page');

    }

    return (
        <SafeAreaView style={styles.master}>
            <ScrollView style={ styles.master}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Pressable style={styles.backButton} onPress={() => router.back()}>
                            <Ionicons name="arrow-back" size={24} color={colors.white} />
                        </Pressable>
                        <Text style={styles.logoText}>Petro<Text style={{ color: colors.orange }}>Connecta</Text>

                        </Text>
                        <Text style={styles.slogan}>Criar uma Conta</Text>
                    </View>

                    <View style={styles.form}>
                        <Text style={styles.label}>Nome</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Digite seu nome completo..."
                            placeholderTextColor={colors.gray}
                            value={name}
                            onChangeText={setName}
                        />

                        <Text style={styles.label}>Email</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Digite seu email..."
                            placeholderTextColor={colors.gray}
                            value={email}
                            onChangeText={setEmail}
                        />
                        <Text style={styles.label}>Telefone</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Digite seu telefone..."
                            placeholderTextColor={colors.gray}
                            value={phone}
                            onChangeText={setPhone}
                        />


                        <Text style={styles.label}>Senha</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Digite sua senha"
                            secureTextEntry={true}
                            placeholderTextColor={colors.gray}
                            value={password}
                            onChangeText={setPassword}
                        />

                        <TouchableOpacity style={styles.button} onPress={handleSignup} activeOpacity={0.7}>
                            <Text style={styles.buttonText}>
                                {loading ? 'Carregando...' : 'Cadastrar'}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    master: {
        flex: 1,
        backgroundColor: colors.zinc,
    },
    container: {
        flex: 1,
        paddingTop: 34,
        backgroundColor: colors.zinc,
    },
    header: {
        paddingLeft: 14,
        paddingRight: 14,
    },
    logoText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.white,
        textAlign: 'left',
        marginBottom: 8,
    },
    slogan: {
        fontSize: 34,
        color: colors.white,
        marginBottom: 34,
    },
    form: {
        paddingVertical: 14,
        paddingHorizontal: 14,
        backgroundColor: colors.white,
        borderRadius: 10,
        marginHorizontal: 14,
    },
    label: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.zinc,
        marginBottom: 8,
    },
    input: {
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.gray,
        borderRadius: 8,
        paddingHorizontal: 8,
        paddingVertical: 12,
        marginBottom: 15,
        fontSize: 16,
    },
    button: {
        backgroundColor: colors.orange,
        paddingVertical: 12,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 50,  
        marginTop: 20, 

    },
    buttonText: {
        color: colors.white,
        fontSize: 18,
        fontWeight: 'bold',
    },
    backButton: {
        backgroundColor: 'rgba(255, 255, 255, 0.55)',
        alignSelf: 'flex-start',
        padding: 8,
        borderRadius: 8,
        marginBottom: 8,
    },
});