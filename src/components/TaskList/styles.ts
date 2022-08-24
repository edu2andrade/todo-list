import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  progressBarContainer: {
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

  concluded: {
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

  //////////////////////////////////////////////////

  flatList: {
    width: '100%',
  },

  listEmptyContainer: {
    marginTop: 48,
    alignItems: 'center',
  },

  listEmptyTextBold: {
    color: '#808080',
    fontSize: 14,
    fontWeight: "700",
    textAlign: 'center',
    marginTop: 16,
  },

  listEmptyText: {
    color: '#808080',
    fontSize: 14,
    textAlign: 'center',
  },
});