import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import { Header, Input } from 'react-native-elements'
import { Icon, Footer, FooterTab, Button } from 'native-base'
import Logo from '../../assets/images/in1.png'
import StoryImg from '../../assets/images/splash.png'
import wall1 from '../../assets/images/wall1.png'
import wall2 from '../../assets/images/wall2.png'
import wall3 from '../../assets/images/wall3.png'
import Story from '../../components/Story'
import Post from '../../components/Post'
import Direct from '../../components/Direct'
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
    TdirectIcon: {
        flexDirection: 'row', padding: 5
    },
    directIcon: {
        fontSize: 20
        ,color:"#BDBDBD"
    },
    BackIcon: {
        fontSize: 20,
        color: "#000000aa"
    },
})
const LikeSheet = ({ navigation }) => {


    const [data, setData] = useState([])

    useEffect(() => {
        setTimeout(() => {
            setData(
                [{ id: 1, name: "mehdi", username: "mehdi_gadyari", Limg: StoryImg, },
                { id: 2, name: "alireza", username: "alihossein_gadyari", Limg: wall2, },
                { id: 3, name: "mehdi", username: "mehdi_gadyari", Limg: StoryImg, },
                { id: 4, name: "alireza", username: "alihossein_gadyari", Limg: wall3, },
                { id: 5, name: "mehdi", username: "mehdi_gadyari", Limg: StoryImg, },
                { id: 6, name: "alireza", username: "alihossein_gadyari", Limg: wall2, },
                { id: 7, name: "mehdi", username: "mehdi_gadyari", Limg: StoryImg, },
                { id: 8, name: "alireza", username: "alihossein_gadyari", Limg: wall3, },
                { id: 9, name: "mehdi", username: "mehdi_gadyari", Limg: StoryImg, },
                { id: 10, name: "alireza", username: "alihossein_gadyari", Limg: wall1, },
                ]
            )
        }, 1000)
    }, [])


    return (
        <View style={styles.root} >
            <Header
                backgroundColor="#FFF"
                containerStyle={styles.header}
                leftComponent={
                    <TouchableOpacity onPress={() => navigation.goBack()} >
                        <Icon style={styles.BackIcon} name='arrow-back' type='Ionicons' />
                    </TouchableOpacity>
                }
                rightComponent={

                    <TouchableOpacity style={styles.TdirectIcon}
                    >
                        <Icon style={[styles.directIcon, { marginRight: 25 }]} name='videocam' type='Ionicons' />
                        <Icon style={styles.directIcon} name='thunderstorm' type='Ionicons' />
                    </TouchableOpacity>
                }
                centerComponent={
                    <TouchableOpacity onPress={() => setAddAccountModal(true)} style={{ flexDirection: 'row' }} >
                        <Text style={{ fontSize: 12 }}  >mehdi_gadyari</Text>
                        <Icon style={styles.directIcon} name='chevron-down' type='EvilIcons' />

                    </TouchableOpacity>
                }
            />



            <Input
                placeholder='Search'
                leftIcon={
                    <Icon
                        name='search'
                        size={15}
                        style={{ color: "#a1a1a1" }}
                    />

                }
                leftIconContainerStyle={{ marginRight: 10 }}
                inputContainerStyle={{
                    width: "100%",
                    height: 30,
                    alignSelf: 'center',
                    backgroundColor: "#a1a1a122",
                    borderBottomWidth: 0,
                    borderRadius: 10,
                    marginRight: 0,
                    marginLeft: 0,
                    marginTop: 5
                    // backgroundColor:"#000"
                }}
                inputStyle={{ color: "#000" }}
                labelStyle={{ color: "#000" }}
                placeholderTextColor="#a1a1a1"
            />



            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <Direct
                        name={item.name}
                        username={item.username}
                        Limg={item.Limg}

                    />
                )}
                keyExtractor={item => item.id + ""}
            />


            <Footer  >
                <FooterTab style={{ backgroundColor: "#FAFAFA" }} >
                    <Button style={{
                        backgroundColor: "#FAFAFA",
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }} full>
                        <Icon style={{ fontSize: 20, color: "#2196F3" }} name="camera" type="EvilIcons" />
                        <Text style={{ color: "#64B5F6", marginLeft: -10 }} >Camera</Text>
                    </Button>
                </FooterTab>
            </Footer>


        </View>
    )
}

export default LikeSheet
