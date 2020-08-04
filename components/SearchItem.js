import React from 'react'
import { View, Text, Image } from 'react-native'
import Layout from '../constants/Layout'


const SearchItem = ({ type, img }) => {

    let w
    let h
    let bg

    switch (type) {
        case "igtv":
            w = (Layout.window.width * 2) / 3
            h = (Layout.window.height * 2) / 3
            bg = "#00f"
            break
        case "post":
            w = (Layout.window.width) / 3
            h = (Layout.window.width) / 3
            bg = "#0f0"
            break
        case "story":
            w = (Layout.window.width) / 3
            h = (Layout.window.width * 2) / 3
            bg = "#F00"
            break

        default:
            break
    }





    return (
        <View style={{ width: w, height: h, borderColor: "#a1a1a122", borderWidth: 1 }} >
            <Image source={img} style={{width:"100%",height:"100%",resizeMode:'stretch'}} />
        </View>
    )
}

export default SearchItem
