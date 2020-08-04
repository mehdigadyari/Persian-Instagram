import React, { useState, useEffect } from 'react'
import { View, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import { Input } from 'react-native-elements'
import { Icon } from 'native-base'
import Constants from 'expo-constants'
import Tag from '../../components/tag'
import Sitem from '../../components/SearchItem'
import Layout from '../../constants/Layout'
import Logo from '../../assets/images/in1.png'
import StoryImg from '../../assets/images/splash.png'
import wall1 from '../../assets/images/wall1.png'
import wall2 from '../../assets/images/wall2.png'
import wall3 from '../../assets/images/wall3.png'


const styles = StyleSheet.create({
    root: {
        flex: 1,
        paddingTop: Constants.statusBarHeight
    },
    header: {
        width: "100%",
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
        flexDirection: 'row',
        marginRight: 0,
        padding: 8
    },
    tagsView: {
        borderBottomColor: "#00000022",
        borderBottomWidth: .5,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center'
    },

})

const index = () => {

    const [data, setdata] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)

        setTimeout(() => {
            setdata([
                {
                    id: 1, type: 1, data: [

                        { type: "post", img: wall1 },
                        { type: "post", img: wall2 },
                        { type: "igtv", img: wall3 },

                    ]
                },
                {
                    id: 2, type: 2, data: [

                        { type: "post", img: StoryImg },
                        { type: "post", img: wall3 },
                        { type: "post", img: wall1 },

                    ]
                },
                {
                    id: 3, type: 3, data: [

                        { type: "story", img: StoryImg },
                        { type: "post", img: wall3 },
                        { type: "post", img: wall2 },
                        { type: "post", img: wall3 },
                        { type: "post", img: wall1 },



                    ]
                },
            ])
            setLoading(false)
        }, 3000)
    }, [])
    return (
        <View style={styles.root}  >
            <View style={styles.header}>
                <Input
                    placeholder='Search'
                    leftIcon={
                        <Icon
                            name='search'
                            size={18}
                            style={{ color: "#a1a1a1" }}
                        />

                    }
                    leftIconContainerStyle={{ marginRight: 10 }}
                    inputContainerStyle={{
                        width: "99%",
                        height: 30,
                        alignSelf: 'center',
                        backgroundColor: "#a1a1a122",
                        borderBottomWidth: 0,
                        borderRadius: 10,
                        marginRight: 0,
                        marginLeft: 20,
                        // backgroundColor:"#000"
                    }}
                    inputStyle={{ color: "#000" }}
                    labelStyle={{ color: "#000" }}
                    placeholderTextColor="#a1a1a1"
                />
                <View style={{ marginRight: 15, marginLeft: -2, width: "10%", }} >
                    <Icon style={{ fontSize: 35 }} type='EvilIcons' name='minus' />
                </View>

            </View>


            <View style={styles.tagsView}>

                <Tag txt="IGTV" iconComponent={<Icon name="tv" type="Ionicons" style={{ fontSize: 19 }} />} />
                <Tag txt="Shop" iconComponent={<Icon name="basket" type="Ionicons" style={{ fontSize: 19 }} />} />
                <Tag txt="Science & Tech" iconComponent={<Icon name="tv" type="Ionicons" style={{ fontSize: 19 }} />} />
                <Tag txt="Shop" />
                <Tag txt="training" />
                <Tag txt="Science & Tech" />

            </View>


            <FlatList
                data={data}
                renderItem={({ item }) => {
                    if (item.type === 1) {
                        return (

                            <View style={{ flexDirection: "column", height: (Layout.window.width * 2) / 3, flexWrap: 'wrap' }} >
                                <Sitem type="post" img={item.data[0].img} />
                                <Sitem type="post" img={item.data[1].img} />
                                <Sitem type="igtv" img={item.data[2].img} />
                            </View>
                        )
                    } else if (item.type === 2) {
                        return (
                            <View style={{ flexDirection: "row", }} >
                                <Sitem type="post" img={item.data[0].img} />
                                <Sitem type="post" img={item.data[1].img} />
                                <Sitem type="post" img={item.data[2].img} />
                            </View>
                        )
                    } else {
                        return (
                            <View style={{ flexDirection: "column", height: (Layout.window.width * 2) / 3, flexWrap: 'wrap' }} >
                                <Sitem type="story" img={item.data[0].img} />
                                <Sitem type="post" img={item.data[1].img} />
                                <Sitem type="post" img={item.data[2].img} />
                                <Sitem type="post" img={item.data[3].img} />
                                <Sitem type="post" img={item.data[4].img} />
                            </View>
                        )
                    }

                }}
                keyExtractor={(item) => item.id + ""}

            />


        </View>
    )
}

export default index
