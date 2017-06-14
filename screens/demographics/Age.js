import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PieChartCard from '../PieChartCard';
import BarChartCard from '../BarChartCard';

import { age } from './data';

export default class Age extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{'Age'}</Text>
        <PieChartCard
          mainLabel="Median age"
          mainValue={age.median}
          pieChartTitle={'Popuation by age category'}
          data={age.categoryDistribution}
        />
        <BarChartCard
          barChartTitle="Population by 10-year age range"
          barChartHeight={400}
          data={age.groupDistribution}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    color: 'rgba(0, 0, 0, 0.5)',
    fontSize: 16
  },
  container: {
    marginTop: 20
  }
});
