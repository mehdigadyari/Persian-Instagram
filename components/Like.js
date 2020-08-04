import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import wall2 from '../assets/images/wall2.png'
import { Button } from 'native-base'

const styles = StyleSheet.create({

    root: {
        padding: 5,
        width: "90%",
        height: 50,
        marginTop: 1,
        marginBottom: 2,
        flexDirection: 'row',
        borderBottomColor: "#a1a1a1",
        borderBottomWidth: 0

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
         marginLeft:10
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
    btnFollow: {
        padding: 10,
        width: 60,
        height:16,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    txtFollow: {
        fontSize: 8,
        textAlign: 'center'
    },
   
})


const Like = ({ username, name, isFollowing, Limg }) => {
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
                <Button success={isFollowing} small style={styles.btnFollow}  >
                    <Text style={[styles.txtFollow, { color: isFollowing ? "#FFF" : "#000" }]} >
                        {isFollowing ? 'Following' : 'Follow'}
                    </Text>
                </Button>
            </View>
        </View>
    )
}

export default Like
