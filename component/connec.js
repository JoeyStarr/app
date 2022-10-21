// @ts-nocheck
import styles from '../sty';
import axios from 'axios';
import {View,Text, TextInput,Pressable, Button, Image} from 'react-native'
import { NavigationContainer, NavigationContainerRefContext } from '@react-navigation/native';
import  { auth }  from '../firebase/config';
import { db } from '../firebase/config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React,{useEffect,useState} from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc, getDocs, updateDoc, deleteField  } from "firebase/firestore"; 

const Conn = ( {navigation} ) => {

    const [email,setEmail] = useState('');
    const [pass,setPassword] = useState('');
    const [iden,setIden] = useState('');
    const [isSegnedIn, setIsSegnedIn] = useState(false)
    const [error,setError] = useState("")
    const [tab,setTab] = useState([])

    const signInUser = () => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, pass)
        .then((us) => {
            const user = us.user;
            const idU = user.uid;
            axios.get(`http://192.168.252.15:8000/seapers/${idU}`)
            .then((response) => {
                let resp =response.data
                if(resp === "yep"){
                    navigation.navigate('Home')
                }else{
                    navigation.navigate('Market')
                }
            })
            .catch((err) => {
                console.log(err)
            })
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("codes :",errorCode," msg :",errorMessage)
            if(errorCode == "auth/user-not-found"){
                setError("Email n'a pas été trouvé")
            }else if(errorCode == "auth/wrong-password"){
                setError("Mot de passe incorrect")
            }
        });
        setError("")
    }
    return (
        <View style={styles.content}>
            <Text style={styles.title1}>Connexion</Text>
            <Text style={styles.inf}>Veuillez entrer vos informations de connexion</Text>
            <View style={styles.block}>
                <TextInput style={styles.input} placeholder="Email ou Id serre" value={email} onChangeText={setEmail}/>
                <TextInput style={styles.input} placeholder="Mot de passe" secureTextEntry={true} value={pass} onChangeText={setPassword}/>
                <Text style={styles.inff}>Mot de passe oublié ?</Text>
                {!!error && <Text style={styles.infff}> {error} </Text> }
                <Pressable style={styles.but1} onPress={signInUser}>
                    <Text style={styles.int}>Connexion</Text>
                </Pressable>
                <View style={styles.bas}>
                    <Text style={styles.notaccount}>Vous n'avez pas de compte ?</Text>
                    <Button title="S'inscrire" color="#32A063" onPress={() => navigation.navigate('Insc')}/>
                </View> 
            </View>
            <Image style={styles.imagee} source={require('../assets/ii.png')}/>
        </View>
    );
}

export default Conn;