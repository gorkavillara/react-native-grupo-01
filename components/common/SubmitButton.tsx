import { Text, TouchableOpacity } from "react-native";

interface SubmitButtonProps {
  title: string;
  onPress: () => void
}

const SubmitButton = ({ title, onPress }: SubmitButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default SubmitButton;
