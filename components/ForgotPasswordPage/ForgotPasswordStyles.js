import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        backgroundColor: '#382933',
        paddingTop: Platform.OS === 'android' ? 50 : 0,
    },
    HeaderArea: {
        justifyContent: 'center',
        textAlignVertical: 'center',
        alignItems: 'center',
        flex: 1,
    },
    HeaderText: {
        fontSize: 24,
        textAlign: 'center',
        color: 'white',
    },
    ButtonDefault: {
        height: 70,
        width: '80%',
        marginTop: 12,
        backgroundColor: '#A4B494',
        borderRadius: 25,
    },
    ButtonDefaultText: {
        color: '#000000',
        fontSize: 24,
        textAlign: 'center',
        padding: 18,
    },
});
