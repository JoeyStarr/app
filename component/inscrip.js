// @ts-nocheck
import styles from '../sty';
import {View,Text, TextInput,Pressable, Button, Image} from 'react-native'
import { NavigationContainer, NavigationContainerRefContext } from '@react-navigation/native';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { auth, db } from '../firebase/config';
import React, {useState} from "react";

const Ins = ( {navigation} ) => {
    const [isSegnedIn, setIsSegnedIn] = useState(false)
    const [pseudo, onChangePseudo] = useState('')
    const [email, onChangeEmail] = useState('')
    const [pass, onChangePass] = useState('')
    const registerUser = () => {
        createUserWithEmailAndPassword(auth ,email ,pass)
        .then((data) => {
            let id = data.user.uid
            sender(id)
            navigation.navigate('Serre',{
                'email':email,
                'pseudo':pseudo,
                'password':pass,
                'firebaseId':id
            })
        })
        .then(() => {
        })
    }

    const sender = async (id) => {
        try 
        {
            const docRef = await addDoc(collection(db, "usersInfo"), {
                "LApi" : "http://127.0.0.1/api/",
                "email" : email,
                "pseudo" : pseudo,
                "uid" : id
            });
            console.log("Document written with ID: ", docRef.id);
        }
        catch(e){
            console.error("Error adding document: ",e);
        }
    }

    return (
        <View style={styles.content}>
            <Text style={styles.title1}>Inscription</Text>
            <Text style={styles.inf}>Veuillez entrer vos informations de connexion</Text>
            <View style={styles.block}>
                <TextInput style={styles.input} placeholder="Pseudo" value={pseudo} onChangeText={onChangePseudo}/>
                <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={onChangeEmail}/>
                <TextInput style={styles.input} placeholder="Mot de passe" secureTextEntry={true} value={pass} onChangeText={onChangePass}/>
                <Pressable style={styles.but1} onPress={registerUser}>
                    <Text style={styles.int}>Inscription</Text>
                </Pressable>
                <View style={styles.bas}>
                    <Text style={styles.notaccount}>Vous etes déjà inscrit ?</Text>
                    <Button title="Me connecter" color="#32A063" onPress={() => navigation.navigate("Conn")}/>
                </View> 
            </View>
            <Image style={styles.imagee} source={require('../assets/ii.png')}/>
        </View>
    );
}
export default Ins;