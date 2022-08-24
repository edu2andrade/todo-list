import { useState } from 'react';
import uuid from 'react-native-uuid';
import { View, Alert } from 'react-native';

import { styles } from './styles'

import { TaskInput } from '../../components/TaskInput';
import { TaskList } from '../../components/TaskList';


export type TaskDetails = {
  id: string;
  name: string;
  isCompleted: boolean;
}

export function Home() {

  const [tasks, setTasks] = useState<TaskDetails[]>([]);

  function handleAddTask(taskName: string) {

    const duplicatedTasks = tasks.filter(task => task.name === taskName) 

    if(duplicatedTasks.length > 0) {
      return Alert.alert('Task already exists', 'This task already exists in your list..')
    };

    if(taskName === '') {
      return Alert.alert('Empty task', 'Need to write something...')
    };

    setTasks(prevState => [...prevState, {
      id: String(uuid.v4()),
      name: taskName,
      isCompleted: false,
    }]);
  };

  function handleRemoveTask(taskId: string) {
    Alert.alert('Remove','Remove task?', [
      {
        text: 'Yes',
        onPress: () => setTasks(prevState => 
          prevState.filter(task => task.id !== taskId)
        )
      },
      {
        text: 'No',
        style: 'cancel',
      }
    ])
  };

  function toggleCompletedTasks(taskId: string){
    const completedTasks = tasks.map(task => {
      if(task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        }
      }
      return task;
    });

    setTasks(completedTasks)
  };

  return (
    <View style={styles.container}>
      <TaskInput handleAddTask={handleAddTask} />
      <TaskList 
        tasks={tasks} 
        toggleCompletedTasks={toggleCompletedTasks} 
        handleRemoveTask={handleRemoveTask}
      />
    </View>
  )
}