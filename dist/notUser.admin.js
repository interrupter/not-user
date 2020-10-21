var notUser = (function (exports) {
	'use strict';

	/* global notFramework */

	class ncLogout extends notFramework.notController {
		constructor(app) {
			//notFramework.notCommon.log('init site app ', redirect, 'login');
			super(app);
			this.setModuleName('user');
			if (confirm('Хотите выйти?')) {
				this.make.user({}).$logout()
					.then(() => {
						document.location.href = '/login';
					})
					.catch((err) => {
						notFramework.notCommon.report(err);
					});
			} else {
				window.history.back();
			}
			return this;
		}
	}

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var assertString_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = assertString;

	function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	function assertString(input) {
	  var isString = typeof input === 'string' || input instanceof String;

	  if (!isString) {
	    var invalidType;

	    if (input === null) {
	      invalidType = 'null';
	    } else {
	      invalidType = _typeof(input);

	      if (invalidType === 'object' && input.constructor && input.constructor.hasOwnProperty('name')) {
	        invalidType = input.constructor.name;
	      } else {
	        invalidType = "a ".concat(invalidType);
	      }
	    }

	    throw new TypeError("Expected string but received ".concat(invalidType, "."));
	  }
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(assertString_1);

	var toDate_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = toDate;

	var _assertString = _interopRequireDefault(assertString_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function toDate(date) {
	  (0, _assertString.default)(date);
	  date = Date.parse(date);
	  return !isNaN(date) ? new Date(date) : null;
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(toDate_1);

	var alpha_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.commaDecimal = exports.dotDecimal = exports.arabicLocales = exports.englishLocales = exports.decimal = exports.alphanumeric = exports.alpha = void 0;
	var alpha = {
	  'en-US': /^[A-Z]+$/i,
	  'bg-BG': /^[А-Я]+$/i,
	  'cs-CZ': /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
	  'da-DK': /^[A-ZÆØÅ]+$/i,
	  'de-DE': /^[A-ZÄÖÜß]+$/i,
	  'el-GR': /^[Α-ώ]+$/i,
	  'es-ES': /^[A-ZÁÉÍÑÓÚÜ]+$/i,
	  'fr-FR': /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
	  'it-IT': /^[A-ZÀÉÈÌÎÓÒÙ]+$/i,
	  'nb-NO': /^[A-ZÆØÅ]+$/i,
	  'nl-NL': /^[A-ZÁÉËÏÓÖÜÚ]+$/i,
	  'nn-NO': /^[A-ZÆØÅ]+$/i,
	  'hu-HU': /^[A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
	  'pl-PL': /^[A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
	  'pt-PT': /^[A-ZÃÁÀÂÄÇÉÊËÍÏÕÓÔÖÚÜ]+$/i,
	  'ru-RU': /^[А-ЯЁ]+$/i,
	  'sl-SI': /^[A-ZČĆĐŠŽ]+$/i,
	  'sk-SK': /^[A-ZÁČĎÉÍŇÓŠŤÚÝŽĹŔĽÄÔ]+$/i,
	  'sr-RS@latin': /^[A-ZČĆŽŠĐ]+$/i,
	  'sr-RS': /^[А-ЯЂЈЉЊЋЏ]+$/i,
	  'sv-SE': /^[A-ZÅÄÖ]+$/i,
	  'tr-TR': /^[A-ZÇĞİıÖŞÜ]+$/i,
	  'uk-UA': /^[А-ЩЬЮЯЄIЇҐі]+$/i,
	  'ku-IQ': /^[ئابپتجچحخدرڕزژسشعغفڤقکگلڵمنوۆھەیێيطؤثآإأكضصةظذ]+$/i,
	  ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/,
	  he: /^[א-ת]+$/,
	  'fa-IR': /^['آابپتثجچهخدذرزژسشصضطظعغفقکگلمنوهی']+$/i
	};
	exports.alpha = alpha;
	var alphanumeric = {
	  'en-US': /^[0-9A-Z]+$/i,
	  'bg-BG': /^[0-9А-Я]+$/i,
	  'cs-CZ': /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
	  'da-DK': /^[0-9A-ZÆØÅ]+$/i,
	  'de-DE': /^[0-9A-ZÄÖÜß]+$/i,
	  'el-GR': /^[0-9Α-ω]+$/i,
	  'es-ES': /^[0-9A-ZÁÉÍÑÓÚÜ]+$/i,
	  'fr-FR': /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
	  'it-IT': /^[0-9A-ZÀÉÈÌÎÓÒÙ]+$/i,
	  'hu-HU': /^[0-9A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
	  'nb-NO': /^[0-9A-ZÆØÅ]+$/i,
	  'nl-NL': /^[0-9A-ZÁÉËÏÓÖÜÚ]+$/i,
	  'nn-NO': /^[0-9A-ZÆØÅ]+$/i,
	  'pl-PL': /^[0-9A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
	  'pt-PT': /^[0-9A-ZÃÁÀÂÄÇÉÊËÍÏÕÓÔÖÚÜ]+$/i,
	  'ru-RU': /^[0-9А-ЯЁ]+$/i,
	  'sl-SI': /^[0-9A-ZČĆĐŠŽ]+$/i,
	  'sk-SK': /^[0-9A-ZÁČĎÉÍŇÓŠŤÚÝŽĹŔĽÄÔ]+$/i,
	  'sr-RS@latin': /^[0-9A-ZČĆŽŠĐ]+$/i,
	  'sr-RS': /^[0-9А-ЯЂЈЉЊЋЏ]+$/i,
	  'sv-SE': /^[0-9A-ZÅÄÖ]+$/i,
	  'tr-TR': /^[0-9A-ZÇĞİıÖŞÜ]+$/i,
	  'uk-UA': /^[0-9А-ЩЬЮЯЄIЇҐі]+$/i,
	  'ku-IQ': /^[٠١٢٣٤٥٦٧٨٩0-9ئابپتجچحخدرڕزژسشعغفڤقکگلڵمنوۆھەیێيطؤثآإأكضصةظذ]+$/i,
	  ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/,
	  he: /^[0-9א-ת]+$/,
	  'fa-IR': /^['0-9آابپتثجچهخدذرزژسشصضطظعغفقکگلمنوهی۱۲۳۴۵۶۷۸۹۰']+$/i
	};
	exports.alphanumeric = alphanumeric;
	var decimal = {
	  'en-US': '.',
	  ar: '٫'
	};
	exports.decimal = decimal;
	var englishLocales = ['AU', 'GB', 'HK', 'IN', 'NZ', 'ZA', 'ZM'];
	exports.englishLocales = englishLocales;

	for (var locale, i = 0; i < englishLocales.length; i++) {
	  locale = "en-".concat(englishLocales[i]);
	  alpha[locale] = alpha['en-US'];
	  alphanumeric[locale] = alphanumeric['en-US'];
	  decimal[locale] = decimal['en-US'];
	} // Source: http://www.localeplanet.com/java/


	var arabicLocales = ['AE', 'BH', 'DZ', 'EG', 'IQ', 'JO', 'KW', 'LB', 'LY', 'MA', 'QM', 'QA', 'SA', 'SD', 'SY', 'TN', 'YE'];
	exports.arabicLocales = arabicLocales;

	for (var _locale, _i = 0; _i < arabicLocales.length; _i++) {
	  _locale = "ar-".concat(arabicLocales[_i]);
	  alpha[_locale] = alpha.ar;
	  alphanumeric[_locale] = alphanumeric.ar;
	  decimal[_locale] = decimal.ar;
	} // Source: https://en.wikipedia.org/wiki/Decimal_mark


	var dotDecimal = ['ar-EG', 'ar-LB', 'ar-LY'];
	exports.dotDecimal = dotDecimal;
	var commaDecimal = ['bg-BG', 'cs-CZ', 'da-DK', 'de-DE', 'el-GR', 'en-ZM', 'es-ES', 'fr-FR', 'it-IT', 'ku-IQ', 'hu-HU', 'nb-NO', 'nn-NO', 'nl-NL', 'pl-PL', 'pt-PT', 'ru-RU', 'sl-SI', 'sr-RS@latin', 'sr-RS', 'sv-SE', 'tr-TR', 'uk-UA'];
	exports.commaDecimal = commaDecimal;

	for (var _i2 = 0; _i2 < dotDecimal.length; _i2++) {
	  decimal[dotDecimal[_i2]] = decimal['en-US'];
	}

	for (var _i3 = 0; _i3 < commaDecimal.length; _i3++) {
	  decimal[commaDecimal[_i3]] = ',';
	}

	alpha['pt-BR'] = alpha['pt-PT'];
	alphanumeric['pt-BR'] = alphanumeric['pt-PT'];
	decimal['pt-BR'] = decimal['pt-PT']; // see #862

	alpha['pl-Pl'] = alpha['pl-PL'];
	alphanumeric['pl-Pl'] = alphanumeric['pl-PL'];
	decimal['pl-Pl'] = decimal['pl-PL'];
	});

	unwrapExports(alpha_1);
	var alpha_2 = alpha_1.commaDecimal;
	var alpha_3 = alpha_1.dotDecimal;
	var alpha_4 = alpha_1.arabicLocales;
	var alpha_5 = alpha_1.englishLocales;
	var alpha_6 = alpha_1.decimal;
	var alpha_7 = alpha_1.alphanumeric;
	var alpha_8 = alpha_1.alpha;

	var isFloat_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isFloat;
	exports.locales = void 0;

	var _assertString = _interopRequireDefault(assertString_1);



	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function isFloat(str, options) {
	  (0, _assertString.default)(str);
	  options = options || {};
	  var float = new RegExp("^(?:[-+])?(?:[0-9]+)?(?:\\".concat(options.locale ? alpha_1.decimal[options.locale] : '.', "[0-9]*)?(?:[eE][\\+\\-]?(?:[0-9]+))?$"));

	  if (str === '' || str === '.' || str === '-' || str === '+') {
	    return false;
	  }

	  var value = parseFloat(str.replace(',', '.'));
	  return float.test(str) && (!options.hasOwnProperty('min') || value >= options.min) && (!options.hasOwnProperty('max') || value <= options.max) && (!options.hasOwnProperty('lt') || value < options.lt) && (!options.hasOwnProperty('gt') || value > options.gt);
	}

	var locales = Object.keys(alpha_1.decimal);
	exports.locales = locales;
	});

	unwrapExports(isFloat_1);
	var isFloat_2 = isFloat_1.locales;

	var toFloat_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = toFloat;

	var _isFloat = _interopRequireDefault(isFloat_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function toFloat(str) {
	  if (!(0, _isFloat.default)(str)) return NaN;
	  return parseFloat(str);
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(toFloat_1);

	var toInt_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = toInt;

	var _assertString = _interopRequireDefault(assertString_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function toInt(str, radix) {
	  (0, _assertString.default)(str);
	  return parseInt(str, radix || 10);
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(toInt_1);

	var toBoolean_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = toBoolean;

	var _assertString = _interopRequireDefault(assertString_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function toBoolean(str, strict) {
	  (0, _assertString.default)(str);

	  if (strict) {
	    return str === '1' || /^true$/i.test(str);
	  }

	  return str !== '0' && !/^false$/i.test(str) && str !== '';
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(toBoolean_1);

	var equals_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = equals;

	var _assertString = _interopRequireDefault(assertString_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function equals(str, comparison) {
	  (0, _assertString.default)(str);
	  return str === comparison;
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(equals_1);

	var toString_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = toString;

	function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	function toString(input) {
	  if (_typeof(input) === 'object' && input !== null) {
	    if (typeof input.toString === 'function') {
	      input = input.toString();
	    } else {
	      input = '[object Object]';
	    }
	  } else if (input === null || typeof input === 'undefined' || isNaN(input) && !input.length) {
	    input = '';
	  }

	  return String(input);
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(toString_1);

	var merge_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = merge;

	function merge() {
	  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var defaults = arguments.length > 1 ? arguments[1] : undefined;

	  for (var key in defaults) {
	    if (typeof obj[key] === 'undefined') {
	      obj[key] = defaults[key];
	    }
	  }

	  return obj;
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(merge_1);

	var contains_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = contains;

	var _assertString = _interopRequireDefault(assertString_1);

	var _toString = _interopRequireDefault(toString_1);

	var _merge = _interopRequireDefault(merge_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var defaulContainsOptions = {
	  ignoreCase: false
	};

	function contains(str, elem, options) {
	  (0, _assertString.default)(str);
	  options = (0, _merge.default)(options, defaulContainsOptions);
	  return options.ignoreCase ? str.toLowerCase().indexOf((0, _toString.default)(elem).toLowerCase()) >= 0 : str.indexOf((0, _toString.default)(elem)) >= 0;
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(contains_1);

	var matches_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = matches;

	var _assertString = _interopRequireDefault(assertString_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function matches(str, pattern, modifiers) {
	  (0, _assertString.default)(str);

	  if (Object.prototype.toString.call(pattern) !== '[object RegExp]') {
	    pattern = new RegExp(pattern, modifiers);
	  }

	  return pattern.test(str);
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(matches_1);

	var isByteLength_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isByteLength;

	var _assertString = _interopRequireDefault(assertString_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	/* eslint-disable prefer-rest-params */
	function isByteLength(str, options) {
	  (0, _assertString.default)(str);
	  var min;
	  var max;

	  if (_typeof(options) === 'object') {
	    min = options.min || 0;
	    max = options.max;
	  } else {
	    // backwards compatibility: isByteLength(str, min [, max])
	    min = arguments[1];
	    max = arguments[2];
	  }

	  var len = encodeURI(str).split(/%..|./).length - 1;
	  return len >= min && (typeof max === 'undefined' || len <= max);
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(isByteLength_1);

	var isFQDN_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isFQDN;

	var _assertString = _interopRequireDefault(assertString_1);

	var _merge = _interopRequireDefault(merge_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var default_fqdn_options = {
	  require_tld: true,
	  allow_underscores: false,
	  allow_trailing_dot: false
	};

	function isFQDN(str, options) {
	  (0, _assertString.default)(str);
	  options = (0, _merge.default)(options, default_fqdn_options);
	  /* Remove the optional trailing dot before checking validity */

	  if (options.allow_trailing_dot && str[str.length - 1] === '.') {
	    str = str.substring(0, str.length - 1);
	  }

	  var parts = str.split('.');

	  for (var i = 0; i < parts.length; i++) {
	    if (parts[i].length > 63) {
	      return false;
	    }
	  }

	  if (options.require_tld) {
	    var tld = parts.pop();

	    if (!parts.length || !/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(tld)) {
	      return false;
	    } // disallow spaces && special characers


	    if (/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20\u00A9\uFFFD]/.test(tld)) {
	      return false;
	    }
	  }

	  for (var part, _i = 0; _i < parts.length; _i++) {
	    part = parts[_i];

	    if (options.allow_underscores) {
	      part = part.replace(/_/g, '');
	    }

	    if (!/^[a-z\u00a1-\uffff0-9-]+$/i.test(part)) {
	      return false;
	    } // disallow full-width chars


	    if (/[\uff01-\uff5e]/.test(part)) {
	      return false;
	    }

	    if (part[0] === '-' || part[part.length - 1] === '-') {
	      return false;
	    }
	  }

	  return true;
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(isFQDN_1);

	var isIP_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isIP;

	var _assertString = _interopRequireDefault(assertString_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	11.3.  Examples

	   The following addresses

	             fe80::1234 (on the 1st link of the node)
	             ff02::5678 (on the 5th link of the node)
	             ff08::9abc (on the 10th organization of the node)

	   would be represented as follows:

	             fe80::1234%1
	             ff02::5678%5
	             ff08::9abc%10

	   (Here we assume a natural translation from a zone index to the
	   <zone_id> part, where the Nth zone of any scope is translated into
	   "N".)

	   If we use interface names as <zone_id>, those addresses could also be
	   represented as follows:

	            fe80::1234%ne0
	            ff02::5678%pvc1.3
	            ff08::9abc%interface10

	   where the interface "ne0" belongs to the 1st link, "pvc1.3" belongs
	   to the 5th link, and "interface10" belongs to the 10th organization.
	 * * */
	var ipv4Maybe = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;
	var ipv6Block = /^[0-9A-F]{1,4}$/i;

	function isIP(str) {
	  var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
	  (0, _assertString.default)(str);
	  version = String(version);

	  if (!version) {
	    return isIP(str, 4) || isIP(str, 6);
	  } else if (version === '4') {
	    if (!ipv4Maybe.test(str)) {
	      return false;
	    }

	    var parts = str.split('.').sort(function (a, b) {
	      return a - b;
	    });
	    return parts[3] <= 255;
	  } else if (version === '6') {
	    var addressAndZone = [str]; // ipv6 addresses could have scoped architecture
	    // according to https://tools.ietf.org/html/rfc4007#section-11

	    if (str.includes('%')) {
	      addressAndZone = str.split('%');

	      if (addressAndZone.length !== 2) {
	        // it must be just two parts
	        return false;
	      }

	      if (!addressAndZone[0].includes(':')) {
	        // the first part must be the address
	        return false;
	      }

	      if (addressAndZone[1] === '') {
	        // the second part must not be empty
	        return false;
	      }
	    }

	    var blocks = addressAndZone[0].split(':');
	    var foundOmissionBlock = false; // marker to indicate ::
	    // At least some OS accept the last 32 bits of an IPv6 address
	    // (i.e. 2 of the blocks) in IPv4 notation, and RFC 3493 says
	    // that '::ffff:a.b.c.d' is valid for IPv4-mapped IPv6 addresses,
	    // and '::a.b.c.d' is deprecated, but also valid.

	    var foundIPv4TransitionBlock = isIP(blocks[blocks.length - 1], 4);
	    var expectedNumberOfBlocks = foundIPv4TransitionBlock ? 7 : 8;

	    if (blocks.length > expectedNumberOfBlocks) {
	      return false;
	    } // initial or final ::


	    if (str === '::') {
	      return true;
	    } else if (str.substr(0, 2) === '::') {
	      blocks.shift();
	      blocks.shift();
	      foundOmissionBlock = true;
	    } else if (str.substr(str.length - 2) === '::') {
	      blocks.pop();
	      blocks.pop();
	      foundOmissionBlock = true;
	    }

	    for (var i = 0; i < blocks.length; ++i) {
	      // test for a :: which can not be at the string start/end
	      // since those cases have been handled above
	      if (blocks[i] === '' && i > 0 && i < blocks.length - 1) {
	        if (foundOmissionBlock) {
	          return false; // multiple :: in address
	        }

	        foundOmissionBlock = true;
	      } else if (foundIPv4TransitionBlock && i === blocks.length - 1) ; else if (!ipv6Block.test(blocks[i])) {
	        return false;
	      }
	    }

	    if (foundOmissionBlock) {
	      return blocks.length >= 1;
	    }

	    return blocks.length === expectedNumberOfBlocks;
	  }

	  return false;
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(isIP_1);

	var isEmail_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isEmail;

	var _assertString = _interopRequireDefault(assertString_1);

	var _merge = _interopRequireDefault(merge_1);

	var _isByteLength = _interopRequireDefault(isByteLength_1);

	var _isFQDN = _interopRequireDefault(isFQDN_1);

	var _isIP = _interopRequireDefault(isIP_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

	function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

	function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

	function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

	function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

	function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

	var default_email_options = {
	  allow_display_name: false,
	  require_display_name: false,
	  allow_utf8_local_part: true,
	  require_tld: true
	};
	/* eslint-disable max-len */

	/* eslint-disable no-control-regex */

	var splitNameAddress = /^([^\x00-\x1F\x7F-\x9F\cX]+)<(.+)>$/i;
	var emailUserPart = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i;
	var gmailUserPart = /^[a-z\d]+$/;
	var quotedEmailUser = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i;
	var emailUserUtf8Part = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i;
	var quotedEmailUserUtf8 = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;
	var defaultMaxEmailLength = 254;
	/* eslint-enable max-len */

	/* eslint-enable no-control-regex */

	/**
	 * Validate display name according to the RFC2822: https://tools.ietf.org/html/rfc2822#appendix-A.1.2
	 * @param {String} display_name
	 */

	function validateDisplayName(display_name) {
	  var trim_quotes = display_name.match(/^"(.+)"$/i);
	  var display_name_without_quotes = trim_quotes ? trim_quotes[1] : display_name; // display name with only spaces is not valid

	  if (!display_name_without_quotes.trim()) {
	    return false;
	  } // check whether display name contains illegal character


	  var contains_illegal = /[\.";<>]/.test(display_name_without_quotes);

	  if (contains_illegal) {
	    // if contains illegal characters,
	    // must to be enclosed in double-quotes, otherwise it's not a valid display name
	    if (!trim_quotes) {
	      return false;
	    } // the quotes in display name must start with character symbol \


	    var all_start_with_back_slash = display_name_without_quotes.split('"').length === display_name_without_quotes.split('\\"').length;

	    if (!all_start_with_back_slash) {
	      return false;
	    }
	  }

	  return true;
	}

	function isEmail(str, options) {
	  (0, _assertString.default)(str);
	  options = (0, _merge.default)(options, default_email_options);

	  if (options.require_display_name || options.allow_display_name) {
	    var display_email = str.match(splitNameAddress);

	    if (display_email) {
	      var display_name;

	      var _display_email = _slicedToArray(display_email, 3);

	      display_name = _display_email[1];
	      str = _display_email[2];

	      // sometimes need to trim the last space to get the display name
	      // because there may be a space between display name and email address
	      // eg. myname <address@gmail.com>
	      // the display name is `myname` instead of `myname `, so need to trim the last space
	      if (display_name.endsWith(' ')) {
	        display_name = display_name.substr(0, display_name.length - 1);
	      }

	      if (!validateDisplayName(display_name)) {
	        return false;
	      }
	    } else if (options.require_display_name) {
	      return false;
	    }
	  }

	  if (!options.ignore_max_length && str.length > defaultMaxEmailLength) {
	    return false;
	  }

	  var parts = str.split('@');
	  var domain = parts.pop();
	  var user = parts.join('@');
	  var lower_domain = domain.toLowerCase();

	  if (options.domain_specific_validation && (lower_domain === 'gmail.com' || lower_domain === 'googlemail.com')) {
	    /*
	      Previously we removed dots for gmail addresses before validating.
	      This was removed because it allows `multiple..dots@gmail.com`
	      to be reported as valid, but it is not.
	      Gmail only normalizes single dots, removing them from here is pointless,
	      should be done in normalizeEmail
	    */
	    user = user.toLowerCase(); // Removing sub-address from username before gmail validation

	    var username = user.split('+')[0]; // Dots are not included in gmail length restriction

	    if (!(0, _isByteLength.default)(username.replace('.', ''), {
	      min: 6,
	      max: 30
	    })) {
	      return false;
	    }

	    var _user_parts = username.split('.');

	    for (var i = 0; i < _user_parts.length; i++) {
	      if (!gmailUserPart.test(_user_parts[i])) {
	        return false;
	      }
	    }
	  }

	  if (!(0, _isByteLength.default)(user, {
	    max: 64
	  }) || !(0, _isByteLength.default)(domain, {
	    max: 254
	  })) {
	    return false;
	  }

	  if (!(0, _isFQDN.default)(domain, {
	    require_tld: options.require_tld
	  })) {
	    if (!options.allow_ip_domain) {
	      return false;
	    }

	    if (!(0, _isIP.default)(domain)) {
	      if (!domain.startsWith('[') || !domain.endsWith(']')) {
	        return false;
	      }

	      var noBracketdomain = domain.substr(1, domain.length - 2);

	      if (noBracketdomain.length === 0 || !(0, _isIP.default)(noBracketdomain)) {
	        return false;
	      }
	    }
	  }

	  if (user[0] === '"') {
	    user = user.slice(1, user.length - 1);
	    return options.allow_utf8_local_part ? quotedEmailUserUtf8.test(user) : quotedEmailUser.test(user);
	  }

	  var pattern = options.allow_utf8_local_part ? emailUserUtf8Part : emailUserPart;
	  var user_parts = user.split('.');

	  for (var _i2 = 0; _i2 < user_parts.length; _i2++) {
	    if (!pattern.test(user_parts[_i2])) {
	      return false;
	    }
	  }

	  return true;
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(isEmail_1);

	var isURL_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isURL;

	var _assertString = _interopRequireDefault(assertString_1);

	var _isFQDN = _interopRequireDefault(isFQDN_1);

	var _isIP = _interopRequireDefault(isIP_1);

	var _merge = _interopRequireDefault(merge_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*
	options for isURL method

	require_protocol - if set as true isURL will return false if protocol is not present in the URL
	require_valid_protocol - isURL will check if the URL's protocol is present in the protocols option
	protocols - valid protocols can be modified with this option
	require_host - if set as false isURL will not check if host is present in the URL
	allow_protocol_relative_urls - if set as true protocol relative URLs will be allowed

	*/
	var default_url_options = {
	  protocols: ['http', 'https', 'ftp'],
	  require_tld: true,
	  require_protocol: false,
	  require_host: true,
	  require_valid_protocol: true,
	  allow_underscores: false,
	  allow_trailing_dot: false,
	  allow_protocol_relative_urls: false
	};
	var wrapped_ipv6 = /^\[([^\]]+)\](?::([0-9]+))?$/;

	function isRegExp(obj) {
	  return Object.prototype.toString.call(obj) === '[object RegExp]';
	}

	function checkHost(host, matches) {
	  for (var i = 0; i < matches.length; i++) {
	    var match = matches[i];

	    if (host === match || isRegExp(match) && match.test(host)) {
	      return true;
	    }
	  }

	  return false;
	}

	function isURL(url, options) {
	  (0, _assertString.default)(url);

	  if (!url || url.length >= 2083 || /[\s<>]/.test(url)) {
	    return false;
	  }

	  if (url.indexOf('mailto:') === 0) {
	    return false;
	  }

	  options = (0, _merge.default)(options, default_url_options);
	  var protocol, auth, host, hostname, port, port_str, split, ipv6;
	  split = url.split('#');
	  url = split.shift();
	  split = url.split('?');
	  url = split.shift();
	  split = url.split('://');

	  if (split.length > 1) {
	    protocol = split.shift().toLowerCase();

	    if (options.require_valid_protocol && options.protocols.indexOf(protocol) === -1) {
	      return false;
	    }
	  } else if (options.require_protocol) {
	    return false;
	  } else if (url.substr(0, 2) === '//') {
	    if (!options.allow_protocol_relative_urls) {
	      return false;
	    }

	    split[0] = url.substr(2);
	  }

	  url = split.join('://');

	  if (url === '') {
	    return false;
	  }

	  split = url.split('/');
	  url = split.shift();

	  if (url === '' && !options.require_host) {
	    return true;
	  }

	  split = url.split('@');

	  if (split.length > 1) {
	    if (options.disallow_auth) {
	      return false;
	    }

	    auth = split.shift();

	    if (auth.indexOf(':') >= 0 && auth.split(':').length > 2) {
	      return false;
	    }
	  }

	  hostname = split.join('@');
	  port_str = null;
	  ipv6 = null;
	  var ipv6_match = hostname.match(wrapped_ipv6);

	  if (ipv6_match) {
	    host = '';
	    ipv6 = ipv6_match[1];
	    port_str = ipv6_match[2] || null;
	  } else {
	    split = hostname.split(':');
	    host = split.shift();

	    if (split.length) {
	      port_str = split.join(':');
	    }
	  }

	  if (port_str !== null) {
	    port = parseInt(port_str, 10);

	    if (!/^[0-9]+$/.test(port_str) || port <= 0 || port > 65535) {
	      return false;
	    }
	  }

	  if (!(0, _isIP.default)(host) && !(0, _isFQDN.default)(host, options) && (!ipv6 || !(0, _isIP.default)(ipv6, 6))) {
	    return false;
	  }

	  host = host || ipv6;

	  if (options.host_whitelist && !checkHost(host, options.host_whitelist)) {
	    return false;
	  }

	  if (options.host_blacklist && checkHost(host, options.host_blacklist)) {
	    return false;
	  }

	  return true;
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(isURL_1);

	var isMACAddress_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isMACAddress;

	var _assertString = _interopRequireDefault(assertString_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var macAddress = /^([0-9a-fA-F][0-9a-fA-F]:){5}([0-9a-fA-F][0-9a-fA-F])$/;
	var macAddressNoColons = /^([0-9a-fA-F]){12}$/;
	var macAddressWithHyphen = /^([0-9a-fA-F][0-9a-fA-F]-){5}([0-9a-fA-F][0-9a-fA-F])$/;
	var macAddressWithSpaces = /^([0-9a-fA-F][0-9a-fA-F]\s){5}([0-9a-fA-F][0-9a-fA-F])$/;
	var macAddressWithDots = /^([0-9a-fA-F]{4}).([0-9a-fA-F]{4}).([0-9a-fA-F]{4})$/;

	function isMACAddress(str, options) {
	  (0, _assertString.default)(str);

	  if (options && options.no_colons) {
	    return macAddressNoColons.test(str);
	  }

	  return macAddress.test(str) || macAddressWithHyphen.test(str) || macAddressWithSpaces.test(str) || macAddressWithDots.test(str);
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(isMACAddress_1);

	var isIPRange_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isIPRange;

	var _assertString = _interopRequireDefault(assertString_1);

	var _isIP = _interopRequireDefault(isIP_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var subnetMaybe = /^\d{1,2}$/;

	function isIPRange(str) {
	  (0, _assertString.default)(str);
	  var parts = str.split('/'); // parts[0] -> ip, parts[1] -> subnet

	  if (parts.length !== 2) {
	    return false;
	  }

	  if (!subnetMaybe.test(parts[1])) {
	    return false;
	  } // Disallow preceding 0 i.e. 01, 02, ...


	  if (parts[1].length > 1 && parts[1].startsWith('0')) {
	    return false;
	  }

	  return (0, _isIP.default)(parts[0], 4) && parts[1] <= 32 && parts[1] >= 0;
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(isIPRange_1);

	var isDate_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isDate;

	function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

	function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

	function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

	function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

	function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

	function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

	function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

	function isValidFormat(format) {
	  return /(^(y{4}|y{2})[\/-](m{1,2})[\/-](d{1,2})$)|(^(m{1,2})[\/-](d{1,2})[\/-]((y{4}|y{2})$))|(^(d{1,2})[\/-](m{1,2})[\/-]((y{4}|y{2})$))/gi.test(format);
	}

	function zip(date, format) {
	  var zippedArr = [],
	      len = Math.min(date.length, format.length);

	  for (var i = 0; i < len; i++) {
	    zippedArr.push([date[i], format[i]]);
	  }

	  return zippedArr;
	}

	function isDate(input) {
	  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'YYYY/MM/DD';

	  if (typeof input === 'string' && isValidFormat(format)) {
	    var splitter = /[-/]/,
	        dateAndFormat = zip(input.split(splitter), format.toLowerCase().split(splitter)),
	        dateObj = {};

	    var _iterator = _createForOfIteratorHelper(dateAndFormat),
	        _step;

	    try {
	      for (_iterator.s(); !(_step = _iterator.n()).done;) {
	        var _step$value = _slicedToArray(_step.value, 2),
	            dateWord = _step$value[0],
	            formatWord = _step$value[1];

	        if (dateWord.length !== formatWord.length) {
	          return false;
	        }

	        dateObj[formatWord.charAt(0)] = dateWord;
	      }
	    } catch (err) {
	      _iterator.e(err);
	    } finally {
	      _iterator.f();
	    }

	    return new Date("".concat(dateObj.m, "/").concat(dateObj.d, "/").concat(dateObj.y)).getDate() === +dateObj.d;
	  }

	  return Object.prototype.toString.call(input) === '[object Date]' && isFinite(input);
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(isDate_1);

	var isBoolean_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isBoolean;

	var _assertString = _interopRequireDefault(assertString_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function isBoolean(str) {
	  (0, _assertString.default)(str);
	  return ['true', 'false', '1', '0'].indexOf(str) >= 0;
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(isBoolean_1);

	var isLocale_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isLocale;

	var _assertString = _interopRequireDefault(assertString_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var localeReg = /^[A-z]{2,4}([_-]([A-z]{4}|[\d]{3}))?([_-]([A-z]{2}|[\d]{3}))?$/;

	function isLocale(str) {
	  (0, _assertString.default)(str);

	  if (str === 'en_US_POSIX' || str === 'ca_ES_VALENCIA') {
	    return true;
	  }

	  return localeReg.test(str);
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(isLocale_1);

	var isAlpha_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isAlpha;
	exports.locales = void 0;

	var _assertString = _interopRequireDefault(assertString_1);



	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function isAlpha(str) {
	  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en-US';
	  (0, _assertString.default)(str);

	  if (locale in alpha_1.alpha) {
	    return alpha_1.alpha[locale].test(str);
	  }

	  throw new Error("Invalid locale '".concat(locale, "'"));
	}

	var locales = Object.keys(alpha_1.alpha);
	exports.locales = locales;
	});

	unwrapExports(isAlpha_1);
	var isAlpha_2 = isAlpha_1.locales;

	var isAlphanumeric_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isAlphanumeric;
	exports.locales = void 0;

	var _assertString = _interopRequireDefault(assertString_1);



	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function isAlphanumeric(str) {
	  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en-US';
	  (0, _assertString.default)(str);

	  if (locale in alpha_1.alphanumeric) {
	    return alpha_1.alphanumeric[locale].test(str);
	  }

	  throw new Error("Invalid locale '".concat(locale, "'"));
	}

	var locales = Object.keys(alpha_1.alphanumeric);
	exports.locales = locales;
	});

	unwrapExports(isAlphanumeric_1);
	var isAlphanumeric_2 = isAlphanumeric_1.locales;

	var isNumeric_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isNumeric;

	var _assertString = _interopRequireDefault(assertString_1);



	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var numericNoSymbols = /^[0-9]+$/;

	function isNumeric(str, options) {
	  (0, _assertString.default)(str);

	  if (options && options.no_symbols) {
	    return numericNoSymbols.test(str);
	  }

	  return new RegExp("^[+-]?([0-9]*[".concat((options || {}).locale ? alpha_1.decimal[options.locale] : '.', "])?[0-9]+$")).test(str);
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(isNumeric_1);

	var isPassportNumber_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isPassportNumber;

	var _assertString = _interopRequireDefault(assertString_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Reference:
	 * https://en.wikipedia.org/ -- Wikipedia
	 * https://docs.microsoft.com/en-us/microsoft-365/compliance/eu-passport-number -- EU Passport Number
	 * https://countrycode.org/ -- Country Codes
	 */
	var passportRegexByCountryCode = {
	  AM: /^[A-Z]{2}\d{7}$/,
	  // ARMENIA
	  AR: /^[A-Z]{3}\d{6}$/,
	  // ARGENTINA
	  AT: /^[A-Z]\d{7}$/,
	  // AUSTRIA
	  AU: /^[A-Z]\d{7}$/,
	  // AUSTRALIA
	  BE: /^[A-Z]{2}\d{6}$/,
	  // BELGIUM
	  BG: /^\d{9}$/,
	  // BULGARIA
	  CA: /^[A-Z]{2}\d{6}$/,
	  // CANADA
	  CH: /^[A-Z]\d{7}$/,
	  // SWITZERLAND
	  CN: /^[GE]\d{8}$/,
	  // CHINA [G=Ordinary, E=Electronic] followed by 8-digits
	  CY: /^[A-Z](\d{6}|\d{8})$/,
	  // CYPRUS
	  CZ: /^\d{8}$/,
	  // CZECH REPUBLIC
	  DE: /^[CFGHJKLMNPRTVWXYZ0-9]{9}$/,
	  // GERMANY
	  DK: /^\d{9}$/,
	  // DENMARK
	  DZ: /^\d{9}$/,
	  // ALGERIA
	  EE: /^([A-Z]\d{7}|[A-Z]{2}\d{7})$/,
	  // ESTONIA (K followed by 7-digits), e-passports have 2 UPPERCASE followed by 7 digits
	  ES: /^[A-Z0-9]{2}([A-Z0-9]?)\d{6}$/,
	  // SPAIN
	  FI: /^[A-Z]{2}\d{7}$/,
	  // FINLAND
	  FR: /^\d{2}[A-Z]{2}\d{5}$/,
	  // FRANCE
	  GB: /^\d{9}$/,
	  // UNITED KINGDOM
	  GR: /^[A-Z]{2}\d{7}$/,
	  // GREECE
	  HR: /^\d{9}$/,
	  // CROATIA
	  HU: /^[A-Z]{2}(\d{6}|\d{7})$/,
	  // HUNGARY
	  IE: /^[A-Z0-9]{2}\d{7}$/,
	  // IRELAND
	  IN: /^[A-Z]{1}-?\d{7}$/,
	  // INDIA
	  IS: /^(A)\d{7}$/,
	  // ICELAND
	  IT: /^[A-Z0-9]{2}\d{7}$/,
	  // ITALY
	  JP: /^[A-Z]{2}\d{7}$/,
	  // JAPAN
	  KR: /^[MS]\d{8}$/,
	  // SOUTH KOREA, REPUBLIC OF KOREA, [S=PS Passports, M=PM Passports]
	  LT: /^[A-Z0-9]{8}$/,
	  // LITHUANIA
	  LU: /^[A-Z0-9]{8}$/,
	  // LUXEMBURG
	  LV: /^[A-Z0-9]{2}\d{7}$/,
	  // LATVIA
	  MT: /^\d{7}$/,
	  // MALTA
	  NL: /^[A-Z]{2}[A-Z0-9]{6}\d$/,
	  // NETHERLANDS
	  PO: /^[A-Z]{2}\d{7}$/,
	  // POLAND
	  PT: /^[A-Z]\d{6}$/,
	  // PORTUGAL
	  RO: /^\d{8,9}$/,
	  // ROMANIA
	  SE: /^\d{8}$/,
	  // SWEDEN
	  SL: /^(P)[A-Z]\d{7}$/,
	  // SLOVANIA
	  SK: /^[0-9A-Z]\d{7}$/,
	  // SLOVAKIA
	  TR: /^[A-Z]\d{8}$/,
	  // TURKEY
	  UA: /^[A-Z]{2}\d{6}$/,
	  // UKRAINE
	  US: /^\d{9}$/ // UNITED STATES

	};
	/**
	 * Check if str is a valid passport number
	 * relative to provided ISO Country Code.
	 *
	 * @param {string} str
	 * @param {string} countryCode
	 * @return {boolean}
	 */

	function isPassportNumber(str, countryCode) {
	  (0, _assertString.default)(str);
	  /** Remove All Whitespaces, Convert to UPPERCASE */

	  var normalizedStr = str.replace(/\s/g, '').toUpperCase();
	  return countryCode.toUpperCase() in passportRegexByCountryCode && passportRegexByCountryCode[countryCode].test(normalizedStr);
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(isPassportNumber_1);

	var isInt_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isInt;

	var _assertString = _interopRequireDefault(assertString_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var int = /^(?:[-+]?(?:0|[1-9][0-9]*))$/;
	var intLeadingZeroes = /^[-+]?[0-9]+$/;

	function isInt(str, options) {
	  (0, _assertString.default)(str);
	  options = options || {}; // Get the regex to use for testing, based on whether
	  // leading zeroes are allowed or not.

	  var regex = options.hasOwnProperty('allow_leading_zeroes') && !options.allow_leading_zeroes ? int : intLeadingZeroes; // Check min/max/lt/gt

	  var minCheckPassed = !options.hasOwnProperty('min') || str >= options.min;
	  var maxCheckPassed = !options.hasOwnProperty('max') || str <= options.max;
	  var ltCheckPassed = !options.hasOwnProperty('lt') || str < options.lt;
	  var gtCheckPassed = !options.hasOwnProperty('gt') || str > options.gt;
	  return regex.test(str) && minCheckPassed && maxCheckPassed && ltCheckPassed && gtCheckPassed;
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(isInt_1);

	var isPort_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isPort;

	var _isInt = _interopRequireDefault(isInt_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function isPort(str) {
	  return (0, _isInt.default)(str, {
	    min: 0,
	    max: 65535
	  });
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(isPort_1);

	var isLowercase_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isLowercase;

	var _assertString = _interopRequireDefault(assertString_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function isLowercase(str) {
	  (0, _assertString.default)(str);
	  return str === str.toLowerCase();
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(isLowercase_1);

	var isUppercase_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isUppercase;

	var _assertString = _interopRequireDefault(assertString_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function isUppercase(str) {
	  (0, _assertString.default)(str);
	  return str === str.toUpperCase();
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(isUppercase_1);

	var isIMEI_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isIMEI;

	var _assertString = _interopRequireDefault(assertString_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var imeiRegexWithoutHypens = /^[0-9]{15}$/;
	var imeiRegexWithHypens = /^\d{2}-\d{6}-\d{6}-\d{1}$/;

	function isIMEI(str, options) {
	  (0, _assertString.default)(str);
	  options = options || {}; // default regex for checking imei is the one without hyphens

	  var imeiRegex = imeiRegexWithoutHypens;

	  if (options.allow_hyphens) {
	    imeiRegex = imeiRegexWithHypens;
	  }

	  if (!imeiRegex.test(str)) {
	    return false;
	  }

	  str = str.replace(/-/g, '');
	  var sum = 0,
	      mul = 2,
	      l = 14;

	  for (var i = 0; i < l; i++) {
	    var digit = str.substring(l - i - 1, l - i);
	    var tp = parseInt(digit, 10) * mul;

	    if (tp >= 10) {
	      sum += tp % 10 + 1;
	    } else {
	      sum += tp;
	    }

	    if (mul === 1) {
	      mul += 1;
	    } else {
	      mul -= 1;
	    }
	  }

	  var chk = (10 - sum % 10) % 10;

	  if (chk !== parseInt(str.substring(14, 15), 10)) {
	    return false;
	  }

	  return true;
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(isIMEI_1);

	var isAscii_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isAscii;

	var _assertString = _interopRequireDefault(assertString_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* eslint-disable no-control-regex */
	var ascii = /^[\x00-\x7F]+$/;
	/* eslint-enable no-control-regex */

	function isAscii(str) {
	  (0, _assertString.default)(str);
	  return ascii.test(str);
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(isAscii_1);

	var isFullWidth_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isFullWidth;
	exports.fullWidth = void 0;

	var _assertString = _interopRequireDefault(assertString_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var fullWidth = /[^\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;
	exports.fullWidth = fullWidth;

	function isFullWidth(str) {
	  (0, _assertString.default)(str);
	  return fullWidth.test(str);
	}
	});

	unwrapExports(isFullWidth_1);
	var isFullWidth_2 = isFullWidth_1.fullWidth;

	var isHalfWidth_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isHalfWidth;
	exports.halfWidth = void 0;

	var _assertString = _interopRequireDefault(assertString_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var halfWidth = /[\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;
	exports.halfWidth = halfWidth;

	function isHalfWidth(str) {
	  (0, _assertString.default)(str);
	  return halfWidth.test(str);
	}
	});

	unwrapExports(isHalfWidth_1);
	var isHalfWidth_2 = isHalfWidth_1.halfWidth;

	var isVariableWidth_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isVariableWidth;

	var _assertString = _interopRequireDefault(assertString_1);





	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function isVariableWidth(str) {
	  (0, _assertString.default)(str);
	  return isFullWidth_1.fullWidth.test(str) && isHalfWidth_1.halfWidth.test(str);
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(isVariableWidth_1);

	var isMultibyte_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isMultibyte;

	var _assertString = _interopRequireDefault(assertString_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* eslint-disable no-control-regex */
	var multibyte = /[^\x00-\x7F]/;
	/* eslint-enable no-control-regex */

	function isMultibyte(str) {
	  (0, _assertString.default)(str);
	  return multibyte.test(str);
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(isMultibyte_1);

	var multilineRegex = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = multilineRegexp;

	/**
	 * Build RegExp object from an array
	 * of multiple/multi-line regexp parts
	 *
	 * @param {string[]} parts
	 * @param {string} flags
	 * @return {object} - RegExp object
	 */
	function multilineRegexp(parts) {
	  var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
	  var regexpAsStringLiteral = parts.join('');
	  return new RegExp(regexpAsStringLiteral, flags);
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(multilineRegex);

	var isSemVer_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isSemVer;

	var _assertString = _interopRequireDefault(assertString_1);

	var _multilineRegex = _interopRequireDefault(multilineRegex);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Regular Expression to match
	 * semantic versioning (SemVer)
	 * built from multi-line, multi-parts regexp
	 * Reference: https://semver.org/
	 */
	var semanticVersioningRegex = (0, _multilineRegex.default)(['^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)', '(?:-((?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*))*))', '?(?:\\+([0-9a-zA-Z-]+(?:\\.[0-9a-zA-Z-]+)*))?$']);

	function isSemVer(str) {
	  (0, _assertString.default)(str);
	  return semanticVersioningRegex.test(str);
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(isSemVer_1);

	var isSurrogatePair_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isSurrogatePair;

	var _assertString = _interopRequireDefault(assertString_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var surrogatePair = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;

	function isSurrogatePair(str) {
	  (0, _assertString.default)(str);
	  return surrogatePair.test(str);
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(isSurrogatePair_1);

	var includes_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = void 0;

	var includes = function includes(arr, val) {
	  return arr.some(function (arrVal) {
	    return val === arrVal;
	  });
	};

	var _default = includes;
	exports.default = _default;
	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(includes_1);

	var isDecimal_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isDecimal;

	var _merge = _interopRequireDefault(merge_1);

	var _assertString = _interopRequireDefault(assertString_1);

	var _includes = _interopRequireDefault(includes_1);



	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function decimalRegExp(options) {
	  var regExp = new RegExp("^[-+]?([0-9]+)?(\\".concat(alpha_1.decimal[options.locale], "[0-9]{").concat(options.decimal_digits, "})").concat(options.force_decimal ? '' : '?', "$"));
	  return regExp;
	}

	var default_decimal_options = {
	  force_decimal: false,
	  decimal_digits: '1,',
	  locale: 'en-US'
	};
	var blacklist = ['', '-', '+'];

	function isDecimal(str, options) {
	  (0, _assertString.default)(str);
	  options = (0, _merge.default)(options, default_decimal_options);

	  if (options.locale in alpha_1.decimal) {
	    return !(0, _includes.default)(blacklist, str.replace(/ /g, '')) && decimalRegExp(options).test(str);
	  }

	  throw new Error("Invalid locale '".concat(options.locale, "'"));
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(isDecimal_1);

	var isHexadecimal_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isHexadecimal;

	var _assertString = _interopRequireDefault(assertString_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var hexadecimal = /^(0x|0h)?[0-9A-F]+$/i;

	function isHexadecimal(str) {
	  (0, _assertString.default)(str);
	  return hexadecimal.test(str);
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(isHexadecimal_1);

	var isOctal_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isOctal;

	var _assertString = _interopRequireDefault(assertString_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var octal = /^(0o)?[0-7]+$/i;

	function isOctal(str) {
	  (0, _assertString.default)(str);
	  return octal.test(str);
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(isOctal_1);

	var isDivisibleBy_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isDivisibleBy;

	var _assertString = _interopRequireDefault(assertString_1);

	var _toFloat = _interopRequireDefault(toFloat_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function isDivisibleBy(str, num) {
	  (0, _assertString.default)(str);
	  return (0, _toFloat.default)(str) % parseInt(num, 10) === 0;
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(isDivisibleBy_1);

	var isHexColor_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isHexColor;

	var _assertString = _interopRequireDefault(assertString_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var hexcolor = /^#?([0-9A-F]{3}|[0-9A-F]{4}|[0-9A-F]{6}|[0-9A-F]{8})$/i;

	function isHexColor(str) {
	  (0, _assertString.default)(str);
	  return hexcolor.test(str);
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(isHexColor_1);

	var isRgbColor_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isRgbColor;

	var _assertString = _interopRequireDefault(assertString_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var rgbColor = /^rgb\((([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]),){2}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\)$/;
	var rgbaColor = /^rgba\((([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]),){3}(0?\.\d|1(\.0)?|0(\.0)?)\)$/;
	var rgbColorPercent = /^rgb\((([0-9]%|[1-9][0-9]%|100%),){2}([0-9]%|[1-9][0-9]%|100%)\)/;
	var rgbaColorPercent = /^rgba\((([0-9]%|[1-9][0-9]%|100%),){3}(0?\.\d|1(\.0)?|0(\.0)?)\)/;

	function isRgbColor(str) {
	  var includePercentValues = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	  (0, _assertString.default)(str);

	  if (!includePercentValues) {
	    return rgbColor.test(str) || rgbaColor.test(str);
	  }

	  return rgbColor.test(str) || rgbaColor.test(str) || rgbColorPercent.test(str) || rgbaColorPercent.test(str);
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(isRgbColor_1);

	var isHSL_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isHSL;

	var _assertString = _interopRequireDefault(assertString_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var hslcomma = /^(hsl)a?\(\s*((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?))(deg|grad|rad|turn|\s*)(\s*,\s*(\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%){2}\s*(,\s*((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%?)\s*)?\)$/i;
	var hslspace = /^(hsl)a?\(\s*((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?))(deg|grad|rad|turn|\s)(\s*(\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%){2}\s*(\/\s*((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%?)\s*)?\)$/i;

	function isHSL(str) {
	  (0, _assertString.default)(str);
	  return hslcomma.test(str) || hslspace.test(str);
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(isHSL_1);

	var isISRC_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isISRC;

	var _assertString = _interopRequireDefault(assertString_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// see http://isrc.ifpi.org/en/isrc-standard/code-syntax
	var isrc = /^[A-Z]{2}[0-9A-Z]{3}\d{2}\d{5}$/;

	function isISRC(str) {
	  (0, _assertString.default)(str);
	  return isrc.test(str);
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(isISRC_1);

	var isIBAN_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isIBAN;

	var _assertString = _interopRequireDefault(assertString_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * List of country codes with
	 * corresponding IBAN regular expression
	 * Reference: https://en.wikipedia.org/wiki/International_Bank_Account_Number
	 */
	var ibanRegexThroughCountryCode = {
	  AD: /^(AD[0-9]{2})\d{8}[A-Z0-9]{12}$/,
	  AE: /^(AE[0-9]{2})\d{3}\d{16}$/,
	  AL: /^(AL[0-9]{2})\d{8}[A-Z0-9]{16}$/,
	  AT: /^(AT[0-9]{2})\d{16}$/,
	  AZ: /^(AZ[0-9]{2})[A-Z0-9]{4}\d{20}$/,
	  BA: /^(BA[0-9]{2})\d{16}$/,
	  BE: /^(BE[0-9]{2})\d{12}$/,
	  BG: /^(BG[0-9]{2})[A-Z]{4}\d{6}[A-Z0-9]{8}$/,
	  BH: /^(BH[0-9]{2})[A-Z]{4}[A-Z0-9]{14}$/,
	  BR: /^(BR[0-9]{2})\d{23}[A-Z]{1}[A-Z0-9]{1}$/,
	  BY: /^(BY[0-9]{2})[A-Z0-9]{4}\d{20}$/,
	  CH: /^(CH[0-9]{2})\d{5}[A-Z0-9]{12}$/,
	  CR: /^(CR[0-9]{2})\d{18}$/,
	  CY: /^(CY[0-9]{2})\d{8}[A-Z0-9]{16}$/,
	  CZ: /^(CZ[0-9]{2})\d{20}$/,
	  DE: /^(DE[0-9]{2})\d{18}$/,
	  DK: /^(DK[0-9]{2})\d{14}$/,
	  DO: /^(DO[0-9]{2})[A-Z]{4}\d{20}$/,
	  EE: /^(EE[0-9]{2})\d{16}$/,
	  ES: /^(ES[0-9]{2})\d{20}$/,
	  FI: /^(FI[0-9]{2})\d{14}$/,
	  FO: /^(FO[0-9]{2})\d{14}$/,
	  FR: /^(FR[0-9]{2})\d{10}[A-Z0-9]{11}\d{2}$/,
	  GB: /^(GB[0-9]{2})[A-Z]{4}\d{14}$/,
	  GE: /^(GE[0-9]{2})[A-Z0-9]{2}\d{16}$/,
	  GI: /^(GI[0-9]{2})[A-Z]{4}[A-Z0-9]{15}$/,
	  GL: /^(GL[0-9]{2})\d{14}$/,
	  GR: /^(GR[0-9]{2})\d{7}[A-Z0-9]{16}$/,
	  GT: /^(GT[0-9]{2})[A-Z0-9]{4}[A-Z0-9]{20}$/,
	  HR: /^(HR[0-9]{2})\d{17}$/,
	  HU: /^(HU[0-9]{2})\d{24}$/,
	  IE: /^(IE[0-9]{2})[A-Z0-9]{4}\d{14}$/,
	  IL: /^(IL[0-9]{2})\d{19}$/,
	  IQ: /^(IQ[0-9]{2})[A-Z]{4}\d{15}$/,
	  IR: /^(IR[0-9]{2})0\d{2}0\d{18}$/,
	  IS: /^(IS[0-9]{2})\d{22}$/,
	  IT: /^(IT[0-9]{2})[A-Z]{1}\d{10}[A-Z0-9]{12}$/,
	  JO: /^(JO[0-9]{2})[A-Z]{4}\d{22}$/,
	  KW: /^(KW[0-9]{2})[A-Z]{4}[A-Z0-9]{22}$/,
	  KZ: /^(KZ[0-9]{2})\d{3}[A-Z0-9]{13}$/,
	  LB: /^(LB[0-9]{2})\d{4}[A-Z0-9]{20}$/,
	  LC: /^(LC[0-9]{2})[A-Z]{4}[A-Z0-9]{24}$/,
	  LI: /^(LI[0-9]{2})\d{5}[A-Z0-9]{12}$/,
	  LT: /^(LT[0-9]{2})\d{16}$/,
	  LU: /^(LU[0-9]{2})\d{3}[A-Z0-9]{13}$/,
	  LV: /^(LV[0-9]{2})[A-Z]{4}[A-Z0-9]{13}$/,
	  MC: /^(MC[0-9]{2})\d{10}[A-Z0-9]{11}\d{2}$/,
	  MD: /^(MD[0-9]{2})[A-Z0-9]{20}$/,
	  ME: /^(ME[0-9]{2})\d{18}$/,
	  MK: /^(MK[0-9]{2})\d{3}[A-Z0-9]{10}\d{2}$/,
	  MR: /^(MR[0-9]{2})\d{23}$/,
	  MT: /^(MT[0-9]{2})[A-Z]{4}\d{5}[A-Z0-9]{18}$/,
	  MU: /^(MU[0-9]{2})[A-Z]{4}\d{19}[A-Z]{3}$/,
	  NL: /^(NL[0-9]{2})[A-Z]{4}\d{10}$/,
	  NO: /^(NO[0-9]{2})\d{11}$/,
	  PK: /^(PK[0-9]{2})[A-Z0-9]{4}\d{16}$/,
	  PL: /^(PL[0-9]{2})\d{24}$/,
	  PS: /^(PS[0-9]{2})[A-Z0-9]{4}\d{21}$/,
	  PT: /^(PT[0-9]{2})\d{21}$/,
	  QA: /^(QA[0-9]{2})[A-Z]{4}[A-Z0-9]{21}$/,
	  RO: /^(RO[0-9]{2})[A-Z]{4}[A-Z0-9]{16}$/,
	  RS: /^(RS[0-9]{2})\d{18}$/,
	  SA: /^(SA[0-9]{2})\d{2}[A-Z0-9]{18}$/,
	  SC: /^(SC[0-9]{2})[A-Z]{4}\d{20}[A-Z]{3}$/,
	  SE: /^(SE[0-9]{2})\d{20}$/,
	  SI: /^(SI[0-9]{2})\d{15}$/,
	  SK: /^(SK[0-9]{2})\d{20}$/,
	  SM: /^(SM[0-9]{2})[A-Z]{1}\d{10}[A-Z0-9]{12}$/,
	  TL: /^(TL[0-9]{2})\d{19}$/,
	  TN: /^(TN[0-9]{2})\d{20}$/,
	  TR: /^(TR[0-9]{2})\d{5}[A-Z0-9]{17}$/,
	  UA: /^(UA[0-9]{2})\d{6}[A-Z0-9]{19}$/,
	  VA: /^(VA[0-9]{2})\d{18}$/,
	  VG: /^(VG[0-9]{2})[A-Z0-9]{4}\d{16}$/,
	  XK: /^(XK[0-9]{2})\d{16}$/
	};
	/**
	 * Check whether string has correct universal IBAN format
	 * The IBAN consists of up to 34 alphanumeric characters, as follows:
	 * Country Code using ISO 3166-1 alpha-2, two letters
	 * check digits, two digits and
	 * Basic Bank Account Number (BBAN), up to 30 alphanumeric characters.
	 * NOTE: Permitted IBAN characters are: digits [0-9] and the 26 latin alphabetic [A-Z]
	 *
	 * @param {string} str - string under validation
	 * @return {boolean}
	 */

	function hasValidIbanFormat(str) {
	  // Strip white spaces and hyphens
	  var strippedStr = str.replace(/[\s\-]+/gi, '').toUpperCase();
	  var isoCountryCode = strippedStr.slice(0, 2).toUpperCase();
	  return isoCountryCode in ibanRegexThroughCountryCode && ibanRegexThroughCountryCode[isoCountryCode].test(strippedStr);
	}
	/**
	   * Check whether string has valid IBAN Checksum
	   * by performing basic mod-97 operation and
	   * the remainder should equal 1
	   * -- Start by rearranging the IBAN by moving the four initial characters to the end of the string
	   * -- Replace each letter in the string with two digits, A -> 10, B = 11, Z = 35
	   * -- Interpret the string as a decimal integer and
	   * -- compute the remainder on division by 97 (mod 97)
	   * Reference: https://en.wikipedia.org/wiki/International_Bank_Account_Number
	   *
	   * @param {string} str
	   * @return {boolean}
	   */


	function hasValidIbanChecksum(str) {
	  var strippedStr = str.replace(/[^A-Z0-9]+/gi, '').toUpperCase(); // Keep only digits and A-Z latin alphabetic

	  var rearranged = strippedStr.slice(4) + strippedStr.slice(0, 4);
	  var alphaCapsReplacedWithDigits = rearranged.replace(/[A-Z]/g, function (char) {
	    return char.charCodeAt(0) - 55;
	  });
	  var remainder = alphaCapsReplacedWithDigits.match(/\d{1,7}/g).reduce(function (acc, value) {
	    return Number(acc + value) % 97;
	  }, '');
	  return remainder === 1;
	}

	function isIBAN(str) {
	  (0, _assertString.default)(str);
	  return hasValidIbanFormat(str) && hasValidIbanChecksum(str);
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(isIBAN_1);

	var isBIC_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isBIC;

	var _assertString = _interopRequireDefault(assertString_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var isBICReg = /^[A-z]{4}[A-z]{2}\w{2}(\w{3})?$/;

	function isBIC(str) {
	  (0, _assertString.default)(str);
	  return isBICReg.test(str);
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(isBIC_1);

	var isMD5_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isMD5;

	var _assertString = _interopRequireDefault(assertString_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var md5 = /^[a-f0-9]{32}$/;

	function isMD5(str) {
	  (0, _assertString.default)(str);
	  return md5.test(str);
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(isMD5_1);

	var isHash_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isHash;

	var _assertString = _interopRequireDefault(assertString_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var lengths = {
	  md5: 32,
	  md4: 32,
	  sha1: 40,
	  sha256: 64,
	  sha384: 96,
	  sha512: 128,
	  ripemd128: 32,
	  ripemd160: 40,
	  tiger128: 32,
	  tiger160: 40,
	  tiger192: 48,
	  crc32: 8,
	  crc32b: 8
	};

	function isHash(str, algorithm) {
	  (0, _assertString.default)(str);
	  var hash = new RegExp("^[a-fA-F0-9]{".concat(lengths[algorithm], "}$"));
	  return hash.test(str);
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(isHash_1);

	var isBase64_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isBase64;

	var _assertString = _interopRequireDefault(assertString_1);

	var _merge = _interopRequireDefault(merge_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var notBase64 = /[^A-Z0-9+\/=]/i;
	var urlSafeBase64 = /^[A-Z0-9_\-]+$/i;
	var defaultBase64Options = {
	  urlSafe: false
	};

	function isBase64(str, options) {
	  (0, _assertString.default)(str);
	  options = (0, _merge.default)(options, defaultBase64Options);
	  var len = str.length;

	  if (options.urlSafe) {
	    return urlSafeBase64.test(str);
	  }

	  if (!len || len % 4 !== 0 || notBase64.test(str)) {
	    return false;
	  }

	  var firstPaddingChar = str.indexOf('=');
	  return firstPaddingChar === -1 || firstPaddingChar === len - 1 || firstPaddingChar === len - 2 && str[len - 1] === '=';
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(isBase64_1);

	var isJWT_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isJWT;

	var _assertString = _interopRequireDefault(assertString_1);

	var _isBase = _interopRequireDefault(isBase64_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function isJWT(str) {
	  (0, _assertString.default)(str);
	  var dotSplit = str.split('.');
	  var len = dotSplit.length;

	  if (len > 3 || len < 2) {
	    return false;
	  }

	  return dotSplit.reduce(function (acc, currElem) {
	    return acc && (0, _isBase.default)(currElem, {
	      urlSafe: true
	    });
	  }, true);
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(isJWT_1);

	var isJSON_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isJSON;

	var _assertString = _interopRequireDefault(assertString_1);

	var _merge = _interopRequireDefault(merge_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	var default_json_options = {
	  allow_primitives: false
	};

	function isJSON(str, options) {
	  (0, _assertString.default)(str);

	  try {
	    options = (0, _merge.default)(options, default_json_options);
	    var primitives = [];

	    if (options.allow_primitives) {
	      primitives = [null, false, true];
	    }

	    var obj = JSON.parse(str);
	    return primitives.includes(obj) || !!obj && _typeof(obj) === 'object';
	  } catch (e) {
	    /* ignore */
	  }

	  return false;
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(isJSON_1);

	var isEmpty_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isEmpty;

	var _assertString = _interopRequireDefault(assertString_1);

	var _merge = _interopRequireDefault(merge_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var default_is_empty_options = {
	  ignore_whitespace: false
	};

	function isEmpty(str, options) {
	  (0, _assertString.default)(str);
	  options = (0, _merge.default)(options, default_is_empty_options);
	  return (options.ignore_whitespace ? str.trim().length : str.length) === 0;
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(isEmpty_1);

	var isLength_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isLength;

	var _assertString = _interopRequireDefault(assertString_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	/* eslint-disable prefer-rest-params */
	function isLength(str, options) {
	  (0, _assertString.default)(str);
	  var min;
	  var max;

	  if (_typeof(options) === 'object') {
	    min = options.min || 0;
	    max = options.max;
	  } else {
	    // backwards compatibility: isLength(str, min [, max])
	    min = arguments[1] || 0;
	    max = arguments[2];
	  }

	  var surrogatePairs = str.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g) || [];
	  var len = str.length - surrogatePairs.length;
	  return len >= min && (typeof max === 'undefined' || len <= max);
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(isLength_1);

	var isUUID_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isUUID;

	var _assertString = _interopRequireDefault(assertString_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var uuid = {
	  3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
	  4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
	  5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
	  all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
	};

	function isUUID(str) {
	  var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'all';
	  (0, _assertString.default)(str);
	  var pattern = uuid[version];
	  return pattern && pattern.test(str);
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(isUUID_1);

	var isMongoId_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isMongoId;

	var _assertString = _interopRequireDefault(assertString_1);

	var _isHexadecimal = _interopRequireDefault(isHexadecimal_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function isMongoId(str) {
	  (0, _assertString.default)(str);
	  return (0, _isHexadecimal.default)(str) && str.length === 24;
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(isMongoId_1);

	var isAfter_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isAfter;

	var _assertString = _interopRequireDefault(assertString_1);

	var _toDate = _interopRequireDefault(toDate_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function isAfter(str) {
	  var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : String(new Date());
	  (0, _assertString.default)(str);
	  var comparison = (0, _toDate.default)(date);
	  var original = (0, _toDate.default)(str);
	  return !!(original && comparison && original > comparison);
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(isAfter_1);

	var isBefore_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isBefore;

	var _assertString = _interopRequireDefault(assertString_1);

	var _toDate = _interopRequireDefault(toDate_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function isBefore(str) {
	  var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : String(new Date());
	  (0, _assertString.default)(str);
	  var comparison = (0, _toDate.default)(date);
	  var original = (0, _toDate.default)(str);
	  return !!(original && comparison && original < comparison);
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(isBefore_1);

	var isIn_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isIn;

	var _assertString = _interopRequireDefault(assertString_1);

	var _toString = _interopRequireDefault(toString_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	function isIn(str, options) {
	  (0, _assertString.default)(str);
	  var i;

	  if (Object.prototype.toString.call(options) === '[object Array]') {
	    var array = [];

	    for (i in options) {
	      // https://github.com/gotwarlost/istanbul/blob/master/ignoring-code-for-coverage.md#ignoring-code-for-coverage-purposes
	      // istanbul ignore else
	      if ({}.hasOwnProperty.call(options, i)) {
	        array[i] = (0, _toString.default)(options[i]);
	      }
	    }

	    return array.indexOf(str) >= 0;
	  } else if (_typeof(options) === 'object') {
	    return options.hasOwnProperty(str);
	  } else if (options && typeof options.indexOf === 'function') {
	    return options.indexOf(str) >= 0;
	  }

	  return false;
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(isIn_1);

	var isCreditCard_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isCreditCard;

	var _assertString = _interopRequireDefault(assertString_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* eslint-disable max-len */
	var creditCard = /^(?:4[0-9]{12}(?:[0-9]{3,6})?|5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12,15}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|6[27][0-9]{14})$/;
	/* eslint-enable max-len */

	function isCreditCard(str) {
	  (0, _assertString.default)(str);
	  var sanitized = str.replace(/[- ]+/g, '');

	  if (!creditCard.test(sanitized)) {
	    return false;
	  }

	  var sum = 0;
	  var digit;
	  var tmpNum;
	  var shouldDouble;

	  for (var i = sanitized.length - 1; i >= 0; i--) {
	    digit = sanitized.substring(i, i + 1);
	    tmpNum = parseInt(digit, 10);

	    if (shouldDouble) {
	      tmpNum *= 2;

	      if (tmpNum >= 10) {
	        sum += tmpNum % 10 + 1;
	      } else {
	        sum += tmpNum;
	      }
	    } else {
	      sum += tmpNum;
	    }

	    shouldDouble = !shouldDouble;
	  }

	  return !!(sum % 10 === 0 ? sanitized : false);
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(isCreditCard_1);

	var isIdentityCard_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isIdentityCard;

	var _assertString = _interopRequireDefault(assertString_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var validators = {
	  ES: function ES(str) {
	    (0, _assertString.default)(str);
	    var DNI = /^[0-9X-Z][0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKE]$/;
	    var charsValue = {
	      X: 0,
	      Y: 1,
	      Z: 2
	    };
	    var controlDigits = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E']; // sanitize user input

	    var sanitized = str.trim().toUpperCase(); // validate the data structure

	    if (!DNI.test(sanitized)) {
	      return false;
	    } // validate the control digit


	    var number = sanitized.slice(0, -1).replace(/[X,Y,Z]/g, function (char) {
	      return charsValue[char];
	    });
	    return sanitized.endsWith(controlDigits[number % 23]);
	  },
	  IN: function IN(str) {
	    var DNI = /^[1-9]\d{3}\s?\d{4}\s?\d{4}$/; // multiplication table

	    var d = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 0, 6, 7, 8, 9, 5], [2, 3, 4, 0, 1, 7, 8, 9, 5, 6], [3, 4, 0, 1, 2, 8, 9, 5, 6, 7], [4, 0, 1, 2, 3, 9, 5, 6, 7, 8], [5, 9, 8, 7, 6, 0, 4, 3, 2, 1], [6, 5, 9, 8, 7, 1, 0, 4, 3, 2], [7, 6, 5, 9, 8, 2, 1, 0, 4, 3], [8, 7, 6, 5, 9, 3, 2, 1, 0, 4], [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]]; // permutation table

	    var p = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 5, 7, 6, 2, 8, 3, 0, 9, 4], [5, 8, 0, 3, 7, 9, 6, 1, 4, 2], [8, 9, 1, 6, 0, 4, 3, 5, 2, 7], [9, 4, 5, 3, 1, 2, 6, 8, 7, 0], [4, 2, 8, 6, 5, 7, 3, 9, 0, 1], [2, 7, 9, 3, 8, 0, 6, 4, 1, 5], [7, 0, 4, 6, 9, 1, 3, 2, 5, 8]]; // sanitize user input

	    var sanitized = str.trim(); // validate the data structure

	    if (!DNI.test(sanitized)) {
	      return false;
	    }

	    var c = 0;
	    var invertedArray = sanitized.replace(/\s/g, '').split('').map(Number).reverse();
	    invertedArray.forEach(function (val, i) {
	      c = d[c][p[i % 8][val]];
	    });
	    return c === 0;
	  },
	  NO: function NO(str) {
	    var sanitized = str.trim();
	    if (isNaN(Number(sanitized))) return false;
	    if (sanitized.length !== 11) return false;
	    if (sanitized === '00000000000') return false; // https://no.wikipedia.org/wiki/F%C3%B8dselsnummer

	    var f = sanitized.split('').map(Number);
	    var k1 = (11 - (3 * f[0] + 7 * f[1] + 6 * f[2] + 1 * f[3] + 8 * f[4] + 9 * f[5] + 4 * f[6] + 5 * f[7] + 2 * f[8]) % 11) % 11;
	    var k2 = (11 - (5 * f[0] + 4 * f[1] + 3 * f[2] + 2 * f[3] + 7 * f[4] + 6 * f[5] + 5 * f[6] + 4 * f[7] + 3 * f[8] + 2 * k1) % 11) % 11;

	    if (k1 === 11) {
	      k1 = 0;
	    }

	    if (k1 !== f[9] || k2 !== f[10]) return false;
	    return true;
	  },
	  'he-IL': function heIL(str) {
	    var DNI = /^\d{9}$/; // sanitize user input

	    var sanitized = str.trim(); // validate the data structure

	    if (!DNI.test(sanitized)) {
	      return false;
	    }

	    var id = sanitized;
	    var sum = 0,
	        incNum;

	    for (var i = 0; i < id.length; i++) {
	      incNum = Number(id[i]) * (i % 2 + 1); // Multiply number by 1 or 2

	      sum += incNum > 9 ? incNum - 9 : incNum; // Sum the digits up and add to total
	    }

	    return sum % 10 === 0;
	  },
	  'ar-TN': function arTN(str) {
	    var DNI = /^\d{8}$/; // sanitize user input

	    var sanitized = str.trim(); // validate the data structure

	    if (!DNI.test(sanitized)) {
	      return false;
	    }

	    return true;
	  },
	  'zh-CN': function zhCN(str) {
	    var provinceAndCitys = {
	      11: '北京',
	      12: '天津',
	      13: '河北',
	      14: '山西',
	      15: '内蒙古',
	      21: '辽宁',
	      22: '吉林',
	      23: '黑龙江',
	      31: '上海',
	      32: '江苏',
	      33: '浙江',
	      34: '安徽',
	      35: '福建',
	      36: '江西',
	      37: '山东',
	      41: '河南',
	      42: '湖北',
	      43: '湖南',
	      44: '广东',
	      45: '广西',
	      46: '海南',
	      50: '重庆',
	      51: '四川',
	      52: '贵州',
	      53: '云南',
	      54: '西藏',
	      61: '陕西',
	      62: '甘肃',
	      63: '青海',
	      64: '宁夏',
	      65: '新疆',
	      71: '台湾',
	      81: '香港',
	      82: '澳门',
	      91: '国外'
	    };
	    var powers = ['7', '9', '10', '5', '8', '4', '2', '1', '6', '3', '7', '9', '10', '5', '8', '4', '2'];
	    var parityBit = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];

	    var checkAddressCode = function checkAddressCode(addressCode) {
	      var check = /^[1-9]\d{5}$/.test(addressCode);
	      if (!check) return false; // eslint-disable-next-line radix

	      return !!provinceAndCitys[Number.parseInt(addressCode.substring(0, 2))];
	    };

	    var checkBirthDayCode = function checkBirthDayCode(birDayCode) {
	      var check = /^[1-9]\d{3}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))$/.test(birDayCode);
	      if (!check) return false;
	      var yyyy = parseInt(birDayCode.substring(0, 4), 10);
	      var mm = parseInt(birDayCode.substring(4, 6), 10);
	      var dd = parseInt(birDayCode.substring(6), 10);
	      var xdata = new Date(yyyy, mm - 1, dd);

	      if (xdata > new Date()) {
	        return false; // eslint-disable-next-line max-len
	      } else if (xdata.getFullYear() === yyyy && xdata.getMonth() === mm - 1 && xdata.getDate() === dd) {
	        return true;
	      }

	      return false;
	    };

	    var getParityBit = function getParityBit(idCardNo) {
	      var id17 = idCardNo.substring(0, 17);
	      var power = 0;

	      for (var i = 0; i < 17; i++) {
	        // eslint-disable-next-line radix
	        power += parseInt(id17.charAt(i), 10) * Number.parseInt(powers[i]);
	      }

	      var mod = power % 11;
	      return parityBit[mod];
	    };

	    var checkParityBit = function checkParityBit(idCardNo) {
	      return getParityBit(idCardNo) === idCardNo.charAt(17).toUpperCase();
	    };

	    var check15IdCardNo = function check15IdCardNo(idCardNo) {
	      var check = /^[1-9]\d{7}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}$/.test(idCardNo);
	      if (!check) return false;
	      var addressCode = idCardNo.substring(0, 6);
	      check = checkAddressCode(addressCode);
	      if (!check) return false;
	      var birDayCode = "19".concat(idCardNo.substring(6, 12));
	      check = checkBirthDayCode(birDayCode);
	      if (!check) return false;
	      return checkParityBit(idCardNo);
	    };

	    var check18IdCardNo = function check18IdCardNo(idCardNo) {
	      var check = /^[1-9]\d{5}[1-9]\d{3}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}(\d|x|X)$/.test(idCardNo);
	      if (!check) return false;
	      var addressCode = idCardNo.substring(0, 6);
	      check = checkAddressCode(addressCode);
	      if (!check) return false;
	      var birDayCode = idCardNo.substring(6, 14);
	      check = checkBirthDayCode(birDayCode);
	      if (!check) return false;
	      return checkParityBit(idCardNo);
	    };

	    var checkIdCardNo = function checkIdCardNo(idCardNo) {
	      var check = /^\d{15}|(\d{17}(\d|x|X))$/.test(idCardNo);
	      if (!check) return false;

	      if (idCardNo.length === 15) {
	        return check15IdCardNo(idCardNo);
	      } else if (idCardNo.length === 18) {
	        return check18IdCardNo(idCardNo);
	      }

	      return false;
	    };

	    return checkIdCardNo(str);
	  },
	  'zh-TW': function zhTW(str) {
	    var ALPHABET_CODES = {
	      A: 10,
	      B: 11,
	      C: 12,
	      D: 13,
	      E: 14,
	      F: 15,
	      G: 16,
	      H: 17,
	      I: 34,
	      J: 18,
	      K: 19,
	      L: 20,
	      M: 21,
	      N: 22,
	      O: 35,
	      P: 23,
	      Q: 24,
	      R: 25,
	      S: 26,
	      T: 27,
	      U: 28,
	      V: 29,
	      W: 32,
	      X: 30,
	      Y: 31,
	      Z: 33
	    };
	    var sanitized = str.trim().toUpperCase();
	    if (!/^[A-Z][0-9]{9}$/.test(sanitized)) return false;
	    return Array.from(sanitized).reduce(function (sum, number, index) {
	      if (index === 0) {
	        var code = ALPHABET_CODES[number];
	        return code % 10 * 9 + Math.floor(code / 10);
	      }

	      if (index === 9) {
	        return (10 - sum % 10 - Number(number)) % 10 === 0;
	      }

	      return sum + Number(number) * (9 - index);
	    }, 0);
	  }
	};

	function isIdentityCard(str, locale) {
	  (0, _assertString.default)(str);

	  if (locale in validators) {
	    return validators[locale](str);
	  } else if (locale === 'any') {
	    for (var key in validators) {
	      // https://github.com/gotwarlost/istanbul/blob/master/ignoring-code-for-coverage.md#ignoring-code-for-coverage-purposes
	      // istanbul ignore else
	      if (validators.hasOwnProperty(key)) {
	        var validator = validators[key];

	        if (validator(str)) {
	          return true;
	        }
	      }
	    }

	    return false;
	  }

	  throw new Error("Invalid locale '".concat(locale, "'"));
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(isIdentityCard_1);

	var isEAN_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isEAN;

	var _assertString = _interopRequireDefault(assertString_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * The most commonly used EAN standard is
	 * the thirteen-digit EAN-13, while the
	 * less commonly used 8-digit EAN-8 barcode was
	 * introduced for use on small packages.
	 * EAN consists of:
	 * GS1 prefix, manufacturer code, product code and check digit
	 * Reference: https://en.wikipedia.org/wiki/International_Article_Number
	 */

	/**
	 * Define EAN Lenghts; 8 for EAN-8; 13 for EAN-13
	 * and Regular Expression for valid EANs (EAN-8, EAN-13),
	 * with exact numberic matching of 8 or 13 digits [0-9]
	 */
	var LENGTH_EAN_8 = 8;
	var validEanRegex = /^(\d{8}|\d{13})$/;
	/**
	 * Get position weight given:
	 * EAN length and digit index/position
	 *
	 * @param {number} length
	 * @param {number} index
	 * @return {number}
	 */

	function getPositionWeightThroughLengthAndIndex(length, index) {
	  if (length === LENGTH_EAN_8) {
	    return index % 2 === 0 ? 3 : 1;
	  }

	  return index % 2 === 0 ? 1 : 3;
	}
	/**
	 * Calculate EAN Check Digit
	 * Reference: https://en.wikipedia.org/wiki/International_Article_Number#Calculation_of_checksum_digit
	 *
	 * @param {string} ean
	 * @return {number}
	 */


	function calculateCheckDigit(ean) {
	  var checksum = ean.slice(0, -1).split('').map(function (char, index) {
	    return Number(char) * getPositionWeightThroughLengthAndIndex(ean.length, index);
	  }).reduce(function (acc, partialSum) {
	    return acc + partialSum;
	  }, 0);
	  var remainder = 10 - checksum % 10;
	  return remainder < 10 ? remainder : 0;
	}
	/**
	 * Check if string is valid EAN:
	 * Matches EAN-8/EAN-13 regex
	 * Has valid check digit.
	 *
	 * @param {string} str
	 * @return {boolean}
	 */


	function isEAN(str) {
	  (0, _assertString.default)(str);
	  var actualCheckDigit = Number(str.slice(-1));
	  return validEanRegex.test(str) && actualCheckDigit === calculateCheckDigit(str);
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(isEAN_1);

	var isISIN_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isISIN;

	var _assertString = _interopRequireDefault(assertString_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var isin = /^[A-Z]{2}[0-9A-Z]{9}[0-9]$/;

	function isISIN(str) {
	  (0, _assertString.default)(str);

	  if (!isin.test(str)) {
	    return false;
	  }

	  var checksumStr = str.replace(/[A-Z]/g, function (character) {
	    return parseInt(character, 36);
	  });
	  var sum = 0;
	  var digit;
	  var tmpNum;
	  var shouldDouble = true;

	  for (var i = checksumStr.length - 2; i >= 0; i--) {
	    digit = checksumStr.substring(i, i + 1);
	    tmpNum = parseInt(digit, 10);

	    if (shouldDouble) {
	      tmpNum *= 2;

	      if (tmpNum >= 10) {
	        sum += tmpNum + 1;
	      } else {
	        sum += tmpNum;
	      }
	    } else {
	      sum += tmpNum;
	    }

	    shouldDouble = !shouldDouble;
	  }

	  return parseInt(str.substr(str.length - 1), 10) === (10000 - sum) % 10;
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(isISIN_1);

	var isISBN_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isISBN;

	var _assertString = _interopRequireDefault(assertString_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var isbn10Maybe = /^(?:[0-9]{9}X|[0-9]{10})$/;
	var isbn13Maybe = /^(?:[0-9]{13})$/;
	var factor = [1, 3];

	function isISBN(str) {
	  var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
	  (0, _assertString.default)(str);
	  version = String(version);

	  if (!version) {
	    return isISBN(str, 10) || isISBN(str, 13);
	  }

	  var sanitized = str.replace(/[\s-]+/g, '');
	  var checksum = 0;
	  var i;

	  if (version === '10') {
	    if (!isbn10Maybe.test(sanitized)) {
	      return false;
	    }

	    for (i = 0; i < 9; i++) {
	      checksum += (i + 1) * sanitized.charAt(i);
	    }

	    if (sanitized.charAt(9) === 'X') {
	      checksum += 10 * 10;
	    } else {
	      checksum += 10 * sanitized.charAt(9);
	    }

	    if (checksum % 11 === 0) {
	      return !!sanitized;
	    }
	  } else if (version === '13') {
	    if (!isbn13Maybe.test(sanitized)) {
	      return false;
	    }

	    for (i = 0; i < 12; i++) {
	      checksum += factor[i % 2] * sanitized.charAt(i);
	    }

	    if (sanitized.charAt(12) - (10 - checksum % 10) % 10 === 0) {
	      return !!sanitized;
	    }
	  }

	  return false;
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(isISBN_1);

	var isISSN_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isISSN;

	var _assertString = _interopRequireDefault(assertString_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var issn = '^\\d{4}-?\\d{3}[\\dX]$';

	function isISSN(str) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  (0, _assertString.default)(str);
	  var testIssn = issn;
	  testIssn = options.require_hyphen ? testIssn.replace('?', '') : testIssn;
	  testIssn = options.case_sensitive ? new RegExp(testIssn) : new RegExp(testIssn, 'i');

	  if (!testIssn.test(str)) {
	    return false;
	  }

	  var digits = str.replace('-', '').toUpperCase();
	  var checksum = 0;

	  for (var i = 0; i < digits.length; i++) {
	    var digit = digits[i];
	    checksum += (digit === 'X' ? 10 : +digit) * (8 - i);
	  }

	  return checksum % 11 === 0;
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(isISSN_1);

	var isTaxID_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isTaxID;

	var _assertString = _interopRequireDefault(assertString_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

	function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

	function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

	function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

	function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

	function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

	/**
	 * An Employer Identification Number (EIN), also known as a Federal Tax Identification Number,
	 *  is used to identify a business entity.
	 *
	 * NOTES:
	 *  - Prefix 47 is being reserved for future use
	 *  - Prefixes 26, 27, 45, 46 and 47 were previously assigned by the Philadelphia campus.
	 *
	 * See `http://www.irs.gov/Businesses/Small-Businesses-&-Self-Employed/How-EINs-are-Assigned-and-Valid-EIN-Prefixes`
	 * for more information.
	 */

	/**
	 * Campus prefixes according to locales
	 */
	var campusPrefix = {
	  'en-US': {
	    andover: ['10', '12'],
	    atlanta: ['60', '67'],
	    austin: ['50', '53'],
	    brookhaven: ['01', '02', '03', '04', '05', '06', '11', '13', '14', '16', '21', '22', '23', '25', '34', '51', '52', '54', '55', '56', '57', '58', '59', '65'],
	    cincinnati: ['30', '32', '35', '36', '37', '38', '61'],
	    fresno: ['15', '24'],
	    internet: ['20', '26', '27', '45', '46', '47'],
	    kansas: ['40', '44'],
	    memphis: ['94', '95'],
	    ogden: ['80', '90'],
	    philadelphia: ['33', '39', '41', '42', '43', '46', '48', '62', '63', '64', '66', '68', '71', '72', '73', '74', '75', '76', '77', '81', '82', '83', '84', '85', '86', '87', '88', '91', '92', '93', '98', '99'],
	    sba: ['31']
	  }
	};

	function getPrefixes(locale) {
	  var prefixes = [];

	  for (var location in campusPrefix[locale]) {
	    if (campusPrefix[locale].hasOwnProperty(location)) {
	      prefixes.push.apply(prefixes, _toConsumableArray(campusPrefix[locale][location]));
	    }
	  }

	  prefixes.sort();
	  return prefixes;
	} // tax id regex formats for various loacles


	var taxIdFormat = {
	  'en-US': /^\d{2}[- ]{0,1}\d{7}$/
	};

	function isTaxID(str) {
	  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en-US';
	  (0, _assertString.default)(str);

	  if (!taxIdFormat[locale].test(str)) {
	    return false;
	  }

	  return getPrefixes(locale).indexOf(str.substr(0, 2)) !== -1;
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(isTaxID_1);

	var isMobilePhone_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isMobilePhone;
	exports.locales = void 0;

	var _assertString = _interopRequireDefault(assertString_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* eslint-disable max-len */
	var phones = {
	  'am-AM': /^(\+?374|0)((10|[9|7][0-9])\d{6}$|[2-4]\d{7}$)/,
	  'ar-AE': /^((\+?971)|0)?5[024568]\d{7}$/,
	  'ar-BH': /^(\+?973)?(3|6)\d{7}$/,
	  'ar-DZ': /^(\+?213|0)(5|6|7)\d{8}$/,
	  'ar-EG': /^((\+?20)|0)?1[0125]\d{8}$/,
	  'ar-IQ': /^(\+?964|0)?7[0-9]\d{8}$/,
	  'ar-JO': /^(\+?962|0)?7[789]\d{7}$/,
	  'ar-KW': /^(\+?965)[569]\d{7}$/,
	  'ar-LY': /^((\+?218)|0)?(9[1-6]\d{7}|[1-8]\d{7,9})$/,
	  'ar-SA': /^(!?(\+?966)|0)?5\d{8}$/,
	  'ar-SY': /^(!?(\+?963)|0)?9\d{8}$/,
	  'ar-TN': /^(\+?216)?[2459]\d{7}$/,
	  'be-BY': /^(\+?375)?(24|25|29|33|44)\d{7}$/,
	  'bg-BG': /^(\+?359|0)?8[789]\d{7}$/,
	  'bn-BD': /^(\+?880|0)1[13456789][0-9]{8}$/,
	  'cs-CZ': /^(\+?420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
	  'da-DK': /^(\+?45)?\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/,
	  'de-DE': /^(\+49)?0?1(5[0-25-9]\d|6([23]|0\d?)|7([0-57-9]|6\d))\d{7}$/,
	  'de-AT': /^(\+43|0)\d{1,4}\d{3,12}$/,
	  'de-CH': /^(\+41|0)(7[5-9])\d{1,7}$/,
	  'el-GR': /^(\+?30|0)?(69\d{8})$/,
	  'en-AU': /^(\+?61|0)4\d{8}$/,
	  'en-GB': /^(\+?44|0)7\d{9}$/,
	  'en-GG': /^(\+?44|0)1481\d{6}$/,
	  'en-GH': /^(\+233|0)(20|50|24|54|27|57|26|56|23|28)\d{7}$/,
	  'en-HK': /^(\+?852[-\s]?)?[456789]\d{3}[-\s]?\d{4}$/,
	  'en-MO': /^(\+?853[-\s]?)?[6]\d{3}[-\s]?\d{4}$/,
	  'en-IE': /^(\+?353|0)8[356789]\d{7}$/,
	  'en-IN': /^(\+?91|0)?[6789]\d{9}$/,
	  'en-KE': /^(\+?254|0)(7|1)\d{8}$/,
	  'en-MT': /^(\+?356|0)?(99|79|77|21|27|22|25)[0-9]{6}$/,
	  'en-MU': /^(\+?230|0)?\d{8}$/,
	  'en-NG': /^(\+?234|0)?[789]\d{9}$/,
	  'en-NZ': /^(\+?64|0)[28]\d{7,9}$/,
	  'en-PK': /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/,
	  'en-RW': /^(\+?250|0)?[7]\d{8}$/,
	  'en-SG': /^(\+65)?[689]\d{7}$/,
	  'en-SL': /^(?:0|94|\+94)?(7(0|1|2|5|6|7|8)( |-)?\d)\d{6}$/,
	  'en-TZ': /^(\+?255|0)?[67]\d{8}$/,
	  'en-UG': /^(\+?256|0)?[7]\d{8}$/,
	  'en-US': /^((\+1|1)?( |-)?)?(\([2-9][0-9]{2}\)|[2-9][0-9]{2})( |-)?([2-9][0-9]{2}( |-)?[0-9]{4})$/,
	  'en-ZA': /^(\+?27|0)\d{9}$/,
	  'en-ZM': /^(\+?26)?09[567]\d{7}$/,
	  'en-ZW': /^(\+263)[0-9]{9}$/,
	  'es-CO': /^(\+?57)?([1-8]{1}|3[0-9]{2})?[2-9]{1}\d{6}$/,
	  'es-CL': /^(\+?56|0)[2-9]\d{1}\d{7}$/,
	  'es-CR': /^(\+506)?[2-8]\d{7}$/,
	  'es-EC': /^(\+?593|0)([2-7]|9[2-9])\d{7}$/,
	  'es-ES': /^(\+?34)?(6\d{1}|7[1234])\d{7}$/,
	  'es-MX': /^(\+?52)?(1|01)?\d{10,11}$/,
	  'es-PA': /^(\+?507)\d{7,8}$/,
	  'es-PY': /^(\+?595|0)9[9876]\d{7}$/,
	  'es-UY': /^(\+598|0)9[1-9][\d]{6}$/,
	  'et-EE': /^(\+?372)?\s?(5|8[1-4])\s?([0-9]\s?){6,7}$/,
	  'fa-IR': /^(\+?98[\-\s]?|0)9[0-39]\d[\-\s]?\d{3}[\-\s]?\d{4}$/,
	  'fi-FI': /^(\+?358|0)\s?(4(0|1|2|4|5|6)?|50)\s?(\d\s?){4,8}\d$/,
	  'fj-FJ': /^(\+?679)?\s?\d{3}\s?\d{4}$/,
	  'fo-FO': /^(\+?298)?\s?\d{2}\s?\d{2}\s?\d{2}$/,
	  'fr-FR': /^(\+?33|0)[67]\d{8}$/,
	  'fr-GF': /^(\+?594|0|00594)[67]\d{8}$/,
	  'fr-GP': /^(\+?590|0|00590)[67]\d{8}$/,
	  'fr-MQ': /^(\+?596|0|00596)[67]\d{8}$/,
	  'fr-RE': /^(\+?262|0|00262)[67]\d{8}$/,
	  'he-IL': /^(\+972|0)([23489]|5[012345689]|77)[1-9]\d{6}$/,
	  'hu-HU': /^(\+?36)(20|30|70)\d{7}$/,
	  'id-ID': /^(\+?62|0)8(1[123456789]|2[1238]|3[1238]|5[12356789]|7[78]|9[56789]|8[123456789])([\s?|\d]{5,11})$/,
	  'it-IT': /^(\+?39)?\s?3\d{2} ?\d{6,7}$/,
	  'ja-JP': /^(\+81[ \-]?(\(0\))?|0)[6789]0[ \-]?\d{4}[ \-]?\d{4}$/,
	  'kk-KZ': /^(\+?7|8)?7\d{9}$/,
	  'kl-GL': /^(\+?299)?\s?\d{2}\s?\d{2}\s?\d{2}$/,
	  'ko-KR': /^((\+?82)[ \-]?)?0?1([0|1|6|7|8|9]{1})[ \-]?\d{3,4}[ \-]?\d{4}$/,
	  'lt-LT': /^(\+370|8)\d{8}$/,
	  'ms-MY': /^(\+?6?01){1}(([0145]{1}(\-|\s)?\d{7,8})|([236789]{1}(\s|\-)?\d{7}))$/,
	  'nb-NO': /^(\+?47)?[49]\d{7}$/,
	  'ne-NP': /^(\+?977)?9[78]\d{8}$/,
	  'nl-BE': /^(\+?32|0)4?\d{8}$/,
	  'nl-NL': /^(((\+|00)?31\(0\))|((\+|00)?31)|0)6{1}\d{8}$/,
	  'nn-NO': /^(\+?47)?[49]\d{7}$/,
	  'pl-PL': /^(\+?48)? ?[5-8]\d ?\d{3} ?\d{2} ?\d{2}$/,
	  'pt-BR': /(?=^(\+?5{2}\-?|0)[1-9]{2}\-?\d{4}\-?\d{4}$)(^(\+?5{2}\-?|0)[1-9]{2}\-?[6-9]{1}\d{3}\-?\d{4}$)|(^(\+?5{2}\-?|0)[1-9]{2}\-?9[6-9]{1}\d{3}\-?\d{4}$)/,
	  'pt-PT': /^(\+?351)?9[1236]\d{7}$/,
	  'ro-RO': /^(\+?4?0)\s?7\d{2}(\/|\s|\.|\-)?\d{3}(\s|\.|\-)?\d{3}$/,
	  'ru-RU': /^(\+?7|8)?9\d{9}$/,
	  'sl-SI': /^(\+386\s?|0)(\d{1}\s?\d{3}\s?\d{2}\s?\d{2}|\d{2}\s?\d{3}\s?\d{3})$/,
	  'sk-SK': /^(\+?421)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
	  'sr-RS': /^(\+3816|06)[- \d]{5,9}$/,
	  'sv-SE': /^(\+?46|0)[\s\-]?7[\s\-]?[02369]([\s\-]?\d){7}$/,
	  'th-TH': /^(\+66|66|0)\d{9}$/,
	  'tr-TR': /^(\+?90|0)?5\d{9}$/,
	  'uk-UA': /^(\+?38|8)?0\d{9}$/,
	  'vi-VN': /^(\+?84|0)((3([2-9]))|(5([2689]))|(7([0|6-9]))|(8([1-6|89]))|(9([0-9])))([0-9]{7})$/,
	  'zh-CN': /^((\+|00)86)?1([3568][0-9]|4[579]|6[67]|7[01235678]|9[189])[0-9]{8}$/,
	  'zh-TW': /^(\+?886\-?|0)?9\d{8}$/
	};
	/* eslint-enable max-len */
	// aliases

	phones['en-CA'] = phones['en-US'];
	phones['fr-BE'] = phones['nl-BE'];
	phones['zh-HK'] = phones['en-HK'];
	phones['zh-MO'] = phones['en-MO'];

	function isMobilePhone(str, locale, options) {
	  (0, _assertString.default)(str);

	  if (options && options.strictMode && !str.startsWith('+')) {
	    return false;
	  }

	  if (Array.isArray(locale)) {
	    return locale.some(function (key) {
	      // https://github.com/gotwarlost/istanbul/blob/master/ignoring-code-for-coverage.md#ignoring-code-for-coverage-purposes
	      // istanbul ignore else
	      if (phones.hasOwnProperty(key)) {
	        var phone = phones[key];

	        if (phone.test(str)) {
	          return true;
	        }
	      }

	      return false;
	    });
	  } else if (locale in phones) {
	    return phones[locale].test(str); // alias falsey locale as 'any'
	  } else if (!locale || locale === 'any') {
	    for (var key in phones) {
	      // istanbul ignore else
	      if (phones.hasOwnProperty(key)) {
	        var phone = phones[key];

	        if (phone.test(str)) {
	          return true;
	        }
	      }
	    }

	    return false;
	  }

	  throw new Error("Invalid locale '".concat(locale, "'"));
	}

	var locales = Object.keys(phones);
	exports.locales = locales;
	});

	unwrapExports(isMobilePhone_1);
	var isMobilePhone_2 = isMobilePhone_1.locales;

	var isEthereumAddress_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isEthereumAddress;

	var _assertString = _interopRequireDefault(assertString_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var eth = /^(0x)[0-9a-f]{40}$/i;

	function isEthereumAddress(str) {
	  (0, _assertString.default)(str);
	  return eth.test(str);
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(isEthereumAddress_1);

	var isCurrency_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isCurrency;

	var _merge = _interopRequireDefault(merge_1);

	var _assertString = _interopRequireDefault(assertString_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function currencyRegex(options) {
	  var decimal_digits = "\\d{".concat(options.digits_after_decimal[0], "}");
	  options.digits_after_decimal.forEach(function (digit, index) {
	    if (index !== 0) decimal_digits = "".concat(decimal_digits, "|\\d{").concat(digit, "}");
	  });
	  var symbol = "(".concat(options.symbol.replace(/\W/, function (m) {
	    return "\\".concat(m);
	  }), ")").concat(options.require_symbol ? '' : '?'),
	      negative = '-?',
	      whole_dollar_amount_without_sep = '[1-9]\\d*',
	      whole_dollar_amount_with_sep = "[1-9]\\d{0,2}(\\".concat(options.thousands_separator, "\\d{3})*"),
	      valid_whole_dollar_amounts = ['0', whole_dollar_amount_without_sep, whole_dollar_amount_with_sep],
	      whole_dollar_amount = "(".concat(valid_whole_dollar_amounts.join('|'), ")?"),
	      decimal_amount = "(\\".concat(options.decimal_separator, "(").concat(decimal_digits, "))").concat(options.require_decimal ? '' : '?');
	  var pattern = whole_dollar_amount + (options.allow_decimal || options.require_decimal ? decimal_amount : ''); // default is negative sign before symbol, but there are two other options (besides parens)

	  if (options.allow_negatives && !options.parens_for_negatives) {
	    if (options.negative_sign_after_digits) {
	      pattern += negative;
	    } else if (options.negative_sign_before_digits) {
	      pattern = negative + pattern;
	    }
	  } // South African Rand, for example, uses R 123 (space) and R-123 (no space)


	  if (options.allow_negative_sign_placeholder) {
	    pattern = "( (?!\\-))?".concat(pattern);
	  } else if (options.allow_space_after_symbol) {
	    pattern = " ?".concat(pattern);
	  } else if (options.allow_space_after_digits) {
	    pattern += '( (?!$))?';
	  }

	  if (options.symbol_after_digits) {
	    pattern += symbol;
	  } else {
	    pattern = symbol + pattern;
	  }

	  if (options.allow_negatives) {
	    if (options.parens_for_negatives) {
	      pattern = "(\\(".concat(pattern, "\\)|").concat(pattern, ")");
	    } else if (!(options.negative_sign_before_digits || options.negative_sign_after_digits)) {
	      pattern = negative + pattern;
	    }
	  } // ensure there's a dollar and/or decimal amount, and that
	  // it doesn't start with a space or a negative sign followed by a space


	  return new RegExp("^(?!-? )(?=.*\\d)".concat(pattern, "$"));
	}

	var default_currency_options = {
	  symbol: '$',
	  require_symbol: false,
	  allow_space_after_symbol: false,
	  symbol_after_digits: false,
	  allow_negatives: true,
	  parens_for_negatives: false,
	  negative_sign_before_digits: false,
	  negative_sign_after_digits: false,
	  allow_negative_sign_placeholder: false,
	  thousands_separator: ',',
	  decimal_separator: '.',
	  allow_decimal: true,
	  require_decimal: false,
	  digits_after_decimal: [2],
	  allow_space_after_digits: false
	};

	function isCurrency(str, options) {
	  (0, _assertString.default)(str);
	  options = (0, _merge.default)(options, default_currency_options);
	  return currencyRegex(options).test(str);
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(isCurrency_1);

	var isBtcAddress_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isBtcAddress;

	var _assertString = _interopRequireDefault(assertString_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// supports Bech32 addresses
	var btc = /^(bc1|[13])[a-zA-HJ-NP-Z0-9]{25,39}$/;

	function isBtcAddress(str) {
	  (0, _assertString.default)(str);
	  return btc.test(str);
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(isBtcAddress_1);

	var isISO8601_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isISO8601;

	var _assertString = _interopRequireDefault(assertString_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* eslint-disable max-len */
	// from http://goo.gl/0ejHHW
	var iso8601 = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;
	/* eslint-enable max-len */

	var isValidDate = function isValidDate(str) {
	  // str must have passed the ISO8601 check
	  // this check is meant to catch invalid dates
	  // like 2009-02-31
	  // first check for ordinal dates
	  var ordinalMatch = str.match(/^(\d{4})-?(\d{3})([ T]{1}\.*|$)/);

	  if (ordinalMatch) {
	    var oYear = Number(ordinalMatch[1]);
	    var oDay = Number(ordinalMatch[2]); // if is leap year

	    if (oYear % 4 === 0 && oYear % 100 !== 0 || oYear % 400 === 0) return oDay <= 366;
	    return oDay <= 365;
	  }

	  var match = str.match(/(\d{4})-?(\d{0,2})-?(\d*)/).map(Number);
	  var year = match[1];
	  var month = match[2];
	  var day = match[3];
	  var monthString = month ? "0".concat(month).slice(-2) : month;
	  var dayString = day ? "0".concat(day).slice(-2) : day; // create a date object and compare

	  var d = new Date("".concat(year, "-").concat(monthString || '01', "-").concat(dayString || '01'));

	  if (month && day) {
	    return d.getUTCFullYear() === year && d.getUTCMonth() + 1 === month && d.getUTCDate() === day;
	  }

	  return true;
	};

	function isISO8601(str, options) {
	  (0, _assertString.default)(str);
	  var check = iso8601.test(str);
	  if (!options) return check;
	  if (check && options.strict) return isValidDate(str);
	  return check;
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(isISO8601_1);

	var isRFC3339_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isRFC3339;

	var _assertString = _interopRequireDefault(assertString_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* Based on https://tools.ietf.org/html/rfc3339#section-5.6 */
	var dateFullYear = /[0-9]{4}/;
	var dateMonth = /(0[1-9]|1[0-2])/;
	var dateMDay = /([12]\d|0[1-9]|3[01])/;
	var timeHour = /([01][0-9]|2[0-3])/;
	var timeMinute = /[0-5][0-9]/;
	var timeSecond = /([0-5][0-9]|60)/;
	var timeSecFrac = /(\.[0-9]+)?/;
	var timeNumOffset = new RegExp("[-+]".concat(timeHour.source, ":").concat(timeMinute.source));
	var timeOffset = new RegExp("([zZ]|".concat(timeNumOffset.source, ")"));
	var partialTime = new RegExp("".concat(timeHour.source, ":").concat(timeMinute.source, ":").concat(timeSecond.source).concat(timeSecFrac.source));
	var fullDate = new RegExp("".concat(dateFullYear.source, "-").concat(dateMonth.source, "-").concat(dateMDay.source));
	var fullTime = new RegExp("".concat(partialTime.source).concat(timeOffset.source));
	var rfc3339 = new RegExp("".concat(fullDate.source, "[ tT]").concat(fullTime.source));

	function isRFC3339(str) {
	  (0, _assertString.default)(str);
	  return rfc3339.test(str);
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(isRFC3339_1);

	var isISO31661Alpha2_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isISO31661Alpha2;

	var _assertString = _interopRequireDefault(assertString_1);

	var _includes = _interopRequireDefault(includes_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// from https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
	var validISO31661Alpha2CountriesCodes = ['AD', 'AE', 'AF', 'AG', 'AI', 'AL', 'AM', 'AO', 'AQ', 'AR', 'AS', 'AT', 'AU', 'AW', 'AX', 'AZ', 'BA', 'BB', 'BD', 'BE', 'BF', 'BG', 'BH', 'BI', 'BJ', 'BL', 'BM', 'BN', 'BO', 'BQ', 'BR', 'BS', 'BT', 'BV', 'BW', 'BY', 'BZ', 'CA', 'CC', 'CD', 'CF', 'CG', 'CH', 'CI', 'CK', 'CL', 'CM', 'CN', 'CO', 'CR', 'CU', 'CV', 'CW', 'CX', 'CY', 'CZ', 'DE', 'DJ', 'DK', 'DM', 'DO', 'DZ', 'EC', 'EE', 'EG', 'EH', 'ER', 'ES', 'ET', 'FI', 'FJ', 'FK', 'FM', 'FO', 'FR', 'GA', 'GB', 'GD', 'GE', 'GF', 'GG', 'GH', 'GI', 'GL', 'GM', 'GN', 'GP', 'GQ', 'GR', 'GS', 'GT', 'GU', 'GW', 'GY', 'HK', 'HM', 'HN', 'HR', 'HT', 'HU', 'ID', 'IE', 'IL', 'IM', 'IN', 'IO', 'IQ', 'IR', 'IS', 'IT', 'JE', 'JM', 'JO', 'JP', 'KE', 'KG', 'KH', 'KI', 'KM', 'KN', 'KP', 'KR', 'KW', 'KY', 'KZ', 'LA', 'LB', 'LC', 'LI', 'LK', 'LR', 'LS', 'LT', 'LU', 'LV', 'LY', 'MA', 'MC', 'MD', 'ME', 'MF', 'MG', 'MH', 'MK', 'ML', 'MM', 'MN', 'MO', 'MP', 'MQ', 'MR', 'MS', 'MT', 'MU', 'MV', 'MW', 'MX', 'MY', 'MZ', 'NA', 'NC', 'NE', 'NF', 'NG', 'NI', 'NL', 'NO', 'NP', 'NR', 'NU', 'NZ', 'OM', 'PA', 'PE', 'PF', 'PG', 'PH', 'PK', 'PL', 'PM', 'PN', 'PR', 'PS', 'PT', 'PW', 'PY', 'QA', 'RE', 'RO', 'RS', 'RU', 'RW', 'SA', 'SB', 'SC', 'SD', 'SE', 'SG', 'SH', 'SI', 'SJ', 'SK', 'SL', 'SM', 'SN', 'SO', 'SR', 'SS', 'ST', 'SV', 'SX', 'SY', 'SZ', 'TC', 'TD', 'TF', 'TG', 'TH', 'TJ', 'TK', 'TL', 'TM', 'TN', 'TO', 'TR', 'TT', 'TV', 'TW', 'TZ', 'UA', 'UG', 'UM', 'US', 'UY', 'UZ', 'VA', 'VC', 'VE', 'VG', 'VI', 'VN', 'VU', 'WF', 'WS', 'YE', 'YT', 'ZA', 'ZM', 'ZW'];

	function isISO31661Alpha2(str) {
	  (0, _assertString.default)(str);
	  return (0, _includes.default)(validISO31661Alpha2CountriesCodes, str.toUpperCase());
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(isISO31661Alpha2_1);

	var isISO31661Alpha3_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isISO31661Alpha3;

	var _assertString = _interopRequireDefault(assertString_1);

	var _includes = _interopRequireDefault(includes_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// from https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3
	var validISO31661Alpha3CountriesCodes = ['AFG', 'ALA', 'ALB', 'DZA', 'ASM', 'AND', 'AGO', 'AIA', 'ATA', 'ATG', 'ARG', 'ARM', 'ABW', 'AUS', 'AUT', 'AZE', 'BHS', 'BHR', 'BGD', 'BRB', 'BLR', 'BEL', 'BLZ', 'BEN', 'BMU', 'BTN', 'BOL', 'BES', 'BIH', 'BWA', 'BVT', 'BRA', 'IOT', 'BRN', 'BGR', 'BFA', 'BDI', 'KHM', 'CMR', 'CAN', 'CPV', 'CYM', 'CAF', 'TCD', 'CHL', 'CHN', 'CXR', 'CCK', 'COL', 'COM', 'COG', 'COD', 'COK', 'CRI', 'CIV', 'HRV', 'CUB', 'CUW', 'CYP', 'CZE', 'DNK', 'DJI', 'DMA', 'DOM', 'ECU', 'EGY', 'SLV', 'GNQ', 'ERI', 'EST', 'ETH', 'FLK', 'FRO', 'FJI', 'FIN', 'FRA', 'GUF', 'PYF', 'ATF', 'GAB', 'GMB', 'GEO', 'DEU', 'GHA', 'GIB', 'GRC', 'GRL', 'GRD', 'GLP', 'GUM', 'GTM', 'GGY', 'GIN', 'GNB', 'GUY', 'HTI', 'HMD', 'VAT', 'HND', 'HKG', 'HUN', 'ISL', 'IND', 'IDN', 'IRN', 'IRQ', 'IRL', 'IMN', 'ISR', 'ITA', 'JAM', 'JPN', 'JEY', 'JOR', 'KAZ', 'KEN', 'KIR', 'PRK', 'KOR', 'KWT', 'KGZ', 'LAO', 'LVA', 'LBN', 'LSO', 'LBR', 'LBY', 'LIE', 'LTU', 'LUX', 'MAC', 'MKD', 'MDG', 'MWI', 'MYS', 'MDV', 'MLI', 'MLT', 'MHL', 'MTQ', 'MRT', 'MUS', 'MYT', 'MEX', 'FSM', 'MDA', 'MCO', 'MNG', 'MNE', 'MSR', 'MAR', 'MOZ', 'MMR', 'NAM', 'NRU', 'NPL', 'NLD', 'NCL', 'NZL', 'NIC', 'NER', 'NGA', 'NIU', 'NFK', 'MNP', 'NOR', 'OMN', 'PAK', 'PLW', 'PSE', 'PAN', 'PNG', 'PRY', 'PER', 'PHL', 'PCN', 'POL', 'PRT', 'PRI', 'QAT', 'REU', 'ROU', 'RUS', 'RWA', 'BLM', 'SHN', 'KNA', 'LCA', 'MAF', 'SPM', 'VCT', 'WSM', 'SMR', 'STP', 'SAU', 'SEN', 'SRB', 'SYC', 'SLE', 'SGP', 'SXM', 'SVK', 'SVN', 'SLB', 'SOM', 'ZAF', 'SGS', 'SSD', 'ESP', 'LKA', 'SDN', 'SUR', 'SJM', 'SWZ', 'SWE', 'CHE', 'SYR', 'TWN', 'TJK', 'TZA', 'THA', 'TLS', 'TGO', 'TKL', 'TON', 'TTO', 'TUN', 'TUR', 'TKM', 'TCA', 'TUV', 'UGA', 'UKR', 'ARE', 'GBR', 'USA', 'UMI', 'URY', 'UZB', 'VUT', 'VEN', 'VNM', 'VGB', 'VIR', 'WLF', 'ESH', 'YEM', 'ZMB', 'ZWE'];

	function isISO31661Alpha3(str) {
	  (0, _assertString.default)(str);
	  return (0, _includes.default)(validISO31661Alpha3CountriesCodes, str.toUpperCase());
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(isISO31661Alpha3_1);

	var isBase32_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isBase32;

	var _assertString = _interopRequireDefault(assertString_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var base32 = /^[A-Z2-7]+=*$/;

	function isBase32(str) {
	  (0, _assertString.default)(str);
	  var len = str.length;

	  if (len > 0 && len % 8 === 0 && base32.test(str)) {
	    return true;
	  }

	  return false;
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(isBase32_1);

	var isDataURI_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isDataURI;

	var _assertString = _interopRequireDefault(assertString_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var validMediaType = /^[a-z]+\/[a-z0-9\-\+]+$/i;
	var validAttribute = /^[a-z\-]+=[a-z0-9\-]+$/i;
	var validData = /^[a-z0-9!\$&'\(\)\*\+,;=\-\._~:@\/\?%\s]*$/i;

	function isDataURI(str) {
	  (0, _assertString.default)(str);
	  var data = str.split(',');

	  if (data.length < 2) {
	    return false;
	  }

	  var attributes = data.shift().trim().split(';');
	  var schemeAndMediaType = attributes.shift();

	  if (schemeAndMediaType.substr(0, 5) !== 'data:') {
	    return false;
	  }

	  var mediaType = schemeAndMediaType.substr(5);

	  if (mediaType !== '' && !validMediaType.test(mediaType)) {
	    return false;
	  }

	  for (var i = 0; i < attributes.length; i++) {
	    if (i === attributes.length - 1 && attributes[i].toLowerCase() === 'base64') ; else if (!validAttribute.test(attributes[i])) {
	      return false;
	    }
	  }

	  for (var _i = 0; _i < data.length; _i++) {
	    if (!validData.test(data[_i])) {
	      return false;
	    }
	  }

	  return true;
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(isDataURI_1);

	var isMagnetURI_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isMagnetURI;

	var _assertString = _interopRequireDefault(assertString_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var magnetURI = /^magnet:\?xt=urn:[a-z0-9]+:[a-z0-9]{32,40}&dn=.+&tr=.+$/i;

	function isMagnetURI(url) {
	  (0, _assertString.default)(url);
	  return magnetURI.test(url.trim());
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(isMagnetURI_1);

	var isMimeType_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isMimeType;

	var _assertString = _interopRequireDefault(assertString_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*
	  Checks if the provided string matches to a correct Media type format (MIME type)

	  This function only checks is the string format follows the
	  etablished rules by the according RFC specifications.
	  This function supports 'charset' in textual media types
	  (https://tools.ietf.org/html/rfc6657).

	  This function does not check against all the media types listed
	  by the IANA (https://www.iana.org/assignments/media-types/media-types.xhtml)
	  because of lightness purposes : it would require to include
	  all these MIME types in this librairy, which would weigh it
	  significantly. This kind of effort maybe is not worth for the use that
	  this function has in this entire librairy.

	  More informations in the RFC specifications :
	  - https://tools.ietf.org/html/rfc2045
	  - https://tools.ietf.org/html/rfc2046
	  - https://tools.ietf.org/html/rfc7231#section-3.1.1.1
	  - https://tools.ietf.org/html/rfc7231#section-3.1.1.5
	*/
	// Match simple MIME types
	// NB :
	//   Subtype length must not exceed 100 characters.
	//   This rule does not comply to the RFC specs (what is the max length ?).
	var mimeTypeSimple = /^(application|audio|font|image|message|model|multipart|text|video)\/[a-zA-Z0-9\.\-\+]{1,100}$/i; // eslint-disable-line max-len
	// Handle "charset" in "text/*"

	var mimeTypeText = /^text\/[a-zA-Z0-9\.\-\+]{1,100};\s?charset=("[a-zA-Z0-9\.\-\+\s]{0,70}"|[a-zA-Z0-9\.\-\+]{0,70})(\s?\([a-zA-Z0-9\.\-\+\s]{1,20}\))?$/i; // eslint-disable-line max-len
	// Handle "boundary" in "multipart/*"

	var mimeTypeMultipart = /^multipart\/[a-zA-Z0-9\.\-\+]{1,100}(;\s?(boundary|charset)=("[a-zA-Z0-9\.\-\+\s]{0,70}"|[a-zA-Z0-9\.\-\+]{0,70})(\s?\([a-zA-Z0-9\.\-\+\s]{1,20}\))?){0,2}$/i; // eslint-disable-line max-len

	function isMimeType(str) {
	  (0, _assertString.default)(str);
	  return mimeTypeSimple.test(str) || mimeTypeText.test(str) || mimeTypeMultipart.test(str);
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(isMimeType_1);

	var isLatLong_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isLatLong;

	var _assertString = _interopRequireDefault(assertString_1);

	var _merge = _interopRequireDefault(merge_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var lat = /^\(?[+-]?(90(\.0+)?|[1-8]?\d(\.\d+)?)$/;
	var long = /^\s?[+-]?(180(\.0+)?|1[0-7]\d(\.\d+)?|\d{1,2}(\.\d+)?)\)?$/;
	var latDMS = /^(([1-8]?\d)\D+([1-5]?\d|60)\D+([1-5]?\d|60)(\.\d+)?|90\D+0\D+0)\D+[NSns]?$/i;
	var longDMS = /^\s*([1-7]?\d{1,2}\D+([1-5]?\d|60)\D+([1-5]?\d|60)(\.\d+)?|180\D+0\D+0)\D+[EWew]?$/i;
	var defaultLatLongOptions = {
	  checkDMS: false
	};

	function isLatLong(str, options) {
	  (0, _assertString.default)(str);
	  options = (0, _merge.default)(options, defaultLatLongOptions);
	  if (!str.includes(',')) return false;
	  var pair = str.split(',');
	  if (pair[0].startsWith('(') && !pair[1].endsWith(')') || pair[1].endsWith(')') && !pair[0].startsWith('(')) return false;

	  if (options.checkDMS) {
	    return latDMS.test(pair[0]) && longDMS.test(pair[1]);
	  }

	  return lat.test(pair[0]) && long.test(pair[1]);
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(isLatLong_1);

	var isPostalCode_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isPostalCode;
	exports.locales = void 0;

	var _assertString = _interopRequireDefault(assertString_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// common patterns
	var threeDigit = /^\d{3}$/;
	var fourDigit = /^\d{4}$/;
	var fiveDigit = /^\d{5}$/;
	var sixDigit = /^\d{6}$/;
	var patterns = {
	  AD: /^AD\d{3}$/,
	  AT: fourDigit,
	  AU: fourDigit,
	  BE: fourDigit,
	  BG: fourDigit,
	  BR: /^\d{5}-\d{3}$/,
	  CA: /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][\s\-]?\d[ABCEGHJ-NPRSTV-Z]\d$/i,
	  CH: fourDigit,
	  CZ: /^\d{3}\s?\d{2}$/,
	  DE: fiveDigit,
	  DK: fourDigit,
	  DZ: fiveDigit,
	  EE: fiveDigit,
	  ES: fiveDigit,
	  FI: fiveDigit,
	  FR: /^\d{2}\s?\d{3}$/,
	  GB: /^(gir\s?0aa|[a-z]{1,2}\d[\da-z]?\s?(\d[a-z]{2})?)$/i,
	  GR: /^\d{3}\s?\d{2}$/,
	  HR: /^([1-5]\d{4}$)/,
	  HU: fourDigit,
	  ID: fiveDigit,
	  IE: /^(?!.*(?:o))[A-z]\d[\dw]\s\w{4}$/i,
	  IL: fiveDigit,
	  IN: /^((?!10|29|35|54|55|65|66|86|87|88|89)[1-9][0-9]{5})$/,
	  IS: threeDigit,
	  IT: fiveDigit,
	  JP: /^\d{3}\-\d{4}$/,
	  KE: fiveDigit,
	  LI: /^(948[5-9]|949[0-7])$/,
	  LT: /^LT\-\d{5}$/,
	  LU: fourDigit,
	  LV: /^LV\-\d{4}$/,
	  MX: fiveDigit,
	  MT: /^[A-Za-z]{3}\s{0,1}\d{4}$/,
	  NL: /^\d{4}\s?[a-z]{2}$/i,
	  NO: fourDigit,
	  NP: /^(10|21|22|32|33|34|44|45|56|57)\d{3}$|^(977)$/i,
	  NZ: fourDigit,
	  PL: /^\d{2}\-\d{3}$/,
	  PR: /^00[679]\d{2}([ -]\d{4})?$/,
	  PT: /^\d{4}\-\d{3}?$/,
	  RO: sixDigit,
	  RU: sixDigit,
	  SA: fiveDigit,
	  SE: /^[1-9]\d{2}\s?\d{2}$/,
	  SI: fourDigit,
	  SK: /^\d{3}\s?\d{2}$/,
	  TN: fourDigit,
	  TW: /^\d{3}(\d{2})?$/,
	  UA: fiveDigit,
	  US: /^\d{5}(-\d{4})?$/,
	  ZA: fourDigit,
	  ZM: fiveDigit
	};
	var locales = Object.keys(patterns);
	exports.locales = locales;

	function isPostalCode(str, locale) {
	  (0, _assertString.default)(str);

	  if (locale in patterns) {
	    return patterns[locale].test(str);
	  } else if (locale === 'any') {
	    for (var key in patterns) {
	      // https://github.com/gotwarlost/istanbul/blob/master/ignoring-code-for-coverage.md#ignoring-code-for-coverage-purposes
	      // istanbul ignore else
	      if (patterns.hasOwnProperty(key)) {
	        var pattern = patterns[key];

	        if (pattern.test(str)) {
	          return true;
	        }
	      }
	    }

	    return false;
	  }

	  throw new Error("Invalid locale '".concat(locale, "'"));
	}
	});

	unwrapExports(isPostalCode_1);
	var isPostalCode_2 = isPostalCode_1.locales;

	var ltrim_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = ltrim;

	var _assertString = _interopRequireDefault(assertString_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function ltrim(str, chars) {
	  (0, _assertString.default)(str); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#Escaping

	  var pattern = chars ? new RegExp("^[".concat(chars.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), "]+"), 'g') : /^\s+/g;
	  return str.replace(pattern, '');
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(ltrim_1);

	var rtrim_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = rtrim;

	var _assertString = _interopRequireDefault(assertString_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function rtrim(str, chars) {
	  (0, _assertString.default)(str); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#Escaping

	  var pattern = chars ? new RegExp("[".concat(chars.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), "]+$"), 'g') : /\s+$/g;
	  return str.replace(pattern, '');
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(rtrim_1);

	var trim_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = trim;

	var _rtrim = _interopRequireDefault(rtrim_1);

	var _ltrim = _interopRequireDefault(ltrim_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function trim(str, chars) {
	  return (0, _rtrim.default)((0, _ltrim.default)(str, chars), chars);
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(trim_1);

	var _escape = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = escape;

	var _assertString = _interopRequireDefault(assertString_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function escape(str) {
	  (0, _assertString.default)(str);
	  return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\//g, '&#x2F;').replace(/\\/g, '&#x5C;').replace(/`/g, '&#96;');
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(_escape);

	var _unescape = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = unescape;

	var _assertString = _interopRequireDefault(assertString_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function unescape(str) {
	  (0, _assertString.default)(str);
	  return str.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#x2F;/g, '/').replace(/&#x5C;/g, '\\').replace(/&#96;/g, '`');
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(_unescape);

	var blacklist_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = blacklist;

	var _assertString = _interopRequireDefault(assertString_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function blacklist(str, chars) {
	  (0, _assertString.default)(str);
	  return str.replace(new RegExp("[".concat(chars, "]+"), 'g'), '');
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(blacklist_1);

	var stripLow_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = stripLow;

	var _assertString = _interopRequireDefault(assertString_1);

	var _blacklist = _interopRequireDefault(blacklist_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function stripLow(str, keep_new_lines) {
	  (0, _assertString.default)(str);
	  var chars = keep_new_lines ? '\\x00-\\x09\\x0B\\x0C\\x0E-\\x1F\\x7F' : '\\x00-\\x1F\\x7F';
	  return (0, _blacklist.default)(str, chars);
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(stripLow_1);

	var whitelist_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = whitelist;

	var _assertString = _interopRequireDefault(assertString_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function whitelist(str, chars) {
	  (0, _assertString.default)(str);
	  return str.replace(new RegExp("[^".concat(chars, "]+"), 'g'), '');
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(whitelist_1);

	var isWhitelisted_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isWhitelisted;

	var _assertString = _interopRequireDefault(assertString_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function isWhitelisted(str, chars) {
	  (0, _assertString.default)(str);

	  for (var i = str.length - 1; i >= 0; i--) {
	    if (chars.indexOf(str[i]) === -1) {
	      return false;
	    }
	  }

	  return true;
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(isWhitelisted_1);

	var normalizeEmail_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = normalizeEmail;

	var _merge = _interopRequireDefault(merge_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var default_normalize_email_options = {
	  // The following options apply to all email addresses
	  // Lowercases the local part of the email address.
	  // Please note this may violate RFC 5321 as per http://stackoverflow.com/a/9808332/192024).
	  // The domain is always lowercased, as per RFC 1035
	  all_lowercase: true,
	  // The following conversions are specific to GMail
	  // Lowercases the local part of the GMail address (known to be case-insensitive)
	  gmail_lowercase: true,
	  // Removes dots from the local part of the email address, as that's ignored by GMail
	  gmail_remove_dots: true,
	  // Removes the subaddress (e.g. "+foo") from the email address
	  gmail_remove_subaddress: true,
	  // Conversts the googlemail.com domain to gmail.com
	  gmail_convert_googlemaildotcom: true,
	  // The following conversions are specific to Outlook.com / Windows Live / Hotmail
	  // Lowercases the local part of the Outlook.com address (known to be case-insensitive)
	  outlookdotcom_lowercase: true,
	  // Removes the subaddress (e.g. "+foo") from the email address
	  outlookdotcom_remove_subaddress: true,
	  // The following conversions are specific to Yahoo
	  // Lowercases the local part of the Yahoo address (known to be case-insensitive)
	  yahoo_lowercase: true,
	  // Removes the subaddress (e.g. "-foo") from the email address
	  yahoo_remove_subaddress: true,
	  // The following conversions are specific to Yandex
	  // Lowercases the local part of the Yandex address (known to be case-insensitive)
	  yandex_lowercase: true,
	  // The following conversions are specific to iCloud
	  // Lowercases the local part of the iCloud address (known to be case-insensitive)
	  icloud_lowercase: true,
	  // Removes the subaddress (e.g. "+foo") from the email address
	  icloud_remove_subaddress: true
	}; // List of domains used by iCloud

	var icloud_domains = ['icloud.com', 'me.com']; // List of domains used by Outlook.com and its predecessors
	// This list is likely incomplete.
	// Partial reference:
	// https://blogs.office.com/2013/04/17/outlook-com-gets-two-step-verification-sign-in-by-alias-and-new-international-domains/

	var outlookdotcom_domains = ['hotmail.at', 'hotmail.be', 'hotmail.ca', 'hotmail.cl', 'hotmail.co.il', 'hotmail.co.nz', 'hotmail.co.th', 'hotmail.co.uk', 'hotmail.com', 'hotmail.com.ar', 'hotmail.com.au', 'hotmail.com.br', 'hotmail.com.gr', 'hotmail.com.mx', 'hotmail.com.pe', 'hotmail.com.tr', 'hotmail.com.vn', 'hotmail.cz', 'hotmail.de', 'hotmail.dk', 'hotmail.es', 'hotmail.fr', 'hotmail.hu', 'hotmail.id', 'hotmail.ie', 'hotmail.in', 'hotmail.it', 'hotmail.jp', 'hotmail.kr', 'hotmail.lv', 'hotmail.my', 'hotmail.ph', 'hotmail.pt', 'hotmail.sa', 'hotmail.sg', 'hotmail.sk', 'live.be', 'live.co.uk', 'live.com', 'live.com.ar', 'live.com.mx', 'live.de', 'live.es', 'live.eu', 'live.fr', 'live.it', 'live.nl', 'msn.com', 'outlook.at', 'outlook.be', 'outlook.cl', 'outlook.co.il', 'outlook.co.nz', 'outlook.co.th', 'outlook.com', 'outlook.com.ar', 'outlook.com.au', 'outlook.com.br', 'outlook.com.gr', 'outlook.com.pe', 'outlook.com.tr', 'outlook.com.vn', 'outlook.cz', 'outlook.de', 'outlook.dk', 'outlook.es', 'outlook.fr', 'outlook.hu', 'outlook.id', 'outlook.ie', 'outlook.in', 'outlook.it', 'outlook.jp', 'outlook.kr', 'outlook.lv', 'outlook.my', 'outlook.ph', 'outlook.pt', 'outlook.sa', 'outlook.sg', 'outlook.sk', 'passport.com']; // List of domains used by Yahoo Mail
	// This list is likely incomplete

	var yahoo_domains = ['rocketmail.com', 'yahoo.ca', 'yahoo.co.uk', 'yahoo.com', 'yahoo.de', 'yahoo.fr', 'yahoo.in', 'yahoo.it', 'ymail.com']; // List of domains used by yandex.ru

	var yandex_domains = ['yandex.ru', 'yandex.ua', 'yandex.kz', 'yandex.com', 'yandex.by', 'ya.ru']; // replace single dots, but not multiple consecutive dots

	function dotsReplacer(match) {
	  if (match.length > 1) {
	    return match;
	  }

	  return '';
	}

	function normalizeEmail(email, options) {
	  options = (0, _merge.default)(options, default_normalize_email_options);
	  var raw_parts = email.split('@');
	  var domain = raw_parts.pop();
	  var user = raw_parts.join('@');
	  var parts = [user, domain]; // The domain is always lowercased, as it's case-insensitive per RFC 1035

	  parts[1] = parts[1].toLowerCase();

	  if (parts[1] === 'gmail.com' || parts[1] === 'googlemail.com') {
	    // Address is GMail
	    if (options.gmail_remove_subaddress) {
	      parts[0] = parts[0].split('+')[0];
	    }

	    if (options.gmail_remove_dots) {
	      // this does not replace consecutive dots like example..email@gmail.com
	      parts[0] = parts[0].replace(/\.+/g, dotsReplacer);
	    }

	    if (!parts[0].length) {
	      return false;
	    }

	    if (options.all_lowercase || options.gmail_lowercase) {
	      parts[0] = parts[0].toLowerCase();
	    }

	    parts[1] = options.gmail_convert_googlemaildotcom ? 'gmail.com' : parts[1];
	  } else if (icloud_domains.indexOf(parts[1]) >= 0) {
	    // Address is iCloud
	    if (options.icloud_remove_subaddress) {
	      parts[0] = parts[0].split('+')[0];
	    }

	    if (!parts[0].length) {
	      return false;
	    }

	    if (options.all_lowercase || options.icloud_lowercase) {
	      parts[0] = parts[0].toLowerCase();
	    }
	  } else if (outlookdotcom_domains.indexOf(parts[1]) >= 0) {
	    // Address is Outlook.com
	    if (options.outlookdotcom_remove_subaddress) {
	      parts[0] = parts[0].split('+')[0];
	    }

	    if (!parts[0].length) {
	      return false;
	    }

	    if (options.all_lowercase || options.outlookdotcom_lowercase) {
	      parts[0] = parts[0].toLowerCase();
	    }
	  } else if (yahoo_domains.indexOf(parts[1]) >= 0) {
	    // Address is Yahoo
	    if (options.yahoo_remove_subaddress) {
	      var components = parts[0].split('-');
	      parts[0] = components.length > 1 ? components.slice(0, -1).join('-') : components[0];
	    }

	    if (!parts[0].length) {
	      return false;
	    }

	    if (options.all_lowercase || options.yahoo_lowercase) {
	      parts[0] = parts[0].toLowerCase();
	    }
	  } else if (yandex_domains.indexOf(parts[1]) >= 0) {
	    if (options.all_lowercase || options.yandex_lowercase) {
	      parts[0] = parts[0].toLowerCase();
	    }

	    parts[1] = 'yandex.ru'; // all yandex domains are equal, 1st preffered
	  } else if (options.all_lowercase) {
	    // Any other address
	    parts[0] = parts[0].toLowerCase();
	  }

	  return parts.join('@');
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(normalizeEmail_1);

	var isSlug_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isSlug;

	var _assertString = _interopRequireDefault(assertString_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var charsetRegex = /^[^\s-_](?!.*?[-_]{2,})([a-z0-9-\\]{1,})[^\s]*[^-_\s]$/;

	function isSlug(str) {
	  (0, _assertString.default)(str);
	  return charsetRegex.test(str);
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(isSlug_1);

	var validator_1 = createCommonjsModule(function (module, exports) {

	function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = void 0;

	var _toDate = _interopRequireDefault(toDate_1);

	var _toFloat = _interopRequireDefault(toFloat_1);

	var _toInt = _interopRequireDefault(toInt_1);

	var _toBoolean = _interopRequireDefault(toBoolean_1);

	var _equals = _interopRequireDefault(equals_1);

	var _contains = _interopRequireDefault(contains_1);

	var _matches = _interopRequireDefault(matches_1);

	var _isEmail = _interopRequireDefault(isEmail_1);

	var _isURL = _interopRequireDefault(isURL_1);

	var _isMACAddress = _interopRequireDefault(isMACAddress_1);

	var _isIP = _interopRequireDefault(isIP_1);

	var _isIPRange = _interopRequireDefault(isIPRange_1);

	var _isFQDN = _interopRequireDefault(isFQDN_1);

	var _isDate = _interopRequireDefault(isDate_1);

	var _isBoolean = _interopRequireDefault(isBoolean_1);

	var _isLocale = _interopRequireDefault(isLocale_1);

	var _isAlpha = _interopRequireWildcard(isAlpha_1);

	var _isAlphanumeric = _interopRequireWildcard(isAlphanumeric_1);

	var _isNumeric = _interopRequireDefault(isNumeric_1);

	var _isPassportNumber = _interopRequireDefault(isPassportNumber_1);

	var _isPort = _interopRequireDefault(isPort_1);

	var _isLowercase = _interopRequireDefault(isLowercase_1);

	var _isUppercase = _interopRequireDefault(isUppercase_1);

	var _isIMEI = _interopRequireDefault(isIMEI_1);

	var _isAscii = _interopRequireDefault(isAscii_1);

	var _isFullWidth = _interopRequireDefault(isFullWidth_1);

	var _isHalfWidth = _interopRequireDefault(isHalfWidth_1);

	var _isVariableWidth = _interopRequireDefault(isVariableWidth_1);

	var _isMultibyte = _interopRequireDefault(isMultibyte_1);

	var _isSemVer = _interopRequireDefault(isSemVer_1);

	var _isSurrogatePair = _interopRequireDefault(isSurrogatePair_1);

	var _isInt = _interopRequireDefault(isInt_1);

	var _isFloat = _interopRequireWildcard(isFloat_1);

	var _isDecimal = _interopRequireDefault(isDecimal_1);

	var _isHexadecimal = _interopRequireDefault(isHexadecimal_1);

	var _isOctal = _interopRequireDefault(isOctal_1);

	var _isDivisibleBy = _interopRequireDefault(isDivisibleBy_1);

	var _isHexColor = _interopRequireDefault(isHexColor_1);

	var _isRgbColor = _interopRequireDefault(isRgbColor_1);

	var _isHSL = _interopRequireDefault(isHSL_1);

	var _isISRC = _interopRequireDefault(isISRC_1);

	var _isIBAN = _interopRequireDefault(isIBAN_1);

	var _isBIC = _interopRequireDefault(isBIC_1);

	var _isMD = _interopRequireDefault(isMD5_1);

	var _isHash = _interopRequireDefault(isHash_1);

	var _isJWT = _interopRequireDefault(isJWT_1);

	var _isJSON = _interopRequireDefault(isJSON_1);

	var _isEmpty = _interopRequireDefault(isEmpty_1);

	var _isLength = _interopRequireDefault(isLength_1);

	var _isByteLength = _interopRequireDefault(isByteLength_1);

	var _isUUID = _interopRequireDefault(isUUID_1);

	var _isMongoId = _interopRequireDefault(isMongoId_1);

	var _isAfter = _interopRequireDefault(isAfter_1);

	var _isBefore = _interopRequireDefault(isBefore_1);

	var _isIn = _interopRequireDefault(isIn_1);

	var _isCreditCard = _interopRequireDefault(isCreditCard_1);

	var _isIdentityCard = _interopRequireDefault(isIdentityCard_1);

	var _isEAN = _interopRequireDefault(isEAN_1);

	var _isISIN = _interopRequireDefault(isISIN_1);

	var _isISBN = _interopRequireDefault(isISBN_1);

	var _isISSN = _interopRequireDefault(isISSN_1);

	var _isTaxID = _interopRequireDefault(isTaxID_1);

	var _isMobilePhone = _interopRequireWildcard(isMobilePhone_1);

	var _isEthereumAddress = _interopRequireDefault(isEthereumAddress_1);

	var _isCurrency = _interopRequireDefault(isCurrency_1);

	var _isBtcAddress = _interopRequireDefault(isBtcAddress_1);

	var _isISO = _interopRequireDefault(isISO8601_1);

	var _isRFC = _interopRequireDefault(isRFC3339_1);

	var _isISO31661Alpha = _interopRequireDefault(isISO31661Alpha2_1);

	var _isISO31661Alpha2 = _interopRequireDefault(isISO31661Alpha3_1);

	var _isBase = _interopRequireDefault(isBase32_1);

	var _isBase2 = _interopRequireDefault(isBase64_1);

	var _isDataURI = _interopRequireDefault(isDataURI_1);

	var _isMagnetURI = _interopRequireDefault(isMagnetURI_1);

	var _isMimeType = _interopRequireDefault(isMimeType_1);

	var _isLatLong = _interopRequireDefault(isLatLong_1);

	var _isPostalCode = _interopRequireWildcard(isPostalCode_1);

	var _ltrim = _interopRequireDefault(ltrim_1);

	var _rtrim = _interopRequireDefault(rtrim_1);

	var _trim = _interopRequireDefault(trim_1);

	var _escape$1 = _interopRequireDefault(_escape);

	var _unescape$1 = _interopRequireDefault(_unescape);

	var _stripLow = _interopRequireDefault(stripLow_1);

	var _whitelist = _interopRequireDefault(whitelist_1);

	var _blacklist = _interopRequireDefault(blacklist_1);

	var _isWhitelisted = _interopRequireDefault(isWhitelisted_1);

	var _normalizeEmail = _interopRequireDefault(normalizeEmail_1);

	var _isSlug = _interopRequireDefault(isSlug_1);

	function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var version = '13.1.1';
	var validator = {
	  version: version,
	  toDate: _toDate.default,
	  toFloat: _toFloat.default,
	  toInt: _toInt.default,
	  toBoolean: _toBoolean.default,
	  equals: _equals.default,
	  contains: _contains.default,
	  matches: _matches.default,
	  isEmail: _isEmail.default,
	  isURL: _isURL.default,
	  isMACAddress: _isMACAddress.default,
	  isIP: _isIP.default,
	  isIPRange: _isIPRange.default,
	  isFQDN: _isFQDN.default,
	  isBoolean: _isBoolean.default,
	  isIBAN: _isIBAN.default,
	  isBIC: _isBIC.default,
	  isAlpha: _isAlpha.default,
	  isAlphaLocales: _isAlpha.locales,
	  isAlphanumeric: _isAlphanumeric.default,
	  isAlphanumericLocales: _isAlphanumeric.locales,
	  isNumeric: _isNumeric.default,
	  isPassportNumber: _isPassportNumber.default,
	  isPort: _isPort.default,
	  isLowercase: _isLowercase.default,
	  isUppercase: _isUppercase.default,
	  isAscii: _isAscii.default,
	  isFullWidth: _isFullWidth.default,
	  isHalfWidth: _isHalfWidth.default,
	  isVariableWidth: _isVariableWidth.default,
	  isMultibyte: _isMultibyte.default,
	  isSemVer: _isSemVer.default,
	  isSurrogatePair: _isSurrogatePair.default,
	  isInt: _isInt.default,
	  isIMEI: _isIMEI.default,
	  isFloat: _isFloat.default,
	  isFloatLocales: _isFloat.locales,
	  isDecimal: _isDecimal.default,
	  isHexadecimal: _isHexadecimal.default,
	  isOctal: _isOctal.default,
	  isDivisibleBy: _isDivisibleBy.default,
	  isHexColor: _isHexColor.default,
	  isRgbColor: _isRgbColor.default,
	  isHSL: _isHSL.default,
	  isISRC: _isISRC.default,
	  isMD5: _isMD.default,
	  isHash: _isHash.default,
	  isJWT: _isJWT.default,
	  isJSON: _isJSON.default,
	  isEmpty: _isEmpty.default,
	  isLength: _isLength.default,
	  isLocale: _isLocale.default,
	  isByteLength: _isByteLength.default,
	  isUUID: _isUUID.default,
	  isMongoId: _isMongoId.default,
	  isAfter: _isAfter.default,
	  isBefore: _isBefore.default,
	  isIn: _isIn.default,
	  isCreditCard: _isCreditCard.default,
	  isIdentityCard: _isIdentityCard.default,
	  isEAN: _isEAN.default,
	  isISIN: _isISIN.default,
	  isISBN: _isISBN.default,
	  isISSN: _isISSN.default,
	  isMobilePhone: _isMobilePhone.default,
	  isMobilePhoneLocales: _isMobilePhone.locales,
	  isPostalCode: _isPostalCode.default,
	  isPostalCodeLocales: _isPostalCode.locales,
	  isEthereumAddress: _isEthereumAddress.default,
	  isCurrency: _isCurrency.default,
	  isBtcAddress: _isBtcAddress.default,
	  isISO8601: _isISO.default,
	  isRFC3339: _isRFC.default,
	  isISO31661Alpha2: _isISO31661Alpha.default,
	  isISO31661Alpha3: _isISO31661Alpha2.default,
	  isBase32: _isBase.default,
	  isBase64: _isBase2.default,
	  isDataURI: _isDataURI.default,
	  isMagnetURI: _isMagnetURI.default,
	  isMimeType: _isMimeType.default,
	  isLatLong: _isLatLong.default,
	  ltrim: _ltrim.default,
	  rtrim: _rtrim.default,
	  trim: _trim.default,
	  escape: _escape$1.default,
	  unescape: _unescape$1.default,
	  stripLow: _stripLow.default,
	  whitelist: _whitelist.default,
	  blacklist: _blacklist.default,
	  isWhitelisted: _isWhitelisted.default,
	  normalizeEmail: _normalizeEmail.default,
	  toString: toString,
	  isSlug: _isSlug.default,
	  isTaxID: _isTaxID.default,
	  isDate: _isDate.default
	};
	var _default = validator;
	exports.default = _default;
	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	var validator = unwrapExports(validator_1);

	class UserCommon{
		static DEFAULT_USER_AFTER_LOGIN_URL = '/dashboard';
		static DEFAULT_REDIRECT_TIMEOUT = 5000;
		static CLASS_OK = 'is-success';
		static CLASS_ERR = 'is-danger';
	  static getUserAfterLoginRedirectURL(app){
	    return app.getOptions('modules.user.afterLoginURL', this.DEFAULT_USER_AFTER_LOGIN_URL);
	  }
	  static getRedirectTimeout(app){
	    return app.getOptions('modules.user.redirectTimout', this.DEFAULT_REDIRECT_TIMEOUT);
	  }
	  static goDashboard(app) {
	    document.location.assign(this.getUserAfterLoginRedirectURL(app));
	  }
	  static goLogin() {
	    document.location.href = '/login';
	  }
	  static goRegister() {
	    document.location.href = '/register';
	  }
	  static goRestore() {
	    document.location.href = '/restore';
	  }
	  static goLogout() {
	    document.location.href = '/logout';
	  }
	  static isError(e){
	    return e instanceof Error;
	  }
	  static validateField(field, value, fields){
			let errors = [];
			switch(field){
				case 'username':
				 if (!validator.isLength(value, { min: 6})){
						errors.push('Минимальная длина 6 знаков');
				 }
				break;
				case 'email':
					if(!validator.isEmail(value)){
						errors.push('Необходимо ввести email адрес');
					}
				break;
				case 'tel':
					if(!validator.isLength(value, { min: 11})){
						errors.push('Необходимо ввести полный номер телефона из 11 цифр');
					}
				break;
				case 'active':
					if((value !== false) && (value !== true)){
						errors.push('Необходимо ввести действительное значение автивности записи');
					}
				break;
				case 'role':
					if(!Array.isArray(value)){
						errors.push('Необходимо указать список ролей');
						break;
					}
					if(!((value.length>=1) && (value.length<=6))){
						errors.push('Необходимо добавить хотя бы одну роль (6 max)');
					}
					let baseRolesCount = 0;
					value.forEach((role) => {
						if(['admin', 'client', 'user', 'root'].indexOf(role) > -1 ){
							baseRolesCount++;
						}
					});
					if(baseRolesCount !== 1){
						errors.push('Необходимо указать ровно одну базовую (admin, client, user) роль');
					}
				break;
				case 'password':
					if (!validator.isLength(value, { min: 6})){
						errors.push('Минимальный размер пароля 6 знаков');
					}
				break;
	      case 'password2':
					if (!validator.isLength(value, { min: 6})){
						errors.push('Минимальный размер пароля 6 знаков');
					}
					if (fields.password.value !== value){
						errors.push('Пароли отличаются');
					}
				break;
				case 'code':
					if (!validator.isUUID(value, 4)){
						errors.push('Не верный формат кода');
					}
				break;
				default: return false;
			}
			let res = errors.length > 0 ? errors:true;
			fields[field].validated = true;
			fields[field].valid = res === true;
			fields=fields;
			return res;
		}
		static ROLES = [{
			id: 1,
			title: 'root',
			type: 'danger'
		},{
			id: 2,
			title: 'admin',
			type: 'warning'
		},{
			id: 3,
			title: 'client',
			type: 'success'
		},{
			id: 4,
			title: 'user',
			type: 'info'
		},{
			id: 5,
			title: 'manager',
			type: 'primary'
		},{
			id: 6,
			title: 'logist',
			type: 'primary'
		},{
			id: 7,
			title: 'hr',
			type: 'primary'
		}]
		static FIELDS = {
			username:{
				label: 'Логин',
				placeholder: 'Имя пользователя',
			},
			password:{
				label: 'Пароль',
				placeholder: 'Введите пароль',
				minLength: 8
			},
			password2:{
				label: 'Повторите пароль',
				placeholder: 'Введите пароль еще раз',
				minLength: 8
			},
			email:{
				label: 'Email',
				placeholder: 'Ваш email адрес',
			},
			tel:{
				label: 'Ваш номер телефона',
				placeholder: '',
			},
			active:{
				label: 'Активна',
				placeholder: '',
			},
			role:{
				label: 'Роли в системе',
				placeholder: '',
			},
			country:{
				label: 'Основной язык',
				placeholder: '',
			},
			code:{
				label: 'Код подтверждения',
				placeholder: 'Введите полученный код.',
			}
		}
		static fieldInit(type, mutation = {}){
			let field = {
				label: '',
				placeholder: '',
				enabled: true,
				value: '',
				required: true,
				validated: false,
				valid: false
			};
			if(Object.prototype.hasOwnProperty.call(this.FIELDS, type)){
				Object.assign(field, this.FIELDS[type]);
			}
			if(mutation){
				Object.assign(field, mutation);
			}
			return field;
		}
		static COUNTRIES = [
			{
				id: 		'ru',
				title: 	'Россия'
			}
		];
	}

	function noop() { }
	function run(fn) {
	    return fn();
	}
	function blank_object() {
	    return Object.create(null);
	}
	function run_all(fns) {
	    fns.forEach(run);
	}
	function is_function(thing) {
	    return typeof thing === 'function';
	}
	function safe_not_equal(a, b) {
	    return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
	}

	function append(target, node) {
	    target.appendChild(node);
	}
	function insert(target, node, anchor) {
	    target.insertBefore(node, anchor || null);
	}
	function detach(node) {
	    node.parentNode.removeChild(node);
	}
	function destroy_each(iterations, detaching) {
	    for (let i = 0; i < iterations.length; i += 1) {
	        if (iterations[i])
	            iterations[i].d(detaching);
	    }
	}
	function element(name) {
	    return document.createElement(name);
	}
	function text(data) {
	    return document.createTextNode(data);
	}
	function space() {
	    return text(' ');
	}
	function empty() {
	    return text('');
	}
	function listen(node, event, handler, options) {
	    node.addEventListener(event, handler, options);
	    return () => node.removeEventListener(event, handler, options);
	}
	function attr(node, attribute, value) {
	    if (value == null)
	        node.removeAttribute(attribute);
	    else if (node.getAttribute(attribute) !== value)
	        node.setAttribute(attribute, value);
	}
	function children(element) {
	    return Array.from(element.childNodes);
	}
	function set_data(text, data) {
	    data = '' + data;
	    if (text.data !== data)
	        text.data = data;
	}
	function set_input_value(input, value) {
	    input.value = value == null ? '' : value;
	}
	function select_option(select, value) {
	    for (let i = 0; i < select.options.length; i += 1) {
	        const option = select.options[i];
	        if (option.__value === value) {
	            option.selected = true;
	            return;
	        }
	    }
	}
	function select_value(select) {
	    const selected_option = select.querySelector(':checked') || select.options[0];
	    return selected_option && selected_option.__value;
	}
	function custom_event(type, detail) {
	    const e = document.createEvent('CustomEvent');
	    e.initCustomEvent(type, false, false, detail);
	    return e;
	}

	let current_component;
	function set_current_component(component) {
	    current_component = component;
	}
	function get_current_component() {
	    if (!current_component)
	        throw new Error(`Function called outside component initialization`);
	    return current_component;
	}
	function onMount(fn) {
	    get_current_component().$$.on_mount.push(fn);
	}
	function createEventDispatcher() {
	    const component = get_current_component();
	    return (type, detail) => {
	        const callbacks = component.$$.callbacks[type];
	        if (callbacks) {
	            // TODO are there situations where events could be dispatched
	            // in a server (non-DOM) environment?
	            const event = custom_event(type, detail);
	            callbacks.slice().forEach(fn => {
	                fn.call(component, event);
	            });
	        }
	    };
	}

	const dirty_components = [];
	const binding_callbacks = [];
	const render_callbacks = [];
	const flush_callbacks = [];
	const resolved_promise = Promise.resolve();
	let update_scheduled = false;
	function schedule_update() {
	    if (!update_scheduled) {
	        update_scheduled = true;
	        resolved_promise.then(flush);
	    }
	}
	function add_render_callback(fn) {
	    render_callbacks.push(fn);
	}
	function add_flush_callback(fn) {
	    flush_callbacks.push(fn);
	}
	let flushing = false;
	const seen_callbacks = new Set();
	function flush() {
	    if (flushing)
	        return;
	    flushing = true;
	    do {
	        // first, call beforeUpdate functions
	        // and update components
	        for (let i = 0; i < dirty_components.length; i += 1) {
	            const component = dirty_components[i];
	            set_current_component(component);
	            update(component.$$);
	        }
	        dirty_components.length = 0;
	        while (binding_callbacks.length)
	            binding_callbacks.pop()();
	        // then, once components are updated, call
	        // afterUpdate functions. This may cause
	        // subsequent updates...
	        for (let i = 0; i < render_callbacks.length; i += 1) {
	            const callback = render_callbacks[i];
	            if (!seen_callbacks.has(callback)) {
	                // ...so guard against infinite loops
	                seen_callbacks.add(callback);
	                callback();
	            }
	        }
	        render_callbacks.length = 0;
	    } while (dirty_components.length);
	    while (flush_callbacks.length) {
	        flush_callbacks.pop()();
	    }
	    update_scheduled = false;
	    flushing = false;
	    seen_callbacks.clear();
	}
	function update($$) {
	    if ($$.fragment !== null) {
	        $$.update();
	        run_all($$.before_update);
	        const dirty = $$.dirty;
	        $$.dirty = [-1];
	        $$.fragment && $$.fragment.p($$.ctx, dirty);
	        $$.after_update.forEach(add_render_callback);
	    }
	}
	const outroing = new Set();
	let outros;
	function group_outros() {
	    outros = {
	        r: 0,
	        c: [],
	        p: outros // parent group
	    };
	}
	function check_outros() {
	    if (!outros.r) {
	        run_all(outros.c);
	    }
	    outros = outros.p;
	}
	function transition_in(block, local) {
	    if (block && block.i) {
	        outroing.delete(block);
	        block.i(local);
	    }
	}
	function transition_out(block, local, detach, callback) {
	    if (block && block.o) {
	        if (outroing.has(block))
	            return;
	        outroing.add(block);
	        outros.c.push(() => {
	            outroing.delete(block);
	            if (callback) {
	                if (detach)
	                    block.d(1);
	                callback();
	            }
	        });
	        block.o(local);
	    }
	}

	function destroy_block(block, lookup) {
	    block.d(1);
	    lookup.delete(block.key);
	}
	function update_keyed_each(old_blocks, dirty, get_key, dynamic, ctx, list, lookup, node, destroy, create_each_block, next, get_context) {
	    let o = old_blocks.length;
	    let n = list.length;
	    let i = o;
	    const old_indexes = {};
	    while (i--)
	        old_indexes[old_blocks[i].key] = i;
	    const new_blocks = [];
	    const new_lookup = new Map();
	    const deltas = new Map();
	    i = n;
	    while (i--) {
	        const child_ctx = get_context(ctx, list, i);
	        const key = get_key(child_ctx);
	        let block = lookup.get(key);
	        if (!block) {
	            block = create_each_block(key, child_ctx);
	            block.c();
	        }
	        else if (dynamic) {
	            block.p(child_ctx, dirty);
	        }
	        new_lookup.set(key, new_blocks[i] = block);
	        if (key in old_indexes)
	            deltas.set(key, Math.abs(i - old_indexes[key]));
	    }
	    const will_move = new Set();
	    const did_move = new Set();
	    function insert(block) {
	        transition_in(block, 1);
	        block.m(node, next);
	        lookup.set(block.key, block);
	        next = block.first;
	        n--;
	    }
	    while (o && n) {
	        const new_block = new_blocks[n - 1];
	        const old_block = old_blocks[o - 1];
	        const new_key = new_block.key;
	        const old_key = old_block.key;
	        if (new_block === old_block) {
	            // do nothing
	            next = new_block.first;
	            o--;
	            n--;
	        }
	        else if (!new_lookup.has(old_key)) {
	            // remove old block
	            destroy(old_block, lookup);
	            o--;
	        }
	        else if (!lookup.has(new_key) || will_move.has(new_key)) {
	            insert(new_block);
	        }
	        else if (did_move.has(old_key)) {
	            o--;
	        }
	        else if (deltas.get(new_key) > deltas.get(old_key)) {
	            did_move.add(new_key);
	            insert(new_block);
	        }
	        else {
	            will_move.add(old_key);
	            o--;
	        }
	    }
	    while (o--) {
	        const old_block = old_blocks[o];
	        if (!new_lookup.has(old_block.key))
	            destroy(old_block, lookup);
	    }
	    while (n)
	        insert(new_blocks[n - 1]);
	    return new_blocks;
	}

	function bind(component, name, callback) {
	    const index = component.$$.props[name];
	    if (index !== undefined) {
	        component.$$.bound[index] = callback;
	        callback(component.$$.ctx[index]);
	    }
	}
	function create_component(block) {
	    block && block.c();
	}
	function mount_component(component, target, anchor) {
	    const { fragment, on_mount, on_destroy, after_update } = component.$$;
	    fragment && fragment.m(target, anchor);
	    // onMount happens before the initial afterUpdate
	    add_render_callback(() => {
	        const new_on_destroy = on_mount.map(run).filter(is_function);
	        if (on_destroy) {
	            on_destroy.push(...new_on_destroy);
	        }
	        else {
	            // Edge case - component was destroyed immediately,
	            // most likely as a result of a binding initialising
	            run_all(new_on_destroy);
	        }
	        component.$$.on_mount = [];
	    });
	    after_update.forEach(add_render_callback);
	}
	function destroy_component(component, detaching) {
	    const $$ = component.$$;
	    if ($$.fragment !== null) {
	        run_all($$.on_destroy);
	        $$.fragment && $$.fragment.d(detaching);
	        // TODO null out other refs, including component.$$ (but need to
	        // preserve final state?)
	        $$.on_destroy = $$.fragment = null;
	        $$.ctx = [];
	    }
	}
	function make_dirty(component, i) {
	    if (component.$$.dirty[0] === -1) {
	        dirty_components.push(component);
	        schedule_update();
	        component.$$.dirty.fill(0);
	    }
	    component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
	}
	function init(component, options, instance, create_fragment, not_equal, props, dirty = [-1]) {
	    const parent_component = current_component;
	    set_current_component(component);
	    const prop_values = options.props || {};
	    const $$ = component.$$ = {
	        fragment: null,
	        ctx: null,
	        // state
	        props,
	        update: noop,
	        not_equal,
	        bound: blank_object(),
	        // lifecycle
	        on_mount: [],
	        on_destroy: [],
	        before_update: [],
	        after_update: [],
	        context: new Map(parent_component ? parent_component.$$.context : []),
	        // everything else
	        callbacks: blank_object(),
	        dirty
	    };
	    let ready = false;
	    $$.ctx = instance
	        ? instance(component, prop_values, (i, ret, ...rest) => {
	            const value = rest.length ? rest[0] : ret;
	            if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
	                if ($$.bound[i])
	                    $$.bound[i](value);
	                if (ready)
	                    make_dirty(component, i);
	            }
	            return ret;
	        })
	        : [];
	    $$.update();
	    ready = true;
	    run_all($$.before_update);
	    // `false` as a special case of no DOM component
	    $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
	    if (options.target) {
	        if (options.hydrate) {
	            const nodes = children(options.target);
	            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	            $$.fragment && $$.fragment.l(nodes);
	            nodes.forEach(detach);
	        }
	        else {
	            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	            $$.fragment && $$.fragment.c();
	        }
	        if (options.intro)
	            transition_in(component.$$.fragment);
	        mount_component(component, options.target, options.anchor);
	        flush();
	    }
	    set_current_component(parent_component);
	}
	class SvelteComponent {
	    $destroy() {
	        destroy_component(this, 1);
	        this.$destroy = noop;
	    }
	    $on(type, callback) {
	        const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
	        callbacks.push(callback);
	        return () => {
	            const index = callbacks.indexOf(callback);
	            if (index !== -1)
	                callbacks.splice(index, 1);
	        };
	    }
	    $set() {
	        // overridden by instance, if it has props
	    }
	}

	/* node_modules/not-bulma/src/ui.breadcrumbs.svelte generated by Svelte v3.23.2 */

	function get_each_context(ctx, list, i) {
		const child_ctx = ctx.slice();
		child_ctx[4] = list[i];
		child_ctx[6] = i;
		return child_ctx;
	}

	// (23:4) {:else }
	function create_else_block(ctx) {
		let li;
		let a;
		let t_value = /*link*/ ctx[4].title + "";
		let t;
		let a_href_value;
		let a_data_href_value;
		let mounted;
		let dispose;

		return {
			c() {
				li = element("li");
				a = element("a");
				t = text(t_value);
				attr(a, "href", a_href_value = "" + (/*root*/ ctx[0] + /*link*/ ctx[4].url));
				attr(a, "data-href", a_data_href_value = /*link*/ ctx[4].url);
			},
			m(target, anchor) {
				insert(target, li, anchor);
				append(li, a);
				append(a, t);

				if (!mounted) {
					dispose = listen(a, "click", /*onClick*/ ctx[2]);
					mounted = true;
				}
			},
			p(ctx, dirty) {
				if (dirty & /*items*/ 2 && t_value !== (t_value = /*link*/ ctx[4].title + "")) set_data(t, t_value);

				if (dirty & /*root, items*/ 3 && a_href_value !== (a_href_value = "" + (/*root*/ ctx[0] + /*link*/ ctx[4].url))) {
					attr(a, "href", a_href_value);
				}

				if (dirty & /*items*/ 2 && a_data_href_value !== (a_data_href_value = /*link*/ ctx[4].url)) {
					attr(a, "data-href", a_data_href_value);
				}
			},
			d(detaching) {
				if (detaching) detach(li);
				mounted = false;
				dispose();
			}
		};
	}

	// (21:4) {#if (items.length === (index + 1)) }
	function create_if_block(ctx) {
		let li;
		let a;
		let t_value = /*link*/ ctx[4].title + "";
		let t;
		let a_href_value;
		let a_data_href_value;

		return {
			c() {
				li = element("li");
				a = element("a");
				t = text(t_value);
				attr(a, "href", a_href_value = "" + (/*root*/ ctx[0] + /*link*/ ctx[4].url));
				attr(a, "data-href", a_data_href_value = /*link*/ ctx[4].url);
				attr(a, "aria-current", "page");
				attr(li, "class", "is-active");
			},
			m(target, anchor) {
				insert(target, li, anchor);
				append(li, a);
				append(a, t);
			},
			p(ctx, dirty) {
				if (dirty & /*items*/ 2 && t_value !== (t_value = /*link*/ ctx[4].title + "")) set_data(t, t_value);

				if (dirty & /*root, items*/ 3 && a_href_value !== (a_href_value = "" + (/*root*/ ctx[0] + /*link*/ ctx[4].url))) {
					attr(a, "href", a_href_value);
				}

				if (dirty & /*items*/ 2 && a_data_href_value !== (a_data_href_value = /*link*/ ctx[4].url)) {
					attr(a, "data-href", a_data_href_value);
				}
			},
			d(detaching) {
				if (detaching) detach(li);
			}
		};
	}

	// (20:4) {#each items as link, index}
	function create_each_block(ctx) {
		let if_block_anchor;

		function select_block_type(ctx, dirty) {
			if (/*items*/ ctx[1].length === /*index*/ ctx[6] + 1) return create_if_block;
			return create_else_block;
		}

		let current_block_type = select_block_type(ctx);
		let if_block = current_block_type(ctx);

		return {
			c() {
				if_block.c();
				if_block_anchor = empty();
			},
			m(target, anchor) {
				if_block.m(target, anchor);
				insert(target, if_block_anchor, anchor);
			},
			p(ctx, dirty) {
				if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block.d(1);
					if_block = current_block_type(ctx);

					if (if_block) {
						if_block.c();
						if_block.m(if_block_anchor.parentNode, if_block_anchor);
					}
				}
			},
			d(detaching) {
				if_block.d(detaching);
				if (detaching) detach(if_block_anchor);
			}
		};
	}

	function create_fragment(ctx) {
		let nav;
		let ul;
		let each_value = /*items*/ ctx[1];
		let each_blocks = [];

		for (let i = 0; i < each_value.length; i += 1) {
			each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
		}

		return {
			c() {
				nav = element("nav");
				ul = element("ul");

				for (let i = 0; i < each_blocks.length; i += 1) {
					each_blocks[i].c();
				}

				attr(nav, "class", "breadcrumb");
				attr(nav, "aria-label", "breadcrumbs");
			},
			m(target, anchor) {
				insert(target, nav, anchor);
				append(nav, ul);

				for (let i = 0; i < each_blocks.length; i += 1) {
					each_blocks[i].m(ul, null);
				}
			},
			p(ctx, [dirty]) {
				if (dirty & /*root, items, onClick*/ 7) {
					each_value = /*items*/ ctx[1];
					let i;

					for (i = 0; i < each_value.length; i += 1) {
						const child_ctx = get_each_context(ctx, each_value, i);

						if (each_blocks[i]) {
							each_blocks[i].p(child_ctx, dirty);
						} else {
							each_blocks[i] = create_each_block(child_ctx);
							each_blocks[i].c();
							each_blocks[i].m(ul, null);
						}
					}

					for (; i < each_blocks.length; i += 1) {
						each_blocks[i].d(1);
					}

					each_blocks.length = each_value.length;
				}
			},
			i: noop,
			o: noop,
			d(detaching) {
				if (detaching) detach(nav);
				destroy_each(each_blocks, detaching);
			}
		};
	}

	function instance($$self, $$props, $$invalidate) {
		let { root = "" } = $$props;
		let { items = [] } = $$props;
		let { go = null } = $$props;

		function onClick(ev) {
			if (typeof go === "function") {
				ev.preventDefault();
				go(ev.currentTarget.dataset.href);
				return false;
			} else {
				return true;
			}
		}

		$$self.$set = $$props => {
			if ("root" in $$props) $$invalidate(0, root = $$props.root);
			if ("items" in $$props) $$invalidate(1, items = $$props.items);
			if ("go" in $$props) $$invalidate(3, go = $$props.go);
		};

		return [root, items, onClick, go];
	}

	class Ui_breadcrumbs extends SvelteComponent {
		constructor(options) {
			super();
			init(this, options, instance, create_fragment, safe_not_equal, { root: 0, items: 1, go: 3 });
		}
	}

	/* node_modules/not-bulma/src/ui.error.svelte generated by Svelte v3.23.2 */

	function create_fragment$1(ctx) {
		let article;
		let div0;
		let p;
		let t0;
		let t1;
		let div1;
		let t2;

		return {
			c() {
				article = element("article");
				div0 = element("div");
				p = element("p");
				t0 = text(/*title*/ ctx[1]);
				t1 = space();
				div1 = element("div");
				t2 = text(/*message*/ ctx[0]);
				attr(div0, "class", "message-header");
				attr(div1, "class", "message-body");
				attr(article, "class", "message is-danger");
			},
			m(target, anchor) {
				insert(target, article, anchor);
				append(article, div0);
				append(div0, p);
				append(p, t0);
				append(article, t1);
				append(article, div1);
				append(div1, t2);
			},
			p(ctx, [dirty]) {
				if (dirty & /*title*/ 2) set_data(t0, /*title*/ ctx[1]);
				if (dirty & /*message*/ 1) set_data(t2, /*message*/ ctx[0]);
			},
			i: noop,
			o: noop,
			d(detaching) {
				if (detaching) detach(article);
			}
		};
	}

	function instance$1($$self, $$props, $$invalidate) {
		let { message } = $$props;
		let { title } = $$props;

		$$self.$set = $$props => {
			if ("message" in $$props) $$invalidate(0, message = $$props.message);
			if ("title" in $$props) $$invalidate(1, title = $$props.title);
		};

		return [message, title];
	}

	class Ui_error extends SvelteComponent {
		constructor(options) {
			super();
			init(this, options, instance$1, create_fragment$1, safe_not_equal, { message: 0, title: 1 });
		}
	}

	/* node_modules/not-bulma/src/ui.tag.svelte generated by Svelte v3.23.2 */

	function get_each_context$1(ctx, list, i) {
		const child_ctx = ctx.slice();
		child_ctx[8] = list[i];
		return child_ctx;
	}

	function get_each_context_1(ctx, list, i) {
		const child_ctx = ctx.slice();
		child_ctx[11] = list[i];
		return child_ctx;
	}

	// (53:4) {#each items as item (item.id)}
	function create_each_block_1(key_1, ctx) {
		let span;
		let t_value = /*item*/ ctx[11].title + "";
		let t;
		let button;
		let button_data_id_value;
		let span_class_value;
		let mounted;
		let dispose;

		return {
			key: key_1,
			first: null,
			c() {
				span = element("span");
				t = text(t_value);
				button = element("button");
				attr(button, "data-id", button_data_id_value = /*item*/ ctx[11].id);
				attr(button, "class", "delete is-small");
				attr(span, "class", span_class_value = "mx-1 tag is-" + /*item*/ ctx[11].type);
				this.first = span;
			},
			m(target, anchor) {
				insert(target, span, anchor);
				append(span, t);
				append(span, button);

				if (!mounted) {
					dispose = listen(button, "click", /*remove*/ ctx[3]);
					mounted = true;
				}
			},
			p(ctx, dirty) {
				if (dirty & /*items*/ 1 && t_value !== (t_value = /*item*/ ctx[11].title + "")) set_data(t, t_value);

				if (dirty & /*items*/ 1 && button_data_id_value !== (button_data_id_value = /*item*/ ctx[11].id)) {
					attr(button, "data-id", button_data_id_value);
				}

				if (dirty & /*items*/ 1 && span_class_value !== (span_class_value = "mx-1 tag is-" + /*item*/ ctx[11].type)) {
					attr(span, "class", span_class_value);
				}
			},
			d(detaching) {
				if (detaching) detach(span);
				mounted = false;
				dispose();
			}
		};
	}

	// (62:10) {#each variants as variant}
	function create_each_block$1(ctx) {
		let option;
		let t_value = /*variant*/ ctx[8].title + "";
		let t;
		let option_value_value;

		return {
			c() {
				option = element("option");
				t = text(t_value);
				option.__value = option_value_value = /*variant*/ ctx[8].id;
				option.value = option.__value;
			},
			m(target, anchor) {
				insert(target, option, anchor);
				append(option, t);
			},
			p(ctx, dirty) {
				if (dirty & /*variants*/ 2 && t_value !== (t_value = /*variant*/ ctx[8].title + "")) set_data(t, t_value);

				if (dirty & /*variants*/ 2 && option_value_value !== (option_value_value = /*variant*/ ctx[8].id)) {
					option.__value = option_value_value;
				}

				option.value = option.__value;
			},
			d(detaching) {
				if (detaching) detach(option);
			}
		};
	}

	function create_fragment$2(ctx) {
		let div4;
		let div0;
		let each_blocks_1 = [];
		let each0_lookup = new Map();
		let div0_class_value;
		let t0;
		let div3;
		let div2;
		let div1;
		let select;
		let option;
		let t2;
		let button;
		let mounted;
		let dispose;
		let each_value_1 = /*items*/ ctx[0];
		const get_key = ctx => /*item*/ ctx[11].id;

		for (let i = 0; i < each_value_1.length; i += 1) {
			let child_ctx = get_each_context_1(ctx, each_value_1, i);
			let key = get_key(child_ctx);
			each0_lookup.set(key, each_blocks_1[i] = create_each_block_1(key, child_ctx));
		}

		let each_value = /*variants*/ ctx[1];
		let each_blocks = [];

		for (let i = 0; i < each_value.length; i += 1) {
			each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
		}

		return {
			c() {
				div4 = element("div");
				div0 = element("div");

				for (let i = 0; i < each_blocks_1.length; i += 1) {
					each_blocks_1[i].c();
				}

				t0 = space();
				div3 = element("div");
				div2 = element("div");
				div1 = element("div");
				select = element("select");
				option = element("option");
				option.textContent = "Выберите из списка...";

				for (let i = 0; i < each_blocks.length; i += 1) {
					each_blocks[i].c();
				}

				t2 = space();
				button = element("button");
				button.textContent = "Добавить";
				attr(div0, "class", div0_class_value = "column " + /*classes*/ ctx[2]);
				option.__value = "-1";
				option.value = option.__value;
				option.selected = true;
				attr(div1, "class", "select is-small");
				attr(button, "class", "button is-primary is-small");
				attr(div2, "class", "control");
				attr(div3, "class", "column");
				attr(div4, "class", "columns");
			},
			m(target, anchor) {
				insert(target, div4, anchor);
				append(div4, div0);

				for (let i = 0; i < each_blocks_1.length; i += 1) {
					each_blocks_1[i].m(div0, null);
				}

				append(div4, t0);
				append(div4, div3);
				append(div3, div2);
				append(div2, div1);
				append(div1, select);
				append(select, option);

				for (let i = 0; i < each_blocks.length; i += 1) {
					each_blocks[i].m(select, null);
				}

				append(div2, t2);
				append(div2, button);

				if (!mounted) {
					dispose = listen(button, "click", /*add*/ ctx[4]);
					mounted = true;
				}
			},
			p(ctx, [dirty]) {
				if (dirty & /*items, remove*/ 9) {
					const each_value_1 = /*items*/ ctx[0];
					each_blocks_1 = update_keyed_each(each_blocks_1, dirty, get_key, 1, ctx, each_value_1, each0_lookup, div0, destroy_block, create_each_block_1, null, get_each_context_1);
				}

				if (dirty & /*classes*/ 4 && div0_class_value !== (div0_class_value = "column " + /*classes*/ ctx[2])) {
					attr(div0, "class", div0_class_value);
				}

				if (dirty & /*variants*/ 2) {
					each_value = /*variants*/ ctx[1];
					let i;

					for (i = 0; i < each_value.length; i += 1) {
						const child_ctx = get_each_context$1(ctx, each_value, i);

						if (each_blocks[i]) {
							each_blocks[i].p(child_ctx, dirty);
						} else {
							each_blocks[i] = create_each_block$1(child_ctx);
							each_blocks[i].c();
							each_blocks[i].m(select, null);
						}
					}

					for (; i < each_blocks.length; i += 1) {
						each_blocks[i].d(1);
					}

					each_blocks.length = each_value.length;
				}
			},
			i: noop,
			o: noop,
			d(detaching) {
				if (detaching) detach(div4);

				for (let i = 0; i < each_blocks_1.length; i += 1) {
					each_blocks_1[i].d();
				}

				destroy_each(each_blocks, detaching);
				mounted = false;
				dispose();
			}
		};
	}

	function instance$2($$self, $$props, $$invalidate) {
		let dispatch = createEventDispatcher();
		let { items = [] } = $$props;
		let { variants = [] } = $$props;
		let { error = false } = $$props;

		let { beforeAdd = (item, list) => {
			return true;
		} } = $$props;

		function remove(e) {
			e && e.preventDefault();
			let id = parseInt(e.currentTarget.dataset.id);
			let item = items.find(el => el.id === id);

			if (item) {
				items.splice(items.indexOf(item), 1);
				$$invalidate(0, items);
				dispatch("change", items);
			}

			return false;
		}

		function add(e) {
			e && e.preventDefault();
			let id = parseInt(e.currentTarget.parentNode.querySelector("select").value);
			let item = variants.find(el => el.id === id);

			if (!beforeAdd(item, items)) {
				return false;
			}

			if (item && items.indexOf(item) === -1) {
				items.push(item);
				$$invalidate(0, items);
				dispatch("change", items);
			}

			return false;
		}

		$$self.$set = $$props => {
			if ("items" in $$props) $$invalidate(0, items = $$props.items);
			if ("variants" in $$props) $$invalidate(1, variants = $$props.variants);
			if ("error" in $$props) $$invalidate(5, error = $$props.error);
			if ("beforeAdd" in $$props) $$invalidate(6, beforeAdd = $$props.beforeAdd);
		};

		let classes;

		$$self.$$.update = () => {
			if ($$self.$$.dirty & /*error*/ 32) {
				 $$invalidate(2, classes = error ? "is-danger" : "");
			}
		};

		return [items, variants, classes, remove, add, error, beforeAdd];
	}

	class Ui_tag extends SvelteComponent {
		constructor(options) {
			super();

			init(this, options, instance$2, create_fragment$2, safe_not_equal, {
				items: 0,
				variants: 1,
				error: 5,
				beforeAdd: 6
			});
		}
	}

	var EventEmitter = createCommonjsModule(function (module) {
	(function (exports) {

	    /**
	     * Class for managing events.
	     * Can be extended to provide event functionality in other classes.
	     *
	     * @class EventEmitter Manages event registering and emitting.
	     */
	    function EventEmitter() {}

	    // Shortcuts to improve speed and size
	    var proto = EventEmitter.prototype;
	    var originalGlobalValue = exports.EventEmitter;

	    /**
	     * Finds the index of the listener for the event in its storage array.
	     *
	     * @param {Function[]} listeners Array of listeners to search through.
	     * @param {Function} listener Method to look for.
	     * @return {Number} Index of the specified listener, -1 if not found
	     * @api private
	     */
	    function indexOfListener(listeners, listener) {
	        var i = listeners.length;
	        while (i--) {
	            if (listeners[i].listener === listener) {
	                return i;
	            }
	        }

	        return -1;
	    }

	    /**
	     * Alias a method while keeping the context correct, to allow for overwriting of target method.
	     *
	     * @param {String} name The name of the target method.
	     * @return {Function} The aliased method
	     * @api private
	     */
	    function alias(name) {
	        return function aliasClosure() {
	            return this[name].apply(this, arguments);
	        };
	    }

	    /**
	     * Returns the listener array for the specified event.
	     * Will initialise the event object and listener arrays if required.
	     * Will return an object if you use a regex search. The object contains keys for each matched event. So /ba[rz]/ might return an object containing bar and baz. But only if you have either defined them with defineEvent or added some listeners to them.
	     * Each property in the object response is an array of listener functions.
	     *
	     * @param {String|RegExp} evt Name of the event to return the listeners from.
	     * @return {Function[]|Object} All listener functions for the event.
	     */
	    proto.getListeners = function getListeners(evt) {
	        var events = this._getEvents();
	        var response;
	        var key;

	        // Return a concatenated array of all matching events if
	        // the selector is a regular expression.
	        if (evt instanceof RegExp) {
	            response = {};
	            for (key in events) {
	                if (events.hasOwnProperty(key) && evt.test(key)) {
	                    response[key] = events[key];
	                }
	            }
	        }
	        else {
	            response = events[evt] || (events[evt] = []);
	        }

	        return response;
	    };

	    /**
	     * Takes a list of listener objects and flattens it into a list of listener functions.
	     *
	     * @param {Object[]} listeners Raw listener objects.
	     * @return {Function[]} Just the listener functions.
	     */
	    proto.flattenListeners = function flattenListeners(listeners) {
	        var flatListeners = [];
	        var i;

	        for (i = 0; i < listeners.length; i += 1) {
	            flatListeners.push(listeners[i].listener);
	        }

	        return flatListeners;
	    };

	    /**
	     * Fetches the requested listeners via getListeners but will always return the results inside an object. This is mainly for internal use but others may find it useful.
	     *
	     * @param {String|RegExp} evt Name of the event to return the listeners from.
	     * @return {Object} All listener functions for an event in an object.
	     */
	    proto.getListenersAsObject = function getListenersAsObject(evt) {
	        var listeners = this.getListeners(evt);
	        var response;

	        if (listeners instanceof Array) {
	            response = {};
	            response[evt] = listeners;
	        }

	        return response || listeners;
	    };

	    function isValidListener (listener) {
	        if (typeof listener === 'function' || listener instanceof RegExp) {
	            return true
	        } else if (listener && typeof listener === 'object') {
	            return isValidListener(listener.listener)
	        } else {
	            return false
	        }
	    }

	    /**
	     * Adds a listener function to the specified event.
	     * The listener will not be added if it is a duplicate.
	     * If the listener returns true then it will be removed after it is called.
	     * If you pass a regular expression as the event name then the listener will be added to all events that match it.
	     *
	     * @param {String|RegExp} evt Name of the event to attach the listener to.
	     * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
	     * @return {Object} Current instance of EventEmitter for chaining.
	     */
	    proto.addListener = function addListener(evt, listener) {
	        if (!isValidListener(listener)) {
	            throw new TypeError('listener must be a function');
	        }

	        var listeners = this.getListenersAsObject(evt);
	        var listenerIsWrapped = typeof listener === 'object';
	        var key;

	        for (key in listeners) {
	            if (listeners.hasOwnProperty(key) && indexOfListener(listeners[key], listener) === -1) {
	                listeners[key].push(listenerIsWrapped ? listener : {
	                    listener: listener,
	                    once: false
	                });
	            }
	        }

	        return this;
	    };

	    /**
	     * Alias of addListener
	     */
	    proto.on = alias('addListener');

	    /**
	     * Semi-alias of addListener. It will add a listener that will be
	     * automatically removed after its first execution.
	     *
	     * @param {String|RegExp} evt Name of the event to attach the listener to.
	     * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
	     * @return {Object} Current instance of EventEmitter for chaining.
	     */
	    proto.addOnceListener = function addOnceListener(evt, listener) {
	        return this.addListener(evt, {
	            listener: listener,
	            once: true
	        });
	    };

	    /**
	     * Alias of addOnceListener.
	     */
	    proto.once = alias('addOnceListener');

	    /**
	     * Defines an event name. This is required if you want to use a regex to add a listener to multiple events at once. If you don't do this then how do you expect it to know what event to add to? Should it just add to every possible match for a regex? No. That is scary and bad.
	     * You need to tell it what event names should be matched by a regex.
	     *
	     * @param {String} evt Name of the event to create.
	     * @return {Object} Current instance of EventEmitter for chaining.
	     */
	    proto.defineEvent = function defineEvent(evt) {
	        this.getListeners(evt);
	        return this;
	    };

	    /**
	     * Uses defineEvent to define multiple events.
	     *
	     * @param {String[]} evts An array of event names to define.
	     * @return {Object} Current instance of EventEmitter for chaining.
	     */
	    proto.defineEvents = function defineEvents(evts) {
	        for (var i = 0; i < evts.length; i += 1) {
	            this.defineEvent(evts[i]);
	        }
	        return this;
	    };

	    /**
	     * Removes a listener function from the specified event.
	     * When passed a regular expression as the event name, it will remove the listener from all events that match it.
	     *
	     * @param {String|RegExp} evt Name of the event to remove the listener from.
	     * @param {Function} listener Method to remove from the event.
	     * @return {Object} Current instance of EventEmitter for chaining.
	     */
	    proto.removeListener = function removeListener(evt, listener) {
	        var listeners = this.getListenersAsObject(evt);
	        var index;
	        var key;

	        for (key in listeners) {
	            if (listeners.hasOwnProperty(key)) {
	                index = indexOfListener(listeners[key], listener);

	                if (index !== -1) {
	                    listeners[key].splice(index, 1);
	                }
	            }
	        }

	        return this;
	    };

	    /**
	     * Alias of removeListener
	     */
	    proto.off = alias('removeListener');

	    /**
	     * Adds listeners in bulk using the manipulateListeners method.
	     * If you pass an object as the first argument you can add to multiple events at once. The object should contain key value pairs of events and listeners or listener arrays. You can also pass it an event name and an array of listeners to be added.
	     * You can also pass it a regular expression to add the array of listeners to all events that match it.
	     * Yeah, this function does quite a bit. That's probably a bad thing.
	     *
	     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add to multiple events at once.
	     * @param {Function[]} [listeners] An optional array of listener functions to add.
	     * @return {Object} Current instance of EventEmitter for chaining.
	     */
	    proto.addListeners = function addListeners(evt, listeners) {
	        // Pass through to manipulateListeners
	        return this.manipulateListeners(false, evt, listeners);
	    };

	    /**
	     * Removes listeners in bulk using the manipulateListeners method.
	     * If you pass an object as the first argument you can remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
	     * You can also pass it an event name and an array of listeners to be removed.
	     * You can also pass it a regular expression to remove the listeners from all events that match it.
	     *
	     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to remove from multiple events at once.
	     * @param {Function[]} [listeners] An optional array of listener functions to remove.
	     * @return {Object} Current instance of EventEmitter for chaining.
	     */
	    proto.removeListeners = function removeListeners(evt, listeners) {
	        // Pass through to manipulateListeners
	        return this.manipulateListeners(true, evt, listeners);
	    };

	    /**
	     * Edits listeners in bulk. The addListeners and removeListeners methods both use this to do their job. You should really use those instead, this is a little lower level.
	     * The first argument will determine if the listeners are removed (true) or added (false).
	     * If you pass an object as the second argument you can add/remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
	     * You can also pass it an event name and an array of listeners to be added/removed.
	     * You can also pass it a regular expression to manipulate the listeners of all events that match it.
	     *
	     * @param {Boolean} remove True if you want to remove listeners, false if you want to add.
	     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add/remove from multiple events at once.
	     * @param {Function[]} [listeners] An optional array of listener functions to add/remove.
	     * @return {Object} Current instance of EventEmitter for chaining.
	     */
	    proto.manipulateListeners = function manipulateListeners(remove, evt, listeners) {
	        var i;
	        var value;
	        var single = remove ? this.removeListener : this.addListener;
	        var multiple = remove ? this.removeListeners : this.addListeners;

	        // If evt is an object then pass each of its properties to this method
	        if (typeof evt === 'object' && !(evt instanceof RegExp)) {
	            for (i in evt) {
	                if (evt.hasOwnProperty(i) && (value = evt[i])) {
	                    // Pass the single listener straight through to the singular method
	                    if (typeof value === 'function') {
	                        single.call(this, i, value);
	                    }
	                    else {
	                        // Otherwise pass back to the multiple function
	                        multiple.call(this, i, value);
	                    }
	                }
	            }
	        }
	        else {
	            // So evt must be a string
	            // And listeners must be an array of listeners
	            // Loop over it and pass each one to the multiple method
	            i = listeners.length;
	            while (i--) {
	                single.call(this, evt, listeners[i]);
	            }
	        }

	        return this;
	    };

	    /**
	     * Removes all listeners from a specified event.
	     * If you do not specify an event then all listeners will be removed.
	     * That means every event will be emptied.
	     * You can also pass a regex to remove all events that match it.
	     *
	     * @param {String|RegExp} [evt] Optional name of the event to remove all listeners for. Will remove from every event if not passed.
	     * @return {Object} Current instance of EventEmitter for chaining.
	     */
	    proto.removeEvent = function removeEvent(evt) {
	        var type = typeof evt;
	        var events = this._getEvents();
	        var key;

	        // Remove different things depending on the state of evt
	        if (type === 'string') {
	            // Remove all listeners for the specified event
	            delete events[evt];
	        }
	        else if (evt instanceof RegExp) {
	            // Remove all events matching the regex.
	            for (key in events) {
	                if (events.hasOwnProperty(key) && evt.test(key)) {
	                    delete events[key];
	                }
	            }
	        }
	        else {
	            // Remove all listeners in all events
	            delete this._events;
	        }

	        return this;
	    };

	    /**
	     * Alias of removeEvent.
	     *
	     * Added to mirror the node API.
	     */
	    proto.removeAllListeners = alias('removeEvent');

	    /**
	     * Emits an event of your choice.
	     * When emitted, every listener attached to that event will be executed.
	     * If you pass the optional argument array then those arguments will be passed to every listener upon execution.
	     * Because it uses `apply`, your array of arguments will be passed as if you wrote them out separately.
	     * So they will not arrive within the array on the other side, they will be separate.
	     * You can also pass a regular expression to emit to all events that match it.
	     *
	     * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
	     * @param {Array} [args] Optional array of arguments to be passed to each listener.
	     * @return {Object} Current instance of EventEmitter for chaining.
	     */
	    proto.emitEvent = function emitEvent(evt, args) {
	        var listenersMap = this.getListenersAsObject(evt);
	        var listeners;
	        var listener;
	        var i;
	        var key;
	        var response;

	        for (key in listenersMap) {
	            if (listenersMap.hasOwnProperty(key)) {
	                listeners = listenersMap[key].slice(0);

	                for (i = 0; i < listeners.length; i++) {
	                    // If the listener returns true then it shall be removed from the event
	                    // The function is executed either with a basic call or an apply if there is an args array
	                    listener = listeners[i];

	                    if (listener.once === true) {
	                        this.removeListener(evt, listener.listener);
	                    }

	                    response = listener.listener.apply(this, args || []);

	                    if (response === this._getOnceReturnValue()) {
	                        this.removeListener(evt, listener.listener);
	                    }
	                }
	            }
	        }

	        return this;
	    };

	    /**
	     * Alias of emitEvent
	     */
	    proto.trigger = alias('emitEvent');

	    /**
	     * Subtly different from emitEvent in that it will pass its arguments on to the listeners, as opposed to taking a single array of arguments to pass on.
	     * As with emitEvent, you can pass a regex in place of the event name to emit to all events that match it.
	     *
	     * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
	     * @param {...*} Optional additional arguments to be passed to each listener.
	     * @return {Object} Current instance of EventEmitter for chaining.
	     */
	    proto.emit = function emit(evt) {
	        var args = Array.prototype.slice.call(arguments, 1);
	        return this.emitEvent(evt, args);
	    };

	    /**
	     * Sets the current value to check against when executing listeners. If a
	     * listeners return value matches the one set here then it will be removed
	     * after execution. This value defaults to true.
	     *
	     * @param {*} value The new value to check for when executing listeners.
	     * @return {Object} Current instance of EventEmitter for chaining.
	     */
	    proto.setOnceReturnValue = function setOnceReturnValue(value) {
	        this._onceReturnValue = value;
	        return this;
	    };

	    /**
	     * Fetches the current value to check against when executing listeners. If
	     * the listeners return value matches this one then it should be removed
	     * automatically. It will return true by default.
	     *
	     * @return {*|Boolean} The current value to check for or the default, true.
	     * @api private
	     */
	    proto._getOnceReturnValue = function _getOnceReturnValue() {
	        if (this.hasOwnProperty('_onceReturnValue')) {
	            return this._onceReturnValue;
	        }
	        else {
	            return true;
	        }
	    };

	    /**
	     * Fetches the events object and creates one if required.
	     *
	     * @return {Object} The events storage object.
	     * @api private
	     */
	    proto._getEvents = function _getEvents() {
	        return this._events || (this._events = {});
	    };

	    /**
	     * Reverts the global {@link EventEmitter} to its previous value and returns a reference to this version.
	     *
	     * @return {Function} Non conflicting EventEmitter class.
	     */
	    EventEmitter.noConflict = function noConflict() {
	        exports.EventEmitter = originalGlobalValue;
	        return EventEmitter;
	    };

	    // Expose the class either via AMD, CommonJS or the global object
	    if ( module.exports){
	        module.exports = EventEmitter;
	    }
	    else {
	        exports.EventEmitter = EventEmitter;
	    }
	}(typeof window !== 'undefined' ? window : commonjsGlobal || {}));
	});

	class Breadcrumbs{
		static ui = null;
		static head = [];
		static tail = [];

		static render({target, root = '', navigate}){
			if (!this.ui) {
				this.ui = new Ui_breadcrumbs({
					target,
					props:{
						items:  this.getBreadcrumbs(),
						root:   root,
						go:		  navigate
					}
				});
			}
		}

		static changeHead(head){
			this.head.splice(0,this.head.length,...head);
			return this;
		}

		static changeTail(tail){
			this.tail.splice(0, this.tail.length,...tail);
			return this;
		}

		static getBreadcrumbs(){
			let crumbs = [];
			crumbs.push(...this.head);
			crumbs.push(...this.tail);
			return crumbs;
		}

		static update(){
			if(this.ui){
				this.ui.$set({ items: this.getBreadcrumbs() });
			}
		}

		static remove(){
			if (this.ui) {
				this.ui.$destroy();
				this.ui = null;
			}
		}

	}

	/* src/controllers/common/ui.edit.svelte generated by Svelte v3.23.2 */

	function get_each_context$2(ctx, list, i) {
		const child_ctx = ctx.slice();
		child_ctx[73] = list[i];
		return child_ctx;
	}

	// (293:0) {:else}
	function create_else_block$1(ctx) {
		let t0;
		let t1;
		let div1;
		let t2;
		let t3;
		let t4;
		let t5;
		let t6;
		let t7;
		let t8;
		let t9;
		let t10;
		let div0;
		let t11;
		let current;
		let if_block0 = /*title*/ ctx[3].__enabled && create_if_block_31(ctx);
		let if_block1 = /*description*/ ctx[4].__enabled && create_if_block_30(ctx);
		let if_block2 = /*fields*/ ctx[13].username.enabled && create_if_block_26(ctx);
		let if_block3 = /*fields*/ ctx[13].email.enabled && create_if_block_22(ctx);
		let if_block4 = /*fields*/ ctx[13].password.enabled && create_if_block_18(ctx);
		let if_block5 = /*fields*/ ctx[13].password2.enabled && create_if_block_14(ctx);
		let if_block6 = /*fields*/ ctx[13].tel.enabled && create_if_block_10(ctx);
		let if_block7 = /*errorMessage*/ ctx[10] != false && create_if_block_9(ctx);
		let if_block8 = /*fields*/ ctx[13].active.enabled && create_if_block_7(ctx);
		let if_block9 = /*fields*/ ctx[13].role.enabled && create_if_block_5(ctx);
		let if_block10 = /*fields*/ ctx[13].country.enabled && create_if_block_3(ctx);
		let if_block11 = /*cancel*/ ctx[6].enabled && create_if_block_2(ctx);
		let if_block12 = /*submit*/ ctx[5].enabled && create_if_block_1(ctx);

		return {
			c() {
				if (if_block0) if_block0.c();
				t0 = space();
				if (if_block1) if_block1.c();
				t1 = space();
				div1 = element("div");
				if (if_block2) if_block2.c();
				t2 = space();
				if (if_block3) if_block3.c();
				t3 = space();
				if (if_block4) if_block4.c();
				t4 = space();
				if (if_block5) if_block5.c();
				t5 = space();
				if (if_block6) if_block6.c();
				t6 = space();
				if (if_block7) if_block7.c();
				t7 = space();
				if (if_block8) if_block8.c();
				t8 = space();
				if (if_block9) if_block9.c();
				t9 = space();
				if (if_block10) if_block10.c();
				t10 = space();
				div0 = element("div");
				if (if_block11) if_block11.c();
				t11 = space();
				if (if_block12) if_block12.c();
				attr(div0, "class", "buttons-row");
				attr(div1, "class", "container");
			},
			m(target, anchor) {
				if (if_block0) if_block0.m(target, anchor);
				insert(target, t0, anchor);
				if (if_block1) if_block1.m(target, anchor);
				insert(target, t1, anchor);
				insert(target, div1, anchor);
				if (if_block2) if_block2.m(div1, null);
				append(div1, t2);
				if (if_block3) if_block3.m(div1, null);
				append(div1, t3);
				if (if_block4) if_block4.m(div1, null);
				append(div1, t4);
				if (if_block5) if_block5.m(div1, null);
				append(div1, t5);
				if (if_block6) if_block6.m(div1, null);
				append(div1, t6);
				if (if_block7) if_block7.m(div1, null);
				append(div1, t7);
				if (if_block8) if_block8.m(div1, null);
				append(div1, t8);
				if (if_block9) if_block9.m(div1, null);
				append(div1, t9);
				if (if_block10) if_block10.m(div1, null);
				append(div1, t10);
				append(div1, div0);
				if (if_block11) if_block11.m(div0, null);
				append(div0, t11);
				if (if_block12) if_block12.m(div0, null);
				current = true;
			},
			p(ctx, dirty) {
				if (/*title*/ ctx[3].__enabled) {
					if (if_block0) {
						if_block0.p(ctx, dirty);
					} else {
						if_block0 = create_if_block_31(ctx);
						if_block0.c();
						if_block0.m(t0.parentNode, t0);
					}
				} else if (if_block0) {
					if_block0.d(1);
					if_block0 = null;
				}

				if (/*description*/ ctx[4].__enabled) {
					if (if_block1) {
						if_block1.p(ctx, dirty);
					} else {
						if_block1 = create_if_block_30(ctx);
						if_block1.c();
						if_block1.m(t1.parentNode, t1);
					}
				} else if (if_block1) {
					if_block1.d(1);
					if_block1 = null;
				}

				if (/*fields*/ ctx[13].username.enabled) {
					if (if_block2) {
						if_block2.p(ctx, dirty);
					} else {
						if_block2 = create_if_block_26(ctx);
						if_block2.c();
						if_block2.m(div1, t2);
					}
				} else if (if_block2) {
					if_block2.d(1);
					if_block2 = null;
				}

				if (/*fields*/ ctx[13].email.enabled) {
					if (if_block3) {
						if_block3.p(ctx, dirty);
					} else {
						if_block3 = create_if_block_22(ctx);
						if_block3.c();
						if_block3.m(div1, t3);
					}
				} else if (if_block3) {
					if_block3.d(1);
					if_block3 = null;
				}

				if (/*fields*/ ctx[13].password.enabled) {
					if (if_block4) {
						if_block4.p(ctx, dirty);
					} else {
						if_block4 = create_if_block_18(ctx);
						if_block4.c();
						if_block4.m(div1, t4);
					}
				} else if (if_block4) {
					if_block4.d(1);
					if_block4 = null;
				}

				if (/*fields*/ ctx[13].password2.enabled) {
					if (if_block5) {
						if_block5.p(ctx, dirty);
					} else {
						if_block5 = create_if_block_14(ctx);
						if_block5.c();
						if_block5.m(div1, t5);
					}
				} else if (if_block5) {
					if_block5.d(1);
					if_block5 = null;
				}

				if (/*fields*/ ctx[13].tel.enabled) {
					if (if_block6) {
						if_block6.p(ctx, dirty);
					} else {
						if_block6 = create_if_block_10(ctx);
						if_block6.c();
						if_block6.m(div1, t6);
					}
				} else if (if_block6) {
					if_block6.d(1);
					if_block6 = null;
				}

				if (/*errorMessage*/ ctx[10] != false) {
					if (if_block7) {
						if_block7.p(ctx, dirty);
					} else {
						if_block7 = create_if_block_9(ctx);
						if_block7.c();
						if_block7.m(div1, t7);
					}
				} else if (if_block7) {
					if_block7.d(1);
					if_block7 = null;
				}

				if (/*fields*/ ctx[13].active.enabled) {
					if (if_block8) {
						if_block8.p(ctx, dirty);
					} else {
						if_block8 = create_if_block_7(ctx);
						if_block8.c();
						if_block8.m(div1, t8);
					}
				} else if (if_block8) {
					if_block8.d(1);
					if_block8 = null;
				}

				if (/*fields*/ ctx[13].role.enabled) {
					if (if_block9) {
						if_block9.p(ctx, dirty);

						if (dirty[0] & /*fields*/ 8192) {
							transition_in(if_block9, 1);
						}
					} else {
						if_block9 = create_if_block_5(ctx);
						if_block9.c();
						transition_in(if_block9, 1);
						if_block9.m(div1, t9);
					}
				} else if (if_block9) {
					group_outros();

					transition_out(if_block9, 1, 1, () => {
						if_block9 = null;
					});

					check_outros();
				}

				if (/*fields*/ ctx[13].country.enabled) {
					if (if_block10) {
						if_block10.p(ctx, dirty);
					} else {
						if_block10 = create_if_block_3(ctx);
						if_block10.c();
						if_block10.m(div1, t10);
					}
				} else if (if_block10) {
					if_block10.d(1);
					if_block10 = null;
				}

				if (/*cancel*/ ctx[6].enabled) {
					if (if_block11) {
						if_block11.p(ctx, dirty);
					} else {
						if_block11 = create_if_block_2(ctx);
						if_block11.c();
						if_block11.m(div0, t11);
					}
				} else if (if_block11) {
					if_block11.d(1);
					if_block11 = null;
				}

				if (/*submit*/ ctx[5].enabled) {
					if (if_block12) {
						if_block12.p(ctx, dirty);
					} else {
						if_block12 = create_if_block_1(ctx);
						if_block12.c();
						if_block12.m(div0, null);
					}
				} else if (if_block12) {
					if_block12.d(1);
					if_block12 = null;
				}
			},
			i(local) {
				if (current) return;
				transition_in(if_block9);
				current = true;
			},
			o(local) {
				transition_out(if_block9);
				current = false;
			},
			d(detaching) {
				if (if_block0) if_block0.d(detaching);
				if (detaching) detach(t0);
				if (if_block1) if_block1.d(detaching);
				if (detaching) detach(t1);
				if (detaching) detach(div1);
				if (if_block2) if_block2.d();
				if (if_block3) if_block3.d();
				if (if_block4) if_block4.d();
				if (if_block5) if_block5.d();
				if (if_block6) if_block6.d();
				if (if_block7) if_block7.d();
				if (if_block8) if_block8.d();
				if (if_block9) if_block9.d();
				if (if_block10) if_block10.d();
				if (if_block11) if_block11.d();
				if (if_block12) if_block12.d();
			}
		};
	}

	// (289:0) {#if success}
	function create_if_block$1(ctx) {
		let div;
		let h3;
		let t_value = /*SUCCESS_TEXT*/ ctx[1][/*mode*/ ctx[2]] + "";
		let t;

		return {
			c() {
				div = element("div");
				h3 = element("h3");
				t = text(t_value);
				attr(h3, "class", "user-form-success-message");
				attr(div, "class", "notification is-success");
			},
			m(target, anchor) {
				insert(target, div, anchor);
				append(div, h3);
				append(h3, t);
			},
			p(ctx, dirty) {
				if (dirty[0] & /*mode*/ 4 && t_value !== (t_value = /*SUCCESS_TEXT*/ ctx[1][/*mode*/ ctx[2]] + "")) set_data(t, t_value);
			},
			i: noop,
			o: noop,
			d(detaching) {
				if (detaching) detach(div);
			}
		};
	}

	// (294:0) {#if title.__enabled}
	function create_if_block_31(ctx) {
		let h5;
		let t0_value = /*title*/ ctx[3][/*mode*/ ctx[2]] + "";
		let t0;
		let t1;
		let if_block = /*mode*/ ctx[2] === "update" && create_if_block_32(ctx);

		return {
			c() {
				h5 = element("h5");
				t0 = text(t0_value);
				t1 = space();
				if (if_block) if_block.c();
				attr(h5, "class", "title");
			},
			m(target, anchor) {
				insert(target, h5, anchor);
				append(h5, t0);
				append(h5, t1);
				if (if_block) if_block.m(h5, null);
			},
			p(ctx, dirty) {
				if (dirty[0] & /*title, mode*/ 12 && t0_value !== (t0_value = /*title*/ ctx[3][/*mode*/ ctx[2]] + "")) set_data(t0, t0_value);

				if (/*mode*/ ctx[2] === "update") {
					if (if_block) {
						if_block.p(ctx, dirty);
					} else {
						if_block = create_if_block_32(ctx);
						if_block.c();
						if_block.m(h5, null);
					}
				} else if (if_block) {
					if_block.d(1);
					if_block = null;
				}
			},
			d(detaching) {
				if (detaching) detach(h5);
				if (if_block) if_block.d();
			}
		};
	}

	// (295:32) {#if mode==='update'}
	function create_if_block_32(ctx) {
		let t0_value = /*user*/ ctx[7].userID + "";
		let t0;
		let t1;
		let t2_value = /*user*/ ctx[7].username + "";
		let t2;

		return {
			c() {
				t0 = text(t0_value);
				t1 = text("#");
				t2 = text(t2_value);
			},
			m(target, anchor) {
				insert(target, t0, anchor);
				insert(target, t1, anchor);
				insert(target, t2, anchor);
			},
			p(ctx, dirty) {
				if (dirty[0] & /*user*/ 128 && t0_value !== (t0_value = /*user*/ ctx[7].userID + "")) set_data(t0, t0_value);
				if (dirty[0] & /*user*/ 128 && t2_value !== (t2_value = /*user*/ ctx[7].username + "")) set_data(t2, t2_value);
			},
			d(detaching) {
				if (detaching) detach(t0);
				if (detaching) detach(t1);
				if (detaching) detach(t2);
			}
		};
	}

	// (297:0) {#if description.__enabled}
	function create_if_block_30(ctx) {
		let h6;
		let t_value = /*description*/ ctx[4][/*mode*/ ctx[2]] + "";
		let t;

		return {
			c() {
				h6 = element("h6");
				t = text(t_value);
				attr(h6, "class", "subtitle is-6");
			},
			m(target, anchor) {
				insert(target, h6, anchor);
				append(h6, t);
			},
			p(ctx, dirty) {
				if (dirty[0] & /*description, mode*/ 20 && t_value !== (t_value = /*description*/ ctx[4][/*mode*/ ctx[2]] + "")) set_data(t, t_value);
			},
			d(detaching) {
				if (detaching) detach(h6);
			}
		};
	}

	// (301:1) {#if fields.username.enabled}
	function create_if_block_26(ctx) {
		let div1;
		let label;
		let t0_value = /*fields*/ ctx[13].username.label + "";
		let t0;
		let t1;
		let div0;
		let input;
		let input_class_value;
		let input_invalid_value;
		let input_required_value;
		let input_placeholder_value;
		let t2;
		let span;
		let t3;
		let t4;
		let p;
		let p_class_value;
		let mounted;
		let dispose;
		let if_block0 = /*fields*/ ctx[13].username.validated === true && create_if_block_28(ctx);

		function select_block_type_2(ctx, dirty) {
			if (!(/*fields*/ ctx[13].username.validated && /*fields*/ ctx[13].username.valid)) return create_if_block_27;
			return create_else_block_12;
		}

		let current_block_type = select_block_type_2(ctx);
		let if_block1 = current_block_type(ctx);

		return {
			c() {
				div1 = element("div");
				label = element("label");
				t0 = text(t0_value);
				t1 = space();
				div0 = element("div");
				input = element("input");
				t2 = space();
				span = element("span");
				span.innerHTML = `<i class="fas fa-user"></i>`;
				t3 = space();
				if (if_block0) if_block0.c();
				t4 = space();
				p = element("p");
				if_block1.c();
				attr(label, "class", "label");
				attr(input, "class", input_class_value = "input " + /*usernameClasses*/ ctx[17]);
				attr(input, "type", "text");
				attr(input, "name", "username");
				attr(input, "invalid", input_invalid_value = /*validationErrors*/ ctx[12].username);
				input.required = input_required_value = /*fields*/ ctx[13].username.required;
				attr(input, "placeholder", input_placeholder_value = /*fields*/ ctx[13].username.placeholder);
				attr(input, "autocomplete", "username");
				attr(input, "aria-controls", "input-field-helper-username");
				attr(input, "aria-describedby", "input-field-helper-username");
				attr(span, "class", "icon is-small is-left");
				attr(div0, "class", "control has-icons-left has-icons-right");
				attr(p, "class", p_class_value = "help " + /*usernameClasses*/ ctx[17]);
				attr(p, "id", "input-field-helper-username");
				attr(div1, "class", "field user-form-field user-login-form-username");
			},
			m(target, anchor) {
				insert(target, div1, anchor);
				append(div1, label);
				append(label, t0);
				append(div1, t1);
				append(div1, div0);
				append(div0, input);
				set_input_value(input, /*fields*/ ctx[13].username.value);
				append(div0, t2);
				append(div0, span);
				append(div0, t3);
				if (if_block0) if_block0.m(div0, null);
				append(div1, t4);
				append(div1, p);
				if_block1.m(p, null);

				if (!mounted) {
					dispose = [
						listen(input, "input", /*input_input_handler*/ ctx[56]),
						listen(input, "change", /*onChange*/ ctx[33]),
						listen(input, "input", /*onInput*/ ctx[34])
					];

					mounted = true;
				}
			},
			p(ctx, dirty) {
				if (dirty[0] & /*fields*/ 8192 && t0_value !== (t0_value = /*fields*/ ctx[13].username.label + "")) set_data(t0, t0_value);

				if (dirty[0] & /*usernameClasses*/ 131072 && input_class_value !== (input_class_value = "input " + /*usernameClasses*/ ctx[17])) {
					attr(input, "class", input_class_value);
				}

				if (dirty[0] & /*validationErrors*/ 4096 && input_invalid_value !== (input_invalid_value = /*validationErrors*/ ctx[12].username)) {
					attr(input, "invalid", input_invalid_value);
				}

				if (dirty[0] & /*fields*/ 8192 && input_required_value !== (input_required_value = /*fields*/ ctx[13].username.required)) {
					input.required = input_required_value;
				}

				if (dirty[0] & /*fields*/ 8192 && input_placeholder_value !== (input_placeholder_value = /*fields*/ ctx[13].username.placeholder)) {
					attr(input, "placeholder", input_placeholder_value);
				}

				if (dirty[0] & /*fields*/ 8192 && input.value !== /*fields*/ ctx[13].username.value) {
					set_input_value(input, /*fields*/ ctx[13].username.value);
				}

				if (/*fields*/ ctx[13].username.validated === true) {
					if (if_block0) {
						if_block0.p(ctx, dirty);
					} else {
						if_block0 = create_if_block_28(ctx);
						if_block0.c();
						if_block0.m(div0, null);
					}
				} else if (if_block0) {
					if_block0.d(1);
					if_block0 = null;
				}

				if (current_block_type === (current_block_type = select_block_type_2(ctx)) && if_block1) {
					if_block1.p(ctx, dirty);
				} else {
					if_block1.d(1);
					if_block1 = current_block_type(ctx);

					if (if_block1) {
						if_block1.c();
						if_block1.m(p, null);
					}
				}

				if (dirty[0] & /*usernameClasses*/ 131072 && p_class_value !== (p_class_value = "help " + /*usernameClasses*/ ctx[17])) {
					attr(p, "class", p_class_value);
				}
			},
			d(detaching) {
				if (detaching) detach(div1);
				if (if_block0) if_block0.d();
				if_block1.d();
				mounted = false;
				run_all(dispose);
			}
		};
	}

	// (308:3) {#if fields.username.validated === true }
	function create_if_block_28(ctx) {
		let span;

		function select_block_type_1(ctx, dirty) {
			if (/*fields*/ ctx[13].username.valid) return create_if_block_29;
			return create_else_block_13;
		}

		let current_block_type = select_block_type_1(ctx);
		let if_block = current_block_type(ctx);

		return {
			c() {
				span = element("span");
				if_block.c();
				attr(span, "class", "icon is-small is-right");
			},
			m(target, anchor) {
				insert(target, span, anchor);
				if_block.m(span, null);
			},
			p(ctx, dirty) {
				if (current_block_type !== (current_block_type = select_block_type_1(ctx))) {
					if_block.d(1);
					if_block = current_block_type(ctx);

					if (if_block) {
						if_block.c();
						if_block.m(span, null);
					}
				}
			},
			d(detaching) {
				if (detaching) detach(span);
				if_block.d();
			}
		};
	}

	// (312:4) {:else}
	function create_else_block_13(ctx) {
		let i;

		return {
			c() {
				i = element("i");
				attr(i, "class", "fas fa-exclamation-triangle");
			},
			m(target, anchor) {
				insert(target, i, anchor);
			},
			d(detaching) {
				if (detaching) detach(i);
			}
		};
	}

	// (310:4) {#if fields.username.valid}
	function create_if_block_29(ctx) {
		let i;

		return {
			c() {
				i = element("i");
				attr(i, "class", "fas fa-check");
			},
			m(target, anchor) {
				insert(target, i, anchor);
			},
			d(detaching) {
				if (detaching) detach(i);
			}
		};
	}

	// (319:79) {:else}
	function create_else_block_12(ctx) {
		let t;

		return {
			c() {
				t = text(" ");
			},
			m(target, anchor) {
				insert(target, t, anchor);
			},
			p: noop,
			d(detaching) {
				if (detaching) detach(t);
			}
		};
	}

	// (319:3) {#if !(fields.username.validated && fields.username.valid) }
	function create_if_block_27(ctx) {
		let t;

		return {
			c() {
				t = text(/*usernameHelper*/ ctx[16]);
			},
			m(target, anchor) {
				insert(target, t, anchor);
			},
			p(ctx, dirty) {
				if (dirty[0] & /*usernameHelper*/ 65536) set_data(t, /*usernameHelper*/ ctx[16]);
			},
			d(detaching) {
				if (detaching) detach(t);
			}
		};
	}

	// (324:1) {#if fields.email.enabled}
	function create_if_block_22(ctx) {
		let div1;
		let label;
		let t0_value = /*fields*/ ctx[13].email.label + "";
		let t0;
		let t1;
		let div0;
		let input;
		let input_class_value;
		let input_required_value;
		let input_placeholder_value;
		let input_invalid_value;
		let t2;
		let span;
		let t3;
		let t4;
		let p;
		let p_class_value;
		let mounted;
		let dispose;
		let if_block0 = /*fields*/ ctx[13].email.validated === true && create_if_block_24(ctx);

		function select_block_type_4(ctx, dirty) {
			if (!(/*fields*/ ctx[13].email.validated && /*fields*/ ctx[13].email.valid)) return create_if_block_23;
			return create_else_block_10;
		}

		let current_block_type = select_block_type_4(ctx);
		let if_block1 = current_block_type(ctx);

		return {
			c() {
				div1 = element("div");
				label = element("label");
				t0 = text(t0_value);
				t1 = space();
				div0 = element("div");
				input = element("input");
				t2 = space();
				span = element("span");
				span.innerHTML = `<i class="fas fa-envelope"></i>`;
				t3 = space();
				if (if_block0) if_block0.c();
				t4 = space();
				p = element("p");
				if_block1.c();
				attr(label, "class", "label");
				attr(input, "class", input_class_value = "input " + /*emailClasses*/ ctx[19]);
				input.required = input_required_value = /*fields*/ ctx[13].email.required;
				attr(input, "placeholder", input_placeholder_value = /*fields*/ ctx[13].email.placeholder);
				attr(input, "invalid", input_invalid_value = /*validationErrors*/ ctx[12].email);
				attr(input, "name", "email");
				attr(input, "type", "email");
				attr(input, "autocomplete", "email");
				attr(input, "aria-controls", "input-field-helper-email");
				attr(input, "aria-describedby", "input-field-helper-email");
				attr(span, "class", "icon is-small is-left");
				attr(div0, "class", "control has-icons-left has-icons-right");
				attr(p, "class", p_class_value = "help " + /*emailClasses*/ ctx[19]);
				attr(p, "id", "input-field-helper-email");
				attr(div1, "class", "user-form-field user-login-form-email field");
			},
			m(target, anchor) {
				insert(target, div1, anchor);
				append(div1, label);
				append(label, t0);
				append(div1, t1);
				append(div1, div0);
				append(div0, input);
				set_input_value(input, /*fields*/ ctx[13].email.value);
				append(div0, t2);
				append(div0, span);
				append(div0, t3);
				if (if_block0) if_block0.m(div0, null);
				append(div1, t4);
				append(div1, p);
				if_block1.m(p, null);

				if (!mounted) {
					dispose = [
						listen(input, "input", /*input_input_handler_1*/ ctx[57]),
						listen(input, "change", /*onChange*/ ctx[33]),
						listen(input, "input", /*onInput*/ ctx[34])
					];

					mounted = true;
				}
			},
			p(ctx, dirty) {
				if (dirty[0] & /*fields*/ 8192 && t0_value !== (t0_value = /*fields*/ ctx[13].email.label + "")) set_data(t0, t0_value);

				if (dirty[0] & /*emailClasses*/ 524288 && input_class_value !== (input_class_value = "input " + /*emailClasses*/ ctx[19])) {
					attr(input, "class", input_class_value);
				}

				if (dirty[0] & /*fields*/ 8192 && input_required_value !== (input_required_value = /*fields*/ ctx[13].email.required)) {
					input.required = input_required_value;
				}

				if (dirty[0] & /*fields*/ 8192 && input_placeholder_value !== (input_placeholder_value = /*fields*/ ctx[13].email.placeholder)) {
					attr(input, "placeholder", input_placeholder_value);
				}

				if (dirty[0] & /*validationErrors*/ 4096 && input_invalid_value !== (input_invalid_value = /*validationErrors*/ ctx[12].email)) {
					attr(input, "invalid", input_invalid_value);
				}

				if (dirty[0] & /*fields*/ 8192 && input.value !== /*fields*/ ctx[13].email.value) {
					set_input_value(input, /*fields*/ ctx[13].email.value);
				}

				if (/*fields*/ ctx[13].email.validated === true) {
					if (if_block0) {
						if_block0.p(ctx, dirty);
					} else {
						if_block0 = create_if_block_24(ctx);
						if_block0.c();
						if_block0.m(div0, null);
					}
				} else if (if_block0) {
					if_block0.d(1);
					if_block0 = null;
				}

				if (current_block_type === (current_block_type = select_block_type_4(ctx)) && if_block1) {
					if_block1.p(ctx, dirty);
				} else {
					if_block1.d(1);
					if_block1 = current_block_type(ctx);

					if (if_block1) {
						if_block1.c();
						if_block1.m(p, null);
					}
				}

				if (dirty[0] & /*emailClasses*/ 524288 && p_class_value !== (p_class_value = "help " + /*emailClasses*/ ctx[19])) {
					attr(p, "class", p_class_value);
				}
			},
			d(detaching) {
				if (detaching) detach(div1);
				if (if_block0) if_block0.d();
				if_block1.d();
				mounted = false;
				run_all(dispose);
			}
		};
	}

	// (331:3) {#if fields.email.validated === true }
	function create_if_block_24(ctx) {
		let span;

		function select_block_type_3(ctx, dirty) {
			if (/*fields*/ ctx[13].email.valid) return create_if_block_25;
			return create_else_block_11;
		}

		let current_block_type = select_block_type_3(ctx);
		let if_block = current_block_type(ctx);

		return {
			c() {
				span = element("span");
				if_block.c();
				attr(span, "class", "icon is-small is-right");
			},
			m(target, anchor) {
				insert(target, span, anchor);
				if_block.m(span, null);
			},
			p(ctx, dirty) {
				if (current_block_type !== (current_block_type = select_block_type_3(ctx))) {
					if_block.d(1);
					if_block = current_block_type(ctx);

					if (if_block) {
						if_block.c();
						if_block.m(span, null);
					}
				}
			},
			d(detaching) {
				if (detaching) detach(span);
				if_block.d();
			}
		};
	}

	// (335:5) {:else}
	function create_else_block_11(ctx) {
		let i;

		return {
			c() {
				i = element("i");
				attr(i, "class", "fas fa-exclamation-triangle");
			},
			m(target, anchor) {
				insert(target, i, anchor);
			},
			d(detaching) {
				if (detaching) detach(i);
			}
		};
	}

	// (333:5) {#if fields.email.valid}
	function create_if_block_25(ctx) {
		let i;

		return {
			c() {
				i = element("i");
				attr(i, "class", "fas fa-check");
			},
			m(target, anchor) {
				insert(target, i, anchor);
			},
			d(detaching) {
				if (detaching) detach(i);
			}
		};
	}

	// (345:3) {:else}
	function create_else_block_10(ctx) {
		let t;

		return {
			c() {
				t = text(" ");
			},
			m(target, anchor) {
				insert(target, t, anchor);
			},
			p: noop,
			d(detaching) {
				if (detaching) detach(t);
			}
		};
	}

	// (343:3) {#if !(fields.email.validated && fields.email.valid) }
	function create_if_block_23(ctx) {
		let t;

		return {
			c() {
				t = text(/*emailHelper*/ ctx[18]);
			},
			m(target, anchor) {
				insert(target, t, anchor);
			},
			p(ctx, dirty) {
				if (dirty[0] & /*emailHelper*/ 262144) set_data(t, /*emailHelper*/ ctx[18]);
			},
			d(detaching) {
				if (detaching) detach(t);
			}
		};
	}

	// (350:1) {#if fields.password.enabled}
	function create_if_block_18(ctx) {
		let div1;
		let label;
		let t0_value = /*fields*/ ctx[13].password.label + "";
		let t0;
		let t1;
		let div0;
		let input;
		let input_class_value;
		let input_invalid_value;
		let input_required_value;
		let input_placeholder_value;
		let t2;
		let span;
		let t3;
		let t4;
		let p;
		let p_class_value;
		let mounted;
		let dispose;
		let if_block0 = /*fields*/ ctx[13].password.validated === true && create_if_block_20(ctx);

		function select_block_type_6(ctx, dirty) {
			if (!(/*fields*/ ctx[13].password.validated && /*fields*/ ctx[13].password.valid)) return create_if_block_19;
			return create_else_block_8;
		}

		let current_block_type = select_block_type_6(ctx);
		let if_block1 = current_block_type(ctx);

		return {
			c() {
				div1 = element("div");
				label = element("label");
				t0 = text(t0_value);
				t1 = space();
				div0 = element("div");
				input = element("input");
				t2 = space();
				span = element("span");
				span.innerHTML = `<i class="fas fa-lock"></i>`;
				t3 = space();
				if (if_block0) if_block0.c();
				t4 = space();
				p = element("p");
				if_block1.c();
				attr(label, "class", "label");
				attr(input, "class", input_class_value = "input " + /*passwordClasses*/ ctx[21]);
				attr(input, "type", "password");
				attr(input, "name", "password");
				attr(input, "invalid", input_invalid_value = /*validationErrors*/ ctx[12].password);
				input.required = input_required_value = /*fields*/ ctx[13].password.required;
				attr(input, "placeholder", input_placeholder_value = /*fields*/ ctx[13].password.placeholder);
				attr(input, "autocomplete", "password");
				attr(input, "aria-controls", "input-field-helper-password");
				attr(input, "aria-describedby", "input-field-helper-password");
				attr(span, "class", "icon is-small is-left");
				attr(div0, "class", "control has-icons-left has-icons-right");
				attr(p, "class", p_class_value = "help " + /*passwordClasses*/ ctx[21]);
				attr(p, "id", "input-field-helper-password");
				attr(div1, "class", "field user-form-field user-login-form-password");
			},
			m(target, anchor) {
				insert(target, div1, anchor);
				append(div1, label);
				append(label, t0);
				append(div1, t1);
				append(div1, div0);
				append(div0, input);
				set_input_value(input, /*fields*/ ctx[13].password.value);
				append(div0, t2);
				append(div0, span);
				append(div0, t3);
				if (if_block0) if_block0.m(div0, null);
				append(div1, t4);
				append(div1, p);
				if_block1.m(p, null);

				if (!mounted) {
					dispose = [
						listen(input, "input", /*input_input_handler_2*/ ctx[58]),
						listen(input, "change", /*onChange*/ ctx[33]),
						listen(input, "input", /*onInput*/ ctx[34])
					];

					mounted = true;
				}
			},
			p(ctx, dirty) {
				if (dirty[0] & /*fields*/ 8192 && t0_value !== (t0_value = /*fields*/ ctx[13].password.label + "")) set_data(t0, t0_value);

				if (dirty[0] & /*passwordClasses*/ 2097152 && input_class_value !== (input_class_value = "input " + /*passwordClasses*/ ctx[21])) {
					attr(input, "class", input_class_value);
				}

				if (dirty[0] & /*validationErrors*/ 4096 && input_invalid_value !== (input_invalid_value = /*validationErrors*/ ctx[12].password)) {
					attr(input, "invalid", input_invalid_value);
				}

				if (dirty[0] & /*fields*/ 8192 && input_required_value !== (input_required_value = /*fields*/ ctx[13].password.required)) {
					input.required = input_required_value;
				}

				if (dirty[0] & /*fields*/ 8192 && input_placeholder_value !== (input_placeholder_value = /*fields*/ ctx[13].password.placeholder)) {
					attr(input, "placeholder", input_placeholder_value);
				}

				if (dirty[0] & /*fields*/ 8192 && input.value !== /*fields*/ ctx[13].password.value) {
					set_input_value(input, /*fields*/ ctx[13].password.value);
				}

				if (/*fields*/ ctx[13].password.validated === true) {
					if (if_block0) {
						if_block0.p(ctx, dirty);
					} else {
						if_block0 = create_if_block_20(ctx);
						if_block0.c();
						if_block0.m(div0, null);
					}
				} else if (if_block0) {
					if_block0.d(1);
					if_block0 = null;
				}

				if (current_block_type === (current_block_type = select_block_type_6(ctx)) && if_block1) {
					if_block1.p(ctx, dirty);
				} else {
					if_block1.d(1);
					if_block1 = current_block_type(ctx);

					if (if_block1) {
						if_block1.c();
						if_block1.m(p, null);
					}
				}

				if (dirty[0] & /*passwordClasses*/ 2097152 && p_class_value !== (p_class_value = "help " + /*passwordClasses*/ ctx[21])) {
					attr(p, "class", p_class_value);
				}
			},
			d(detaching) {
				if (detaching) detach(div1);
				if (if_block0) if_block0.d();
				if_block1.d();
				mounted = false;
				run_all(dispose);
			}
		};
	}

	// (363:3) {#if fields.password.validated === true }
	function create_if_block_20(ctx) {
		let span;

		function select_block_type_5(ctx, dirty) {
			if (/*fields*/ ctx[13].password.valid) return create_if_block_21;
			return create_else_block_9;
		}

		let current_block_type = select_block_type_5(ctx);
		let if_block = current_block_type(ctx);

		return {
			c() {
				span = element("span");
				if_block.c();
				attr(span, "class", "icon is-small is-right");
			},
			m(target, anchor) {
				insert(target, span, anchor);
				if_block.m(span, null);
			},
			p(ctx, dirty) {
				if (current_block_type !== (current_block_type = select_block_type_5(ctx))) {
					if_block.d(1);
					if_block = current_block_type(ctx);

					if (if_block) {
						if_block.c();
						if_block.m(span, null);
					}
				}
			},
			d(detaching) {
				if (detaching) detach(span);
				if_block.d();
			}
		};
	}

	// (367:4) {:else}
	function create_else_block_9(ctx) {
		let i;

		return {
			c() {
				i = element("i");
				attr(i, "class", "fas fa-exclamation-triangle");
			},
			m(target, anchor) {
				insert(target, i, anchor);
			},
			d(detaching) {
				if (detaching) detach(i);
			}
		};
	}

	// (365:4) {#if fields.password.valid}
	function create_if_block_21(ctx) {
		let i;

		return {
			c() {
				i = element("i");
				attr(i, "class", "fas fa-check");
			},
			m(target, anchor) {
				insert(target, i, anchor);
			},
			d(detaching) {
				if (detaching) detach(i);
			}
		};
	}

	// (374:79) {:else}
	function create_else_block_8(ctx) {
		let t;

		return {
			c() {
				t = text(" ");
			},
			m(target, anchor) {
				insert(target, t, anchor);
			},
			p: noop,
			d(detaching) {
				if (detaching) detach(t);
			}
		};
	}

	// (374:3) {#if !(fields.password.validated && fields.password.valid) }
	function create_if_block_19(ctx) {
		let t;

		return {
			c() {
				t = text(/*passwordHelper*/ ctx[20]);
			},
			m(target, anchor) {
				insert(target, t, anchor);
			},
			p(ctx, dirty) {
				if (dirty[0] & /*passwordHelper*/ 1048576) set_data(t, /*passwordHelper*/ ctx[20]);
			},
			d(detaching) {
				if (detaching) detach(t);
			}
		};
	}

	// (379:1) {#if fields.password2.enabled}
	function create_if_block_14(ctx) {
		let div1;
		let label;
		let t0_value = /*fields*/ ctx[13].password2.label + "";
		let t0;
		let t1;
		let div0;
		let input;
		let input_class_value;
		let input_invalid_value;
		let input_required_value;
		let input_placeholder_value;
		let t2;
		let span;
		let t3;
		let t4;
		let p;
		let p_class_value;
		let mounted;
		let dispose;
		let if_block0 = /*fields*/ ctx[13].password2.validated === true && create_if_block_16(ctx);

		function select_block_type_8(ctx, dirty) {
			if (!(/*fields*/ ctx[13].password2.validated && /*fields*/ ctx[13].password2.valid)) return create_if_block_15;
			return create_else_block_6;
		}

		let current_block_type = select_block_type_8(ctx);
		let if_block1 = current_block_type(ctx);

		return {
			c() {
				div1 = element("div");
				label = element("label");
				t0 = text(t0_value);
				t1 = space();
				div0 = element("div");
				input = element("input");
				t2 = space();
				span = element("span");
				span.innerHTML = `<i class="fas fa-lock"></i>`;
				t3 = space();
				if (if_block0) if_block0.c();
				t4 = space();
				p = element("p");
				if_block1.c();
				attr(label, "class", "label");
				attr(input, "class", input_class_value = "input " + /*password2Classes*/ ctx[23]);
				attr(input, "type", "password");
				attr(input, "name", "password2");
				attr(input, "invalid", input_invalid_value = /*validationErrors*/ ctx[12].password2);
				input.required = input_required_value = /*fields*/ ctx[13].password2.required;
				attr(input, "placeholder", input_placeholder_value = /*fields*/ ctx[13].password2.placeholder);
				attr(input, "autocomplete", "password2");
				attr(input, "aria-controls", "input-field-helper-password2");
				attr(input, "aria-describedby", "input-field-helper-password2");
				attr(span, "class", "icon is-small is-left");
				attr(div0, "class", "control has-icons-left has-icons-right");
				attr(p, "class", p_class_value = "help " + /*password2Classes*/ ctx[23]);
				attr(p, "id", "input-field-helper-password2");
				attr(div1, "class", "field user-form-field user-login-form-password2");
			},
			m(target, anchor) {
				insert(target, div1, anchor);
				append(div1, label);
				append(label, t0);
				append(div1, t1);
				append(div1, div0);
				append(div0, input);
				set_input_value(input, /*fields*/ ctx[13].password2.value);
				append(div0, t2);
				append(div0, span);
				append(div0, t3);
				if (if_block0) if_block0.m(div0, null);
				append(div1, t4);
				append(div1, p);
				if_block1.m(p, null);

				if (!mounted) {
					dispose = [
						listen(input, "input", /*input_input_handler_3*/ ctx[59]),
						listen(input, "change", /*onChange*/ ctx[33]),
						listen(input, "input", /*onInput*/ ctx[34])
					];

					mounted = true;
				}
			},
			p(ctx, dirty) {
				if (dirty[0] & /*fields*/ 8192 && t0_value !== (t0_value = /*fields*/ ctx[13].password2.label + "")) set_data(t0, t0_value);

				if (dirty[0] & /*password2Classes*/ 8388608 && input_class_value !== (input_class_value = "input " + /*password2Classes*/ ctx[23])) {
					attr(input, "class", input_class_value);
				}

				if (dirty[0] & /*validationErrors*/ 4096 && input_invalid_value !== (input_invalid_value = /*validationErrors*/ ctx[12].password2)) {
					attr(input, "invalid", input_invalid_value);
				}

				if (dirty[0] & /*fields*/ 8192 && input_required_value !== (input_required_value = /*fields*/ ctx[13].password2.required)) {
					input.required = input_required_value;
				}

				if (dirty[0] & /*fields*/ 8192 && input_placeholder_value !== (input_placeholder_value = /*fields*/ ctx[13].password2.placeholder)) {
					attr(input, "placeholder", input_placeholder_value);
				}

				if (dirty[0] & /*fields*/ 8192 && input.value !== /*fields*/ ctx[13].password2.value) {
					set_input_value(input, /*fields*/ ctx[13].password2.value);
				}

				if (/*fields*/ ctx[13].password2.validated === true) {
					if (if_block0) {
						if_block0.p(ctx, dirty);
					} else {
						if_block0 = create_if_block_16(ctx);
						if_block0.c();
						if_block0.m(div0, null);
					}
				} else if (if_block0) {
					if_block0.d(1);
					if_block0 = null;
				}

				if (current_block_type === (current_block_type = select_block_type_8(ctx)) && if_block1) {
					if_block1.p(ctx, dirty);
				} else {
					if_block1.d(1);
					if_block1 = current_block_type(ctx);

					if (if_block1) {
						if_block1.c();
						if_block1.m(p, null);
					}
				}

				if (dirty[0] & /*password2Classes*/ 8388608 && p_class_value !== (p_class_value = "help " + /*password2Classes*/ ctx[23])) {
					attr(p, "class", p_class_value);
				}
			},
			d(detaching) {
				if (detaching) detach(div1);
				if (if_block0) if_block0.d();
				if_block1.d();
				mounted = false;
				run_all(dispose);
			}
		};
	}

	// (389:3) {#if fields.password2.validated === true }
	function create_if_block_16(ctx) {
		let span;

		function select_block_type_7(ctx, dirty) {
			if (/*fields*/ ctx[13].password2.valid) return create_if_block_17;
			return create_else_block_7;
		}

		let current_block_type = select_block_type_7(ctx);
		let if_block = current_block_type(ctx);

		return {
			c() {
				span = element("span");
				if_block.c();
				attr(span, "class", "icon is-small is-right");
			},
			m(target, anchor) {
				insert(target, span, anchor);
				if_block.m(span, null);
			},
			p(ctx, dirty) {
				if (current_block_type !== (current_block_type = select_block_type_7(ctx))) {
					if_block.d(1);
					if_block = current_block_type(ctx);

					if (if_block) {
						if_block.c();
						if_block.m(span, null);
					}
				}
			},
			d(detaching) {
				if (detaching) detach(span);
				if_block.d();
			}
		};
	}

	// (393:4) {:else}
	function create_else_block_7(ctx) {
		let i;

		return {
			c() {
				i = element("i");
				attr(i, "class", "fas fa-exclamation-triangle");
			},
			m(target, anchor) {
				insert(target, i, anchor);
			},
			d(detaching) {
				if (detaching) detach(i);
			}
		};
	}

	// (391:4) {#if fields.password2.valid}
	function create_if_block_17(ctx) {
		let i;

		return {
			c() {
				i = element("i");
				attr(i, "class", "fas fa-check");
			},
			m(target, anchor) {
				insert(target, i, anchor);
			},
			d(detaching) {
				if (detaching) detach(i);
			}
		};
	}

	// (402:3) {:else}
	function create_else_block_6(ctx) {
		let t;

		return {
			c() {
				t = text(" ");
			},
			m(target, anchor) {
				insert(target, t, anchor);
			},
			p: noop,
			d(detaching) {
				if (detaching) detach(t);
			}
		};
	}

	// (400:3) {#if !(fields.password2.validated && fields.password2.valid) }
	function create_if_block_15(ctx) {
		let t;

		return {
			c() {
				t = text(/*password2Helper*/ ctx[22]);
			},
			m(target, anchor) {
				insert(target, t, anchor);
			},
			p(ctx, dirty) {
				if (dirty[0] & /*password2Helper*/ 4194304) set_data(t, /*password2Helper*/ ctx[22]);
			},
			d(detaching) {
				if (detaching) detach(t);
			}
		};
	}

	// (407:1) {#if fields.tel.enabled}
	function create_if_block_10(ctx) {
		let div1;
		let label;
		let t0_value = /*fields*/ ctx[13].tel.label + "";
		let t0;
		let t1;
		let div0;
		let input;
		let input_class_value;
		let input_invalid_value;
		let input_required_value;
		let input_placeholder_value;
		let t2;
		let span;
		let t3;
		let t4;
		let p;
		let p_class_value;
		let mounted;
		let dispose;
		let if_block0 = /*fields*/ ctx[13].tel.validated === true && create_if_block_12(ctx);

		function select_block_type_10(ctx, dirty) {
			if (!/*fields*/ ctx[13].tel.validated || !/*fields*/ ctx[13].tel.valid) return create_if_block_11;
			return create_else_block_4;
		}

		let current_block_type = select_block_type_10(ctx);
		let if_block1 = current_block_type(ctx);

		return {
			c() {
				div1 = element("div");
				label = element("label");
				t0 = text(t0_value);
				t1 = space();
				div0 = element("div");
				input = element("input");
				t2 = space();
				span = element("span");
				span.innerHTML = `<i class="fas fa-phone"></i>`;
				t3 = space();
				if (if_block0) if_block0.c();
				t4 = space();
				p = element("p");
				if_block1.c();
				attr(label, "class", "label");
				attr(input, "class", input_class_value = "input " + /*telClasses*/ ctx[15]);
				attr(input, "type", "tel");
				attr(input, "name", "tel");
				attr(input, "invalid", input_invalid_value = /*validationErrors*/ ctx[12].tel);
				input.required = input_required_value = /*fields*/ ctx[13].tel.required;
				attr(input, "placeholder", input_placeholder_value = /*fields*/ ctx[13].tel.placeholder);
				attr(input, "autocomplete", "tel");
				attr(input, "aria-controls", "input-field-helper-tel");
				attr(input, "aria-describedby", "input-field-helper-tel");
				attr(span, "class", "icon is-small is-left");
				attr(div0, "class", "control has-icons-left has-icons-right");
				attr(p, "class", p_class_value = "help " + /*telClasses*/ ctx[15]);
				attr(p, "id", "input-field-helper-tel");
				attr(div1, "class", "field user-form-field user-login-form-tel");
			},
			m(target, anchor) {
				insert(target, div1, anchor);
				append(div1, label);
				append(label, t0);
				append(div1, t1);
				append(div1, div0);
				append(div0, input);
				set_input_value(input, /*fields*/ ctx[13].tel.value);
				append(div0, t2);
				append(div0, span);
				append(div0, t3);
				if (if_block0) if_block0.m(div0, null);
				append(div1, t4);
				append(div1, p);
				if_block1.m(p, null);

				if (!mounted) {
					dispose = [
						listen(input, "input", /*input_input_handler_4*/ ctx[60]),
						listen(input, "change", /*onChange*/ ctx[33]),
						listen(input, "input", /*onInput*/ ctx[34])
					];

					mounted = true;
				}
			},
			p(ctx, dirty) {
				if (dirty[0] & /*fields*/ 8192 && t0_value !== (t0_value = /*fields*/ ctx[13].tel.label + "")) set_data(t0, t0_value);

				if (dirty[0] & /*telClasses*/ 32768 && input_class_value !== (input_class_value = "input " + /*telClasses*/ ctx[15])) {
					attr(input, "class", input_class_value);
				}

				if (dirty[0] & /*validationErrors*/ 4096 && input_invalid_value !== (input_invalid_value = /*validationErrors*/ ctx[12].tel)) {
					attr(input, "invalid", input_invalid_value);
				}

				if (dirty[0] & /*fields*/ 8192 && input_required_value !== (input_required_value = /*fields*/ ctx[13].tel.required)) {
					input.required = input_required_value;
				}

				if (dirty[0] & /*fields*/ 8192 && input_placeholder_value !== (input_placeholder_value = /*fields*/ ctx[13].tel.placeholder)) {
					attr(input, "placeholder", input_placeholder_value);
				}

				if (dirty[0] & /*fields*/ 8192) {
					set_input_value(input, /*fields*/ ctx[13].tel.value);
				}

				if (/*fields*/ ctx[13].tel.validated === true) {
					if (if_block0) {
						if_block0.p(ctx, dirty);
					} else {
						if_block0 = create_if_block_12(ctx);
						if_block0.c();
						if_block0.m(div0, null);
					}
				} else if (if_block0) {
					if_block0.d(1);
					if_block0 = null;
				}

				if (current_block_type === (current_block_type = select_block_type_10(ctx)) && if_block1) {
					if_block1.p(ctx, dirty);
				} else {
					if_block1.d(1);
					if_block1 = current_block_type(ctx);

					if (if_block1) {
						if_block1.c();
						if_block1.m(p, null);
					}
				}

				if (dirty[0] & /*telClasses*/ 32768 && p_class_value !== (p_class_value = "help " + /*telClasses*/ ctx[15])) {
					attr(p, "class", p_class_value);
				}
			},
			d(detaching) {
				if (detaching) detach(div1);
				if (if_block0) if_block0.d();
				if_block1.d();
				mounted = false;
				run_all(dispose);
			}
		};
	}

	// (418:3) {#if fields.tel.validated === true }
	function create_if_block_12(ctx) {
		let span;

		function select_block_type_9(ctx, dirty) {
			if (/*fields*/ ctx[13].tel.valid) return create_if_block_13;
			return create_else_block_5;
		}

		let current_block_type = select_block_type_9(ctx);
		let if_block = current_block_type(ctx);

		return {
			c() {
				span = element("span");
				if_block.c();
				attr(span, "class", "icon is-small is-right");
			},
			m(target, anchor) {
				insert(target, span, anchor);
				if_block.m(span, null);
			},
			p(ctx, dirty) {
				if (current_block_type !== (current_block_type = select_block_type_9(ctx))) {
					if_block.d(1);
					if_block = current_block_type(ctx);

					if (if_block) {
						if_block.c();
						if_block.m(span, null);
					}
				}
			},
			d(detaching) {
				if (detaching) detach(span);
				if_block.d();
			}
		};
	}

	// (422:4) {:else}
	function create_else_block_5(ctx) {
		let i;

		return {
			c() {
				i = element("i");
				attr(i, "class", "fas fa-exclamation-triangle");
			},
			m(target, anchor) {
				insert(target, i, anchor);
			},
			d(detaching) {
				if (detaching) detach(i);
			}
		};
	}

	// (420:4) {#if fields.tel.valid}
	function create_if_block_13(ctx) {
		let i;

		return {
			c() {
				i = element("i");
				attr(i, "class", "fas fa-check");
			},
			m(target, anchor) {
				insert(target, i, anchor);
			},
			d(detaching) {
				if (detaching) detach(i);
			}
		};
	}

	// (431:3) {:else}
	function create_else_block_4(ctx) {
		let t;

		return {
			c() {
				t = text(" ");
			},
			m(target, anchor) {
				insert(target, t, anchor);
			},
			p: noop,
			d(detaching) {
				if (detaching) detach(t);
			}
		};
	}

	// (429:3) {#if (!fields.tel.validated || !fields.tel.valid) }
	function create_if_block_11(ctx) {
		let t;

		return {
			c() {
				t = text(/*telHelper*/ ctx[14]);
			},
			m(target, anchor) {
				insert(target, t, anchor);
			},
			p(ctx, dirty) {
				if (dirty[0] & /*telHelper*/ 16384) set_data(t, /*telHelper*/ ctx[14]);
			},
			d(detaching) {
				if (detaching) detach(t);
			}
		};
	}

	// (435:1) {#if errorMessage!=false }
	function create_if_block_9(ctx) {
		let div;
		let t;

		return {
			c() {
				div = element("div");
				t = text(/*errorMessage*/ ctx[10]);
				attr(div, "class", "user-form-error notification is-danger");
			},
			m(target, anchor) {
				insert(target, div, anchor);
				append(div, t);
			},
			p(ctx, dirty) {
				if (dirty[0] & /*errorMessage*/ 1024) set_data(t, /*errorMessage*/ ctx[10]);
			},
			d(detaching) {
				if (detaching) detach(div);
			}
		};
	}

	// (439:1) {#if fields.active.enabled}
	function create_if_block_7(ctx) {
		let div;
		let input;
		let input_required_value;
		let input_placeholder_value;
		let input_invalid_value;
		let t0;
		let label;
		let t1_value = /*fields*/ ctx[13].active.label + "";
		let t1;
		let t2;
		let p;
		let p_class_value;
		let mounted;
		let dispose;

		function select_block_type_11(ctx, dirty) {
			if (!(/*fields*/ ctx[13].active.validated && /*fields*/ ctx[13].active.valid)) return create_if_block_8;
			return create_else_block_3;
		}

		let current_block_type = select_block_type_11(ctx);
		let if_block = current_block_type(ctx);

		return {
			c() {
				div = element("div");
				input = element("input");
				t0 = space();
				label = element("label");
				t1 = text(t1_value);
				t2 = space();
				p = element("p");
				if_block.c();
				attr(input, "id", "user-login-form-active-field");
				attr(input, "class", "switch is-rounded is-success ");
				input.required = input_required_value = /*fields*/ ctx[13].active.required;
				attr(input, "placeholder", input_placeholder_value = /*fields*/ ctx[13].active.placeholder);
				attr(input, "invalid", input_invalid_value = /*validationErrors*/ ctx[12].active);
				attr(input, "name", "active");
				attr(input, "type", "checkbox");
				attr(input, "aria-controls", "input-field-helper-active");
				attr(input, "aria-describedby", "input-field-helper-active");
				attr(label, "class", "label");
				attr(label, "for", "user-login-form-active-field");
				attr(p, "class", p_class_value = "help " + /*activeClasses*/ ctx[25]);
				attr(p, "id", "input-field-helper-active");
				attr(div, "class", "user-form-field user-login-form-active field");
			},
			m(target, anchor) {
				insert(target, div, anchor);
				append(div, input);
				input.checked = /*fields*/ ctx[13].active.value;
				append(div, t0);
				append(div, label);
				append(label, t1);
				append(div, t2);
				append(div, p);
				if_block.m(p, null);

				if (!mounted) {
					dispose = [
						listen(input, "change", /*input_change_handler*/ ctx[61]),
						listen(input, "change", /*onChange*/ ctx[33]),
						listen(input, "input", /*onInput*/ ctx[34])
					];

					mounted = true;
				}
			},
			p(ctx, dirty) {
				if (dirty[0] & /*fields*/ 8192 && input_required_value !== (input_required_value = /*fields*/ ctx[13].active.required)) {
					input.required = input_required_value;
				}

				if (dirty[0] & /*fields*/ 8192 && input_placeholder_value !== (input_placeholder_value = /*fields*/ ctx[13].active.placeholder)) {
					attr(input, "placeholder", input_placeholder_value);
				}

				if (dirty[0] & /*validationErrors*/ 4096 && input_invalid_value !== (input_invalid_value = /*validationErrors*/ ctx[12].active)) {
					attr(input, "invalid", input_invalid_value);
				}

				if (dirty[0] & /*fields*/ 8192) {
					input.checked = /*fields*/ ctx[13].active.value;
				}

				if (dirty[0] & /*fields*/ 8192 && t1_value !== (t1_value = /*fields*/ ctx[13].active.label + "")) set_data(t1, t1_value);

				if (current_block_type === (current_block_type = select_block_type_11(ctx)) && if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block.d(1);
					if_block = current_block_type(ctx);

					if (if_block) {
						if_block.c();
						if_block.m(p, null);
					}
				}

				if (dirty[0] & /*activeClasses*/ 33554432 && p_class_value !== (p_class_value = "help " + /*activeClasses*/ ctx[25])) {
					attr(p, "class", p_class_value);
				}
			},
			d(detaching) {
				if (detaching) detach(div);
				if_block.d();
				mounted = false;
				run_all(dispose);
			}
		};
	}

	// (455:3) {:else}
	function create_else_block_3(ctx) {
		let t;

		return {
			c() {
				t = text(" ");
			},
			m(target, anchor) {
				insert(target, t, anchor);
			},
			p: noop,
			d(detaching) {
				if (detaching) detach(t);
			}
		};
	}

	// (453:3) {#if !(fields.active.validated && fields.active.valid) }
	function create_if_block_8(ctx) {
		let t;

		return {
			c() {
				t = text(/*activeHelper*/ ctx[24]);
			},
			m(target, anchor) {
				insert(target, t, anchor);
			},
			p(ctx, dirty) {
				if (dirty[0] & /*activeHelper*/ 16777216) set_data(t, /*activeHelper*/ ctx[24]);
			},
			d(detaching) {
				if (detaching) detach(t);
			}
		};
	}

	// (460:1) {#if fields.role.enabled}
	function create_if_block_5(ctx) {
		let div1;
		let label;
		let t0_value = /*fields*/ ctx[13].role.label + "";
		let t0;
		let t1;
		let div0;
		let uitag;
		let updating_error;
		let updating_items;
		let div0_class_value;
		let t2;
		let p;
		let p_class_value;
		let current;

		function uitag_error_binding(value) {
			/*uitag_error_binding*/ ctx[62].call(null, value);
		}

		function uitag_items_binding(value) {
			/*uitag_items_binding*/ ctx[63].call(null, value);
		}

		let uitag_props = { variants: UserCommon.ROLES };

		if (/*roleInvalid*/ ctx[30] !== void 0) {
			uitag_props.error = /*roleInvalid*/ ctx[30];
		}

		if (/*userRoles*/ ctx[0] !== void 0) {
			uitag_props.items = /*userRoles*/ ctx[0];
		}

		uitag = new Ui_tag({ props: uitag_props });
		binding_callbacks.push(() => bind(uitag, "error", uitag_error_binding));
		binding_callbacks.push(() => bind(uitag, "items", uitag_items_binding));
		uitag.$on("change", /*onRoleChange*/ ctx[32]);

		function select_block_type_12(ctx, dirty) {
			if (!(/*fields*/ ctx[13].role.validated && /*fields*/ ctx[13].role.valid)) return create_if_block_6;
			return create_else_block_2;
		}

		let current_block_type = select_block_type_12(ctx);
		let if_block = current_block_type(ctx);

		return {
			c() {
				div1 = element("div");
				label = element("label");
				t0 = text(t0_value);
				t1 = space();
				div0 = element("div");
				create_component(uitag.$$.fragment);
				t2 = space();
				p = element("p");
				if_block.c();
				attr(label, "class", "label");
				attr(div0, "class", div0_class_value = "control " + /*roleClasses*/ ctx[29]);
				attr(p, "class", p_class_value = "help " + /*roleClasses*/ ctx[29]);
				attr(p, "id", "input-field-helper-role");
				attr(div1, "class", "user-form-field user-login-form-role field");
			},
			m(target, anchor) {
				insert(target, div1, anchor);
				append(div1, label);
				append(label, t0);
				append(div1, t1);
				append(div1, div0);
				mount_component(uitag, div0, null);
				append(div1, t2);
				append(div1, p);
				if_block.m(p, null);
				current = true;
			},
			p(ctx, dirty) {
				if ((!current || dirty[0] & /*fields*/ 8192) && t0_value !== (t0_value = /*fields*/ ctx[13].role.label + "")) set_data(t0, t0_value);
				const uitag_changes = {};

				if (!updating_error && dirty[0] & /*roleInvalid*/ 1073741824) {
					updating_error = true;
					uitag_changes.error = /*roleInvalid*/ ctx[30];
					add_flush_callback(() => updating_error = false);
				}

				if (!updating_items && dirty[0] & /*userRoles*/ 1) {
					updating_items = true;
					uitag_changes.items = /*userRoles*/ ctx[0];
					add_flush_callback(() => updating_items = false);
				}

				uitag.$set(uitag_changes);

				if (!current || dirty[0] & /*roleClasses*/ 536870912 && div0_class_value !== (div0_class_value = "control " + /*roleClasses*/ ctx[29])) {
					attr(div0, "class", div0_class_value);
				}

				if (current_block_type === (current_block_type = select_block_type_12(ctx)) && if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block.d(1);
					if_block = current_block_type(ctx);

					if (if_block) {
						if_block.c();
						if_block.m(p, null);
					}
				}

				if (!current || dirty[0] & /*roleClasses*/ 536870912 && p_class_value !== (p_class_value = "help " + /*roleClasses*/ ctx[29])) {
					attr(p, "class", p_class_value);
				}
			},
			i(local) {
				if (current) return;
				transition_in(uitag.$$.fragment, local);
				current = true;
			},
			o(local) {
				transition_out(uitag.$$.fragment, local);
				current = false;
			},
			d(detaching) {
				if (detaching) detach(div1);
				destroy_component(uitag);
				if_block.d();
			}
		};
	}

	// (470:3) {:else}
	function create_else_block_2(ctx) {
		let t;

		return {
			c() {
				t = text(" ");
			},
			m(target, anchor) {
				insert(target, t, anchor);
			},
			p: noop,
			d(detaching) {
				if (detaching) detach(t);
			}
		};
	}

	// (468:3) {#if !(fields.role.validated && fields.role.valid) }
	function create_if_block_6(ctx) {
		let t;

		return {
			c() {
				t = text(/*roleHelper*/ ctx[28]);
			},
			m(target, anchor) {
				insert(target, t, anchor);
			},
			p(ctx, dirty) {
				if (dirty[0] & /*roleHelper*/ 268435456) set_data(t, /*roleHelper*/ ctx[28]);
			},
			d(detaching) {
				if (detaching) detach(t);
			}
		};
	}

	// (475:1) {#if fields.country.enabled}
	function create_if_block_3(ctx) {
		let div2;
		let label;
		let t0_value = /*fields*/ ctx[13].country.label + "";
		let t0;
		let t1;
		let div1;
		let div0;
		let select;
		let div0_class_value;
		let t2;
		let p;
		let p_class_value;
		let mounted;
		let dispose;
		let each_value = UserCommon.COUNTRIES;
		let each_blocks = [];

		for (let i = 0; i < each_value.length; i += 1) {
			each_blocks[i] = create_each_block$2(get_each_context$2(ctx, each_value, i));
		}

		function select_block_type_13(ctx, dirty) {
			if (!(/*fields*/ ctx[13].country.validated && /*fields*/ ctx[13].country.valid)) return create_if_block_4;
			return create_else_block_1;
		}

		let current_block_type = select_block_type_13(ctx);
		let if_block = current_block_type(ctx);

		return {
			c() {
				div2 = element("div");
				label = element("label");
				t0 = text(t0_value);
				t1 = space();
				div1 = element("div");
				div0 = element("div");
				select = element("select");

				for (let i = 0; i < each_blocks.length; i += 1) {
					each_blocks[i].c();
				}

				t2 = space();
				p = element("p");
				if_block.c();
				attr(label, "class", "label");
				if (/*fields*/ ctx[13].country.value === void 0) add_render_callback(() => /*select_change_handler*/ ctx[64].call(select));
				attr(div0, "class", div0_class_value = "select  " + /*countryClasses*/ ctx[27]);
				attr(div1, "class", "control");
				attr(p, "class", p_class_value = "help " + /*countryClasses*/ ctx[27]);
				attr(p, "id", "input-field-helper-country");
				attr(div2, "class", "user-form-field user-login-form-country field");
			},
			m(target, anchor) {
				insert(target, div2, anchor);
				append(div2, label);
				append(label, t0);
				append(div2, t1);
				append(div2, div1);
				append(div1, div0);
				append(div0, select);

				for (let i = 0; i < each_blocks.length; i += 1) {
					each_blocks[i].m(select, null);
				}

				select_option(select, /*fields*/ ctx[13].country.value);
				append(div2, t2);
				append(div2, p);
				if_block.m(p, null);

				if (!mounted) {
					dispose = [
						listen(select, "change", /*select_change_handler*/ ctx[64]),
						listen(select, "blur", /*onChange*/ ctx[33]),
						listen(select, "input", /*onInput*/ ctx[34])
					];

					mounted = true;
				}
			},
			p(ctx, dirty) {
				if (dirty[0] & /*fields*/ 8192 && t0_value !== (t0_value = /*fields*/ ctx[13].country.label + "")) set_data(t0, t0_value);

				if (dirty & /*UserCommon*/ 0) {
					each_value = UserCommon.COUNTRIES;
					let i;

					for (i = 0; i < each_value.length; i += 1) {
						const child_ctx = get_each_context$2(ctx, each_value, i);

						if (each_blocks[i]) {
							each_blocks[i].p(child_ctx, dirty);
						} else {
							each_blocks[i] = create_each_block$2(child_ctx);
							each_blocks[i].c();
							each_blocks[i].m(select, null);
						}
					}

					for (; i < each_blocks.length; i += 1) {
						each_blocks[i].d(1);
					}

					each_blocks.length = each_value.length;
				}

				if (dirty[0] & /*fields*/ 8192) {
					select_option(select, /*fields*/ ctx[13].country.value);
				}

				if (dirty[0] & /*countryClasses*/ 134217728 && div0_class_value !== (div0_class_value = "select  " + /*countryClasses*/ ctx[27])) {
					attr(div0, "class", div0_class_value);
				}

				if (current_block_type === (current_block_type = select_block_type_13(ctx)) && if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block.d(1);
					if_block = current_block_type(ctx);

					if (if_block) {
						if_block.c();
						if_block.m(p, null);
					}
				}

				if (dirty[0] & /*countryClasses*/ 134217728 && p_class_value !== (p_class_value = "help " + /*countryClasses*/ ctx[27])) {
					attr(p, "class", p_class_value);
				}
			},
			d(detaching) {
				if (detaching) detach(div2);
				destroy_each(each_blocks, detaching);
				if_block.d();
				mounted = false;
				run_all(dispose);
			}
		};
	}

	// (481:5) {#each UserCommon.COUNTRIES as variant}
	function create_each_block$2(ctx) {
		let option;
		let t_value = /*variant*/ ctx[73].title + "";
		let t;
		let option_value_value;

		return {
			c() {
				option = element("option");
				t = text(t_value);
				option.__value = option_value_value = /*variant*/ ctx[73].id;
				option.value = option.__value;
			},
			m(target, anchor) {
				insert(target, option, anchor);
				append(option, t);
			},
			p: noop,
			d(detaching) {
				if (detaching) detach(option);
			}
		};
	}

	// (490:3) {:else}
	function create_else_block_1(ctx) {
		let t;

		return {
			c() {
				t = text(" ");
			},
			m(target, anchor) {
				insert(target, t, anchor);
			},
			p: noop,
			d(detaching) {
				if (detaching) detach(t);
			}
		};
	}

	// (488:3) {#if !(fields.country.validated && fields.country.valid) }
	function create_if_block_4(ctx) {
		let t;

		return {
			c() {
				t = text(/*countryHelper*/ ctx[26]);
			},
			m(target, anchor) {
				insert(target, t, anchor);
			},
			p(ctx, dirty) {
				if (dirty[0] & /*countryHelper*/ 67108864) set_data(t, /*countryHelper*/ ctx[26]);
			},
			d(detaching) {
				if (detaching) detach(t);
			}
		};
	}

	// (496:2) {#if cancel.enabled}
	function create_if_block_2(ctx) {
		let button;
		let t_value = /*cancel*/ ctx[6].caption + "";
		let t;
		let mounted;
		let dispose;

		return {
			c() {
				button = element("button");
				t = text(t_value);
				attr(button, "class", "button is-outlined user-register-form-cancel");
			},
			m(target, anchor) {
				insert(target, button, anchor);
				append(button, t);

				if (!mounted) {
					dispose = listen(button, "click", function () {
						if (is_function(/*rejectForm*/ ctx[9])) /*rejectForm*/ ctx[9].apply(this, arguments);
					});

					mounted = true;
				}
			},
			p(new_ctx, dirty) {
				ctx = new_ctx;
				if (dirty[0] & /*cancel*/ 64 && t_value !== (t_value = /*cancel*/ ctx[6].caption + "")) set_data(t, t_value);
			},
			d(detaching) {
				if (detaching) detach(button);
				mounted = false;
				dispose();
			}
		};
	}

	// (499:2) {#if submit.enabled}
	function create_if_block_1(ctx) {
		let button;
		let t_value = /*submit*/ ctx[5].caption + "";
		let t;
		let mounted;
		let dispose;

		return {
			c() {
				button = element("button");
				t = text(t_value);
				button.disabled = /*formInvalid*/ ctx[31];
				attr(button, "class", "button is-primary is-hovered user-register-form-submit pull-right");
			},
			m(target, anchor) {
				insert(target, button, anchor);
				append(button, t);

				if (!mounted) {
					dispose = listen(button, "click", function () {
						if (is_function(/*tryModeAction*/ ctx[8])) /*tryModeAction*/ ctx[8].apply(this, arguments);
					});

					mounted = true;
				}
			},
			p(new_ctx, dirty) {
				ctx = new_ctx;
				if (dirty[0] & /*submit*/ 32 && t_value !== (t_value = /*submit*/ ctx[5].caption + "")) set_data(t, t_value);

				if (dirty[1] & /*formInvalid*/ 1) {
					button.disabled = /*formInvalid*/ ctx[31];
				}
			},
			d(detaching) {
				if (detaching) detach(button);
				mounted = false;
				dispose();
			}
		};
	}

	function create_fragment$3(ctx) {
		let current_block_type_index;
		let if_block;
		let if_block_anchor;
		let current;
		const if_block_creators = [create_if_block$1, create_else_block$1];
		const if_blocks = [];

		function select_block_type(ctx, dirty) {
			if (/*success*/ ctx[11]) return 0;
			return 1;
		}

		current_block_type_index = select_block_type(ctx);
		if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

		return {
			c() {
				if_block.c();
				if_block_anchor = empty();
			},
			m(target, anchor) {
				if_blocks[current_block_type_index].m(target, anchor);
				insert(target, if_block_anchor, anchor);
				current = true;
			},
			p(ctx, dirty) {
				let previous_block_index = current_block_type_index;
				current_block_type_index = select_block_type(ctx);

				if (current_block_type_index === previous_block_index) {
					if_blocks[current_block_type_index].p(ctx, dirty);
				} else {
					group_outros();

					transition_out(if_blocks[previous_block_index], 1, 1, () => {
						if_blocks[previous_block_index] = null;
					});

					check_outros();
					if_block = if_blocks[current_block_type_index];

					if (!if_block) {
						if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
						if_block.c();
					}

					transition_in(if_block, 1);
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			},
			i(local) {
				if (current) return;
				transition_in(if_block);
				current = true;
			},
			o(local) {
				transition_out(if_block);
				current = false;
			},
			d(detaching) {
				if_blocks[current_block_type_index].d(detaching);
				if (detaching) detach(if_block_anchor);
			}
		};
	}

	function instance$3($$self, $$props, $$invalidate) {
		const CLASS_ERR = UserCommon.CLASS_ERR;
		const CLASS_OK = UserCommon.CLASS_OK;
		let errorMessage = false;
		let formErrors = false;
		let success = false;

		let validationErrors = {
			username: false,
			email: false,
			tel: false,
			password: false,
			password2: false,
			active: false,
			country: false,
			role: false
		};

		let { validation = true } = $$props;
		const MODES = ["create", "update"];

		const MODES_FIELDS = {
			"create": [
				"username",
				"email",
				"tel",
				"password",
				"password2",
				"active",
				"country",
				"role"
			],
			"update": ["active", "country", "role"]
		};

		const SUCCESS_TEXT = {
			"create": "Учетная запись создана",
			"update": "Учетная запись обновлёна"
		};

		let dispatch = createEventDispatcher();
		let { mode = "create" } = $$props;
		let { loading = false } = $$props;
		let { formValid = false } = $$props;

		let { title = {
			__enabled: true,
			create: "Добавление учетной записи",
			update: "Редактирование учетной записи"
		} } = $$props;

		let { description = {
			__enabled: true,
			create: "Заполните пожалуйств форму",
			update: "Заполните пожалуйств форму"
		} } = $$props;

		let { username = UserCommon.fieldInit("username", { enabled: true }) } = $$props;
		let { password = UserCommon.fieldInit("password", { enabled: true }) } = $$props;
		let { password2 = UserCommon.fieldInit("password2", { enabled: true }) } = $$props;
		let { tel = UserCommon.fieldInit("tel", { enabled: true }) } = $$props;
		let { email = UserCommon.fieldInit("email", { enabled: true }) } = $$props;
		let { role = UserCommon.fieldInit("role", { enabled: true }) } = $$props;
		let { active = UserCommon.fieldInit("active", { enabled: true }) } = $$props;
		let { country = UserCommon.fieldInit("country", { enabled: true }) } = $$props;

		let fields = {
			username,
			password,
			tel,
			password2,
			email,
			active,
			role,
			country
		};

		let { submit = { caption: "Отправить", enabled: true } } = $$props;
		let { cancel = { caption: "Назад", enabled: true } } = $$props;
		let { user = {} } = $$props;
		let { userRoles = [] } = $$props;

		function initUserRoles(userRoleSet) {
			userRoleSet.forEach(userRole => {
				userRoles.push(UserCommon.ROLES.find(el => el.title === userRole));
			});
		}

		function onRoleChange(ev) {
			let data = {
				field: "role",
				value: ev.detail.map(t => t.title)
			};

			if (validation) {
				let res = UserCommon.validateField(data.field, data.value, fields);

				if (res === true) {
					setFieldValid(data.field);
					$$invalidate(37, role.value = data.value, role);
				} else {
					setFieldInvalid(data.field, res);
				}

				validateForm(data);
			} else {
				dispatch("input", data);
			}
		}

		onMount(() => {
			for (let t in user) {
				if (t === "role") {
					initUserRoles(user.role);
				} else if (Object.prototype.hasOwnProperty.call(fields, t)) {
					$$invalidate(13, fields[t].value = user[t], fields);
				}
			}

			for (let t in fields) {
				if (MODES_FIELDS[mode].indexOf(t) === -1) {
					$$invalidate(13, fields[t].enabled = false, fields);
				}
			}

			$$invalidate(13, fields);
		});

		function collectData() {
			let result = {};

			MODES_FIELDS[mode].forEach(fieldname => {
				if (Object.prototype.hasOwnProperty.call(fields, fieldname) && fields[fieldname].enabled) {
					result[fieldname] = fields[fieldname].value;
				}
			});

			if (mode === "update") {
				result._id = user._id;
			}

			return result;
		}

		function onChange(ev) {
			let data = {
				field: ev.target.name,
				value: ev.target.type === "checkbox"
				? ev.target.checked
				: ev.target.value
			};

			if (validation) {
				let res = UserCommon.validateField(data.field, data.value, fields);

				if (res === true) {
					setFieldValid(data.field);
				} else {
					setFieldInvalid(data.field, res);
				}

				validateForm(data);
			} else {
				dispatch("change", data);
			}
		}

		function setFieldInvalid(fieldName, errors) {
			$$invalidate(12, validationErrors[fieldName] = errors, validationErrors);
			$$invalidate(12, validationErrors);
			formErrors = true;
		}

		function setFieldValid(fieldName) {
			$$invalidate(12, validationErrors[fieldName] = false, validationErrors);

			formErrors = Object.values(validationErrors).some(val => {
				return val;
			});
		}

		function fieldIsValid(fieldName) {
			return !Array.isArray(validationErrors[fieldName]);
		}

		function fieldErrorsNotChanged(fieldName, errs) {
			let oldErrs = validationErrors[fieldName];

			if (oldErrs === false && errs === false) {
				return true;
			} else {
				if (Array.isArray(oldErrs) && Array.isArray(errs)) {
					return oldErrs.join(". ") === errs.join(". ");
				} else {
					return false;
				}
			}
		}

		function onInput(ev) {
			let data = {
				field: ev.target.name,
				input: ev.data,
				value: ev.target.type === "checkbox"
				? ev.target.checked
				: ev.target.value
			};

			if (validation) {
				let res = UserCommon.validateField(data.field, data.value, fields);

				if (res === true) {
					setFieldValid(data.field);
				} else {
					setFieldInvalid(data.field, res);
				}

				validateForm(data);
			} else {
				dispatch("input", data);
			}
		}

		function validateForm(freshData) {
			if (MODES.indexOf(mode) > -1) {
				let fieldsList = MODES_FIELDS[mode];
				let result = true;

				fieldsList.forEach(fieldName => {
					if (fields[fieldName].enabled && fields[fieldName].required) {
						let val = freshData && freshData.field === fieldName
						? freshData.value
						: fields[fieldName].value;

						let errs = UserCommon.validateField(fieldName, val, fields);

						if (Array.isArray(errs)) {
							result = false;
						}

						if (!fieldErrorsNotChanged(fieldName, errs)) {
							if (Array.isArray(errs)) {
								setFieldInvalid(fieldName, errs);
							} else {
								setFieldValid(fieldName);
							}
						}
					}
				});

				$$invalidate(36, formValid = result);
				return result;
			} else {
				$$invalidate(36, formValid = false);
				return false;
			}
		}

		function setFormError(error) {
			$$invalidate(36, formValid = false);
			$$invalidate(10, errorMessage = Array.isArray(error) ? error.join(", ") : error);
		}

		let { tryModeAction = e => {
			e && e.preventDefault();
			$$invalidate(10, errorMessage = false);
			dispatch(mode, collectData());
			return false;
		} } = $$props;

		function showSuccess() {
			$$invalidate(11, success = true);
		}

		let { rejectForm = () => {
			$$invalidate(35, loading = true);
			dispatch("rejectForm");
		} } = $$props;

		function setLoading() {
			$$invalidate(35, loading = true);
		}

		function resetLoading() {
			$$invalidate(35, loading = false);
		}

		function input_input_handler() {
			fields.username.value = this.value;
			$$invalidate(13, fields);
		}

		function input_input_handler_1() {
			fields.email.value = this.value;
			$$invalidate(13, fields);
		}

		function input_input_handler_2() {
			fields.password.value = this.value;
			$$invalidate(13, fields);
		}

		function input_input_handler_3() {
			fields.password2.value = this.value;
			$$invalidate(13, fields);
		}

		function input_input_handler_4() {
			fields.tel.value = this.value;
			$$invalidate(13, fields);
		}

		function input_change_handler() {
			fields.active.value = this.checked;
			$$invalidate(13, fields);
		}

		function uitag_error_binding(value) {
			roleInvalid = value;
			($$invalidate(30, roleInvalid), $$invalidate(37, role));
		}

		function uitag_items_binding(value) {
			userRoles = value;
			$$invalidate(0, userRoles);
		}

		function select_change_handler() {
			fields.country.value = select_value(this);
			$$invalidate(13, fields);
		}

		$$self.$set = $$props => {
			if ("validation" in $$props) $$invalidate(38, validation = $$props.validation);
			if ("mode" in $$props) $$invalidate(2, mode = $$props.mode);
			if ("loading" in $$props) $$invalidate(35, loading = $$props.loading);
			if ("formValid" in $$props) $$invalidate(36, formValid = $$props.formValid);
			if ("title" in $$props) $$invalidate(3, title = $$props.title);
			if ("description" in $$props) $$invalidate(4, description = $$props.description);
			if ("username" in $$props) $$invalidate(41, username = $$props.username);
			if ("password" in $$props) $$invalidate(42, password = $$props.password);
			if ("password2" in $$props) $$invalidate(43, password2 = $$props.password2);
			if ("tel" in $$props) $$invalidate(44, tel = $$props.tel);
			if ("email" in $$props) $$invalidate(45, email = $$props.email);
			if ("role" in $$props) $$invalidate(37, role = $$props.role);
			if ("active" in $$props) $$invalidate(46, active = $$props.active);
			if ("country" in $$props) $$invalidate(47, country = $$props.country);
			if ("submit" in $$props) $$invalidate(5, submit = $$props.submit);
			if ("cancel" in $$props) $$invalidate(6, cancel = $$props.cancel);
			if ("user" in $$props) $$invalidate(7, user = $$props.user);
			if ("userRoles" in $$props) $$invalidate(0, userRoles = $$props.userRoles);
			if ("tryModeAction" in $$props) $$invalidate(8, tryModeAction = $$props.tryModeAction);
			if ("rejectForm" in $$props) $$invalidate(9, rejectForm = $$props.rejectForm);
		};

		let telHelper;
		let telClasses;
		let usernameHelper;
		let usernameClasses;
		let emailHelper;
		let emailClasses;
		let passwordHelper;
		let passwordClasses;
		let password2Helper;
		let password2Classes;
		let activeHelper;
		let activeClasses;
		let countryHelper;
		let countryClasses;
		let roleHelper;
		let roleClasses;
		let roleInvalid;
		let formInvalid;

		$$self.$$.update = () => {
			if ($$self.$$.dirty[0] & /*validationErrors*/ 4096 | $$self.$$.dirty[1] & /*tel*/ 8192) {
				 $$invalidate(14, telHelper = validationErrors.tel
				? validationErrors.tel.join(", ")
				: tel.placeholder);
			}

			if ($$self.$$.dirty[0] & /*validationErrors*/ 4096) {
				 $$invalidate(15, telClasses = validationErrors.tel ? CLASS_ERR : CLASS_OK);
			}

			if ($$self.$$.dirty[0] & /*validationErrors*/ 4096 | $$self.$$.dirty[1] & /*username*/ 1024) {
				 $$invalidate(16, usernameHelper = validationErrors.username
				? validationErrors.username.join(", ")
				: username.placeholder);
			}

			if ($$self.$$.dirty[0] & /*validationErrors*/ 4096) {
				 $$invalidate(17, usernameClasses = validationErrors.username ? CLASS_ERR : CLASS_OK);
			}

			if ($$self.$$.dirty[0] & /*validationErrors*/ 4096 | $$self.$$.dirty[1] & /*email*/ 16384) {
				 $$invalidate(18, emailHelper = validationErrors.email
				? validationErrors.email.join(", ")
				: email.placeholder);
			}

			if ($$self.$$.dirty[0] & /*validationErrors*/ 4096) {
				 $$invalidate(19, emailClasses = validationErrors.email ? CLASS_ERR : CLASS_OK);
			}

			if ($$self.$$.dirty[0] & /*validationErrors*/ 4096 | $$self.$$.dirty[1] & /*password*/ 2048) {
				 $$invalidate(20, passwordHelper = validationErrors.password
				? validationErrors.password.join(", ")
				: password.placeholder);
			}

			if ($$self.$$.dirty[0] & /*validationErrors*/ 4096) {
				 $$invalidate(21, passwordClasses = validationErrors.password ? CLASS_ERR : CLASS_OK);
			}

			if ($$self.$$.dirty[0] & /*validationErrors*/ 4096 | $$self.$$.dirty[1] & /*password2*/ 4096) {
				 $$invalidate(22, password2Helper = validationErrors.password2
				? validationErrors.password2.join(", ")
				: password2.placeholder);
			}

			if ($$self.$$.dirty[0] & /*validationErrors*/ 4096) {
				 $$invalidate(23, password2Classes = validationErrors.password2 ? CLASS_ERR : CLASS_OK);
			}

			if ($$self.$$.dirty[0] & /*validationErrors*/ 4096 | $$self.$$.dirty[1] & /*active*/ 32768) {
				 $$invalidate(24, activeHelper = validationErrors.active
				? validationErrors.active.join(", ")
				: active.placeholder);
			}

			if ($$self.$$.dirty[0] & /*validationErrors*/ 4096) {
				 $$invalidate(25, activeClasses = validationErrors.active ? CLASS_ERR : CLASS_OK);
			}

			if ($$self.$$.dirty[0] & /*validationErrors*/ 4096 | $$self.$$.dirty[1] & /*country*/ 65536) {
				 $$invalidate(26, countryHelper = validationErrors.country
				? validationErrors.country.join(", ")
				: country.placeholder);
			}

			if ($$self.$$.dirty[0] & /*validationErrors*/ 4096) {
				 $$invalidate(27, countryClasses = validationErrors.country ? CLASS_ERR : CLASS_OK);
			}

			if ($$self.$$.dirty[0] & /*validationErrors*/ 4096 | $$self.$$.dirty[1] & /*role*/ 64) {
				 $$invalidate(28, roleHelper = validationErrors.role
				? validationErrors.role.join(", ")
				: role.placeholder);
			}

			if ($$self.$$.dirty[0] & /*validationErrors*/ 4096) {
				 $$invalidate(29, roleClasses = validationErrors.role ? CLASS_ERR : CLASS_OK);
			}

			if ($$self.$$.dirty[1] & /*role*/ 64) {
				 $$invalidate(30, roleInvalid = role.validated && !role.valid);
			}

			if ($$self.$$.dirty[1] & /*formValid*/ 32) {
				 $$invalidate(31, formInvalid = formValid === false);
			}
		};

		return [
			userRoles,
			SUCCESS_TEXT,
			mode,
			title,
			description,
			submit,
			cancel,
			user,
			tryModeAction,
			rejectForm,
			errorMessage,
			success,
			validationErrors,
			fields,
			telHelper,
			telClasses,
			usernameHelper,
			usernameClasses,
			emailHelper,
			emailClasses,
			passwordHelper,
			passwordClasses,
			password2Helper,
			password2Classes,
			activeHelper,
			activeClasses,
			countryHelper,
			countryClasses,
			roleHelper,
			roleClasses,
			roleInvalid,
			formInvalid,
			onRoleChange,
			onChange,
			onInput,
			loading,
			formValid,
			role,
			validation,
			MODES,
			MODES_FIELDS,
			username,
			password,
			password2,
			tel,
			email,
			active,
			country,
			setFieldInvalid,
			setFieldValid,
			fieldIsValid,
			fieldErrorsNotChanged,
			setFormError,
			showSuccess,
			setLoading,
			resetLoading,
			input_input_handler,
			input_input_handler_1,
			input_input_handler_2,
			input_input_handler_3,
			input_input_handler_4,
			input_change_handler,
			uitag_error_binding,
			uitag_items_binding,
			select_change_handler
		];
	}

	class Ui_edit extends SvelteComponent {
		constructor(options) {
			super();

			init(
				this,
				options,
				instance$3,
				create_fragment$3,
				safe_not_equal,
				{
					validation: 38,
					MODES: 39,
					MODES_FIELDS: 40,
					SUCCESS_TEXT: 1,
					mode: 2,
					loading: 35,
					formValid: 36,
					title: 3,
					description: 4,
					username: 41,
					password: 42,
					password2: 43,
					tel: 44,
					email: 45,
					role: 37,
					active: 46,
					country: 47,
					submit: 5,
					cancel: 6,
					user: 7,
					userRoles: 0,
					setFieldInvalid: 48,
					setFieldValid: 49,
					fieldIsValid: 50,
					fieldErrorsNotChanged: 51,
					setFormError: 52,
					tryModeAction: 8,
					showSuccess: 53,
					rejectForm: 9,
					setLoading: 54,
					resetLoading: 55
				},
				[-1, -1, -1]
			);
		}

		get MODES() {
			return this.$$.ctx[39];
		}

		get MODES_FIELDS() {
			return this.$$.ctx[40];
		}

		get SUCCESS_TEXT() {
			return this.$$.ctx[1];
		}

		get setFieldInvalid() {
			return this.$$.ctx[48];
		}

		get setFieldValid() {
			return this.$$.ctx[49];
		}

		get fieldIsValid() {
			return this.$$.ctx[50];
		}

		get fieldErrorsNotChanged() {
			return this.$$.ctx[51];
		}

		get setFormError() {
			return this.$$.ctx[52];
		}

		get showSuccess() {
			return this.$$.ctx[53];
		}

		get setLoading() {
			return this.$$.ctx[54];
		}

		get resetLoading() {
			return this.$$.ctx[55];
		}
	}

	/* global notFramework */

	const ERROR_DEFAULT = 'Что пошло не так.';

	const BREADCRUMBS = [{
		title: 'Аккаунт',
		url: '/profile'
	}];

	class ncProfile extends notFramework.notController {
		constructor(app, params) {
			notFramework.notCommon.log('init site app ', params, 'profile');
			super(app);
			this.ui = {};
			this.els = {};
			this.setModuleName('user');
			this.buildFrame();
			Breadcrumbs.setHead(BREADCRUMBS).render({
				root: app.getOptions('router:root'),
				target: this.els.top,
				navigate: (url) => app.getWorking('router').navigate(url)
			});
			this.route();
			return this;
		}
	setBreadcrumbs(tail) {
		Breadcrumbs.setTail(tail).update();
	}

		buildFrame() {
			let el = document.querySelector(this.app.getOptions('crud.containerSelector', 'body'));
			while (el.firstChild) {
				el.removeChild(el.firstChild);
			}
			this.els.top = document.createElement('div');
			this.els.top.id = 'crud-top';
			this.els.top.classList.add('box');
			el.appendChild(this.els.top);
			this.els.main = document.createElement('div');
			this.els.main.id = 'crud-main';
			this.els.main.classList.add('box');
			el.appendChild(this.els.main);
			this.els.bottom = document.createElement('div');
			this.els.bottom.id = 'crud-bottom';
			this.els.bottom.classList.add('box');
			el.appendChild(this.els.bottom);
		}

		route(params = []) {
			this.setBreadcrumbs([]);
			return this.runUpdate(params);
		}

		runUpdate(params) {
			if (this.ui.update) {
				return;
			} else {
				this.$destroyUI();
			}
			this.make.user({
					_id: params[0]
				}).$profile().then((res) => {
					if (res.status === 'ok') {
						this.ui.update = new Ui_edit({
							target: this.els.main,
							props: {
								mode: 'update',
								user: notFramework.notCommon.stripProxy(res.result)
							}
						});
						this.ui.update.$on('update', (ev) => {
							this.onUserUpdateFormSubmit(ev.detail);
						});
						this.ui.update.$on('rejectForm', () => UserCommon.goDashboard(this.app));
					} else {
						this.ui.error = new Ui_error({
							target: this.els.main,
							props: {
								title: 'Произошла ошибка',
								message: res.error ? res.error : ERROR_DEFAULT
							}
						});
					}
				})
				.catch(this.error.bind(this));
		}

		$destroyUI() {
			for (let name in this.ui) {
				this.ui[name].$destroy && this.ui[name].$destroy();
				delete this.ui[name];
			}
		}

		goProfile() {
			this.$destroyUI();
			this.route();
		}

		onUserUpdateFormSubmit(user) {
			this.ui.update.setLoading();
			this.make.user(user).$update()
				.then((res) => {
					this.log(res);
					this.showResult(this.ui.update, res);
					if (!UserCommon.isError(res) && !res.error) {
						setTimeout(() => this.goProfile(), 3000);
					}
				})
				.catch((e) => {
					this.showResult(this.ui.update, e);
				});
		}

		showResult(ui, res) {
			ui.resetLoading();
			if (UserCommon.isError(res)) {
				notFramework.notCommon.report(res);
			} else {
				if (res.errors && Object.keys(res.errors).length > 0) {
					if (!Array.isArray(res.error)) {
						res.error = [];
					}
					Object.keys(res.errors).forEach((fieldName) => {
						ui.setFieldInvalid(fieldName, res.errors[fieldName]);
						res.error.push(...res.errors[fieldName]);
					});
				}
				if (res.error) {
					ui.setFormError(res.error);
				}
				if (!res.error) {
					ui.showSuccess();
				}
			}
		}


	}

	let manifest = {
		router: {
			manifest: [
				{
					paths: ['logout'],
					controller: ncLogout
				},
				{
					paths: ['profile'],
					controller: ncProfile
				}
			]
		},
		templates: {},
		paths: {},
		menu:[
			{
				title: 	'Аккаунт',
				url: 		'/profile'
			}
		]
	};

	exports.manifest = manifest;
	exports.ncLogout = ncLogout;

	return exports;

}({}));
