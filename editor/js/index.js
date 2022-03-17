/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/_content-block.js":
/*!*******************************!*\
  !*** ./src/_content-block.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentBlock": function() { return /* binding */ ContentBlock; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const {
  __
} = wp.i18n;
const {
  TextareaControl,
  TextControl,
  CheckboxControl
} = wp.components;
const {
  RichText
} = wp.blockEditor;
const ContentBlock = _ref => {
  let {
    props
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "admin-hero__container__side-content admin-hero__container__side-content--text-side"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextareaControl, {
    label: __("Hero block heading"),
    placeholder: __("Add heading text to be displayed on one side of the hero block"),
    value: props.attributes.headingContent,
    onChange: value => props.setAttributes({
      headingContent: value
    }),
    className: "admin-hero__input"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(CheckboxControl, {
    label: "Display a caption below the heading",
    checked: props.attributes.isCaption,
    onChange: value => props.setAttributes({
      isCaption: value
    })
  }), props.attributes.isCaption ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "admin-hero__input"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "caption-content"
  }, __("Caption content to be displayed below heading")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
    value: props.attributes.captionContent,
    onChange: value => props.setAttributes({
      captionContent: value
    }),
    id: "caption-content",
    className: "admin-hero__container__side-content__rich-input admin-hero__input"
  })) : null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(CheckboxControl, {
    label: "Display a call-to-action button",
    checked: props.attributes.isCallToAction,
    onChange: value => props.setAttributes({
      isCallToAction: value
    })
  }), props.attributes.isCallToAction ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "admin-hero__input"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
    value: props.attributes.callToActionText,
    onChange: value => props.setAttributes({
      callToActionText: value
    }),
    label: "Text to display on call-to-action button",
    className: "admin-hero__input"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
    value: props.attributes.callToActionUrl,
    onChange: value => props.setAttributes({
      callToActionUrl: value
    }),
    label: "Call-to-action URL",
    help: "Type something like '/about' or '/data' in order to link to an internal page",
    type: "url",
    className: "admin-hero__input"
  })) : null);
};

/***/ }),

/***/ "./src/_icons.js":
/*!***********************!*\
  !*** ./src/_icons.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Swap": function() { return /* binding */ Swap; },
/* harmony export */   "Upload": function() { return /* binding */ Upload; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const Upload = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "enable-background": "new 0 0 24 24",
  height: "24px",
  viewBox: "0 0 24 24",
  width: "24px",
  fill: "#000000"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M5,20h14v-2H5V20z M5,10h4v6h6v-6h4l-7-7L5,10z"
})));
const Swap = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24px",
  viewBox: "0 0 24 24",
  width: "24px",
  fill: "#000000"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"
}));

/***/ }),

/***/ "./src/hero.js":
/*!*********************!*\
  !*** ./src/hero.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeroBlockArgs": function() { return /* binding */ HeroBlockArgs; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _content_block_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_content-block.js */ "./src/_content-block.js");
/* harmony import */ var _icons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_icons.js */ "./src/_icons.js");



const {
  __
} = wp.i18n;
const {
  Button,
  Icon
} = wp.components;
const {
  MediaUpload,
  MediaUploadCheck
} = wp.blockEditor;
const HeroBlockArgs = {
  edit: props => {
    const imageSide = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "admin-hero__container__side-content admin-hero__container__side-content--image-side"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaUpload, {
      onSelect: media => {
        props.setAttributes({
          sideImageId: media.id,
          sideImageUrl: media.url,
          sideImageAlt: media.alt
        });
      },
      value: props.attributes.sideImageId,
      render: _ref => {
        let {
          open
        } = _ref;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
          onClick: open
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Icon, {
          icon: _icons_js__WEBPACK_IMPORTED_MODULE_2__.Upload,
          className: "admin-button__icon"
        }), __("Upload image for hero block"));
      }
    })), props.sideImageId != 0 ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: props.attributes.sideImageUrl,
      alt: props.attributes.sideImageAlt
    }) : null);
    const textSide = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_content_block_js__WEBPACK_IMPORTED_MODULE_1__.ContentBlock, {
      props: props
    });
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "admin-hero"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "admin-hero__container"
    }, props.attributes.isImageLeft ? [imageSide, textSide] : [textSide, imageSide]), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
      onClick: () => props.setAttributes({
        isImageLeft: !props.attributes.isImageLeft
      }),
      className: "admin-button admin-hero__swap-sides"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Icon, {
      icon: _icons_js__WEBPACK_IMPORTED_MODULE_2__.Swap,
      className: "admin-button__icon"
    }), __(props.attributes.isImageLeft ? "Image on the left. Click to swap sides." : "Image on the right. Click to swap sides.")));
  },
  save: props => {
    return null;
  },
  title: "Hero Block",
  category: "design",
  icon: "superhero-alt"
};

/***/ }),

/***/ "./src/video.js":
/*!**********************!*\
  !*** ./src/video.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VideoBlockArgs": function() { return /* binding */ VideoBlockArgs; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _content_block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_content-block */ "./src/_content-block.js");
/* harmony import */ var _icons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_icons.js */ "./src/_icons.js");



const {
  __
} = wp.i18n;
const {
  Button,
  Icon
} = wp.components;
const {
  InnerBlocks
} = wp.blockEditor;
const VideoBlockArgs = {
  edit: props => {
    const videoSide = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "admin-flex__half"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks, {
      template: [["core/embed", {
        providerNameSlug: "youtube"
      }]],
      templateLock: "all"
    }));
    const textSide = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "admin-flex__half"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_content_block__WEBPACK_IMPORTED_MODULE_1__.ContentBlock, {
      props: props
    }));
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "admin-flex"
    }, props.attributes.isVideoLeft ? [videoSide, textSide] : [textSide, videoSide]), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
      onClick: () => props.setAttributes({
        isVideoLeft: !props.attributes.isVideoLeft
      }),
      className: "admin-button admin-hero__swap-sides"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Icon, {
      icon: _icons_js__WEBPACK_IMPORTED_MODULE_2__.Swap,
      className: "admin-button__icon"
    }), __(props.attributes.isVideoLeft ? "Video on the left. Click to swap sides." : "Video on the right. Click to swap sides.")));
  },
  save: props => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks.Content, null);
  },
  title: "Video Block",
  category: "design",
  icon: "youtube"
};

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hero */ "./src/hero.js");
/* harmony import */ var _video__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./video */ "./src/video.js");


const {
  registerBlockType
} = wp.blocks;
registerBlockType("urbanheat/hero-block", _hero__WEBPACK_IMPORTED_MODULE_0__.HeroBlockArgs);
registerBlockType("urbanheat/video-block", _video__WEBPACK_IMPORTED_MODULE_1__.VideoBlockArgs);
}();
/******/ })()
;
//# sourceMappingURL=index.js.map