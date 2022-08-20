import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

interface ProgressBarProps {
  tasksQuantity: number;
  completedTasks: number;
}

export function ProgressBar({ tasksQuantity, completedTasks }: ProgressBarProps) {

  return (
    <View style={styles.container}>

      <View style={styles.contentContainer}>
        <Text style={styles.created}>Criadas</Text>
        <TouchableOpacity style={styles.counterBG}>
          <Text style={styles.counterNumber}>
            {tasksQuantity}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.finished}>Concluídas</Text>
        <TouchableOpacity style={styles.counterBG}>
          <Text style={styles.counterNumber}>
            {completedTasks}
          </Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};