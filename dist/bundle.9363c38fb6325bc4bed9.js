/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/validation.js":
/*!******************************!*\
  !*** ./src/js/validation.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validateForm": () => (/* binding */ validateForm)
/* harmony export */ });
var validateName = function validateName(value) {
  return value.length >= 2;
};
var validateEmail = function validateEmail(value) {
  var re = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
  var result = re.test(value);
  return result;
};
var validateForm = function validateForm() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }
  return [validateName, validateEmail].reduce(function (acc, func, index) {
    var result = func(params[index]);
    return result;
  }, false);
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/illustration.png */ "./src/assets/illustration.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/arrow.svg */ "./src/assets/arrow.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/logo-blue.svg */ "./src/assets/logo-blue.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".button {\n  padding: 15px;\n  background-color: #5a98d0;\n  color: #ffffff;\n  border: none;\n  border-radius: 10px;\n  width: 220px;\n  font-size: 16px;\n  line-height: 26px;\n  cursor: pointer;\n}\n\n.navigation {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  max-width: 1240px;\n  margin: 0 auto;\n  padding: 40px 20px;\n}\n.navigation__logo {\n  display: block;\n}\n\n.header {\n  padding: 0 0 190px;\n  background-image: linear-gradient(rgba(152, 195, 232, 0), #98c3e8);\n  position: relative;\n  overflow: hidden;\n}\n.header__info {\n  max-width: 520px;\n  padding-top: 60px;\n  position: relative;\n  z-index: 2;\n}\n.header__info::after {\n  content: \"\";\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  width: 688px;\n  height: 613px;\n  position: absolute;\n  top: -39px;\n  left: 441px;\n}\n.header__title {\n  font-size: 64px;\n  line-height: 74px;\n  font-weight: 500;\n}\n.header__text {\n  margin-top: 32px;\n  font-size: 16px;\n  line-height: 26px;\n  opacity: 0.6;\n  max-width: 330px;\n}\n.header__button {\n  margin-top: 76px;\n}\n\n@media (max-width: 768px) {\n  .header__info::after {\n    left: 350px;\n  }\n}\n@media (min-width: 320px) and (max-width: 576px) {\n  .header {\n    padding-bottom: 100px;\n  }\n  .header__title {\n    font-size: 26px;\n    line-height: 36px;\n  }\n  .header__text {\n    margin-top: 20px;\n  }\n  .header__button {\n    margin-top: 50px;\n    width: 100%;\n    max-width: 280px;\n  }\n  .header__info {\n    padding-top: 0;\n  }\n  .header__info::after {\n    top: -166px;\n    left: 293px;\n  }\n}\n.benefits {\n  padding: 190px 0 212px;\n  position: relative;\n}\n.benefits__title {\n  color: #316099;\n  font-size: 36px;\n  line-height: 46px;\n  font-weight: 500;\n  position: absolute;\n  max-width: 330px;\n}\n.benefits__list {\n  display: grid;\n  grid-template-columns: repeat(2, 380px);\n  grid-auto-rows: 215px 210px;\n  gap: 100px;\n  justify-content: end;\n}\n.benefits__list-item {\n  grid-row: span 2;\n}\n.benefits__list-item:nth-child(odd) {\n  grid-column-start: 2;\n}\n\n@media (max-width: 992px) {\n  .benefits {\n    padding: 100px 0;\n  }\n  .benefits__title {\n    position: static;\n  }\n  .benefits__list {\n    margin-top: 65px;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    justify-content: center;\n    justify-items: center;\n    gap: 30px;\n    grid-auto-rows: minmax(525px, auto);\n  }\n  .benefits__list-item {\n    grid-row: span 1;\n  }\n  .benefits__list-item:nth-child(odd) {\n    grid-column-start: 1;\n  }\n}\n.benefit {\n  max-width: 380px;\n  min-height: 525px;\n  padding: 235px 48px 48px;\n  box-shadow: 0 0 20px 5px rgba(16, 112, 177, 0.2);\n  border-radius: 10px;\n  position: relative;\n}\n.benefit__img {\n  position: absolute;\n}\n.benefit__title {\n  font-size: 20px;\n  line-height: 30px;\n}\n.benefit__text {\n  margin-top: 19px;\n  font-size: 16px;\n  line-height: 26px;\n  opacity: 0.6;\n}\n.benefit__link {\n  display: flex;\n  align-items: center;\n  margin-top: 57px;\n  color: #5a98d0;\n  font-size: 14px;\n  line-height: 30px;\n  text-decoration: none;\n}\n.benefit__link::after {\n  content: \"\";\n  display: block;\n  width: 16px;\n  height: 16px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-repeat: no-repeat;\n  background-position: center;\n  margin-left: 28px;\n}\n.benefit--orange .benefit__img {\n  top: -20px;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.benefit--blue .benefit__img {\n  top: 48px;\n  left: 74px;\n}\n.benefit--purple .benefit__img {\n  top: 48px;\n  left: 100px;\n}\n\n.clients {\n  background-color: #5a98d0;\n  color: #ffffff;\n  padding: 96px 0 136px;\n  border-top-left-radius: 200px;\n}\n.clients__header {\n  display: grid;\n  grid-template-columns: 220px 440px;\n  gap: 97px;\n}\n.clients__title {\n  font-size: 36px;\n  line-height: 46px;\n}\n.clients__text {\n  opacity: 0.6;\n  line-height: 26px;\n}\n.clients__list {\n  margin-top: 110px;\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-auto-rows: 128px;\n  overflow: hidden;\n  gap: 1px;\n  justify-content: center;\n}\n.clients__list-item {\n  outline: 0.5px solid #ffffff;\n}\n.clients__list-item-text, .clients__list-link {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 20px;\n  line-height: 46px;\n}\n.clients__list-item-text {\n  text-transform: uppercase;\n}\n.clients__list-link {\n  text-decoration: none;\n  color: inherit;\n}\n\n@media (max-width: 992px) {\n  .clients__header {\n    padding: 0 40px;\n    grid-template-columns: 220px 1fr;\n    gap: 20px;\n  }\n}\n@media (max-width: 768px) {\n  .clients {\n    padding-bottom: 100px;\n  }\n  .clients__list {\n    grid-template-columns: repeat(3, minmax(100px, 1fr));\n  }\n}\n@media (max-width: 576px) {\n  .clients {\n    border-top-left-radius: 100px;\n  }\n  .clients__header {\n    display: block;\n    padding: 0;\n  }\n  .clients__text {\n    margin-top: 20px;\n  }\n  .clients__list {\n    margin-top: 50px;\n    grid-template-columns: repeat(2, minmax(100px, 1fr));\n  }\n  .clients__list-item-text {\n    font-size: 16px;\n  }\n}\n.footer {\n  background-color: #5a98d0;\n  color: #ffffff;\n  position: relative;\n}\n.footer__container {\n  padding: 0;\n  margin: 0 0 0 auto;\n  max-width: 901px;\n}\n.footer__wrapper {\n  border-top-right-radius: 200px;\n  background-color: #316099;\n  margin-right: 96px;\n  padding-bottom: 70px;\n}\n.footer__inner-wrapper {\n  max-width: 1093px;\n}\n.footer__header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 82px 20px 99px;\n  position: relative;\n}\n.footer__header::after {\n  content: \"\";\n  position: absolute;\n  background-color: #ffffff;\n  opacity: 0.4;\n  height: 1px;\n  width: 1073px;\n  right: 20px;\n  bottom: 0;\n}\n.footer__header-info {\n  max-width: 380px;\n}\n.footer__header-title {\n  font-size: 36px;\n  line-height: 46px;\n  max-width: 317px;\n}\n.footer__header-text {\n  margin-top: 32px;\n  font-size: 16px;\n  line-height: 26px;\n  opacity: 0.6;\n}\n.footer__bottom {\n  padding: 93px 20px 72px;\n  display: flex;\n  flex-wrap: wrap;\n}\n.footer__contacts {\n  max-width: 265px;\n  margin-right: 134px;\n}\n.footer__contacts-title {\n  font-size: 28px;\n  line-height: 46px;\n  display: flex;\n  align-items: center;\n}\n.footer__contacts-title::before {\n  content: \"\";\n  display: block;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  width: 48px;\n  height: 48px;\n  margin-right: 15px;\n}\n.footer__contacts-list {\n  margin-top: 33px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.footer__contact {\n  padding-left: 37px;\n  position: relative;\n  font-size: 16px;\n  line-height: 26px;\n}\n.footer__contact-number {\n  position: absolute;\n  left: 0;\n  top: 0;\n  font-weight: 600;\n}\n.footer__nav {\n  display: grid;\n  grid-template-columns: repeat(2, 170px);\n  gap: 71px;\n}\n.footer__nav-title {\n  font-size: 28px;\n  line-height: 30px;\n  font-weight: 500;\n}\n.footer__nav-list {\n  margin-top: 32px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.footer__nav-link {\n  text-decoration: none;\n  color: inherit;\n  font-size: 16px;\n  line-height: 26px;\n}\n.footer__rights {\n  opacity: 0.4;\n  padding: 0 23px;\n}\n\n@media (max-width: 992px) {\n  .footer__wrapper {\n    border-top-right-radius: 100px;\n    margin-right: 48px;\n  }\n  .footer__header {\n    justify-content: space-around;\n    flex-wrap: wrap;\n  }\n  .footer__header-info {\n    text-align: center;\n  }\n  .footer__header-button {\n    margin-top: 30px;\n  }\n  .footer__nav {\n    gap: 20px;\n  }\n  .footer__contacts {\n    margin-right: auto;\n  }\n}\n@media (max-width: 768px) {\n  .footer__contacts {\n    margin: 0;\n  }\n  .footer__bottom {\n    padding-top: 20px;\n    justify-content: center;\n  }\n  .footer__nav {\n    margin-top: 40px;\n  }\n  .footer__header {\n    padding-bottom: 30px;\n  }\n}\n@media (max-width: 576px) {\n  .footer__bottom {\n    display: block;\n  }\n  .footer__contacts {\n    margin: 0 auto;\n  }\n  .footer__nav {\n    grid-template-columns: repeat(auto-fit, 170px);\n    justify-content: center;\n    gap: 40px;\n  }\n  .footer__nav-list {\n    margin-top: 20px;\n    gap: 5px;\n  }\n}\n.hamburger-button {\n  width: 24px;\n  height: 17px;\n  z-index: 2;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  border: none;\n  cursor: pointer;\n}\n.hamburger-button__line {\n  display: block;\n  height: 3px;\n  width: 100%;\n  border-radius: 10px;\n  background: #356EAD;\n}\n\n.modal {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.3);\n  overflow-y: auto;\n  z-index: 5;\n}\n.modal__inner {\n  margin: 50px auto;\n  color: #000000;\n  padding: 56px;\n  background-color: #ffffff;\n  max-width: 540px;\n  width: 100%;\n  border-radius: 10px;\n}\n.modal__title {\n  font-size: 20px;\n  line-height: 30px;\n  text-transform: uppercase;\n}\n.modal__text {\n  font-size: 14px;\n  line-height: 21px;\n  margin: 26px 0 0;\n  text-align: center;\n  text-transform: uppercase;\n}\n.modal__button {\n  display: block;\n  width: 180px;\n  margin: 27px auto 0;\n}\n.modal--close {\n  display: none;\n}\n\n@media (max-width: 576px) {\n  .modal {\n    gap: 20px;\n  }\n  .modal__inner {\n    padding: 25px;\n  }\n}\n.form {\n  margin-top: 48px;\n  display: flex;\n  flex-direction: column;\n  gap: 32px;\n}\n.form__field-wrapper {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.form__label {\n  opacity: 0.8;\n  font-size: 16px;\n  line-height: 30px;\n}\n.form__input, .form__message {\n  padding: 20px 42px;\n  border: 1px solid rgba(53, 110, 173, 0.4);\n  border-radius: 10px;\n  font-size: 16px;\n  line-height: 30px;\n  color: #1f3f68;\n}\n.form__input::placeholder, .form__message::placeholder {\n  color: #1f3f68;\n  opacity: 0.4;\n}\n.form__message {\n  resize: none;\n  height: 144px;\n}\n\n@media (max-width: 576px) {\n  .form {\n    gap: 20px;\n    margin-top: 20px;\n  }\n  .form__input, .form__message {\n    padding: 10px 20px;\n  }\n  .form__field-wrapper {\n    gap: 4px;\n  }\n}\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nul,\nol {\n  list-style: none;\n}\n\nbody {\n  color: #1f3f68;\n  overflow-x: hidden;\n}\n\n.visually-hidden {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  border: 0;\n  padding: 0;\n  white-space: nowrap;\n  clip-path: inset(100%);\n  clip: rect(0 0 0 0);\n  overflow: hidden;\n}\n\n.container {\n  width: 100%;\n  max-width: 980px;\n  padding: 0 20px;\n  margin: 0 auto;\n}", "",{"version":3,"sources":["webpack://./src/style/blocks/button.scss","webpack://./src/style/_var.scss","webpack://./src/style.scss","webpack://./src/style/blocks/navigation.scss","webpack://./src/style/blocks/header.scss","webpack://./src/style/blocks/benefits.scss","webpack://./src/style/blocks/benefit.scss","webpack://./src/style/blocks/clients.scss","webpack://./src/style/blocks/footer.scss","webpack://./src/style/blocks/hamburger-button.scss","webpack://./src/style/blocks/modal.scss","webpack://./src/style/blocks/form.scss","webpack://./src/style/_style.scss"],"names":[],"mappings":"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","sourcesContent":[".button {\r\n  padding: 15px;\r\n  background-color: $blue-color;\r\n  color: #ffffff;\r\n  border: none;\r\n  border-radius: 10px;\r\n  width: 220px;\r\n  font-size: 16px;\r\n  line-height: 26px;\r\n  cursor: pointer;\r\n}","$main-color: #1f3f68;\r\n$blue-color: #5a98d0;\r\n$dark-blue-color: #316099;\r\n$hamburger-color: #356EAD;",".button {\n  padding: 15px;\n  background-color: #5a98d0;\n  color: #ffffff;\n  border: none;\n  border-radius: 10px;\n  width: 220px;\n  font-size: 16px;\n  line-height: 26px;\n  cursor: pointer;\n}\n\n.navigation {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  max-width: 1240px;\n  margin: 0 auto;\n  padding: 40px 20px;\n}\n.navigation__logo {\n  display: block;\n}\n\n.header {\n  padding: 0 0 190px;\n  background-image: linear-gradient(rgba(152, 195, 232, 0), #98c3e8);\n  position: relative;\n  overflow: hidden;\n}\n.header__info {\n  max-width: 520px;\n  padding-top: 60px;\n  position: relative;\n  z-index: 2;\n}\n.header__info::after {\n  content: \"\";\n  background-image: url(\"./assets/illustration.png\");\n  background-repeat: no-repeat;\n  width: 688px;\n  height: 613px;\n  position: absolute;\n  top: -39px;\n  left: 441px;\n}\n.header__title {\n  font-size: 64px;\n  line-height: 74px;\n  font-weight: 500;\n}\n.header__text {\n  margin-top: 32px;\n  font-size: 16px;\n  line-height: 26px;\n  opacity: 0.6;\n  max-width: 330px;\n}\n.header__button {\n  margin-top: 76px;\n}\n\n@media (max-width: 768px) {\n  .header__info::after {\n    left: 350px;\n  }\n}\n@media (min-width: 320px) and (max-width: 576px) {\n  .header {\n    padding-bottom: 100px;\n  }\n  .header__title {\n    font-size: 26px;\n    line-height: 36px;\n  }\n  .header__text {\n    margin-top: 20px;\n  }\n  .header__button {\n    margin-top: 50px;\n    width: 100%;\n    max-width: 280px;\n  }\n  .header__info {\n    padding-top: 0;\n  }\n  .header__info::after {\n    top: -166px;\n    left: 293px;\n  }\n}\n.benefits {\n  padding: 190px 0 212px;\n  position: relative;\n}\n.benefits__title {\n  color: #316099;\n  font-size: 36px;\n  line-height: 46px;\n  font-weight: 500;\n  position: absolute;\n  max-width: 330px;\n}\n.benefits__list {\n  display: grid;\n  grid-template-columns: repeat(2, 380px);\n  grid-auto-rows: 215px 210px;\n  gap: 100px;\n  justify-content: end;\n}\n.benefits__list-item {\n  grid-row: span 2;\n}\n.benefits__list-item:nth-child(odd) {\n  grid-column-start: 2;\n}\n\n@media (max-width: 992px) {\n  .benefits {\n    padding: 100px 0;\n  }\n  .benefits__title {\n    position: static;\n  }\n  .benefits__list {\n    margin-top: 65px;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    justify-content: center;\n    justify-items: center;\n    gap: 30px;\n    grid-auto-rows: minmax(525px, auto);\n  }\n  .benefits__list-item {\n    grid-row: span 1;\n  }\n  .benefits__list-item:nth-child(odd) {\n    grid-column-start: 1;\n  }\n}\n.benefit {\n  max-width: 380px;\n  min-height: 525px;\n  padding: 235px 48px 48px;\n  box-shadow: 0 0 20px 5px rgba(16, 112, 177, 0.2);\n  border-radius: 10px;\n  position: relative;\n}\n.benefit__img {\n  position: absolute;\n}\n.benefit__title {\n  font-size: 20px;\n  line-height: 30px;\n}\n.benefit__text {\n  margin-top: 19px;\n  font-size: 16px;\n  line-height: 26px;\n  opacity: 0.6;\n}\n.benefit__link {\n  display: flex;\n  align-items: center;\n  margin-top: 57px;\n  color: #5a98d0;\n  font-size: 14px;\n  line-height: 30px;\n  text-decoration: none;\n}\n.benefit__link::after {\n  content: \"\";\n  display: block;\n  width: 16px;\n  height: 16px;\n  background-image: url(\"./assets/arrow.svg\");\n  background-repeat: no-repeat;\n  background-position: center;\n  margin-left: 28px;\n}\n.benefit--orange .benefit__img {\n  top: -20px;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.benefit--blue .benefit__img {\n  top: 48px;\n  left: 74px;\n}\n.benefit--purple .benefit__img {\n  top: 48px;\n  left: 100px;\n}\n\n.clients {\n  background-color: #5a98d0;\n  color: #ffffff;\n  padding: 96px 0 136px;\n  border-top-left-radius: 200px;\n}\n.clients__header {\n  display: grid;\n  grid-template-columns: 220px 440px;\n  gap: 97px;\n}\n.clients__title {\n  font-size: 36px;\n  line-height: 46px;\n}\n.clients__text {\n  opacity: 0.6;\n  line-height: 26px;\n}\n.clients__list {\n  margin-top: 110px;\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-auto-rows: 128px;\n  overflow: hidden;\n  gap: 1px;\n  justify-content: center;\n}\n.clients__list-item {\n  outline: 0.5px solid #ffffff;\n}\n.clients__list-item-text, .clients__list-link {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 20px;\n  line-height: 46px;\n}\n.clients__list-item-text {\n  text-transform: uppercase;\n}\n.clients__list-link {\n  text-decoration: none;\n  color: inherit;\n}\n\n@media (max-width: 992px) {\n  .clients__header {\n    padding: 0 40px;\n    grid-template-columns: 220px 1fr;\n    gap: 20px;\n  }\n}\n@media (max-width: 768px) {\n  .clients {\n    padding-bottom: 100px;\n  }\n  .clients__list {\n    grid-template-columns: repeat(3, minmax(100px, 1fr));\n  }\n}\n@media (max-width: 576px) {\n  .clients {\n    border-top-left-radius: 100px;\n  }\n  .clients__header {\n    display: block;\n    padding: 0;\n  }\n  .clients__text {\n    margin-top: 20px;\n  }\n  .clients__list {\n    margin-top: 50px;\n    grid-template-columns: repeat(2, minmax(100px, 1fr));\n  }\n  .clients__list-item-text {\n    font-size: 16px;\n  }\n}\n.footer {\n  background-color: #5a98d0;\n  color: #ffffff;\n  position: relative;\n}\n.footer__container {\n  padding: 0;\n  margin: 0 0 0 auto;\n  max-width: 901px;\n}\n.footer__wrapper {\n  border-top-right-radius: 200px;\n  background-color: #316099;\n  margin-right: 96px;\n  padding-bottom: 70px;\n}\n.footer__inner-wrapper {\n  max-width: 1093px;\n}\n.footer__header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 82px 20px 99px;\n  position: relative;\n}\n.footer__header::after {\n  content: \"\";\n  position: absolute;\n  background-color: #ffffff;\n  opacity: 0.4;\n  height: 1px;\n  width: 1073px;\n  right: 20px;\n  bottom: 0;\n}\n.footer__header-info {\n  max-width: 380px;\n}\n.footer__header-title {\n  font-size: 36px;\n  line-height: 46px;\n  max-width: 317px;\n}\n.footer__header-text {\n  margin-top: 32px;\n  font-size: 16px;\n  line-height: 26px;\n  opacity: 0.6;\n}\n.footer__bottom {\n  padding: 93px 20px 72px;\n  display: flex;\n  flex-wrap: wrap;\n}\n.footer__contacts {\n  max-width: 265px;\n  margin-right: 134px;\n}\n.footer__contacts-title {\n  font-size: 28px;\n  line-height: 46px;\n  display: flex;\n  align-items: center;\n}\n.footer__contacts-title::before {\n  content: \"\";\n  display: block;\n  background-image: url(\"./assets/logo-blue.svg\");\n  width: 48px;\n  height: 48px;\n  margin-right: 15px;\n}\n.footer__contacts-list {\n  margin-top: 33px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.footer__contact {\n  padding-left: 37px;\n  position: relative;\n  font-size: 16px;\n  line-height: 26px;\n}\n.footer__contact-number {\n  position: absolute;\n  left: 0;\n  top: 0;\n  font-weight: 600;\n}\n.footer__nav {\n  display: grid;\n  grid-template-columns: repeat(2, 170px);\n  gap: 71px;\n}\n.footer__nav-title {\n  font-size: 28px;\n  line-height: 30px;\n  font-weight: 500;\n}\n.footer__nav-list {\n  margin-top: 32px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.footer__nav-link {\n  text-decoration: none;\n  color: inherit;\n  font-size: 16px;\n  line-height: 26px;\n}\n.footer__rights {\n  opacity: 0.4;\n  padding: 0 23px;\n}\n\n@media (max-width: 992px) {\n  .footer__wrapper {\n    border-top-right-radius: 100px;\n    margin-right: 48px;\n  }\n  .footer__header {\n    justify-content: space-around;\n    flex-wrap: wrap;\n  }\n  .footer__header-info {\n    text-align: center;\n  }\n  .footer__header-button {\n    margin-top: 30px;\n  }\n  .footer__nav {\n    gap: 20px;\n  }\n  .footer__contacts {\n    margin-right: auto;\n  }\n}\n@media (max-width: 768px) {\n  .footer__contacts {\n    margin: 0;\n  }\n  .footer__bottom {\n    padding-top: 20px;\n    justify-content: center;\n  }\n  .footer__nav {\n    margin-top: 40px;\n  }\n  .footer__header {\n    padding-bottom: 30px;\n  }\n}\n@media (max-width: 576px) {\n  .footer__bottom {\n    display: block;\n  }\n  .footer__contacts {\n    margin: 0 auto;\n  }\n  .footer__nav {\n    grid-template-columns: repeat(auto-fit, 170px);\n    justify-content: center;\n    gap: 40px;\n  }\n  .footer__nav-list {\n    margin-top: 20px;\n    gap: 5px;\n  }\n}\n.hamburger-button {\n  width: 24px;\n  height: 17px;\n  z-index: 2;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  border: none;\n  cursor: pointer;\n}\n.hamburger-button__line {\n  display: block;\n  height: 3px;\n  width: 100%;\n  border-radius: 10px;\n  background: #356EAD;\n}\n\n.modal {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.3);\n  overflow-y: auto;\n  z-index: 5;\n}\n.modal__inner {\n  margin: 50px auto;\n  color: #000000;\n  padding: 56px;\n  background-color: #ffffff;\n  max-width: 540px;\n  width: 100%;\n  border-radius: 10px;\n}\n.modal__title {\n  font-size: 20px;\n  line-height: 30px;\n  text-transform: uppercase;\n}\n.modal__text {\n  font-size: 14px;\n  line-height: 21px;\n  margin: 26px 0 0;\n  text-align: center;\n  text-transform: uppercase;\n}\n.modal__button {\n  display: block;\n  width: 180px;\n  margin: 27px auto 0;\n}\n.modal--close {\n  display: none;\n}\n\n@media (max-width: 576px) {\n  .modal {\n    gap: 20px;\n  }\n  .modal__inner {\n    padding: 25px;\n  }\n}\n.form {\n  margin-top: 48px;\n  display: flex;\n  flex-direction: column;\n  gap: 32px;\n}\n.form__field-wrapper {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.form__label {\n  opacity: 0.8;\n  font-size: 16px;\n  line-height: 30px;\n}\n.form__input, .form__message {\n  padding: 20px 42px;\n  border: 1px solid rgba(53, 110, 173, 0.4);\n  border-radius: 10px;\n  font-size: 16px;\n  line-height: 30px;\n  color: #1f3f68;\n}\n.form__input::placeholder, .form__message::placeholder {\n  color: #1f3f68;\n  opacity: 0.4;\n}\n.form__message {\n  resize: none;\n  height: 144px;\n}\n\n@media (max-width: 576px) {\n  .form {\n    gap: 20px;\n    margin-top: 20px;\n  }\n  .form__input, .form__message {\n    padding: 10px 20px;\n  }\n  .form__field-wrapper {\n    gap: 4px;\n  }\n}\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nul,\nol {\n  list-style: none;\n}\n\nbody {\n  color: #1f3f68;\n  overflow-x: hidden;\n}\n\n.visually-hidden {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  border: 0;\n  padding: 0;\n  white-space: nowrap;\n  clip-path: inset(100%);\n  clip: rect(0 0 0 0);\n  overflow: hidden;\n}\n\n.container {\n  width: 100%;\n  max-width: 980px;\n  padding: 0 20px;\n  margin: 0 auto;\n}",".navigation {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  max-width: 1240px;\r\n  margin: 0 auto;\r\n  padding: 40px 20px;\r\n\r\n  &__logo {\r\n    display: block;\r\n  }\r\n}",".header {\r\n  padding: 0 0 190px;\r\n  background-image: linear-gradient(rgba(152, 195, 232, 0), #98c3e8);\r\n  position: relative;\r\n  overflow: hidden;\r\n\r\n  &__info {\r\n    max-width: 520px;\r\n    padding-top: 60px;\r\n    position: relative;\r\n    z-index: 2;\r\n\r\n    &::after {\r\n      content: '';\r\n      background-image: url('./assets/illustration.png');\r\n      background-repeat: no-repeat;\r\n      width: 688px;\r\n      height: 613px;\r\n      position: absolute;\r\n      top: -39px;\r\n      left: 441px;\r\n    }\r\n  }\r\n\r\n  &__title {\r\n    font-size: 64px;\r\n    line-height: 74px;\r\n    font-weight: 500;\r\n  }\r\n\r\n  &__text {\r\n    margin-top: 32px;\r\n    font-size: 16px;\r\n    line-height: 26px;\r\n    opacity: 0.6;\r\n    max-width: 330px;\r\n  }\r\n\r\n  &__button {\r\n    margin-top: 76px;\r\n  }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .header {\r\n    &__info::after {\r\n      left: 350px;\r\n    }\r\n  }\r\n}\r\n\r\n@media (min-width: 320px) and (max-width: 576px) {\r\n  .header {\r\n    padding-bottom: 100px;\r\n\r\n    &__title {\r\n      font-size: 26px;\r\n      line-height: 36px;\r\n    }\r\n\r\n    &__text {\r\n      margin-top: 20px;\r\n    }\r\n\r\n    &__button {\r\n      margin-top: 50px;\r\n      width: 100%;\r\n      max-width: 280px;\r\n    }\r\n\r\n    &__info {\r\n      padding-top: 0;\r\n\r\n      &::after {\r\n        top: -166px;\r\n        left: 293px;\r\n      }\r\n    }\r\n  }\r\n}",".benefits {\r\n  padding: 190px 0 212px;\r\n  position: relative;\r\n\r\n  &__title {\r\n    color: $dark-blue-color;\r\n    font-size: 36px;\r\n    line-height: 46px;\r\n    font-weight: 500;\r\n    position: absolute;\r\n    max-width: 330px;\r\n  }\r\n\r\n  &__list {\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 380px);\r\n    grid-auto-rows: 215px 210px;\r\n    gap: 100px;\r\n    justify-content: end;\r\n  }\r\n\r\n  &__list-item {\r\n    grid-row: span 2;\r\n  }\r\n\r\n  &__list-item:nth-child(odd) {\r\n    grid-column-start: 2;\r\n  }\r\n}\r\n\r\n\r\n@media (max-width: 992px) {\r\n  .benefits {\r\n    padding: 100px 0;\r\n\r\n    &__title {\r\n      position: static;\r\n    }\r\n\r\n    &__list {\r\n      margin-top: 65px;\r\n      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\r\n      justify-content: center;\r\n      justify-items: center;\r\n      gap: 30px;\r\n      grid-auto-rows: minmax(525px, auto);\r\n    }\r\n\r\n    &__list-item {\r\n      grid-row: span 1;\r\n    }\r\n\r\n    &__list-item:nth-child(odd) {\r\n      grid-column-start: 1;\r\n    }\r\n  }\r\n}",".benefit {\r\n  max-width: 380px;\r\n  min-height: 525px;\r\n  padding: 235px 48px 48px;\r\n  box-shadow: 0 0 20px 5px rgba(16, 112, 177, 0.2);\r\n  border-radius: 10px;\r\n  position: relative;\r\n\r\n  &__img {\r\n    position: absolute;\r\n  }\r\n\r\n  &__title {\r\n    font-size: 20px;\r\n    line-height: 30px;\r\n  }\r\n\r\n  &__text {\r\n    margin-top: 19px;\r\n    font-size: 16px;\r\n    line-height: 26px;\r\n    opacity: 0.6;\r\n  }\r\n\r\n  &__link {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-top: 57px;\r\n    color: $blue-color;\r\n    font-size: 14px;\r\n    line-height: 30px;\r\n    text-decoration: none;\r\n\r\n    &::after {\r\n      content: '';\r\n      display: block;\r\n      width: 16px;\r\n      height: 16px;\r\n      background-image: url('./assets/arrow.svg');\r\n      background-repeat: no-repeat;\r\n      background-position: center;\r\n      margin-left: 28px;\r\n    }\r\n  }\r\n\r\n  &--orange &__img {\r\n    top: -20px;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n  }\r\n\r\n  &--blue &__img {\r\n    top: 48px;\r\n    left: 74px;\r\n  }\r\n\r\n  &--purple &__img {\r\n    top: 48px;\r\n    left: 100px;\r\n  }\r\n}",".clients {\r\n  background-color: $blue-color;\r\n  color: #ffffff;\r\n  padding: 96px 0 136px;\r\n  border-top-left-radius: 200px;\r\n\r\n  &__header {\r\n    display: grid;\r\n    grid-template-columns: 220px 440px;\r\n    gap: 97px;\r\n  }\r\n\r\n  &__title {\r\n    font-size: 36px;\r\n    line-height: 46px;\r\n  }\r\n\r\n  &__text {\r\n    opacity: 0.6;\r\n    line-height: 26px;\r\n  }\r\n\r\n  &__list {\r\n    margin-top: 110px;\r\n    display: grid;\r\n    grid-template-columns: repeat(4, 1fr);\r\n    grid-auto-rows: 128px;\r\n    overflow: hidden;\r\n    gap: 1px;\r\n    justify-content: center;\r\n  }\r\n\r\n  &__list-item {\r\n    outline: .5px solid #ffffff;\r\n  }\r\n\r\n  &__list-item-text,\r\n  &__list-link {\r\n    height: 100%;\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 20px;\r\n    line-height: 46px;\r\n  }\r\n\r\n  &__list-item-text {\r\n    text-transform: uppercase;\r\n  }\r\n\r\n  &__list-link {\r\n    text-decoration: none;\r\n    color: inherit;\r\n  }\r\n}\r\n\r\n@media (max-width: 992px) {\r\n  .clients {\r\n    &__header {\r\n      padding: 0 40px;\r\n      grid-template-columns: 220px 1fr;\r\n      gap: 20px;\r\n    }\r\n  }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .clients {\r\n    padding-bottom: 100px;\r\n\r\n    &__list {\r\n      grid-template-columns: repeat(3, minmax(100px, 1fr));\r\n    }\r\n  }\r\n}\r\n\r\n@media (max-width: 576px) {\r\n  .clients {\r\n    border-top-left-radius: 100px;\r\n\r\n    &__header {\r\n      display: block;\r\n      padding: 0;\r\n    }\r\n\r\n    &__text {\r\n      margin-top: 20px;\r\n    }\r\n\r\n    &__list {\r\n      margin-top: 50px;\r\n      grid-template-columns: repeat(2, minmax(100px, 1fr));\r\n    }\r\n\r\n    &__list-item-text {\r\n      font-size: 16px;\r\n    }\r\n  }\r\n}",".footer {\r\n  background-color: $blue-color;\r\n  color: #ffffff;\r\n  position: relative;\r\n\r\n  &__container {\r\n    padding: 0;\r\n    margin: 0 0 0 auto;\r\n    max-width: 901px;\r\n  }\r\n\r\n  &__wrapper {\r\n    border-top-right-radius: 200px;\r\n    background-color: $dark-blue-color;\r\n    margin-right: 96px;\r\n    padding-bottom: 70px;\r\n  }\r\n\r\n  &__inner-wrapper {\r\n    max-width: 1093px;\r\n  }\r\n\r\n  &__header {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 82px 20px 99px;\r\n    position: relative;\r\n\r\n    &::after {\r\n      content: '';\r\n      position: absolute;\r\n      background-color: #ffffff;\r\n      opacity: 0.4;\r\n      height: 1px;\r\n      width: 1073px;\r\n      right: 20px;\r\n      bottom: 0;\r\n    }\r\n  }\r\n\r\n  &__header-info {\r\n    max-width: 380px;\r\n  }\r\n\r\n  &__header-title {\r\n    font-size: 36px;\r\n    line-height: 46px;\r\n    max-width: 317px;\r\n  }\r\n\r\n  &__header-text {\r\n    margin-top: 32px;\r\n    font-size: 16px;\r\n    line-height: 26px;\r\n    opacity: 0.6;\r\n  }\r\n\r\n  &__bottom {\r\n    padding: 93px 20px 72px;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n  }\r\n\r\n  &__contacts {\r\n    max-width: 265px;\r\n    margin-right: 134px;\r\n  }\r\n\r\n  &__contacts-title {\r\n    font-size: 28px;\r\n    line-height: 46px;\r\n    display: flex;\r\n    align-items: center;\r\n\r\n    &::before {\r\n      content: '';\r\n      display: block;\r\n      background-image: url('./assets/logo-blue.svg');\r\n      width: 48px;\r\n      height: 48px;\r\n      margin-right: 15px;\r\n    }\r\n  }\r\n\r\n  &__contacts-list {\r\n    margin-top: 33px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n  }\r\n\r\n  &__contact {\r\n    padding-left: 37px;\r\n    position: relative;\r\n    font-size: 16px;\r\n    line-height: 26px;\r\n  }\r\n\r\n  &__contact-number {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    font-weight: 600;\r\n  }\r\n\r\n  &__nav {\r\n    display: grid;\r\n    // grid-template-columns: repeat(auto-fit, 170px);\r\n    grid-template-columns: repeat(2, 170px);\r\n    gap: 71px;\r\n  }\r\n\r\n  &__nav-title {\r\n    font-size: 28px;\r\n    line-height: 30px;\r\n    font-weight: 500;\r\n  }\r\n\r\n  &__nav-list {\r\n    margin-top: 32px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 16px;\r\n  }\r\n\r\n  &__nav-link {\r\n    text-decoration: none;\r\n    color: inherit;\r\n    font-size: 16px;\r\n    line-height: 26px;\r\n  }\r\n\r\n  &__rights {\r\n    opacity: 0.4;\r\n    padding: 0 23px;\r\n  }\r\n}\r\n\r\n@media (max-width: 992px) {\r\n  .footer {\r\n    &__wrapper {\r\n      border-top-right-radius: 100px;\r\n      margin-right: 48px;\r\n    }\r\n\r\n    &__header {\r\n      justify-content: space-around;\r\n      flex-wrap: wrap;\r\n    }\r\n\r\n    &__header-info {\r\n      text-align: center;\r\n    }\r\n\r\n    &__header-button {\r\n      margin-top: 30px;\r\n    }\r\n\r\n    &__nav {\r\n      gap: 20px;\r\n    }\r\n\r\n    &__contacts {\r\n      margin-right: auto;\r\n    }\r\n  }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .footer {\r\n    &__contacts {\r\n      margin: 0;\r\n    }\r\n\r\n    &__bottom {\r\n      padding-top: 20px;\r\n      justify-content: center;\r\n    }\r\n\r\n    &__nav {\r\n      margin-top: 40px;\r\n      // grid-template-columns: repeat(auto-fit, 170px);\r\n    }\r\n\r\n    &__header {\r\n      padding-bottom: 30px;\r\n    }\r\n  }\r\n}\r\n\r\n@media (max-width: 576px) {\r\n  .footer {\r\n\r\n    &__bottom {\r\n      display: block;\r\n    }\r\n\r\n    &__contacts {\r\n      margin: 0 auto;\r\n    }\r\n\r\n    &__nav {\r\n      grid-template-columns: repeat(auto-fit, 170px);\r\n      justify-content: center;\r\n      gap: 40px;\r\n    }\r\n\r\n    &__nav-list {\r\n      margin-top: 20px;\r\n      gap: 5px;\r\n    }\r\n  }\r\n}",".hamburger-button {\r\n  width: 24px;\r\n  height: 17px;\r\n  z-index: 2;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  border: none;\r\n  cursor: pointer;\r\n\r\n  &__line {\r\n    display: block;\r\n    height: 3px;\r\n    width: 100%;\r\n    border-radius: 10px;\r\n    background: $hamburger-color;\r\n  }\r\n}",".modal {\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  background-color: rgba(0, 0, 0, 0.3);\r\n  overflow-y: auto;\r\n  z-index: 5;\r\n\r\n  &__inner {\r\n    margin: 50px auto;\r\n    color: #000000;\r\n    padding: 56px;\r\n    background-color: #ffffff;\r\n    max-width: 540px;\r\n    width: 100%;\r\n    border-radius: 10px;\r\n  }\r\n\r\n  &__title {\r\n    font-size: 20px;\r\n    line-height: 30px;\r\n    text-transform: uppercase;\r\n  }\r\n\r\n  &__text {\r\n    font-size: 14px;\r\n    line-height: 21px;\r\n    margin: 26px 0 0;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n  }\r\n\r\n  &__button {\r\n    display: block;\r\n    width: 180px;\r\n    margin: 27px auto 0;\r\n  }\r\n\r\n  &--close {\r\n    display: none;\r\n  }\r\n}\r\n\r\n@media (max-width: 576px) {\r\n  .modal {\r\n    gap: 20px;\r\n\r\n    &__inner {\r\n      padding: 25px;\r\n    }\r\n\r\n  }\r\n}",".form {\r\n  margin-top: 48px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 32px;\r\n\r\n  &__field-wrapper {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 8px;\r\n  }\r\n\r\n  &__label {\r\n    opacity: 0.8;\r\n    font-size: 16px;\r\n    line-height: 30px;\r\n  }\r\n\r\n  &__input,\r\n  &__message {\r\n    padding: 20px 42px;\r\n    border: 1px solid rgba(53, 110, 173, 0.4);\r\n    border-radius: 10px;\r\n    font-size: 16px;\r\n    line-height: 30px;\r\n    color: $main-color;\r\n\r\n    &::placeholder {\r\n      color: $main-color;\r\n      opacity: 0.4;\r\n    }\r\n  }\r\n\r\n  &__message {\r\n    resize: none;\r\n    height: 144px;\r\n  }\r\n}\r\n\r\n@media (max-width: 576px) {\r\n  .form {\r\n    gap: 20px;\r\n    margin-top: 20px;\r\n\r\n    &__input,\r\n    &__message {\r\n      padding: 10px 20px;\r\n    }\r\n\r\n    &__field-wrapper {\r\n      gap: 4px;\r\n    }\r\n  }\r\n}","@import './_var.scss';\r\n@import './blocks/button.scss';\r\n@import './blocks/navigation.scss';\r\n@import './blocks/header.scss';\r\n@import './blocks/benefits.scss';\r\n@import './blocks/benefit.scss';\r\n@import './blocks/clients.scss';\r\n@import './blocks/footer.scss';\r\n@import './blocks/hamburger-button.scss';\r\n@import './blocks/modal.scss';\r\n@import './blocks/form.scss';\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nul,\r\nol {\r\n  list-style: none;\r\n}\r\n\r\nbody {\r\n  color: $main-color;\r\n  overflow-x: hidden;\r\n}\r\n\r\n.visually-hidden {\r\n  position: absolute;\r\n  width: 1px;\r\n  height: 1px;\r\n  margin: -1px;\r\n  border: 0;\r\n  padding: 0;\r\n  white-space: nowrap;\r\n  clip-path: inset(100%);\r\n  clip: rect(0 0 0 0);\r\n  overflow: hidden;\r\n}\r\n\r\n.container {\r\n  width: 100%;\r\n  max-width: 980px;\r\n  padding: 0 20px;\r\n  margin: 0 auto;\r\n}"],"sourceRoot":""}]);
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
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/arrow.svg":
/*!******************************!*\
  !*** ./src/assets/arrow.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/arrow.svg";

/***/ }),

/***/ "./src/assets/illustration.png":
/*!*************************************!*\
  !*** ./src/assets/illustration.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/illustration.png";

/***/ }),

/***/ "./src/assets/logo-blue.svg":
/*!**********************************!*\
  !*** ./src/assets/logo-blue.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/logo-blue.svg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
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
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/validation */ "./src/js/validation.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var letsTalkButton = document.querySelector('.footer__header-button');
var modal = document.querySelector('.modal');
var modalSuccess = document.querySelector('.modal--success');
var messageForm = document.querySelector('.form');
function openFormModal() {
  modal.classList.remove('modal--close');
  modal.addEventListener('click', function (evt) {
    if (evt.target.closest('.modal__inner')) {
      return;
    }
    closeModal();
  });
}
function closeModal() {
  modal.classList.add('modal--close');
}
function closeSuccessModal() {
  modalSuccess.classList.add('modal--close');
}
function openSuccessModal() {
  modalSuccess.classList.remove('modal--close');
  modalSuccess.addEventListener('click', function (evt) {
    if (evt.target.closest('.modal__inner')) {
      return;
    }
    closeSuccessModal();
  });
}
var messageFormSubmitHandler = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(evt) {
    var _evt$target, name, email, message, isValid, result, data;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          evt.preventDefault();
          _evt$target = evt.target, name = _evt$target.name, email = _evt$target.email, message = _evt$target.message;
          isValid = (0,_js_validation__WEBPACK_IMPORTED_MODULE_0__.validateForm)(name.value.trim(), email.value.trim());
          if (isValid) {
            _context.next = 5;
            break;
          }
          return _context.abrupt("return");
        case 5:
          _context.next = 7;
          return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              name: name.value.trim(),
              email: email.value.trim(),
              message: message.value.trim()
            })
          });
        case 7:
          result = _context.sent;
          _context.next = 10;
          return result.json();
        case 10:
          data = _context.sent;
          console.log(data);
          closeModal();
          openSuccessModal();
        case 14:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function messageFormSubmitHandler(_x) {
    return _ref.apply(this, arguments);
  };
}();
letsTalkButton.addEventListener('click', openFormModal);
messageForm.addEventListener('submit', messageFormSubmitHandler);
})();

/******/ })()
;
//# sourceMappingURL=bundle.9363c38fb6325bc4bed9.js.map