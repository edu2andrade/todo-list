import { View, Text, TouchableOpacity } from "react-native"

import Trash from '../../../assets/trash.svg';
import CheckOpen from '../../../assets/checkOpen.svg';
import CheckDone from '../../../assets/checkDone.svg';

import { styles } from './styles';

import { TaskListProps } from '../../screens/Home';

interface TaskProps {
  task: TaskListProps;
  onRemove: (name: string) => void;
  onComplete: (name: string) => void;
}

export function Task({ task, onRemove, onComplete }: TaskProps) {

  return (
    <View style={styles.container}>
      
      <TouchableOpacity style={styles.trashButton} onPress={() => onComplete(task.name)}>
        {
          task.isCompleted
          ? <CheckDone />
          : <CheckOpen />
        }
      </TouchableOpacity>

      <Text style={task.isCompleted ? styles.taskNameFinished : styles.taskName }>
        {task.name}
      </Text>

      <TouchableOpacity style={styles.trashButton} onPress={() => onRemove(task.name)} >
        <Trash />
      </TouchableOpacity>

    </View>
  )
}