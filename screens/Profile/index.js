import React, { useState, useEffect } from 'react'
import { View, StyleSheet, TouchableOpacity, Text, FlatList } from 'react-native'
import { Header, } from 'react-native-elements'
import { Icon, ListItem } from 'native-base'
import Logo from '../../assets/images/in1.png'
import StoryImg from '../../assets/images/splash.png'
import Modal from 'react-native-modal'
import ProfilePhoto from '../../components/ProfilePhoto'
import HighlightStory from '../../components/HighlightStory'
import wall1 from '../../assets/images/wall1.png'
import wall2 from '../../assets/images/wall2.png'
import wall3 from '../../assets/images/wall3.png'


const styles = StyleSheet.create({
    root: {
        flex: 1
    },
    header: {
        // borderBottomColor: "#00000022"
        // , borderBottomWidth: 1,
        height: 65
    },
    cameraIcon: {
        fontSize: 30
    },
    directIcon: {
        fontSize: 20
    },
    imgLogo: {
        width: 100,
        height: 30,
        resizeMode: 'stretch'
    },
    storyView: {
        height: 55,
        borderBottomColor: "#00000022"
        , borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    ProfView: {
        width: "100%",
        height: 80,
        // backgroundColor: "#a1a1a1",
        flexDirection: 'row',
        marginLeft: 15,
    },
    ProfVT: {
        marginTop: 14,
        marginLeft: 70,
        // backgroundColor: "#a1a1a1",
    },
    ProfVT1: {
        marginTop: 14,
        marginLeft: 30,
        // backgroundColor: "#a1a1a1",
    },
    ProfVT2: {
        marginTop: 14,
        marginLeft: 20,
        // backgroundColor: "#a1a1a1",
    },
    ProfCaption: {
        width: "100%",
        height: 110,
        // backgroundColor: "#a1a1a1",
        marginLeft: 10,

    },
    ProfButtn: {
        width: "95%",
        height: 30,
        // backgroundColor: "#a1a1a1",
        marginLeft: 10,
        borderRadius: 4,
        borderColor: "#a1a1a122",
        borderWidth: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    HighlightStory: {
        height: 80,
        borderBottomColor: "#00000011"
        , borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    HighlightAdd: {
        width: 50,
        height: 50,

        borderRadius: 30,
        borderColor: "#a1a1a122",
        borderBottomWidth: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    addIcon: {
        fontSize: 30,
        color: "#000"
    },
    HighlightAdd1: {
        width: 60,
        height: 80,
        marginLeft: 7,
        marginTop: 5,
        // borderColor: "#a1a1a122",
        flexDirection: "column",
        // borderWidth: 2,
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center"
    },
    ProfIcon: {
        width: "100%",
        height: 40,
        borderColor: "#a1a1a122",
        borderBottomWidth: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 5
    },
    ProfPosts: {
        width: "100%",
        height: 200,
        // backgroundColor: "#a1a1a1",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center"
    }
})

const index = ({ navigation }) => {

    const [addAccountModal, setAddAccountModal] = useState(false)
    const [menuModal, setMenuModal] = useState(false)
    const [story, setStory] = useState([])
    useEffect(() => {
        setTimeout(() => {
            setStory([
                { id: 1, name: "shomal", imgUri: StoryImg, },
                { id: 2, name: "highLight", imgUri: wall1, },
                { id: 3, name: "highLight", imgUri: wall3, },
                { id: 4, name: "amir", imgUri: wall1, },
                { id: 5, name: "mohsen", imgUri: wall2, },
                { id: 6, name: "highLight", imgUri: wall2, },
                { id: 7, name: "highLight", imgUri: wall2, },
                { id: 8, name: "highLight", imgUri: wall3, },
                { id: 9, name: "asghar", imgUri: wall3, },
            ])
        }, 1000)
    }, [])
    return (
        <View style={styles.root}  >
            <Header
                backgroundColor="#FFF"
                containerStyle={styles.header}

                rightComponent={
                    <TouchableOpacity onPress={() => setMenuModal(true)}>
                        <Icon style={styles.directIcon} name='menu' type='Ionicons' />
                    </TouchableOpacity>
                }
                centerComponent={
                    <TouchableOpacity onPress={() => setAddAccountModal(true)} style={{ flexDirection: 'row' }} >
                        <Icon style={{ fontSize: 15, marginTop: 3, }} name='lock' type='EvilIcons' />
                        <Text style={{ fontSize: 12 }}  >mehdi_gadyari</Text>
                        <Icon style={styles.directIcon} name='chevron-down' type='EvilIcons' />

                    </TouchableOpacity>
                }
            />

            <View style={styles.ProfView}>
                <ProfilePhoto />
                <View style={styles.ProfVT}>
                    <Text style={{ fontSize: 14 }}  >190</Text>
                    <Text style={{ fontSize: 12, color: "#212121" }}  >Posts</Text>
                </View>
                <View style={styles.ProfVT1}>
                    <Text style={{ fontSize: 14 }}  >2987</Text>
                    <Text style={{ fontSize: 12, color: "#212121" }}  >Followers</Text>
                </View>
                <View style={styles.ProfVT2}>
                    <Text style={{ fontSize: 14 }}  >1068</Text>
                    <Text style={{ fontSize: 12, color: "#212121" }}  >Following</Text>
                </View>


            </View>

            <View style={styles.ProfCaption} >
                <Text style={{ fontSize: 14 }}  >7/1/1996</Text>
                <Text style={{ fontSize: 12, color: "#212121" }}  >Communication System</Text>
                <Text style={{ fontSize: 14 }}  >ReactNativeDeveloper</Text>
                <Text style={{ fontSize: 12, color: "#212121", textAlign: "left" }}  >در چشم من آمد آن سهی سرو بلند...</Text>
                <Text style={{ fontSize: 14, color: "#000", fontWeight: "500" }}  >See Translation</Text>
            </View>

            <View style={styles.ProfButtn}  >
                <Text style={{ fontSize: 14, color: "#000", fontWeight: "400" }}  >Edit Profile</Text>
            </View>


            <View style={styles.HighlightStory}>

                <View style={styles.HighlightAdd1} >
                    <View style={styles.HighlightAdd}>
                        <Icon style={styles.addIcon} name="add" type="Ionicons" />
                    </View>
                    <Text style={{ fontSize: 7, color: "#000", }}  >New</Text>

                </View>

                <FlatList
                    showsHorizontalScrollIndicator={false}
                    data={story}
                    renderItem={({ item }) => (

                        <HighlightStory
                            name={item.name}
                            imgUri={item.imgUri}

                        />
                    )}
                    keyExtractor={item => item.id + ""}
                    horizontal={true}
                />
            </View>


            <View style={styles.ProfIcon}  >
                <Icon style={styles.addIcon} name="apps" type="Ionicons" />
                <Icon style={styles.addIcon} name="person" type="Ionicons" />
            </View>


            <View style={styles.ProfPosts}  >
                <Text style={{ fontSize: 16, color: "#000", fontWeight: "500" }}  >No Post Yet...</Text>
            </View>





            <Modal
                isVisible={addAccountModal}
                onBackdropPress={() => setAddAccountModal(false)}
                onBackButtonPress={() => setAddAccountModal(false)}
                style={{ width: "100%", margin: 0, justifyContent: "flex-end" }}
            >
                <View style={{
                    width: "100%",
                    height: 425,
                    backgroundColor: "#FFF",
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10
                }} >


                </View>
            </Modal>
            <Modal
                isVisible={menuModal}
                onBackdropPress={() => setMenuModal(false)}
                onBackButtonPress={() => setMenuModal(false)}
                style={{ width: "100%", margin: 0, justifyContent: "flex-end" }}
            >
                <View style={{
                    width: "100%",
                    height: 550,
                    backgroundColor: "#FFF"
                    , borderTopLeftRadius: 10
                    , borderTopRightRadius: 10,
                    padding: 0
                }} >

                    <View style={{
                        width: 50,
                        height: 3,
                        backgroundColor: "#a1a1a1",
                        alignSelf: 'center'
                        , borderRadius: 5,
                        marginTop: 4
                    }} ></View>

                    <ListItem icon style={{ height: 50, marginLeft: 8 }} >
                        <TouchableOpacity style={{
                            width: "100%",
                            flexDirection: 'row', alignItems: 'center'
                        }} >
                            <Icon style={{ fontSize: 18, marginLeft: 0 }} active name="settings" />
                            <View style={{
                                height: "100%", borderBottomColor: "#a1a1a111",
                                borderBottomWidth: 1,
                                flex: 1, marginLeft: 8, paddingBottom: 10, paddingTop: 10
                            }} >
                                <Text style={{ fontSize: 10 }}  >Airplane</Text>
                            </View>
                        </TouchableOpacity>
                    </ListItem>
                    <ListItem icon style={{ height: 20, marginLeft: 8 }} >
                        <TouchableOpacity style={{
                            width: "100%",
                            flexDirection: 'row', alignItems: 'center'
                        }} >
                            <Icon style={{ fontSize: 18 }} active name="settings" />
                            <View style={{
                                height: "100%", borderBottomColor: "#a1a1a111",
                                borderBottomWidth: 1,
                                flex: 1, marginLeft: 8, paddingBottom: 10, paddingTop: 10
                            }} >
                                <Text style={{ fontSize: 10 }}  >Airplane</Text>
                            </View>
                        </TouchableOpacity>
                    </ListItem>
                    <ListItem icon style={{ height: 35, marginLeft: 8 }} >
                        <TouchableOpacity style={{
                            width: "100%",
                            flexDirection: 'row', alignItems: 'center'
                        }} >
                            <Icon style={{ fontSize: 18 }} active name="settings" />
                            <View style={{
                                height: "100%", borderBottomColor: "#a1a1a111",
                                borderBottomWidth: 1,
                                flex: 1, marginLeft: 8, paddingBottom: 15, paddingTop: 15
                            }} >
                                <Text style={{ fontSize: 10 }}  >Airplane</Text>
                            </View>
                        </TouchableOpacity>
                    </ListItem>
                    <ListItem icon style={{ height: 35, marginLeft: 8 }} >
                        <TouchableOpacity style={{
                            width: "100%",
                            flexDirection: 'row', alignItems: 'center'
                        }} >
                            {/* <ion-icon name="bookmark-outline"></ion-icon> */}
                            <Icon style={{ fontSize: 18 }} name="bookmark" type='Ionicons' />
                            <View style={{
                                height: "100%", borderBottomColor: "#a1a1a111",
                                borderBottomWidth: 1,
                                flex: 1, marginLeft: 8, paddingBottom: 15, paddingTop: 15
                            }} >
                                <Text style={{ fontSize: 10 }}  >Airplane</Text>
                            </View>
                        </TouchableOpacity>
                    </ListItem>
                    <ListItem icon style={{ height: 18, marginLeft: 8, marginTop: 12 }} >
                        <TouchableOpacity style={{
                            width: "100%",
                            flexDirection: 'row', alignItems: 'center'
                        }} >
                            <Icon style={{ fontSize: 18 }} active name="settings" />
                            <View style={{
                                height: "100%", borderBottomColor: "#a1a1a111",
                                borderBottomWidth: 1,
                                flex: 1, marginLeft: 8, paddingBottom: 15, paddingTop: 15
                            }} >
                                <Text style={{ fontSize: 10 }}  >Airplane</Text>
                            </View>
                        </TouchableOpacity>
                    </ListItem>
                    <ListItem icon style={{ height: 18, marginLeft: 8, marginTop: 12 }} >
                        <TouchableOpacity style={{
                            width: "100%",
                            flexDirection: 'row', alignItems: 'center'
                        }} >
                            <Icon style={{ fontSize: 18 }} active name="settings" />
                            <View style={{
                                height: "100%", borderBottomColor: "#a1a1a111",
                                borderBottomWidth: 1,
                                flex: 1, marginLeft: 8, paddingBottom: 15, paddingTop: 15
                            }} >
                                <Text style={{ fontSize: 10 }}  >Airplane</Text>
                            </View>
                        </TouchableOpacity>
                    </ListItem>




                </View>
            </Modal>

        </View>
    )
}

export default index
