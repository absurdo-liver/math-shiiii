// Array:
// Array() : create new array | new Array()

// Static methods:
// from() : create new shallow copied array instance, has parameters: Array.from(items) | Array.from("foo") => "f","o", "o"
// fromAsync() : from() but async
// isArray(): returns true if parameter is an array, has parameters: object to pass
// of() : create new array from variable number of arguments, has parameters: arguments

// Static propereties:
// [Symbol.species] // don't use

// Instance methods
// at() : returns item at specified index, can be positive or negative, has parameters: index
// concat() : merge two or more arrays, does not modify, returns new array, has parameters: arrays
// copyWithin() : shallow copies part of an array w/o modifying its length, has parameters: target, start, end | copyWithin(target, start, end)
// entries() : returns new array iterator object, contains value pairs for each index, lacks parameters | Array.entries() => 0 "item@index0" , 1 "item@index1"
// every() : retuns flase if one item in array doesn't satisfy condition, has parameters: callbackFn, thisArg | function{return elem >= 10} Array.every(function)
// fill() : change all items withing a range to a static value, return modified array, has parameters: value, start, end | fill(value, start, end)
// filter() : creates shallow copy of portion of given array filtered to contain just the items that satisfy parameters, has parameters: callbackFn, thisArg | filter(callbackFn, thisArg)
// find() : return first item in array that satisfies parameters, no values satisfy => undefined, has parameters: find(callbackFn, thisArg)
// findIndex() : same as find(), instead returns index value, not item
// findLast() : same as find(), instead iterates backwards, finding last item to satisfy
// findLastIndex() : same as findIndex(), instead returns last satisfying index
// flat() : returns array with all sub-array items concatenated into it recursively up until specified depth, has parameters: depth
// flatMap() : same as flat(), instead returns array formed by apply callbackFn then flatening
// forEach() : executes provided function once for each item in array, has parameters: function
// includes() : returns true if array contain parameters, else returns false, has parameters: item to chack for
// indexOf() : same as includes(), instead returns index value of item, else returns -1
// join() : returns string of all items, seperated by provided spacer, has parameters: spacer
// keys() : returns new array iterator object containing the keys for each index in array
// lastIndexOf() : same as indexOf(), instead returns last index found or -1 if none found
// map() : create new array, populated w/ results of parameters, has parameters: modifier function
// pop() : remove item from end of list, lacks parameters
// push() : add new item to end of list, has parameters: new item
// reduce() : exectutes reducer function for each element in array, has parameters: reducer function
// reduceRight() : same as reduce(), instead reduces from right-to-left, not left-to-right
// reverse() : reverses item order in array | [1,2,3] => [3,2,1]
// shift() : same as pop(), instead removes first item in array
// slice() : returns items within parameter indexes, has parameters: start, end | [1,2,3,4,5].slice(2,4) => [3,4] | starts at start, removes end & all others after it
// some() : returns true is if at least one items satisfies parameter, else false, has parameters: callbackFn, thisArg
// sort() : modifies array to become sorted, in ascending order, according to their sequences compared to UTF-16 unit values
// splice() : modifies array by changing its contents, add/remove elements in place, has parameters: start, deleteCount, itemN | splice(start, deleteCount, item1, item2, /* …, */ itemN)
// toLocaleString() : returns string representing items in array, seperated by locale-specific string such as comma | toLocaleString(locales, options)
// toReversed() : same as reverse(), instead returns reversed array, doesn't modify
// toSorted() : same as sort(), instead returns sorted array, doesn't modify
// toSpliced() : same as splice(),instead returns spliced array, doesn't modify
// toString() : returns string representing items in array, has parameters: string type | .toString(2) => binary .toString(16) => hex .toString() => converted to string, no changes
// unshift() : same as shift(), instead adds item as first, doesn't remove first item
// values() : returns values in array, iteravely
// with() : changes value of given index, returns new array with new item, has parameters: index, value | .with(index, value)
// [Symbol.iterator]() : same as .values()

// Instance propereties:
// length : returns length of an array, aka: how many items does it contain
// [Symbol.unscopables] : type, unwritable, unenumerable, configuarble

