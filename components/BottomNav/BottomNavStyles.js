import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    BottomNav: {
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#3B5249',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        height: 150,
        width: '100%',
    },
    BottomNavText: {
        color: '#A4B494',
        textAlign: 'center',
        fontSize: 16,
    },
    Icon: {
        alignItems: 'center',
        flex: 1,
    },
    IconImage: {
        width: 50,
        height: 50,
    },
    TouchableIcon: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    FlexPadding : {
        flex: 1.4,
    },
});
