// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = propertyName => {
	return Object.defineProperty(this, propertyName, {
		enumerable: true
	});
};
const createNotEnumerableProperty = propertyName => {
	Object.defineProperty(Object.prototype, propertyName, {
		enumerable: false,
		get: function() {
			return Object.prototype.newProperty;
		},
		set: function(a) {
			return (Object.prototype.newProperty = a);
		}
	});
	return propertyName;
};

const createProtoMagicObject = () => {
	const object = function() {};
	object.prototype = object.__proto__;
	return object;
};

let counter = 0;
const incrementor = () => {
	counter++;
	incrementor.valueOf = function() {
		return counter;
	};
	return incrementor;
};

const asyncIncrementor = () => {};
const createIncrementer = () => {};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = () => {};
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {
	const object = new Object();
	object.toJSON = function() {
		return this.toString();
	};
	return object;
};

const sortByProto = arr => {
	return arr.sort(function(a, b) {
		return a.__proto__ - b.__proto__;
	});
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;
