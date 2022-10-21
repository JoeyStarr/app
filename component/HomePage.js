// @ts-nocheck
import styles from '../sty';
import {View,Text, TextInput, Image} from 'react-native'
import React,{useState,useEffect} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Homie from './onglets/home';
import Part from './onglets/partage';
import Regl from './onglets/reglage';
import Mark from './onglets/marketplace';
import { Icon } from '@iconify/react';
import { db } from '../firebase/config';
import { getAuth } from 'firebase/auth';
import { collection, addDoc, getDocs, updateDoc, deleteField  } from "firebase/firestore"


const Tab = createBottomTabNavigator();

const Home = () => {

    const auth = getAuth();
    const [iden,setIden] = useState("")
    const uuid = auth.currentUser.uid;
    useEffect(() => {
        async function check() {
            const queryOn = await getDocs(collection(db, "userSerre"));
            let idcoll = ""
            queryOn.forEach((doc) => {
                if(doc.idSerre === uuid){
                }
            })
            setIden(idcoll)
        }  
        check()
    },[])



    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle:{
                    backgroundColor:'#fff'
                },
                tabBarActiveTintColor:'#32A063',
                tabBarInactiveTintColor:'#263238',
            }}
        >
            <Tab.Screen name="Homie" component={Homie} options={{
                tabBarIcon:(focused) => (
                    <Image source={require('../assets/hom.png')} style = {{width:20,height:20}} />
                )
            }}/>
            <Tab.Screen name="Partage" component={Part} options={{
                tabBarIcon:() => (
                    <Image source={require('../assets/share.png')} style = {{width:20,height:20}} />
                )
            }}/>
            <Tab.Screen name="Marketplace" component={Mark} options={{
                tabBarIcon:() => (
                    <Image source={require('../assets/vec.png')} style = {{width:20,height:20}} />
                )
            }}/>
            <Tab.Screen name="Reglage" component={Regl} options={{
                tabBarIcon:() => (
                    <Image source={require('../assets/ant.png')} style = {{width:21,height:21} }/>
                )
            }}/>
        </Tab.Navigator>
    );
}

export default Home;