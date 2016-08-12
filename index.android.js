/**
 * Bull Reasons App
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableNativeFeedback,
  ScrollView
} from 'react-native';

class bullreaons extends Component {

  constructor(props) {
    super(props);
    var reasonsDS = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      reasons: reasonsDS,
      loadingText: ''
    };
    this._fetchReasons();
  }

  _fetchReasons() {
    // Fetch reasons and load
    this.setState({loadingText: 'Fetching all reasons...'});
    console.log("Fetching Reasons");
    fetch('http://10.0.0.187:3000/reasons')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({reasons: this.state.reasons.cloneWithRows(responseJson)});
      this.setState({loadingText: ''});
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>
          All Reasons
        </Text>
        <View>
          <Text style={styles.loading}>
            {this.state.loadingText}
          </Text>
          <ScrollView>
            <ListView
              style={{flex: 1, height: 400}}
              dataSource={this.state.reasons}
              renderRow={ (rowData) =>
                <Text style={styles.reason}>{rowData.title} - {rowData.reason}</Text>
              }
            />
          </ScrollView>
          <TouchableNativeFeedback onPress={this._fetchReasons.bind(this)}>
            <View><Text style={styles.reload}>Reload Reasons</Text></View>
          </TouchableNativeFeedback>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'powderblue',
  },
  heading: {
    fontSize: 28,
    margin: 10,
  },
  reason: {
    fontSize: 15,
    margin: 10
  },
  loading: {
    fontSize: 15
  },
  reload: {
    fontSize: 20,
    alignItems: 'center',
    backgroundColor: 'steelblue',
    padding: 10
  }
});

AppRegistry.registerComponent('bullreaons', () => bullreaons);
