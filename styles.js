import { StyleSheet } from 'react-native'
// Styles
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'powderblue',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10
  },
  heading: {
    fontSize: 35,
    color: 'steelblue',
    flex: 1
  },
  listContainer: {
    flex: 1,
    marginBottom: 10
  },
  reasonListItem: {
    borderBottomColor: '#333',
    borderBottomWidth: 1,
    padding: 15
  },
  reasonListText: {
    fontSize: 15
  },
  loading: {
    alignItems: 'center'
  },
  loadingText: {
    fontSize: 25,
    color: 'steelblue'
  },
  navigation: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  reloadButton: {
    textAlign: 'center',
    fontSize: 20,
    padding: 10,
    backgroundColor: 'steelblue',
    color: '#FFF',
    flex: 1
  }
});
