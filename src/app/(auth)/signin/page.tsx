import { View, Text, TextInput, StyleSheet, Pressable,TouchableOpacity, Alert } from 'react-native';
import colors from '@/constants/colors';
import { Link,router } from 'expo-router';
import { useState } from 'react';
import { supabase } from '../../../lib/supabase';

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSignIn() {
    setLoading(true);
    
    const{data, error} = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (error) {
      Alert.alert('Error signing in:', error.message);
      return;
    }
    setLoading(false);
    router.replace('/(panel)/profile/page');
  }


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logoText}>Petro<Text style={{ color: colors.orange }}>Connecta</Text>

        </Text>
        <Text style={styles.slogan}>Conectando você ao futuro da nossa Petropolis</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu email"
          placeholderTextColor={colors.gray}
          value={email}
          onChangeText={setEmail}
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

        <TouchableOpacity style={styles.button} onPress={handleSignIn}>
          <Text style={styles.buttonText}>
            {loading?'Carregando...' :'Entrar'}</Text>
         </TouchableOpacity>
      </View>

      <Link href="/(auth)/signup/page" style={styles.linkLabel}>
        <Text style={{ color: colors.orange, fontSize: 16 }}>
          Não tem uma conta? Cadastre-se
        </Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
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
    fontSize: 44,
    fontWeight: 'bold',
    color: colors.white,
    textAlign: 'left',
    marginBottom: 14,
  },
  slogan: {
    fontSize: 25,
    color: colors.white,
    marginBottom: 34,
  },
  form:{
    marginHorizontal:14,
    paddingVertical: 24,
    paddingHorizontal: 14,
    backgroundColor: colors.white,
    borderRadius: 14,
  },
 
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.zinc,
    marginBottom: 5,
  },
  input: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 12,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: colors.orange,
    paddingVertical: 12,
    marginHorizontal: 50,
    marginTop: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  linkLabel: {
    color: colors.orange,
    fontSize: 16,
    marginTop: 20,
    alignSelf: 'center',
    textAlign: 'center',
  } 
  });