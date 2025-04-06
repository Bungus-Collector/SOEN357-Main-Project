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
        fontSize: 16,
        color: 'white',
        textAlignVertical: 'center',
    },
    TextInput: {
        height: 50,
        marginTop: 12,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        padding: 10,
    },
    BigTextInput: {
        height: 100,
        marginTop: 12,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        padding: 10,
        textAlignVertical: 'top',
    },
    SmallTextInput: {
        height: 50,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        padding: 10,
        position: 'absolute',
        right: 0,
        width: 100,
    },
    ButtonDefault: {
        height: 90,
        width: '100%',
        backgroundColor: '#A4B494',
        borderRadius: 25,
        margin: 15,
    },
    ButtonDefaultText: {
        color: '#000000',
        fontSize: 24,
        textAlign: 'right',
        padding: 28,
    },
    VerticalFlexContainer: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
    },
    TypeButton: {
        backgroundColor: '#A4B494',
        borderRadius: 18,
        height: 100,
        width: 100,
        justifyContent: 'center',
    },
    TypeButtonSelected: {
        backgroundColor: 'white',
        borderRadius: 18,
        height: 100,
        width: 100,
        justifyContent: 'center',
    },
    TypeButtonText: {
        color: 'black',
        fontSize: 18,
        textAlign: 'center',
    },
    PersonalInformationText: {
        color: '#FFFFFF',
        fontSize: 16,
        marginBottom: 10,
    },
    InfoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5,
    },
    RowItem: {
        color: '#FFFFFF',
        fontSize: 20,
        marginTop: 10,
    },
    CancelButton: {
        backgroundColor: '#E4B494',
        borderRadius: 18,
        width: 140,
        height: 60,
        paddingTop: 16,
    },
    ConfirmButton: {
        backgroundColor: '#A4B494',
        borderRadius: 18,
        width: 140,
        height: 60,
        paddingTop: 16,
    },
    ButtonsVerticalFlexContainer: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30,
    },
});
