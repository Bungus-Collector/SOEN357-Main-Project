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
        fontWeight: 'bold',
    },
    BodyArea: {
        textAlignVertical: 'center',
        flex: 4,
        margin: '10%',
        marginTop: '15%',
    },
    BodyText: {
        fontSize: 18,
        color: 'white',
        textAlignVertical: 'center',
        fontWeight: 'bold',
    },
    DisplayText: {
        fontSize: 16,
        color: 'white',
        textAlignVertical: 'center',
        marginTop: 15,
    },
    AddNewButton: {
        height: 70,
        width: '70%',
        marginTop: 12,
        backgroundColor: '#3B5249',
        borderRadius: 25,
        marginBottom: 20,
    },
    AddNewButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        textAlign: 'right',
        padding: 25,
    },
    Plus: {
        color: '#FFFFFF',
        fontSize: 48,
        position: 'absolute',
        paddingLeft: 20,
        top: 2,
    },
    FlatList: {
        width: '100%',
        height: 150,
    },
    WeeklyChallengesFlatList: {
        width: '100%',
        height: 180,
    },
});
