import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        backgroundColor: '#382933',
        paddingTop: Platform.OS === 'android' ? 50 : 0,
    },
    ContainerCenter: {
        justifyContent: 'center',
        textAlignVertical: 'center',
        alignItems: 'center',
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
        position: 'absolute',
        bottom: 0,
    },
    BodyArea: {
        textAlignVertical: 'center',
        flex: 4,
        margin: '10%',
        marginTop: '15%',
    },
    BodyText: {
        fontSize: 16,
        color: 'white',
        textAlignVertical: 'center',
    },
    BottomNav: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#3B5249',
    },
    FooterText: {
        color: 'grey',
        textAlign: 'center',
        fontSize: 12,
    },
    TextInput: {
        height: 50,
        marginTop: 12,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        padding: 10,
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
    ForgotPassword: {
        color: 'grey',
        textDecorationLine: 'underline',
        marginBottom: 25,
        width: '40%',
    },
});
