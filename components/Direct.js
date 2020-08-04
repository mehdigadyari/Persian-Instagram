import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import wall2 from '../assets/images/wall2.png'
import { Button, Icon } from 'native-base'

const styles = StyleSheet.create({

    root: {
        padding: 5,
        width: "99.5%",
        height: 50,
        marginTop: 1,
        marginBottom: 2,
        flexDirection: 'row',
        borderBottomColor: "#a1a1a1",
        borderBottomWidth: 0,
        // backgroundColor:"#000"        

    },

    imgView: {
        width: 35,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    pImg: {
        width: 35,
        height: 35,
        borderRadius: 30,
        marginLeft: 10
    },
    nameView: {
        flex: 1,
        height: 50,
        justifyContent: 'center',
        paddingLeft: 10
    },
    viewFollow: {
        width: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },

    camIcon: { fontSize: 30,marginLeft:-6 },
})


const Direct = ({ username, name, Limg }) => {
    return (
        <View style={styles.root} >
            <View style={styles.imgView}>
                <Image
                    style={styles.pImg}
                    source={Limg}
                />

            </View>
            <View style={styles.nameView} >
                <Text style={{ fontSize: 8, }}  >{username}</Text>
                <Text style={{ fontSize: 8, color: "#BDBDBD" }} > {name} </Text>
            </View>
            <View style={styles.viewFollow} >
                <TouchableOpacity>
                    <Icon style={styles.camIcon} name="camera" type="EvilIcons" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Direct
