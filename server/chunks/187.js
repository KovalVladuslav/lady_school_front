exports.id = 187;
exports.ids = [187];
exports.modules = {

/***/ 8238:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": function() { return /* binding */ useDebounce; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useDebounce = (value, delay) => {
  const {
    0: debouncedValue,
    1: setDebouncedValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value]);
  return debouncedValue;
};

/***/ }),

/***/ 7688:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5084);
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4356);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_3__);




const cx = classnames_bind__WEBPACK_IMPORTED_MODULE_2___default().bind((_index_module_scss__WEBPACK_IMPORTED_MODULE_3___default()));

const BrownButtonBtn = ({
  title,
  onClick,
  additionalClass
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
    onClick: onClick,
    className: cx((_index_module_scss__WEBPACK_IMPORTED_MODULE_3___default().brownButton), additionalClass),
    children: title
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (BrownButtonBtn);

/***/ }),

/***/ 3655:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5084);
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4356);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_4__);





const cx = classnames_bind__WEBPACK_IMPORTED_MODULE_3___default().bind((_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default()));

const DisabledButton = ({
  title,
  additionalClass
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
    className: cx((_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().brownButton), (_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().disabledButton), additionalClass),
    disabled: true,
    children: title
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (DisabledButton);

/***/ }),

/***/ 3769:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5084);
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Input_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7231);
/* harmony import */ var _Input_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Input_module_scss__WEBPACK_IMPORTED_MODULE_3__);





const cx = classnames_bind__WEBPACK_IMPORTED_MODULE_2___default().bind((_Input_module_scss__WEBPACK_IMPORTED_MODULE_3___default()));

const Input = ({
  value,
  onChange,
  type,
  label,
  error,
  name,
  placeholder
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: cx((_Input_module_scss__WEBPACK_IMPORTED_MODULE_3___default().customInput), {
      'error': error
    }),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
      htmlFor: name,
      children: label
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
      autoComplete: "off",
      id: name,
      name: name,
      type: type,
      value: value,
      onChange: onChange,
      placeholder: placeholder
    }), error && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
      className: (_Input_module_scss__WEBPACK_IMPORTED_MODULE_3___default().customInputError),
      children: error
    })]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (Input);

/***/ }),

/***/ 882:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dI": function() { return /* binding */ validationEmail; },
/* harmony export */   "b4": function() { return /* binding */ checkedIsSubmitBtn; },
/* harmony export */   "iH": function() { return /* binding */ validationName; },
/* harmony export */   "as": function() { return /* binding */ identityValidationPasswords; }
/* harmony export */ });
function validationEmail(email) {
  if (!email) return '';
  const regularExpression = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regularExpression.test(String(email).toLowerCase()) ? '' : 'Введен некорректный Email';
}
const checkedIsSubmitBtn = (objectFields, errorMsg) => Object.values(objectFields).every(item => item !== '') && errorMsg === '';
function validationName(str) {
  if (!str) {
    return '';
  }

  const validName = str.split(' ').map(item => item.replace(/^a-Za-Я/g, '')).join(' ').trim();
  return validName.length < 2 ? 'Имя должно содержать минимум два символа' : '';
}

const validationPass = pass => {
  if (!pass) {
    return '';
  }

  return pass.length < 5 ? 'Не менее 5 символов' : '';
};

function identityValidationPasswords(password, repeatPassword) {
  const regValidationPassError = {
    password: validationPass(password),
    repeatPassword: ''
  };

  if (regValidationPassError.password) {
    return regValidationPassError;
  } else {
    if (!password && repeatPassword) {
      regValidationPassError.password = 'Введите пароль';
    } else if (repeatPassword && password !== repeatPassword) {
      regValidationPassError.repeatPassword = 'Ваши пароли не совпадают';
    }
  }

  return regValidationPassError;
}

/***/ }),

/***/ 7231:
/***/ (function(module) {

// Exports
module.exports = {
	"customInput": "Input_customInput__2f8Gw",
	"error": "Input_error__3BXcO",
	"customInputError": "Input_customInputError__DZyoM"
};


/***/ }),

/***/ 4356:
/***/ (function(module) {

// Exports
module.exports = {
	"brownButton": "ui_brownButton__3jrvN",
	"dividerHorizontal": "ui_dividerHorizontal__1GSP1",
	"dividerVertical": "ui_dividerVertical__bRAbJ",
	"transparentButton": "ui_transparentButton__3wYlK",
	"disabledButton": "ui_disabledButton__32lCn"
};


/***/ }),

/***/ 4302:
/***/ (function(module) {

// Exports
module.exports = {
	"colAuth": "auth_colAuth__1NLjz",
	"wrapperAuth": "auth_wrapperAuth__275Xd",
	"forgotPassword": "auth_forgotPassword__3Wm6M",
	"registrationPrice": "auth_registrationPrice__rmevk",
	"accessMsg": "auth_accessMsg__utDwj",
	"agreePrivacyPolicy": "auth_agreePrivacyPolicy__3ti9L"
};


/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;