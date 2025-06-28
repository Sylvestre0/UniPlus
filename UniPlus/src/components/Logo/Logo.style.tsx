import React from "react"
import { View, Text, Image } from "react-native"
import styled from "styled-components/native";

export const Logo = styled(Image).attrs( props => ({
    source: require('@/assets/images/unifecaf-removebg-preview.png'),
    alignSelf: 'center',
    resizeMode: 'contain',
}))`
    height: 271px;
    width: 263px;
`
