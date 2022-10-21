// @ts-nocheck
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, View, Image, Pressable, Button, Modal, Alert, ScrollView, Dimensions } from 'react-native';
import Start from './start';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../sty';

const Dapp = ( {navigation} ) => {

  const [showHomePage, setShowHomePage] = useState(false)
  const [modalVisible, setModalVisible] = useState(false);

  const DATA = [
    {
      id: '1',
      title: 'Partage',
      image : require('../assets/im1.jpg'),
      descr :  "publier une offre d'achat sur un ou plusieurs aliments à vendre",
      modo:`Partage${'\n'} ${'\n'} Publier une offre d’achat sur un ou plusieurs aliments à vendre Dans notre serre, nous pourrions cultiver des produits qui ne seront pas forcément utilisés pour notre propre consommation, avec l’option PARTAGE de notre application nous publierons des offres d’achats  en fonction des cultures récoltées. est utilisée pour publier des offres d’achats en fonction des cultures récoltées.${'\n'} ${'\n'}MarketPlace${'\n'} ${'\n'} Le Market Place est l’espace dédié pour la vente des aliments produits dans la serre. En effet, à l’aide du market Place, chaque utilisateur aura la possibilité d’acheter un produit cultivé par une autre personne ou accéder au market place pour acheter aussi le contenu des autres . ${'\n'} ${'\n'}Réglages${'\n'} ${'\n'} Déclencher des actions dans sa serre La partie réglages de notre application est utilisée pour ajuster manuellement les données récupérés par nos différents capteurs en fonction des conditions nécessaires à la bonne croissance des cultures.`
    },
    {
      id: '2',
      title: 'Marketplace',
      image : require('../assets/im2.jpg'),
      descr :  "accèder au market place pour acheter aussi le contenu des autres",
      modo:`MarketPlace${'\n'} ${'\n'} Le Market Place est l’espace dédié pour la vente des aliments produits dans la serre. En effet, à l’aide du market Place, chaque utilisateur aura la possibilité d’acheter un produit cultivé par une autre personne ou accéder au market place pour acheter aussi le contenu des autres .${'\n'} ${'\n'}Partage${'\n'} ${'\n'} Publier une offre d’achat sur un ou plusieurs aliments à vendre Dans notre serre, nous pourrions cultiver des produits qui ne seront pas forcément utilisés pour notre propre consommation, avec l’option PARTAGE de notre application nous publierons des offres d’achats  en fonction des cultures récoltées. est utilisée pour publier des offres d’achats en fonction des cultures récoltées. ${'\n'} ${'\n'}Réglages${'\n'} ${'\n'} Déclencher des actions dans sa serre La partie réglages de notre application est utilisée pour ajuster manuellement les données récupérés par nos différents capteurs en fonction des conditions nécessaires à la bonne croissance des cultures.`
    },
    {
      id: '3',
      title: 'Réglage',
      image : require('../assets/im3.jpg'),
      descr :  "déclencher des actions dans sa serre",
      modo:`Réglages${'\n'} ${'\n'} Déclencher des actions dans sa serre La partie réglages de notre application est utilisée pour ajuster manuellement les données récupérés par nos différents capteurs en fonction des conditions nécessaires à la bonne croissance des cultures.${'\n'} ${'\n'}Partage${'\n'} ${'\n'} Publier une offre d’achat sur un ou plusieurs aliments à vendre Dans notre serre, nous pourrions cultiver des produits qui ne seront pas forcément utilisés pour notre propre consommation, avec l’option PARTAGE de notre application nous publierons des offres d’achats  en fonction des cultures récoltées. est utilisée pour publier des offres d’achats en fonction des cultures récoltées.${'\n'} ${'\n'}MarketPlace${'\n'} ${'\n'} Le Market Place est l’espace dédié pour la vente des aliments produits dans la serre. En effet, à l’aide du market Place, chaque utilisateur aura la possibilité d’acheter un produit cultivé par une autre personne ou accéder au market place pour acheter aussi le contenu des autres.`
    }
    ];

  const renderItem = ({ item }) => (
    <View style={styles.contslide}>
      <Image style={styles.image} source={item.image}/>
      <View style={styles.cont}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.desc}>{item.descr}</Text>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Pressable
                style={styles.but}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.int}>Fermer</Text>
              </Pressable>
              <ScrollView>
                <Text style={styles.modalText}>{item.modo}</Text>
              </ScrollView>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );

  return (
    <View style={styles.homm}>
        <View style={styles.cot}>
          <Pressable style={styles.saut} onPress={() => navigation.navigate('Conn')}>
            <Text style={styles.saul}>Sauter</Text>
          </Pressable>
        </View>

        <FlatList 
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator
          bounces={true}
        />

        <Pressable style={styles.but} onPress={() => setModalVisible(!modalVisible)}>
          <Text style={styles.int}>Decouvrir</Text>
        </Pressable>
        <View style={styles.para}>
          <Text style={styles.pp}>Vous n'avez pas de compte ? </Text>
          <Button title="S'inscrire"  color="#0090AC" onPress={() => navigation.navigate('Conn')}/>
        </View>
    </View>
      
  );
}

export default Dapp;
