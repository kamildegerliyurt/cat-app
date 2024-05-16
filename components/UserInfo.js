import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const UserInfo = (props) => {
//---------------------------
const data = props.data
const name = data.firstName
const lastName = data.lastName
const image = data.image
//---------------------------
const navigation = useNavigation();
//---------------------------
const handleButton = ()=> {
    navigation.navigate("RickAndMortyDetails",
        {
            data: props.data
        }
    )
}
//---------------------------

  return (
    <View style={styles.userInfoContainer}>
      <Pressable style={({pressed})=> [{transform: [{translateY: pressed ? 3: 0}]},styles.buttonContainer]}
                 onPress={handleButton}>
        <Image style={{width:100, height:100, resizeMode:"center"}}
            source={{uri: image}}/>


        <View style={styles.topContainer}>
            <Text style={styles.nameText}>{name}</Text>
            <Text style={styles.lastNameText}>{lastName}</Text>
        </View>
      </Pressable>


    </View>
  )
}

export default UserInfo

const styles = StyleSheet.create({
    userInfoContainer: {
        margin:15,
        width:"40%",
        height:200,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#BC7AF9",
        borderRadius:10,
    },
    topContainer: {
        width:"100%",
        alignItems:"center",
        justifyContent:"space-evenly",
        flexDirection:"row",
        // borderWidth:2,
        // borderColor:"green",
        marginTop:20,
        borderRadius:10,
        
    },
    nameText: {
        fontSize:15,
        fontWeight:"bold",
       
    },
    lastNameText: {
        fontSize:15,
        fontWeight:"bold",
        
    },
    buttonContainer: {
        alignItems:"center",
        justifyContent:"center",
    }
})