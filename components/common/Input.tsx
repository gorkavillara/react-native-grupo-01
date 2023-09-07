import { TextInput, View, Text } from "react-native";

interface InputProps {
    label: string
    placeholder: string
}

const Input = ({ label, placeholder }: InputProps) => {
  return (
    <View style={{ marginTop: 8, gap: 4 }}>
      <Text>{label}</Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 8,
          shadowOpacity: 1,
          shadowRadius: 8,
          shadowColor: "#000",
          borderWidth: 1,
          borderColor: "#b2b2b2",
          borderRadius: 12,
          paddingVertical: 8,
          paddingHorizontal: 16
        }}
      >
        <Text>IC</Text>
        <TextInput placeholder={placeholder} />
      </View>
    </View>
  );
};

export default Input;
