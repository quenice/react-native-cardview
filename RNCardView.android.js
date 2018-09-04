import PropTypes from 'prop-types';
import {requireNativeComponent, View} from 'react-native';

const iface = {
    name: 'CardView',
    propTypes: {
        cardElevation: PropTypes.number,
        maxCardElevation: PropTypes.number,
        backgroundColor: PropTypes.string,
        radius: PropTypes.number,
        ...View.propTypes, // include the default view properties
    },
};

module.exports = requireNativeComponent('RNCardView', iface);