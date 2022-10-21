import React, {useState} from "react";
import { SafeAreaView, StyleSheet, Text, Image, TextInput, View, Pressable, Modal, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { db } from '../firebase/config';
import { collection, addDoc } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
import { NavigationRouteContext } from '@react-navigation/native';

const Comd = ({ route, navigation }) => {
  const [Nom, onChangeNom] = React.useState("");
  const [Prenom, onChangePrenom] = React.useState("");
  const [Lieu, onChangeLieu] = React.useState("");
  const [Numero, onChangeNumero] = React.useState(null)
  const [modalVisible, setModalVisible] = useState(false);

  const basket = route.params.panier
  console.log(basket)

  const sender = () => {
    basket.map(async(nba) => {
      const price = nba.Price
      const prod = nba.Product
      const idSel = nba.idSeller
      try {
        const docRef = await addDoc(collection(db, "commande"), {
          "LieuLivraison" : Lieu || null,
          "Nom" : Nom || null,
          "Prenom" : Prenom || null,
          "Numero" : Numero || null,
          "Price" : price || null,
          "Product" : prod || null,
          "idSeller" : idSel || null
        });
        console.log("Document written with ID: ", docRef.id);
      }catch(e){
        console.error("Error adding document: ", e);
      }
    })
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={design.headerDesign}>
        <Pressable onPress={() => navigation.navigate("Homie")}>
          <Image source={require('../assets/arrow-back.png')} />
        </Pressable>
        <Text style={{ fontSize: 20 }} >Contact Acheteur</Text>
        <Image
        />
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      > </Modal>
      <View style={design.boxContainer}>
        <TextInput style={design.designTextInput} onChangeText={onChangeNom} placeholder='Nom' />
        <TextInput style={design.designTextInput} onChangeText={onChangePrenom} placeholder='Prenom' />
        <TextInput style={design.designTextInput} onChangeText={onChangeLieu} placeholder='Lieu De Livraison' />
        <TextInput style={design.designTextInput} onChangeText ={onChangeNumero} placeholder='Numero' />
      </View>
      <View style={design.boxContainer}>
        <Pressable style={design.logBox} onPress={() => navigation.navigate('Peya')}>
          <Text style={{ textAlign: 'center', color: '#FFFFFF' }} >Valider</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const design = StyleSheet.create({
  headerDesign: {
    paddingHorizontal: 20,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  boxContainer: {
    marginTop: 60,
    justifyContent: 'center',
    alignSelf: 'center',
    width: '90%',

  },
  designTextInput: {
    borderRadius: 8,
    height: 47,
    borderColor: '#000000',
    backgroundColor: '#F4F4F4',
    paddingHorizontal: 10,
    marginVertical: 5,
    marginBottom: 20,

  },
  logBox: {
    padding: 20,
    borderRadius: 15,
    borderColor: '#f0f0f0',
    backgroundColor: '#32A063',

  },


});

export default Comd;