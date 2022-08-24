import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: -32,
    marginBottom: 20,
  },

  input: {
    flex: 1,
    marginRight: 4,
    height: 54,
    backgroundColor: '#262626',
    borderRadius: 5,
    color: '#F2F2F2',
    padding: 16,
    fontSize: 16,
  },

  addButton: {
    width: 54,
    height: 54,
    borderRadius: 5,
    backgroundColor: '#1E6F9F',
    alignItems: 'center',
    justifyContent: 'center',
  },
})