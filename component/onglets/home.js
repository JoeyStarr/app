// @ts-nocheck
import {View, Text, ScrollView, Image, Pressable, BackgroundImage} from 'react-native'
import styles from '../../sty';
import SelectDropdown from 'react-native-select-dropdown'
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react'
import  { auth }  from '../../firebase/config';
import { getAuth, signOut } from 'firebase/auth';
import { NetworkInfo } from 'react-native-network-info';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';
import { db } from '../../firebase/config';
import { collection, addDoc, getDocs, updateDoc, deleteField  } from "firebase/firestore"

const Homie = ({route, navigation}) => {
    /*const [name,setName] = useState("joshua")*/
    const [visuel,setVisuel] = useState({})
    const [serre,setSerre] = useState({})
    const [hash,setHash] = useState("")
    const [fireId,setfireId] = useState("")
    const [cult,setCult] = useState()
    const [kult,setKult] = useState()
    const handleSignOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            setfireId("")
            navigation.navigate("Conn")
        })
    }

    useEffect(() => {
        const authz = getAuth();
        if(authz!==null){
           setfireId(authz.currentUser.uid)
        }else{
            setfireId("")
        }
    },[])

    useEffect(() => {
        axios.get(`http://192.168.252.15:8000/dpers/${fireId}`)
        .then((response) => {
            setVisuel(response.data.serrepers[0].dataSerre)
            setHash(response.data.serrepers[0].hashSerre)
            setCult(response.data.serrepers[0].kultSerre)
        })
        .catch((err) => {
            console.log("e1 :",err)
        })
    })

    useEffect(() => {
        axios.get(`http://192.168.252.15:8000/dpers/${fireId}`)
        .then((response) => {
            setSerre(response.data.serrepers[0].sysSerre)
            console.log(serre)
        })
        .catch((err) => {
            console.log("e1 :",err)
        })
    },[])

    

    const setValue = (index) => {
        axios.post(`http://192.168.252.15:8000/updserre/${hash}`,{
            "kultSerre": index
        })
        .then((response) => {
            console.log("OKEY KULT")
        })
        .catch((err) => {
            console.log("e2 :",err)
        })
    }

    const countries = ["Soja", "Choux", "Tomate", "Blé"]
    const listCol = ["#62B8F6", "#62B8F6", "#62B8F6", "#62B8F6"]
    const [color,setColor] = useState("#62B8F6")
    return(
    <ScrollView style={styles.conteneurparent} showsVerticalScrollIndicator={false}>
        <View style={styles.conteneur}>
            <SelectDropdown
                buttonStyle={{backgroundColor:color,width:240,borderRadius:8, color:"white",shadowOffset :{width:-2,height:4},shadowColor:"black",shadowOpacity: 0.8}}
                buttonTextStyle={{backgroundColor:color, color:"white"}}
                dropdownStyle={{backgroundColor:color}}
                data={countries}
                defaultValue={countries[cult]}
                onSelect={(selectedItem, index) => {
                    console.log(index)
                    setColor(listCol[index])
                    setKult(countries[index])
                    setValue(index)
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                    return item
                }}
            />
            <View style={{backgroundColor: color,opacity:0.8,borderRadius:30,marginTop:10,width:368,paddingBottom:20,shadowOffset :{width:-1,height:2},shadowColor:"black",shadowOpacity: 0.8}}>
                <View style={styles.viewer}>
                    <View style={styles.viewer1}>
                        <Text style={styles.v1}>Serre</Text>
                        <Image source={require('../../assets/temp.png')} style={{ width:110,height:220, margin:20}}/>
                        <Text style={styles.v2}>Lundi Mon</Text>
                        <Text style={styles.v3}>{visuel.tmp}°</Text>
                        <Text style={styles.v4}>Temperature de l'air</Text>
                    </View>
                    <View style={styles.viewer2}>
                        <View style={styles.miniviewer}>
                            <Image source={require(
// @ts-ignore
                            '../../assets/ion.png')} style={{ width:24,height:24}}/>
                            <View style={styles.minivu}>
                                <Text style={styles.ecrit}>{visuel.hum}%</Text>
                                <Text style={styles.ecrit}>humidité</Text>
                            </View>
                        </View>
                        <View style={styles.miniviewerr}>
                            <Image source={require('../../assets/group.png')} style={{ width:24,height:24}}/>
                            <View style={styles.minivu}>
                                <Text style={styles.ecrit}>{visuel.ph}ph</Text>
                                <Text style={styles.ecrit}>Ph du sol</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.viewer3}>
                        <View style={{width:152,height:168,backgroundColor:color,margin:10,borderRadius:20,shadowOffset :{width:-1,height:2},shadowColor:"white",shadowOpacity: 0.8}}>
                            <View style={styles.first}>
                                <Image source={require('../../assets/humidity.png')} style={{ width:24,height:24}}/>
                                <Text style={{color:"white"}}>humidité du sol</Text>
                            </View>
                            <View style={styles.two}>
                                <Text style={styles.ttt}>{visuel.sol} %</Text>
                            </View>
                        </View>
                        <View style={{width:152,height:168,backgroundColor:color,margin:10,borderRadius:20,shadowOffset :{width:-1,height:2},shadowColor:"white",shadowOpacity: 0.8}}>
                            <View style={styles.first}>
                                <Image source={require('../../assets/hot-line.png')} style={{ width:18,height:18}}/>
                                <Text style={{color:"white"}}>temperature</Text>
                            </View>
                            <View style={styles.two}>
                                <Text style={styles.ttt}>{visuel.tmp} °</Text>
                            </View>
                        </View>
                        <View style={{width:152,height:168,backgroundColor:color,margin:10,borderRadius:20,shadowOffset :{width:-1,height:2},shadowColor:"white",shadowOpacity: 0.8}}>
                            <View style={styles.first}>
                                <Image source={require('../../assets/iwwa.png')} style={{ width:32,height:32}}/>
                                <Text style={{color:"white"}}>dioxygène</Text>
                            </View>
                            <View style={styles.two}>
                                <Text style={styles.ttt}>{visuel.co2} ppm</Text>
                            </View>
                        </View>
                        <View style={{width:152,height:168,backgroundColor:color,margin:10,borderRadius:20,shadowOffset :{width:-1,height:2},shadowColor:"white",shadowOpacity: 0.8}}>
                            <View style={styles.first}>
                                <Image source={require('../../assets/water.png')} style={{ width:16,height:16}}/>
                                <Text style={{color:"white"}}>niveau d'eau</Text>
                            </View>
                            <View style={styles.two}>
                                <Text style={styles.ttt}>{visuel.niv} ml</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <Pressable style={styles.deco} onPress={handleSignOut}>
                <Image source={require('../../assets/decote.png')} style={{width:38,height:38}}/>
            </Pressable>
        </View>
    </ScrollView>  
        
        
    );
}

export default Homie;