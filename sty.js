import { StyleSheet, Dimensions } from "react-native";

const {height, width} = Dimensions.get('window');
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
console.log(Width, Height)

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    conteneurparent:{
        padding:80,
        backgroundColor: '#1b98e0',
    },
    conteneur:{
      backgroundColor: '#1b98e0',
      alignItems: 'center',
      marginBottom:120,
      height:"100%"
    },
    conteneur2:{
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingVertical:40,
        height:"100%"
    },
    conteneur3:{
      backgroundColor: '#fff',
      alignItems: 'center',
      marginBottom:120,
      height:"100%"
  },
    content:{
      backgroundColor: '#F5FAF3',
      justifyContent: 'center',
    },
    block:{
        alignItems:'center',
        marginVertical:27
    },
    view:{
        backgroundColor: '#62B8F6',
        opacity:0.9,
        borderRadius:30,
        marginTop:10,
        width:358
    },
    viewalt:{
        backgroundColor: '#FF6363',
        opacity:0.9,
        borderRadius:30,
        marginTop:10,
        width:358
    },
    viewer:{
        
    },
    v1:{
        marginVertical:40,
        fontSize:32,
        color:"#FFFFFF"
    },
    v2:{
        marginVertical:10,
        fontSize:18,
        color:"#FFFFFF"
    },
    v3:{
        marginTop:10,
        marginBottom:5,
        fontSize:72,
        color:"#FFFFFF"
    },
    v4:{
        fontSize:18,
        color:"#FFFFFF"
    },
    viewer1:{
        justifyContent:'center',
        alignItems:'center',
    },
    viewer2:{
        flexDirection:'row',
        justifyContent:'center',
        flexWrap:'wrap',
        padding:10
    },
    viewer3:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'center',
    },
    boxx:{
        width:152,
        height:168,
        backgroundColor:'#85F4FF',
        margin:10,
        borderRadius:20
    },
    first:{
        width:"100%",
        height:"30%",
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    two:{
        width:"100%",
        height:"30%",
        justifyContent:'center',
        alignItems:'center',
    },
    ttt:{
        fontSize:36,
        color:"#FFFFFF",
    },
    miniviewer:{
        flexDirection:'row',
        padding:10,
        justifyContent:'center',
        alignItems:'center',
    },
    miniviewerr:{
        flexDirection:'row',
        padding:10,
        marginLeft:10,
        justifyContent:'center',
        alignItems:'center',
    },
    ecrit:{
        color:"#FFFFFF",
        marginLeft:10,
    },  
    minivu:{

    },
    image: {
        width:361,
        height:379
    },
    imagee: {
        width:412,
        height:200,
        top:22
    },
    cot:{
        width:369,
        flexDirection:'row',
        justifyContent: 'flex-end',
        paddingRight:10,
        marginBottom:10,
        marginTop:40 
    },
    title:{
        fontSize: 24,
        fontWeight:'bold',
        color: '#32A063',
        marginTop:10,
        marginBottom:10
    },
    title1:{
        fontSize: 28,
        fontWeight:'bold',
        color: '#000',
        marginTop:195,
        marginBottom:10,
        marginLeft:40
    },
    inf:{
        color:"#939393",
        marginLeft:40
    },
    inff:{
        color:"#939393",
        marginLeft:150
    },
    infff:{
        color:"#d00000",
        marginTop:10
    },
    input:{
        borderWidth: 1,
        padding: 10,
        width:312,
        height: 47,
        margin: 10,
        borderColor:"#ADCF9F",
        borderRadius:8,
        backgroundColor:'#FFFFFF',
    },
    pp:{
        fontSize: 18
    },
    saut:{
        width:86,
        height:31,
        backgroundColor: '#ADCF9F',
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center'
    },
    saul:{},
    contslide:{
        flex: 1,
        paddingVertical:50,
        alignItems:"center",
        backgroundColor:'#fff'
    },  
    desc:{
        fontSize: 16,
        color:'#939393',
        marginVertical:20
    },
    cont: {
        width:390,
        padding:20,
        alignItems:'center',
    },
    para:{
        flexDirection:'row',
        alignItems:'center',
    },
    but:{
        width:298,
        height:56,
        paddingHorizontal:10,
        backgroundColor:'#32A063',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        marginBottom:10
    },
    but1:{
        width:298,
        height:56,
        paddingHorizontal:10,
        backgroundColor:'#32A063',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        margin:34,
        marginTop:50
    },
    int:{
        color:'#fff',
        fontSize:20
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        marginTop: 250,
        backgroundColor: "#ADCF9F",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width:"100%",
        height:600
      },
      modalView2: {
        marginTop: 270,
        backgroundColor: "#ADCF9F",
        borderRadius: 20,
        padding: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width:"100%",
        height:600
      },
      modalText: {
        marginTop : 35,
        marginBottom: 15,
        textAlign: "center",
        fontSize:18,
        color:'#000'
      },
      bas:{
          flexDirection:'row',
          alignItems:'center',
      },
      notaccount:{
          fontSize:18,
      },
      azy:{
          width:"100%",
          alignItems:'center',
          flexDirection:'row',
          marginTop:60,
      },
      arrow:{
          marginLeft:20,
      },
      middle:{
          marginLeft:72,
          fontSize:16,
      },
      reg:{
          width:"100%",
          backgroundColor:'#fff',
          justifyContent:'center',
      },
      deo:{
          width:331,
          margin:20,
          backgroundColor:'grey',
          height:216,
          borderRadius:20
      },
      ecrito:{
          fontSize:18,
          margin:10
      },
      action:{
        width:331,
        marginTop:20,
        marginLeft:20,
        marginBottom:10,
        backgroundColor:'#F7F7F7',
        height:87,
        borderRadius:12,
        flexDirection:'row',
        alignItems:'center',
        padding:20,
    },
    side:{
        marginLeft:20,
        marginRight:20,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
    },
    tside:{
        marginLeft:10
    },

    headerDesign:{
        marginTop: 10,
        width:"100%",
        flexDirection: 'row',
        justifyContent:'space-evenly'
      },
      boxContainer:{
        marginTop: 60,
        alignSelf:'center',
        width:'90%',
        
      },
      designTextInput:{
        borderRadius: 8,
        height:47,
        borderColor:'#000000',
        backgroundColor:'#F4F4F4',
        paddingHorizontal:10,
        marginTop: 15,
        marginBottom: 20,
        
      },
      logBox: {
        padding: 20,
        borderRadius: 8,
        borderColor: '#f0f0f0',
        backgroundColor: '#32A063', 
        
      },
      cmd:{
          alignItems:'center',
          flexDirection:'row',
          width:319,
          height:82,
          marginVertical:10,
          borderRadius:12,
          padding:10,
          backgroundColor:'#F2F2F2',
          justifyContent:'space-between'
      },
      vid:{
          width:"100%",
          height:"100%",
          borderRadius:16
      },

      deco:{
          backgroundColor:"#FFFFFF",
          borderRadius:50,
          marginTop:40,
          justifyContent:"center",
          alignItems:"center",
          padding:15,
          shadowColor: "#000",
          shadowOffset: {
            width : 2,
            height: 4
          },
          shadowOpacity: 0.25,
          shadowRadius: 4,
      },

      // Marketplace 
        headerDesign2:{
          paddingHorizontal: 20,
          marginTop: 20,
          flexDirection: 'row',
          justifyContent:'space-between',
        },
        boxContainer2:{
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
        designTextInput2:{
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
        prod:{
            flexDirection:'row',
            justifyContent:"space-evenly",
            alignItems:"center",
            borderColor:'#000000',
            backgroundColor:'#F4F4F4',
            borderRadius: 8,
        },
        cardstyle : {
          backgroundColor: "#F1F1F1",   
          width,   
          marginHorizontal:2,
          borderRadius:10,
          marginBottom:20,
          height:225,                
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
        logBox2: {
          marginTop:15, 
          borderRadius: 8,
          borderColor: "green", 
          backgroundColor:"white",
          borderWidth:1, 
          width:150,   
          height:27, 
          justifyContent:'center', 
          alignSelf:'center',
           
        },
        centeredView2: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 22,    
        },
        modalView21: {
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
        homm:{
          flex: 1,
          justifyContent:'center',
          alignItems:'center',
          backgroundColor:'white',
          padding: 20,
          width: Width,
          height: Height
        }
  });

export default styles;