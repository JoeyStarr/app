import React, { useState, useEffect } from 'react';
import {SafeAreaView,StyleSheet, Text,Image, Modal, TextInput, View, Pressable,TouchableOpacity, ScrollView, Dimensions, FlatList, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { collection, getDocs } from "firebase/firestore";
import {db} from '../../firebase/config';
import { NavigationContainer } from '@react-navigation/native';
const width = Dimensions.get('window').width / 2 - 20; 
import { getAuth, signOut } from 'firebase/auth';

const Market = ({navigation})=>{ 
    const [basket,setBasket] = useState([]);
    const [market,setMarket] = useState([])
    const [action,setAction] = useState(false)
    const [filt,setFilt] = useState("")
    const [filtreData,setFiltreData]=useState([]);

    const handleSignOut = () => {
      const auth = getAuth();
      signOut(auth).then(() => {
          navigation.navigate("Conn")
      })
    }

    
    useEffect(() => {
      const querySnapshot = async () => {
        const queryOn = await getDocs(collection(db, "offer"));
        let document = []
        queryOn.forEach((doc) => {
            document.push({...doc.data(), id: doc.id})
        })
        setMarket(document)
        setAction(current => !current)
      }
      querySnapshot()
      
    },[])

    useEffect(() => {
      myfiltre(0,"Tout")
    },[market])

    
    const filter = (ev) => {
      setFilt(ev)
    }
    

    const switchComd = () => {
        setModalVisible(false)
        navigation.navigate("Comd",{
          panier:basket
        })
    }

    const categories=['Tout','Tomate','Salade','Soja','Raisin','Blé','Choux'];
    const [quantiteProduit,setquantiteProduit]=React.useState(0);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedCategoryIndex,setSelectedCategoryIndex]=React.useState(0);
    
    useEffect(() => {
      myfiltre(0,"Tout")
    },[filt])
    
      const myfiltre= (index,item)=> {
          setSelectedCategoryIndex(index);
          if(item !== "Tout"){
            let filtreData2 = new Object();
            filtreData2 = market.filter( produit => produit.Product === item);
            setFiltreData(filtreData2);
          }else{
            let filtreData3  = new Object();
            filtreData3 = market.filter( produit => produit.Product.toLowerCase().includes(filt.toLowerCase()));
            setFiltreData(filtreData3);
            console.log("dd :",filtreData3)
          }
      }
    
    
  /*
  const increaseQuantity = ()=> {
    var nombre  = quantiteProduit +1 ; 
    setquantiteProduit(nombre);   
  } 
  const decreaseQuantity = ()=> {
    var nombre  = quantiteProduit - 1 ; 
    setquantiteProduit(nombre);  
  }
  */

  const Card2 =({plant})=>{
    switch(plant.Product) {
      case "Tomate":
        var iconn = require('../../assets/tomato.png')
        break;
      case "Salade":
        var iconn = require('../../assets/salade.png')
        break;
      case "Blé":
        var iconn = require('../../assets/10.png')
        break;
      case "Soja":
        var iconn = require('../../assets/2.png')
        break;
      case "Raisin":
        var iconn = require('../../assets/13.png')
        break;
      case "Choux":
        var iconn = require('../../assets/2.png')
        break;
      default:
        var iconn = require('../../assets/vide.png')
    }

    return(
      <View style={style.pannierstyle}>
        <View style= {{ marginHorizontal:10, borderRadius:12, height:59,  backgroundColor:'inherit', }}>      
            <Image   
                  source={iconn} 
                  style={{height:46, width:59, paddingHorizontal:2, alignSelf:'center',}}       
                />     
        </View>
        <View style= {{ marginHorizontal:10, width:140, }} >     
            <Text style={{fontWeight: 'bold', fontSize: 14 , marginTop: 10, paddingBottom:5, paddingHorizontal:7, }}> 
                {plant.Product}  
              </Text> 
              <Text style={{fontSize: 14, fontWeight: 'bold', color:"green", paddingHorizontal:7,   }}> 
                  {plant.Price} F   
              </Text>  
              <View style={style.cardstyle2 } >  
              <Text style={{fontSize: 14,paddingHorizontal:7, }}>    
                  Quantité     
              </Text> 
              <View
                style={ 
                  style.cardButton }>
                <Pressable style={style.cardPressableButton} >
                    <Text
                    style={{fontSize: 15, color: "white", fontWeight: 'bold', textAlign:'center',}}>
                    -  
                  </Text>
              </Pressable>
            </View> 
            <Text style={{fontSize: 14 , }}>{plant.Quantity}</Text>   
              <View style={style.cardButton}> 
                <Pressable style={style.cardPressableButton}>   
                    <Text
                     style={{fontSize: 14, color: "white", fontWeight: 'bold', textAlign:'center',justifyContent:'center',}}>
                    +      
                  </Text> 
                </Pressable>
              </View>
            </View>
        </View>
       </View>     
    );     
  };

  const Card =({plant})=>{
    switch(plant.Product) {
      case "Tomate":
        var iconn = require('../../assets/tomato.png')
        break;
      case "Salade":
        var iconn = require('../../assets/salade.png')
        break;
      case "Blé":
        var iconn = require('../../assets/10.png')
        break;
      case "Soja":
        var iconn = require('../../assets/2.png')
        break;
      case "Raisin":
        var iconn = require('../../assets/13.png')
        break;
      case "Choux":
        var iconn = require('../../assets/2.png')
        break;
      default:
        var iconn = require('../../assets/vide.png')
    }
    return(
      <View style={style.cardstyle}>
         <View
            style={style.cardViewImage}> 
            <Image
              source={iconn} 
              style={{width: 100,height: 100}} 
            />
          </View> 

          <Text style={{fontWeight: 'bold', fontSize: 14 , marginTop: 10, paddingBottom:5, paddingHorizontal:7, }}> 
            {plant.Product}  
          </Text>
          <Text style={{fontSize: 14, fontWeight: 'bold', color:"green", paddingHorizontal:7,   }}> 
              {plant.Price} F   
          </Text>
          <View style={{ flexDirection:'row', alignItems:'center' }} >  
              <View >
                  <Text style={{fontSize: 14,  paddingHorizontal:7}}>    
                      Quantité     
                  </Text>
              </View>  
          <View style={style.cardstyle3 } >
                  <Text style={{fontSize: 14 , fontWeight:'bold'}}>{plant.Quantity}</Text>
                  <Text>Kg</Text>  
          </View>   
          </View>
          <Pressable style={style.logBox} onPress={() => setBasket((bas) => [...bas,{'id':plant.id,'Product':plant.Product,'Quantity':parseInt(plant.Quantity,10),'Price':parseInt(plant.Price,10),'idSeller':plant.idSeller}])}> 
              <Text style= {{textAlign: 'center', color:'#32A063'}} >Commander</Text> 
            </Pressable>
       </View>
    );
  };
    
    const Listcategory =()=>{
    return(
      <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false} 
      contentContainerStyle={style.mycategory}>
              { categories.map((item,index)=>
                <TouchableOpacity key={index} activeOpacity={0.8} onPress={({})=> myfiltre(index,item)} >
                  <View style={
                    [ style.categoryText,
                      selectedCategoryIndex == index && style.categoryTextSelected,
                    ]
                      }
                 >
                  <Text style={
                    [ style.colorText,
                      selectedCategoryIndex == index && style.categoryTextSelected,
                    ]
                      } 
                   > {item}</Text>
                  </View>
                </TouchableOpacity>
              )}
        
      </ScrollView>
    );
  };
    return (
        <SafeAreaView style= {{flex: 1,backgroundColor:"white"}}>
                <View style={style.headerDesign}>
                    <Pressable onPress={() => navigation.navigate("Conn")}>
                        <Image source={require('../../assets/arrow-back.png')}/>
                    </Pressable>
                        <Text style= {{fontSize: 20}} > MarketPlace</Text>
                    <Pressable onPress={() => setModalVisible(true)} > 
                        <Image source={require('../../assets/basket.png')} style={{width:28,height:28}}/>
                    </Pressable>
                </View>
                <View style={style.boxContainer}>           
                    <Pressable> 
                        <Image source={require('../../assets/search.png')}/> 
                    </Pressable>
                      <TextInput onChangeText={filter} style={style.designTextInput} placeholder='Recherche Produit'/>
                    <Pressable>
                      <Image source={require('../../assets/filtre.png')}/> 
                    </Pressable>
                </View>
                <View>
                <Text style= {{fontSize: 18}}>Nos Produits</Text>
                </View> 
            
            <View>
                <Listcategory/> 
                 
            </View>
                <FlatList
                  columnWrapperStyle={{justifyContent: 'space-between'}}
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={{
                    marginTop: 10,
                    paddingBottom: 30, 
                    paddingHorizontal:10, 
                  }}
                  numColumns={2}
                  data={filtreData}    
                  renderItem={({item}) => {
                    return <Card plant={item} />;
                  }}
                />   
            <Modal 
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}  
                >
                <View style={style.centeredView}>
                  <View style={style.modalView2}>
                    <Pressable onPress={() => setModalVisible(false)} >
                        <Image source={require('../../assets/arrow.png')} style={{width:24,height:24}}/>
                    </Pressable>
                      <Text style={{marginVertical:20,fontSize:20, alignSelf:'center', fontWeight: 'bold'}}>Mon Panier</Text> 
                      <FlatList  
                        data={basket}   
                        keyExtractor={item => item.id}
                        showsVerticalScrollIndicator={false}  
                        bounces={false}
                        renderItem={({item}) => {
                          return (
                            <Card2 plant={item} />
                          ); 
                        }}
                      />
                    <View style={{ marginBottom:10, marginTop:10}}>   
                        <Pressable style={style.boxcommande} onPress={switchComd}> 
                            <Text style= {{textAlign: 'center', color:'#FFFFFF'}} >Passer une commande</Text>
                        </Pressable>
                    </View>
                  </View>
                </View>
            </Modal>          
        </SafeAreaView>
    );
};
 
 
const style = StyleSheet.create({
    headerDesign:{
      paddingHorizontal: 20,
      marginTop: 20,
      flexDirection: 'row',
      justifyContent:'space-between',
    },
    boxContainer:{
      marginTop: 40,
      justifyContent:'space-between',
      alignSelf:'center',
      width:'90%',
      flexDirection:'row',
      alignItems:'center',
      borderRadius: 8,
      height:47,
      borderColor:'#000000',
      backgroundColor:'#F4F4F4',
      paddingHorizontal:10, 
      marginVertical: 5,
      marginBottom: 20,
      
    },
    designTextInput:{
      
      textAlign:'center',
    },
    mycategory:{
      flexDirection:'row',
      marginBottom:20,
      marginTop:30,
      justifyContent:'space-between',
      alignItems:'center',
      borderColor:'#32A063',
    }, 
    categoryText:{
      fontSize:16,
      height:34,
      width:80,
      marginRight:7,
      borderRadius:50,
      alignItems:'center',
      justifyContent:'center', 
      paddingHorizontal:5,
      flexDirection:'row', 
      alignContent:'center',
      borderColor:"green",
      borderWidth:1, 
        
        },
    cardstyle : {
      backgroundColor: "#F1F1F1",   
      width,   
      marginHorizontal:2,
      borderRadius:10,
      marginBottom:20,
      height:225,    
      marginHorizontal: 2,
    },
    cardButton : {
        height: 16,    
        width: 16,   
        backgroundColor: "green",
        borderRadius:50, 
        justifyContent: 'center',
        alignItems: 'center',  
    },
    cardPressableButton: {
      justifyContent: 'center',
      alignItems: 'center',
      flex:1,   
    },
    cardViewImage:{
      height: 100,
       alignItems: 'center',
    },
    cardImage:{
      flex: 1, 
      resizeMode: 'contain',
        
    },
    cardstyle2 : {
      flexDirection: 'row', 
       justifyContent: 'space-evenly',     
       marginTop: 5,     
    },
    cardstyle3 : {
      flexDirection: 'row', 
       justifyContent: 'space-between',  
       alignItems:'center',    
    },
    categoryTextSelected:{
      backgroundColor:'#32A063',
      color: "white", 
    },
    colorText:{
      color: "green", 
    },
    logBox: {
      marginTop:15, 
      borderRadius: 8,
      borderColor: "green", 
      backgroundColor: "white", 
      borderWidth:1, 
      width:150,   
      height:27, 
      justifyContent:'center', 
      alignSelf:'center',
       
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22, 
      justifyContent:'flex-end',   
    }, modalView2: {
      marginTop: 270,
      backgroundColor: "white",  
      borderRadius: 20,
      padding: 20,
       
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      width:"100%",
      height:600,       
    },
    pannierstyle: {
       height:100,
       marginBottom: 10, 
       width: 318,  
       alignItems:'center', 
       borderRadius:15, 
       backgroundColor:"#F1F1F1", 
       flexDirection:'row',  
       alignSelf:'center',      
    },
    boxcommande: {
      padding: 20,
      borderRadius: 50,
      width:258,  
      borderColor: '#f0f0f0',
      backgroundColor: '#32A063',  
      justifyContent:'flex-end', 
      alignSelf:'center',     
    },
     
    
});

export default Market;