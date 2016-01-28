
'use strict';

var React = require('react-native');
var {
  Image,
  PixelRatio,
  Platform,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableNativeFeedback,
  View
} = React;

var CatalogCell = React.createClass({
  render () {
  	var TouchableElement = TouchableHighlight;
    if (Platform.OS === 'android') {
      TouchableElement = TouchableNativeFeedback;
    }
    // want to replace this with URI for local database   'http://localhost:5984/demoapp'   ... + this.props.book.thumbnail
    var imageURI = 'http://127.0.0.1:5984/gitburg/' + this.props.book._id + '/cover.jpg';
    console.log(imageURI);
    return (
    	<View>
	      <TouchableElement
          background={TouchableNativeFeedback.Ripple()} 
	        onPress={this.props.onSelect}>
		      <View style={styles.container}>
		        <Image 
		          source={{uri: imageURI}} 
		          style={styles.thumbnail} />
		        <View style={styles.rightContainer}>
		          <Text style={styles.title}>{this.props.book.title}</Text>
		        </View>
		      </View>
		    </TouchableElement>
		  </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {  
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  rightContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },
  thumbnail: {
    width: 53,
    height: 81,
  }
});

module.exports = CatalogCell;