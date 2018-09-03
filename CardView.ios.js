import React, {Component} from 'react';
import {View} from 'react-native';

export default class CardView extends Component {

    render() {
        const {cardElevation, radius} = this.props;
        if (cardElevation > 0) {
            return (
                <View style={[{
                    shadowOffset: {
                        width: 0,
                        height: cardElevation
                    },
                    shadowRadius: cardElevation,
                    shadowOpacity: 0.13,
                    borderRadius: radius,
                    shadowColor: 'rgba(153,153,153,1)'
                }, this.props.style]}>
                    {this.props.children}
                </View>
            );
        } else {
            return (
                <View style={[{
                    borderRadius: radius,
                }, this.props.style]}>
                    {this.props.children}
                </View>
            );
        }

    }
}
