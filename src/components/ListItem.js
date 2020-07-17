import React, { useEffect, useState } from 'react';
import { Text, 
        StyleSheet, 
        TouchableWithoutFeedback, 
        View,
        LayoutAnimation } from 'react-native';

import { connect } from 'react-redux';

import { CardItem } from './common';
import * as actions from '../actions';

const ListItem = (props) => {
    const { library: { title, id, description }, 
        selectLibrary,
        expanded
        } = props;

    

    const renderDescription = () => {
        if (expanded) {
            LayoutAnimation.spring();
            return (
                <CardItem>
                    <Text >{description}</Text>
                </CardItem>
                );
        }
    };

    return (
        <TouchableWithoutFeedback 
            onPress={() => {
                selectLibrary(id); 
                }
            }
        >
            <View>
                <CardItem>
                    <Text style={styles.title}>{title}</Text>
                </CardItem>
                { renderDescription() }
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        paddingLeft: 15
    }
});

const mapStateToProps = (state, ownProps) => {
    // we can make the logic here 
    // instead of destructuring props inside our component, we can test it 
    // here and just pass a boolean
    // ownProps refers to props passed in ListItem
    const expanded = state.selectedLibraryId === ownProps.library.id;
    return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);