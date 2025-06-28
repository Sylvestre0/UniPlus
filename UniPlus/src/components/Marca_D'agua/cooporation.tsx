import { Text } from 'react-native'
import styled from "styled-components/native";

export const WaterMask = styled(Text)`
    position: absolute;
    bottom: 2%;
    color: rgba(0, 0, 0,0.5);
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    width: 100%;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`
