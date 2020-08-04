import React from 'react'
import { View, Text } from 'react-native'
import HomeIndex from '../screens/Home/index'
import LikeSheet from '../screens/Home/LikeSheet'
import Direscts from '../screens/Home/Direscts'
import ProfileIndex from '../screens/Profile/index'
import ActivityIndex from '../screens/Activities/index'
import AddPostIndex from '../screens/AddPost/index'
import SearchIndex from '../screens/Search/index'
import Colors from '../constants/Colors'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import { Icon } from 'native-base'

const config = {
    headerMode: 'none'
}



const HomeStack = createStackNavigator({
    
    Home: HomeIndex,
    Direct:Direscts,
    Likes:LikeSheet,
}, config)
HomeStack.navigationOptions = {
    tabBarIcon: ({ focused }) => (
        <Icon style={{ color: focused ? Colors.tabIconSelected : Colors.tabIconDefault }} 
		type='Ionicons' name="home" />
    )
}

const ProfileStack = createStackNavigator({
    Profile: ProfileIndex
}, config)

ProfileStack.navigationOptions = {
    tabBarIcon: ({ focused }) => (
        <Icon style={{ color: focused ? Colors.tabIconSelected : Colors.tabIconDefault }}
            type='Ionicons' name="person" />
    )
}



const SearchStack = createStackNavigator({
    Search: SearchIndex
}, config)

SearchStack.navigationOptions = {
    tabBarIcon: ({ focused }) => (
        <Icon style={{ color: focused ? Colors.tabIconSelected : Colors.tabIconDefault }}
            type='Ionicons' name="search" />
    )
}

const AddPostStack = createStackNavigator({
    AddPost: AddPostIndex
}, config)

AddPostStack.navigationOptions = {
    tabBarIcon: ({ focused }) => (
        <Icon style={{ color: focused ? Colors.tabIconSelected : Colors.tabIconDefault }}
            type='Ionicons' name="add-circle" />
    )
}

const ActivityStack = createStackNavigator({
    Activity: ActivityIndex
}, config)

ActivityStack.navigationOptions = {
    tabBarIcon: ({ focused }) => (
        <Icon style={{ color: focused ? Colors.tabIconSelected : Colors.tabIconDefault }}
            type='Ionicons' name="heart" />
    )
}


const tabNavigator = createBottomTabNavigator({
    
    HomeStack,
    SearchStack,
    AddPostStack,
    ActivityStack,
    ProfileStack,
}, {
    tabBarOptions: {
        showLabel: false
    }
}

)

export default tabNavigator