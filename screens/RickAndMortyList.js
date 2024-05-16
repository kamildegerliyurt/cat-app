import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { SafeAreaView } from 'react-native-safe-area-context'

import {UserInfo, SearchBar} from '../components/'


const RickAndMortyList = ({navigation}) => {
//---------------------------------------------
const [users, setUsers]= useState([])
const [searchData, setSearchData]= useState("")
const [filterList, setFilterList]= useState([])
//---------------------------------------------

useEffect(() => {
   (async()=>{
     fetch("https://dummyjson.com/users")
       .then(resp =>resp.json())
       .then(json=> setUsers(json.users))
   })();
}, [])
//---------------------------------------------
const handleSearchData = (value)=> {
    setSearchData(value)

const filtered = users.filter((item)=>
  item.firstName.toLowerCase().includes(searchData.toLowerCase())
)

setFilterList(filtered)

}
//---------------------------------------------





  return (
    <SafeAreaView style={styles.rickAndMortyContainer}>
      <SearchBar getSearchData={handleSearchData}/>
      <View style={styles.rickFlatListContainer}>
        <FlatList data={filterList.length > 0 ? filterList : users}
                  numColumns={(2)}
                  contentContainerStyle={{ alignItems:"center", justifyContent:"center"}}
                  showsVerticalScrollIndicator={false}
                  alwaysBounceVertical={false}
                  decelerationRate={"fast"}
                  keyExtractor={(item)=> item.id}
                  renderItem={({item})=> {
                    return(
                        <UserInfo data={item}/>
                    )
                  }}/>
      </View>
    </SafeAreaView>
  )
}

export default RickAndMortyList

const styles = StyleSheet.create({
    rickAndMortyContainer: {
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#FFA1F5",
    },
    rickFlatListContainer: {
        flex:1,
        width:"95%",
        alignItems:"center",
        justifyContent:"center",
    }
})