import { TextInput, TouchableOpacity, View } from "react-native";
import { styles } from './styles'
import Plus from '../../../assets/plus.svg';
import { useState } from "react";

interface TaskInputProps {
  handleAddTask: (taskName: string) => void
}

export function TaskInput({ handleAddTask }: TaskInputProps) {
  const [taskName, setTaskName] = useState('');

  function handleSubmit() {
    handleAddTask(taskName);
    setTaskName('');
  };

  return (
    <View style={styles.form}>
    <TextInput 
      style={styles.input}
      placeholder='Add new tasks'
      placeholderTextColor='#808080'
      onChangeText={setTaskName}
      value={taskName}
    />
    <TouchableOpacity 
      style={styles.addButton} 
      onPress={handleSubmit}
    >
      <Plus />
    </TouchableOpacity>
  </View>
  )
}