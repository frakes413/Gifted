import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
    backgroundColor: '#458b74',
  },
  inputView: {
    width: '75%',
    backgroundColor: '#222222',
    borderRadius: 10,
    height: 40,
    marginBottom: 20,
    textAlign: 'center',
    color: '#eeeeee',
  },
  btn: {
    backgroundColor: '#458b74',
    borderRadius: 10,
    height: 40,
    width: 175,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    margin: 20,
  },
});

export default function RequestScreen() {
  const [familyName, setFamilyName] = useState('');
  const [recipientDesc, setRecipientDesc] = useState('');
  const [image, setImage] = useState('');
  const [story, setStory] = useState('');
  const [link, setLink] = useState('');

  const reqeuestData = {
    familyName: familyName,
    recipientDesc: recipientDesc,
    imageUri: image,
    story: story,
    link: link,
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputView}
        placeholder="Family Name"
        placeholderTextColor="#eeeeee"
        onChangeText={(text) => setFamilyName(text)}
      />
      <TextInput
        style={styles.inputView}
        placeholder="Recipient Description"
        placeholderTextColor="#eeeeee"
        onChangeText={(text) => setRecipientDesc(text)}
      />
      <TextInput
        style={styles.inputView}
        placeholder="Image"
        placeholderTextColor="#eeeeee"
        onChangeText={(text) => setImage(text)}
      />
      <TextInput
        style={styles.inputView}
        placeholder="Story"
        placeholderTextColor="#eeeeee"
        onChangeText={(text) => setStory(text)}
      />
      <TextInput
        style={styles.inputView}
        placeholder="Wish List Link"
        placeholderTextColor="#eeeeee"
        onChangeText={(text) => setLink(text)}
      />

      <View style={styles.separator} />
      <TouchableOpacity style={styles.btn}>
        <Text
          style={styles.title}
          onPress={() => {
            fetch('http://localhost:3000/addRequest', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(reqeuestData),
            })
              .then(() => console.log('hi'))
              .catch((err) => console.log(err));
          }}
        >
          Submit Request
        </Text>
      </TouchableOpacity>
    </View>
  );
}