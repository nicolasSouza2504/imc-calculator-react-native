import React from "react"
import {View, Text, TouchableOpacity, Share} from "react-native"
import stylesResult from "./style"

export default function ResultImc(props) {
    
    const onShare = async () => {
        const result = await Share.share({
            message: "Meu imc hoje é: " + props.resultImc
        })
    }
    
    return (
        <View  style={stylesResult.resultImc}>
            <View style={stylesResult.boxShareButton}>
                { props.resultImc ? 
                    <TouchableOpacity style={stylesResult.shared} onPress={onShare}>
                        <Text style={stylesResult.sharedText}>Share</Text>
                    </TouchableOpacity> 
                    :
                    <View/>
                }

            </View>
            <Text style={stylesResult.information}>{props.messageResultImc}</Text>
            <Text style={stylesResult.numberImc}>{props.resultImc}</Text>
        </View>
    )
}