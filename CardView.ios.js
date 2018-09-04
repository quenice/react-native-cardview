import React, {Component} from 'react';
import {View} from 'react-native';
import PropTypes from "prop-types";

export default class CardView extends Component {
    static propTypes = {
        cardElevation: PropTypes.number,
        maxCardElevation: PropTypes.number,
        radius: PropTypes.number,
        backgroundColor: PropTypes.string,
    }

    render() {
        const {cardElevation, radius, backgroundColor, style, ...props} = this.props
        if (backgroundColor) style.backgroundColor = backgroundColor
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
                }, style]} {...props}>
                    {this.props.children}
                </View>
            );
        } else {
            return (
                <View style={[{
                    borderRadius: radius,
                }, style]}  {...props}>
                    {this.props.children}
                </View>
            );
        }

    }
}
