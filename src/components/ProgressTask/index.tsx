import { Text, View } from "react-native";

import { styles } from "./styles";

type ProgressTasksProps = {
  name: string;
  value: number;
  color: string;
};

export function ProgressTask({ name, value, color }: ProgressTasksProps) {
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "bold", color }}>{name}</Text>

      <View style={styles.counterWrapper}>
        <Text style={styles.counter}>{value}</Text>
      </View>
    </View>
  );
}
