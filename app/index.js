/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/.pnpm/bindings@1.5.0/node_modules/bindings/bindings.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/.pnpm/bindings@1.5.0/node_modules/bindings/bindings.js ***!
  \*****************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("/**\n * Module dependencies.\n */\n\nvar fs = __webpack_require__(/*! fs */ \"fs\"),\n  path = __webpack_require__(/*! path */ \"path\"),\n  fileURLToPath = __webpack_require__(/*! file-uri-to-path */ \"./node_modules/.pnpm/file-uri-to-path@1.0.0/node_modules/file-uri-to-path/index.js\"),\n  join = path.join,\n  dirname = path.dirname,\n  exists =\n    (fs.accessSync &&\n      function(path) {\n        try {\n          fs.accessSync(path);\n        } catch (e) {\n          return false;\n        }\n        return true;\n      }) ||\n    fs.existsSync ||\n    path.existsSync,\n  defaults = {\n    arrow: process.env.NODE_BINDINGS_ARROW || ' → ',\n    compiled: process.env.NODE_BINDINGS_COMPILED_DIR || 'compiled',\n    platform: process.platform,\n    arch: process.arch,\n    nodePreGyp:\n      'node-v' +\n      process.versions.modules +\n      '-' +\n      process.platform +\n      '-' +\n      process.arch,\n    version: process.versions.node,\n    bindings: 'bindings.node',\n    try: [\n      // node-gyp's linked version in the \"build\" dir\n      ['module_root', 'build', 'bindings'],\n      // node-waf and gyp_addon (a.k.a node-gyp)\n      ['module_root', 'build', 'Debug', 'bindings'],\n      ['module_root', 'build', 'Release', 'bindings'],\n      // Debug files, for development (legacy behavior, remove for node v0.9)\n      ['module_root', 'out', 'Debug', 'bindings'],\n      ['module_root', 'Debug', 'bindings'],\n      // Release files, but manually compiled (legacy behavior, remove for node v0.9)\n      ['module_root', 'out', 'Release', 'bindings'],\n      ['module_root', 'Release', 'bindings'],\n      // Legacy from node-waf, node <= 0.4.x\n      ['module_root', 'build', 'default', 'bindings'],\n      // Production \"Release\" buildtype binary (meh...)\n      ['module_root', 'compiled', 'version', 'platform', 'arch', 'bindings'],\n      // node-qbs builds\n      ['module_root', 'addon-build', 'release', 'install-root', 'bindings'],\n      ['module_root', 'addon-build', 'debug', 'install-root', 'bindings'],\n      ['module_root', 'addon-build', 'default', 'install-root', 'bindings'],\n      // node-pre-gyp path ./lib/binding/{node_abi}-{platform}-{arch}\n      ['module_root', 'lib', 'binding', 'nodePreGyp', 'bindings']\n    ]\n  };\n\n/**\n * The main `bindings()` function loads the compiled bindings for a given module.\n * It uses V8's Error API to determine the parent filename that this function is\n * being invoked from, which is then used to find the root directory.\n */\n\nfunction bindings(opts) {\n  // Argument surgery\n  if (typeof opts == 'string') {\n    opts = { bindings: opts };\n  } else if (!opts) {\n    opts = {};\n  }\n\n  // maps `defaults` onto `opts` object\n  Object.keys(defaults).map(function(i) {\n    if (!(i in opts)) opts[i] = defaults[i];\n  });\n\n  // Get the module root\n  if (!opts.module_root) {\n    opts.module_root = exports.getRoot(exports.getFileName());\n  }\n\n  // Ensure the given bindings name ends with .node\n  if (path.extname(opts.bindings) != '.node') {\n    opts.bindings += '.node';\n  }\n\n  // https://github.com/webpack/webpack/issues/4175#issuecomment-342931035\n  var requireFunc =\n     true\n      ? require\n      : 0;\n\n  var tries = [],\n    i = 0,\n    l = opts.try.length,\n    n,\n    b,\n    err;\n\n  for (; i < l; i++) {\n    n = join.apply(\n      null,\n      opts.try[i].map(function(p) {\n        return opts[p] || p;\n      })\n    );\n    tries.push(n);\n    try {\n      b = opts.path ? requireFunc.resolve(n) : requireFunc(n);\n      if (!opts.path) {\n        b.path = n;\n      }\n      return b;\n    } catch (e) {\n      if (e.code !== 'MODULE_NOT_FOUND' &&\n          e.code !== 'QUALIFIED_PATH_RESOLUTION_FAILED' &&\n          !/not find/i.test(e.message)) {\n        throw e;\n      }\n    }\n  }\n\n  err = new Error(\n    'Could not locate the bindings file. Tried:\\n' +\n      tries\n        .map(function(a) {\n          return opts.arrow + a;\n        })\n        .join('\\n')\n  );\n  err.tries = tries;\n  throw err;\n}\nmodule.exports = exports = bindings;\n\n/**\n * Gets the filename of the JavaScript file that invokes this function.\n * Used to help find the root directory of a module.\n * Optionally accepts an filename argument to skip when searching for the invoking filename\n */\n\nexports.getFileName = function getFileName(calling_file) {\n  var origPST = Error.prepareStackTrace,\n    origSTL = Error.stackTraceLimit,\n    dummy = {},\n    fileName;\n\n  Error.stackTraceLimit = 10;\n\n  Error.prepareStackTrace = function(e, st) {\n    for (var i = 0, l = st.length; i < l; i++) {\n      fileName = st[i].getFileName();\n      if (fileName !== __filename) {\n        if (calling_file) {\n          if (fileName !== calling_file) {\n            return;\n          }\n        } else {\n          return;\n        }\n      }\n    }\n  };\n\n  // run the 'prepareStackTrace' function above\n  Error.captureStackTrace(dummy);\n  dummy.stack;\n\n  // cleanup\n  Error.prepareStackTrace = origPST;\n  Error.stackTraceLimit = origSTL;\n\n  // handle filename that starts with \"file://\"\n  var fileSchema = 'file://';\n  if (fileName.indexOf(fileSchema) === 0) {\n    fileName = fileURLToPath(fileName);\n  }\n\n  return fileName;\n};\n\n/**\n * Gets the root directory of a module, given an arbitrary filename\n * somewhere in the module tree. The \"root directory\" is the directory\n * containing the `package.json` file.\n *\n *   In:  /home/nate/node-native-module/lib/index.js\n *   Out: /home/nate/node-native-module\n */\n\nexports.getRoot = function getRoot(file) {\n  var dir = dirname(file),\n    prev;\n  while (true) {\n    if (dir === '.') {\n      // Avoids an infinite loop in rare cases, like the REPL\n      dir = process.cwd();\n    }\n    if (\n      exists(join(dir, 'package.json')) ||\n      exists(join(dir, 'node_modules'))\n    ) {\n      // Found the 'package.json' file or 'node_modules' dir; we're done\n      return dir;\n    }\n    if (prev === dir) {\n      // Got to the top\n      throw new Error(\n        'Could not find module root given file: \"' +\n          file +\n          '\". Do you have a `package.json` file? '\n      );\n    }\n    // Try the parent dir next\n    prev = dir;\n    dir = join(dir, '..');\n  }\n};\n\n\n//# sourceURL=webpack://ts/./node_modules/.pnpm/bindings@1.5.0/node_modules/bindings/bindings.js?");

/***/ }),

/***/ "./node_modules/.pnpm/file-uri-to-path@1.0.0/node_modules/file-uri-to-path/index.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/.pnpm/file-uri-to-path@1.0.0/node_modules/file-uri-to-path/index.js ***!
  \******************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/**\n * Module dependencies.\n */\n\nvar sep = (__webpack_require__(/*! path */ \"path\").sep) || '/';\n\n/**\n * Module exports.\n */\n\nmodule.exports = fileUriToPath;\n\n/**\n * File URI to Path function.\n *\n * @param {String} uri\n * @return {String} path\n * @api public\n */\n\nfunction fileUriToPath (uri) {\n  if ('string' != typeof uri ||\n      uri.length <= 7 ||\n      'file://' != uri.substring(0, 7)) {\n    throw new TypeError('must pass in a file:// URI to convert to a file path');\n  }\n\n  var rest = decodeURI(uri.substring(7));\n  var firstSlash = rest.indexOf('/');\n  var host = rest.substring(0, firstSlash);\n  var path = rest.substring(firstSlash + 1);\n\n  // 2.  Scheme Definition\n  // As a special case, <host> can be the string \"localhost\" or the empty\n  // string; this is interpreted as \"the machine from which the URL is\n  // being interpreted\".\n  if ('localhost' == host) host = '';\n\n  if (host) {\n    host = sep + sep + host;\n  }\n\n  // 3.2  Drives, drive letters, mount points, file system root\n  // Drive letters are mapped into the top of a file URI in various ways,\n  // depending on the implementation; some applications substitute\n  // vertical bar (\"|\") for the colon after the drive letter, yielding\n  // \"file:///c|/tmp/test.txt\".  In some cases, the colon is left\n  // unchanged, as in \"file:///c:/tmp/test.txt\".  In other cases, the\n  // colon is simply omitted, as in \"file:///c/tmp/test.txt\".\n  path = path.replace(/^(.+)\\|/, '$1:');\n\n  // for Windows, we need to invert the path separators from what a URI uses\n  if (sep == '\\\\') {\n    path = path.replace(/\\//g, '\\\\');\n  }\n\n  if (/^.+\\:/.test(path)) {\n    // has Windows drive at beginning of path\n  } else {\n    // unix path…\n    path = sep + path;\n  }\n\n  return host + path;\n}\n\n\n//# sourceURL=webpack://ts/./node_modules/.pnpm/file-uri-to-path@1.0.0/node_modules/file-uri-to-path/index.js?");

/***/ }),

/***/ "./src/greeter.ts":
/*!************************!*\
  !*** ./src/greeter.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nconst kfr = __webpack_require__(/*! bindings */ \"./node_modules/.pnpm/bindings@1.5.0/node_modules/bindings/bindings.js\")('kfr.node');\nclass Student {\n    constructor(firstName, middleInitial, lastName) {\n        this.firstName = firstName;\n        this.middleInitial = middleInitial;\n        this.lastName = lastName;\n        this.fullName = firstName + \" \" + middleInitial + \" \" + lastName;\n    }\n}\nfunction greeter(person) {\n    return \"Hello, \" + person.firstName + \" \" + person.lastName;\n}\nfunction kill(person) {\n    person.firstName = 'qweqwe';\n    return;\n}\nlet user = new Student(\"Jane\", \"M.\", \"User\");\n// document.body.textContent = greeter(user);\nkill(user);\nconsole.log(user);\nconsole.log(kfr);\n\n\n//# sourceURL=webpack://ts/./src/greeter.ts?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/greeter.ts");
/******/ 	
/******/ })()
;