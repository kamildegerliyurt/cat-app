import { StyleSheet, Text, View, Image, Pressable, Linking } from 'react-native'
import React from 'react'

const RickAndMortyDetails = ({route, navigation}) => {
//------------------------------
const total = route.params.data
const firstName = total.firstName
const lastName = total.lastName
const image = total.image
const age = total.age
const gender = total.gender
const birthDate = total.birthDate
const bloodGroup = total.bloodGroup
const height = total.height
const weight = total.weight
const EyeColor =total.eyeColor
const HairColor = total.hair.color
const HairType = total.hair.type
const address = total.address.address
const city = total.address.city
const email = total.email
const phone = total.phone
const domainsArray = total.domain
//------------------------------


  return (
    <View style={styles.rickAndMortyDetailsContainer}>



     <Image style={{width:200, height:200, resizeMode:"cover"}}
            source={{uri: image}}/>




      <View style={styles.topContainer}>
        <Text style={{fontSize:20, fontWeight:"bold"}}>{firstName}</Text>
        <Text style={{fontSize:20, fontWeight:"bold"}}>{lastName}</Text>
      </View>



      <View style={styles.middleContainer}>
        <Text style={{fontSize:20, }}>Age: {age}</Text>
        <Text style={{fontSize:20, }}>Gender: {gender}</Text>
        <Text style={{fontSize:20, }}>BirthDate: {birthDate}</Text>
        <Text style={{fontSize:20, }}>BloodGroup: {bloodGroup}</Text>
        <Text style={{fontSize:20, }}>Height/Weight: {height} {weight}</Text>
        <Text style={{fontSize:20, }}>EyeColor: {EyeColor}</Text>
        <Text style={{fontSize:20, }}>HairColor: {HairColor}</Text>
        <Text style={{fontSize:20, }}>HairType: {HairType}</Text>
      </View>


      <View style={styles.downContainer}>
        <Text style={{fontSize:20, }}>Adress: {address}</Text>
        <Text style={{fontSize:20, }}>City: {city}</Text>
        <Text style={{fontSize:20, }}>Email: {email}</Text>
        <Text style={{fontSize:20, }}>Phone: {phone}</Text>
      </View>


      <View style={styles.otherContainer}>
          <Text style={{ fontSize:20, 
                         fontWeight:"bold", 
                         color:"#0079FF", 
                         fontSize:30,}}>Link: {domainsArray}</Text>
      </View>


    </View>
  )
}

export default RickAndMortyDetails

const styles = StyleSheet.create({
  rickAndMortyDetailsContainer: {
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#FFA1F5",
  },
  topContainer: {
    alignItems:"center",
    justifyContent:"space-evenly",
    width:"50%",
    flexDirection:"row",
    marginVertical:10,
    backgroundColor:"#BC7AF9",
    borderRadius:10,
    padding:5,
  },
  middleContainer: {
    width:"95%",
    backgroundColor:"#BC7AF9",
    borderRadius:10,
    paddingLeft:10,
    
    
  },
  downContainer: {
    width:"95%",
    marginTop:10,
    backgroundColor:"#BC7AF9",
    borderRadius:10,
    paddingLeft:10,
    
  },
  otherContainer: {
    paddingVertical:5,
    width:"95%",
    marginTop:10,
    paddingLeft:10,
    backgroundColor:"#BC7AF9",
    borderRadius:10,
    
  }
})