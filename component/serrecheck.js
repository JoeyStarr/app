import styles from '../sty';
import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { View , Text, TextInput, Pressable, Button} from 'react-native';

const Serre = ({navigation, route}) => {

    const [hash,setHash] = useState("")
    const [error,setError] = useState("")
    let mail = route.params.email
    let name = route.params.pseudo
    let fire = route.params.firebaseId

    const signInUser = () => {
        axios.get(`http://192.168.252.15:8000/seaserre/${hash}`)
        .then((response) => {
            let resp =response.data
            if(resp === "okey"){
                 axios.post(`http://192.168.252.15:8000/setpers/`,{
                    "email": mail,
                    "firebaseId": fire,
                    "name": name
                 })
                 .then((response) => {
                    console.
                    log("ok")
                    const log = response.data
                    const ilog = Math.floor(log.id)
                    axios.post(`http://192.168.252.15:8000/updserre/${hash}`,{
                        "person": ilog
                     })
                    .then((response) => {
                        navigation.navigate('Home')
                    })
                    .catch((err) => {
                        console.log(err)
                    })
                 })
            }else{
                setError("Hash n'a pas de correspondance")
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <View>
            <Text style={styles.title1}>Avez vous une serre ? </Text>
            <View style={styles.block}>
                <TextInput style={styles.input} placeholder="Veuillez entrer l'hash de cette serre" value={hash} onChangeText={setHash}/>
                {!!error && <Text style={styles.infff}>{error}</Text> }
                <Pressable style={styles.but1} onPress={signInUser}>
                    <Text style={styles.int}>Verification</Text>
                </Pressable>
                <View style={styles.bas}>
                    <Text style={styles.notaccount}>Vous n'avez pas de serre ?</Text>
                    <Button title="MarketPlace" color="#32A063" onPress={() => navigation.navigate('Market')}/>
                </View> 
            </View>
        </View>
    )
}

export default Serre;