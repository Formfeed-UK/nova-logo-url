/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AppLogo.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AppLogo.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_AppLogo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/AppLogo */ "./vendor/laravel/nova/resources/js/components/AppLogo.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    NovaAppLogo: _components_AppLogo__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  "extends": _components_AppLogo__WEBPACK_IMPORTED_MODULE_0__["default"],
  mounted: function mounted() {
    if (this.logoHasLink) {
      var parent = this.$el.parentElement;

      if (parent.nodeName == "A") {
        parent.setAttribute("href", this.logoLink);
        parent.parentNode.replaceChild(parent.cloneNode(true), parent);
      }
    }
  },
  computed: {
    logoIsUrl: function logoIsUrl() {
      return Nova.appConfig.logoUrl ? true : false;
    },
    darkLogoIsUrl: function darkLogoIsUrl() {
      return Nova.appConfig.logoUrl ? true : false;
    },
    logoHasLink: function logoHasLink() {
      return Nova.appConfig.logoLink ? true : false;
    },
    logoUrl: function logoUrl() {
      return this.logoIsUrl ? Nova.appConfig.logoUrl : "";
    },
    logoUrlDark: function logoUrlDark() {
      return this.darkLogoIsUrl ? Nova.appConfig.logoUrlDark : "";
    },
    logoLink: function logoLink() {
      return this.logoHasLink ? Nova.appConfig.logoLink : "";
    },
    logoClass: function logoClass() {
      var classes = this.$attrs["class"];

      if (Nova.appConfig.logoClass) {
        classes = Nova.appConfig.logoClass;
      }

      if (this.darkLogoIsUrl) {
        classes += " theme-switch";
      }

      return classes;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./vendor/laravel/nova/resources/js/components/AppLogo.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./vendor/laravel/nova/resources/js/components/AppLogo.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  inheritAttrs: false,
  computed: {
    logo: function logo() {
      return window.Nova.config('logo');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AppLogo.vue?vue&type=template&id=7ceb4ed1&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AppLogo.vue?vue&type=template&id=7ceb4ed1&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-7ceb4ed1"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = ["src"];
var _hoisted_2 = ["src"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_NovaAppLogo = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("NovaAppLogo");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [$options.logoIsUrl ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", {
    key: 0,
    src: $options.logoUrl,
    alt: "Logo",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["image-logo", $options.logoClass])
  }, null, 10
  /* CLASS, PROPS */
  , _hoisted_1)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.darkLogoIsUrl ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", {
    key: 1,
    src: $options.logoUrlDark,
    alt: "Logo",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["image-logo-dark", $options.logoClass])
  }, null, 10
  /* CLASS, PROPS */
  , _hoisted_2)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_NovaAppLogo, (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
    key: 2
  }, _ctx.$props, {
    "class": $options.logoClass
  }), null, 16
  /* FULL_PROPS */
  , ["class"]))]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./vendor/laravel/nova/resources/js/components/AppLogo.vue?vue&type=template&id=1acec1eb":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./vendor/laravel/nova/resources/js/components/AppLogo.vue?vue&type=template&id=1acec1eb ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<defs><radialGradient cx=\"-4.619%\" cy=\"6.646%\" fx=\"-4.619%\" fy=\"6.646%\" r=\"101.342%\" gradientTransform=\"matrix(.8299 .53351 -.5579 .79363 .03 .038)\" id=\"a\"><stop stop-color=\"#00FFC4\" offset=\"0%\"></stop><stop stop-color=\"#00E1FF\" offset=\"100%\"></stop></radialGradient></defs><g fill-rule=\"nonzero\" fill=\"none\"><path d=\"M30.343 9.99a14.757 14.757 0 0 1 .046 20.972 18.383 18.383 0 0 1-13.019 5.365A18.382 18.382 0 0 1 3.272 29.79c7.209 5.955 17.945 5.581 24.713-1.118a11.477 11.477 0 0 0 0-16.345c-4.56-4.514-11.953-4.514-16.513 0a4.918 4.918 0 0 0 0 7.006 5.04 5.04 0 0 0 7.077 0 1.68 1.68 0 0 1 2.359 0 1.639 1.639 0 0 1 0 2.333 8.4 8.4 0 0 1-11.794 0 8.198 8.198 0 0 1 0-11.674c5.861-5.805 15.366-5.805 21.229 0ZM17.37 0a18.38 18.38 0 0 1 14.097 6.538C24.257.583 13.52.958 6.756 7.653v.002a11.477 11.477 0 0 0 0 16.346c4.558 4.515 11.95 4.515 16.51 0a4.918 4.918 0 0 0 0-7.005 5.04 5.04 0 0 0-7.077 0 1.68 1.68 0 0 1-2.358 0 1.639 1.639 0 0 1 0-2.334 8.4 8.4 0 0 1 11.794 0 8.198 8.198 0 0 1 0 11.674c-5.862 5.805-15.367 5.805-21.23 0a14.756 14.756 0 0 1-.02-20.994A18.383 18.383 0 0 1 17.37 0Z\" fill=\"url(#a)\"></path><path d=\"M59.211 27.49a1.68 1.68 0 0 0 1.69-1.69 1.68 1.68 0 0 0-1.69-1.69h-6.88V12.306c0-1.039-.82-1.86-1.86-1.86-1.037 0-1.858.821-1.858 1.86v13.325c0 1.039.82 1.858 1.859 1.858h8.74Zm9.318-13.084c2.004 0 3.453.531 4.37 1.448.965.967 1.4 2.39 1.4 4.13v5.888c0 .99-.798 1.763-1.787 1.763-1.062 0-1.763-.749-1.763-1.52v-.026c-.893.99-2.123 1.642-3.91 1.642-2.438 0-4.441-1.4-4.441-3.959v-.048c0-2.824 2.148-4.128 5.214-4.128a9.195 9.195 0 0 1 3.163.532v-.218c0-1.521-.944-2.366-2.777-2.366a8.416 8.416 0 0 0-2.535.361 1.525 1.525 0 0 1-.53.098c-.846 0-1.521-.652-1.521-1.496 0-.635.394-1.203.989-1.425 1.16-.435 2.414-.676 4.128-.676Zm-.05 7.387c-1.567 0-2.533.628-2.533 1.786v.047c0 .99.821 1.57 2.005 1.57h-.001l.195-.004c1.541-.066 2.59-.915 2.672-2.113l.005-.151v-.653c-.628-.289-1.448-.482-2.342-.482Zm10.817 5.842c1.014 0 1.833-.82 1.833-1.835v-3.428c0-2.607 1.04-4.03 2.898-4.465.748-.17 1.375-.75 1.375-1.714 0-1.04-.652-1.787-1.785-1.787-1.088 0-1.956 1.159-2.486 2.415v-.58a1.835 1.835 0 1 0-3.67 0v9.56c0 1.013.82 1.833 1.833 1.833l.002.001Zm13.01-13.229c2.005 0 3.453.531 4.37 1.448.965.967 1.4 2.39 1.4 4.13v5.888c0 .99-.797 1.763-1.786 1.763-1.063 0-1.763-.749-1.763-1.52v-.026c-.893.99-2.123 1.643-3.911 1.643-2.438-.001-4.44-1.401-4.44-3.96v-.048c0-2.824 2.148-4.128 5.214-4.128a9.195 9.195 0 0 1 3.162.532v-.218c0-1.521-.943-2.366-2.776-2.366a8.416 8.416 0 0 0-2.535.361 1.525 1.525 0 0 1-.53.098c-.847 0-1.522-.652-1.522-1.496 0-.635.395-1.203.99-1.425 1.16-.435 2.413-.676 4.127-.676Zm-.048 7.387c-1.568 0-2.534.628-2.534 1.786v.047c0 .99.821 1.57 2.003 1.57 1.714 0 2.872-.94 2.872-2.268v-.653c-.627-.289-1.447-.482-2.341-.482Zm14.17 5.963c.99 0 1.667-.653 2.076-1.593l3.959-9.15c.072-.169.194-.555.194-.869a1.736 1.736 0 0 0-1.764-1.738c-.965 0-1.472.628-1.712 1.255l-2.825 7.556-2.775-7.508c-.267-.748-.798-1.303-1.788-1.303-.989 0-1.786.845-1.786 1.714 0 .338.097.652.194.894l3.959 9.149c.41.965 1.086 1.593 2.075 1.593h.194-.001Zm13.977-13.447c4.321 0 6.228 3.55 6.228 6.228 0 1.063-.748 1.763-1.714 1.763h-7.265c.362 1.665 1.52 2.535 3.162 2.535a4.237 4.237 0 0 0 2.607-.87 1.37 1.37 0 0 1 .894-.29c.82 0 1.423.63 1.423 1.449 0 .483-.216.846-.483 1.086-1.134.967-2.607 1.57-4.49 1.57-3.886 0-6.758-2.728-6.758-6.687v-.047c0-3.695 2.63-6.737 6.396-6.737Zm0 2.945c-1.52 0-2.51 1.086-2.8 2.753h5.528c-.217-1.642-1.183-2.753-2.728-2.753Zm11.033 10.381c1.014 0 1.833-.82 1.833-1.835V11.556a1.834 1.834 0 0 0-3.668 0V25.8c0 1.014.82 1.833 1.833 1.833l.002.003Zm14.75 0c1.013 0 1.833-.82 1.833-1.835v-9.053l7.435 9.753c.507.653 1.039 1.086 1.93 1.086h.123c1.037 0 1.858-.82 1.858-1.858V12.283a1.835 1.835 0 0 0-3.67 0v8.713l-7.17-9.415c-.505-.651-1.037-1.086-1.93-1.086h-.386c-1.038 0-1.859.821-1.859 1.859v13.445c0 1.014.82 1.836 1.834 1.836h.001Zm23.244-13.326c4.007 0 6.976 2.97 6.976 6.687v.048c0 3.719-2.993 6.735-7.024 6.735-4.007 0-6.976-2.97-6.976-6.686v-.047c0-3.719 2.993-6.737 7.024-6.737Zm-.048 3.163c-2.1 0-3.355 1.617-3.355 3.524v.048c0 1.907 1.375 3.573 3.403 3.573 2.1 0 3.355-1.617 3.355-3.524v-.049c0-1.905-1.375-3.572-3.403-3.572Zm14.798 10.284c.99 0 1.664-.653 2.076-1.593l3.958-9.15c.072-.169.195-.555.195-.869a1.736 1.736 0 0 0-1.764-1.738c-.966 0-1.473.628-1.713 1.255l-2.825 7.556-2.777-7.508c-.264-.748-.796-1.303-1.786-1.303-.989 0-1.786.845-1.786 1.714 0 .338.097.652.194.894l3.959 9.149c.41.965 1.086 1.593 2.075 1.593h.194Zm13.76-13.35c2.003 0 3.451.531 4.368 1.448.967.967 1.4 2.39 1.4 4.13v5.888c0 .99-.796 1.763-1.786 1.763-1.061 0-1.761-.749-1.761-1.52v-.026c-.894.99-2.126 1.642-3.91 1.642-2.44 0-4.444-1.4-4.444-3.959v-.048c0-2.824 2.149-4.128 5.215-4.128a9.195 9.195 0 0 1 3.162.532v-.218c0-1.521-.942-2.366-2.776-2.366a8.416 8.416 0 0 0-2.535.361 1.52 1.52 0 0 1-.53.098c-.845 0-1.522-.652-1.522-1.496 0-.636.395-1.204.99-1.425 1.159-.435 2.415-.676 4.129-.676Zm-.049 7.387c-1.57 0-2.535.628-2.535 1.786v.047c0 .99.821 1.57 2.004 1.57 1.714 0 2.873-.94 2.873-2.268v-.653c-.628-.289-1.449-.482-2.342-.482Z\" class=\"fill-current text-gray-600 dark:text-white\"></path></g>", 2);

var _hoisted_3 = [_hoisted_1];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_PassthroughLogo = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("PassthroughLogo");

  return $options.logo ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_PassthroughLogo, {
    key: 0,
    logo: $options.logo,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.$attrs["class"])
  }, null, 8
  /* PROPS */
  , ["logo", "class"])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", {
    key: 1,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([_ctx.$attrs["class"], "h-6"]),
    viewBox: "0 0 204 37",
    xmlns: "http://www.w3.org/2000/svg"
  }, _hoisted_3, 2
  /* CLASS */
  ));
}

/***/ }),

/***/ "./resources/js/asset.js":
/*!*******************************!*\
  !*** ./resources/js/asset.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_AppLogo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/AppLogo */ "./resources/js/components/AppLogo.vue");

Nova.booting(function (app) {
  app.component('AppLogo', _components_AppLogo__WEBPACK_IMPORTED_MODULE_0__["default"]);
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AppLogo.vue?vue&type=style&index=0&id=7ceb4ed1&scoped=true&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AppLogo.vue?vue&type=style&index=0&id=7ceb4ed1&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.image-logo-dark.theme-switch[data-v-7ceb4ed1] {\r\n        display: none;\n}\nhtml.dark .image-logo.theme-switch[data-v-7ceb4ed1] {\r\n        display: none;\n}\nhtml.dark .image-logo-dark.theme-switch[data-v-7ceb4ed1] {\r\n        display: block;\n}\r\n\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./resources/css/asset.css":
/*!*********************************!*\
  !*** ./resources/css/asset.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AppLogo.vue?vue&type=style&index=0&id=7ceb4ed1&scoped=true&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AppLogo.vue?vue&type=style&index=0&id=7ceb4ed1&scoped=true&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppLogo_vue_vue_type_style_index_0_id_7ceb4ed1_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AppLogo.vue?vue&type=style&index=0&id=7ceb4ed1&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AppLogo.vue?vue&type=style&index=0&id=7ceb4ed1&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppLogo_vue_vue_type_style_index_0_id_7ceb4ed1_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppLogo_vue_vue_type_style_index_0_id_7ceb4ed1_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/vue-loader/dist/exportHelper.js":
/*!******************************************************!*\
  !*** ./node_modules/vue-loader/dist/exportHelper.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
// runtime helper for setting properties on components
// in a tree-shakable way
exports["default"] = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ "./resources/js/components/AppLogo.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/AppLogo.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AppLogo_vue_vue_type_template_id_7ceb4ed1_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppLogo.vue?vue&type=template&id=7ceb4ed1&scoped=true */ "./resources/js/components/AppLogo.vue?vue&type=template&id=7ceb4ed1&scoped=true");
/* harmony import */ var _AppLogo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppLogo.vue?vue&type=script&lang=js */ "./resources/js/components/AppLogo.vue?vue&type=script&lang=js");
/* harmony import */ var _AppLogo_vue_vue_type_style_index_0_id_7ceb4ed1_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppLogo.vue?vue&type=style&index=0&id=7ceb4ed1&scoped=true&lang=css */ "./resources/js/components/AppLogo.vue?vue&type=style&index=0&id=7ceb4ed1&scoped=true&lang=css");
/* harmony import */ var C_Users_Ian_Documents_GitHub_nova_logo_url_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_Users_Ian_Documents_GitHub_nova_logo_url_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_AppLogo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_AppLogo_vue_vue_type_template_id_7ceb4ed1_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-7ceb4ed1"],['__file',"resources/js/components/AppLogo.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./vendor/laravel/nova/resources/js/components/AppLogo.vue":
/*!*****************************************************************!*\
  !*** ./vendor/laravel/nova/resources/js/components/AppLogo.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AppLogo_vue_vue_type_template_id_1acec1eb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppLogo.vue?vue&type=template&id=1acec1eb */ "./vendor/laravel/nova/resources/js/components/AppLogo.vue?vue&type=template&id=1acec1eb");
/* harmony import */ var _AppLogo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppLogo.vue?vue&type=script&lang=js */ "./vendor/laravel/nova/resources/js/components/AppLogo.vue?vue&type=script&lang=js");
/* harmony import */ var C_Users_Ian_Documents_GitHub_nova_logo_url_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_Ian_Documents_GitHub_nova_logo_url_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_AppLogo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_AppLogo_vue_vue_type_template_id_1acec1eb__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"vendor/laravel/nova/resources/js/components/AppLogo.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/AppLogo.vue?vue&type=script&lang=js":
/*!*********************************************************************!*\
  !*** ./resources/js/components/AppLogo.vue?vue&type=script&lang=js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppLogo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppLogo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AppLogo.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AppLogo.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./vendor/laravel/nova/resources/js/components/AppLogo.vue?vue&type=script&lang=js":
/*!*****************************************************************************************!*\
  !*** ./vendor/laravel/nova/resources/js/components/AppLogo.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppLogo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppLogo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AppLogo.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./vendor/laravel/nova/resources/js/components/AppLogo.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/AppLogo.vue?vue&type=template&id=7ceb4ed1&scoped=true":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/AppLogo.vue?vue&type=template&id=7ceb4ed1&scoped=true ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppLogo_vue_vue_type_template_id_7ceb4ed1_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppLogo_vue_vue_type_template_id_7ceb4ed1_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AppLogo.vue?vue&type=template&id=7ceb4ed1&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AppLogo.vue?vue&type=template&id=7ceb4ed1&scoped=true");


/***/ }),

/***/ "./vendor/laravel/nova/resources/js/components/AppLogo.vue?vue&type=template&id=1acec1eb":
/*!***********************************************************************************************!*\
  !*** ./vendor/laravel/nova/resources/js/components/AppLogo.vue?vue&type=template&id=1acec1eb ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppLogo_vue_vue_type_template_id_1acec1eb__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppLogo_vue_vue_type_template_id_1acec1eb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AppLogo.vue?vue&type=template&id=1acec1eb */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./vendor/laravel/nova/resources/js/components/AppLogo.vue?vue&type=template&id=1acec1eb");


/***/ }),

/***/ "./resources/js/components/AppLogo.vue?vue&type=style&index=0&id=7ceb4ed1&scoped=true&lang=css":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/AppLogo.vue?vue&type=style&index=0&id=7ceb4ed1&scoped=true&lang=css ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppLogo_vue_vue_type_style_index_0_id_7ceb4ed1_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AppLogo.vue?vue&type=style&index=0&id=7ceb4ed1&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AppLogo.vue?vue&type=style&index=0&id=7ceb4ed1&scoped=true&lang=css");


/***/ }),

/***/ "vue":
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/***/ ((module) => {

module.exports = Vue;

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/asset": 0,
/******/ 			"css/asset": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkformfeed_nova_logo_url"] = self["webpackChunkformfeed_nova_logo_url"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/asset"], () => (__webpack_require__("./resources/js/asset.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/asset"], () => (__webpack_require__("./resources/css/asset.css")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;