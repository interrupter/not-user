var notUser = (function (exports, notBulma) {
	'use strict';

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
	    var invalidType = _typeof(input);

	    if (input === null) invalidType = 'null';else if (invalidType === 'object') invalidType = input.constructor.name;
	    throw new TypeError("Expected a string but received a ".concat(invalidType));
	  }
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(assertString_1);

	var require$$0$2 = assertString_1;

	var toDate_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = toDate;

	var _assertString = _interopRequireDefault(require$$0$2);

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
	exports.commaDecimal = exports.dotDecimal = exports.farsiLocales = exports.arabicLocales = exports.englishLocales = exports.decimal = exports.alphanumeric = exports.alpha = void 0;
	var alpha = {
	  'en-US': /^[A-Z]+$/i,
	  'az-AZ': /^[A-VXYZÇƏĞİıÖŞÜ]+$/i,
	  'bg-BG': /^[А-Я]+$/i,
	  'cs-CZ': /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
	  'da-DK': /^[A-ZÆØÅ]+$/i,
	  'de-DE': /^[A-ZÄÖÜß]+$/i,
	  'el-GR': /^[Α-ώ]+$/i,
	  'es-ES': /^[A-ZÁÉÍÑÓÚÜ]+$/i,
	  'fa-IR': /^[ابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی]+$/i,
	  'fi-FI': /^[A-ZÅÄÖ]+$/i,
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
	  'th-TH': /^[ก-๐\s]+$/i,
	  'tr-TR': /^[A-ZÇĞİıÖŞÜ]+$/i,
	  'uk-UA': /^[А-ЩЬЮЯЄIЇҐі]+$/i,
	  'vi-VN': /^[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴĐÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸ]+$/i,
	  'ku-IQ': /^[ئابپتجچحخدرڕزژسشعغفڤقکگلڵمنوۆھەیێيطؤثآإأكضصةظذ]+$/i,
	  ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/,
	  he: /^[א-ת]+$/,
	  fa: /^['آاءأؤئبپتثجچحخدذرزژسشصضطظعغفقکگلمنوهةی']+$/i,
	  'hi-IN': /^[\u0900-\u0961]+[\u0972-\u097F]*$/i
	};
	exports.alpha = alpha;
	var alphanumeric = {
	  'en-US': /^[0-9A-Z]+$/i,
	  'az-AZ': /^[0-9A-VXYZÇƏĞİıÖŞÜ]+$/i,
	  'bg-BG': /^[0-9А-Я]+$/i,
	  'cs-CZ': /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
	  'da-DK': /^[0-9A-ZÆØÅ]+$/i,
	  'de-DE': /^[0-9A-ZÄÖÜß]+$/i,
	  'el-GR': /^[0-9Α-ω]+$/i,
	  'es-ES': /^[0-9A-ZÁÉÍÑÓÚÜ]+$/i,
	  'fi-FI': /^[0-9A-ZÅÄÖ]+$/i,
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
	  'th-TH': /^[ก-๙\s]+$/i,
	  'tr-TR': /^[0-9A-ZÇĞİıÖŞÜ]+$/i,
	  'uk-UA': /^[0-9А-ЩЬЮЯЄIЇҐі]+$/i,
	  'ku-IQ': /^[٠١٢٣٤٥٦٧٨٩0-9ئابپتجچحخدرڕزژسشعغفڤقکگلڵمنوۆھەیێيطؤثآإأكضصةظذ]+$/i,
	  'vi-VN': /^[0-9A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴĐÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸ]+$/i,
	  ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/,
	  he: /^[0-9א-ת]+$/,
	  fa: /^['0-9آاءأؤئبپتثجچحخدذرزژسشصضطظعغفقکگلمنوهةی۱۲۳۴۵۶۷۸۹۰']+$/i,
	  'hi-IN': /^[\u0900-\u0963]+[\u0966-\u097F]*$/i
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
	}

	var farsiLocales = ['IR', 'AF'];
	exports.farsiLocales = farsiLocales;

	for (var _locale2, _i2 = 0; _i2 < farsiLocales.length; _i2++) {
	  _locale2 = "fa-".concat(farsiLocales[_i2]);
	  alphanumeric[_locale2] = alphanumeric.fa;
	  decimal[_locale2] = decimal.ar;
	} // Source: https://en.wikipedia.org/wiki/Decimal_mark


	var dotDecimal = ['ar-EG', 'ar-LB', 'ar-LY'];
	exports.dotDecimal = dotDecimal;
	var commaDecimal = ['bg-BG', 'cs-CZ', 'da-DK', 'de-DE', 'el-GR', 'en-ZM', 'es-ES', 'fr-CA', 'fr-FR', 'id-ID', 'it-IT', 'ku-IQ', 'hi-IN', 'hu-HU', 'nb-NO', 'nn-NO', 'nl-NL', 'pl-PL', 'pt-PT', 'ru-RU', 'sl-SI', 'sr-RS@latin', 'sr-RS', 'sv-SE', 'tr-TR', 'uk-UA', 'vi-VN'];
	exports.commaDecimal = commaDecimal;

	for (var _i3 = 0; _i3 < dotDecimal.length; _i3++) {
	  decimal[dotDecimal[_i3]] = decimal['en-US'];
	}

	for (var _i4 = 0; _i4 < commaDecimal.length; _i4++) {
	  decimal[commaDecimal[_i4]] = ',';
	}

	alpha['fr-CA'] = alpha['fr-FR'];
	alphanumeric['fr-CA'] = alphanumeric['fr-FR'];
	alpha['pt-BR'] = alpha['pt-PT'];
	alphanumeric['pt-BR'] = alphanumeric['pt-PT'];
	decimal['pt-BR'] = decimal['pt-PT']; // see #862

	alpha['pl-Pl'] = alpha['pl-PL'];
	alphanumeric['pl-Pl'] = alphanumeric['pl-PL'];
	decimal['pl-Pl'] = decimal['pl-PL']; // see #1455

	alpha['fa-AF'] = alpha.fa;
	});

	unwrapExports(alpha_1);
	alpha_1.commaDecimal;
	alpha_1.dotDecimal;
	alpha_1.farsiLocales;
	alpha_1.arabicLocales;
	alpha_1.englishLocales;
	alpha_1.decimal;
	alpha_1.alphanumeric;
	alpha_1.alpha;

	var _alpha = alpha_1;

	var isFloat_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isFloat;
	exports.locales = void 0;

	var _assertString = _interopRequireDefault(require$$0$2);



	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function isFloat(str, options) {
	  (0, _assertString.default)(str);
	  options = options || {};
	  var float = new RegExp("^(?:[-+])?(?:[0-9]+)?(?:\\".concat(options.locale ? _alpha.decimal[options.locale] : '.', "[0-9]*)?(?:[eE][\\+\\-]?(?:[0-9]+))?$"));

	  if (str === '' || str === '.' || str === '-' || str === '+') {
	    return false;
	  }

	  var value = parseFloat(str.replace(',', '.'));
	  return float.test(str) && (!options.hasOwnProperty('min') || value >= options.min) && (!options.hasOwnProperty('max') || value <= options.max) && (!options.hasOwnProperty('lt') || value < options.lt) && (!options.hasOwnProperty('gt') || value > options.gt);
	}

	var locales = Object.keys(_alpha.decimal);
	exports.locales = locales;
	});

	unwrapExports(isFloat_1);
	isFloat_1.locales;

	var require$$32 = isFloat_1;

	var toFloat_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = toFloat;

	var _isFloat = _interopRequireDefault(require$$32);

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

	var _assertString = _interopRequireDefault(require$$0$2);

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

	var _assertString = _interopRequireDefault(require$$0$2);

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

	var _assertString = _interopRequireDefault(require$$0$2);

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

	var require$$1$3 = toString_1;

	var require$$0$1 = merge_1;

	var contains_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = contains;

	var _assertString = _interopRequireDefault(require$$0$2);

	var _toString = _interopRequireDefault(require$$1$3);

	var _merge = _interopRequireDefault(require$$0$1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var defaulContainsOptions = {
	  ignoreCase: false,
	  minOccurrences: 1
	};

	function contains(str, elem, options) {
	  (0, _assertString.default)(str);
	  options = (0, _merge.default)(options, defaulContainsOptions);

	  if (options.ignoreCase) {
	    return str.toLowerCase().split((0, _toString.default)(elem).toLowerCase()).length > options.minOccurrences;
	  }

	  return str.split((0, _toString.default)(elem)).length > options.minOccurrences;
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

	var _assertString = _interopRequireDefault(require$$0$2);

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

	var _assertString = _interopRequireDefault(require$$0$2);

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

	var _assertString = _interopRequireDefault(require$$0$2);

	var _merge = _interopRequireDefault(require$$0$1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var default_fqdn_options = {
	  require_tld: true,
	  allow_underscores: false,
	  allow_trailing_dot: false,
	  allow_numeric_tld: false,
	  allow_wildcard: false
	};

	function isFQDN(str, options) {
	  (0, _assertString.default)(str);
	  options = (0, _merge.default)(options, default_fqdn_options);
	  /* Remove the optional trailing dot before checking validity */

	  if (options.allow_trailing_dot && str[str.length - 1] === '.') {
	    str = str.substring(0, str.length - 1);
	  }
	  /* Remove the optional wildcard before checking validity */


	  if (options.allow_wildcard === true && str.indexOf('*.') === 0) {
	    str = str.substring(2);
	  }

	  var parts = str.split('.');
	  var tld = parts[parts.length - 1];

	  if (options.require_tld) {
	    // disallow fqdns without tld
	    if (parts.length < 2) {
	      return false;
	    }

	    if (!/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(tld)) {
	      return false;
	    } // disallow spaces


	    if (/\s/.test(tld)) {
	      return false;
	    }
	  } // reject numeric TLDs


	  if (!options.allow_numeric_tld && /^\d+$/.test(tld)) {
	    return false;
	  }

	  return parts.every(function (part) {
	    if (part.length > 63) {
	      return false;
	    }

	    if (!/^[a-z_\u00a1-\uffff0-9-]+$/i.test(part)) {
	      return false;
	    } // disallow full-width chars


	    if (/[\uff01-\uff5e]/.test(part)) {
	      return false;
	    } // disallow parts starting or ending with hyphen


	    if (/^-|-$/.test(part)) {
	      return false;
	    }

	    if (!options.allow_underscores && /_/.test(part)) {
	      return false;
	    }

	    return true;
	  });
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

	var _assertString = _interopRequireDefault(require$$0$2);

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
	var IPv4SegmentFormat = '(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])';
	var IPv4AddressFormat = "(".concat(IPv4SegmentFormat, "[.]){3}").concat(IPv4SegmentFormat);
	var IPv4AddressRegExp = new RegExp("^".concat(IPv4AddressFormat, "$"));
	var IPv6SegmentFormat = '(?:[0-9a-fA-F]{1,4})';
	var IPv6AddressRegExp = new RegExp('^(' + "(?:".concat(IPv6SegmentFormat, ":){7}(?:").concat(IPv6SegmentFormat, "|:)|") + "(?:".concat(IPv6SegmentFormat, ":){6}(?:").concat(IPv4AddressFormat, "|:").concat(IPv6SegmentFormat, "|:)|") + "(?:".concat(IPv6SegmentFormat, ":){5}(?::").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,2}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){4}(?:(:").concat(IPv6SegmentFormat, "){0,1}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,3}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){3}(?:(:").concat(IPv6SegmentFormat, "){0,2}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,4}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){2}(?:(:").concat(IPv6SegmentFormat, "){0,3}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,5}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){1}(?:(:").concat(IPv6SegmentFormat, "){0,4}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,6}|:)|") + "(?::((?::".concat(IPv6SegmentFormat, "){0,5}:").concat(IPv4AddressFormat, "|(?::").concat(IPv6SegmentFormat, "){1,7}|:))") + ')(%[0-9a-zA-Z-.:]{1,})?$');

	function isIP(str) {
	  var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
	  (0, _assertString.default)(str);
	  version = String(version);

	  if (!version) {
	    return isIP(str, 4) || isIP(str, 6);
	  }

	  if (version === '4') {
	    if (!IPv4AddressRegExp.test(str)) {
	      return false;
	    }

	    var parts = str.split('.').sort(function (a, b) {
	      return a - b;
	    });
	    return parts[3] <= 255;
	  }

	  if (version === '6') {
	    return !!IPv6AddressRegExp.test(str);
	  }

	  return false;
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(isIP_1);

	var require$$49 = isByteLength_1;

	var require$$12 = isFQDN_1;

	var require$$10 = isIP_1;

	var isEmail_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isEmail;

	var _assertString = _interopRequireDefault(require$$0$2);

	var _merge = _interopRequireDefault(require$$0$1);

	var _isByteLength = _interopRequireDefault(require$$49);

	var _isFQDN = _interopRequireDefault(require$$12);

	var _isIP = _interopRequireDefault(require$$10);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var default_email_options = {
	  allow_display_name: false,
	  require_display_name: false,
	  allow_utf8_local_part: true,
	  require_tld: true,
	  blacklisted_chars: '',
	  ignore_max_length: false,
	  host_blacklist: []
	};
	/* eslint-disable max-len */

	/* eslint-disable no-control-regex */

	var splitNameAddress = /^([^\x00-\x1F\x7F-\x9F\cX]+)</i;
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
	  var display_name_without_quotes = display_name.replace(/^"(.+)"$/, '$1'); // display name with only spaces is not valid

	  if (!display_name_without_quotes.trim()) {
	    return false;
	  } // check whether display name contains illegal character


	  var contains_illegal = /[\.";<>]/.test(display_name_without_quotes);

	  if (contains_illegal) {
	    // if contains illegal characters,
	    // must to be enclosed in double-quotes, otherwise it's not a valid display name
	    if (display_name_without_quotes === display_name) {
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
	      var display_name = display_email[1]; // Remove display name and angle brackets to get email address
	      // Can be done in the regex but will introduce a ReDOS (See  #1597 for more info)

	      str = str.replace(display_name, '').replace(/(^<|>$)/g, ''); // sometimes need to trim the last space to get the display name
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
	  var lower_domain = domain.toLowerCase();

	  if (options.host_blacklist.includes(lower_domain)) {
	    return false;
	  }

	  var user = parts.join('@');

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

	    if (!(0, _isByteLength.default)(username.replace(/\./g, ''), {
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

	  if (options.ignore_max_length === false && (!(0, _isByteLength.default)(user, {
	    max: 64
	  }) || !(0, _isByteLength.default)(domain, {
	    max: 254
	  }))) {
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

	  for (var _i = 0; _i < user_parts.length; _i++) {
	    if (!pattern.test(user_parts[_i])) {
	      return false;
	    }
	  }

	  if (options.blacklisted_chars) {
	    if (user.search(new RegExp("[".concat(options.blacklisted_chars, "]+"), 'g')) !== -1) return false;
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

	var _assertString = _interopRequireDefault(require$$0$2);

	var _isFQDN = _interopRequireDefault(require$$12);

	var _isIP = _interopRequireDefault(require$$10);

	var _merge = _interopRequireDefault(require$$0$1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

	function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

	function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

	function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

	function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

	function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

	/*
	options for isURL method

	require_protocol - if set as true isURL will return false if protocol is not present in the URL
	require_valid_protocol - isURL will check if the URL's protocol is present in the protocols option
	protocols - valid protocols can be modified with this option
	require_host - if set as false isURL will not check if host is present in the URL
	require_port - if set as true isURL will check if port is present in the URL
	allow_protocol_relative_urls - if set as true protocol relative URLs will be allowed
	validate_length - if set as false isURL will skip string length validation (IE maximum is 2083)

	*/
	var default_url_options = {
	  protocols: ['http', 'https', 'ftp'],
	  require_tld: true,
	  require_protocol: false,
	  require_host: true,
	  require_port: false,
	  require_valid_protocol: true,
	  allow_underscores: false,
	  allow_trailing_dot: false,
	  allow_protocol_relative_urls: false,
	  allow_fragments: true,
	  allow_query_components: true,
	  validate_length: true
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

	  if (!url || /[\s<>]/.test(url)) {
	    return false;
	  }

	  if (url.indexOf('mailto:') === 0) {
	    return false;
	  }

	  options = (0, _merge.default)(options, default_url_options);

	  if (options.validate_length && url.length >= 2083) {
	    return false;
	  }

	  if (!options.allow_fragments && url.includes('#')) {
	    return false;
	  }

	  if (!options.allow_query_components && (url.includes('?') || url.includes('&'))) {
	    return false;
	  }

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

	    if (split[0] === '') {
	      return false;
	    }

	    auth = split.shift();

	    if (auth.indexOf(':') >= 0 && auth.split(':').length > 2) {
	      return false;
	    }

	    var _auth$split = auth.split(':'),
	        _auth$split2 = _slicedToArray(_auth$split, 2),
	        user = _auth$split2[0],
	        password = _auth$split2[1];

	    if (user === '' && password === '') {
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

	  if (port_str !== null && port_str.length > 0) {
	    port = parseInt(port_str, 10);

	    if (!/^[0-9]+$/.test(port_str) || port <= 0 || port > 65535) {
	      return false;
	    }
	  } else if (options.require_port) {
	    return false;
	  }

	  if (options.host_whitelist) {
	    return checkHost(host, options.host_whitelist);
	  }

	  if (!(0, _isIP.default)(host) && !(0, _isFQDN.default)(host, options) && (!ipv6 || !(0, _isIP.default)(ipv6, 6))) {
	    return false;
	  }

	  host = host || ipv6;

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

	var _assertString = _interopRequireDefault(require$$0$2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var macAddress = /^(?:[0-9a-fA-F]{2}([-:\s]))([0-9a-fA-F]{2}\1){4}([0-9a-fA-F]{2})$/;
	var macAddressNoSeparators = /^([0-9a-fA-F]){12}$/;
	var macAddressWithDots = /^([0-9a-fA-F]{4}\.){2}([0-9a-fA-F]{4})$/;

	function isMACAddress(str, options) {
	  (0, _assertString.default)(str);
	  /**
	   * @deprecated `no_colons` TODO: remove it in the next major
	  */

	  if (options && (options.no_colons || options.no_separators)) {
	    return macAddressNoSeparators.test(str);
	  }

	  return macAddress.test(str) || macAddressWithDots.test(str);
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

	var _assertString = _interopRequireDefault(require$$0$2);

	var _isIP = _interopRequireDefault(require$$10);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var subnetMaybe = /^\d{1,3}$/;
	var v4Subnet = 32;
	var v6Subnet = 128;

	function isIPRange(str) {
	  var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
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

	  var isValidIP = (0, _isIP.default)(parts[0], version);

	  if (!isValidIP) {
	    return false;
	  } // Define valid subnet according to IP's version


	  var expectedSubnet = null;

	  switch (String(version)) {
	    case '4':
	      expectedSubnet = v4Subnet;
	      break;

	    case '6':
	      expectedSubnet = v6Subnet;
	      break;

	    default:
	      expectedSubnet = (0, _isIP.default)(parts[0], '6') ? v6Subnet : v4Subnet;
	  }

	  return parts[1] <= expectedSubnet && parts[1] >= 0;
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

	var _merge = _interopRequireDefault(require$$0$1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

	function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

	function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

	function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

	function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

	function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

	function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

	var default_date_options = {
	  format: 'YYYY/MM/DD',
	  delimiters: ['/', '-'],
	  strictMode: false
	};

	function isValidFormat(format) {
	  return /(^(y{4}|y{2})[.\/-](m{1,2})[.\/-](d{1,2})$)|(^(m{1,2})[.\/-](d{1,2})[.\/-]((y{4}|y{2})$))|(^(d{1,2})[.\/-](m{1,2})[.\/-]((y{4}|y{2})$))/gi.test(format);
	}

	function zip(date, format) {
	  var zippedArr = [],
	      len = Math.min(date.length, format.length);

	  for (var i = 0; i < len; i++) {
	    zippedArr.push([date[i], format[i]]);
	  }

	  return zippedArr;
	}

	function isDate(input, options) {
	  if (typeof options === 'string') {
	    // Allow backward compatbility for old format isDate(input [, format])
	    options = (0, _merge.default)({
	      format: options
	    }, default_date_options);
	  } else {
	    options = (0, _merge.default)(options, default_date_options);
	  }

	  if (typeof input === 'string' && isValidFormat(options.format)) {
	    var formatDelimiter = options.delimiters.find(function (delimiter) {
	      return options.format.indexOf(delimiter) !== -1;
	    });
	    var dateDelimiter = options.strictMode ? formatDelimiter : options.delimiters.find(function (delimiter) {
	      return input.indexOf(delimiter) !== -1;
	    });
	    var dateAndFormat = zip(input.split(dateDelimiter), options.format.toLowerCase().split(formatDelimiter));
	    var dateObj = {};

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

	  if (!options.strictMode) {
	    return Object.prototype.toString.call(input) === '[object Date]' && isFinite(input);
	  }

	  return false;
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

	var _assertString = _interopRequireDefault(require$$0$2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var defaultOptions = {
	  loose: false
	};
	var strictBooleans = ['true', 'false', '1', '0'];
	var looseBooleans = [].concat(strictBooleans, ['yes', 'no']);

	function isBoolean(str) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOptions;
	  (0, _assertString.default)(str);

	  if (options.loose) {
	    return looseBooleans.includes(str.toLowerCase());
	  }

	  return strictBooleans.includes(str);
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

	var _assertString = _interopRequireDefault(require$$0$2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var localeReg = /^[A-Za-z]{2,4}([_-]([A-Za-z]{4}|[\d]{3}))?([_-]([A-Za-z]{2}|[\d]{3}))?$/;

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

	var _assertString = _interopRequireDefault(require$$0$2);



	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function isAlpha(_str) {
	  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en-US';
	  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	  (0, _assertString.default)(_str);
	  var str = _str;
	  var ignore = options.ignore;

	  if (ignore) {
	    if (ignore instanceof RegExp) {
	      str = str.replace(ignore, '');
	    } else if (typeof ignore === 'string') {
	      str = str.replace(new RegExp("[".concat(ignore.replace(/[-[\]{}()*+?.,\\^$|#\\s]/g, '\\$&'), "]"), 'g'), ''); // escape regex for ignore
	    } else {
	      throw new Error('ignore should be instance of a String or RegExp');
	    }
	  }

	  if (locale in _alpha.alpha) {
	    return _alpha.alpha[locale].test(str);
	  }

	  throw new Error("Invalid locale '".concat(locale, "'"));
	}

	var locales = Object.keys(_alpha.alpha);
	exports.locales = locales;
	});

	unwrapExports(isAlpha_1);
	isAlpha_1.locales;

	var isAlphanumeric_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isAlphanumeric;
	exports.locales = void 0;

	var _assertString = _interopRequireDefault(require$$0$2);



	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function isAlphanumeric(_str) {
	  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en-US';
	  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	  (0, _assertString.default)(_str);
	  var str = _str;
	  var ignore = options.ignore;

	  if (ignore) {
	    if (ignore instanceof RegExp) {
	      str = str.replace(ignore, '');
	    } else if (typeof ignore === 'string') {
	      str = str.replace(new RegExp("[".concat(ignore.replace(/[-[\]{}()*+?.,\\^$|#\\s]/g, '\\$&'), "]"), 'g'), ''); // escape regex for ignore
	    } else {
	      throw new Error('ignore should be instance of a String or RegExp');
	    }
	  }

	  if (locale in _alpha.alphanumeric) {
	    return _alpha.alphanumeric[locale].test(str);
	  }

	  throw new Error("Invalid locale '".concat(locale, "'"));
	}

	var locales = Object.keys(_alpha.alphanumeric);
	exports.locales = locales;
	});

	unwrapExports(isAlphanumeric_1);
	isAlphanumeric_1.locales;

	var isNumeric_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isNumeric;

	var _assertString = _interopRequireDefault(require$$0$2);



	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var numericNoSymbols = /^[0-9]+$/;

	function isNumeric(str, options) {
	  (0, _assertString.default)(str);

	  if (options && options.no_symbols) {
	    return numericNoSymbols.test(str);
	  }

	  return new RegExp("^[+-]?([0-9]*[".concat((options || {}).locale ? _alpha.decimal[options.locale] : '.', "])?[0-9]+$")).test(str);
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

	var _assertString = _interopRequireDefault(require$$0$2);

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
	  BR: /^[A-Z]{2}\d{6}$/,
	  // BRAZIL
	  BY: /^[A-Z]{2}\d{7}$/,
	  // BELARUS
	  CA: /^[A-Z]{2}\d{6}$/,
	  // CANADA
	  CH: /^[A-Z]\d{7}$/,
	  // SWITZERLAND
	  CN: /^G\d{8}$|^E(?![IO])[A-Z0-9]\d{7}$/,
	  // CHINA [G=Ordinary, E=Electronic] followed by 8-digits, or E followed by any UPPERCASE letter (except I and O) followed by 7 digits
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
	  ID: /^[A-C]\d{7}$/,
	  // INDONESIA
	  IR: /^[A-Z]\d{8}$/,
	  // IRAN
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
	  LY: /^[A-Z0-9]{8}$/,
	  // LIBYA
	  MT: /^\d{7}$/,
	  // MALTA
	  MZ: /^([A-Z]{2}\d{7})|(\d{2}[A-Z]{2}\d{5})$/,
	  // MOZAMBIQUE
	  MY: /^[AHK]\d{8}$/,
	  // MALAYSIA
	  NL: /^[A-Z]{2}[A-Z0-9]{6}\d$/,
	  // NETHERLANDS
	  PL: /^[A-Z]{2}\d{7}$/,
	  // POLAND
	  PT: /^[A-Z]\d{6}$/,
	  // PORTUGAL
	  RO: /^\d{8,9}$/,
	  // ROMANIA
	  RU: /^\d{9}$/,
	  // RUSSIAN FEDERATION
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

	var _assertString = _interopRequireDefault(require$$0$2);

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

	var require$$31 = isInt_1;

	var isPort_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isPort;

	var _isInt = _interopRequireDefault(require$$31);

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

	var _assertString = _interopRequireDefault(require$$0$2);

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

	var _assertString = _interopRequireDefault(require$$0$2);

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

	var _assertString = _interopRequireDefault(require$$0$2);

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

	var _assertString = _interopRequireDefault(require$$0$2);

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

	var _assertString = _interopRequireDefault(require$$0$2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var fullWidth = /[^\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;
	exports.fullWidth = fullWidth;

	function isFullWidth(str) {
	  (0, _assertString.default)(str);
	  return fullWidth.test(str);
	}
	});

	unwrapExports(isFullWidth_1);
	isFullWidth_1.fullWidth;

	var isHalfWidth_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isHalfWidth;
	exports.halfWidth = void 0;

	var _assertString = _interopRequireDefault(require$$0$2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var halfWidth = /[\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;
	exports.halfWidth = halfWidth;

	function isHalfWidth(str) {
	  (0, _assertString.default)(str);
	  return halfWidth.test(str);
	}
	});

	unwrapExports(isHalfWidth_1);
	isHalfWidth_1.halfWidth;

	var require$$25 = isFullWidth_1;

	var require$$26 = isHalfWidth_1;

	var isVariableWidth_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isVariableWidth;

	var _assertString = _interopRequireDefault(require$$0$2);





	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function isVariableWidth(str) {
	  (0, _assertString.default)(str);
	  return require$$25.fullWidth.test(str) && require$$26.halfWidth.test(str);
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

	var _assertString = _interopRequireDefault(require$$0$2);

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
	function multilineRegexp(parts, flags) {
	  var regexpAsStringLiteral = parts.join('');
	  return new RegExp(regexpAsStringLiteral, flags);
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(multilineRegex);

	var require$$1$2 = multilineRegex;

	var isSemVer_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isSemVer;

	var _assertString = _interopRequireDefault(require$$0$2);

	var _multilineRegex = _interopRequireDefault(require$$1$2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Regular Expression to match
	 * semantic versioning (SemVer)
	 * built from multi-line, multi-parts regexp
	 * Reference: https://semver.org/
	 */
	var semanticVersioningRegex = (0, _multilineRegex.default)(['^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)', '(?:-((?:0|[1-9]\\d*|\\d*[a-z-][0-9a-z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-z-][0-9a-z-]*))*))', '?(?:\\+([0-9a-z-]+(?:\\.[0-9a-z-]+)*))?$'], 'i');

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

	var _assertString = _interopRequireDefault(require$$0$2);

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

	var require$$2$1 = includes_1;

	var isDecimal_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isDecimal;

	var _merge = _interopRequireDefault(require$$0$1);

	var _assertString = _interopRequireDefault(require$$0$2);

	var _includes = _interopRequireDefault(require$$2$1);



	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function decimalRegExp(options) {
	  var regExp = new RegExp("^[-+]?([0-9]+)?(\\".concat(_alpha.decimal[options.locale], "[0-9]{").concat(options.decimal_digits, "})").concat(options.force_decimal ? '' : '?', "$"));
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

	  if (options.locale in _alpha.decimal) {
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

	var _assertString = _interopRequireDefault(require$$0$2);

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

	var _assertString = _interopRequireDefault(require$$0$2);

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

	var require$$1$1 = toFloat_1;

	var isDivisibleBy_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isDivisibleBy;

	var _assertString = _interopRequireDefault(require$$0$2);

	var _toFloat = _interopRequireDefault(require$$1$1);

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

	var _assertString = _interopRequireDefault(require$$0$2);

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

	var _assertString = _interopRequireDefault(require$$0$2);

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

	var _assertString = _interopRequireDefault(require$$0$2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var hslComma = /^hsla?\(((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?))(deg|grad|rad|turn)?(,(\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%){2}(,((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%?))?\)$/i;
	var hslSpace = /^hsla?\(((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?))(deg|grad|rad|turn)?(\s(\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%){2}\s?(\/\s((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%?)\s?)?\)$/i;

	function isHSL(str) {
	  (0, _assertString.default)(str); // Strip duplicate spaces before calling the validation regex (See  #1598 for more info)

	  var strippedStr = str.replace(/\s+/g, ' ').replace(/\s?(hsla?\(|\)|,)\s?/ig, '$1');

	  if (strippedStr.indexOf(',') !== -1) {
	    return hslComma.test(strippedStr);
	  }

	  return hslSpace.test(strippedStr);
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

	var _assertString = _interopRequireDefault(require$$0$2);

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
	exports.locales = void 0;

	var _assertString = _interopRequireDefault(require$$0$2);

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
	  EG: /^(EG[0-9]{2})\d{25}$/,
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
	  MZ: /^(MZ[0-9]{2})\d{21}$/,
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
	  SV: /^(SV[0-9]{2})[A-Z0-9]{4}\d{20}$/,
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

	var locales = Object.keys(ibanRegexThroughCountryCode);
	exports.locales = locales;
	});

	unwrapExports(isIBAN_1);
	isIBAN_1.locales;

	var isISO31661Alpha2_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isISO31661Alpha2;
	exports.CountryCodes = void 0;

	var _assertString = _interopRequireDefault(require$$0$2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// from https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
	var validISO31661Alpha2CountriesCodes = new Set(['AD', 'AE', 'AF', 'AG', 'AI', 'AL', 'AM', 'AO', 'AQ', 'AR', 'AS', 'AT', 'AU', 'AW', 'AX', 'AZ', 'BA', 'BB', 'BD', 'BE', 'BF', 'BG', 'BH', 'BI', 'BJ', 'BL', 'BM', 'BN', 'BO', 'BQ', 'BR', 'BS', 'BT', 'BV', 'BW', 'BY', 'BZ', 'CA', 'CC', 'CD', 'CF', 'CG', 'CH', 'CI', 'CK', 'CL', 'CM', 'CN', 'CO', 'CR', 'CU', 'CV', 'CW', 'CX', 'CY', 'CZ', 'DE', 'DJ', 'DK', 'DM', 'DO', 'DZ', 'EC', 'EE', 'EG', 'EH', 'ER', 'ES', 'ET', 'FI', 'FJ', 'FK', 'FM', 'FO', 'FR', 'GA', 'GB', 'GD', 'GE', 'GF', 'GG', 'GH', 'GI', 'GL', 'GM', 'GN', 'GP', 'GQ', 'GR', 'GS', 'GT', 'GU', 'GW', 'GY', 'HK', 'HM', 'HN', 'HR', 'HT', 'HU', 'ID', 'IE', 'IL', 'IM', 'IN', 'IO', 'IQ', 'IR', 'IS', 'IT', 'JE', 'JM', 'JO', 'JP', 'KE', 'KG', 'KH', 'KI', 'KM', 'KN', 'KP', 'KR', 'KW', 'KY', 'KZ', 'LA', 'LB', 'LC', 'LI', 'LK', 'LR', 'LS', 'LT', 'LU', 'LV', 'LY', 'MA', 'MC', 'MD', 'ME', 'MF', 'MG', 'MH', 'MK', 'ML', 'MM', 'MN', 'MO', 'MP', 'MQ', 'MR', 'MS', 'MT', 'MU', 'MV', 'MW', 'MX', 'MY', 'MZ', 'NA', 'NC', 'NE', 'NF', 'NG', 'NI', 'NL', 'NO', 'NP', 'NR', 'NU', 'NZ', 'OM', 'PA', 'PE', 'PF', 'PG', 'PH', 'PK', 'PL', 'PM', 'PN', 'PR', 'PS', 'PT', 'PW', 'PY', 'QA', 'RE', 'RO', 'RS', 'RU', 'RW', 'SA', 'SB', 'SC', 'SD', 'SE', 'SG', 'SH', 'SI', 'SJ', 'SK', 'SL', 'SM', 'SN', 'SO', 'SR', 'SS', 'ST', 'SV', 'SX', 'SY', 'SZ', 'TC', 'TD', 'TF', 'TG', 'TH', 'TJ', 'TK', 'TL', 'TM', 'TN', 'TO', 'TR', 'TT', 'TV', 'TW', 'TZ', 'UA', 'UG', 'UM', 'US', 'UY', 'UZ', 'VA', 'VC', 'VE', 'VG', 'VI', 'VN', 'VU', 'WF', 'WS', 'YE', 'YT', 'ZA', 'ZM', 'ZW']);

	function isISO31661Alpha2(str) {
	  (0, _assertString.default)(str);
	  return validISO31661Alpha2CountriesCodes.has(str.toUpperCase());
	}

	var CountryCodes = validISO31661Alpha2CountriesCodes;
	exports.CountryCodes = CountryCodes;
	});

	unwrapExports(isISO31661Alpha2_1);
	isISO31661Alpha2_1.CountryCodes;

	var require$$68 = isISO31661Alpha2_1;

	var isBIC_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isBIC;

	var _assertString = _interopRequireDefault(require$$0$2);



	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// https://en.wikipedia.org/wiki/ISO_9362
	var isBICReg = /^[A-Za-z]{6}[A-Za-z0-9]{2}([A-Za-z0-9]{3})?$/;

	function isBIC(str) {
	  (0, _assertString.default)(str); // toUpperCase() should be removed when a new major version goes out that changes
	  // the regex to [A-Z] (per the spec).

	  if (!require$$68.CountryCodes.has(str.slice(4, 6).toUpperCase())) {
	    return false;
	  }

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

	var _assertString = _interopRequireDefault(require$$0$2);

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

	var _assertString = _interopRequireDefault(require$$0$2);

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

	var _assertString = _interopRequireDefault(require$$0$2);

	var _merge = _interopRequireDefault(require$$0$1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var notBase64 = /[^A-Z0-9+\/=]/i;
	var urlSafeBase64 = /^[A-Z0-9_\-]*$/i;
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

	  if (len % 4 !== 0 || notBase64.test(str)) {
	    return false;
	  }

	  var firstPaddingChar = str.indexOf('=');
	  return firstPaddingChar === -1 || firstPaddingChar === len - 1 || firstPaddingChar === len - 2 && str[len - 1] === '=';
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(isBase64_1);

	var require$$73 = isBase64_1;

	var isJWT_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isJWT;

	var _assertString = _interopRequireDefault(require$$0$2);

	var _isBase = _interopRequireDefault(require$$73);

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

	var _assertString = _interopRequireDefault(require$$0$2);

	var _merge = _interopRequireDefault(require$$0$1);

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

	var _assertString = _interopRequireDefault(require$$0$2);

	var _merge = _interopRequireDefault(require$$0$1);

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

	var _assertString = _interopRequireDefault(require$$0$2);

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

	var _assertString = _interopRequireDefault(require$$0$2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var uuid = {
	  1: /^[0-9A-F]{8}-[0-9A-F]{4}-1[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
	  2: /^[0-9A-F]{8}-[0-9A-F]{4}-2[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
	  3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
	  4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
	  5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
	  all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
	};

	function isUUID(str, version) {
	  (0, _assertString.default)(str);
	  var pattern = uuid[![undefined, null].includes(version) ? version : 'all'];
	  return !!pattern && pattern.test(str);
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(isUUID_1);

	var require$$34 = isHexadecimal_1;

	var isMongoId_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isMongoId;

	var _assertString = _interopRequireDefault(require$$0$2);

	var _isHexadecimal = _interopRequireDefault(require$$34);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function isMongoId(str) {
	  (0, _assertString.default)(str);
	  return (0, _isHexadecimal.default)(str) && str.length === 24;
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(isMongoId_1);

	var require$$0 = toDate_1;

	var isAfter_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isAfter;

	var _assertString = _interopRequireDefault(require$$0$2);

	var _toDate = _interopRequireDefault(require$$0);

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

	var _assertString = _interopRequireDefault(require$$0$2);

	var _toDate = _interopRequireDefault(require$$0);

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

	var _assertString = _interopRequireDefault(require$$0$2);

	var _toString = _interopRequireDefault(require$$1$3);

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

	var _assertString = _interopRequireDefault(require$$0$2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* eslint-disable max-len */
	var creditCard = /^(?:4[0-9]{12}(?:[0-9]{3,6})?|5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12,15}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|6[27][0-9]{14}|^(81[0-9]{14,17}))$/;
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

	var _assertString = _interopRequireDefault(require$$0$2);

	var _isInt = _interopRequireDefault(require$$31);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var validators = {
	  PL: function PL(str) {
	    (0, _assertString.default)(str);
	    var weightOfDigits = {
	      1: 1,
	      2: 3,
	      3: 7,
	      4: 9,
	      5: 1,
	      6: 3,
	      7: 7,
	      8: 9,
	      9: 1,
	      10: 3,
	      11: 0
	    };

	    if (str != null && str.length === 11 && (0, _isInt.default)(str, {
	      allow_leading_zeroes: true
	    })) {
	      var digits = str.split('').slice(0, -1);
	      var sum = digits.reduce(function (acc, digit, index) {
	        return acc + Number(digit) * weightOfDigits[index + 1];
	      }, 0);
	      var modulo = sum % 10;
	      var lastDigit = Number(str.charAt(str.length - 1));

	      if (modulo === 0 && lastDigit === 0 || lastDigit === 10 - modulo) {
	        return true;
	      }
	    }

	    return false;
	  },
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
	  FI: function FI(str) {
	    // https://dvv.fi/en/personal-identity-code#:~:text=control%20character%20for%20a-,personal,-identity%20code%20calculated
	    (0, _assertString.default)(str);

	    if (str.length !== 11) {
	      return false;
	    }

	    if (!str.match(/^\d{6}[\-A\+]\d{3}[0-9ABCDEFHJKLMNPRSTUVWXY]{1}$/)) {
	      return false;
	    }

	    var checkDigits = '0123456789ABCDEFHJKLMNPRSTUVWXY';
	    var idAsNumber = parseInt(str.slice(0, 6), 10) * 1000 + parseInt(str.slice(7, 10), 10);
	    var remainder = idAsNumber % 31;
	    var checkDigit = checkDigits[remainder];
	    return checkDigit === str.slice(10, 11);
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
	  IR: function IR(str) {
	    if (!str.match(/^\d{10}$/)) return false;
	    str = "0000".concat(str).substr(str.length - 6);
	    if (parseInt(str.substr(3, 6), 10) === 0) return false;
	    var lastNumber = parseInt(str.substr(9, 1), 10);
	    var sum = 0;

	    for (var i = 0; i < 9; i++) {
	      sum += parseInt(str.substr(i, 1), 10) * (10 - i);
	    }

	    sum %= 11;
	    return sum < 2 && lastNumber === sum || sum >= 2 && lastNumber === 11 - sum;
	  },
	  IT: function IT(str) {
	    if (str.length !== 9) return false;
	    if (str === 'CA00000AA') return false; // https://it.wikipedia.org/wiki/Carta_d%27identit%C3%A0_elettronica_italiana

	    return str.search(/C[A-Z][0-9]{5}[A-Z]{2}/i) > -1;
	  },
	  NO: function NO(str) {
	    var sanitized = str.trim();
	    if (isNaN(Number(sanitized))) return false;
	    if (sanitized.length !== 11) return false;
	    if (sanitized === '00000000000') return false; // https://no.wikipedia.org/wiki/F%C3%B8dselsnummer

	    var f = sanitized.split('').map(Number);
	    var k1 = (11 - (3 * f[0] + 7 * f[1] + 6 * f[2] + 1 * f[3] + 8 * f[4] + 9 * f[5] + 4 * f[6] + 5 * f[7] + 2 * f[8]) % 11) % 11;
	    var k2 = (11 - (5 * f[0] + 4 * f[1] + 3 * f[2] + 2 * f[3] + 7 * f[4] + 6 * f[5] + 5 * f[6] + 4 * f[7] + 3 * f[8] + 2 * k1) % 11) % 11;
	    if (k1 !== f[9] || k2 !== f[10]) return false;
	    return true;
	  },
	  TH: function TH(str) {
	    if (!str.match(/^[1-8]\d{12}$/)) return false; // validate check digit

	    var sum = 0;

	    for (var i = 0; i < 12; i++) {
	      sum += parseInt(str[i], 10) * (13 - i);
	    }

	    return str[12] === ((11 - sum % 11) % 10).toString();
	  },
	  LK: function LK(str) {
	    var old_nic = /^[1-9]\d{8}[vx]$/i;
	    var new_nic = /^[1-9]\d{11}$/i;
	    if (str.length === 10 && old_nic.test(str)) return true;else if (str.length === 12 && new_nic.test(str)) return true;
	    return false;
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
	  'ar-LY': function arLY(str) {
	    // Libya National Identity Number NIN is 12 digits, the first digit is either 1 or 2
	    var NIN = /^(1|2)\d{11}$/; // sanitize user input

	    var sanitized = str.trim(); // validate the data structure

	    if (!NIN.test(sanitized)) {
	      return false;
	    }

	    return true;
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
	    var provincesAndCities = ['11', // 北京
	    '12', // 天津
	    '13', // 河北
	    '14', // 山西
	    '15', // 内蒙古
	    '21', // 辽宁
	    '22', // 吉林
	    '23', // 黑龙江
	    '31', // 上海
	    '32', // 江苏
	    '33', // 浙江
	    '34', // 安徽
	    '35', // 福建
	    '36', // 江西
	    '37', // 山东
	    '41', // 河南
	    '42', // 湖北
	    '43', // 湖南
	    '44', // 广东
	    '45', // 广西
	    '46', // 海南
	    '50', // 重庆
	    '51', // 四川
	    '52', // 贵州
	    '53', // 云南
	    '54', // 西藏
	    '61', // 陕西
	    '62', // 甘肃
	    '63', // 青海
	    '64', // 宁夏
	    '65', // 新疆
	    '71', // 台湾
	    '81', // 香港
	    '82', // 澳门
	    '91' // 国外
	    ];
	    var powers = ['7', '9', '10', '5', '8', '4', '2', '1', '6', '3', '7', '9', '10', '5', '8', '4', '2'];
	    var parityBit = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];

	    var checkAddressCode = function checkAddressCode(addressCode) {
	      return provincesAndCities.includes(addressCode);
	    };

	    var checkBirthDayCode = function checkBirthDayCode(birDayCode) {
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
	        power += parseInt(id17.charAt(i), 10) * parseInt(powers[i], 10);
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
	      var addressCode = idCardNo.substring(0, 2);
	      check = checkAddressCode(addressCode);
	      if (!check) return false;
	      var birDayCode = "19".concat(idCardNo.substring(6, 12));
	      check = checkBirthDayCode(birDayCode);
	      if (!check) return false;
	      return true;
	    };

	    var check18IdCardNo = function check18IdCardNo(idCardNo) {
	      var check = /^[1-9]\d{5}[1-9]\d{3}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}(\d|x|X)$/.test(idCardNo);
	      if (!check) return false;
	      var addressCode = idCardNo.substring(0, 2);
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
	      }

	      return check18IdCardNo(idCardNo);
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

	var _assertString = _interopRequireDefault(require$$0$2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * The most commonly used EAN standard is
	 * the thirteen-digit EAN-13, while the
	 * less commonly used 8-digit EAN-8 barcode was
	 * introduced for use on small packages.
	 * Also EAN/UCC-14 is used for Grouping of individual
	 * trade items above unit level(Intermediate, Carton or Pallet).
	 * For more info about EAN-14 checkout: https://www.gtin.info/itf-14-barcodes/
	 * EAN consists of:
	 * GS1 prefix, manufacturer code, product code and check digit
	 * Reference: https://en.wikipedia.org/wiki/International_Article_Number
	 * Reference: https://www.gtin.info/
	 */

	/**
	 * Define EAN Lenghts; 8 for EAN-8; 13 for EAN-13; 14 for EAN-14
	 * and Regular Expression for valid EANs (EAN-8, EAN-13, EAN-14),
	 * with exact numberic matching of 8 or 13 or 14 digits [0-9]
	 */
	var LENGTH_EAN_8 = 8;
	var LENGTH_EAN_14 = 14;
	var validEanRegex = /^(\d{8}|\d{13}|\d{14})$/;
	/**
	 * Get position weight given:
	 * EAN length and digit index/position
	 *
	 * @param {number} length
	 * @param {number} index
	 * @return {number}
	 */

	function getPositionWeightThroughLengthAndIndex(length, index) {
	  if (length === LENGTH_EAN_8 || length === LENGTH_EAN_14) {
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
	 * Matches EAN-8/EAN-13/EAN-14 regex
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

	var _assertString = _interopRequireDefault(require$$0$2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var isin = /^[A-Z]{2}[0-9A-Z]{9}[0-9]$/; // this link details how the check digit is calculated:
	// https://www.isin.org/isin-format/. it is a little bit
	// odd in that it works with digits, not numbers. in order
	// to make only one pass through the ISIN characters, the
	// each alpha character is handled as 2 characters within
	// the loop.

	function isISIN(str) {
	  (0, _assertString.default)(str);

	  if (!isin.test(str)) {
	    return false;
	  }

	  var double = true;
	  var sum = 0; // convert values

	  for (var i = str.length - 2; i >= 0; i--) {
	    if (str[i] >= 'A' && str[i] <= 'Z') {
	      var value = str[i].charCodeAt(0) - 55;
	      var lo = value % 10;
	      var hi = Math.trunc(value / 10); // letters have two digits, so handle the low order
	      // and high order digits separately.

	      for (var _i = 0, _arr = [lo, hi]; _i < _arr.length; _i++) {
	        var digit = _arr[_i];

	        if (double) {
	          if (digit >= 5) {
	            sum += 1 + (digit - 5) * 2;
	          } else {
	            sum += digit * 2;
	          }
	        } else {
	          sum += digit;
	        }

	        double = !double;
	      }
	    } else {
	      var _digit = str[i].charCodeAt(0) - '0'.charCodeAt(0);

	      if (double) {
	        if (_digit >= 5) {
	          sum += 1 + (_digit - 5) * 2;
	        } else {
	          sum += _digit * 2;
	        }
	      } else {
	        sum += _digit;
	      }

	      double = !double;
	    }
	  }

	  var check = Math.trunc((sum + 9) / 10) * 10 - sum;
	  return +str[str.length - 1] === check;
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

	var _assertString = _interopRequireDefault(require$$0$2);

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

	var _assertString = _interopRequireDefault(require$$0$2);

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

	var algorithms = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.iso7064Check = iso7064Check;
	exports.luhnCheck = luhnCheck;
	exports.reverseMultiplyAndSum = reverseMultiplyAndSum;
	exports.verhoeffCheck = verhoeffCheck;

	/**
	 * Algorithmic validation functions
	 * May be used as is or implemented in the workflow of other validators.
	 */

	/*
	 * ISO 7064 validation function
	 * Called with a string of numbers (incl. check digit)
	 * to validate according to ISO 7064 (MOD 11, 10).
	 */
	function iso7064Check(str) {
	  var checkvalue = 10;

	  for (var i = 0; i < str.length - 1; i++) {
	    checkvalue = (parseInt(str[i], 10) + checkvalue) % 10 === 0 ? 10 * 2 % 11 : (parseInt(str[i], 10) + checkvalue) % 10 * 2 % 11;
	  }

	  checkvalue = checkvalue === 1 ? 0 : 11 - checkvalue;
	  return checkvalue === parseInt(str[10], 10);
	}
	/*
	 * Luhn (mod 10) validation function
	 * Called with a string of numbers (incl. check digit)
	 * to validate according to the Luhn algorithm.
	 */


	function luhnCheck(str) {
	  var checksum = 0;
	  var second = false;

	  for (var i = str.length - 1; i >= 0; i--) {
	    if (second) {
	      var product = parseInt(str[i], 10) * 2;

	      if (product > 9) {
	        // sum digits of product and add to checksum
	        checksum += product.toString().split('').map(function (a) {
	          return parseInt(a, 10);
	        }).reduce(function (a, b) {
	          return a + b;
	        }, 0);
	      } else {
	        checksum += product;
	      }
	    } else {
	      checksum += parseInt(str[i], 10);
	    }

	    second = !second;
	  }

	  return checksum % 10 === 0;
	}
	/*
	 * Reverse TIN multiplication and summation helper function
	 * Called with an array of single-digit integers and a base multiplier
	 * to calculate the sum of the digits multiplied in reverse.
	 * Normally used in variations of MOD 11 algorithmic checks.
	 */


	function reverseMultiplyAndSum(digits, base) {
	  var total = 0;

	  for (var i = 0; i < digits.length; i++) {
	    total += digits[i] * (base - i);
	  }

	  return total;
	}
	/*
	 * Verhoeff validation helper function
	 * Called with a string of numbers
	 * to validate according to the Verhoeff algorithm.
	 */


	function verhoeffCheck(str) {
	  var d_table = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 0, 6, 7, 8, 9, 5], [2, 3, 4, 0, 1, 7, 8, 9, 5, 6], [3, 4, 0, 1, 2, 8, 9, 5, 6, 7], [4, 0, 1, 2, 3, 9, 5, 6, 7, 8], [5, 9, 8, 7, 6, 0, 4, 3, 2, 1], [6, 5, 9, 8, 7, 1, 0, 4, 3, 2], [7, 6, 5, 9, 8, 2, 1, 0, 4, 3], [8, 7, 6, 5, 9, 3, 2, 1, 0, 4], [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]];
	  var p_table = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 5, 7, 6, 2, 8, 3, 0, 9, 4], [5, 8, 0, 3, 7, 9, 6, 1, 4, 2], [8, 9, 1, 6, 0, 4, 3, 5, 2, 7], [9, 4, 5, 3, 1, 2, 6, 8, 7, 0], [4, 2, 8, 6, 5, 7, 3, 9, 0, 1], [2, 7, 9, 3, 8, 0, 6, 4, 1, 5], [7, 0, 4, 6, 9, 1, 3, 2, 5, 8]]; // Copy (to prevent replacement) and reverse

	  var str_copy = str.split('').reverse().join('');
	  var checksum = 0;

	  for (var i = 0; i < str_copy.length; i++) {
	    checksum = d_table[checksum][p_table[i % 8][parseInt(str_copy[i], 10)]];
	  }

	  return checksum === 0;
	}
	});

	unwrapExports(algorithms);
	algorithms.iso7064Check;
	algorithms.luhnCheck;
	algorithms.reverseMultiplyAndSum;
	algorithms.verhoeffCheck;

	var require$$1 = algorithms;

	var require$$13 = isDate_1;

	var isTaxID_1 = createCommonjsModule(function (module, exports) {

	function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isTaxID;

	var _assertString = _interopRequireDefault(require$$0$2);

	var algorithms = _interopRequireWildcard(require$$1);

	var _isDate = _interopRequireDefault(require$$13);

	function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

	function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

	function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

	function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

	function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

	function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

	/**
	 * TIN Validation
	 * Validates Tax Identification Numbers (TINs) from the US, EU member states and the United Kingdom.
	 *
	 * EU-UK:
	 * National TIN validity is calculated using public algorithms as made available by DG TAXUD.
	 *
	 * See `https://ec.europa.eu/taxation_customs/tin/specs/FS-TIN%20Algorithms-Public.docx` for more information.
	 *
	 * US:
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
	// Locale functions

	/*
	 * bg-BG validation function
	 * (Edinen graždanski nomer (EGN/ЕГН), persons only)
	 * Checks if birth date (first six digits) is valid and calculates check (last) digit
	 */
	function bgBgCheck(tin) {
	  // Extract full year, normalize month and check birth date validity
	  var century_year = tin.slice(0, 2);
	  var month = parseInt(tin.slice(2, 4), 10);

	  if (month > 40) {
	    month -= 40;
	    century_year = "20".concat(century_year);
	  } else if (month > 20) {
	    month -= 20;
	    century_year = "18".concat(century_year);
	  } else {
	    century_year = "19".concat(century_year);
	  }

	  if (month < 10) {
	    month = "0".concat(month);
	  }

	  var date = "".concat(century_year, "/").concat(month, "/").concat(tin.slice(4, 6));

	  if (!(0, _isDate.default)(date, 'YYYY/MM/DD')) {
	    return false;
	  } // split digits into an array for further processing


	  var digits = tin.split('').map(function (a) {
	    return parseInt(a, 10);
	  }); // Calculate checksum by multiplying digits with fixed values

	  var multip_lookup = [2, 4, 8, 5, 10, 9, 7, 3, 6];
	  var checksum = 0;

	  for (var i = 0; i < multip_lookup.length; i++) {
	    checksum += digits[i] * multip_lookup[i];
	  }

	  checksum = checksum % 11 === 10 ? 0 : checksum % 11;
	  return checksum === digits[9];
	}
	/*
	 * cs-CZ validation function
	 * (Rodné číslo (RČ), persons only)
	 * Checks if birth date (first six digits) is valid and divisibility by 11
	 * Material not in DG TAXUD document sourced from:
	 * -`https://lorenc.info/3MA381/overeni-spravnosti-rodneho-cisla.htm`
	 * -`https://www.mvcr.cz/clanek/rady-a-sluzby-dokumenty-rodne-cislo.aspx`
	 */


	function csCzCheck(tin) {
	  tin = tin.replace(/\W/, ''); // Extract full year from TIN length

	  var full_year = parseInt(tin.slice(0, 2), 10);

	  if (tin.length === 10) {
	    if (full_year < 54) {
	      full_year = "20".concat(full_year);
	    } else {
	      full_year = "19".concat(full_year);
	    }
	  } else {
	    if (tin.slice(6) === '000') {
	      return false;
	    } // Three-zero serial not assigned before 1954


	    if (full_year < 54) {
	      full_year = "19".concat(full_year);
	    } else {
	      return false; // No 18XX years seen in any of the resources
	    }
	  } // Add missing zero if needed


	  if (full_year.length === 3) {
	    full_year = [full_year.slice(0, 2), '0', full_year.slice(2)].join('');
	  } // Extract month from TIN and normalize


	  var month = parseInt(tin.slice(2, 4), 10);

	  if (month > 50) {
	    month -= 50;
	  }

	  if (month > 20) {
	    // Month-plus-twenty was only introduced in 2004
	    if (parseInt(full_year, 10) < 2004) {
	      return false;
	    }

	    month -= 20;
	  }

	  if (month < 10) {
	    month = "0".concat(month);
	  } // Check date validity


	  var date = "".concat(full_year, "/").concat(month, "/").concat(tin.slice(4, 6));

	  if (!(0, _isDate.default)(date, 'YYYY/MM/DD')) {
	    return false;
	  } // Verify divisibility by 11


	  if (tin.length === 10) {
	    if (parseInt(tin, 10) % 11 !== 0) {
	      // Some numbers up to and including 1985 are still valid if
	      // check (last) digit equals 0 and modulo of first 9 digits equals 10
	      var checkdigit = parseInt(tin.slice(0, 9), 10) % 11;

	      if (parseInt(full_year, 10) < 1986 && checkdigit === 10) {
	        if (parseInt(tin.slice(9), 10) !== 0) {
	          return false;
	        }
	      } else {
	        return false;
	      }
	    }
	  }

	  return true;
	}
	/*
	 * de-AT validation function
	 * (Abgabenkontonummer, persons/entities)
	 * Verify TIN validity by calling luhnCheck()
	 */


	function deAtCheck(tin) {
	  return algorithms.luhnCheck(tin);
	}
	/*
	 * de-DE validation function
	 * (Steueridentifikationsnummer (Steuer-IdNr.), persons only)
	 * Tests for single duplicate/triplicate value, then calculates ISO 7064 check (last) digit
	 * Partial implementation of spec (same result with both algorithms always)
	 */


	function deDeCheck(tin) {
	  // Split digits into an array for further processing
	  var digits = tin.split('').map(function (a) {
	    return parseInt(a, 10);
	  }); // Fill array with strings of number positions

	  var occurences = [];

	  for (var i = 0; i < digits.length - 1; i++) {
	    occurences.push('');

	    for (var j = 0; j < digits.length - 1; j++) {
	      if (digits[i] === digits[j]) {
	        occurences[i] += j;
	      }
	    }
	  } // Remove digits with one occurence and test for only one duplicate/triplicate


	  occurences = occurences.filter(function (a) {
	    return a.length > 1;
	  });

	  if (occurences.length !== 2 && occurences.length !== 3) {
	    return false;
	  } // In case of triplicate value only two digits are allowed next to each other


	  if (occurences[0].length === 3) {
	    var trip_locations = occurences[0].split('').map(function (a) {
	      return parseInt(a, 10);
	    });
	    var recurrent = 0; // Amount of neighbour occurences

	    for (var _i = 0; _i < trip_locations.length - 1; _i++) {
	      if (trip_locations[_i] + 1 === trip_locations[_i + 1]) {
	        recurrent += 1;
	      }
	    }

	    if (recurrent === 2) {
	      return false;
	    }
	  }

	  return algorithms.iso7064Check(tin);
	}
	/*
	 * dk-DK validation function
	 * (CPR-nummer (personnummer), persons only)
	 * Checks if birth date (first six digits) is valid and assigned to century (seventh) digit,
	 * and calculates check (last) digit
	 */


	function dkDkCheck(tin) {
	  tin = tin.replace(/\W/, ''); // Extract year, check if valid for given century digit and add century

	  var year = parseInt(tin.slice(4, 6), 10);
	  var century_digit = tin.slice(6, 7);

	  switch (century_digit) {
	    case '0':
	    case '1':
	    case '2':
	    case '3':
	      year = "19".concat(year);
	      break;

	    case '4':
	    case '9':
	      if (year < 37) {
	        year = "20".concat(year);
	      } else {
	        year = "19".concat(year);
	      }

	      break;

	    default:
	      if (year < 37) {
	        year = "20".concat(year);
	      } else if (year > 58) {
	        year = "18".concat(year);
	      } else {
	        return false;
	      }

	      break;
	  } // Add missing zero if needed


	  if (year.length === 3) {
	    year = [year.slice(0, 2), '0', year.slice(2)].join('');
	  } // Check date validity


	  var date = "".concat(year, "/").concat(tin.slice(2, 4), "/").concat(tin.slice(0, 2));

	  if (!(0, _isDate.default)(date, 'YYYY/MM/DD')) {
	    return false;
	  } // Split digits into an array for further processing


	  var digits = tin.split('').map(function (a) {
	    return parseInt(a, 10);
	  });
	  var checksum = 0;
	  var weight = 4; // Multiply by weight and add to checksum

	  for (var i = 0; i < 9; i++) {
	    checksum += digits[i] * weight;
	    weight -= 1;

	    if (weight === 1) {
	      weight = 7;
	    }
	  }

	  checksum %= 11;

	  if (checksum === 1) {
	    return false;
	  }

	  return checksum === 0 ? digits[9] === 0 : digits[9] === 11 - checksum;
	}
	/*
	 * el-CY validation function
	 * (Arithmos Forologikou Mitroou (AFM/ΑΦΜ), persons only)
	 * Verify TIN validity by calculating ASCII value of check (last) character
	 */


	function elCyCheck(tin) {
	  // split digits into an array for further processing
	  var digits = tin.slice(0, 8).split('').map(function (a) {
	    return parseInt(a, 10);
	  });
	  var checksum = 0; // add digits in even places

	  for (var i = 1; i < digits.length; i += 2) {
	    checksum += digits[i];
	  } // add digits in odd places


	  for (var _i2 = 0; _i2 < digits.length; _i2 += 2) {
	    if (digits[_i2] < 2) {
	      checksum += 1 - digits[_i2];
	    } else {
	      checksum += 2 * (digits[_i2] - 2) + 5;

	      if (digits[_i2] > 4) {
	        checksum += 2;
	      }
	    }
	  }

	  return String.fromCharCode(checksum % 26 + 65) === tin.charAt(8);
	}
	/*
	 * el-GR validation function
	 * (Arithmos Forologikou Mitroou (AFM/ΑΦΜ), persons/entities)
	 * Verify TIN validity by calculating check (last) digit
	 * Algorithm not in DG TAXUD document- sourced from:
	 * - `http://epixeirisi.gr/%CE%9A%CE%A1%CE%99%CE%A3%CE%99%CE%9C%CE%91-%CE%98%CE%95%CE%9C%CE%91%CE%A4%CE%91-%CE%A6%CE%9F%CE%A1%CE%9F%CE%9B%CE%9F%CE%93%CE%99%CE%91%CE%A3-%CE%9A%CE%91%CE%99-%CE%9B%CE%9F%CE%93%CE%99%CE%A3%CE%A4%CE%99%CE%9A%CE%97%CE%A3/23791/%CE%91%CF%81%CE%B9%CE%B8%CE%BC%CF%8C%CF%82-%CE%A6%CE%BF%CF%81%CE%BF%CE%BB%CE%BF%CE%B3%CE%B9%CE%BA%CE%BF%CF%8D-%CE%9C%CE%B7%CF%84%CF%81%CF%8E%CE%BF%CF%85`
	 */


	function elGrCheck(tin) {
	  // split digits into an array for further processing
	  var digits = tin.split('').map(function (a) {
	    return parseInt(a, 10);
	  });
	  var checksum = 0;

	  for (var i = 0; i < 8; i++) {
	    checksum += digits[i] * Math.pow(2, 8 - i);
	  }

	  return checksum % 11 % 10 === digits[8];
	}
	/*
	 * en-GB validation function (should go here if needed)
	 * (National Insurance Number (NINO) or Unique Taxpayer Reference (UTR),
	 * persons/entities respectively)
	 */

	/*
	 * en-IE validation function
	 * (Personal Public Service Number (PPS No), persons only)
	 * Verify TIN validity by calculating check (second to last) character
	 */


	function enIeCheck(tin) {
	  var checksum = algorithms.reverseMultiplyAndSum(tin.split('').slice(0, 7).map(function (a) {
	    return parseInt(a, 10);
	  }), 8);

	  if (tin.length === 9 && tin[8] !== 'W') {
	    checksum += (tin[8].charCodeAt(0) - 64) * 9;
	  }

	  checksum %= 23;

	  if (checksum === 0) {
	    return tin[7].toUpperCase() === 'W';
	  }

	  return tin[7].toUpperCase() === String.fromCharCode(64 + checksum);
	} // Valid US IRS campus prefixes


	var enUsCampusPrefix = {
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
	}; // Return an array of all US IRS campus prefixes

	function enUsGetPrefixes() {
	  var prefixes = [];

	  for (var location in enUsCampusPrefix) {
	    // https://github.com/gotwarlost/istanbul/blob/master/ignoring-code-for-coverage.md#ignoring-code-for-coverage-purposes
	    // istanbul ignore else
	    if (enUsCampusPrefix.hasOwnProperty(location)) {
	      prefixes.push.apply(prefixes, _toConsumableArray(enUsCampusPrefix[location]));
	    }
	  }

	  return prefixes;
	}
	/*
	 * en-US validation function
	 * Verify that the TIN starts with a valid IRS campus prefix
	 */


	function enUsCheck(tin) {
	  return enUsGetPrefixes().indexOf(tin.substr(0, 2)) !== -1;
	}
	/*
	 * es-ES validation function
	 * (Documento Nacional de Identidad (DNI)
	 * or Número de Identificación de Extranjero (NIE), persons only)
	 * Verify TIN validity by calculating check (last) character
	 */


	function esEsCheck(tin) {
	  // Split characters into an array for further processing
	  var chars = tin.toUpperCase().split(''); // Replace initial letter if needed

	  if (isNaN(parseInt(chars[0], 10)) && chars.length > 1) {
	    var lead_replace = 0;

	    switch (chars[0]) {
	      case 'Y':
	        lead_replace = 1;
	        break;

	      case 'Z':
	        lead_replace = 2;
	        break;
	    }

	    chars.splice(0, 1, lead_replace); // Fill with zeros if smaller than proper
	  } else {
	    while (chars.length < 9) {
	      chars.unshift(0);
	    }
	  } // Calculate checksum and check according to lookup


	  var lookup = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
	  chars = chars.join('');
	  var checksum = parseInt(chars.slice(0, 8), 10) % 23;
	  return chars[8] === lookup[checksum];
	}
	/*
	 * et-EE validation function
	 * (Isikukood (IK), persons only)
	 * Checks if birth date (century digit and six following) is valid and calculates check (last) digit
	 * Material not in DG TAXUD document sourced from:
	 * - `https://www.oecd.org/tax/automatic-exchange/crs-implementation-and-assistance/tax-identification-numbers/Estonia-TIN.pdf`
	 */


	function etEeCheck(tin) {
	  // Extract year and add century
	  var full_year = tin.slice(1, 3);
	  var century_digit = tin.slice(0, 1);

	  switch (century_digit) {
	    case '1':
	    case '2':
	      full_year = "18".concat(full_year);
	      break;

	    case '3':
	    case '4':
	      full_year = "19".concat(full_year);
	      break;

	    default:
	      full_year = "20".concat(full_year);
	      break;
	  } // Check date validity


	  var date = "".concat(full_year, "/").concat(tin.slice(3, 5), "/").concat(tin.slice(5, 7));

	  if (!(0, _isDate.default)(date, 'YYYY/MM/DD')) {
	    return false;
	  } // Split digits into an array for further processing


	  var digits = tin.split('').map(function (a) {
	    return parseInt(a, 10);
	  });
	  var checksum = 0;
	  var weight = 1; // Multiply by weight and add to checksum

	  for (var i = 0; i < 10; i++) {
	    checksum += digits[i] * weight;
	    weight += 1;

	    if (weight === 10) {
	      weight = 1;
	    }
	  } // Do again if modulo 11 of checksum is 10


	  if (checksum % 11 === 10) {
	    checksum = 0;
	    weight = 3;

	    for (var _i3 = 0; _i3 < 10; _i3++) {
	      checksum += digits[_i3] * weight;
	      weight += 1;

	      if (weight === 10) {
	        weight = 1;
	      }
	    }

	    if (checksum % 11 === 10) {
	      return digits[10] === 0;
	    }
	  }

	  return checksum % 11 === digits[10];
	}
	/*
	 * fi-FI validation function
	 * (Henkilötunnus (HETU), persons only)
	 * Checks if birth date (first six digits plus century symbol) is valid
	 * and calculates check (last) digit
	 */


	function fiFiCheck(tin) {
	  // Extract year and add century
	  var full_year = tin.slice(4, 6);
	  var century_symbol = tin.slice(6, 7);

	  switch (century_symbol) {
	    case '+':
	      full_year = "18".concat(full_year);
	      break;

	    case '-':
	      full_year = "19".concat(full_year);
	      break;

	    default:
	      full_year = "20".concat(full_year);
	      break;
	  } // Check date validity


	  var date = "".concat(full_year, "/").concat(tin.slice(2, 4), "/").concat(tin.slice(0, 2));

	  if (!(0, _isDate.default)(date, 'YYYY/MM/DD')) {
	    return false;
	  } // Calculate check character


	  var checksum = parseInt(tin.slice(0, 6) + tin.slice(7, 10), 10) % 31;

	  if (checksum < 10) {
	    return checksum === parseInt(tin.slice(10), 10);
	  }

	  checksum -= 10;
	  var letters_lookup = ['A', 'B', 'C', 'D', 'E', 'F', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y'];
	  return letters_lookup[checksum] === tin.slice(10);
	}
	/*
	 * fr/nl-BE validation function
	 * (Numéro national (N.N.), persons only)
	 * Checks if birth date (first six digits) is valid and calculates check (last two) digits
	 */


	function frBeCheck(tin) {
	  // Zero month/day value is acceptable
	  if (tin.slice(2, 4) !== '00' || tin.slice(4, 6) !== '00') {
	    // Extract date from first six digits of TIN
	    var date = "".concat(tin.slice(0, 2), "/").concat(tin.slice(2, 4), "/").concat(tin.slice(4, 6));

	    if (!(0, _isDate.default)(date, 'YY/MM/DD')) {
	      return false;
	    }
	  }

	  var checksum = 97 - parseInt(tin.slice(0, 9), 10) % 97;
	  var checkdigits = parseInt(tin.slice(9, 11), 10);

	  if (checksum !== checkdigits) {
	    checksum = 97 - parseInt("2".concat(tin.slice(0, 9)), 10) % 97;

	    if (checksum !== checkdigits) {
	      return false;
	    }
	  }

	  return true;
	}
	/*
	 * fr-FR validation function
	 * (Numéro fiscal de référence (numéro SPI), persons only)
	 * Verify TIN validity by calculating check (last three) digits
	 */


	function frFrCheck(tin) {
	  tin = tin.replace(/\s/g, '');
	  var checksum = parseInt(tin.slice(0, 10), 10) % 511;
	  var checkdigits = parseInt(tin.slice(10, 13), 10);
	  return checksum === checkdigits;
	}
	/*
	 * fr/lb-LU validation function
	 * (numéro d’identification personnelle, persons only)
	 * Verify birth date validity and run Luhn and Verhoeff checks
	 */


	function frLuCheck(tin) {
	  // Extract date and check validity
	  var date = "".concat(tin.slice(0, 4), "/").concat(tin.slice(4, 6), "/").concat(tin.slice(6, 8));

	  if (!(0, _isDate.default)(date, 'YYYY/MM/DD')) {
	    return false;
	  } // Run Luhn check


	  if (!algorithms.luhnCheck(tin.slice(0, 12))) {
	    return false;
	  } // Remove Luhn check digit and run Verhoeff check


	  return algorithms.verhoeffCheck("".concat(tin.slice(0, 11)).concat(tin[12]));
	}
	/*
	 * hr-HR validation function
	 * (Osobni identifikacijski broj (OIB), persons/entities)
	 * Verify TIN validity by calling iso7064Check(digits)
	 */


	function hrHrCheck(tin) {
	  return algorithms.iso7064Check(tin);
	}
	/*
	 * hu-HU validation function
	 * (Adóazonosító jel, persons only)
	 * Verify TIN validity by calculating check (last) digit
	 */


	function huHuCheck(tin) {
	  // split digits into an array for further processing
	  var digits = tin.split('').map(function (a) {
	    return parseInt(a, 10);
	  });
	  var checksum = 8;

	  for (var i = 1; i < 9; i++) {
	    checksum += digits[i] * (i + 1);
	  }

	  return checksum % 11 === digits[9];
	}
	/*
	 * lt-LT validation function (should go here if needed)
	 * (Asmens kodas, persons/entities respectively)
	 * Current validation check is alias of etEeCheck- same format applies
	 */

	/*
	 * it-IT first/last name validity check
	 * Accepts it-IT TIN-encoded names as a three-element character array and checks their validity
	 * Due to lack of clarity between resources ("Are only Italian consonants used?
	 * What happens if a person has X in their name?" etc.) only two test conditions
	 * have been implemented:
	 * Vowels may only be followed by other vowels or an X character
	 * and X characters after vowels may only be followed by other X characters.
	 */


	function itItNameCheck(name) {
	  // true at the first occurence of a vowel
	  var vowelflag = false; // true at the first occurence of an X AFTER vowel
	  // (to properly handle last names with X as consonant)

	  var xflag = false;

	  for (var i = 0; i < 3; i++) {
	    if (!vowelflag && /[AEIOU]/.test(name[i])) {
	      vowelflag = true;
	    } else if (!xflag && vowelflag && name[i] === 'X') {
	      xflag = true;
	    } else if (i > 0) {
	      if (vowelflag && !xflag) {
	        if (!/[AEIOU]/.test(name[i])) {
	          return false;
	        }
	      }

	      if (xflag) {
	        if (!/X/.test(name[i])) {
	          return false;
	        }
	      }
	    }
	  }

	  return true;
	}
	/*
	 * it-IT validation function
	 * (Codice fiscale (TIN-IT), persons only)
	 * Verify name, birth date and codice catastale validity
	 * and calculate check character.
	 * Material not in DG-TAXUD document sourced from:
	 * `https://en.wikipedia.org/wiki/Italian_fiscal_code`
	 */


	function itItCheck(tin) {
	  // Capitalize and split characters into an array for further processing
	  var chars = tin.toUpperCase().split(''); // Check first and last name validity calling itItNameCheck()

	  if (!itItNameCheck(chars.slice(0, 3))) {
	    return false;
	  }

	  if (!itItNameCheck(chars.slice(3, 6))) {
	    return false;
	  } // Convert letters in number spaces back to numbers if any


	  var number_locations = [6, 7, 9, 10, 12, 13, 14];
	  var number_replace = {
	    L: '0',
	    M: '1',
	    N: '2',
	    P: '3',
	    Q: '4',
	    R: '5',
	    S: '6',
	    T: '7',
	    U: '8',
	    V: '9'
	  };

	  for (var _i4 = 0, _number_locations = number_locations; _i4 < _number_locations.length; _i4++) {
	    var i = _number_locations[_i4];

	    if (chars[i] in number_replace) {
	      chars.splice(i, 1, number_replace[chars[i]]);
	    }
	  } // Extract month and day, and check date validity


	  var month_replace = {
	    A: '01',
	    B: '02',
	    C: '03',
	    D: '04',
	    E: '05',
	    H: '06',
	    L: '07',
	    M: '08',
	    P: '09',
	    R: '10',
	    S: '11',
	    T: '12'
	  };
	  var month = month_replace[chars[8]];
	  var day = parseInt(chars[9] + chars[10], 10);

	  if (day > 40) {
	    day -= 40;
	  }

	  if (day < 10) {
	    day = "0".concat(day);
	  }

	  var date = "".concat(chars[6]).concat(chars[7], "/").concat(month, "/").concat(day);

	  if (!(0, _isDate.default)(date, 'YY/MM/DD')) {
	    return false;
	  } // Calculate check character by adding up even and odd characters as numbers


	  var checksum = 0;

	  for (var _i5 = 1; _i5 < chars.length - 1; _i5 += 2) {
	    var char_to_int = parseInt(chars[_i5], 10);

	    if (isNaN(char_to_int)) {
	      char_to_int = chars[_i5].charCodeAt(0) - 65;
	    }

	    checksum += char_to_int;
	  }

	  var odd_convert = {
	    // Maps of characters at odd places
	    A: 1,
	    B: 0,
	    C: 5,
	    D: 7,
	    E: 9,
	    F: 13,
	    G: 15,
	    H: 17,
	    I: 19,
	    J: 21,
	    K: 2,
	    L: 4,
	    M: 18,
	    N: 20,
	    O: 11,
	    P: 3,
	    Q: 6,
	    R: 8,
	    S: 12,
	    T: 14,
	    U: 16,
	    V: 10,
	    W: 22,
	    X: 25,
	    Y: 24,
	    Z: 23,
	    0: 1,
	    1: 0
	  };

	  for (var _i6 = 0; _i6 < chars.length - 1; _i6 += 2) {
	    var _char_to_int = 0;

	    if (chars[_i6] in odd_convert) {
	      _char_to_int = odd_convert[chars[_i6]];
	    } else {
	      var multiplier = parseInt(chars[_i6], 10);
	      _char_to_int = 2 * multiplier + 1;

	      if (multiplier > 4) {
	        _char_to_int += 2;
	      }
	    }

	    checksum += _char_to_int;
	  }

	  if (String.fromCharCode(65 + checksum % 26) !== chars[15]) {
	    return false;
	  }

	  return true;
	}
	/*
	 * lv-LV validation function
	 * (Personas kods (PK), persons only)
	 * Check validity of birth date and calculate check (last) digit
	 * Support only for old format numbers (not starting with '32', issued before 2017/07/01)
	 * Material not in DG TAXUD document sourced from:
	 * `https://boot.ritakafija.lv/forums/index.php?/topic/88314-personas-koda-algoritms-%C4%8Deksumma/`
	 */


	function lvLvCheck(tin) {
	  tin = tin.replace(/\W/, ''); // Extract date from TIN

	  var day = tin.slice(0, 2);

	  if (day !== '32') {
	    // No date/checksum check if new format
	    var month = tin.slice(2, 4);

	    if (month !== '00') {
	      // No date check if unknown month
	      var full_year = tin.slice(4, 6);

	      switch (tin[6]) {
	        case '0':
	          full_year = "18".concat(full_year);
	          break;

	        case '1':
	          full_year = "19".concat(full_year);
	          break;

	        default:
	          full_year = "20".concat(full_year);
	          break;
	      } // Check date validity


	      var date = "".concat(full_year, "/").concat(tin.slice(2, 4), "/").concat(day);

	      if (!(0, _isDate.default)(date, 'YYYY/MM/DD')) {
	        return false;
	      }
	    } // Calculate check digit


	    var checksum = 1101;
	    var multip_lookup = [1, 6, 3, 7, 9, 10, 5, 8, 4, 2];

	    for (var i = 0; i < tin.length - 1; i++) {
	      checksum -= parseInt(tin[i], 10) * multip_lookup[i];
	    }

	    return parseInt(tin[10], 10) === checksum % 11;
	  }

	  return true;
	}
	/*
	 * mt-MT validation function
	 * (Identity Card Number or Unique Taxpayer Reference, persons/entities)
	 * Verify Identity Card Number structure (no other tests found)
	 */


	function mtMtCheck(tin) {
	  if (tin.length !== 9) {
	    // No tests for UTR
	    var chars = tin.toUpperCase().split(''); // Fill with zeros if smaller than proper

	    while (chars.length < 8) {
	      chars.unshift(0);
	    } // Validate format according to last character


	    switch (tin[7]) {
	      case 'A':
	      case 'P':
	        if (parseInt(chars[6], 10) === 0) {
	          return false;
	        }

	        break;

	      default:
	        {
	          var first_part = parseInt(chars.join('').slice(0, 5), 10);

	          if (first_part > 32000) {
	            return false;
	          }

	          var second_part = parseInt(chars.join('').slice(5, 7), 10);

	          if (first_part === second_part) {
	            return false;
	          }
	        }
	    }
	  }

	  return true;
	}
	/*
	 * nl-NL validation function
	 * (Burgerservicenummer (BSN) or Rechtspersonen Samenwerkingsverbanden Informatie Nummer (RSIN),
	 * persons/entities respectively)
	 * Verify TIN validity by calculating check (last) digit (variant of MOD 11)
	 */


	function nlNlCheck(tin) {
	  return algorithms.reverseMultiplyAndSum(tin.split('').slice(0, 8).map(function (a) {
	    return parseInt(a, 10);
	  }), 9) % 11 === parseInt(tin[8], 10);
	}
	/*
	 * pl-PL validation function
	 * (Powszechny Elektroniczny System Ewidencji Ludności (PESEL)
	 * or Numer identyfikacji podatkowej (NIP), persons/entities)
	 * Verify TIN validity by validating birth date (PESEL) and calculating check (last) digit
	 */


	function plPlCheck(tin) {
	  // NIP
	  if (tin.length === 10) {
	    // Calculate last digit by multiplying with lookup
	    var lookup = [6, 5, 7, 2, 3, 4, 5, 6, 7];
	    var _checksum = 0;

	    for (var i = 0; i < lookup.length; i++) {
	      _checksum += parseInt(tin[i], 10) * lookup[i];
	    }

	    _checksum %= 11;

	    if (_checksum === 10) {
	      return false;
	    }

	    return _checksum === parseInt(tin[9], 10);
	  } // PESEL
	  // Extract full year using month


	  var full_year = tin.slice(0, 2);
	  var month = parseInt(tin.slice(2, 4), 10);

	  if (month > 80) {
	    full_year = "18".concat(full_year);
	    month -= 80;
	  } else if (month > 60) {
	    full_year = "22".concat(full_year);
	    month -= 60;
	  } else if (month > 40) {
	    full_year = "21".concat(full_year);
	    month -= 40;
	  } else if (month > 20) {
	    full_year = "20".concat(full_year);
	    month -= 20;
	  } else {
	    full_year = "19".concat(full_year);
	  } // Add leading zero to month if needed


	  if (month < 10) {
	    month = "0".concat(month);
	  } // Check date validity


	  var date = "".concat(full_year, "/").concat(month, "/").concat(tin.slice(4, 6));

	  if (!(0, _isDate.default)(date, 'YYYY/MM/DD')) {
	    return false;
	  } // Calculate last digit by mulitplying with odd one-digit numbers except 5


	  var checksum = 0;
	  var multiplier = 1;

	  for (var _i7 = 0; _i7 < tin.length - 1; _i7++) {
	    checksum += parseInt(tin[_i7], 10) * multiplier % 10;
	    multiplier += 2;

	    if (multiplier > 10) {
	      multiplier = 1;
	    } else if (multiplier === 5) {
	      multiplier += 2;
	    }
	  }

	  checksum = 10 - checksum % 10;
	  return checksum === parseInt(tin[10], 10);
	}
	/*
	* pt-BR validation function
	* (Cadastro de Pessoas Físicas (CPF, persons)
	* Cadastro Nacional de Pessoas Jurídicas (CNPJ, entities)
	* Both inputs will be validated
	*/


	function ptBrCheck(tin) {
	  if (tin.length === 11) {
	    var _sum;

	    var remainder;
	    _sum = 0;
	    if ( // Reject known invalid CPFs
	    tin === '11111111111' || tin === '22222222222' || tin === '33333333333' || tin === '44444444444' || tin === '55555555555' || tin === '66666666666' || tin === '77777777777' || tin === '88888888888' || tin === '99999999999' || tin === '00000000000') return false;

	    for (var i = 1; i <= 9; i++) {
	      _sum += parseInt(tin.substring(i - 1, i), 10) * (11 - i);
	    }

	    remainder = _sum * 10 % 11;
	    if (remainder === 10) remainder = 0;
	    if (remainder !== parseInt(tin.substring(9, 10), 10)) return false;
	    _sum = 0;

	    for (var _i8 = 1; _i8 <= 10; _i8++) {
	      _sum += parseInt(tin.substring(_i8 - 1, _i8), 10) * (12 - _i8);
	    }

	    remainder = _sum * 10 % 11;
	    if (remainder === 10) remainder = 0;
	    if (remainder !== parseInt(tin.substring(10, 11), 10)) return false;
	    return true;
	  }

	  if ( // Reject know invalid CNPJs
	  tin === '00000000000000' || tin === '11111111111111' || tin === '22222222222222' || tin === '33333333333333' || tin === '44444444444444' || tin === '55555555555555' || tin === '66666666666666' || tin === '77777777777777' || tin === '88888888888888' || tin === '99999999999999') {
	    return false;
	  }

	  var length = tin.length - 2;
	  var identifiers = tin.substring(0, length);
	  var verificators = tin.substring(length);
	  var sum = 0;
	  var pos = length - 7;

	  for (var _i9 = length; _i9 >= 1; _i9--) {
	    sum += identifiers.charAt(length - _i9) * pos;
	    pos -= 1;

	    if (pos < 2) {
	      pos = 9;
	    }
	  }

	  var result = sum % 11 < 2 ? 0 : 11 - sum % 11;

	  if (result !== parseInt(verificators.charAt(0), 10)) {
	    return false;
	  }

	  length += 1;
	  identifiers = tin.substring(0, length);
	  sum = 0;
	  pos = length - 7;

	  for (var _i10 = length; _i10 >= 1; _i10--) {
	    sum += identifiers.charAt(length - _i10) * pos;
	    pos -= 1;

	    if (pos < 2) {
	      pos = 9;
	    }
	  }

	  result = sum % 11 < 2 ? 0 : 11 - sum % 11;

	  if (result !== parseInt(verificators.charAt(1), 10)) {
	    return false;
	  }

	  return true;
	}
	/*
	 * pt-PT validation function
	 * (Número de identificação fiscal (NIF), persons/entities)
	 * Verify TIN validity by calculating check (last) digit (variant of MOD 11)
	 */


	function ptPtCheck(tin) {
	  var checksum = 11 - algorithms.reverseMultiplyAndSum(tin.split('').slice(0, 8).map(function (a) {
	    return parseInt(a, 10);
	  }), 9) % 11;

	  if (checksum > 9) {
	    return parseInt(tin[8], 10) === 0;
	  }

	  return checksum === parseInt(tin[8], 10);
	}
	/*
	 * ro-RO validation function
	 * (Cod Numeric Personal (CNP) or Cod de înregistrare fiscală (CIF),
	 * persons only)
	 * Verify CNP validity by calculating check (last) digit (test not found for CIF)
	 * Material not in DG TAXUD document sourced from:
	 * `https://en.wikipedia.org/wiki/National_identification_number#Romania`
	 */


	function roRoCheck(tin) {
	  if (tin.slice(0, 4) !== '9000') {
	    // No test found for this format
	    // Extract full year using century digit if possible
	    var full_year = tin.slice(1, 3);

	    switch (tin[0]) {
	      case '1':
	      case '2':
	        full_year = "19".concat(full_year);
	        break;

	      case '3':
	      case '4':
	        full_year = "18".concat(full_year);
	        break;

	      case '5':
	      case '6':
	        full_year = "20".concat(full_year);
	        break;
	    } // Check date validity


	    var date = "".concat(full_year, "/").concat(tin.slice(3, 5), "/").concat(tin.slice(5, 7));

	    if (date.length === 8) {
	      if (!(0, _isDate.default)(date, 'YY/MM/DD')) {
	        return false;
	      }
	    } else if (!(0, _isDate.default)(date, 'YYYY/MM/DD')) {
	      return false;
	    } // Calculate check digit


	    var digits = tin.split('').map(function (a) {
	      return parseInt(a, 10);
	    });
	    var multipliers = [2, 7, 9, 1, 4, 6, 3, 5, 8, 2, 7, 9];
	    var checksum = 0;

	    for (var i = 0; i < multipliers.length; i++) {
	      checksum += digits[i] * multipliers[i];
	    }

	    if (checksum % 11 === 10) {
	      return digits[12] === 1;
	    }

	    return digits[12] === checksum % 11;
	  }

	  return true;
	}
	/*
	 * sk-SK validation function
	 * (Rodné číslo (RČ) or bezvýznamové identifikačné číslo (BIČ), persons only)
	 * Checks validity of pre-1954 birth numbers (rodné číslo) only
	 * Due to the introduction of the pseudo-random BIČ it is not possible to test
	 * post-1954 birth numbers without knowing whether they are BIČ or RČ beforehand
	 */


	function skSkCheck(tin) {
	  if (tin.length === 9) {
	    tin = tin.replace(/\W/, '');

	    if (tin.slice(6) === '000') {
	      return false;
	    } // Three-zero serial not assigned before 1954
	    // Extract full year from TIN length


	    var full_year = parseInt(tin.slice(0, 2), 10);

	    if (full_year > 53) {
	      return false;
	    }

	    if (full_year < 10) {
	      full_year = "190".concat(full_year);
	    } else {
	      full_year = "19".concat(full_year);
	    } // Extract month from TIN and normalize


	    var month = parseInt(tin.slice(2, 4), 10);

	    if (month > 50) {
	      month -= 50;
	    }

	    if (month < 10) {
	      month = "0".concat(month);
	    } // Check date validity


	    var date = "".concat(full_year, "/").concat(month, "/").concat(tin.slice(4, 6));

	    if (!(0, _isDate.default)(date, 'YYYY/MM/DD')) {
	      return false;
	    }
	  }

	  return true;
	}
	/*
	 * sl-SI validation function
	 * (Davčna številka, persons/entities)
	 * Verify TIN validity by calculating check (last) digit (variant of MOD 11)
	 */


	function slSiCheck(tin) {
	  var checksum = 11 - algorithms.reverseMultiplyAndSum(tin.split('').slice(0, 7).map(function (a) {
	    return parseInt(a, 10);
	  }), 8) % 11;

	  if (checksum === 10) {
	    return parseInt(tin[7], 10) === 0;
	  }

	  return checksum === parseInt(tin[7], 10);
	}
	/*
	 * sv-SE validation function
	 * (Personnummer or samordningsnummer, persons only)
	 * Checks validity of birth date and calls luhnCheck() to validate check (last) digit
	 */


	function svSeCheck(tin) {
	  // Make copy of TIN and normalize to two-digit year form
	  var tin_copy = tin.slice(0);

	  if (tin.length > 11) {
	    tin_copy = tin_copy.slice(2);
	  } // Extract date of birth


	  var full_year = '';
	  var month = tin_copy.slice(2, 4);
	  var day = parseInt(tin_copy.slice(4, 6), 10);

	  if (tin.length > 11) {
	    full_year = tin.slice(0, 4);
	  } else {
	    full_year = tin.slice(0, 2);

	    if (tin.length === 11 && day < 60) {
	      // Extract full year from centenarian symbol
	      // Should work just fine until year 10000 or so
	      var current_year = new Date().getFullYear().toString();
	      var current_century = parseInt(current_year.slice(0, 2), 10);
	      current_year = parseInt(current_year, 10);

	      if (tin[6] === '-') {
	        if (parseInt("".concat(current_century).concat(full_year), 10) > current_year) {
	          full_year = "".concat(current_century - 1).concat(full_year);
	        } else {
	          full_year = "".concat(current_century).concat(full_year);
	        }
	      } else {
	        full_year = "".concat(current_century - 1).concat(full_year);

	        if (current_year - parseInt(full_year, 10) < 100) {
	          return false;
	        }
	      }
	    }
	  } // Normalize day and check date validity


	  if (day > 60) {
	    day -= 60;
	  }

	  if (day < 10) {
	    day = "0".concat(day);
	  }

	  var date = "".concat(full_year, "/").concat(month, "/").concat(day);

	  if (date.length === 8) {
	    if (!(0, _isDate.default)(date, 'YY/MM/DD')) {
	      return false;
	    }
	  } else if (!(0, _isDate.default)(date, 'YYYY/MM/DD')) {
	    return false;
	  }

	  return algorithms.luhnCheck(tin.replace(/\W/, ''));
	} // Locale lookup objects

	/*
	 * Tax id regex formats for various locales
	 *
	 * Where not explicitly specified in DG-TAXUD document both
	 * uppercase and lowercase letters are acceptable.
	 */


	var taxIdFormat = {
	  'bg-BG': /^\d{10}$/,
	  'cs-CZ': /^\d{6}\/{0,1}\d{3,4}$/,
	  'de-AT': /^\d{9}$/,
	  'de-DE': /^[1-9]\d{10}$/,
	  'dk-DK': /^\d{6}-{0,1}\d{4}$/,
	  'el-CY': /^[09]\d{7}[A-Z]$/,
	  'el-GR': /^([0-4]|[7-9])\d{8}$/,
	  'en-GB': /^\d{10}$|^(?!GB|NK|TN|ZZ)(?![DFIQUV])[A-Z](?![DFIQUVO])[A-Z]\d{6}[ABCD ]$/i,
	  'en-IE': /^\d{7}[A-W][A-IW]{0,1}$/i,
	  'en-US': /^\d{2}[- ]{0,1}\d{7}$/,
	  'es-ES': /^(\d{0,8}|[XYZKLM]\d{7})[A-HJ-NP-TV-Z]$/i,
	  'et-EE': /^[1-6]\d{6}(00[1-9]|0[1-9][0-9]|[1-6][0-9]{2}|70[0-9]|710)\d$/,
	  'fi-FI': /^\d{6}[-+A]\d{3}[0-9A-FHJ-NPR-Y]$/i,
	  'fr-BE': /^\d{11}$/,
	  'fr-FR': /^[0-3]\d{12}$|^[0-3]\d\s\d{2}(\s\d{3}){3}$/,
	  // Conforms both to official spec and provided example
	  'fr-LU': /^\d{13}$/,
	  'hr-HR': /^\d{11}$/,
	  'hu-HU': /^8\d{9}$/,
	  'it-IT': /^[A-Z]{6}[L-NP-V0-9]{2}[A-EHLMPRST][L-NP-V0-9]{2}[A-ILMZ][L-NP-V0-9]{3}[A-Z]$/i,
	  'lv-LV': /^\d{6}-{0,1}\d{5}$/,
	  // Conforms both to DG TAXUD spec and original research
	  'mt-MT': /^\d{3,7}[APMGLHBZ]$|^([1-8])\1\d{7}$/i,
	  'nl-NL': /^\d{9}$/,
	  'pl-PL': /^\d{10,11}$/,
	  'pt-BR': /(?:^\d{11}$)|(?:^\d{14}$)/,
	  'pt-PT': /^\d{9}$/,
	  'ro-RO': /^\d{13}$/,
	  'sk-SK': /^\d{6}\/{0,1}\d{3,4}$/,
	  'sl-SI': /^[1-9]\d{7}$/,
	  'sv-SE': /^(\d{6}[-+]{0,1}\d{4}|(18|19|20)\d{6}[-+]{0,1}\d{4})$/
	}; // taxIdFormat locale aliases

	taxIdFormat['lb-LU'] = taxIdFormat['fr-LU'];
	taxIdFormat['lt-LT'] = taxIdFormat['et-EE'];
	taxIdFormat['nl-BE'] = taxIdFormat['fr-BE']; // Algorithmic tax id check functions for various locales

	var taxIdCheck = {
	  'bg-BG': bgBgCheck,
	  'cs-CZ': csCzCheck,
	  'de-AT': deAtCheck,
	  'de-DE': deDeCheck,
	  'dk-DK': dkDkCheck,
	  'el-CY': elCyCheck,
	  'el-GR': elGrCheck,
	  'en-IE': enIeCheck,
	  'en-US': enUsCheck,
	  'es-ES': esEsCheck,
	  'et-EE': etEeCheck,
	  'fi-FI': fiFiCheck,
	  'fr-BE': frBeCheck,
	  'fr-FR': frFrCheck,
	  'fr-LU': frLuCheck,
	  'hr-HR': hrHrCheck,
	  'hu-HU': huHuCheck,
	  'it-IT': itItCheck,
	  'lv-LV': lvLvCheck,
	  'mt-MT': mtMtCheck,
	  'nl-NL': nlNlCheck,
	  'pl-PL': plPlCheck,
	  'pt-BR': ptBrCheck,
	  'pt-PT': ptPtCheck,
	  'ro-RO': roRoCheck,
	  'sk-SK': skSkCheck,
	  'sl-SI': slSiCheck,
	  'sv-SE': svSeCheck
	}; // taxIdCheck locale aliases

	taxIdCheck['lb-LU'] = taxIdCheck['fr-LU'];
	taxIdCheck['lt-LT'] = taxIdCheck['et-EE'];
	taxIdCheck['nl-BE'] = taxIdCheck['fr-BE']; // Regexes for locales where characters should be omitted before checking format

	var allsymbols = /[-\\\/!@#$%\^&\*\(\)\+\=\[\]]+/g;
	var sanitizeRegexes = {
	  'de-AT': allsymbols,
	  'de-DE': /[\/\\]/g,
	  'fr-BE': allsymbols
	}; // sanitizeRegexes locale aliases

	sanitizeRegexes['nl-BE'] = sanitizeRegexes['fr-BE'];
	/*
	 * Validator function
	 * Return true if the passed string is a valid tax identification number
	 * for the specified locale.
	 * Throw an error exception if the locale is not supported.
	 */

	function isTaxID(str) {
	  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en-US';
	  (0, _assertString.default)(str); // Copy TIN to avoid replacement if sanitized

	  var strcopy = str.slice(0);

	  if (locale in taxIdFormat) {
	    if (locale in sanitizeRegexes) {
	      strcopy = strcopy.replace(sanitizeRegexes[locale], '');
	    }

	    if (!taxIdFormat[locale].test(strcopy)) {
	      return false;
	    }

	    if (locale in taxIdCheck) {
	      return taxIdCheck[locale](strcopy);
	    } // Fallthrough; not all locales have algorithmic checks


	    return true;
	  }

	  throw new Error("Invalid locale '".concat(locale, "'"));
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

	var _assertString = _interopRequireDefault(require$$0$2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* eslint-disable max-len */
	var phones = {
	  'am-AM': /^(\+?374|0)((10|[9|7][0-9])\d{6}$|[2-4]\d{7}$)/,
	  'ar-AE': /^((\+?971)|0)?5[024568]\d{7}$/,
	  'ar-BH': /^(\+?973)?(3|6)\d{7}$/,
	  'ar-DZ': /^(\+?213|0)(5|6|7)\d{8}$/,
	  'ar-LB': /^(\+?961)?((3|81)\d{6}|7\d{7})$/,
	  'ar-EG': /^((\+?20)|0)?1[0125]\d{8}$/,
	  'ar-IQ': /^(\+?964|0)?7[0-9]\d{8}$/,
	  'ar-JO': /^(\+?962|0)?7[789]\d{7}$/,
	  'ar-KW': /^(\+?965)[569]\d{7}$/,
	  'ar-LY': /^((\+?218)|0)?(9[1-6]\d{7}|[1-8]\d{7,9})$/,
	  'ar-MA': /^(?:(?:\+|00)212|0)[5-7]\d{8}$/,
	  'ar-OM': /^((\+|00)968)?(9[1-9])\d{6}$/,
	  'ar-PS': /^(\+?970|0)5[6|9](\d{7})$/,
	  'ar-SA': /^(!?(\+?966)|0)?5\d{8}$/,
	  'ar-SY': /^(!?(\+?963)|0)?9\d{8}$/,
	  'ar-TN': /^(\+?216)?[2459]\d{7}$/,
	  'az-AZ': /^(\+994|0)(5[015]|7[07]|99)\d{7}$/,
	  'bs-BA': /^((((\+|00)3876)|06))((([0-3]|[5-6])\d{6})|(4\d{7}))$/,
	  'be-BY': /^(\+?375)?(24|25|29|33|44)\d{7}$/,
	  'bg-BG': /^(\+?359|0)?8[789]\d{7}$/,
	  'bn-BD': /^(\+?880|0)1[13456789][0-9]{8}$/,
	  'ca-AD': /^(\+376)?[346]\d{5}$/,
	  'cs-CZ': /^(\+?420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
	  'da-DK': /^(\+?45)?\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/,
	  'de-DE': /^((\+49|0)[1|3])([0|5][0-45-9]\d|6([23]|0\d?)|7([0-57-9]|6\d))\d{7,9}$/,
	  'de-AT': /^(\+43|0)\d{1,4}\d{3,12}$/,
	  'de-CH': /^(\+41|0)([1-9])\d{1,9}$/,
	  'de-LU': /^(\+352)?((6\d1)\d{6})$/,
	  'dv-MV': /^(\+?960)?(7[2-9]|91|9[3-9])\d{7}$/,
	  'el-GR': /^(\+?30|0)?(69\d{8})$/,
	  'en-AU': /^(\+?61|0)4\d{8}$/,
	  'en-BM': /^(\+?1)?441(((3|7)\d{6}$)|(5[0-3][0-9]\d{4}$)|(59\d{5}))/,
	  'en-GB': /^(\+?44|0)7\d{9}$/,
	  'en-GG': /^(\+?44|0)1481\d{6}$/,
	  'en-GH': /^(\+233|0)(20|50|24|54|27|57|26|56|23|28|55|59)\d{7}$/,
	  'en-GY': /^(\+592|0)6\d{6}$/,
	  'en-HK': /^(\+?852[-\s]?)?[456789]\d{3}[-\s]?\d{4}$/,
	  'en-MO': /^(\+?853[-\s]?)?[6]\d{3}[-\s]?\d{4}$/,
	  'en-IE': /^(\+?353|0)8[356789]\d{7}$/,
	  'en-IN': /^(\+?91|0)?[6789]\d{9}$/,
	  'en-KE': /^(\+?254|0)(7|1)\d{8}$/,
	  'en-KI': /^((\+686|686)?)?( )?((6|7)(2|3|8)[0-9]{6})$/,
	  'en-MT': /^(\+?356|0)?(99|79|77|21|27|22|25)[0-9]{6}$/,
	  'en-MU': /^(\+?230|0)?\d{8}$/,
	  'en-NA': /^(\+?264|0)(6|8)\d{7}$/,
	  'en-NG': /^(\+?234|0)?[789]\d{9}$/,
	  'en-NZ': /^(\+?64|0)[28]\d{7,9}$/,
	  'en-PK': /^((00|\+)?92|0)3[0-6]\d{8}$/,
	  'en-PH': /^(09|\+639)\d{9}$/,
	  'en-RW': /^(\+?250|0)?[7]\d{8}$/,
	  'en-SG': /^(\+65)?[3689]\d{7}$/,
	  'en-SL': /^(\+?232|0)\d{8}$/,
	  'en-TZ': /^(\+?255|0)?[67]\d{8}$/,
	  'en-UG': /^(\+?256|0)?[7]\d{8}$/,
	  'en-US': /^((\+1|1)?( |-)?)?(\([2-9][0-9]{2}\)|[2-9][0-9]{2})( |-)?([2-9][0-9]{2}( |-)?[0-9]{4})$/,
	  'en-ZA': /^(\+?27|0)\d{9}$/,
	  'en-ZM': /^(\+?26)?09[567]\d{7}$/,
	  'en-ZW': /^(\+263)[0-9]{9}$/,
	  'en-BW': /^(\+?267)?(7[1-8]{1})\d{6}$/,
	  'es-AR': /^\+?549(11|[2368]\d)\d{8}$/,
	  'es-BO': /^(\+?591)?(6|7)\d{7}$/,
	  'es-CO': /^(\+?57)?3(0(0|1|2|4|5)|1\d|2[0-4]|5(0|1))\d{7}$/,
	  'es-CL': /^(\+?56|0)[2-9]\d{1}\d{7}$/,
	  'es-CR': /^(\+506)?[2-8]\d{7}$/,
	  'es-CU': /^(\+53|0053)?5\d{7}/,
	  'es-DO': /^(\+?1)?8[024]9\d{7}$/,
	  'es-HN': /^(\+?504)?[9|8]\d{7}$/,
	  'es-EC': /^(\+?593|0)([2-7]|9[2-9])\d{7}$/,
	  'es-ES': /^(\+?34)?[6|7]\d{8}$/,
	  'es-PE': /^(\+?51)?9\d{8}$/,
	  'es-MX': /^(\+?52)?(1|01)?\d{10,11}$/,
	  'es-PA': /^(\+?507)\d{7,8}$/,
	  'es-PY': /^(\+?595|0)9[9876]\d{7}$/,
	  'es-SV': /^(\+?503)?[67]\d{7}$/,
	  'es-UY': /^(\+598|0)9[1-9][\d]{6}$/,
	  'es-VE': /^(\+?58)?(2|4)\d{9}$/,
	  'et-EE': /^(\+?372)?\s?(5|8[1-4])\s?([0-9]\s?){6,7}$/,
	  'fa-IR': /^(\+?98[\-\s]?|0)9[0-39]\d[\-\s]?\d{3}[\-\s]?\d{4}$/,
	  'fi-FI': /^(\+?358|0)\s?(4(0|1|2|4|5|6)?|50)\s?(\d\s?){4,8}\d$/,
	  'fj-FJ': /^(\+?679)?\s?\d{3}\s?\d{4}$/,
	  'fo-FO': /^(\+?298)?\s?\d{2}\s?\d{2}\s?\d{2}$/,
	  'fr-BF': /^(\+226|0)[67]\d{7}$/,
	  'fr-CM': /^(\+?237)6[0-9]{8}$/,
	  'fr-FR': /^(\+?33|0)[67]\d{8}$/,
	  'fr-GF': /^(\+?594|0|00594)[67]\d{8}$/,
	  'fr-GP': /^(\+?590|0|00590)[67]\d{8}$/,
	  'fr-MQ': /^(\+?596|0|00596)[67]\d{8}$/,
	  'fr-PF': /^(\+?689)?8[789]\d{6}$/,
	  'fr-RE': /^(\+?262|0|00262)[67]\d{8}$/,
	  'he-IL': /^(\+972|0)([23489]|5[012345689]|77)[1-9]\d{6}$/,
	  'hu-HU': /^(\+?36|06)(20|30|31|50|70)\d{7}$/,
	  'id-ID': /^(\+?62|0)8(1[123456789]|2[1238]|3[1238]|5[12356789]|7[78]|9[56789]|8[123456789])([\s?|\d]{5,11})$/,
	  'it-IT': /^(\+?39)?\s?3\d{2} ?\d{6,7}$/,
	  'it-SM': /^((\+378)|(0549)|(\+390549)|(\+3780549))?6\d{5,9}$/,
	  'ja-JP': /^(\+81[ \-]?(\(0\))?|0)[6789]0[ \-]?\d{4}[ \-]?\d{4}$/,
	  'ka-GE': /^(\+?995)?(5|79)\d{7}$/,
	  'kk-KZ': /^(\+?7|8)?7\d{9}$/,
	  'kl-GL': /^(\+?299)?\s?\d{2}\s?\d{2}\s?\d{2}$/,
	  'ko-KR': /^((\+?82)[ \-]?)?0?1([0|1|6|7|8|9]{1})[ \-]?\d{3,4}[ \-]?\d{4}$/,
	  'lt-LT': /^(\+370|8)\d{8}$/,
	  'lv-LV': /^(\+?371)2\d{7}$/,
	  'ms-MY': /^(\+?6?01){1}(([0145]{1}(\-|\s)?\d{7,8})|([236789]{1}(\s|\-)?\d{7}))$/,
	  'mz-MZ': /^(\+?258)?8[234567]\d{7}$/,
	  'nb-NO': /^(\+?47)?[49]\d{7}$/,
	  'ne-NP': /^(\+?977)?9[78]\d{8}$/,
	  'nl-BE': /^(\+?32|0)4\d{8}$/,
	  'nl-NL': /^(((\+|00)?31\(0\))|((\+|00)?31)|0)6{1}\d{8}$/,
	  'nn-NO': /^(\+?47)?[49]\d{7}$/,
	  'pl-PL': /^(\+?48)? ?[5-8]\d ?\d{3} ?\d{2} ?\d{2}$/,
	  'pt-BR': /^((\+?55\ ?[1-9]{2}\ ?)|(\+?55\ ?\([1-9]{2}\)\ ?)|(0[1-9]{2}\ ?)|(\([1-9]{2}\)\ ?)|([1-9]{2}\ ?))((\d{4}\-?\d{4})|(9[2-9]{1}\d{3}\-?\d{4}))$/,
	  'pt-PT': /^(\+?351)?9[1236]\d{7}$/,
	  'pt-AO': /^(\+244)\d{9}$/,
	  'ro-RO': /^(\+?4?0)\s?7\d{2}(\/|\s|\.|\-)?\d{3}(\s|\.|\-)?\d{3}$/,
	  'ru-RU': /^(\+?7|8)?9\d{9}$/,
	  'si-LK': /^(?:0|94|\+94)?(7(0|1|2|4|5|6|7|8)( |-)?)\d{7}$/,
	  'sl-SI': /^(\+386\s?|0)(\d{1}\s?\d{3}\s?\d{2}\s?\d{2}|\d{2}\s?\d{3}\s?\d{3})$/,
	  'sk-SK': /^(\+?421)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
	  'sq-AL': /^(\+355|0)6[789]\d{6}$/,
	  'sr-RS': /^(\+3816|06)[- \d]{5,9}$/,
	  'sv-SE': /^(\+?46|0)[\s\-]?7[\s\-]?[02369]([\s\-]?\d){7}$/,
	  'tg-TJ': /^(\+?992)?[5][5]\d{7}$/,
	  'th-TH': /^(\+66|66|0)\d{9}$/,
	  'tr-TR': /^(\+?90|0)?5\d{9}$/,
	  'tk-TM': /^(\+993|993|8)\d{8}$/,
	  'uk-UA': /^(\+?38|8)?0\d{9}$/,
	  'uz-UZ': /^(\+?998)?(6[125-79]|7[1-69]|88|9\d)\d{7}$/,
	  'vi-VN': /^((\+?84)|0)((3([2-9]))|(5([25689]))|(7([0|6-9]))|(8([1-9]))|(9([0-9])))([0-9]{7})$/,
	  'zh-CN': /^((\+|00)86)?(1[3-9]|9[28])\d{9}$/,
	  'zh-TW': /^(\+?886\-?|0)?9\d{8}$/,
	  'dz-BT': /^(\+?975|0)?(17|16|77|02)\d{6}$/
	};
	/* eslint-enable max-len */
	// aliases

	phones['en-CA'] = phones['en-US'];
	phones['fr-CA'] = phones['en-CA'];
	phones['fr-BE'] = phones['nl-BE'];
	phones['zh-HK'] = phones['en-HK'];
	phones['zh-MO'] = phones['en-MO'];
	phones['ga-IE'] = phones['en-IE'];
	phones['fr-CH'] = phones['de-CH'];
	phones['it-CH'] = phones['fr-CH'];

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
	isMobilePhone_1.locales;

	var isEthereumAddress_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isEthereumAddress;

	var _assertString = _interopRequireDefault(require$$0$2);

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

	var _merge = _interopRequireDefault(require$$0$1);

	var _assertString = _interopRequireDefault(require$$0$2);

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

	var _assertString = _interopRequireDefault(require$$0$2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// supports Bech32 addresses
	var bech32 = /^(bc1)[a-z0-9]{25,39}$/;
	var base58 = /^(1|3)[A-HJ-NP-Za-km-z1-9]{25,39}$/;

	function isBtcAddress(str) {
	  (0, _assertString.default)(str); // check for bech32

	  if (str.startsWith('bc1')) {
	    return bech32.test(str);
	  }

	  return base58.test(str);
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

	var _assertString = _interopRequireDefault(require$$0$2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* eslint-disable max-len */
	// from http://goo.gl/0ejHHW
	var iso8601 = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/; // same as above, except with a strict 'T' separator between date and time

	var iso8601StrictSeparator = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;
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

	function isISO8601(str) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  (0, _assertString.default)(str);
	  var check = options.strictSeparator ? iso8601StrictSeparator.test(str) : iso8601.test(str);
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

	var _assertString = _interopRequireDefault(require$$0$2);

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
	var rfc3339 = new RegExp("^".concat(fullDate.source, "[ tT]").concat(fullTime.source, "$"));

	function isRFC3339(str) {
	  (0, _assertString.default)(str);
	  return rfc3339.test(str);
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(isRFC3339_1);

	var isISO31661Alpha3_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isISO31661Alpha3;

	var _assertString = _interopRequireDefault(require$$0$2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// from https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3
	var validISO31661Alpha3CountriesCodes = new Set(['AFG', 'ALA', 'ALB', 'DZA', 'ASM', 'AND', 'AGO', 'AIA', 'ATA', 'ATG', 'ARG', 'ARM', 'ABW', 'AUS', 'AUT', 'AZE', 'BHS', 'BHR', 'BGD', 'BRB', 'BLR', 'BEL', 'BLZ', 'BEN', 'BMU', 'BTN', 'BOL', 'BES', 'BIH', 'BWA', 'BVT', 'BRA', 'IOT', 'BRN', 'BGR', 'BFA', 'BDI', 'KHM', 'CMR', 'CAN', 'CPV', 'CYM', 'CAF', 'TCD', 'CHL', 'CHN', 'CXR', 'CCK', 'COL', 'COM', 'COG', 'COD', 'COK', 'CRI', 'CIV', 'HRV', 'CUB', 'CUW', 'CYP', 'CZE', 'DNK', 'DJI', 'DMA', 'DOM', 'ECU', 'EGY', 'SLV', 'GNQ', 'ERI', 'EST', 'ETH', 'FLK', 'FRO', 'FJI', 'FIN', 'FRA', 'GUF', 'PYF', 'ATF', 'GAB', 'GMB', 'GEO', 'DEU', 'GHA', 'GIB', 'GRC', 'GRL', 'GRD', 'GLP', 'GUM', 'GTM', 'GGY', 'GIN', 'GNB', 'GUY', 'HTI', 'HMD', 'VAT', 'HND', 'HKG', 'HUN', 'ISL', 'IND', 'IDN', 'IRN', 'IRQ', 'IRL', 'IMN', 'ISR', 'ITA', 'JAM', 'JPN', 'JEY', 'JOR', 'KAZ', 'KEN', 'KIR', 'PRK', 'KOR', 'KWT', 'KGZ', 'LAO', 'LVA', 'LBN', 'LSO', 'LBR', 'LBY', 'LIE', 'LTU', 'LUX', 'MAC', 'MKD', 'MDG', 'MWI', 'MYS', 'MDV', 'MLI', 'MLT', 'MHL', 'MTQ', 'MRT', 'MUS', 'MYT', 'MEX', 'FSM', 'MDA', 'MCO', 'MNG', 'MNE', 'MSR', 'MAR', 'MOZ', 'MMR', 'NAM', 'NRU', 'NPL', 'NLD', 'NCL', 'NZL', 'NIC', 'NER', 'NGA', 'NIU', 'NFK', 'MNP', 'NOR', 'OMN', 'PAK', 'PLW', 'PSE', 'PAN', 'PNG', 'PRY', 'PER', 'PHL', 'PCN', 'POL', 'PRT', 'PRI', 'QAT', 'REU', 'ROU', 'RUS', 'RWA', 'BLM', 'SHN', 'KNA', 'LCA', 'MAF', 'SPM', 'VCT', 'WSM', 'SMR', 'STP', 'SAU', 'SEN', 'SRB', 'SYC', 'SLE', 'SGP', 'SXM', 'SVK', 'SVN', 'SLB', 'SOM', 'ZAF', 'SGS', 'SSD', 'ESP', 'LKA', 'SDN', 'SUR', 'SJM', 'SWZ', 'SWE', 'CHE', 'SYR', 'TWN', 'TJK', 'TZA', 'THA', 'TLS', 'TGO', 'TKL', 'TON', 'TTO', 'TUN', 'TUR', 'TKM', 'TCA', 'TUV', 'UGA', 'UKR', 'ARE', 'GBR', 'USA', 'UMI', 'URY', 'UZB', 'VUT', 'VEN', 'VNM', 'VGB', 'VIR', 'WLF', 'ESH', 'YEM', 'ZMB', 'ZWE']);

	function isISO31661Alpha3(str) {
	  (0, _assertString.default)(str);
	  return validISO31661Alpha3CountriesCodes.has(str.toUpperCase());
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(isISO31661Alpha3_1);

	var isISO4217_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isISO4217;
	exports.CurrencyCodes = void 0;

	var _assertString = _interopRequireDefault(require$$0$2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// from https://en.wikipedia.org/wiki/ISO_4217
	var validISO4217CurrencyCodes = new Set(['AED', 'AFN', 'ALL', 'AMD', 'ANG', 'AOA', 'ARS', 'AUD', 'AWG', 'AZN', 'BAM', 'BBD', 'BDT', 'BGN', 'BHD', 'BIF', 'BMD', 'BND', 'BOB', 'BOV', 'BRL', 'BSD', 'BTN', 'BWP', 'BYN', 'BZD', 'CAD', 'CDF', 'CHE', 'CHF', 'CHW', 'CLF', 'CLP', 'CNY', 'COP', 'COU', 'CRC', 'CUC', 'CUP', 'CVE', 'CZK', 'DJF', 'DKK', 'DOP', 'DZD', 'EGP', 'ERN', 'ETB', 'EUR', 'FJD', 'FKP', 'GBP', 'GEL', 'GHS', 'GIP', 'GMD', 'GNF', 'GTQ', 'GYD', 'HKD', 'HNL', 'HRK', 'HTG', 'HUF', 'IDR', 'ILS', 'INR', 'IQD', 'IRR', 'ISK', 'JMD', 'JOD', 'JPY', 'KES', 'KGS', 'KHR', 'KMF', 'KPW', 'KRW', 'KWD', 'KYD', 'KZT', 'LAK', 'LBP', 'LKR', 'LRD', 'LSL', 'LYD', 'MAD', 'MDL', 'MGA', 'MKD', 'MMK', 'MNT', 'MOP', 'MRU', 'MUR', 'MVR', 'MWK', 'MXN', 'MXV', 'MYR', 'MZN', 'NAD', 'NGN', 'NIO', 'NOK', 'NPR', 'NZD', 'OMR', 'PAB', 'PEN', 'PGK', 'PHP', 'PKR', 'PLN', 'PYG', 'QAR', 'RON', 'RSD', 'RUB', 'RWF', 'SAR', 'SBD', 'SCR', 'SDG', 'SEK', 'SGD', 'SHP', 'SLL', 'SOS', 'SRD', 'SSP', 'STN', 'SVC', 'SYP', 'SZL', 'THB', 'TJS', 'TMT', 'TND', 'TOP', 'TRY', 'TTD', 'TWD', 'TZS', 'UAH', 'UGX', 'USD', 'USN', 'UYI', 'UYU', 'UYW', 'UZS', 'VES', 'VND', 'VUV', 'WST', 'XAF', 'XAG', 'XAU', 'XBA', 'XBB', 'XBC', 'XBD', 'XCD', 'XDR', 'XOF', 'XPD', 'XPF', 'XPT', 'XSU', 'XTS', 'XUA', 'XXX', 'YER', 'ZAR', 'ZMW', 'ZWL']);

	function isISO4217(str) {
	  (0, _assertString.default)(str);
	  return validISO4217CurrencyCodes.has(str.toUpperCase());
	}

	var CurrencyCodes = validISO4217CurrencyCodes;
	exports.CurrencyCodes = CurrencyCodes;
	});

	unwrapExports(isISO4217_1);
	isISO4217_1.CurrencyCodes;

	var isBase32_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isBase32;

	var _assertString = _interopRequireDefault(require$$0$2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var base32 = /^[A-Z2-7]+=*$/;

	function isBase32(str) {
	  (0, _assertString.default)(str);
	  var len = str.length;

	  if (len % 8 === 0 && base32.test(str)) {
	    return true;
	  }

	  return false;
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(isBase32_1);

	var isBase58_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isBase58;

	var _assertString = _interopRequireDefault(require$$0$2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Accepted chars - 123456789ABCDEFGH JKLMN PQRSTUVWXYZabcdefghijk mnopqrstuvwxyz
	var base58Reg = /^[A-HJ-NP-Za-km-z1-9]*$/;

	function isBase58(str) {
	  (0, _assertString.default)(str);

	  if (base58Reg.test(str)) {
	    return true;
	  }

	  return false;
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(isBase58_1);

	var isDataURI_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isDataURI;

	var _assertString = _interopRequireDefault(require$$0$2);

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
	    if (!(i === attributes.length - 1 && attributes[i].toLowerCase() === 'base64') && !validAttribute.test(attributes[i])) {
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

	var _assertString = _interopRequireDefault(require$$0$2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var magnetURI = /^magnet:\?xt(?:\.1)?=urn:(?:aich|bitprint|btih|ed2k|ed2khash|kzhash|md5|sha1|tree:tiger):[a-z0-9]{32}(?:[a-z0-9]{8})?($|&)/i;

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

	var _assertString = _interopRequireDefault(require$$0$2);

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

	var _assertString = _interopRequireDefault(require$$0$2);

	var _merge = _interopRequireDefault(require$$0$1);

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

	var _assertString = _interopRequireDefault(require$$0$2);

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
	  AZ: /^AZ\d{4}$/,
	  BE: fourDigit,
	  BG: fourDigit,
	  BR: /^\d{5}-\d{3}$/,
	  BY: /2[1-4]{1}\d{4}$/,
	  CA: /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][\s\-]?\d[ABCEGHJ-NPRSTV-Z]\d$/i,
	  CH: fourDigit,
	  CN: /^(0[1-7]|1[012356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[1-5]|8[1345]|9[09])\d{4}$/,
	  CZ: /^\d{3}\s?\d{2}$/,
	  DE: fiveDigit,
	  DK: fourDigit,
	  DO: fiveDigit,
	  DZ: fiveDigit,
	  EE: fiveDigit,
	  ES: /^(5[0-2]{1}|[0-4]{1}\d{1})\d{3}$/,
	  FI: fiveDigit,
	  FR: /^\d{2}\s?\d{3}$/,
	  GB: /^(gir\s?0aa|[a-z]{1,2}\d[\da-z]?\s?(\d[a-z]{2})?)$/i,
	  GR: /^\d{3}\s?\d{2}$/,
	  HR: /^([1-5]\d{4}$)/,
	  HT: /^HT\d{4}$/,
	  HU: fourDigit,
	  ID: fiveDigit,
	  IE: /^(?!.*(?:o))[A-Za-z]\d[\dw]\s\w{4}$/i,
	  IL: /^(\d{5}|\d{7})$/,
	  IN: /^((?!10|29|35|54|55|65|66|86|87|88|89)[1-9][0-9]{5})$/,
	  IR: /\b(?!(\d)\1{3})[13-9]{4}[1346-9][013-9]{5}\b/,
	  IS: threeDigit,
	  IT: fiveDigit,
	  JP: /^\d{3}\-\d{4}$/,
	  KE: fiveDigit,
	  KR: /^(\d{5}|\d{6})$/,
	  LI: /^(948[5-9]|949[0-7])$/,
	  LT: /^LT\-\d{5}$/,
	  LU: fourDigit,
	  LV: /^LV\-\d{4}$/,
	  LK: fiveDigit,
	  MX: fiveDigit,
	  MT: /^[A-Za-z]{3}\s{0,1}\d{4}$/,
	  MY: fiveDigit,
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
	  SG: sixDigit,
	  SI: fourDigit,
	  SK: /^\d{3}\s?\d{2}$/,
	  TH: fiveDigit,
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
	isPostalCode_1.locales;

	var ltrim_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = ltrim;

	var _assertString = _interopRequireDefault(require$$0$2);

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

	var _assertString = _interopRequireDefault(require$$0$2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function rtrim(str, chars) {
	  (0, _assertString.default)(str);

	  if (chars) {
	    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#Escaping
	    var pattern = new RegExp("[".concat(chars.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), "]+$"), 'g');
	    return str.replace(pattern, '');
	  } // Use a faster and more safe than regex trim method https://blog.stevenlevithan.com/archives/faster-trim-javascript


	  var strIndex = str.length - 1;

	  while (/\s/.test(str.charAt(strIndex))) {
	    strIndex -= 1;
	  }

	  return str.slice(0, strIndex + 1);
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(rtrim_1);

	var require$$80 = rtrim_1;

	var require$$79 = ltrim_1;

	var trim_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = trim;

	var _rtrim = _interopRequireDefault(require$$80);

	var _ltrim = _interopRequireDefault(require$$79);

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

	var _assertString = _interopRequireDefault(require$$0$2);

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

	var _assertString = _interopRequireDefault(require$$0$2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function unescape(str) {
	  (0, _assertString.default)(str);
	  return str.replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#x2F;/g, '/').replace(/&#x5C;/g, '\\').replace(/&#96;/g, '`').replace(/&amp;/g, '&'); // &amp; replacement has to be the last one to prevent
	  // bugs with intermediate strings containing escape sequences
	  // See: https://github.com/validatorjs/validator.js/issues/1827
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

	var _assertString = _interopRequireDefault(require$$0$2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function blacklist(str, chars) {
	  (0, _assertString.default)(str);
	  return str.replace(new RegExp("[".concat(chars, "]+"), 'g'), '');
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(blacklist_1);

	var require$$86 = blacklist_1;

	var stripLow_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = stripLow;

	var _assertString = _interopRequireDefault(require$$0$2);

	var _blacklist = _interopRequireDefault(require$$86);

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

	var _assertString = _interopRequireDefault(require$$0$2);

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

	var _assertString = _interopRequireDefault(require$$0$2);

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

	var _merge = _interopRequireDefault(require$$0$1);

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

	    parts[1] = 'yandex.ru'; // all yandex domains are equal, 1st preferred
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

	var _assertString = _interopRequireDefault(require$$0$2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var charsetRegex = /^[^\s-_](?!.*?[-_]{2,})[a-z0-9-\\][^\s]*[^-_\s]$/;

	function isSlug(str) {
	  (0, _assertString.default)(str);
	  return charsetRegex.test(str);
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(isSlug_1);

	var isLicensePlate_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isLicensePlate;

	var _assertString = _interopRequireDefault(require$$0$2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var validators = {
	  'cs-CZ': function csCZ(str) {
	    return /^(([ABCDEFHKIJKLMNPRSTUVXYZ]|[0-9])-?){5,8}$/.test(str);
	  },
	  'de-DE': function deDE(str) {
	    return /^((AW|UL|AK|GA|AÖ|LF|AZ|AM|AS|ZE|AN|AB|A|KG|KH|BA|EW|BZ|HY|KM|BT|HP|B|BC|BI|BO|FN|TT|ÜB|BN|AH|BS|FR|HB|ZZ|BB|BK|BÖ|OC|OK|CW|CE|C|CO|LH|CB|KW|LC|LN|DA|DI|DE|DH|SY|NÖ|DO|DD|DU|DN|D|EI|EA|EE|FI|EM|EL|EN|PF|ED|EF|ER|AU|ZP|E|ES|NT|EU|FL|FO|FT|FF|F|FS|FD|FÜ|GE|G|GI|GF|GS|ZR|GG|GP|GR|NY|ZI|GÖ|GZ|GT|HA|HH|HM|HU|WL|HZ|WR|RN|HK|HD|HN|HS|GK|HE|HF|RZ|HI|HG|HO|HX|IK|IL|IN|J|JL|KL|KA|KS|KF|KE|KI|KT|KO|KN|KR|KC|KU|K|LD|LL|LA|L|OP|LM|LI|LB|LU|LÖ|HL|LG|MD|GN|MZ|MA|ML|MR|MY|AT|DM|MC|NZ|RM|RG|MM|ME|MB|MI|FG|DL|HC|MW|RL|MK|MG|MÜ|WS|MH|M|MS|NU|NB|ND|NM|NK|NW|NR|NI|NF|DZ|EB|OZ|TG|TO|N|OA|GM|OB|CA|EH|FW|OF|OL|OE|OG|BH|LR|OS|AA|GD|OH|KY|NP|WK|PB|PA|PE|PI|PS|P|PM|PR|RA|RV|RE|R|H|SB|WN|RS|RD|RT|BM|NE|GV|RP|SU|GL|RO|GÜ|RH|EG|RW|PN|SK|MQ|RU|SZ|RI|SL|SM|SC|HR|FZ|VS|SW|SN|CR|SE|SI|SO|LP|SG|NH|SP|IZ|ST|BF|TE|HV|OD|SR|S|AC|DW|ZW|TF|TS|TR|TÜ|UM|PZ|TP|UE|UN|UH|MN|KK|VB|V|AE|PL|RC|VG|GW|PW|VR|VK|KB|WA|WT|BE|WM|WE|AP|MO|WW|FB|WZ|WI|WB|JE|WF|WO|W|WÜ|BL|Z|GC)[- ]?[A-Z]{1,2}[- ]?\d{1,4}|(AIC|FDB|ABG|SLN|SAW|KLZ|BUL|ESB|NAB|SUL|WST|ABI|AZE|BTF|KÖT|DKB|FEU|ROT|ALZ|SMÜ|WER|AUR|NOR|DÜW|BRK|HAB|TÖL|WOR|BAD|BAR|BER|BIW|EBS|KEM|MÜB|PEG|BGL|BGD|REI|WIL|BKS|BIR|WAT|BOR|BOH|BOT|BRB|BLK|HHM|NEB|NMB|WSF|LEO|HDL|WMS|WZL|BÜS|CHA|KÖZ|ROD|WÜM|CLP|NEC|COC|ZEL|COE|CUX|DAH|LDS|DEG|DEL|RSL|DLG|DGF|LAN|HEI|MED|DON|KIB|ROK|JÜL|MON|SLE|EBE|EIC|HIG|WBS|BIT|PRÜ|LIB|EMD|WIT|ERH|HÖS|ERZ|ANA|ASZ|MAB|MEK|STL|SZB|FDS|HCH|HOR|WOL|FRG|GRA|WOS|FRI|FFB|GAP|GER|BRL|CLZ|GTH|NOH|HGW|GRZ|LÖB|NOL|WSW|DUD|HMÜ|OHA|KRU|HAL|HAM|HBS|QLB|HVL|NAU|HAS|EBN|GEO|HOH|HDH|ERK|HER|WAN|HEF|ROF|HBN|ALF|HSK|USI|NAI|REH|SAN|KÜN|ÖHR|HOL|WAR|ARN|BRG|GNT|HOG|WOH|KEH|MAI|PAR|RID|ROL|KLE|GEL|KUS|KYF|ART|SDH|LDK|DIL|MAL|VIB|LER|BNA|GHA|GRM|MTL|WUR|LEV|LIF|STE|WEL|LIP|VAI|LUP|HGN|LBZ|LWL|PCH|STB|DAN|MKK|SLÜ|MSP|TBB|MGH|MTK|BIN|MSH|EIL|HET|SGH|BID|MYK|MSE|MST|MÜR|WRN|MEI|GRH|RIE|MZG|MIL|OBB|BED|FLÖ|MOL|FRW|SEE|SRB|AIB|MOS|BCH|ILL|SOB|NMS|NEA|SEF|UFF|NEW|VOH|NDH|TDO|NWM|GDB|GVM|WIS|NOM|EIN|GAN|LAU|HEB|OHV|OSL|SFB|ERB|LOS|BSK|KEL|BSB|MEL|WTL|OAL|FÜS|MOD|OHZ|OPR|BÜR|PAF|PLÖ|CAS|GLA|REG|VIT|ECK|SIM|GOA|EMS|DIZ|GOH|RÜD|SWA|NES|KÖN|MET|LRO|BÜZ|DBR|ROS|TET|HRO|ROW|BRV|HIP|PAN|GRI|SHK|EIS|SRO|SOK|LBS|SCZ|MER|QFT|SLF|SLS|HOM|SLK|ASL|BBG|SBK|SFT|SHG|MGN|MEG|ZIG|SAD|NEN|OVI|SHA|BLB|SIG|SON|SPN|FOR|GUB|SPB|IGB|WND|STD|STA|SDL|OBG|HST|BOG|SHL|PIR|FTL|SEB|SÖM|SÜW|TIR|SAB|TUT|ANG|SDT|LÜN|LSZ|MHL|VEC|VER|VIE|OVL|ANK|OVP|SBG|UEM|UER|WLG|GMN|NVP|RDG|RÜG|DAU|FKB|WAF|WAK|SLZ|WEN|SOG|APD|WUG|GUN|ESW|WIZ|WES|DIN|BRA|BÜD|WHV|HWI|GHC|WTM|WOB|WUN|MAK|SEL|OCH|HOT|WDA)[- ]?(([A-Z][- ]?\d{1,4})|([A-Z]{2}[- ]?\d{1,3})))[- ]?(E|H)?$/.test(str);
	  },
	  'de-LI': function deLI(str) {
	    return /^FL[- ]?\d{1,5}[UZ]?$/.test(str);
	  },
	  'fi-FI': function fiFI(str) {
	    return /^(?=.{4,7})(([A-Z]{1,3}|[0-9]{1,3})[\s-]?([A-Z]{1,3}|[0-9]{1,5}))$/.test(str);
	  },
	  'pt-PT': function ptPT(str) {
	    return /^([A-Z]{2}|[0-9]{2})[ -·]?([A-Z]{2}|[0-9]{2})[ -·]?([A-Z]{2}|[0-9]{2})$/.test(str);
	  },
	  'sq-AL': function sqAL(str) {
	    return /^[A-Z]{2}[- ]?((\d{3}[- ]?(([A-Z]{2})|T))|(R[- ]?\d{3}))$/.test(str);
	  },
	  'pt-BR': function ptBR(str) {
	    return /^[A-Z]{3}[ -]?[0-9][A-Z][0-9]{2}|[A-Z]{3}[ -]?[0-9]{4}$/.test(str);
	  }
	};

	function isLicensePlate(str, locale) {
	  (0, _assertString.default)(str);

	  if (locale in validators) {
	    return validators[locale](str);
	  } else if (locale === 'any') {
	    for (var key in validators) {
	      /* eslint guard-for-in: 0 */
	      var validator = validators[key];

	      if (validator(str)) {
	        return true;
	      }
	    }

	    return false;
	  }

	  throw new Error("Invalid locale '".concat(locale, "'"));
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(isLicensePlate_1);

	var isStrongPassword_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isStrongPassword;

	var _merge = _interopRequireDefault(require$$0$1);

	var _assertString = _interopRequireDefault(require$$0$2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var upperCaseRegex = /^[A-Z]$/;
	var lowerCaseRegex = /^[a-z]$/;
	var numberRegex = /^[0-9]$/;
	var symbolRegex = /^[-#!$@%^&*()_+|~=`{}\[\]:";'<>?,.\/ ]$/;
	var defaultOptions = {
	  minLength: 8,
	  minLowercase: 1,
	  minUppercase: 1,
	  minNumbers: 1,
	  minSymbols: 1,
	  returnScore: false,
	  pointsPerUnique: 1,
	  pointsPerRepeat: 0.5,
	  pointsForContainingLower: 10,
	  pointsForContainingUpper: 10,
	  pointsForContainingNumber: 10,
	  pointsForContainingSymbol: 10
	};
	/* Counts number of occurrences of each char in a string
	 * could be moved to util/ ?
	*/

	function countChars(str) {
	  var result = {};
	  Array.from(str).forEach(function (char) {
	    var curVal = result[char];

	    if (curVal) {
	      result[char] += 1;
	    } else {
	      result[char] = 1;
	    }
	  });
	  return result;
	}
	/* Return information about a password */


	function analyzePassword(password) {
	  var charMap = countChars(password);
	  var analysis = {
	    length: password.length,
	    uniqueChars: Object.keys(charMap).length,
	    uppercaseCount: 0,
	    lowercaseCount: 0,
	    numberCount: 0,
	    symbolCount: 0
	  };
	  Object.keys(charMap).forEach(function (char) {
	    /* istanbul ignore else */
	    if (upperCaseRegex.test(char)) {
	      analysis.uppercaseCount += charMap[char];
	    } else if (lowerCaseRegex.test(char)) {
	      analysis.lowercaseCount += charMap[char];
	    } else if (numberRegex.test(char)) {
	      analysis.numberCount += charMap[char];
	    } else if (symbolRegex.test(char)) {
	      analysis.symbolCount += charMap[char];
	    }
	  });
	  return analysis;
	}

	function scorePassword(analysis, scoringOptions) {
	  var points = 0;
	  points += analysis.uniqueChars * scoringOptions.pointsPerUnique;
	  points += (analysis.length - analysis.uniqueChars) * scoringOptions.pointsPerRepeat;

	  if (analysis.lowercaseCount > 0) {
	    points += scoringOptions.pointsForContainingLower;
	  }

	  if (analysis.uppercaseCount > 0) {
	    points += scoringOptions.pointsForContainingUpper;
	  }

	  if (analysis.numberCount > 0) {
	    points += scoringOptions.pointsForContainingNumber;
	  }

	  if (analysis.symbolCount > 0) {
	    points += scoringOptions.pointsForContainingSymbol;
	  }

	  return points;
	}

	function isStrongPassword(str) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	  (0, _assertString.default)(str);
	  var analysis = analyzePassword(str);
	  options = (0, _merge.default)(options || {}, defaultOptions);

	  if (options.returnScore) {
	    return scorePassword(analysis, options);
	  }

	  return analysis.length >= options.minLength && analysis.lowercaseCount >= options.minLowercase && analysis.uppercaseCount >= options.minUppercase && analysis.numberCount >= options.minNumbers && analysis.symbolCount >= options.minSymbols;
	}

	module.exports = exports.default;
	module.exports.default = exports.default;
	});

	unwrapExports(isStrongPassword_1);

	var isVAT_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isVAT;
	exports.vatMatchers = void 0;

	var _assertString = _interopRequireDefault(require$$0$2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var vatMatchers = {
	  GB: /^GB((\d{3} \d{4} ([0-8][0-9]|9[0-6]))|(\d{9} \d{3})|(((GD[0-4])|(HA[5-9]))[0-9]{2}))$/,
	  IT: /^(IT)?[0-9]{11}$/,
	  NL: /^(NL)?[0-9]{9}B[0-9]{2}$/
	};
	exports.vatMatchers = vatMatchers;

	function isVAT(str, countryCode) {
	  (0, _assertString.default)(str);
	  (0, _assertString.default)(countryCode);

	  if (countryCode in vatMatchers) {
	    return vatMatchers[countryCode].test(str);
	  }

	  throw new Error("Invalid country code: '".concat(countryCode, "'"));
	}
	});

	unwrapExports(isVAT_1);
	isVAT_1.vatMatchers;

	var require$$2 = toInt_1;

	var require$$3 = toBoolean_1;

	var require$$4 = equals_1;

	var require$$5 = contains_1;

	var require$$6 = matches_1;

	var require$$7 = isEmail_1;

	var require$$8 = isURL_1;

	var require$$9 = isMACAddress_1;

	var require$$11 = isIPRange_1;

	var require$$14 = isBoolean_1;

	var require$$15 = isLocale_1;

	var require$$16 = isAlpha_1;

	var require$$17 = isAlphanumeric_1;

	var require$$18 = isNumeric_1;

	var require$$19 = isPassportNumber_1;

	var require$$20 = isPort_1;

	var require$$21 = isLowercase_1;

	var require$$22 = isUppercase_1;

	var require$$23 = isIMEI_1;

	var require$$24 = isAscii_1;

	var require$$27 = isVariableWidth_1;

	var require$$28 = isMultibyte_1;

	var require$$29 = isSemVer_1;

	var require$$30 = isSurrogatePair_1;

	var require$$33 = isDecimal_1;

	var require$$35 = isOctal_1;

	var require$$36 = isDivisibleBy_1;

	var require$$37 = isHexColor_1;

	var require$$38 = isRgbColor_1;

	var require$$39 = isHSL_1;

	var require$$40 = isISRC_1;

	var require$$41 = isIBAN_1;

	var require$$42 = isBIC_1;

	var require$$43 = isMD5_1;

	var require$$44 = isHash_1;

	var require$$45 = isJWT_1;

	var require$$46 = isJSON_1;

	var require$$47 = isEmpty_1;

	var require$$48 = isLength_1;

	var require$$50 = isUUID_1;

	var require$$51 = isMongoId_1;

	var require$$52 = isAfter_1;

	var require$$53 = isBefore_1;

	var require$$54 = isIn_1;

	var require$$55 = isCreditCard_1;

	var require$$56 = isIdentityCard_1;

	var require$$57 = isEAN_1;

	var require$$58 = isISIN_1;

	var require$$59 = isISBN_1;

	var require$$60 = isISSN_1;

	var require$$61 = isTaxID_1;

	var require$$62 = isMobilePhone_1;

	var require$$63 = isEthereumAddress_1;

	var require$$64 = isCurrency_1;

	var require$$65 = isBtcAddress_1;

	var require$$66 = isISO8601_1;

	var require$$67 = isRFC3339_1;

	var require$$69 = isISO31661Alpha3_1;

	var require$$70 = isISO4217_1;

	var require$$71 = isBase32_1;

	var require$$72 = isBase58_1;

	var require$$74 = isDataURI_1;

	var require$$75 = isMagnetURI_1;

	var require$$76 = isMimeType_1;

	var require$$77 = isLatLong_1;

	var require$$78 = isPostalCode_1;

	var require$$81 = trim_1;

	var require$$82 = _escape;

	var require$$83 = _unescape;

	var require$$84 = stripLow_1;

	var require$$85 = whitelist_1;

	var require$$87 = isWhitelisted_1;

	var require$$88 = normalizeEmail_1;

	var require$$89 = isSlug_1;

	var require$$90 = isLicensePlate_1;

	var require$$91 = isStrongPassword_1;

	var require$$92 = isVAT_1;

	var validator_1 = createCommonjsModule(function (module, exports) {

	function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = void 0;

	var _toDate = _interopRequireDefault(require$$0);

	var _toFloat = _interopRequireDefault(require$$1$1);

	var _toInt = _interopRequireDefault(require$$2);

	var _toBoolean = _interopRequireDefault(require$$3);

	var _equals = _interopRequireDefault(require$$4);

	var _contains = _interopRequireDefault(require$$5);

	var _matches = _interopRequireDefault(require$$6);

	var _isEmail = _interopRequireDefault(require$$7);

	var _isURL = _interopRequireDefault(require$$8);

	var _isMACAddress = _interopRequireDefault(require$$9);

	var _isIP = _interopRequireDefault(require$$10);

	var _isIPRange = _interopRequireDefault(require$$11);

	var _isFQDN = _interopRequireDefault(require$$12);

	var _isDate = _interopRequireDefault(require$$13);

	var _isBoolean = _interopRequireDefault(require$$14);

	var _isLocale = _interopRequireDefault(require$$15);

	var _isAlpha = _interopRequireWildcard(require$$16);

	var _isAlphanumeric = _interopRequireWildcard(require$$17);

	var _isNumeric = _interopRequireDefault(require$$18);

	var _isPassportNumber = _interopRequireDefault(require$$19);

	var _isPort = _interopRequireDefault(require$$20);

	var _isLowercase = _interopRequireDefault(require$$21);

	var _isUppercase = _interopRequireDefault(require$$22);

	var _isIMEI = _interopRequireDefault(require$$23);

	var _isAscii = _interopRequireDefault(require$$24);

	var _isFullWidth = _interopRequireDefault(require$$25);

	var _isHalfWidth = _interopRequireDefault(require$$26);

	var _isVariableWidth = _interopRequireDefault(require$$27);

	var _isMultibyte = _interopRequireDefault(require$$28);

	var _isSemVer = _interopRequireDefault(require$$29);

	var _isSurrogatePair = _interopRequireDefault(require$$30);

	var _isInt = _interopRequireDefault(require$$31);

	var _isFloat = _interopRequireWildcard(require$$32);

	var _isDecimal = _interopRequireDefault(require$$33);

	var _isHexadecimal = _interopRequireDefault(require$$34);

	var _isOctal = _interopRequireDefault(require$$35);

	var _isDivisibleBy = _interopRequireDefault(require$$36);

	var _isHexColor = _interopRequireDefault(require$$37);

	var _isRgbColor = _interopRequireDefault(require$$38);

	var _isHSL = _interopRequireDefault(require$$39);

	var _isISRC = _interopRequireDefault(require$$40);

	var _isIBAN = _interopRequireWildcard(require$$41);

	var _isBIC = _interopRequireDefault(require$$42);

	var _isMD = _interopRequireDefault(require$$43);

	var _isHash = _interopRequireDefault(require$$44);

	var _isJWT = _interopRequireDefault(require$$45);

	var _isJSON = _interopRequireDefault(require$$46);

	var _isEmpty = _interopRequireDefault(require$$47);

	var _isLength = _interopRequireDefault(require$$48);

	var _isByteLength = _interopRequireDefault(require$$49);

	var _isUUID = _interopRequireDefault(require$$50);

	var _isMongoId = _interopRequireDefault(require$$51);

	var _isAfter = _interopRequireDefault(require$$52);

	var _isBefore = _interopRequireDefault(require$$53);

	var _isIn = _interopRequireDefault(require$$54);

	var _isCreditCard = _interopRequireDefault(require$$55);

	var _isIdentityCard = _interopRequireDefault(require$$56);

	var _isEAN = _interopRequireDefault(require$$57);

	var _isISIN = _interopRequireDefault(require$$58);

	var _isISBN = _interopRequireDefault(require$$59);

	var _isISSN = _interopRequireDefault(require$$60);

	var _isTaxID = _interopRequireDefault(require$$61);

	var _isMobilePhone = _interopRequireWildcard(require$$62);

	var _isEthereumAddress = _interopRequireDefault(require$$63);

	var _isCurrency = _interopRequireDefault(require$$64);

	var _isBtcAddress = _interopRequireDefault(require$$65);

	var _isISO = _interopRequireDefault(require$$66);

	var _isRFC = _interopRequireDefault(require$$67);

	var _isISO31661Alpha = _interopRequireDefault(require$$68);

	var _isISO31661Alpha2 = _interopRequireDefault(require$$69);

	var _isISO2 = _interopRequireDefault(require$$70);

	var _isBase = _interopRequireDefault(require$$71);

	var _isBase2 = _interopRequireDefault(require$$72);

	var _isBase3 = _interopRequireDefault(require$$73);

	var _isDataURI = _interopRequireDefault(require$$74);

	var _isMagnetURI = _interopRequireDefault(require$$75);

	var _isMimeType = _interopRequireDefault(require$$76);

	var _isLatLong = _interopRequireDefault(require$$77);

	var _isPostalCode = _interopRequireWildcard(require$$78);

	var _ltrim = _interopRequireDefault(require$$79);

	var _rtrim = _interopRequireDefault(require$$80);

	var _trim = _interopRequireDefault(require$$81);

	var _escape = _interopRequireDefault(require$$82);

	var _unescape = _interopRequireDefault(require$$83);

	var _stripLow = _interopRequireDefault(require$$84);

	var _whitelist = _interopRequireDefault(require$$85);

	var _blacklist = _interopRequireDefault(require$$86);

	var _isWhitelisted = _interopRequireDefault(require$$87);

	var _normalizeEmail = _interopRequireDefault(require$$88);

	var _isSlug = _interopRequireDefault(require$$89);

	var _isLicensePlate = _interopRequireDefault(require$$90);

	var _isStrongPassword = _interopRequireDefault(require$$91);

	var _isVAT = _interopRequireDefault(require$$92);

	function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var version = '13.7.0';
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
	  isISO4217: _isISO2.default,
	  isBase32: _isBase.default,
	  isBase58: _isBase2.default,
	  isBase64: _isBase3.default,
	  isDataURI: _isDataURI.default,
	  isMagnetURI: _isMagnetURI.default,
	  isMimeType: _isMimeType.default,
	  isLatLong: _isLatLong.default,
	  ltrim: _ltrim.default,
	  rtrim: _rtrim.default,
	  trim: _trim.default,
	  escape: _escape.default,
	  unescape: _unescape.default,
	  stripLow: _stripLow.default,
	  whitelist: _whitelist.default,
	  blacklist: _blacklist.default,
	  isWhitelisted: _isWhitelisted.default,
	  normalizeEmail: _normalizeEmail.default,
	  toString: toString,
	  isSlug: _isSlug.default,
	  isStrongPassword: _isStrongPassword.default,
	  isTaxID: _isTaxID.default,
	  isDate: _isDate.default,
	  isLicensePlate: _isLicensePlate.default,
	  isVAT: _isVAT.default,
	  ibanLocales: _isIBAN.locales
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
					if(!validator.isMobilePhone(value.replace(/\D/g, ''))){
						errors.push('Необходимо ввести номер мобильного телефона.');
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

		static formatPhone(val){
		  //starting from 11 digits in phone number
		  const slots = [1, 2, 2, 2, 3, 3, 3, 4, 4, 5, 5];
		  let digits = val.replace(/\D/g, '');
		  //if there are more, move them to country code slot
		  if(digits.length > 11){
		    let d = digits.length - 11;
		    while(d > 0){
		      d--;
		      slots.unshift(1);
		    }
		  }
		  let stack = ['', '', '', '', ''];
		  Array.from(digits).forEach((digit, index) => {
		    let slot = slots[index];
		    stack[slot - 1] = (stack[slot - 1] + digit);
		  });
		  return `+${stack[0]} (${stack[1]}) ${stack[2]}-${stack[3]}-${stack[4]}`;
		}
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
	function is_empty(obj) {
	    return Object.keys(obj).length === 0;
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
	    if (text.wholeText !== data)
	        text.data = data;
	}
	function set_input_value(input, value) {
	    input.value = value == null ? '' : value;
	}
	function custom_event(type, detail, bubbles = false) {
	    const e = document.createEvent('CustomEvent');
	    e.initCustomEvent(type, bubbles, false, detail);
	    return e;
	}

	let current_component;
	function set_current_component(component) {
	    current_component = component;
	}
	function get_current_component() {
	    if (!current_component)
	        throw new Error('Function called outside component initialization');
	    return current_component;
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
	        set_current_component(null);
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
	function create_component(block) {
	    block && block.c();
	}
	function mount_component(component, target, anchor, customElement) {
	    const { fragment, on_mount, on_destroy, after_update } = component.$$;
	    fragment && fragment.m(target, anchor);
	    if (!customElement) {
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
	    }
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
	function init(component, options, instance, create_fragment, not_equal, props, append_styles, dirty = [-1]) {
	    const parent_component = current_component;
	    set_current_component(component);
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
	        on_disconnect: [],
	        before_update: [],
	        after_update: [],
	        context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
	        // everything else
	        callbacks: blank_object(),
	        dirty,
	        skip_bound: false,
	        root: options.target || parent_component.$$.root
	    };
	    append_styles && append_styles($$.root);
	    let ready = false;
	    $$.ctx = instance
	        ? instance(component, options.props || {}, (i, ret, ...rest) => {
	            const value = rest.length ? rest[0] : ret;
	            if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
	                if (!$$.skip_bound && $$.bound[i])
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
	        mount_component(component, options.target, options.anchor, options.customElement);
	        flush();
	    }
	    set_current_component(parent_component);
	}
	/**
	 * Base class for Svelte components. Used when dev=false.
	 */
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
	    $set($$props) {
	        if (this.$$set && !is_empty($$props)) {
	            this.$$.skip_bound = true;
	            this.$$set($$props);
	            this.$$.skip_bound = false;
	        }
	    }
	}

	/* src/controllers/guest/login.svelte generated by Svelte v3.44.2 */

	function get_each_context(ctx, list, i) {
		const child_ctx = ctx.slice();
		child_ctx[61] = list[i];
		return child_ctx;
	}

	// (274:3) {:else}
	function create_else_block$1(ctx) {
		let div2;
		let t0;
		let t1;
		let t2;
		let t3;
		let t4;
		let t5;
		let t6;
		let div0;
		let t7;
		let t8;
		let div1;
		let current;
		let if_block0 = /*title*/ ctx[8].__enabled && create_if_block_18$1(ctx);
		let if_block1 = /*description*/ ctx[9].__enabled && create_if_block_17$1(ctx);
		let if_block2 = /*mode*/ ctx[5] == 'login' && create_if_block_11$1(ctx);
		let if_block3 = /*mode*/ ctx[5] == 'requestLoginCodeOnEmail' && create_if_block_9$1(ctx);
		let if_block4 = /*mode*/ ctx[5] == 'requestLoginCodeOnTelephone' && create_if_block_7$1(ctx);
		let if_block5 = /*mode*/ ctx[5] == 'loginByCode' && create_if_block_5$1(ctx);
		let if_block6 = /*errorMessage*/ ctx[15] != false && create_if_block_4$1(ctx);
		let if_block7 = /*cancel*/ ctx[11].enabled && create_if_block_3$1(ctx);
		let if_block8 = /*submit*/ ctx[10].enabled && create_if_block_2$1(ctx);
		let each_value = /*MODES*/ ctx[7];
		let each_blocks = [];

		for (let i = 0; i < each_value.length; i += 1) {
			each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
		}

		return {
			c() {
				div2 = element("div");
				if (if_block0) if_block0.c();
				t0 = space();
				if (if_block1) if_block1.c();
				t1 = space();
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
				div0 = element("div");
				if (if_block7) if_block7.c();
				t7 = space();
				if (if_block8) if_block8.c();
				t8 = space();
				div1 = element("div");

				for (let i = 0; i < each_blocks.length; i += 1) {
					each_blocks[i].c();
				}

				attr(div0, "class", "buttons-row");
				attr(div1, "class", "buttons-row-2 field has-addons svelte-o8we01");
				attr(div2, "class", "user-login-form svelte-o8we01");
			},
			m(target, anchor) {
				insert(target, div2, anchor);
				if (if_block0) if_block0.m(div2, null);
				append(div2, t0);
				if (if_block1) if_block1.m(div2, null);
				append(div2, t1);
				if (if_block2) if_block2.m(div2, null);
				append(div2, t2);
				if (if_block3) if_block3.m(div2, null);
				append(div2, t3);
				if (if_block4) if_block4.m(div2, null);
				append(div2, t4);
				if (if_block5) if_block5.m(div2, null);
				append(div2, t5);
				if (if_block6) if_block6.m(div2, null);
				append(div2, t6);
				append(div2, div0);
				if (if_block7) if_block7.m(div0, null);
				append(div0, t7);
				if (if_block8) if_block8.m(div0, null);
				append(div2, t8);
				append(div2, div1);

				for (let i = 0; i < each_blocks.length; i += 1) {
					each_blocks[i].m(div1, null);
				}

				current = true;
			},
			p(ctx, dirty) {
				if (/*title*/ ctx[8].__enabled) {
					if (if_block0) {
						if_block0.p(ctx, dirty);
					} else {
						if_block0 = create_if_block_18$1(ctx);
						if_block0.c();
						if_block0.m(div2, t0);
					}
				} else if (if_block0) {
					if_block0.d(1);
					if_block0 = null;
				}

				if (/*description*/ ctx[9].__enabled) {
					if (if_block1) {
						if_block1.p(ctx, dirty);
					} else {
						if_block1 = create_if_block_17$1(ctx);
						if_block1.c();
						if_block1.m(div2, t1);
					}
				} else if (if_block1) {
					if_block1.d(1);
					if_block1 = null;
				}

				if (/*mode*/ ctx[5] == 'login') {
					if (if_block2) {
						if_block2.p(ctx, dirty);
					} else {
						if_block2 = create_if_block_11$1(ctx);
						if_block2.c();
						if_block2.m(div2, t2);
					}
				} else if (if_block2) {
					if_block2.d(1);
					if_block2 = null;
				}

				if (/*mode*/ ctx[5] == 'requestLoginCodeOnEmail') {
					if (if_block3) {
						if_block3.p(ctx, dirty);
					} else {
						if_block3 = create_if_block_9$1(ctx);
						if_block3.c();
						if_block3.m(div2, t3);
					}
				} else if (if_block3) {
					if_block3.d(1);
					if_block3 = null;
				}

				if (/*mode*/ ctx[5] == 'requestLoginCodeOnTelephone') {
					if (if_block4) {
						if_block4.p(ctx, dirty);
					} else {
						if_block4 = create_if_block_7$1(ctx);
						if_block4.c();
						if_block4.m(div2, t4);
					}
				} else if (if_block4) {
					if_block4.d(1);
					if_block4 = null;
				}

				if (/*mode*/ ctx[5] == 'loginByCode') {
					if (if_block5) {
						if_block5.p(ctx, dirty);
					} else {
						if_block5 = create_if_block_5$1(ctx);
						if_block5.c();
						if_block5.m(div2, t5);
					}
				} else if (if_block5) {
					if_block5.d(1);
					if_block5 = null;
				}

				if (/*errorMessage*/ ctx[15] != false) {
					if (if_block6) {
						if_block6.p(ctx, dirty);

						if (dirty[0] & /*errorMessage*/ 32768) {
							transition_in(if_block6, 1);
						}
					} else {
						if_block6 = create_if_block_4$1(ctx);
						if_block6.c();
						transition_in(if_block6, 1);
						if_block6.m(div2, t6);
					}
				} else if (if_block6) {
					group_outros();

					transition_out(if_block6, 1, 1, () => {
						if_block6 = null;
					});

					check_outros();
				}

				if (/*cancel*/ ctx[11].enabled) {
					if (if_block7) {
						if_block7.p(ctx, dirty);
					} else {
						if_block7 = create_if_block_3$1(ctx);
						if_block7.c();
						if_block7.m(div0, t7);
					}
				} else if (if_block7) {
					if_block7.d(1);
					if_block7 = null;
				}

				if (/*submit*/ ctx[10].enabled) {
					if (if_block8) {
						if_block8.p(ctx, dirty);
					} else {
						if_block8 = create_if_block_2$1(ctx);
						if_block8.c();
						if_block8.m(div0, null);
					}
				} else if (if_block8) {
					if_block8.d(1);
					if_block8 = null;
				}

				if (dirty[0] & /*MODES, setModeBind, title, mode*/ 131488) {
					each_value = /*MODES*/ ctx[7];
					let i;

					for (i = 0; i < each_value.length; i += 1) {
						const child_ctx = get_each_context(ctx, each_value, i);

						if (each_blocks[i]) {
							each_blocks[i].p(child_ctx, dirty);
						} else {
							each_blocks[i] = create_each_block(child_ctx);
							each_blocks[i].c();
							each_blocks[i].m(div1, null);
						}
					}

					for (; i < each_blocks.length; i += 1) {
						each_blocks[i].d(1);
					}

					each_blocks.length = each_value.length;
				}
			},
			i(local) {
				if (current) return;
				transition_in(if_block6);
				current = true;
			},
			o(local) {
				transition_out(if_block6);
				current = false;
			},
			d(detaching) {
				if (detaching) detach(div2);
				if (if_block0) if_block0.d();
				if (if_block1) if_block1.d();
				if (if_block2) if_block2.d();
				if (if_block3) if_block3.d();
				if (if_block4) if_block4.d();
				if (if_block5) if_block5.d();
				if (if_block6) if_block6.d();
				if (if_block7) if_block7.d();
				if (if_block8) if_block8.d();
				destroy_each(each_blocks, detaching);
			}
		};
	}

	// (272:3) {#if success}
	function create_if_block$1(ctx) {
		let uisuccess;
		let current;

		uisuccess = new notBulma.UISuccess({
				props: {
					title: "",
					message: /*SUCCESS_TEXT*/ ctx[6][/*mode*/ ctx[5]]
				}
			});

		return {
			c() {
				create_component(uisuccess.$$.fragment);
			},
			m(target, anchor) {
				mount_component(uisuccess, target, anchor);
				current = true;
			},
			p(ctx, dirty) {
				const uisuccess_changes = {};
				if (dirty[0] & /*mode*/ 32) uisuccess_changes.message = /*SUCCESS_TEXT*/ ctx[6][/*mode*/ ctx[5]];
				uisuccess.$set(uisuccess_changes);
			},
			i(local) {
				if (current) return;
				transition_in(uisuccess.$$.fragment, local);
				current = true;
			},
			o(local) {
				transition_out(uisuccess.$$.fragment, local);
				current = false;
			},
			d(detaching) {
				destroy_component(uisuccess, detaching);
			}
		};
	}

	// (276:4) {#if title.__enabled}
	function create_if_block_18$1(ctx) {
		let h5;
		let t_value = /*title*/ ctx[8][/*mode*/ ctx[5]] + "";
		let t;

		return {
			c() {
				h5 = element("h5");
				t = text(t_value);
				attr(h5, "class", "title");
			},
			m(target, anchor) {
				insert(target, h5, anchor);
				append(h5, t);
			},
			p(ctx, dirty) {
				if (dirty[0] & /*title, mode*/ 288 && t_value !== (t_value = /*title*/ ctx[8][/*mode*/ ctx[5]] + "")) set_data(t, t_value);
			},
			d(detaching) {
				if (detaching) detach(h5);
			}
		};
	}

	// (279:4) {#if description.__enabled}
	function create_if_block_17$1(ctx) {
		let h6;
		let t_value = /*description*/ ctx[9][/*mode*/ ctx[5]] + "";
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
				if (dirty[0] & /*description, mode*/ 544 && t_value !== (t_value = /*description*/ ctx[9][/*mode*/ ctx[5]] + "")) set_data(t, t_value);
			},
			d(detaching) {
				if (detaching) detach(h6);
			}
		};
	}

	// (282:4) {#if mode=='login'}
	function create_if_block_11$1(ctx) {
		let t0;
		let t1;
		let if_block2_anchor;
		let if_block0 = /*email*/ ctx[1].enabled && create_if_block_15$1(ctx);
		let if_block1 = /*username*/ ctx[3].enabled && create_if_block_13$1(ctx);
		let if_block2 = /*password*/ ctx[4].enabled && create_if_block_12$1(ctx);

		return {
			c() {
				if (if_block0) if_block0.c();
				t0 = space();
				if (if_block1) if_block1.c();
				t1 = space();
				if (if_block2) if_block2.c();
				if_block2_anchor = empty();
			},
			m(target, anchor) {
				if (if_block0) if_block0.m(target, anchor);
				insert(target, t0, anchor);
				if (if_block1) if_block1.m(target, anchor);
				insert(target, t1, anchor);
				if (if_block2) if_block2.m(target, anchor);
				insert(target, if_block2_anchor, anchor);
			},
			p(ctx, dirty) {
				if (/*email*/ ctx[1].enabled) {
					if (if_block0) {
						if_block0.p(ctx, dirty);
					} else {
						if_block0 = create_if_block_15$1(ctx);
						if_block0.c();
						if_block0.m(t0.parentNode, t0);
					}
				} else if (if_block0) {
					if_block0.d(1);
					if_block0 = null;
				}

				if (/*username*/ ctx[3].enabled) {
					if (if_block1) {
						if_block1.p(ctx, dirty);
					} else {
						if_block1 = create_if_block_13$1(ctx);
						if_block1.c();
						if_block1.m(t1.parentNode, t1);
					}
				} else if (if_block1) {
					if_block1.d(1);
					if_block1 = null;
				}

				if (/*password*/ ctx[4].enabled) {
					if (if_block2) {
						if_block2.p(ctx, dirty);
					} else {
						if_block2 = create_if_block_12$1(ctx);
						if_block2.c();
						if_block2.m(if_block2_anchor.parentNode, if_block2_anchor);
					}
				} else if (if_block2) {
					if_block2.d(1);
					if_block2 = null;
				}
			},
			d(detaching) {
				if (if_block0) if_block0.d(detaching);
				if (detaching) detach(t0);
				if (if_block1) if_block1.d(detaching);
				if (detaching) detach(t1);
				if (if_block2) if_block2.d(detaching);
				if (detaching) detach(if_block2_anchor);
			}
		};
	}

	// (283:4) {#if email.enabled}
	function create_if_block_15$1(ctx) {
		let div1;
		let label;
		let t0_value = /*email*/ ctx[1].label + "";
		let t0;
		let t1;
		let div0;
		let input;
		let input_class_value;
		let input_required_value;
		let input_placeholder_value;
		let input_invalid_value;
		let t2;
		let span0;
		let t3;
		let span1;
		let t4;
		let p;
		let t5;
		let p_class_value;
		let mounted;
		let dispose;

		function select_block_type_1(ctx, dirty) {
			if (/*validationErrors*/ ctx[14].email) return create_if_block_16$1;
			return create_else_block_5$1;
		}

		let current_block_type = select_block_type_1(ctx);
		let if_block = current_block_type(ctx);

		return {
			c() {
				div1 = element("div");
				label = element("label");
				t0 = text(t0_value);
				t1 = space();
				div0 = element("div");
				input = element("input");
				t2 = space();
				span0 = element("span");
				span0.innerHTML = `<i class="fas fa-envelope"></i>`;
				t3 = space();
				span1 = element("span");
				if_block.c();
				t4 = space();
				p = element("p");
				t5 = text(/*emailHelper*/ ctx[23]);
				attr(label, "class", "label");
				attr(label, "for", "user-login-form-email");
				attr(input, "id", "user-login-form-email");
				attr(input, "class", input_class_value = "input " + /*emailClasses*/ ctx[22] + " svelte-o8we01");
				input.required = input_required_value = /*email*/ ctx[1].required;
				attr(input, "placeholder", input_placeholder_value = /*email*/ ctx[1].placeholder);
				attr(input, "invalid", input_invalid_value = /*validationErrors*/ ctx[14].email);
				attr(input, "name", "email");
				attr(input, "type", "email");
				attr(input, "autocomplete", "email");
				attr(input, "aria-controls", "input-field-helper-email");
				attr(input, "aria-describedby", "input-field-helper-email");
				attr(span0, "class", "icon is-small is-left");
				attr(span1, "class", "icon is-small is-right");
				attr(div0, "class", "control has-icons-left has-icons-right");
				attr(p, "class", p_class_value = "help " + /*emailClasses*/ ctx[22] + " svelte-o8we01");
				attr(p, "id", "input-field-helper-email");
				attr(div1, "class", "user-form-field user-login-form-email field svelte-o8we01");
			},
			m(target, anchor) {
				insert(target, div1, anchor);
				append(div1, label);
				append(label, t0);
				append(div1, t1);
				append(div1, div0);
				append(div0, input);
				set_input_value(input, /*email*/ ctx[1].value);
				append(div0, t2);
				append(div0, span0);
				append(div0, t3);
				append(div0, span1);
				if_block.m(span1, null);
				append(div1, t4);
				append(div1, p);
				append(p, t5);

				if (!mounted) {
					dispose = [
						listen(input, "input", /*input_input_handler*/ ctx[47]),
						listen(input, "change", /*onChange*/ ctx[30]),
						listen(input, "input", /*onInput*/ ctx[31])
					];

					mounted = true;
				}
			},
			p(ctx, dirty) {
				if (dirty[0] & /*email*/ 2 && t0_value !== (t0_value = /*email*/ ctx[1].label + "")) set_data(t0, t0_value);

				if (dirty[0] & /*emailClasses*/ 4194304 && input_class_value !== (input_class_value = "input " + /*emailClasses*/ ctx[22] + " svelte-o8we01")) {
					attr(input, "class", input_class_value);
				}

				if (dirty[0] & /*email*/ 2 && input_required_value !== (input_required_value = /*email*/ ctx[1].required)) {
					input.required = input_required_value;
				}

				if (dirty[0] & /*email*/ 2 && input_placeholder_value !== (input_placeholder_value = /*email*/ ctx[1].placeholder)) {
					attr(input, "placeholder", input_placeholder_value);
				}

				if (dirty[0] & /*validationErrors*/ 16384 && input_invalid_value !== (input_invalid_value = /*validationErrors*/ ctx[14].email)) {
					attr(input, "invalid", input_invalid_value);
				}

				if (dirty[0] & /*email*/ 2 && input.value !== /*email*/ ctx[1].value) {
					set_input_value(input, /*email*/ ctx[1].value);
				}

				if (current_block_type !== (current_block_type = select_block_type_1(ctx))) {
					if_block.d(1);
					if_block = current_block_type(ctx);

					if (if_block) {
						if_block.c();
						if_block.m(span1, null);
					}
				}

				if (dirty[0] & /*emailHelper*/ 8388608) set_data(t5, /*emailHelper*/ ctx[23]);

				if (dirty[0] & /*emailClasses*/ 4194304 && p_class_value !== (p_class_value = "help " + /*emailClasses*/ ctx[22] + " svelte-o8we01")) {
					attr(p, "class", p_class_value);
				}
			},
			d(detaching) {
				if (detaching) detach(div1);
				if_block.d();
				mounted = false;
				run_all(dispose);
			}
		};
	}

	// (304:7) {:else}
	function create_else_block_5$1(ctx) {
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

	// (302:7) {#if validationErrors.email}
	function create_if_block_16$1(ctx) {
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

	// (312:4) {#if username.enabled}
	function create_if_block_13$1(ctx) {
		let div1;
		let label;
		let t0_value = /*username*/ ctx[3].label + "";
		let t0;
		let t1;
		let div0;
		let input;
		let input_class_value;
		let input_invalid_value;
		let input_required_value;
		let input_placeholder_value;
		let t2;
		let span0;
		let t3;
		let span1;
		let t4;
		let p;
		let t5;
		let p_class_value;
		let mounted;
		let dispose;

		function select_block_type_2(ctx, dirty) {
			if (/*validationErrors*/ ctx[14].username) return create_if_block_14$1;
			return create_else_block_4$1;
		}

		let current_block_type = select_block_type_2(ctx);
		let if_block = current_block_type(ctx);

		return {
			c() {
				div1 = element("div");
				label = element("label");
				t0 = text(t0_value);
				t1 = space();
				div0 = element("div");
				input = element("input");
				t2 = space();
				span0 = element("span");
				span0.innerHTML = `<i class="fas fa-user"></i>`;
				t3 = space();
				span1 = element("span");
				if_block.c();
				t4 = space();
				p = element("p");
				t5 = text(/*usernameHelper*/ ctx[27]);
				attr(label, "class", "label");
				attr(label, "for", "user-login-form-username");
				attr(input, "id", "user-login-form-username");
				attr(input, "class", input_class_value = "input " + /*usernameClasses*/ ctx[26] + " svelte-o8we01");
				attr(input, "type", "text");
				attr(input, "name", "username");
				attr(input, "invalid", input_invalid_value = /*validationErrors*/ ctx[14].username);
				input.required = input_required_value = /*username*/ ctx[3].required;
				attr(input, "placeholder", input_placeholder_value = /*username*/ ctx[3].placeholder);
				attr(input, "autocomplete", "username");
				attr(input, "aria-controls", "input-field-helper-username");
				attr(input, "aria-describedby", "input-field-helper-username");
				attr(span0, "class", "icon is-small is-left");
				attr(span1, "class", "icon is-small is-right");
				attr(div0, "class", "control has-icons-left has-icons-right");
				attr(p, "class", p_class_value = "help " + /*usernameClasses*/ ctx[26] + " svelte-o8we01");
				attr(p, "id", "input-field-helper-username");
				attr(div1, "class", "field user-form-field user-login-form-username svelte-o8we01");
			},
			m(target, anchor) {
				insert(target, div1, anchor);
				append(div1, label);
				append(label, t0);
				append(div1, t1);
				append(div1, div0);
				append(div0, input);
				set_input_value(input, /*username*/ ctx[3].value);
				append(div0, t2);
				append(div0, span0);
				append(div0, t3);
				append(div0, span1);
				if_block.m(span1, null);
				append(div1, t4);
				append(div1, p);
				append(p, t5);

				if (!mounted) {
					dispose = [
						listen(input, "input", /*input_input_handler_1*/ ctx[48]),
						listen(input, "change", /*onChange*/ ctx[30]),
						listen(input, "input", /*onInput*/ ctx[31])
					];

					mounted = true;
				}
			},
			p(ctx, dirty) {
				if (dirty[0] & /*username*/ 8 && t0_value !== (t0_value = /*username*/ ctx[3].label + "")) set_data(t0, t0_value);

				if (dirty[0] & /*usernameClasses*/ 67108864 && input_class_value !== (input_class_value = "input " + /*usernameClasses*/ ctx[26] + " svelte-o8we01")) {
					attr(input, "class", input_class_value);
				}

				if (dirty[0] & /*validationErrors*/ 16384 && input_invalid_value !== (input_invalid_value = /*validationErrors*/ ctx[14].username)) {
					attr(input, "invalid", input_invalid_value);
				}

				if (dirty[0] & /*username*/ 8 && input_required_value !== (input_required_value = /*username*/ ctx[3].required)) {
					input.required = input_required_value;
				}

				if (dirty[0] & /*username*/ 8 && input_placeholder_value !== (input_placeholder_value = /*username*/ ctx[3].placeholder)) {
					attr(input, "placeholder", input_placeholder_value);
				}

				if (dirty[0] & /*username*/ 8 && input.value !== /*username*/ ctx[3].value) {
					set_input_value(input, /*username*/ ctx[3].value);
				}

				if (current_block_type !== (current_block_type = select_block_type_2(ctx))) {
					if_block.d(1);
					if_block = current_block_type(ctx);

					if (if_block) {
						if_block.c();
						if_block.m(span1, null);
					}
				}

				if (dirty[0] & /*usernameHelper*/ 134217728) set_data(t5, /*usernameHelper*/ ctx[27]);

				if (dirty[0] & /*usernameClasses*/ 67108864 && p_class_value !== (p_class_value = "help " + /*usernameClasses*/ ctx[26] + " svelte-o8we01")) {
					attr(p, "class", p_class_value);
				}
			},
			d(detaching) {
				if (detaching) detach(div1);
				if_block.d();
				mounted = false;
				run_all(dispose);
			}
		};
	}

	// (335:7) {:else}
	function create_else_block_4$1(ctx) {
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

	// (333:7) {#if validationErrors.username}
	function create_if_block_14$1(ctx) {
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

	// (343:4) {#if password.enabled}
	function create_if_block_12$1(ctx) {
		let div1;
		let label;
		let t0_value = /*password*/ ctx[4].label + "";
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
		let p;
		let t4;
		let p_class_value;
		let mounted;
		let dispose;

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
				p = element("p");
				t4 = text(/*passwordHelper*/ ctx[21]);
				attr(label, "class", "label");
				attr(label, "for", "user-login-form-password");
				attr(input, "id", "user-login-form-password");
				attr(input, "class", input_class_value = "input " + /*passwordClasses*/ ctx[20] + " svelte-o8we01");
				attr(input, "type", "password");
				attr(input, "name", "password");
				attr(input, "invalid", input_invalid_value = /*validationErrors*/ ctx[14].password);
				input.required = input_required_value = /*password*/ ctx[4].required;
				attr(input, "placeholder", input_placeholder_value = /*password*/ ctx[4].placeholder);
				attr(input, "autocomplete", "password");
				attr(input, "aria-controls", "input-field-helper-password");
				attr(input, "aria-describedby", "input-field-helper-password");
				attr(span, "class", "icon is-small is-left");
				attr(div0, "class", "control has-icons-left has-icons-right");
				attr(p, "class", p_class_value = "help " + /*passwordClasses*/ ctx[20] + " svelte-o8we01");
				attr(p, "id", "input-field-helper-password");
				attr(div1, "class", "field user-form-field user-login-form-password svelte-o8we01");
			},
			m(target, anchor) {
				insert(target, div1, anchor);
				append(div1, label);
				append(label, t0);
				append(div1, t1);
				append(div1, div0);
				append(div0, input);
				set_input_value(input, /*password*/ ctx[4].value);
				append(div0, t2);
				append(div0, span);
				append(div1, t3);
				append(div1, p);
				append(p, t4);

				if (!mounted) {
					dispose = [
						listen(input, "input", /*input_input_handler_2*/ ctx[49]),
						listen(input, "change", /*onChange*/ ctx[30]),
						listen(input, "input", /*onInput*/ ctx[31])
					];

					mounted = true;
				}
			},
			p(ctx, dirty) {
				if (dirty[0] & /*password*/ 16 && t0_value !== (t0_value = /*password*/ ctx[4].label + "")) set_data(t0, t0_value);

				if (dirty[0] & /*passwordClasses*/ 1048576 && input_class_value !== (input_class_value = "input " + /*passwordClasses*/ ctx[20] + " svelte-o8we01")) {
					attr(input, "class", input_class_value);
				}

				if (dirty[0] & /*validationErrors*/ 16384 && input_invalid_value !== (input_invalid_value = /*validationErrors*/ ctx[14].password)) {
					attr(input, "invalid", input_invalid_value);
				}

				if (dirty[0] & /*password*/ 16 && input_required_value !== (input_required_value = /*password*/ ctx[4].required)) {
					input.required = input_required_value;
				}

				if (dirty[0] & /*password*/ 16 && input_placeholder_value !== (input_placeholder_value = /*password*/ ctx[4].placeholder)) {
					attr(input, "placeholder", input_placeholder_value);
				}

				if (dirty[0] & /*password*/ 16 && input.value !== /*password*/ ctx[4].value) {
					set_input_value(input, /*password*/ ctx[4].value);
				}

				if (dirty[0] & /*passwordHelper*/ 2097152) set_data(t4, /*passwordHelper*/ ctx[21]);

				if (dirty[0] & /*passwordClasses*/ 1048576 && p_class_value !== (p_class_value = "help " + /*passwordClasses*/ ctx[20] + " svelte-o8we01")) {
					attr(p, "class", p_class_value);
				}
			},
			d(detaching) {
				if (detaching) detach(div1);
				mounted = false;
				run_all(dispose);
			}
		};
	}

	// (368:4) {#if mode=='requestLoginCodeOnEmail'}
	function create_if_block_9$1(ctx) {
		let div1;
		let label;
		let t0_value = /*email*/ ctx[1].label + "";
		let t0;
		let t1;
		let div0;
		let input;
		let input_class_value;
		let input_invalid_value;
		let input_required_value;
		let input_placeholder_value;
		let t2;
		let span0;
		let t3;
		let span1;
		let t4;
		let p;
		let t5;
		let p_class_value;
		let mounted;
		let dispose;

		function select_block_type_3(ctx, dirty) {
			if (/*validationErrors*/ ctx[14].email) return create_if_block_10$1;
			return create_else_block_3$1;
		}

		let current_block_type = select_block_type_3(ctx);
		let if_block = current_block_type(ctx);

		return {
			c() {
				div1 = element("div");
				label = element("label");
				t0 = text(t0_value);
				t1 = space();
				div0 = element("div");
				input = element("input");
				t2 = space();
				span0 = element("span");
				span0.innerHTML = `<i class="fas fa-envelope"></i>`;
				t3 = space();
				span1 = element("span");
				if_block.c();
				t4 = space();
				p = element("p");
				t5 = text(/*emailHelper*/ ctx[23]);
				attr(label, "class", "label");
				attr(label, "for", "user-login-form-email");
				attr(input, "id", "user-login-form-email");
				attr(input, "class", input_class_value = "input " + /*emailClasses*/ ctx[22] + " svelte-o8we01");
				attr(input, "type", "email");
				attr(input, "name", "email");
				attr(input, "invalid", input_invalid_value = /*validationErrors*/ ctx[14].email);
				input.required = input_required_value = /*email*/ ctx[1].required;
				attr(input, "placeholder", input_placeholder_value = /*email*/ ctx[1].placeholder);
				attr(input, "autocomplete", "email");
				attr(input, "aria-controls", "input-field-helper-email");
				attr(input, "aria-describedby", "input-field-helper-email");
				attr(span0, "class", "icon is-small is-left");
				attr(span1, "class", "icon is-small is-right");
				attr(div0, "class", "control has-icons-left has-icons-right");
				attr(p, "class", p_class_value = "help " + /*emailClasses*/ ctx[22] + " svelte-o8we01");
				attr(p, "id", "input-field-helper-login");
				attr(div1, "class", "field user-form-field user-login-form-email svelte-o8we01");
			},
			m(target, anchor) {
				insert(target, div1, anchor);
				append(div1, label);
				append(label, t0);
				append(div1, t1);
				append(div1, div0);
				append(div0, input);
				set_input_value(input, /*email*/ ctx[1].value);
				append(div0, t2);
				append(div0, span0);
				append(div0, t3);
				append(div0, span1);
				if_block.m(span1, null);
				append(div1, t4);
				append(div1, p);
				append(p, t5);

				if (!mounted) {
					dispose = [
						listen(input, "input", /*input_input_handler_3*/ ctx[50]),
						listen(input, "change", /*onChange*/ ctx[30]),
						listen(input, "input", /*onInput*/ ctx[31])
					];

					mounted = true;
				}
			},
			p(ctx, dirty) {
				if (dirty[0] & /*email*/ 2 && t0_value !== (t0_value = /*email*/ ctx[1].label + "")) set_data(t0, t0_value);

				if (dirty[0] & /*emailClasses*/ 4194304 && input_class_value !== (input_class_value = "input " + /*emailClasses*/ ctx[22] + " svelte-o8we01")) {
					attr(input, "class", input_class_value);
				}

				if (dirty[0] & /*validationErrors*/ 16384 && input_invalid_value !== (input_invalid_value = /*validationErrors*/ ctx[14].email)) {
					attr(input, "invalid", input_invalid_value);
				}

				if (dirty[0] & /*email*/ 2 && input_required_value !== (input_required_value = /*email*/ ctx[1].required)) {
					input.required = input_required_value;
				}

				if (dirty[0] & /*email*/ 2 && input_placeholder_value !== (input_placeholder_value = /*email*/ ctx[1].placeholder)) {
					attr(input, "placeholder", input_placeholder_value);
				}

				if (dirty[0] & /*email*/ 2 && input.value !== /*email*/ ctx[1].value) {
					set_input_value(input, /*email*/ ctx[1].value);
				}

				if (current_block_type !== (current_block_type = select_block_type_3(ctx))) {
					if_block.d(1);
					if_block = current_block_type(ctx);

					if (if_block) {
						if_block.c();
						if_block.m(span1, null);
					}
				}

				if (dirty[0] & /*emailHelper*/ 8388608) set_data(t5, /*emailHelper*/ ctx[23]);

				if (dirty[0] & /*emailClasses*/ 4194304 && p_class_value !== (p_class_value = "help " + /*emailClasses*/ ctx[22] + " svelte-o8we01")) {
					attr(p, "class", p_class_value);
				}
			},
			d(detaching) {
				if (detaching) detach(div1);
				if_block.d();
				mounted = false;
				run_all(dispose);
			}
		};
	}

	// (391:7) {:else}
	function create_else_block_3$1(ctx) {
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

	// (389:7) {#if validationErrors.email}
	function create_if_block_10$1(ctx) {
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

	// (400:4) {#if mode=='requestLoginCodeOnTelephone'}
	function create_if_block_7$1(ctx) {
		let div1;
		let label;
		let t0_value = /*tel*/ ctx[0].label + "";
		let t0;
		let t1;
		let div0;
		let input;
		let input_class_value;
		let input_invalid_value;
		let input_required_value;
		let input_placeholder_value;
		let t2;
		let span0;
		let t3;
		let span1;
		let t4;
		let p;
		let t5;
		let p_class_value;
		let mounted;
		let dispose;

		function select_block_type_4(ctx, dirty) {
			if (/*validationErrors*/ ctx[14].tel) return create_if_block_8$1;
			return create_else_block_2$1;
		}

		let current_block_type = select_block_type_4(ctx);
		let if_block = current_block_type(ctx);

		return {
			c() {
				div1 = element("div");
				label = element("label");
				t0 = text(t0_value);
				t1 = space();
				div0 = element("div");
				input = element("input");
				t2 = space();
				span0 = element("span");
				span0.innerHTML = `<i class="fas fa-envelope"></i>`;
				t3 = space();
				span1 = element("span");
				if_block.c();
				t4 = space();
				p = element("p");
				t5 = text(/*telHelper*/ ctx[29]);
				attr(label, "class", "label");
				attr(label, "for", "user-login-form-tel");
				attr(input, "id", "user-login-form-tel");
				attr(input, "class", input_class_value = "input " + /*telClasses*/ ctx[28] + " svelte-o8we01");
				attr(input, "type", "tel");
				attr(input, "name", "tel");
				attr(input, "invalid", input_invalid_value = /*validationErrors*/ ctx[14].tel);
				input.required = input_required_value = /*tel*/ ctx[0].required;
				attr(input, "placeholder", input_placeholder_value = /*tel*/ ctx[0].placeholder);
				attr(input, "autocomplete", "tel");
				attr(input, "aria-controls", "input-field-helper-tel");
				attr(input, "aria-describedby", "input-field-helper-tel");
				attr(span0, "class", "icon is-small is-left");
				attr(span1, "class", "icon is-small is-right");
				attr(div0, "class", "control has-icons-left has-icons-right");
				attr(p, "class", p_class_value = "help " + /*telClasses*/ ctx[28] + " svelte-o8we01");
				attr(p, "id", "input-field-helper-tel");
				attr(div1, "class", "field user-form-field user-login-form-tel svelte-o8we01");
			},
			m(target, anchor) {
				insert(target, div1, anchor);
				append(div1, label);
				append(label, t0);
				append(div1, t1);
				append(div1, div0);
				append(div0, input);
				set_input_value(input, /*tel*/ ctx[0].value);
				append(div0, t2);
				append(div0, span0);
				append(div0, t3);
				append(div0, span1);
				if_block.m(span1, null);
				append(div1, t4);
				append(div1, p);
				append(p, t5);

				if (!mounted) {
					dispose = [
						listen(input, "input", /*input_input_handler_4*/ ctx[51]),
						listen(input, "change", /*onChange*/ ctx[30]),
						listen(input, "input", /*onInput*/ ctx[31])
					];

					mounted = true;
				}
			},
			p(ctx, dirty) {
				if (dirty[0] & /*tel*/ 1 && t0_value !== (t0_value = /*tel*/ ctx[0].label + "")) set_data(t0, t0_value);

				if (dirty[0] & /*telClasses*/ 268435456 && input_class_value !== (input_class_value = "input " + /*telClasses*/ ctx[28] + " svelte-o8we01")) {
					attr(input, "class", input_class_value);
				}

				if (dirty[0] & /*validationErrors*/ 16384 && input_invalid_value !== (input_invalid_value = /*validationErrors*/ ctx[14].tel)) {
					attr(input, "invalid", input_invalid_value);
				}

				if (dirty[0] & /*tel*/ 1 && input_required_value !== (input_required_value = /*tel*/ ctx[0].required)) {
					input.required = input_required_value;
				}

				if (dirty[0] & /*tel*/ 1 && input_placeholder_value !== (input_placeholder_value = /*tel*/ ctx[0].placeholder)) {
					attr(input, "placeholder", input_placeholder_value);
				}

				if (dirty[0] & /*tel*/ 1) {
					set_input_value(input, /*tel*/ ctx[0].value);
				}

				if (current_block_type !== (current_block_type = select_block_type_4(ctx))) {
					if_block.d(1);
					if_block = current_block_type(ctx);

					if (if_block) {
						if_block.c();
						if_block.m(span1, null);
					}
				}

				if (dirty[0] & /*telHelper*/ 536870912) set_data(t5, /*telHelper*/ ctx[29]);

				if (dirty[0] & /*telClasses*/ 268435456 && p_class_value !== (p_class_value = "help " + /*telClasses*/ ctx[28] + " svelte-o8we01")) {
					attr(p, "class", p_class_value);
				}
			},
			d(detaching) {
				if (detaching) detach(div1);
				if_block.d();
				mounted = false;
				run_all(dispose);
			}
		};
	}

	// (423:7) {:else}
	function create_else_block_2$1(ctx) {
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

	// (421:7) {#if validationErrors.tel}
	function create_if_block_8$1(ctx) {
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

	// (432:4) {#if mode=='loginByCode'}
	function create_if_block_5$1(ctx) {
		let div1;
		let label;
		let t0_value = /*code*/ ctx[2].label + "";
		let t0;
		let t1;
		let div0;
		let input;
		let input_class_value;
		let input_invalid_value;
		let input_required_value;
		let input_placeholder_value;
		let t2;
		let span0;
		let t3;
		let span1;
		let t4;
		let p;
		let t5;
		let p_class_value;
		let mounted;
		let dispose;

		function select_block_type_5(ctx, dirty) {
			if (/*validationErrors*/ ctx[14].code) return create_if_block_6$1;
			return create_else_block_1$1;
		}

		let current_block_type = select_block_type_5(ctx);
		let if_block = current_block_type(ctx);

		return {
			c() {
				div1 = element("div");
				label = element("label");
				t0 = text(t0_value);
				t1 = space();
				div0 = element("div");
				input = element("input");
				t2 = space();
				span0 = element("span");
				span0.innerHTML = `<i class="fas fa-user"></i>`;
				t3 = space();
				span1 = element("span");
				if_block.c();
				t4 = space();
				p = element("p");
				t5 = text(/*codeHelper*/ ctx[25]);
				attr(label, "class", "label");
				attr(label, "for", "user-login-form-code");
				attr(input, "id", "user-login-form-code");
				attr(input, "class", input_class_value = "input " + /*codeClasses*/ ctx[24] + " svelte-o8we01");
				attr(input, "type", "text");
				attr(input, "name", "code");
				attr(input, "invalid", input_invalid_value = /*validationErrors*/ ctx[14].code);
				input.required = input_required_value = true;
				attr(input, "placeholder", input_placeholder_value = /*code*/ ctx[2].placeholder);
				attr(input, "autocomplete", "code");
				attr(input, "aria-controls", "input-field-helper-code");
				attr(input, "aria-describedby", "input-field-helper-code");
				attr(span0, "class", "icon is-small is-left");
				attr(span1, "class", "icon is-small is-right");
				attr(div0, "class", "control has-icons-left has-icons-right");
				attr(p, "class", p_class_value = "help " + /*codeClasses*/ ctx[24] + " svelte-o8we01");
				attr(p, "id", "input-field-helper-code");
				attr(div1, "class", "field user-form-field user-login-form-code svelte-o8we01");
			},
			m(target, anchor) {
				insert(target, div1, anchor);
				append(div1, label);
				append(label, t0);
				append(div1, t1);
				append(div1, div0);
				append(div0, input);
				set_input_value(input, /*code*/ ctx[2].value);
				append(div0, t2);
				append(div0, span0);
				append(div0, t3);
				append(div0, span1);
				if_block.m(span1, null);
				append(div1, t4);
				append(div1, p);
				append(p, t5);

				if (!mounted) {
					dispose = [
						listen(input, "input", /*input_input_handler_5*/ ctx[52]),
						listen(input, "change", /*onChange*/ ctx[30]),
						listen(input, "input", /*onInput*/ ctx[31])
					];

					mounted = true;
				}
			},
			p(ctx, dirty) {
				if (dirty[0] & /*code*/ 4 && t0_value !== (t0_value = /*code*/ ctx[2].label + "")) set_data(t0, t0_value);

				if (dirty[0] & /*codeClasses*/ 16777216 && input_class_value !== (input_class_value = "input " + /*codeClasses*/ ctx[24] + " svelte-o8we01")) {
					attr(input, "class", input_class_value);
				}

				if (dirty[0] & /*validationErrors*/ 16384 && input_invalid_value !== (input_invalid_value = /*validationErrors*/ ctx[14].code)) {
					attr(input, "invalid", input_invalid_value);
				}

				if (dirty[0] & /*code*/ 4 && input_placeholder_value !== (input_placeholder_value = /*code*/ ctx[2].placeholder)) {
					attr(input, "placeholder", input_placeholder_value);
				}

				if (dirty[0] & /*code*/ 4 && input.value !== /*code*/ ctx[2].value) {
					set_input_value(input, /*code*/ ctx[2].value);
				}

				if (current_block_type !== (current_block_type = select_block_type_5(ctx))) {
					if_block.d(1);
					if_block = current_block_type(ctx);

					if (if_block) {
						if_block.c();
						if_block.m(span1, null);
					}
				}

				if (dirty[0] & /*codeHelper*/ 33554432) set_data(t5, /*codeHelper*/ ctx[25]);

				if (dirty[0] & /*codeClasses*/ 16777216 && p_class_value !== (p_class_value = "help " + /*codeClasses*/ ctx[24] + " svelte-o8we01")) {
					attr(p, "class", p_class_value);
				}
			},
			d(detaching) {
				if (detaching) detach(div1);
				if_block.d();
				mounted = false;
				run_all(dispose);
			}
		};
	}

	// (455:7) {:else}
	function create_else_block_1$1(ctx) {
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

	// (453:7) {#if validationErrors.code}
	function create_if_block_6$1(ctx) {
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

	// (464:4) {#if errorMessage!=false }
	function create_if_block_4$1(ctx) {
		let uierror;
		let current;

		uierror = new notBulma.UIError({
				props: {
					title: "",
					message: /*errorMessage*/ ctx[15]
				}
			});

		return {
			c() {
				create_component(uierror.$$.fragment);
			},
			m(target, anchor) {
				mount_component(uierror, target, anchor);
				current = true;
			},
			p(ctx, dirty) {
				const uierror_changes = {};
				if (dirty[0] & /*errorMessage*/ 32768) uierror_changes.message = /*errorMessage*/ ctx[15];
				uierror.$set(uierror_changes);
			},
			i(local) {
				if (current) return;
				transition_in(uierror.$$.fragment, local);
				current = true;
			},
			o(local) {
				transition_out(uierror.$$.fragment, local);
				current = false;
			},
			d(detaching) {
				destroy_component(uierror, detaching);
			}
		};
	}

	// (469:5) {#if cancel.enabled}
	function create_if_block_3$1(ctx) {
		let button;
		let t_value = /*cancel*/ ctx[11].caption + "";
		let t;
		let mounted;
		let dispose;

		return {
			c() {
				button = element("button");
				t = text(t_value);
				attr(button, "class", "button is-outlined user-login-form-cancel");
			},
			m(target, anchor) {
				insert(target, button, anchor);
				append(button, t);

				if (!mounted) {
					dispose = listen(button, "click", function () {
						if (is_function(/*rejectLogin*/ ctx[13])) /*rejectLogin*/ ctx[13].apply(this, arguments);
					});

					mounted = true;
				}
			},
			p(new_ctx, dirty) {
				ctx = new_ctx;
				if (dirty[0] & /*cancel*/ 2048 && t_value !== (t_value = /*cancel*/ ctx[11].caption + "")) set_data(t, t_value);
			},
			d(detaching) {
				if (detaching) detach(button);
				mounted = false;
				dispose();
			}
		};
	}

	// (472:5) {#if submit.enabled}
	function create_if_block_2$1(ctx) {
		let button;
		let t_value = /*submit*/ ctx[10].caption + "";
		let t;
		let button_class_value;
		let mounted;
		let dispose;

		return {
			c() {
				button = element("button");
				t = text(t_value);
				button.disabled = /*formInvalid*/ ctx[18];
				attr(button, "class", button_class_value = "" + (/*submitClasses*/ ctx[19] + " button is-primary is-hovered user-login-form-submit pull-right" + " svelte-o8we01"));
			},
			m(target, anchor) {
				insert(target, button, anchor);
				append(button, t);

				if (!mounted) {
					dispose = listen(button, "click", function () {
						if (is_function(/*tryModeAction*/ ctx[12])) /*tryModeAction*/ ctx[12].apply(this, arguments);
					});

					mounted = true;
				}
			},
			p(new_ctx, dirty) {
				ctx = new_ctx;
				if (dirty[0] & /*submit*/ 1024 && t_value !== (t_value = /*submit*/ ctx[10].caption + "")) set_data(t, t_value);

				if (dirty[0] & /*formInvalid*/ 262144) {
					button.disabled = /*formInvalid*/ ctx[18];
				}

				if (dirty[0] & /*submitClasses*/ 524288 && button_class_value !== (button_class_value = "" + (/*submitClasses*/ ctx[19] + " button is-primary is-hovered user-login-form-submit pull-right" + " svelte-o8we01"))) {
					attr(button, "class", button_class_value);
				}
			},
			d(detaching) {
				if (detaching) detach(button);
				mounted = false;
				dispose();
			}
		};
	}

	// (478:5) {#if mode != thisMode}
	function create_if_block_1$1(ctx) {
		let p;
		let button;
		let t0_value = /*title*/ ctx[8][/*thisMode*/ ctx[61]] + "";
		let t0;
		let button_class_value;
		let t1;
		let mounted;
		let dispose;

		return {
			c() {
				p = element("p");
				button = element("button");
				t0 = text(t0_value);
				t1 = space();
				attr(button, "class", button_class_value = "user-form-" + /*thisMode*/ ctx[61] + " button is-outlined is-link" + " svelte-o8we01");
				attr(p, "class", "control");
			},
			m(target, anchor) {
				insert(target, p, anchor);
				append(p, button);
				append(button, t0);
				append(p, t1);

				if (!mounted) {
					dispose = listen(button, "click", function () {
						if (is_function(/*setModeBind*/ ctx[17][/*thisMode*/ ctx[61]])) /*setModeBind*/ ctx[17][/*thisMode*/ ctx[61]].apply(this, arguments);
					});

					mounted = true;
				}
			},
			p(new_ctx, dirty) {
				ctx = new_ctx;
				if (dirty[0] & /*title, MODES*/ 384 && t0_value !== (t0_value = /*title*/ ctx[8][/*thisMode*/ ctx[61]] + "")) set_data(t0, t0_value);

				if (dirty[0] & /*MODES*/ 128 && button_class_value !== (button_class_value = "user-form-" + /*thisMode*/ ctx[61] + " button is-outlined is-link" + " svelte-o8we01")) {
					attr(button, "class", button_class_value);
				}
			},
			d(detaching) {
				if (detaching) detach(p);
				mounted = false;
				dispose();
			}
		};
	}

	// (477:5) {#each MODES as thisMode}
	function create_each_block(ctx) {
		let if_block_anchor;
		let if_block = /*mode*/ ctx[5] != /*thisMode*/ ctx[61] && create_if_block_1$1(ctx);

		return {
			c() {
				if (if_block) if_block.c();
				if_block_anchor = empty();
			},
			m(target, anchor) {
				if (if_block) if_block.m(target, anchor);
				insert(target, if_block_anchor, anchor);
			},
			p(ctx, dirty) {
				if (/*mode*/ ctx[5] != /*thisMode*/ ctx[61]) {
					if (if_block) {
						if_block.p(ctx, dirty);
					} else {
						if_block = create_if_block_1$1(ctx);
						if_block.c();
						if_block.m(if_block_anchor.parentNode, if_block_anchor);
					}
				} else if (if_block) {
					if_block.d(1);
					if_block = null;
				}
			},
			d(detaching) {
				if (if_block) if_block.d(detaching);
				if (detaching) detach(if_block_anchor);
			}
		};
	}

	function create_fragment$1(ctx) {
		let div1;
		let div0;
		let current_block_type_index;
		let if_block;
		let current;
		const if_block_creators = [create_if_block$1, create_else_block$1];
		const if_blocks = [];

		function select_block_type(ctx, dirty) {
			if (/*success*/ ctx[16]) return 0;
			return 1;
		}

		current_block_type_index = select_block_type(ctx);
		if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

		return {
			c() {
				div1 = element("div");
				div0 = element("div");
				if_block.c();
				attr(div0, "class", "tile user-login-form-paper");
				attr(div1, "class", "block-container svelte-o8we01");
			},
			m(target, anchor) {
				insert(target, div1, anchor);
				append(div1, div0);
				if_blocks[current_block_type_index].m(div0, null);
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
					} else {
						if_block.p(ctx, dirty);
					}

					transition_in(if_block, 1);
					if_block.m(div0, null);
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
				if (detaching) detach(div1);
				if_blocks[current_block_type_index].d();
			}
		};
	}

	function instance$1($$self, $$props, $$invalidate) {
		let telHelper;
		let telClasses;
		let usernameHelper;
		let usernameClasses;
		let codeHelper;
		let codeClasses;
		let emailHelper;
		let emailClasses;
		let passwordHelper;
		let passwordClasses;
		let submitClasses;
		let formInvalid;
		const CLASS_ERR = notBulma.UICommon.CLASS_ERR;
		const CLASS_OK = notBulma.UICommon.CLASS_OK;
		let dispatch = createEventDispatcher();
		let errorMessage = false;
		let success = false;

		let validationErrors = {
			tel: false,
			username: false,
			email: false,
			password: false,
			code: false
		};

		const AVAILABLE_MODES = [
			'login',
			'requestLoginCodeOnEmail',
			'requestLoginCodeOnTelephone',
			'loginByCode'
		];

		const MODES_FIELDS = {
			'login': ['username', 'email', 'password'],
			'requestLoginCodeOnEmail': ['email'],
			'requestLoginCodeOnTelephone': ['tel'],
			'loginByCode': ['code']
		};

		const SUCCESS_TEXT = {
			'login': 'Вход выполнен',
			'requestLoginCodeOnEmail': 'На ваш email было отправлено письмо с кодом',
			'requestLoginCodeOnTelephone': 'Вам было отправлено SMS сообщение с кодом',
			'loginByCode': 'Вход по коду выполнен'
		};

		let { MODES = [
			'login',
			'requestLoginCodeOnEmail',
			'requestLoginCodeOnTelephone',
			'loginByCode'
		] } = $$props;

		let { mode = 'login' } = $$props;
		let { loading = false } = $$props;
		let { formValid = false } = $$props;

		let { title = {
			__enabled: true,
			login: 'Вход',
			requestLoginCodeOnEmail: 'Вход по email',
			requestLoginCodeOnTelephone: 'Вход по SMS',
			loginByCode: 'Вход по коду'
		} } = $$props;

		let { description = {
			__enabled: true,
			login: 'Введите ваш логин и пароль',
			requestLoginCodeOnEmail: 'Введите ваш email адрес, вам будет выслан одноразовый код для входа',
			requestLoginCodeOnTelephone: 'Введите ваш номер телефона, вам будет выслан одноразовый код для входа',
			loginByCode: 'Вход по одноразовому коду'
		} } = $$props;

		let { tel = UserCommon.fieldInit('tel') } = $$props;
		let { email = UserCommon.fieldInit('email') } = $$props;
		let { code = UserCommon.fieldInit('code') } = $$props;
		let { username = UserCommon.fieldInit('username', { enabled: false }) } = $$props;
		let { password = UserCommon.fieldInit('password') } = $$props;
		let fields = { username, password, tel, code, email };
		let { submit = { caption: 'Отправить', enabled: true } } = $$props;
		let { cancel = { caption: 'Назад', enabled: true } } = $$props;

		function setMode(newMode) {
			if (MODES.indexOf(newMode) > -1) {
				$$invalidate(5, mode = newMode);
				validateForm();
			}
		}

		let setModeBind = {};

		MODES.forEach(thisMode => {
			$$invalidate(17, setModeBind[thisMode] = setMode.bind(this, thisMode), setModeBind);
		});

		let { redirectSuccess = '/' } = $$props;
		let { resultShowtime = notBulma.UICommon.DEFAULT_REDIRECT_TIMEOUT } = $$props;
		let { validation = true } = $$props;

		function collectData() {
			return {
				tel: tel.enabled ? tel.value : undefined,
				username: username.enabled ? username.value : undefined,
				email: email.enabled ? email.value : undefined,
				code: code.enabled ? code.value : undefined,
				password: password.enabled ? password.value : undefined
			};
		}

		let { resolveLogin = () => {
			
		} } = $$props;

		function onChange(ev) {
			let val = ev.target.value;

			if (ev.target.name === 'tel') {
				val = UserCommon.formatPhone(val);
				ev.target.value = val;
			}

			let data = { field: ev.target.name, value: val };

			if (validation) {
				let res = UserCommon.validateField(data.field, data.value, fields);

				if (res === true) {
					setFieldValid(data.field);
				} else {
					setFieldInvalid(data.field, res);
				}

				validateForm(data);
			} else {
				dispatch('change', data);
			}
		}

		function setFieldInvalid(fieldName, errors) {
			$$invalidate(14, validationErrors[fieldName] = errors, validationErrors);
			$$invalidate(14, validationErrors);
		}

		function setFieldValid(fieldName) {
			$$invalidate(14, validationErrors[fieldName] = false, validationErrors);

			Object.values(validationErrors).some(val => {
				return val;
			});
		}

		function onInput(ev) {
			let res = true;
			let val = ev.target.value;

			if (ev.target.name === 'tel') {
				ev.preventDefault();
				$$invalidate(0, tel.value = UserCommon.formatPhone(val), tel);
				res = false;
			}

			let data = {
				field: ev.target.name,
				input: ev.data,
				value: val
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
				dispatch('input', data);
			}

			return res;
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

						if (Array.isArray(UserCommon.validateField(fieldName, val, fields))) {
							result = false;
						}
					}
				});

				$$invalidate(33, formValid = result);
				return result;
			} else {
				$$invalidate(33, formValid = false);
				return false;
			}
		}

		function setFormError(error) {
			$$invalidate(33, formValid = false);
			$$invalidate(15, errorMessage = Array.isArray(error) ? error.join(', ') : error);
		}

		let { tryModeAction = e => {
			e && e.preventDefault();
			$$invalidate(15, errorMessage = false);
			dispatch(mode, collectData());
			return false;
		} } = $$props;

		function showSuccess() {
			$$invalidate(16, success = true);
		}

		let { rejectLogin = () => {
			$$invalidate(32, loading = true);
			dispatch('rejectLogin');
		} } = $$props;

		function setLoading() {
			$$invalidate(32, loading = true);
		}

		function resetLoading() {
			$$invalidate(32, loading = false);
		}

		function input_input_handler() {
			email.value = this.value;
			$$invalidate(1, email);
		}

		function input_input_handler_1() {
			username.value = this.value;
			$$invalidate(3, username);
		}

		function input_input_handler_2() {
			password.value = this.value;
			$$invalidate(4, password);
		}

		function input_input_handler_3() {
			email.value = this.value;
			$$invalidate(1, email);
		}

		function input_input_handler_4() {
			tel.value = this.value;
			$$invalidate(0, tel);
		}

		function input_input_handler_5() {
			code.value = this.value;
			$$invalidate(2, code);
		}

		$$self.$$set = $$props => {
			if ('MODES' in $$props) $$invalidate(7, MODES = $$props.MODES);
			if ('mode' in $$props) $$invalidate(5, mode = $$props.mode);
			if ('loading' in $$props) $$invalidate(32, loading = $$props.loading);
			if ('formValid' in $$props) $$invalidate(33, formValid = $$props.formValid);
			if ('title' in $$props) $$invalidate(8, title = $$props.title);
			if ('description' in $$props) $$invalidate(9, description = $$props.description);
			if ('tel' in $$props) $$invalidate(0, tel = $$props.tel);
			if ('email' in $$props) $$invalidate(1, email = $$props.email);
			if ('code' in $$props) $$invalidate(2, code = $$props.code);
			if ('username' in $$props) $$invalidate(3, username = $$props.username);
			if ('password' in $$props) $$invalidate(4, password = $$props.password);
			if ('submit' in $$props) $$invalidate(10, submit = $$props.submit);
			if ('cancel' in $$props) $$invalidate(11, cancel = $$props.cancel);
			if ('redirectSuccess' in $$props) $$invalidate(37, redirectSuccess = $$props.redirectSuccess);
			if ('resultShowtime' in $$props) $$invalidate(38, resultShowtime = $$props.resultShowtime);
			if ('validation' in $$props) $$invalidate(39, validation = $$props.validation);
			if ('resolveLogin' in $$props) $$invalidate(40, resolveLogin = $$props.resolveLogin);
			if ('tryModeAction' in $$props) $$invalidate(12, tryModeAction = $$props.tryModeAction);
			if ('rejectLogin' in $$props) $$invalidate(13, rejectLogin = $$props.rejectLogin);
		};

		$$self.$$.update = () => {
			if ($$self.$$.dirty[0] & /*validationErrors, tel*/ 16385) {
				$$invalidate(29, telHelper = validationErrors.tel
				? validationErrors.tel.join(', ')
				: tel.placeholder);
			}

			if ($$self.$$.dirty[0] & /*validationErrors*/ 16384) {
				$$invalidate(28, telClasses = validationErrors.tel ? CLASS_ERR : CLASS_OK);
			}

			if ($$self.$$.dirty[0] & /*validationErrors, username*/ 16392) {
				$$invalidate(27, usernameHelper = validationErrors.username
				? validationErrors.username.join(', ')
				: username.placeholder);
			}

			if ($$self.$$.dirty[0] & /*validationErrors*/ 16384) {
				$$invalidate(26, usernameClasses = validationErrors.username ? CLASS_ERR : CLASS_OK);
			}

			if ($$self.$$.dirty[0] & /*validationErrors, code*/ 16388) {
				$$invalidate(25, codeHelper = validationErrors.code
				? validationErrors.code.join(', ')
				: code.placeholder);
			}

			if ($$self.$$.dirty[0] & /*validationErrors*/ 16384) {
				$$invalidate(24, codeClasses = validationErrors.code ? CLASS_ERR : CLASS_OK);
			}

			if ($$self.$$.dirty[0] & /*validationErrors, email*/ 16386) {
				$$invalidate(23, emailHelper = validationErrors.email
				? validationErrors.email.join(', ')
				: email.placeholder);
			}

			if ($$self.$$.dirty[0] & /*validationErrors*/ 16384) {
				$$invalidate(22, emailClasses = validationErrors.email ? CLASS_ERR : CLASS_OK);
			}

			if ($$self.$$.dirty[0] & /*validationErrors, password*/ 16400) {
				$$invalidate(21, passwordHelper = validationErrors.password
				? validationErrors.password.join(', ')
				: password.placeholder);
			}

			if ($$self.$$.dirty[0] & /*validationErrors*/ 16384) {
				$$invalidate(20, passwordClasses = validationErrors.password ? CLASS_ERR : CLASS_OK);
			}

			if ($$self.$$.dirty[1] & /*loading*/ 2) {
				$$invalidate(19, submitClasses = loading ? 'is-loading' : '');
			}

			if ($$self.$$.dirty[1] & /*formValid*/ 4) {
				$$invalidate(18, formInvalid = formValid === false);
			}
		};

		return [
			tel,
			email,
			code,
			username,
			password,
			mode,
			SUCCESS_TEXT,
			MODES,
			title,
			description,
			submit,
			cancel,
			tryModeAction,
			rejectLogin,
			validationErrors,
			errorMessage,
			success,
			setModeBind,
			formInvalid,
			submitClasses,
			passwordClasses,
			passwordHelper,
			emailClasses,
			emailHelper,
			codeClasses,
			codeHelper,
			usernameClasses,
			usernameHelper,
			telClasses,
			telHelper,
			onChange,
			onInput,
			loading,
			formValid,
			AVAILABLE_MODES,
			MODES_FIELDS,
			setMode,
			redirectSuccess,
			resultShowtime,
			validation,
			resolveLogin,
			setFieldInvalid,
			setFieldValid,
			setFormError,
			showSuccess,
			setLoading,
			resetLoading,
			input_input_handler,
			input_input_handler_1,
			input_input_handler_2,
			input_input_handler_3,
			input_input_handler_4,
			input_input_handler_5
		];
	}

	class Login extends SvelteComponent {
		constructor(options) {
			super();

			init(
				this,
				options,
				instance$1,
				create_fragment$1,
				safe_not_equal,
				{
					AVAILABLE_MODES: 34,
					MODES_FIELDS: 35,
					SUCCESS_TEXT: 6,
					MODES: 7,
					mode: 5,
					loading: 32,
					formValid: 33,
					title: 8,
					description: 9,
					tel: 0,
					email: 1,
					code: 2,
					username: 3,
					password: 4,
					submit: 10,
					cancel: 11,
					setMode: 36,
					redirectSuccess: 37,
					resultShowtime: 38,
					validation: 39,
					resolveLogin: 40,
					setFieldInvalid: 41,
					setFieldValid: 42,
					setFormError: 43,
					tryModeAction: 12,
					showSuccess: 44,
					rejectLogin: 13,
					setLoading: 45,
					resetLoading: 46
				},
				null,
				[-1, -1, -1]
			);
		}

		get AVAILABLE_MODES() {
			return this.$$.ctx[34];
		}

		get MODES_FIELDS() {
			return this.$$.ctx[35];
		}

		get SUCCESS_TEXT() {
			return this.$$.ctx[6];
		}

		get setMode() {
			return this.$$.ctx[36];
		}

		get setFieldInvalid() {
			return this.$$.ctx[41];
		}

		get setFieldValid() {
			return this.$$.ctx[42];
		}

		get setFormError() {
			return this.$$.ctx[43];
		}

		get showSuccess() {
			return this.$$.ctx[44];
		}

		get setLoading() {
			return this.$$.ctx[45];
		}

		get resetLoading() {
			return this.$$.ctx[46];
		}
	}

	class ncLogin extends notBulma.notController {
		constructor(app) {
			super(app, 'User.Login');
			this.setModelName('user');
			this.buildPage();
			return this;
		}

		initItem() {
			let newRecord = this.make.user({
				'_id': undefined,
				username: '',
				tel: '',
				code: '',
				email: '',
				password: ''
			});
			return newRecord;
		}

		showResult(res) {
			this.formUI.resetLoading();
			if(UserCommon.isError(res)){
				notBulma.notCommon.report(res);
			}else {
				if(res.status === 'error'){
					if(res.errors && Object.keys(res.errors).length > 0){
						if (!Array.isArray(res.error)){
							res.error = [];
						}
						Object.keys(res.errors).forEach((fieldName)=>{
							this.formUI.setFieldInvalid(fieldName, res.errors[fieldName]);
							res.error.push(...res.errors[fieldName]);
						});
					}
					if(res.message){
						this.formUI.setFormError(res.message);
					}
				}else {
					this.formUI.showSuccess();
				}
			}
		}

		buildPage() {
			this.item = this.initItem();
			this.formUI = new Login({
				target: document.querySelector(this.app.getOptions('modules.user.loginFormContainerSelector')),
				props: {
					user:   this.item,
					login:  {
						enabled: false,
						required: false,
						value: '',
					},
					MODES: this.app.getOptions('modules.user.loginForm.modes', ['login'])
				}
			});
			this.formUI.$on('rejectLogin', ()=>{
				window.location.assign('/');
			});
			this.formUI.$on('login', ({detail})=>{
				this.item.setAttrs(detail);
				this.formUI.setLoading();
				this.item.$login({
					username: detail.username,
					password: detail.password,
					email: detail.email,
					tel: detail.tel,
				})
					.then((res)=>{
						this.showResult(res);
						if(!res.error){
							setTimeout(() => UserCommon.goDashboard(this.app), 3000);
						}
					})
					.catch(this.showResult.bind(this));
			});

			this.formUI.$on('requestLoginCodeOnEmail', ({detail})=>{
				this.item.setAttrs(detail);
				this.formUI.setLoading();
				this.item.$requestLoginCodeOnEmail()
					.then(this.showResult.bind(this))
					.catch(this.showResult.bind(this));
			});

			this.formUI.$on('loginByCode', ({detail})=>{
				this.item.setAttrs(detail);
				this.formUI.setLoading();
				this.item.$loginByCode()
					.then(this.showResult.bind(this))
					.catch(this.showResult.bind(this));
			});
		}
	}

	/* src/controllers/guest/register.svelte generated by Svelte v3.44.2 */

	function create_else_block(ctx) {
		let div;
		let t0;
		let t1;
		let if_block0 = /*title*/ ctx[7].__enabled && create_if_block_26(ctx);
		let if_block1 = /*description*/ ctx[8].__enabled && create_if_block_25(ctx);
		let if_block2 = /*mode*/ ctx[6] == 'register' && create_if_block_1(ctx);

		return {
			c() {
				div = element("div");
				if (if_block0) if_block0.c();
				t0 = space();
				if (if_block1) if_block1.c();
				t1 = space();
				if (if_block2) if_block2.c();
				attr(div, "class", "user-register-form");
			},
			m(target, anchor) {
				insert(target, div, anchor);
				if (if_block0) if_block0.m(div, null);
				append(div, t0);
				if (if_block1) if_block1.m(div, null);
				append(div, t1);
				if (if_block2) if_block2.m(div, null);
			},
			p(ctx, dirty) {
				if (/*title*/ ctx[7].__enabled) {
					if (if_block0) {
						if_block0.p(ctx, dirty);
					} else {
						if_block0 = create_if_block_26(ctx);
						if_block0.c();
						if_block0.m(div, t0);
					}
				} else if (if_block0) {
					if_block0.d(1);
					if_block0 = null;
				}

				if (/*description*/ ctx[8].__enabled) {
					if (if_block1) {
						if_block1.p(ctx, dirty);
					} else {
						if_block1 = create_if_block_25(ctx);
						if_block1.c();
						if_block1.m(div, t1);
					}
				} else if (if_block1) {
					if_block1.d(1);
					if_block1 = null;
				}

				if (/*mode*/ ctx[6] == 'register') {
					if (if_block2) {
						if_block2.p(ctx, dirty);
					} else {
						if_block2 = create_if_block_1(ctx);
						if_block2.c();
						if_block2.m(div, null);
					}
				} else if (if_block2) {
					if_block2.d(1);
					if_block2 = null;
				}
			},
			d(detaching) {
				if (detaching) detach(div);
				if (if_block0) if_block0.d();
				if (if_block1) if_block1.d();
				if (if_block2) if_block2.d();
			}
		};
	}

	// (249:2) {#if success}
	function create_if_block(ctx) {
		let div;
		let h3;
		let t_value = /*SUCCESS_TEXT*/ ctx[5][/*mode*/ ctx[6]] + "";
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
				if (dirty[0] & /*mode*/ 64 && t_value !== (t_value = /*SUCCESS_TEXT*/ ctx[5][/*mode*/ ctx[6]] + "")) set_data(t, t_value);
			},
			d(detaching) {
				if (detaching) detach(div);
			}
		};
	}

	// (255:3) {#if title.__enabled}
	function create_if_block_26(ctx) {
		let h5;
		let t_value = /*title*/ ctx[7][/*mode*/ ctx[6]] + "";
		let t;

		return {
			c() {
				h5 = element("h5");
				t = text(t_value);
				attr(h5, "class", "title");
			},
			m(target, anchor) {
				insert(target, h5, anchor);
				append(h5, t);
			},
			p(ctx, dirty) {
				if (dirty[0] & /*title, mode*/ 192 && t_value !== (t_value = /*title*/ ctx[7][/*mode*/ ctx[6]] + "")) set_data(t, t_value);
			},
			d(detaching) {
				if (detaching) detach(h5);
			}
		};
	}

	// (258:3) {#if description.__enabled}
	function create_if_block_25(ctx) {
		let h6;
		let t_value = /*description*/ ctx[8][/*mode*/ ctx[6]] + "";
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
				if (dirty[0] & /*description, mode*/ 320 && t_value !== (t_value = /*description*/ ctx[8][/*mode*/ ctx[6]] + "")) set_data(t, t_value);
			},
			d(detaching) {
				if (detaching) detach(h6);
			}
		};
	}

	// (261:3) {#if mode=='register'}
	function create_if_block_1(ctx) {
		let div1;
		let t0;
		let t1;
		let t2;
		let t3;
		let t4;
		let t5;
		let div0;
		let t6;
		let if_block0 = /*tel*/ ctx[3].enabled && create_if_block_21(ctx);
		let if_block1 = /*email*/ ctx[4].enabled && create_if_block_17(ctx);
		let if_block2 = /*username*/ ctx[0].enabled && create_if_block_13(ctx);
		let if_block3 = /*password*/ ctx[1].enabled && create_if_block_9(ctx);
		let if_block4 = /*password2*/ ctx[2].enabled && create_if_block_5(ctx);
		let if_block5 = /*errorMessage*/ ctx[14] != false && create_if_block_4(ctx);
		let if_block6 = /*cancel*/ ctx[10].enabled && create_if_block_3(ctx);
		let if_block7 = /*submit*/ ctx[9].enabled && create_if_block_2(ctx);

		return {
			c() {
				div1 = element("div");
				if (if_block0) if_block0.c();
				t0 = space();
				if (if_block1) if_block1.c();
				t1 = space();
				if (if_block2) if_block2.c();
				t2 = space();
				if (if_block3) if_block3.c();
				t3 = space();
				if (if_block4) if_block4.c();
				t4 = space();
				if (if_block5) if_block5.c();
				t5 = space();
				div0 = element("div");
				if (if_block6) if_block6.c();
				t6 = space();
				if (if_block7) if_block7.c();
				attr(div0, "class", "buttons-row");
				attr(div1, "class", "user-login-form svelte-13efsmy");
			},
			m(target, anchor) {
				insert(target, div1, anchor);
				if (if_block0) if_block0.m(div1, null);
				append(div1, t0);
				if (if_block1) if_block1.m(div1, null);
				append(div1, t1);
				if (if_block2) if_block2.m(div1, null);
				append(div1, t2);
				if (if_block3) if_block3.m(div1, null);
				append(div1, t3);
				if (if_block4) if_block4.m(div1, null);
				append(div1, t4);
				if (if_block5) if_block5.m(div1, null);
				append(div1, t5);
				append(div1, div0);
				if (if_block6) if_block6.m(div0, null);
				append(div0, t6);
				if (if_block7) if_block7.m(div0, null);
			},
			p(ctx, dirty) {
				if (/*tel*/ ctx[3].enabled) {
					if (if_block0) {
						if_block0.p(ctx, dirty);
					} else {
						if_block0 = create_if_block_21(ctx);
						if_block0.c();
						if_block0.m(div1, t0);
					}
				} else if (if_block0) {
					if_block0.d(1);
					if_block0 = null;
				}

				if (/*email*/ ctx[4].enabled) {
					if (if_block1) {
						if_block1.p(ctx, dirty);
					} else {
						if_block1 = create_if_block_17(ctx);
						if_block1.c();
						if_block1.m(div1, t1);
					}
				} else if (if_block1) {
					if_block1.d(1);
					if_block1 = null;
				}

				if (/*username*/ ctx[0].enabled) {
					if (if_block2) {
						if_block2.p(ctx, dirty);
					} else {
						if_block2 = create_if_block_13(ctx);
						if_block2.c();
						if_block2.m(div1, t2);
					}
				} else if (if_block2) {
					if_block2.d(1);
					if_block2 = null;
				}

				if (/*password*/ ctx[1].enabled) {
					if (if_block3) {
						if_block3.p(ctx, dirty);
					} else {
						if_block3 = create_if_block_9(ctx);
						if_block3.c();
						if_block3.m(div1, t3);
					}
				} else if (if_block3) {
					if_block3.d(1);
					if_block3 = null;
				}

				if (/*password2*/ ctx[2].enabled) {
					if (if_block4) {
						if_block4.p(ctx, dirty);
					} else {
						if_block4 = create_if_block_5(ctx);
						if_block4.c();
						if_block4.m(div1, t4);
					}
				} else if (if_block4) {
					if_block4.d(1);
					if_block4 = null;
				}

				if (/*errorMessage*/ ctx[14] != false) {
					if (if_block5) {
						if_block5.p(ctx, dirty);
					} else {
						if_block5 = create_if_block_4(ctx);
						if_block5.c();
						if_block5.m(div1, t5);
					}
				} else if (if_block5) {
					if_block5.d(1);
					if_block5 = null;
				}

				if (/*cancel*/ ctx[10].enabled) {
					if (if_block6) {
						if_block6.p(ctx, dirty);
					} else {
						if_block6 = create_if_block_3(ctx);
						if_block6.c();
						if_block6.m(div0, t6);
					}
				} else if (if_block6) {
					if_block6.d(1);
					if_block6 = null;
				}

				if (/*submit*/ ctx[9].enabled) {
					if (if_block7) {
						if_block7.p(ctx, dirty);
					} else {
						if_block7 = create_if_block_2(ctx);
						if_block7.c();
						if_block7.m(div0, null);
					}
				} else if (if_block7) {
					if_block7.d(1);
					if_block7 = null;
				}
			},
			d(detaching) {
				if (detaching) detach(div1);
				if (if_block0) if_block0.d();
				if (if_block1) if_block1.d();
				if (if_block2) if_block2.d();
				if (if_block3) if_block3.d();
				if (if_block4) if_block4.d();
				if (if_block5) if_block5.d();
				if (if_block6) if_block6.d();
				if (if_block7) if_block7.d();
			}
		};
	}

	// (264:4) {#if tel.enabled}
	function create_if_block_21(ctx) {
		let div1;
		let label;
		let t0_value = /*tel*/ ctx[3].label + "";
		let t0;
		let t1;
		let div0;
		let input;
		let input_class_value;
		let input_pattern_value;
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
		let if_block0 = /*tel*/ ctx[3].validated === true && create_if_block_23(ctx);

		function select_block_type_2(ctx, dirty) {
			if (!/*tel*/ ctx[3].validated || !/*tel*/ ctx[3].valid) return create_if_block_22;
			return create_else_block_9;
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
				span.innerHTML = `<i class="fas fa-phone"></i>`;
				t3 = space();
				if (if_block0) if_block0.c();
				t4 = space();
				p = element("p");
				if_block1.c();
				attr(label, "class", "label");
				attr(label, "for", "user-login-form-tel");
				attr(input, "class", input_class_value = "input " + /*telClasses*/ ctx[25] + " svelte-13efsmy");
				attr(input, "id", "user-login-form-tel");
				attr(input, "type", "tel");
				attr(input, "name", "tel");
				attr(input, "pattern", input_pattern_value = "\\+[0-9]" + 1 + "-[0-9]" + 3 + "-[0-9]" + 3 + "-[0-9]" + 2 + "-[0-9]" + 2);
				attr(input, "invalid", input_invalid_value = /*validationErrors*/ ctx[13].tel);
				input.required = input_required_value = /*tel*/ ctx[3].required;
				attr(input, "placeholder", input_placeholder_value = /*tel*/ ctx[3].placeholder);
				attr(input, "autocomplete", "tel");
				attr(input, "aria-controls", "input-field-helper-tel");
				attr(input, "aria-describedby", "input-field-helper-tel");
				attr(span, "class", "icon is-small is-left");
				attr(div0, "class", "control has-icons-left has-icons-right");
				attr(p, "class", p_class_value = "help " + /*telClasses*/ ctx[25] + " svelte-13efsmy");
				attr(p, "id", "input-field-helper-tel");
				attr(div1, "class", "field user-form-field user-login-form-tel svelte-13efsmy");
			},
			m(target, anchor) {
				insert(target, div1, anchor);
				append(div1, label);
				append(label, t0);
				append(div1, t1);
				append(div1, div0);
				append(div0, input);
				set_input_value(input, /*tel*/ ctx[3].value);
				append(div0, t2);
				append(div0, span);
				append(div0, t3);
				if (if_block0) if_block0.m(div0, null);
				append(div1, t4);
				append(div1, p);
				if_block1.m(p, null);

				if (!mounted) {
					dispose = [
						listen(input, "input", /*input_input_handler*/ ctx[42]),
						listen(input, "change", /*onChange*/ ctx[27]),
						listen(input, "input", /*onInput*/ ctx[28])
					];

					mounted = true;
				}
			},
			p(ctx, dirty) {
				if (dirty[0] & /*tel*/ 8 && t0_value !== (t0_value = /*tel*/ ctx[3].label + "")) set_data(t0, t0_value);

				if (dirty[0] & /*telClasses*/ 33554432 && input_class_value !== (input_class_value = "input " + /*telClasses*/ ctx[25] + " svelte-13efsmy")) {
					attr(input, "class", input_class_value);
				}

				if (dirty[0] & /*validationErrors*/ 8192 && input_invalid_value !== (input_invalid_value = /*validationErrors*/ ctx[13].tel)) {
					attr(input, "invalid", input_invalid_value);
				}

				if (dirty[0] & /*tel*/ 8 && input_required_value !== (input_required_value = /*tel*/ ctx[3].required)) {
					input.required = input_required_value;
				}

				if (dirty[0] & /*tel*/ 8 && input_placeholder_value !== (input_placeholder_value = /*tel*/ ctx[3].placeholder)) {
					attr(input, "placeholder", input_placeholder_value);
				}

				if (dirty[0] & /*tel*/ 8) {
					set_input_value(input, /*tel*/ ctx[3].value);
				}

				if (/*tel*/ ctx[3].validated === true) {
					if (if_block0) {
						if_block0.p(ctx, dirty);
					} else {
						if_block0 = create_if_block_23(ctx);
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

				if (dirty[0] & /*telClasses*/ 33554432 && p_class_value !== (p_class_value = "help " + /*telClasses*/ ctx[25] + " svelte-13efsmy")) {
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

	// (276:6) {#if tel.validated === true }
	function create_if_block_23(ctx) {
		let span;

		function select_block_type_1(ctx, dirty) {
			if (/*tel*/ ctx[3].valid) return create_if_block_24;
			return create_else_block_10;
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

	// (280:7) {:else}
	function create_else_block_10(ctx) {
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

	// (278:7) {#if tel.valid}
	function create_if_block_24(ctx) {
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

	// (289:6) {:else}
	function create_else_block_9(ctx) {
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

	// (287:6) {#if (!tel.validated || !tel.valid) }
	function create_if_block_22(ctx) {
		let t;

		return {
			c() {
				t = text(/*telHelper*/ ctx[26]);
			},
			m(target, anchor) {
				insert(target, t, anchor);
			},
			p(ctx, dirty) {
				if (dirty[0] & /*telHelper*/ 67108864) set_data(t, /*telHelper*/ ctx[26]);
			},
			d(detaching) {
				if (detaching) detach(t);
			}
		};
	}

	// (294:4) {#if email.enabled}
	function create_if_block_17(ctx) {
		let div1;
		let label;
		let t0_value = /*email*/ ctx[4].label + "";
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
		let if_block0 = /*email*/ ctx[4].validated === true && create_if_block_19(ctx);

		function select_block_type_4(ctx, dirty) {
			if (!(/*email*/ ctx[4].validated && /*email*/ ctx[4].valid)) return create_if_block_18;
			return create_else_block_7;
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
				attr(label, "for", "user-login-form-email");
				attr(input, "id", "user-login-form-email");
				attr(input, "class", input_class_value = "input " + /*emailClasses*/ ctx[21] + " svelte-13efsmy");
				input.required = input_required_value = /*email*/ ctx[4].required;
				attr(input, "placeholder", input_placeholder_value = /*email*/ ctx[4].placeholder);
				attr(input, "invalid", input_invalid_value = /*validationErrors*/ ctx[13].email);
				attr(input, "name", "email");
				attr(input, "type", "email");
				attr(input, "autocomplete", "email");
				attr(input, "aria-controls", "input-field-helper-email");
				attr(input, "aria-describedby", "input-field-helper-email");
				attr(span, "class", "icon is-small is-left");
				attr(div0, "class", "control has-icons-left has-icons-right");
				attr(p, "class", p_class_value = "help " + /*emailClasses*/ ctx[21] + " svelte-13efsmy");
				attr(p, "id", "input-field-helper-email");
				attr(div1, "class", "user-form-field user-login-form-email field svelte-13efsmy");
			},
			m(target, anchor) {
				insert(target, div1, anchor);
				append(div1, label);
				append(label, t0);
				append(div1, t1);
				append(div1, div0);
				append(div0, input);
				set_input_value(input, /*email*/ ctx[4].value);
				append(div0, t2);
				append(div0, span);
				append(div0, t3);
				if (if_block0) if_block0.m(div0, null);
				append(div1, t4);
				append(div1, p);
				if_block1.m(p, null);

				if (!mounted) {
					dispose = [
						listen(input, "input", /*input_input_handler_1*/ ctx[43]),
						listen(input, "change", /*onChange*/ ctx[27]),
						listen(input, "input", /*onInput*/ ctx[28])
					];

					mounted = true;
				}
			},
			p(ctx, dirty) {
				if (dirty[0] & /*email*/ 16 && t0_value !== (t0_value = /*email*/ ctx[4].label + "")) set_data(t0, t0_value);

				if (dirty[0] & /*emailClasses*/ 2097152 && input_class_value !== (input_class_value = "input " + /*emailClasses*/ ctx[21] + " svelte-13efsmy")) {
					attr(input, "class", input_class_value);
				}

				if (dirty[0] & /*email*/ 16 && input_required_value !== (input_required_value = /*email*/ ctx[4].required)) {
					input.required = input_required_value;
				}

				if (dirty[0] & /*email*/ 16 && input_placeholder_value !== (input_placeholder_value = /*email*/ ctx[4].placeholder)) {
					attr(input, "placeholder", input_placeholder_value);
				}

				if (dirty[0] & /*validationErrors*/ 8192 && input_invalid_value !== (input_invalid_value = /*validationErrors*/ ctx[13].email)) {
					attr(input, "invalid", input_invalid_value);
				}

				if (dirty[0] & /*email*/ 16 && input.value !== /*email*/ ctx[4].value) {
					set_input_value(input, /*email*/ ctx[4].value);
				}

				if (/*email*/ ctx[4].validated === true) {
					if (if_block0) {
						if_block0.p(ctx, dirty);
					} else {
						if_block0 = create_if_block_19(ctx);
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

				if (dirty[0] & /*emailClasses*/ 2097152 && p_class_value !== (p_class_value = "help " + /*emailClasses*/ ctx[21] + " svelte-13efsmy")) {
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

	// (302:6) {#if email.validated === true }
	function create_if_block_19(ctx) {
		let span;

		function select_block_type_3(ctx, dirty) {
			if (/*email*/ ctx[4].valid) return create_if_block_20;
			return create_else_block_8;
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

	// (306:8) {:else}
	function create_else_block_8(ctx) {
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

	// (304:8) {#if email.valid}
	function create_if_block_20(ctx) {
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

	// (316:6) {:else}
	function create_else_block_7(ctx) {
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

	// (314:6) {#if !(email.validated && email.valid) }
	function create_if_block_18(ctx) {
		let t;

		return {
			c() {
				t = text(/*emailHelper*/ ctx[22]);
			},
			m(target, anchor) {
				insert(target, t, anchor);
			},
			p(ctx, dirty) {
				if (dirty[0] & /*emailHelper*/ 4194304) set_data(t, /*emailHelper*/ ctx[22]);
			},
			d(detaching) {
				if (detaching) detach(t);
			}
		};
	}

	// (321:4) {#if username.enabled}
	function create_if_block_13(ctx) {
		let div1;
		let label;
		let t0_value = /*username*/ ctx[0].label + "";
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
		let if_block0 = /*username*/ ctx[0].validated === true && create_if_block_15(ctx);

		function select_block_type_6(ctx, dirty) {
			if (!(/*username*/ ctx[0].validated && /*username*/ ctx[0].valid)) return create_if_block_14;
			return create_else_block_5;
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
				span.innerHTML = `<i class="fas fa-user"></i>`;
				t3 = space();
				if (if_block0) if_block0.c();
				t4 = space();
				p = element("p");
				if_block1.c();
				attr(label, "class", "label");
				attr(label, "for", "user-login-form-username");
				attr(input, "id", "user-login-form-username");
				attr(input, "class", input_class_value = "input " + /*usernameClasses*/ ctx[23] + " svelte-13efsmy");
				attr(input, "type", "text");
				attr(input, "name", "username");
				attr(input, "invalid", input_invalid_value = /*validationErrors*/ ctx[13].username);
				input.required = input_required_value = /*username*/ ctx[0].required;
				attr(input, "placeholder", input_placeholder_value = /*username*/ ctx[0].placeholder);
				attr(input, "autocomplete", "username");
				attr(input, "aria-controls", "input-field-helper-username");
				attr(input, "aria-describedby", "input-field-helper-username");
				attr(span, "class", "icon is-small is-left");
				attr(div0, "class", "control has-icons-left has-icons-right");
				attr(p, "class", p_class_value = "help " + /*usernameClasses*/ ctx[23] + " svelte-13efsmy");
				attr(p, "id", "input-field-helper-username");
				attr(div1, "class", "field user-form-field user-login-form-username svelte-13efsmy");
			},
			m(target, anchor) {
				insert(target, div1, anchor);
				append(div1, label);
				append(label, t0);
				append(div1, t1);
				append(div1, div0);
				append(div0, input);
				set_input_value(input, /*username*/ ctx[0].value);
				append(div0, t2);
				append(div0, span);
				append(div0, t3);
				if (if_block0) if_block0.m(div0, null);
				append(div1, t4);
				append(div1, p);
				if_block1.m(p, null);

				if (!mounted) {
					dispose = [
						listen(input, "input", /*input_input_handler_2*/ ctx[44]),
						listen(input, "change", /*onChange*/ ctx[27]),
						listen(input, "input", /*onInput*/ ctx[28])
					];

					mounted = true;
				}
			},
			p(ctx, dirty) {
				if (dirty[0] & /*username*/ 1 && t0_value !== (t0_value = /*username*/ ctx[0].label + "")) set_data(t0, t0_value);

				if (dirty[0] & /*usernameClasses*/ 8388608 && input_class_value !== (input_class_value = "input " + /*usernameClasses*/ ctx[23] + " svelte-13efsmy")) {
					attr(input, "class", input_class_value);
				}

				if (dirty[0] & /*validationErrors*/ 8192 && input_invalid_value !== (input_invalid_value = /*validationErrors*/ ctx[13].username)) {
					attr(input, "invalid", input_invalid_value);
				}

				if (dirty[0] & /*username*/ 1 && input_required_value !== (input_required_value = /*username*/ ctx[0].required)) {
					input.required = input_required_value;
				}

				if (dirty[0] & /*username*/ 1 && input_placeholder_value !== (input_placeholder_value = /*username*/ ctx[0].placeholder)) {
					attr(input, "placeholder", input_placeholder_value);
				}

				if (dirty[0] & /*username*/ 1 && input.value !== /*username*/ ctx[0].value) {
					set_input_value(input, /*username*/ ctx[0].value);
				}

				if (/*username*/ ctx[0].validated === true) {
					if (if_block0) {
						if_block0.p(ctx, dirty);
					} else {
						if_block0 = create_if_block_15(ctx);
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

				if (dirty[0] & /*usernameClasses*/ 8388608 && p_class_value !== (p_class_value = "help " + /*usernameClasses*/ ctx[23] + " svelte-13efsmy")) {
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

	// (329:6) {#if username.validated === true }
	function create_if_block_15(ctx) {
		let span;

		function select_block_type_5(ctx, dirty) {
			if (/*username*/ ctx[0].valid) return create_if_block_16;
			return create_else_block_6;
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

	// (333:7) {:else}
	function create_else_block_6(ctx) {
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

	// (331:7) {#if username.valid}
	function create_if_block_16(ctx) {
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

	// (340:68) {:else}
	function create_else_block_5(ctx) {
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

	// (340:6) {#if !(username.validated && username.valid) }
	function create_if_block_14(ctx) {
		let t;

		return {
			c() {
				t = text(/*usernameHelper*/ ctx[24]);
			},
			m(target, anchor) {
				insert(target, t, anchor);
			},
			p(ctx, dirty) {
				if (dirty[0] & /*usernameHelper*/ 16777216) set_data(t, /*usernameHelper*/ ctx[24]);
			},
			d(detaching) {
				if (detaching) detach(t);
			}
		};
	}

	// (345:4) {#if password.enabled}
	function create_if_block_9(ctx) {
		let div1;
		let label;
		let t0_value = /*password*/ ctx[1].label + "";
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
		let if_block0 = /*password*/ ctx[1].validated === true && create_if_block_11(ctx);

		function select_block_type_8(ctx, dirty) {
			if (!(/*password*/ ctx[1].validated && /*password*/ ctx[1].valid)) return create_if_block_10;
			return create_else_block_3;
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
				attr(label, "for", "user-login-form-password");
				attr(input, "id", "user-login-form-password");
				attr(input, "class", input_class_value = "input " + /*passwordClasses*/ ctx[19] + " svelte-13efsmy");
				attr(input, "type", "password");
				attr(input, "name", "password");
				attr(input, "invalid", input_invalid_value = /*validationErrors*/ ctx[13].password);
				input.required = input_required_value = /*password*/ ctx[1].required;
				attr(input, "placeholder", input_placeholder_value = /*password*/ ctx[1].placeholder);
				attr(input, "autocomplete", "password");
				attr(input, "aria-controls", "input-field-helper-password");
				attr(input, "aria-describedby", "input-field-helper-password");
				attr(span, "class", "icon is-small is-left");
				attr(div0, "class", "control has-icons-left has-icons-right");
				attr(p, "class", p_class_value = "help " + /*passwordClasses*/ ctx[19] + " svelte-13efsmy");
				attr(p, "id", "input-field-helper-password");
				attr(div1, "class", "field user-form-field user-login-form-password svelte-13efsmy");
			},
			m(target, anchor) {
				insert(target, div1, anchor);
				append(div1, label);
				append(label, t0);
				append(div1, t1);
				append(div1, div0);
				append(div0, input);
				set_input_value(input, /*password*/ ctx[1].value);
				append(div0, t2);
				append(div0, span);
				append(div0, t3);
				if (if_block0) if_block0.m(div0, null);
				append(div1, t4);
				append(div1, p);
				if_block1.m(p, null);

				if (!mounted) {
					dispose = [
						listen(input, "input", /*input_input_handler_3*/ ctx[45]),
						listen(input, "change", /*onChange*/ ctx[27]),
						listen(input, "input", /*onInput*/ ctx[28])
					];

					mounted = true;
				}
			},
			p(ctx, dirty) {
				if (dirty[0] & /*password*/ 2 && t0_value !== (t0_value = /*password*/ ctx[1].label + "")) set_data(t0, t0_value);

				if (dirty[0] & /*passwordClasses*/ 524288 && input_class_value !== (input_class_value = "input " + /*passwordClasses*/ ctx[19] + " svelte-13efsmy")) {
					attr(input, "class", input_class_value);
				}

				if (dirty[0] & /*validationErrors*/ 8192 && input_invalid_value !== (input_invalid_value = /*validationErrors*/ ctx[13].password)) {
					attr(input, "invalid", input_invalid_value);
				}

				if (dirty[0] & /*password*/ 2 && input_required_value !== (input_required_value = /*password*/ ctx[1].required)) {
					input.required = input_required_value;
				}

				if (dirty[0] & /*password*/ 2 && input_placeholder_value !== (input_placeholder_value = /*password*/ ctx[1].placeholder)) {
					attr(input, "placeholder", input_placeholder_value);
				}

				if (dirty[0] & /*password*/ 2 && input.value !== /*password*/ ctx[1].value) {
					set_input_value(input, /*password*/ ctx[1].value);
				}

				if (/*password*/ ctx[1].validated === true) {
					if (if_block0) {
						if_block0.p(ctx, dirty);
					} else {
						if_block0 = create_if_block_11(ctx);
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

				if (dirty[0] & /*passwordClasses*/ 524288 && p_class_value !== (p_class_value = "help " + /*passwordClasses*/ ctx[19] + " svelte-13efsmy")) {
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

	// (353:6) {#if password.validated === true }
	function create_if_block_11(ctx) {
		let span;

		function select_block_type_7(ctx, dirty) {
			if (/*password*/ ctx[1].valid) return create_if_block_12;
			return create_else_block_4;
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

	// (357:7) {:else}
	function create_else_block_4(ctx) {
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

	// (355:7) {#if password.valid}
	function create_if_block_12(ctx) {
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

	// (364:68) {:else}
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

	// (364:6) {#if !(password.validated && password.valid) }
	function create_if_block_10(ctx) {
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

	// (369:4) {#if password2.enabled}
	function create_if_block_5(ctx) {
		let div1;
		let label;
		let t0_value = /*password2*/ ctx[2].label + "";
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
		let if_block0 = /*password2*/ ctx[2].validated === true && create_if_block_7(ctx);

		function select_block_type_10(ctx, dirty) {
			if (!(/*password2*/ ctx[2].validated && /*password2*/ ctx[2].valid)) return create_if_block_6;
			return create_else_block_1;
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
				span.innerHTML = `<i class="fas fa-lock"></i>`;
				t3 = space();
				if (if_block0) if_block0.c();
				t4 = space();
				p = element("p");
				if_block1.c();
				attr(label, "class", "label");
				attr(label, "for", "user-login-form-password2");
				attr(input, "id", "user-login-form-password2");
				attr(input, "class", input_class_value = "input " + /*password2Classes*/ ctx[17] + " svelte-13efsmy");
				attr(input, "type", "password");
				attr(input, "name", "password2");
				attr(input, "invalid", input_invalid_value = /*validationErrors*/ ctx[13].password2);
				input.required = input_required_value = /*password2*/ ctx[2].required;
				attr(input, "placeholder", input_placeholder_value = /*password2*/ ctx[2].placeholder);
				attr(input, "autocomplete", "password2");
				attr(input, "aria-controls", "input-field-helper-password2");
				attr(input, "aria-describedby", "input-field-helper-password2");
				attr(span, "class", "icon is-small is-left");
				attr(div0, "class", "control has-icons-left has-icons-right");
				attr(p, "class", p_class_value = "help " + /*password2Classes*/ ctx[17] + " svelte-13efsmy");
				attr(p, "id", "input-field-helper-password2");
				attr(div1, "class", "field user-form-field user-login-form-password2 svelte-13efsmy");
			},
			m(target, anchor) {
				insert(target, div1, anchor);
				append(div1, label);
				append(label, t0);
				append(div1, t1);
				append(div1, div0);
				append(div0, input);
				set_input_value(input, /*password2*/ ctx[2].value);
				append(div0, t2);
				append(div0, span);
				append(div0, t3);
				if (if_block0) if_block0.m(div0, null);
				append(div1, t4);
				append(div1, p);
				if_block1.m(p, null);

				if (!mounted) {
					dispose = [
						listen(input, "input", /*input_input_handler_4*/ ctx[46]),
						listen(input, "change", /*onChange*/ ctx[27]),
						listen(input, "input", /*onInput*/ ctx[28])
					];

					mounted = true;
				}
			},
			p(ctx, dirty) {
				if (dirty[0] & /*password2*/ 4 && t0_value !== (t0_value = /*password2*/ ctx[2].label + "")) set_data(t0, t0_value);

				if (dirty[0] & /*password2Classes*/ 131072 && input_class_value !== (input_class_value = "input " + /*password2Classes*/ ctx[17] + " svelte-13efsmy")) {
					attr(input, "class", input_class_value);
				}

				if (dirty[0] & /*validationErrors*/ 8192 && input_invalid_value !== (input_invalid_value = /*validationErrors*/ ctx[13].password2)) {
					attr(input, "invalid", input_invalid_value);
				}

				if (dirty[0] & /*password2*/ 4 && input_required_value !== (input_required_value = /*password2*/ ctx[2].required)) {
					input.required = input_required_value;
				}

				if (dirty[0] & /*password2*/ 4 && input_placeholder_value !== (input_placeholder_value = /*password2*/ ctx[2].placeholder)) {
					attr(input, "placeholder", input_placeholder_value);
				}

				if (dirty[0] & /*password2*/ 4 && input.value !== /*password2*/ ctx[2].value) {
					set_input_value(input, /*password2*/ ctx[2].value);
				}

				if (/*password2*/ ctx[2].validated === true) {
					if (if_block0) {
						if_block0.p(ctx, dirty);
					} else {
						if_block0 = create_if_block_7(ctx);
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

				if (dirty[0] & /*password2Classes*/ 131072 && p_class_value !== (p_class_value = "help " + /*password2Classes*/ ctx[17] + " svelte-13efsmy")) {
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

	// (376:6) {#if password2.validated === true }
	function create_if_block_7(ctx) {
		let span;

		function select_block_type_9(ctx, dirty) {
			if (/*password2*/ ctx[2].valid) return create_if_block_8;
			return create_else_block_2;
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

	// (380:7) {:else}
	function create_else_block_2(ctx) {
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

	// (378:7) {#if password2.valid}
	function create_if_block_8(ctx) {
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

	// (389:6) {:else}
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

	// (387:6) {#if !(password2.validated && password2.valid) }
	function create_if_block_6(ctx) {
		let t;

		return {
			c() {
				t = text(/*password2Helper*/ ctx[18]);
			},
			m(target, anchor) {
				insert(target, t, anchor);
			},
			p(ctx, dirty) {
				if (dirty[0] & /*password2Helper*/ 262144) set_data(t, /*password2Helper*/ ctx[18]);
			},
			d(detaching) {
				if (detaching) detach(t);
			}
		};
	}

	// (393:4) {#if errorMessage!=false }
	function create_if_block_4(ctx) {
		let div;
		let t;

		return {
			c() {
				div = element("div");
				t = text(/*errorMessage*/ ctx[14]);
				attr(div, "class", "user-form-error notification is-danger");
			},
			m(target, anchor) {
				insert(target, div, anchor);
				append(div, t);
			},
			p(ctx, dirty) {
				if (dirty[0] & /*errorMessage*/ 16384) set_data(t, /*errorMessage*/ ctx[14]);
			},
			d(detaching) {
				if (detaching) detach(div);
			}
		};
	}

	// (397:5) {#if cancel.enabled}
	function create_if_block_3(ctx) {
		let button;
		let t_value = /*cancel*/ ctx[10].caption + "";
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
						if (is_function(/*rejectRegister*/ ctx[12])) /*rejectRegister*/ ctx[12].apply(this, arguments);
					});

					mounted = true;
				}
			},
			p(new_ctx, dirty) {
				ctx = new_ctx;
				if (dirty[0] & /*cancel*/ 1024 && t_value !== (t_value = /*cancel*/ ctx[10].caption + "")) set_data(t, t_value);
			},
			d(detaching) {
				if (detaching) detach(button);
				mounted = false;
				dispose();
			}
		};
	}

	// (400:5) {#if submit.enabled}
	function create_if_block_2(ctx) {
		let button;
		let t_value = /*submit*/ ctx[9].caption + "";
		let t;
		let mounted;
		let dispose;

		return {
			c() {
				button = element("button");
				t = text(t_value);
				button.disabled = /*formInvalid*/ ctx[16];
				attr(button, "class", "button is-primary is-hovered user-register-form-submit pull-right");
			},
			m(target, anchor) {
				insert(target, button, anchor);
				append(button, t);

				if (!mounted) {
					dispose = listen(button, "click", function () {
						if (is_function(/*tryModeAction*/ ctx[11])) /*tryModeAction*/ ctx[11].apply(this, arguments);
					});

					mounted = true;
				}
			},
			p(new_ctx, dirty) {
				ctx = new_ctx;
				if (dirty[0] & /*submit*/ 512 && t_value !== (t_value = /*submit*/ ctx[9].caption + "")) set_data(t, t_value);

				if (dirty[0] & /*formInvalid*/ 65536) {
					button.disabled = /*formInvalid*/ ctx[16];
				}
			},
			d(detaching) {
				if (detaching) detach(button);
				mounted = false;
				dispose();
			}
		};
	}

	function create_fragment(ctx) {
		let div1;
		let div0;

		function select_block_type(ctx, dirty) {
			if (/*success*/ ctx[15]) return create_if_block;
			return create_else_block;
		}

		let current_block_type = select_block_type(ctx);
		let if_block = current_block_type(ctx);

		return {
			c() {
				div1 = element("div");
				div0 = element("div");
				if_block.c();
				attr(div0, "class", "tile user-register-form-paper");
				attr(div1, "class", "block-container svelte-13efsmy");
			},
			m(target, anchor) {
				insert(target, div1, anchor);
				append(div1, div0);
				if_block.m(div0, null);
			},
			p(ctx, dirty) {
				if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block.d(1);
					if_block = current_block_type(ctx);

					if (if_block) {
						if_block.c();
						if_block.m(div0, null);
					}
				}
			},
			i: noop,
			o: noop,
			d(detaching) {
				if (detaching) detach(div1);
				if_block.d();
			}
		};
	}

	function instance($$self, $$props, $$invalidate) {
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
		let formInvalid;
		const CLASS_ERR = UserCommon.CLASS_ERR;
		const CLASS_OK = UserCommon.CLASS_OK;
		let errorMessage = false;
		let success = false;

		let validationErrors = {
			tel: false,
			username: false,
			email: false,
			password: false,
			password2: false
		};

		let { validation = true } = $$props;
		const MODES = ['register'];

		const MODES_FIELDS = {
			'register': ['tel', 'username', 'email', 'password', 'password2']
		};

		const SUCCESS_TEXT = {
			'register': 'Для завершения регистрации вам необходимо активировать ваш аккаунт.'
		};

		let dispatch = createEventDispatcher();
		let { mode = 'register' } = $$props;
		let { loading = false } = $$props;
		let { formValid = false } = $$props;
		let { title = { __enabled: true, register: 'Регистрация' } } = $$props;

		let { description = {
			__enabled: true,
			register: 'Заполните пожалуйств форму'
		} } = $$props;

		let { username = UserCommon.fieldInit('username') } = $$props;
		let { password = UserCommon.fieldInit('password') } = $$props;
		let { password2 = UserCommon.fieldInit('password2') } = $$props;
		let { tel = UserCommon.fieldInit('tel') } = $$props;
		let { email = UserCommon.fieldInit('email') } = $$props;

		let fields = {
			username,
			password,
			tel,
			password2,
			email
		};

		let { submit = { caption: 'Отправить', enabled: true } } = $$props;
		let { cancel = { caption: 'Назад', enabled: true } } = $$props;

		function collectData() {
			return {
				tel: tel.enabled ? tel.value : undefined,
				username: username.enabled ? username.value : undefined,
				email: email.enabled ? email.value : undefined,
				password: password.enabled ? password.value : undefined,
				password2: password2.enabled ? password2.value : undefined
			};
		}

		function onChange(ev) {
			let val = ev.target.value;

			if (ev.target.name === 'tel') {
				val = UserCommon.formatPhone(val);
				ev.target.value = val;
			}

			let data = { field: ev.target.name, value: val };

			if (validation) {
				let res = UserCommon.validateField(data.field, data.value, fields);

				if (res === true) {
					setFieldValid(data.field);
				} else {
					setFieldInvalid(data.field, res);
				}

				validateForm(data);
			} else {
				dispatch('change', data);
			}
		}

		function setFieldInvalid(fieldName, errors) {
			$$invalidate(13, validationErrors[fieldName] = errors, validationErrors);
			$$invalidate(13, validationErrors);
		}

		function setFieldValid(fieldName) {
			$$invalidate(13, validationErrors[fieldName] = false, validationErrors);

			Object.values(validationErrors).some(val => {
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
					return oldErrs.join('. ') === errs.join('. ');
				} else {
					return false;
				}
			}
		}

		function onInput(ev) {
			let res = true;
			let val = ev.target.value;

			if (ev.target.name === 'tel') {
				$$invalidate(3, tel.value = UserCommon.formatPhone(val), tel);
				res = false;
			}

			let data = {
				field: ev.target.name,
				input: ev.data,
				value: val
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
				dispatch('input', data);
			}

			return res;
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

				$$invalidate(29, formValid = result);
				return result;
			} else {
				$$invalidate(29, formValid = false);
				return false;
			}
		}

		function setFormError(error) {
			$$invalidate(29, formValid = false);
			console.log('form error', error);
			$$invalidate(14, errorMessage = Array.isArray(error) ? error.join(', ') : error);
		}

		let { tryModeAction = e => {
			e && e.preventDefault();
			$$invalidate(14, errorMessage = false);
			dispatch(mode, collectData());
			return false;
		} } = $$props;

		function showSuccess() {
			$$invalidate(15, success = true);
		}

		let { rejectRegister = () => {
			$$invalidate(30, loading = true);
			dispatch('rejectRegister');
		} } = $$props;

		function setLoading() {
			$$invalidate(30, loading = true);
		}

		function resetLoading() {
			$$invalidate(30, loading = false);
		}

		function input_input_handler() {
			tel.value = this.value;
			$$invalidate(3, tel);
		}

		function input_input_handler_1() {
			email.value = this.value;
			$$invalidate(4, email);
		}

		function input_input_handler_2() {
			username.value = this.value;
			$$invalidate(0, username);
		}

		function input_input_handler_3() {
			password.value = this.value;
			$$invalidate(1, password);
		}

		function input_input_handler_4() {
			password2.value = this.value;
			$$invalidate(2, password2);
		}

		$$self.$$set = $$props => {
			if ('validation' in $$props) $$invalidate(31, validation = $$props.validation);
			if ('mode' in $$props) $$invalidate(6, mode = $$props.mode);
			if ('loading' in $$props) $$invalidate(30, loading = $$props.loading);
			if ('formValid' in $$props) $$invalidate(29, formValid = $$props.formValid);
			if ('title' in $$props) $$invalidate(7, title = $$props.title);
			if ('description' in $$props) $$invalidate(8, description = $$props.description);
			if ('username' in $$props) $$invalidate(0, username = $$props.username);
			if ('password' in $$props) $$invalidate(1, password = $$props.password);
			if ('password2' in $$props) $$invalidate(2, password2 = $$props.password2);
			if ('tel' in $$props) $$invalidate(3, tel = $$props.tel);
			if ('email' in $$props) $$invalidate(4, email = $$props.email);
			if ('submit' in $$props) $$invalidate(9, submit = $$props.submit);
			if ('cancel' in $$props) $$invalidate(10, cancel = $$props.cancel);
			if ('tryModeAction' in $$props) $$invalidate(11, tryModeAction = $$props.tryModeAction);
			if ('rejectRegister' in $$props) $$invalidate(12, rejectRegister = $$props.rejectRegister);
		};

		$$self.$$.update = () => {
			if ($$self.$$.dirty[0] & /*validationErrors, tel*/ 8200) {
				$$invalidate(26, telHelper = validationErrors.tel
				? validationErrors.tel.join(', ')
				: tel.placeholder);
			}

			if ($$self.$$.dirty[0] & /*validationErrors*/ 8192) {
				$$invalidate(25, telClasses = validationErrors.tel ? CLASS_ERR : CLASS_OK);
			}

			if ($$self.$$.dirty[0] & /*validationErrors, username*/ 8193) {
				$$invalidate(24, usernameHelper = validationErrors.username
				? validationErrors.username.join(', ')
				: username.placeholder);
			}

			if ($$self.$$.dirty[0] & /*validationErrors*/ 8192) {
				$$invalidate(23, usernameClasses = validationErrors.username ? CLASS_ERR : CLASS_OK);
			}

			if ($$self.$$.dirty[0] & /*validationErrors, email*/ 8208) {
				$$invalidate(22, emailHelper = validationErrors.email
				? validationErrors.email.join(', ')
				: email.placeholder);
			}

			if ($$self.$$.dirty[0] & /*validationErrors*/ 8192) {
				$$invalidate(21, emailClasses = validationErrors.email ? CLASS_ERR : CLASS_OK);
			}

			if ($$self.$$.dirty[0] & /*validationErrors, password*/ 8194) {
				$$invalidate(20, passwordHelper = validationErrors.password
				? validationErrors.password.join(', ')
				: password.placeholder);
			}

			if ($$self.$$.dirty[0] & /*validationErrors*/ 8192) {
				$$invalidate(19, passwordClasses = validationErrors.password ? CLASS_ERR : CLASS_OK);
			}

			if ($$self.$$.dirty[0] & /*validationErrors, password2*/ 8196) {
				$$invalidate(18, password2Helper = validationErrors.password2
				? validationErrors.password2.join(', ')
				: password2.placeholder);
			}

			if ($$self.$$.dirty[0] & /*validationErrors*/ 8192) {
				$$invalidate(17, password2Classes = validationErrors.password2 ? CLASS_ERR : CLASS_OK);
			}

			if ($$self.$$.dirty[0] & /*formValid*/ 536870912) {
				$$invalidate(16, formInvalid = formValid === false);
			}
		};

		return [
			username,
			password,
			password2,
			tel,
			email,
			SUCCESS_TEXT,
			mode,
			title,
			description,
			submit,
			cancel,
			tryModeAction,
			rejectRegister,
			validationErrors,
			errorMessage,
			success,
			formInvalid,
			password2Classes,
			password2Helper,
			passwordClasses,
			passwordHelper,
			emailClasses,
			emailHelper,
			usernameClasses,
			usernameHelper,
			telClasses,
			telHelper,
			onChange,
			onInput,
			formValid,
			loading,
			validation,
			MODES,
			MODES_FIELDS,
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
			input_input_handler_4
		];
	}

	class Register extends SvelteComponent {
		constructor(options) {
			super();

			init(
				this,
				options,
				instance,
				create_fragment,
				safe_not_equal,
				{
					validation: 31,
					MODES: 32,
					MODES_FIELDS: 33,
					SUCCESS_TEXT: 5,
					mode: 6,
					loading: 30,
					formValid: 29,
					title: 7,
					description: 8,
					username: 0,
					password: 1,
					password2: 2,
					tel: 3,
					email: 4,
					submit: 9,
					cancel: 10,
					setFieldInvalid: 34,
					setFieldValid: 35,
					fieldIsValid: 36,
					fieldErrorsNotChanged: 37,
					setFormError: 38,
					tryModeAction: 11,
					showSuccess: 39,
					rejectRegister: 12,
					setLoading: 40,
					resetLoading: 41
				},
				null,
				[-1, -1]
			);
		}

		get MODES() {
			return this.$$.ctx[32];
		}

		get MODES_FIELDS() {
			return this.$$.ctx[33];
		}

		get SUCCESS_TEXT() {
			return this.$$.ctx[5];
		}

		get setFieldInvalid() {
			return this.$$.ctx[34];
		}

		get setFieldValid() {
			return this.$$.ctx[35];
		}

		get fieldIsValid() {
			return this.$$.ctx[36];
		}

		get fieldErrorsNotChanged() {
			return this.$$.ctx[37];
		}

		get setFormError() {
			return this.$$.ctx[38];
		}

		get showSuccess() {
			return this.$$.ctx[39];
		}

		get setLoading() {
			return this.$$.ctx[40];
		}

		get resetLoading() {
			return this.$$.ctx[41];
		}
	}

	class ncRegister extends notBulma.notController {
		constructor(app) {
			super(app, 'User.Register');
			this.setModelName('user');
			this.buildPage();
			return this;
		}

		initItem() {
			return this.make.user({
				'_id': undefined,
				username: '',
				tel: '',
				email: '',
				password: '',
				password2: ''
			});
		}

		showError(e) {
			this.item.error = true;
			this.item.message = e.error;
			notBulma.notCommon.report(e);
		}

		buildPage() {
			this.item = this.initItem();
			this.formUI = new Register({
				target: document.querySelector(this.app.getOptions('modules.user.registerFormContainerSelector')),
				props: {
					user:   this.item,
					login:  {
						enabled: false,
						required: false,
						value: '',
					}
				}
			});

			this.formUI.$on('register', ({detail})=>{
				this.item.setAttrs(detail);
				this.formUI.setLoading();
				this.item.$register()
					.then((res)=>{
						this.showResult(res);
						if(!res.error){
							setTimeout(() => UserCommon.goDashboard(this.app), 3000);
						}
					})
					.catch(this.showResult.bind(this));
			});
		}

		showResult(res) {
			this.formUI.resetLoading();
			if(UserCommon.isError(res)){
				notBulma.notCommon.report(res);
			}else {
				if(res.errors && Object.keys(res.errors).length > 0){
					if (!Array.isArray(res.error)){
						res.error = [];
					}
					Object.keys(res.errors).forEach((fieldName)=>{
						this.formUI.setFieldInvalid(fieldName, res.errors[fieldName]);
						res.error.push(...res.errors[fieldName]);
					});
				}
				if(res.error){
					this.formUI.setFormError(res.error);
				}
				if(!res.error ){
					this.formUI.showSuccess();
				}
			}
		}
	}

	/* src/controllers/guest/restore.svelte generated by Svelte v3.44.2 */

	class Restore extends SvelteComponent {
		constructor(options) {
			super();
			init(this, options, null, null, safe_not_equal, {});
		}
	}

	class ncRestore extends notBulma.notController {
		constructor(app) {
			super(app, 'User.Restore');
			this.setModelName('user');
			this.buildPage();
			return this;
		}

		initItem() {
			return {
				email: ''
			};
		}

		showResult(res) {
			this.formUI.resetLoading();
			if(UserCommon.isError(res)){
				notBulma.notCommon.report(res);
			}else {
				if(res.errors && Object.keys(res.errors).length > 0){
					if (!Array.isArray(res.error)){
						res.error = [];
					}
					Object.keys(res.errors).forEach((fieldName)=>{
						this.formUI.setFieldInvalid(fieldName, res.errors[fieldName]);
						res.error.push(...res.errors[fieldName]);
					});
				}
				if(res.error){
					this.formUI.setFormError(res.error);
				}
				if(!res.error ){
					this.formUI.showSuccess();
				}
			}
		}

		buildPage() {
			this.item = this.initItem();
			this.formUI = new Restore({
				target: document.querySelector(this.app.getOptions('modules.user.loginFormContainerSelector')),
				props: {
					user:   this.item
				}
			});
			this.formUI.$on('login', ({detail})=>{
				this.item.setAttrs(detail);
				this.formUI.setLoading();
				this.item.$login()
					.then((res)=>{
						this.showResult(res);
						if(!res.error){
							setTimeout(() => UserCommon.goDashboard(this.app), 3000);
						}
					})
					.catch(this.showResult.bind(this));
			});
		}
	}

	let manifest = {
		router: {
			manifest: [
				{
					paths: ['login'],
					controller: ncLogin
				},
				{
					paths: ['register'],
					controller: ncRegister
				},
				{
					paths: ['restore'],
					controller: ncRestore
				}
			]
		},
		templates: {},
		paths: {
			common: '/client/common',
			modules: '/client/modules'
		}
	};

	exports.manifest = manifest;
	exports.ncLogin = ncLogin;
	exports.ncRegister = ncRegister;
	exports.ncRestore = ncRestore;

	Object.defineProperty(exports, '__esModule', { value: true });

	return exports;

})({}, notBulma);
