import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191919',
    alignItems: 'center',
    paddingHorizontal: 24,
  },

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

  button: {
    width: 54,
    height: 54,
    borderRadius: 5,
    backgroundColor: '#1E6F9F',
    alignItems: 'center',
    justifyContent: 'center',
  },

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
  }
});