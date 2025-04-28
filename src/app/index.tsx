import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import colors from '@/constants/colors';

export default function Index() {




  return (
    <View style={styles.container}>
      <ActivityIndicator size={80} color={colors.orange} />
      <Text style={{ color: colors.white, fontSize: 24, marginTop: 20 }}>Carregando...</Text>

      <Text style={styles.logoText}>Petro<Text style={{ color: colors.orange }}>Connecta</Text></Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
          container: {
          flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 34,
        backgroundColor: colors.zinc,
  },
        logoText: {
          fontSize: 44,
        fontWeight: 'bold',
        color: colors.white,
        textAlign: 'left',
        marginBottom: 14,
  },


     }   );