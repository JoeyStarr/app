// @ts-nocheck
import {View, Text, Pressable, Image, ScrollView, Switch} from 'react-native'
import styles from '../../sty';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState,useEffect } from "react";
import { Video, AVPlaybackStatus } from 'expo-av';

import axios from 'axios';
import { db } from '../../firebase/config';
import {doc, setDoc} from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { collection, addDoc, getDocs, updateDoc, deleteField  } from "firebase/firestore"; 

const Regl = ( {navigation} ) => {
    const authz = getAuth();
    const idd = authz.currentUser.uid

    const video = React.useRef(null);
    const [hash,setHash] = useState("azertyuiop")
    const [status, setStatus] = React.useState({});
    const [isEnabled, setIsEnabled] = useState(false);
    const [idoc,setIdoc] = useState([])

    const [hsbc,setHsbc] = useState()
    const [tab,setTab] = useState([])
    const [iden,setIden] = useState('');
    
    const toggleSwitch = () => setIsEnabled(!isEnabled);
    const [isEnabled0, setIsEnabled0] = useState();
    const toggleSwitch0 = () => setIsEnabled0(!isEnabled0);
    const [isEnabled1, setIsEnabled1] = useState();
    const toggleSwitch1 = () => setIsEnabled1(!isEnabled1);
    const [isEnabled2, setIsEnabled2] = useState();
    const toggleSwitch2 = () => setIsEnabled2(!isEnabled2);
    const [isEnabled3, setIsEnabled3] = useState();
    const toggleSwitch3 = () => setIsEnabled3(!isEnabled3);
    const [isEnabled4, setIsEnabled4] = useState();
    const toggleSwitch4 = () => setIsEnabled4(!isEnabled4);
    var value ={"s1":isEnabled,"s2":isEnabled0,"s3":isEnabled1,"s4":isEnabled2,"s5":isEnabled3};


    useEffect(() => {
        axios.get(`http://192.168.252.15:8000/dpers/${idd}`)
        .then((response) => {
            const sys = response.data.serrepers[0].sysSerre
            console.log(sys)
            setIsEnabled(sys.s1)
            setIsEnabled0(sys.s2)
            setIsEnabled1(sys.s3)
            setIsEnabled2(sys.s4)
            setIsEnabled3(sys.s5)
        })
        .catch((err) => {
            console.log('elno :',err)
        })
    },[])

    useEffect(() => {
        axios.get(`http://192.168.252.15:8000/dpers/${idd}`)
        .then((response) => {
            const hash = response.data.serrepers[0].hashSerre
            axios.post(`http://192.168.252.15:8000/updserre/${hash}`,{
                "sysSerre":value
            }).then((response) => {
            }).catch((error) => {
                console.log(error)
            })
        })
        .catch((err) => {
            console.log("non")
        })
    })

    return(
        <View style={styles.conteneur3}>
            <View style={styles.azy}>
                <Pressable onPress={() => navigation.navigate("Homie")} style={styles.arrow}>
                    <Image source={require('../../assets/eva.png')} style={{ width:32,height:32}}/>
                </Pressable>
                <Text style={styles.middle}>Reglage de la serre</Text>
            </View>
            <ScrollView>
                <View style={styles.reg}>
                    <View style={styles.deo}>
                    <Video
                        ref={video}
                        style={styles.vid}
                        source={{uri:'https://www.youtube.com/watch?v=dHiqU_YxiJE&list=TLPQMjExMDIwMjJeMP_T59LsUg&index=3'}}
                        useNativeControls={false}
                        shouldPlay={true}
                        resizeMode="cover"
                        isMuted={true}
                        isLooping={true}
                        onPlaybackStatusUpdate={status => setStatus(() => status)}
                    />
                    </View>
                    <Text style={styles.ecrito}>
                        Controller votre serre
                    </Text>
                    <View style={styles.action}>
                        <Image source={require('../../assets/linear.png')} style={{ width:64,height:64}}/>
                        <View style={styles.side}>
                            <Switch
                                trackColor={{ false: "#767577", true: "#43A670" }}
                                thumbColor={isEnabled ? "#f4f3f4" : "#14C38E"}
                                ios_backgroundColor="#767577"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                            <Text style={styles.tside}>Elévateur lineaire</Text>
                        </View>
                    </View>
                    <View style={styles.action}>
                        <Image source={require('../../assets/clumos.png')} style={{ width:64,height:64}}/>
                        <View style={styles.side}>
                            <Switch
                                trackColor={{ false: "#767577", true: "#43A670" }}
                                thumbColor={isEnabled0 ? "#f4f3f4" : "#14C38E"}
                                ios_backgroundColor="#767577"
                                onValueChange={toggleSwitch0}
                                value={isEnabled0}
                            />
                            <Text style={styles.tside}>Eclairage de la sere</Text>
                        </View>
                    </View>
                    <View style={styles.action}>
                        <Image source={require('../../assets/eau.png')} style={{ width:64,height:64}}/>
                        <View style={styles.side}>
                            <Switch
                                trackColor={{ false: "#767577", true: "#43A670" }}
                                thumbColor={isEnabled1 ? "#f4f3f4" : "#14C38E"}
                                ios_backgroundColor="#767577"
                                onValueChange={toggleSwitch1}
                                value={isEnabled1}
                            />
                            <Text style={styles.tside}>Arrosage des plantes</Text>
                        </View>
                    </View>
                    <View style={styles.action}>
                        <Image source={require('../../assets/aero.png')} style={{ width:64,height:64}}/>
                        <View style={styles.side}>
                            <Switch
                                trackColor={{ false: "#767577", true: "#43A670" }}
                                thumbColor={isEnabled2 ? "#f4f3f4" : "#14C38E"}
                                ios_backgroundColor="#767577"
                                onValueChange={toggleSwitch2}
                                value={isEnabled2}
                            />
                            <Text style={styles.tside}>Aération</Text>
                        </View>
                    </View>
                    <View style={styles.action}>
                        <Image source={require('../../assets/vent.png')} style={{ width:64,height:64}}/>
                        <View style={styles.side}>
                            <Switch
                                trackColor={{ false: "#767577", true: "#43A670" }}
                                thumbColor={isEnabled4 ? "#f4f3f4" : "#14C38E"}
                                ios_backgroundColor="#767577"
                                onValueChange={toggleSwitch4}
                                value={isEnabled4}
                            />
                            <Text style={styles.tside}>Ventilation</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

export default Regl;