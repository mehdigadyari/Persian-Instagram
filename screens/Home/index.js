import React, { useState, useEffect } from 'react'
import { View, StyleSheet, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { Header, Image } from 'react-native-elements'
import { Icon } from 'native-base'
import Logo from '../../assets/images/in1.png'
import StoryImg from '../../assets/images/splash.png'
import wall1 from '../../assets/images/wall1.png'
import wall2 from '../../assets/images/wall2.png'
import wall3 from '../../assets/images/wall3.png'
import Story from '../../components/Story'
import Post from '../../components/Post'


const styles = StyleSheet.create({
    root: { flex: 1 },
    header: {
        borderBottomColor: "#00000011"
        , borderBottomWidth: 1,
        height: 70
    },
    camIcon: { fontSize: 30 },
    directIcon: { fontSize: 25 },
    imgLogo: {
        width: 100,
        height: 30,
        resizeMode: 'stretch'
    },
    storyView: {
        height: 70,
        borderBottomColor: "#00000022"
        , borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
})

const index = ({ navigation }) => {

    const [story, setStory] = useState([])
    useEffect(() => {
        setTimeout(() => {
            setStory([
                { id: 1, name: "mehdi", imgUri: StoryImg, seen: true },
                { id: 2, name: "ali", imgUri: wall1, seen: false },
                { id: 3, name: "farshid", imgUri: wall3, seen: false },
                { id: 4, name: "amir", imgUri: wall1, seen: false },
                { id: 5, name: "mohsen", imgUri: wall2, seen: true },
                { id: 6, name: "amin", imgUri: wall2, seen: false },
                { id: 7, name: "reza", imgUri: wall2, seen: true },
                { id: 8, name: "hasan", imgUri: wall3, seen: false },
                { id: 9, name: "asghar", imgUri: wall3, seen: true },
            ])
        }, 1000)
    }, [])

    const [post, setPost] = useState([])
    useEffect(() => {
        setTimeout(() => {
            setPost([
                { id: 1, name: "mehdi", image: StoryImg, },
                { id: 2, name: "ali", image: wall1, },
                { id: 3, name: "farshid", image: wall3, },
                { id: 4, name: "amir", image: wall1, },

            ])
        }, 1000)
    }, [])




    const [loadMore, setLoadMore] = useState(false)

    const getMorePosts = () => {
        setLoadMore(true)

        setTimeout(() => {
            setPost(post => [
                ...post,
                { id: 5, name: "mehdigadd ", image: StoryImg },
                { id: 6, name: "asl ", image: wall2 },
                { id: 7, name: "amin ", image: wall3 },
            ])
            setLoadMore(false)
        }, 2000)


    }


    const [refresh, setRefresh] = useState(false)

    const onRefresh = () => {
        setRefresh(true)
        setTimeout(() => {
            setPost(post => [
                { id: 8, name: "mehdigadd ", image: wall2 },
                { id: 9, name: "asl ", image: Logo },
                { id: 10, name: "amin ", image: wall3 },
                ...post,

            ])
            setRefresh(false)
        }, 2000)
    }




    return (
        <View style={styles.root} >
            <Header
                backgroundColor="#FFF"
                containerStyle={styles.header}
                leftComponent={
                    <TouchableOpacity>
                        <Icon style={styles.camIcon} name="camera" type="EvilIcons" />
                    </TouchableOpacity>
                }


                rightComponent={
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Direct')}>
                        <Icon style={styles.directIcon} name='paper-plane' type='Ionicons' />
                    </TouchableOpacity>
                }
                centerComponent={
                    <Image
                        source={Logo}
                        style={styles.imgLogo}
                    />
                }

            />
            <View style={styles.storyView}  >
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    data={story}
                    renderItem={({ item }) => (

                        <Story
                            name={item.name}
                            imgUri={item.imgUri}
                            seen={item.seen}
                        />
                    )}
                    keyExtractor={item => item.id + ""}
                    horizontal={true}
                />
            </View>




            <FlatList
                data={post}
                renderItem={({ item }) => (
                    <Post
                        navigation={navigation}
                        name={item.name}
                        image={item.image}
                    />
                )}
                keyExtractor={item => item.id + ""}
                //posthaye bishtar
                onEndReached={getMorePosts}
                onEndReachedThreshold={.33}
                ListFooterComponent={loadMore ? <ActivityIndicator size='large' /> : null}
                //refreshinge postha
                refreshing={refresh}
                onRefresh={onRefresh}
                ListHeaderComponent={refresh ? <View style={{ height: 60 }} /> : null}
            />



        </View>
    )
}

export default index
