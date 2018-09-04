import React from 'react'
import {StyleSheet} from 'react-native'
import RNCardView from './RNCardView'
import PropTypes from 'prop-types'

export default class CardView extends React.Component {
    static propTypes = {
        cardElevation: PropTypes.number,
        maxCardElevation: PropTypes.number,
        radius: PropTypes.number,
        backgroundColor: PropTypes.string,
    }

    render() {
        const {children, style, ...props} = this.props
        const finalStyle = getFinalStyle(this.props, style)
        return (
            <RNCardView style={finalStyle} {...props}>
                {children}
            </RNCardView>
        )
    }
}

const getFinalStyle = (props, style = {}) => {
    const {cardElevation = 0, radius = 0} = props
    const paddingBottom = 2 * cardElevation + radius

    const computedStyle = StyleSheet.flatten(style)
    const keys = Object.keys(computedStyle)
    if (!keys || keys.length === 0) return {paddingBottom}
    const len = keys.length
    let additionalStyle = {paddingBottom}
    for (let i = len - 1; i >= 0; i--) {
        const styleKey = keys[i]
        const styleValue = computedStyle[keys[i]]
        if (styleKey === 'paddingBottom' || styleKey === 'paddingVertical' || styleKey === 'padding') {
            additionalStyle = {paddingBottom: styleValue + paddingBottom}
            break
        }
    }
    return [computedStyle, additionalStyle]
}