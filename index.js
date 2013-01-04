var angular = global.angular;
if (typeof angular === 'undefined')
  throw new Error('Failed to load module angular-cjs: AngularJS is not defined in the global scope.');
module.exports = angular;
