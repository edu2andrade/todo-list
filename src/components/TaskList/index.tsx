import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { TaskDetails } from "../../screens/Home";

import { styles } from "./styles";
import Clipboard from '../../../assets/clipboard.svg';

import { Task } from "../Task";

interface TaskListProps {
  tasks: TaskDetails[];
  handleRemoveTask: (taskId: string) => void;
  toggleCompletedTasks: (taskId: string) => void;
}

export function TaskList({ tasks, handleRemoveTask, toggleCompletedTasks }: TaskListProps) {

  function completedTasks() {
    const completedTasks = tasks.reduce((completed, allTasks) => {
      return completed + Number(allTasks.isCompleted)
    }, 0)
    return completedTasks;
  }

  return (
    <>
      <View style={styles.progressBarContainer}>
        <View style={styles.contentContainer}>
          <Text style={styles.created}>Created tasks</Text>
          <TouchableOpacity style={styles.counterBG}>
            <Text style={styles.counterNumber}>
              {tasks.length}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.concluded}>Concluded</Text>
          <TouchableOpacity style={styles.counterBG}>
            <Text style={styles.counterNumber}>
              {completedTasks()} of {tasks.length}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        style={styles.flatList}
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Task
              key={item.id}
              task={item}
              onRemove={() => handleRemoveTask(item.id)}
              onComplete={toggleCompletedTasks}
            />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={styles.listEmptyContainer}>
            <Clipboard />
            <Text style={styles.listEmptyTextBold}>
              You don't have any tasks created.
            </Text>
            <Text style={styles.listEmptyText}>
              Add tasks and organize your day!
            </Text>
          </View>
        )}
      />
    </>

  )
}