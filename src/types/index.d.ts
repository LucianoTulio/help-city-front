// src/types/index.d.ts

// Tipagem para componente de input genérico
export interface InputProps {
    placeholder: string;
    secureTextEntry?: boolean;
    value: string;
    onChangeText: (text: string) => void;
  }
  
  // Tipagem para botão primário
  export interface ButtonProps {
    title: string;
    onPress: () => void;
  }
  