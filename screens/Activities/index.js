import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import { Header, Image, SearchBar } from 'react-native-elements'
import { Icon } from 'native-base'
import Logo from '../../assets/images/in1.png'
import StoryImg from '../../assets/images/splash.png'
import wall1 from '../../assets/images/wall1.png'
import wall2 from '../../assets/images/wall2.png'
import wall3 from '../../assets/images/wall3.png'
import Story from '../../components/Story'
import Post from '../../components/Post'
import Like from '../../components/Like'
import { Facebook } from 'react-content-loader'

const styles = StyleSheet.create({
    root: {
        flex: 1
    },
    header: {
        borderBottomColor: "#00000022",
        borderBottomWidth: 1,
        height: 65
    },
    BackIcon: {
        fontSize: 20,
        color: "#000000aa"
    },
    Fview:{
        borderBottomColor: "#00000011",
        borderBottomWidth: 1,
        height: 30,
        padding:5,
        flexDirection:'row'
    },
    Fview2:{
        width:7,
        height:7,
        backgroundColor:"#2196F3",
        borderRadius:30,
        marginLeft:270,
        marginTop:7
    },

    Ftext:{
     fontSize:12,
     color: "#000000aa"
    },
    Ftext2:{
        marginLeft:10,
        marginTop:2,
        fontSize:10,
        color: "#9E9E9E"
    }
})
const index = ({ navigation }) => {


    const [data, setData] = useState([])

    useEffect(() => {
        setTimeout(() => {
            setData(
                [{ id: 1, name: "mehdi", username: "mehdi_gadyari", Limg: StoryImg, isFollowing: true },
                { id: 2, name: "alireza", username: "alihossein_gadyari", Limg: wall2, isFollowing: false },
                { id: 3, name: "mehdi", username: "mehdi_gadyari", Limg: StoryImg, isFollowing: true },
                { id: 4, name: "alireza", username: "alihossein_gadyari", Limg: wall3, isFollowing: false },
                { id: 5, name: "mehdi", username: "mehdi_gadyari", Limg: StoryImg, isFollowing: true },
                { id: 6, name: "alireza", username: "alihossein_gadyari", Limg: wall2, isFollowing: false },
                { id: 7, name: "mehdi", username: "mehdi_gadyari", Limg: StoryImg, isFollowing: true },
                { id: 8, name: "alireza", username: "alihossein_gadyari", Limg: wall3, isFollowing: false },
                { id: 9, name: "mehdi", username: "mehdi_gadyari", Limg: StoryImg, isFollowing: true },
                { id: 10, name: "alireza", username: "alihossein_gadyari", Limg: wall1, isFollowing: false },
                ]
            )
        }, 3000)
    }, [])


    return (
        <View style={styles.root} >
            <Header
                backgroundColor="#FFF"
                containerStyle={styles.header}
                
                centerComponent={
                    <Text>Activity</Text>
                }
            />
            <View style={styles.Fview}>
            <Text style={styles.Ftext}>Follow Requests</Text>
            
            <View style={styles.Fview2}></View>
            <Text style={styles.Ftext2}>340</Text>
            </View>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <Like
                        name={item.name}
                        username={item.username}
                        Limg={item.Limg}
                        isFollowing={item.isFollowing}
                    />
                )}
                keyExtractor={item => item.id + ""}
            />

        </View>
    )
}

export default index
