import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native'
import { Thumbnail, Icon } from 'native-base'
import Iphone from '../assets/images/iphone.png'
import Q1 from '../assets/images/q1.jpg'
import Q2 from '../assets/images/q2.jpg'
import Q3 from '../assets/images/q3.jpg'
import wall3 from '../assets/images/wall3.png'
import Modal from 'react-native-modal'
import { Input } from 'react-native-elements'
import ImModal from './ImModal'
const styles = StyleSheet.create({
    root: {
        width: "100%",
        marginBottom: 5,
        // backgroundColor: "#a1a1a1"
    },
    header: {
        height: 40,
        borderBottomColor: "#00000022",
        borderBottomWidth: .4,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10
    },
    avatar: {
        width: 30,
        height: 30
    },
    name: {
        marginLeft: 10,
        fontSize: 10,
        // backgroundColor: "#f00",
        flex: 1
    },
    postImg: {
        width: "100%",
        height: 200
    },
    action: {
        height: 30,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10
    },
    iconAction0: {
        marginRight: 5,
        fontSize: 17,
        color: "#000000aa",

    },
    iconAction: {
        marginRight: 5,
        fontSize: 20,
        color: "#000000aa",

    },

    iconAction3: {
        marginRight: 5,
        marginLeft: "77%",
        fontSize: 20,
        color: "#00000077",

    },
    likes: {
        height: 20,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10
    },
    avatar2: {
        width: 15,
        height: 15,
        marginRight: -5
    },
    caption: {

        justifyContent: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5
    },
    likesText: {
        fontSize: 8,
        color: "#000000aa",
        marginLeft: 15
    },
    captionText: {
        fontSize: 10
    },
    timeText: {
        fontSize: 8,
        color: "gray"
    }
})

const Post = ({ name, image, navigation }) => {

    const [like, setLike] = useState(false)
    const [menuModal, setMenuModal] = useState(false)
    const [shareModal, setShareModal] = useState(false)
    const [data, setData] = useState([])

    useEffect(() => {
        setTimeout(() => {
            setData(
                [{ id: 1, name: "mehdi", username: "mehdi_gadyari", Limg: Q1, },
                { id: 2, name: "alireza", username: "alihossein_gadyari", Limg: Q2, },
                { id: 3, name: "mehdi", username: "mehdi_gadyari", Limg: Q3, },
                { id: 4, name: "alireza", username: "alihossein_gadyari", Limg: wall3, },
                { id: 5, name: "mehdi", username: "mehdi_gadyari", Limg: Q2, },
                { id: 6, name: "alireza", username: "alihossein_gadyari", Limg: Q1, },

                ]
            )
        }, 1000)
    }, [])




    return (
        <View style={styles.root} >
            <View style={styles.header} >
                <Thumbnail style={styles.avatar} small source={wall3} />
                <Text style={styles.name} >{name}</Text>
                <TouchableOpacity onPress={() => setMenuModal(true)}>
                    <Icon style={{ fontSize: 14, color: "#00000088" }}
                        type='FontAwesome' name="ellipsis-h" />

                </TouchableOpacity>

            </View>

            <Image
                source={image}
                style={styles.postImg}
            />
            <View style={styles.action} >
                <Icon onPress={() => setLike(like => !like)}
                    style={[styles.iconAction0,
                    { color: like ? "#f00" : "#000000aa" }]}
                    name={like ? "favorite" : "favorite-border"}
                    type="MaterialIcons" />
                <Icon style={styles.iconAction} name="comment" type="EvilIcons" />

                <TouchableOpacity onPress={() => setShareModal(true)}>
                    <Icon style={styles.iconAction} name="paper-plane" type="Ionicons" />

                </TouchableOpacity>



                <Icon style={styles.iconAction3} name="bookmark" type="Ionicons" />
            </View>


            <View style={styles.likes}  >
                <Thumbnail style={styles.avatar2} small source={Q2} />
                <Thumbnail style={styles.avatar2} small source={Q2} />
                <Thumbnail style={styles.avatar2} small source={Q2} />
                <Thumbnail style={styles.avatar2} small source={wall3} />
                <TouchableOpacity
                    onPress={() => navigation.navigate('Likes')} >

                    <Text style={styles.likesText} >Like by mehdigad and 10000 others</Text>

                </TouchableOpacity>
            </View>

            <View style={styles.caption} >
                <Text style={styles.captionText} >
                    Ullamco occaecat in cupidatat anim ex pariatur laborum cillum reprehenderit commodo.
            </Text>
                <Text style={styles.timeText} >View all 3 comments</Text>
                <Text style={styles.timeText} >Add a comment...</Text>
                <Text style={styles.timeText} >4 hours ago</Text>
            </View>



            <Modal
                isVisible={shareModal}
                onBackdropPress={() => setShareModal(false)}
                onBackButtonPress={() => setShareModal(false)}
                style={{ width: "100%", margin: 0, justifyContent: "flex-end", }}
            >

                <View style={{

                    width: "100%",
                    height: 400,
                    backgroundColor: "#FFF",
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10
                }} >
                    <View style={{
                        width: 50,
                        height: 3,
                        backgroundColor: "#a1a1a1",
                        alignSelf: 'center'
                        , borderRadius: 5,
                        marginTop: 4
                    }} ></View>




                    <Input
                        placeholder='Search'
                        leftIcon={
                            <Icon
                                name='search'
                                size={5}
                                style={{ color: "#a1a1a1", fontSize: 20 }}
                            />

                        }
                        rightIcon={
                            <Icon
                                name='add'
                                size={5}
                                style={{ color: "#a1a1a1", fontSize: 20 }}
                            />
                        }
                        leftIconContainerStyle={{ marginRight: 10 }}
                        rightIconContainerStyle={{ marginRight: 7 }}
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

                        }}
                        inputStyle={{ color: "#000" }}
                        labelStyle={{ color: "#000" }}
                        placeholderTextColor="#a1a1a1"
                    />

                    <FlatList
                        data={data}
                        renderItem={({ item }) => (
                            <ImModal
                                name={item.name}
                                username={item.username}
                                Limg={item.Limg}

                            />
                        )}
                        keyExtractor={item => item.id + ""}
                    />



                </View>


                <View style={{
                    width: "100%",
                    height: 50,
                    backgroundColor: "#E0E0E0",
                    justifyContent: 'center',
                    alignItems: 'center'

                }} >
                    <Text style={{ color: "#FFF", fontSize: 15 }} >Send</Text>

                </View>
            </Modal>


            <Modal
                animationOut='jello'

                isVisible={menuModal}
                onBackdropPress={() => setMenuModal(false)}
                onBackButtonPress={() => setMenuModal(false)}
                style={{
                    width: "100%",
                    marginBottom: 10,
                    marginLeft: 5,
                    justifyContent: "flex-end",
                    alignItems: "center",
                    alignContent: 'center'
                }}
            >
                <View style={{
                    width: "90%",
                    height: 250,
                    backgroundColor: "#FFF",
                    borderRadius: 10,
                    marginBottom: 10
                }} >



                    <TouchableOpacity style={{
                        height: 40,
                        width: "100%",
                        justifyContent: 'center',
                        alignItems: 'center'
                    }} >

                        <View style={{
                            height: "100%",
                            width: "100%",
                            borderBottomColor: "#a1a1a111",
                            borderBottomWidth: 1,
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingBottom: 10,
                            paddingTop: 10
                        }} >

                            <Text style={{ fontSize: 15, color: "red" }}  >Report</Text>

                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        height: 40,
                        width: "100%",
                        justifyContent: 'center',
                        alignItems: 'center'
                    }} >

                        <View style={{
                            height: "100%",
                            width: "100%",
                            borderBottomColor: "#a1a1a111",
                            borderBottomWidth: 1,
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingBottom: 10,
                            paddingTop: 10
                        }} >

                            <Text style={{ fontSize: 15, }}  >Mute</Text>

                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        height: 40,
                        width: "100%",
                        justifyContent: 'center',
                        alignItems: 'center'
                    }} >

                        <View style={{
                            height: "100%",
                            width: "100%",
                            borderBottomColor: "#a1a1a111",
                            borderBottomWidth: 1,
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingBottom: 10,
                            paddingTop: 10
                        }} >

                            <Text style={{ fontSize: 15, }}  >Unfollow</Text>

                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        height: 40,
                        width: "100%",
                        justifyContent: 'center',
                        alignItems: 'center'
                    }} >

                        <View style={{
                            height: "100%",
                            width: "100%",
                            borderBottomColor: "#a1a1a111",
                            borderBottomWidth: 1,
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingBottom: 10,
                            paddingTop: 10
                        }} >

                            <Text style={{ fontSize: 15, }}  >Copy Link</Text>

                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        height: 40,
                        width: "100%",
                        justifyContent: 'center',
                        alignItems: 'center'
                    }} >

                        <View style={{
                            height: "100%",
                            width: "100%",
                            borderBottomColor: "#a1a1a111",
                            borderBottomWidth: 1,
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingBottom: 10,
                            paddingTop: 10
                        }} >

                            <Text style={{ fontSize: 15, }}  >Share to...</Text>

                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        height: 40,
                        width: "100%",
                        justifyContent: 'center',
                        alignItems: 'center'
                    }} >

                        <View style={{
                            height: "100%",
                            width: "100%",
                            borderBottomColor: "#a1a1a111",
                            borderBottomWidth: 1,
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingBottom: 10,
                            paddingTop: 10
                        }} >

                            <Text style={{ fontSize: 15, }}  >Turn On Post Notifications</Text>

                        </View>

                    </TouchableOpacity>
                </View>
                <View style={{
                    width: "90%",
                    height: 50,
                    backgroundColor: "#FFF",
                    borderRadius: 10
                }} >
                    <TouchableOpacity style={{
                        height: 40,
                        width: "100%",
                        justifyContent: 'center',
                        alignItems: 'center'
                    }} >

                        <View style={{
                            height: "100%",

                            flex: 1,
                            marginLeft: 8,
                            paddingBottom: 10,
                            paddingTop: 10
                        }} >

                            <Text style={{ fontSize: 15, }}  >Cancel</Text>

                        </View>

                    </TouchableOpacity>

                </View>
            </Modal>






        </View>
    )
}

export default Post
