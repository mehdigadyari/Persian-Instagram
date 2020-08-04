import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Thumbnail, Icon } from 'native-base'
import Q1 from '../assets/images/q1.jpg'

const styles = StyleSheet.create({
    root: {
        width: 45,
        height: 45,
        margin: 10,
        // marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: "#f00"
    },
    imgView: {
        borderRadius: 35,

        width: 60,
        height: 60,
        padding: 1,
        marginTop: 7
    },
    thumbStyle: {
        width: "100%",
        height: "100%"
    },
    Fview2: {
        width: 15,
        height: 15,
        backgroundColor: "#2196F3",
        borderRadius: 30,
        borderColor: "#FFF",
        borderWidth: 1.5,
        marginLeft: 270,
        marginTop: 7,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:47,
        marginTop:-18
    },
    addIcon: {
        fontSize: 15,
        color: "#FFF"
    }
})

const ProfilePhoto = ({ name, imgUri, seen }) => {
    return (
        <TouchableOpacity>
            <View style={styles.root} >
                <View style={styles.imgView} >
                    <Thumbnail style={styles.thumbStyle} source={Q1} />
                <View style={styles.Fview2}>
                    <Icon style={styles.addIcon} name="add" type="Ionicons" />
                </View>
                </View>
            </View>

        </TouchableOpacity>
    )
}

export default ProfilePhoto
