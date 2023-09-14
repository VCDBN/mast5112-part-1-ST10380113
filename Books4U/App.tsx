import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';

const HomePage = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./openbook.jpg')} 
        style={styles.backgroundImage}
        imageStyle={styles.backgroundImageStyle}
      >
        <View style={styles.centeredContent}>
          <Text style={styles.title}>Books4U</Text>
          <Text style={styles.subtitle}>Total pages read</Text>
        </View>
      </ImageBackground>
      <View style={styles.contentContainer}>
      <View style={styles.imageAndTitleContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.imageTitle}>The Title</Text> 
          </View>
          <View style={styles.imageContainer}>
            <Image
              source={require('./placeholder.jpg')} 
              style={styles.image}
            />
          </View>
        </View>
        <View style={styles.AuthorContainer}>
        <TouchableOpacity style={styles.AuthorButton}>
            <Text style={styles.AuthorButtonText}>+</Text>
          </TouchableOpacity>
          <Text style={styles.AuthorText}>Author</Text>
        </View>
        <View style={styles.AuthorContainer}>
        <TouchableOpacity style={styles.AuthorButton}>
            <Text style={styles.AuthorButtonText}>+</Text>
          </TouchableOpacity>
          <Text style={styles.AuthorText}>Genre</Text>
        </View>
        <View style={styles.AuthorContainer}>
          <TouchableOpacity style={styles.AuthorButton}>
            <Text style={styles.AuthorButtonText}>+</Text>
          </TouchableOpacity>
          <Text style={styles.AuthorText}>Number of pages</Text>
        </View>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 0.5,
  },
  backgroundImageStyle: {
    resizeMode: 'cover',
  },
  centeredContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  title: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 32,
    color: '#fff',
  },
  contentContainer: {
    flex: 0.5,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    marginRight: 80,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
  },
  AuthorContainer: {
    flexDirection: 'row',
    marginTop: 10,
    marginRight:390,
  },
  AuthorText: {
    fontSize: 18,
    color: 'black',
  },
  AuthorButton: {
    backgroundColor: 'black',
    padding: 5,
    borderRadius: 5,
    marginLeft: 10,
  },
  AuthorButtonText: {
    fontSize: 18,
    color: '#fff',
  },
  buttonContainer: {
    marginTop: 20,
    backgroundColor: 'grey',
    padding: 10,
  },
  buttonText: {
    fontSize: 18,
    color: 'black',
  },
  imageAndTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleContainer: {
    flex: 1,
    marginLeft: 90,
    color: 'black',
  },
  imageTitle: {
    fontSize: 30,
    color: 'black',
  }
});

export default HomePage;
