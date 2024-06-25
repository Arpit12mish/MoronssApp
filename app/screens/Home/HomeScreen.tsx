import React from 'react';
import { View, Text, StyleSheet, Image, Button, ScrollView } from 'react-native';
import Carousel from './CustomCar';

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Hi Ananya</Text>
        <Text style={styles.subGreeting}>Let's Solve Challenges Today!</Text>
      </View>

      <Carousel/>


      {/* <View style={styles.noticeBoard}>
        <Text style={styles.noticeTitle}>New Opportunities For SDEs</Text>
        <Text style={styles.noticeDate}>Apply By: 25/03/2024</Text>
        <Image
          source={require('../../assets/bcg-logo.png')} // Adjust the path as necessary
          style={styles.noticeImage}
        />
      </View> */}

      <View style={styles.credibilityButtonContainer}>
        <Button
          title="Your Credibility Status"
          color="#F9A826"
          onPress={() => { /* Navigation logic here */ }}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Let's Explore</Text>
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <Text style={styles.cardCheckDate}>Last Check: Yesterday</Text>
            <Text style={styles.cardTitle}>Ecosystem</Text>
            <Text style={styles.cardSubtitle}>New Sessions</Text>
            <Text style={styles.cardActivity}>Your Activity:</Text>
            <View style={styles.progressBar}></View>
            <Text style={styles.weeklyTargets}>Weekly Targets For Learnings</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardCheckDate}>Last Check: 12/08/2024</Text>
            <Text style={styles.cardTitle}>Challenges</Text>
            <Text style={styles.cardSubtitle}>New Challenges</Text>
            <Text style={styles.cardActivity}>Your Activity:</Text>
            <View style={styles.progressBar}></View>
            <Text style={styles.weeklyTargets}>Weekly Targets For Competitions</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardCheckDate}>Last Check: Yesterday</Text>
            <Text style={styles.cardTitle}>Programs</Text>
            <Text style={styles.cardSubtitle}>New Modules</Text>
            <Text style={styles.cardActivity}>Your Activity:</Text>
            <View style={styles.progressBar}></View>
            <Text style={styles.weeklyTargets}>Weekly Targets For Learning</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardCheckDate}>Last Check: Today</Text>
            <Text style={styles.cardTitle}>Opportunities</Text>
            <Text style={styles.cardSubtitle}>New Jobs</Text>
            <Text style={styles.cardActivity}>Your Activity:</Text>
            <View style={styles.progressBar}></View>
            <Text style={styles.weeklyTargets}>Weekly Targets For Jobs</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Dark background color
    padding: 16,
  },
  header: {
    marginBottom: 20,
  },
  greeting: {
    fontSize: 24,
    color: '#000',
    fontWeight: 'bold',
  },
  subGreeting: {
    fontSize: 16,
    color: '#000',
  },
  noticeBoard: {
    backgroundColor: '#000',
    borderRadius: 8,
    padding: 16,
    marginBottom: 20,
  },
  noticeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  noticeDate: {
    fontSize: 14,
    color: '#fff',
    marginTop: 8,
  },
  noticeImage: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
    marginTop: 8,
    alignSelf: 'flex-end',
  },
  credibilityButtonContainer: {
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F9A826',
    marginBottom: 10,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#000',
    borderRadius: 8,
    padding: 16,
    width: '48%',
    marginBottom: 16,
  },
  cardCheckDate: {
    fontSize: 12,
    color: '#fff',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 8,
  },
  cardActivity: {
    fontSize: 12,
    color: '#fff',
  },
  progressBar: {
    backgroundColor: '#ccc',
    height: 5,
    borderRadius: 5,
    marginVertical: 8,
  },
  weeklyTargets: {
    fontSize: 12,
    color: '#0E76A8',
  },
});

export default HomeScreen;
