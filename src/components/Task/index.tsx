import { View, Text, TouchableOpacity } from "react-native"

import Trash from '../../../assets/trash.svg';
import CheckOpen from '../../../assets/checkOpen.svg';
import CheckDone from '../../../assets/checkDone.svg';

import { styles } from './styles';

import { TaskDetails } from '../../screens/Home';

interface TaskProps {
  task: TaskDetails;
  onRemove: (taskId: string) => void;
  onComplete: (taskId: string) => void;
}

export function Task({ task, onRemove, onComplete }: TaskProps) {

  return (
    <View style={styles.container}>
      
      <TouchableOpacity style={styles.trashButton} onPress={() => onComplete(task.id)}>
        {
          task.isCompleted
          ? <CheckDone />
          : <CheckOpen />
        }
      </TouchableOpacity>

      <Text style={task.isCompleted ? styles.taskNameFinished : styles.taskName }>
        {task.name}
      </Text>

      <TouchableOpacity style={styles.trashButton} onPress={() => onRemove(task.id)} >
        <Trash />
      </TouchableOpacity>

    </View>
  )
}