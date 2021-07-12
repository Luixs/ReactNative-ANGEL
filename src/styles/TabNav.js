import {StyleSheet} from 'react-native';

const TabStyle = StyleSheet.create({
    shadowBt:{
        shadowColor: "#7F5DF0",
        shadowOffset:{
            width:0,
            height:10
        },
        shadowOpacity: 0.25,
        shadowRadius:3.5,
        elevation: 5
    },
    iconTabRound: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 6,
        shadowColor: '#9C27B0',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    }
})

export default TabStyle;