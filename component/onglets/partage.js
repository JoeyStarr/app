// @ts-nocheck
import {View, Text, Image, TextInput, Pressable, Modal, FlatList} from 'react-native'
import styles from '../../sty';
import React,{useState,useEffect} from 'react';
import { db } from '../../firebase/config';
import {doc, setDoc} from 'firebase/firestore';
import SelectDropdown from 'react-native-select-dropdown';
import { collection, addDoc, getDocs, updateDoc, deleteField  } from "firebase/firestore"; 
import { getAuth } from 'firebase/auth';
import axios from 'axios';

const Part = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const countries = ["Soja", "Choux", "Tomate", "Blé"]
    const [price, setPrice] = useState(null);
    const [product, setProduit] = useState("");
    const [quantity, setQuantity] = useState(null);
    const [commander,setCommander] = useState([])
    const [cmd,setCmd] = useState([])
    const [data,setData] = useState([])
    const auth = getAuth();
    const sellerID = auth.currentUser.uid

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos/1')
        .then((response) => {
            console.log(response.data)
        })
    },[])



    const sender = async () => {
        try 
        {
            const docRef = await addDoc(collection(db, "offer"), {
                "Price" : parseInt(price,10),
                "Product" : product,
                "Quantity" : parseInt(quantity,10),
                "idSeller" : sellerID
            });
            console.log("Document written with ID: ", docRef.id);
        }
        catch(e){
            console.error("Error adding document: ", e);
        }
    }


    useEffect(() => {
        async function check() {
            const queryOn = await getDocs(collection(db, "commande"));
            let document = []
            queryOn.forEach((doc) => {
                document.push({...doc.data(), id: doc.id})
            })
            document.map((com) => {
                if(com.idSeller == sellerID){
                    setData((dd) => [...dd,com])
                }
            })
        }  
        check()
    },[])

    const renderItem = ({ item }) => (
        <View style={styles.cmd}>
            <Image source={item.image} style={{ width:48,height:48,borderRadius:10}}/>
            <View>
                <Text style={{fontSize:14}}>{item.Product}</Text>
                <Text style={{fontSize:12}}>{item.Nom} {item.Prenom},{item.LieuLivraison}</Text>
                <Text style={{fontSize:10}}>Contacte: {item.Numero}</Text>
                <Text style={{fontSize:10}}>Total:{item.Price}</Text>
                
            </View>
            <Pressable>
                <Image source={require('../../assets/pou.png')} style={{ width:24,height:24}}/>
            </Pressable>
        </View>
    );

    return(
        <View style= {styles.conteneur2}>
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
                <View style={styles.modalView2}>
                    <Text style={{marginVertical:20,fontSize:16}}>Mes commandes</Text>
                    <FlatList 
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator
                    bounces={false}
                    />

                    <Pressable style={styles.but} onPress={() => setModalVisible(!modalVisible)}>
                        <Text style={styles.int}>Fermer</Text>
                    </Pressable>
                </View>
                </View>
            </Modal>
            <View style={styles.headerDesign}>
                <Pressable onPress={() => navigation.navigate("Homie")}>
                    <Image source={require('../../assets/arrow-back.png')} style={{ width:24,height:24}} /> 
                </Pressable>
                    <Text style= {{fontSize: 20}}>Publier une offre d'achat</Text>
                <Pressable onPress={() => setModalVisible(!modalVisible)}>
                    <Image source={require('../../assets/bxs_package.png')} style={{ width:24,height:24}}/>
                </Pressable>
            </View>
            <View style={styles.boxContainer}>
                <View style={styles.prod}>
                    <Text style={{fontSize:16,marginRight:70,color:"#939393"}}>Produit</Text>
                    <SelectDropdown
                        buttonStyle={{backgroundColor:"#32A063",width:220,borderRadius:8, color:"white"}}
                        buttonTextStyle={{backgroundColor:"#32A063", color:"white"}}
                        dropdownStyle={{backgroundColor:"#F4F4F4"}}
                        data={countries}
                        onSelect={(selectedItem, index) => {
                            console.log(selectedItem, index)
                            setProduit(selectedItem)
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {
                            return selectedItem
                        }}
                        rowTextForSelection={(item, index) => {
                            return item
                        }}
                    />
                </View>
                <TextInput style={styles.designTextInput} placeholder='Quantité' onChangeText={setQuantity} />
                <TextInput style={styles.designTextInput} placeholder='Prix' onChangeText={setPrice} />
            </View>
            <View style={styles.boxContainer}>
            <Pressable style={styles.logBox} onPress={sender}>
              <Text style= {{textAlign: 'center', color:'#FFFFFF'}} >Publier l'offre</Text>
            </Pressable>
            </View>
        </View>
    );
}

export default Part;