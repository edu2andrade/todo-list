import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '97%', // Gambiarra! :)
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#333333',
  },

  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  created: {
    color: '#4EA8DE',
    fontWeight: '700',
    marginRight: 8,
  },

  finished: {
    color: '#8284FA',
    fontWeight: '700',
    marginRight: 8,
  },

  counterNumber: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 12,
  },

  counterBG: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333333',
    paddingVertical: 2,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
});