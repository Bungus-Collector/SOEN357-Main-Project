import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        backgroundColor: '#382933',
        paddingTop: Platform.OS === 'android' ? 50 : 0,
    },
    HeaderArea: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 2,
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
        flex: 3,
        margin: '10%',
    },
    BodyText: {
        fontSize: 16,
        color: 'white',
    },
    ButtonDefault: {
        height: 60,
        width: '47%',
        marginTop: 12,
        backgroundColor: '#A4B494',
        borderRadius: 25,
    },
    ButtonDefaultText: {
        color: '#000000',
        fontSize: 16,
        textAlign: 'center',
        paddingTop: 18,
    },
    ProfileImage: {
        height: 120,
        width: 120,
    },
    VerticalFlexContainer: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
    },
    StatsArea: {
        alignItems: 'center',
        justifyContent: 'space-around',
        flex: 1,
    },
    StatsBox: {
        backgroundColor: '#3B5249',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        height: 70,
        width: 120,
        margin: 15,
    },
    StatsBoxText: {
        color: '#FFFFFF',
        fontSize: 24,
    },
    StatsText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
    PersonalInformationArea: {
        marginTop: '15%',
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
        fontSize: 14,
    },
});
