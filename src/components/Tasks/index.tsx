import { Text, TouchableOpacity, View } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import { styles } from "./styles";

type TasksProps = {
  name: string;
  isFinished: boolean;
  onFinish: () => void;
  onRemove: () => void;
};

export function Tasks({ name, isFinished, onFinish, onRemove }: TasksProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onFinish}>
        {isFinished ? (
          <Icon name="check-circle" color="#5E60CE" size={24} />
        ) : (
          <Icon name="circle-o" color="#4EA8DE" size={24} />
        )}
      </TouchableOpacity>

      <Text
        style={{
          fontSize: 12,
          color: isFinished ? "#808080" : "#F2F2F2",
          flex: 1,
          textDecorationLine: isFinished ? "line-through" : "none",
        }}
      >
        {name}
      </Text>

      <TouchableOpacity onPress={onRemove}>
        <Icon name="trash-o" color="#808080" size={24} />
      </TouchableOpacity>
    </View>
  );
}
