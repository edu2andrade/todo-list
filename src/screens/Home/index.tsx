import { useState } from 'react';
import { 
  TextInput, 
  Text,
  View, 
  TouchableOpacity, 
  Alert,
  FlatList,
} from 'react-native';

import { styles } from './styles'

import Plus from '../../../assets/plus.svg';
import Clipboard from '../../../assets/clipboard.svg';

import { Task } from '../../components/Task';
import { ProgressBar } from '../../components/ProgressBar';


export interface TaskListProps {
  name: string;
  isCompleted: boolean;
}

export function Home() {

  const [tasksList, setTasksList] = useState<TaskListProps[]>([]);
  const [taskName, setTaskName] = useState('');

  function handleAddTask() {

    const duplicatedTasks = tasksList.filter(task => task.name === taskName) 

    if(duplicatedTasks.length > 0) {
      return Alert.alert('Tarefa já existente', 'Já existe essa tarefa na sua lista!')
    };

    if(taskName === '') {
      return Alert.alert('Tarefa sem nome', 'É necessário escrever alguma coisa meu filho...')
    };

    setTasksList(prevState => [...prevState, {
      name: taskName,
      isCompleted: false,
    }]);
    
    setTaskName('');
  };

  function handleRemoveTask(name: string) {
    Alert.alert('Remover','Deseja remover a tarefa?', [
      {
        text: 'Sim',
        onPress: () => setTasksList(prevState => 
          prevState.filter(task => task.name !== name)
        )
      },
      {
        text: 'Não',
        style: 'cancel',
      }
    ])
  };

  function toggleCompletedTasks(name: string){
    const completedTasks = tasksList.map(task => {
      if(task.name === name) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        }
      }
      return task;
    });

    setTasksList(completedTasks)
  };

  let tasksQuantity = tasksList.length
  let completedTasks = tasksList.filter(task => task.isCompleted).length;

  return (
    <View style={styles.container}>

      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder='Adicione uma nova tarefa'
          placeholderTextColor='#808080'
          onChangeText={setTaskName}
          value={taskName}
        />
        <TouchableOpacity 
          style={styles.button} 
          onPress={handleAddTask}
        >
          <Plus />
        </TouchableOpacity>
      </View>

      <ProgressBar
        tasksQuantity={tasksQuantity} 
        completedTasks={completedTasks}
      />
      
      <FlatList
        style={styles.flatList}
        data={tasksList}
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
          <Task
              key={item.name}
              task={item}
              onRemove={() => handleRemoveTask(item.name)}
              onComplete={toggleCompletedTasks}
            />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={styles.listEmptyContainer}>
            <Clipboard />
            <Text style={styles.listEmptyTextBold}>
              Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.listEmptyText}>
              Crie tarefas e organize seus itens a fazer
            </Text>
          </View>
        )}
      />

    </View>
  )
}