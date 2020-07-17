import React from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';

import ListItem from './ListItem';

const LibraryList = ({libraries}) => {
    // 2. Now we can receive the props comes from mapStateToProps function 
    // that we pass when we call connect to the component.
    return (
        <View style={{ flex: 1}}>
            <FlatList 
                data={libraries}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => {
                    return <ListItem library={item} />
                }}
            />
        </View>
    );
};
// 1. 
// If we return an object inside this function 
// that object will show up as props to our component
const mapStateToProps = state => {
    return { libraries: state.libraries }
};

export default connect(mapStateToProps)(LibraryList);