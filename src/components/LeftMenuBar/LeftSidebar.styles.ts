// LeftSidebar.styles.ts
import { StyleSheet } from 'react-native';
import {height, width} from "../../constants/constants.ts";


export const styles = StyleSheet.create({
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },
    sidebar: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: width * 0.8,
        height: height,
        backgroundColor: '#fff',
        paddingTop: 40,
        paddingHorizontal: 15,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 5,
        elevation: 5,
        borderTopRightRadius: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    searchBar: {
        height: '7%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginBottom: 15,
        overflow: 'hidden',
    },
    searchInput: {
        flex: 1,
        paddingHorizontal: 10,
        fontSize: 15,
        color: '#333',
        fontWeight: 400,
        borderWidth: 1,
        borderColor: '#ddd',
        height: '100%',
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        textAlignVertical: 'center'
    },
    searchIconContainer: {
        width: '20%',
        height: '100%',
        backgroundColor: '#007AFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
    },
    statusHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    statusMain: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
    },
    statusContainer: {
        overflow: 'hidden',
    },
    statusItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginBottom: 10,
    },
    statusIcon: {
        marginRight: 10,
    },
    statusTextContainer: {
        padding: 5,
        minWidth: width * 0.4,
        borderRadius: 5,
    },
    statusText: {
        fontSize: 14,
        fontWeight: 600,
    },
    unpinContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#fff',
        justifyContent: 'space-between'
    },
    unpinIconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    unpinText: {
        fontSize: 15,
        color: '#333',
        fontWeight: 600,
    },
});