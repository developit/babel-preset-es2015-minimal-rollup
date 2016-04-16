var preset = require('..'),
	es2015 = require('babel-preset-es2015'),
	assert = require('assert');

// strip a nested module path + filename down to just the innermost module's (file)name
function getModuleName(path) {
	return path.replace(/(?:(?:.+\/)?node_modules\/|\/|\.\.\/)((@[^\/]+\/)?[^\/]+)(\/.*)?$/g, '$1');
}

console.log(preset.plugins.map(function(p) {
	var name = getModuleName(( Array.isArray(p) ? p[0] : p )._original_name);
	return Array.isArray(p) ? [name].concat(p.slice(1)) : name;
}));

var loosed = preset.plugins.reduce(function(count, p) {
	var loose = Array.isArray(p) && p[1] && p[1].loose;
	return count + (loose ? 1 : 0);
}, 0);

assert.equal(loosed, 6);
console.log('👍  Should put 6 plugins into loose mode');

assert.equal(preset.plugins.length, es2015.plugins.length-2, 'Should remove two plugins from es2015 preset');
console.log('👍  Should remove two plugins from es2015 preset');

console.log('🎉  all good');
