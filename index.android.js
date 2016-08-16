/**
 * Bull Reasons App
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  ListView,
  TouchableNativeFeedback,
  ScrollView,
} from 'react-native';

import { styles } from './styles';
import { appConfig } from './appConfig';

class bullreasons extends Component {

  constructor(props) {
    super(props);
    var reasonsDS = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      reasons: reasonsDS,
      loadingText: ''
    };
  }

  componentDidMount() {
    this._fetchReasons();
  }

  _fetchReasons() {
    // Fetch reasons and load
    this.setState({loadingText: 'Fetching all reasons...'});
    console.log("Fetching Reasons");
    fetch(appConfig.apiHost + '/reasons')
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
        <View style={styles.header}>
          <Text style={styles.heading}>
            BullReasons
          </Text>
          <TouchableNativeFeedback onPress={this._fetchReasons.bind(this)}>
            <View style={styles.navigation}>
              <Text style={styles.reloadButton}>Reload</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
        <View style={styles.listContainer}>
          <View style={styles.loading}>
            <Text style={styles.loadingText}>{this.state.loadingText}</Text>
          </View>
          <ScrollView>
            <ListView
              dataSource={this.state.reasons}
              renderRow={ (rowData) =>
                <View style={styles.reasonListItem}>
                  <Text style={styles.reasonListText}>{rowData.title} - {rowData.reason}</Text>
                </View>
              }
            />
          </ScrollView>
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('bullreasons', () => bullreasons);
