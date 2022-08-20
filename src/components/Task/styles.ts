import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 64,
    padding: 10,
    backgroundColor: '#333333',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 10,
  },

  taskName: {
    flex: 1,
    fontSize: 14,
    color: '#F2F2F2',
    paddingLeft: 5,
   },

   taskNameFinished: {
    flex: 1,
    fontSize: 14,
    color: '#F2F2F2',
    paddingLeft: 5,
    textDecorationLine: 'line-through',
   },

  trashButton: {
    width: 32,
    height: 32,
    borderRadius: 5,
    // backgroundColor: '#e23c44',
    alignItems: 'center',
    justifyContent: 'center',
  },
})