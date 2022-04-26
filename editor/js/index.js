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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextareaControl, {
    label: __("Hero block heading"),
    placeholder: __("Add heading text to be displayed on one side of the hero block"),
    value: props.attributes.headingContent,
    onChange: value => props.setAttributes({
      headingContent: value
    }),
    className: "uha-admin__input"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(CheckboxControl, {
    label: "Display a caption below the heading",
    checked: props.attributes.isCaption,
    onChange: value => props.setAttributes({
      isCaption: value
    })
  }), props.attributes.isCaption ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "uha-admin__input uha-admin__option-group"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "caption-content",
    className: "components-base-control__label"
  }, __("Caption content to be displayed below heading")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
    value: props.attributes.captionContent,
    onChange: value => props.setAttributes({
      captionContent: value
    }),
    id: "caption-content",
    className: "uha-admin__rich-input uha-admin__input"
  })) : null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(CheckboxControl, {
    label: "Display a call-to-action button",
    checked: props.attributes.isCallToAction,
    onChange: value => props.setAttributes({
      isCallToAction: value
    })
  }), props.attributes.isCallToAction ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "uha-admin__input uha-admin__option-group"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
    value: props.attributes.callToActionText,
    onChange: value => props.setAttributes({
      callToActionText: value
    }),
    label: "Text to display on call-to-action button",
    className: "uha-admin__input"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
    value: props.attributes.callToActionUrl,
    onChange: value => props.setAttributes({
      callToActionUrl: value
    }),
    label: "Call-to-action URL",
    help: "Type something like '/about' or '/data' in order to link to an internal page",
    type: "url",
    className: "uha-admin__input"
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
/* harmony export */   "AddPerson": function() { return /* binding */ AddPerson; },
/* harmony export */   "GridView": function() { return /* binding */ GridView; },
/* harmony export */   "Hero": function() { return /* binding */ Hero; },
/* harmony export */   "Link": function() { return /* binding */ Link; },
/* harmony export */   "People": function() { return /* binding */ People; },
/* harmony export */   "Portrait": function() { return /* binding */ Portrait; },
/* harmony export */   "Stories": function() { return /* binding */ Stories; },
/* harmony export */   "Swap": function() { return /* binding */ Swap; },
/* harmony export */   "SwitchPicture": function() { return /* binding */ SwitchPicture; },
/* harmony export */   "SwitchVideo": function() { return /* binding */ SwitchVideo; },
/* harmony export */   "Trash": function() { return /* binding */ Trash; },
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
const Hero = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24px",
  viewBox: "0 0 24 24",
  width: "24px",
  fill: "#000000"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M22 13h-8v-2h8v2zm0-6h-8v2h8V7zm-8 10h8v-2h-8v2zm-2-8v6c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2zm-1.5 6l-2.25-3-1.75 2.26-1.25-1.51L3.5 15h7z"
}));
const SwitchVideo = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24px",
  viewBox: "0 0 24 24",
  width: "24px",
  fill: "#000000"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12zM12 5.5v9l6-4.5z"
}));
const SwitchPicture = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24px",
  viewBox: "0 0 24 24",
  width: "24px",
  fill: "#000000"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M20 4v12H8V4h12m0-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 9.67l1.69 2.26 2.48-3.1L19 15H9zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z"
}));
const Portrait = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24px",
  viewBox: "0 0 24 24",
  width: "24px",
  fill: "#000000"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M12 12.25c1.24 0 2.25-1.01 2.25-2.25S13.24 7.75 12 7.75 9.75 8.76 9.75 10s1.01 2.25 2.25 2.25zm4.5 4c0-1.5-3-2.25-4.5-2.25s-4.5.75-4.5 2.25V17h9v-.75zM19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"
}));
const AddPerson = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
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
  d: "M13,8c0-2.21-1.79-4-4-4S5,5.79,5,8s1.79,4,4,4S13,10.21,13,8z M15,10v2h3v3h2v-3h3v-2h-3V7h-2v3H15z M1,18v2h16v-2 c0-2.66-5.33-4-8-4S1,15.34,1,18z"
})));
const Trash = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24px",
  viewBox: "0 0 24 24",
  width: "24px",
  fill: "#000000"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
}));
const People = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24px",
  viewBox: "0 0 24 24",
  width: "24px",
  fill: "#000000"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M9 13.75c-2.34 0-7 1.17-7 3.5V19h14v-1.75c0-2.33-4.66-3.5-7-3.5zM4.34 17c.84-.58 2.87-1.25 4.66-1.25s3.82.67 4.66 1.25H4.34zM9 12c1.93 0 3.5-1.57 3.5-3.5S10.93 5 9 5 5.5 6.57 5.5 8.5 7.07 12 9 12zm0-5c.83 0 1.5.67 1.5 1.5S9.83 10 9 10s-1.5-.67-1.5-1.5S8.17 7 9 7zm7.04 6.81c1.16.84 1.96 1.96 1.96 3.44V19h4v-1.75c0-2.02-3.5-3.17-5.96-3.44zM15 12c1.93 0 3.5-1.57 3.5-3.5S16.93 5 15 5c-.54 0-1.04.13-1.5.35.63.89 1 1.98 1 3.15s-.37 2.26-1 3.15c.46.22.96.35 1.5.35z"
}));
const Stories = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "enable-background": "new 0 0 24 24",
  height: "24px",
  viewBox: "0 0 24 24",
  width: "24px",
  fill: "#000000"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  fill: "none",
  height: "24",
  width: "24"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M18,4c1.1,0,2,0.9,2,2v12c0,1.1-0.9,2-2,2V4z M3,20c0,1.1,0.9,2,2,2h9c1.1,0,2-0.9,2-2V4c0-1.1-0.9-2-2-2H5C3.9,2,3,2.9,3,4 V20z M22,18c0.83,0,1.5-0.67,1.5-1.5v-9C23.5,6.67,22.83,6,22,6V18z"
}));
const Link = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24px",
  viewBox: "0 0 24 24",
  width: "24px",
  fill: "#000000"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"
}));
const GridView = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24px",
  viewBox: "0 0 24 24",
  width: "24px",
  fill: "#000000"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  "fill-rule": "evenodd"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M3 3v8h8V3H3zm6 6H5V5h4v4zm-6 4v8h8v-8H3zm6 6H5v-4h4v4zm4-16v8h8V3h-8zm6 6h-4V5h4v4zm-6 4v8h8v-8h-8zm6 6h-4v-4h4v4z"
})));

/***/ }),

/***/ "./src/ext-news-feed.js":
/*!******************************!*\
  !*** ./src/ext-news-feed.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExternalNewsFeedBlockArgs": function() { return /* binding */ ExternalNewsFeedBlockArgs; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const {
  CheckboxControl,
  SelectControl
} = wp.components;
const ExternalNewsFeedBlockArgs = {
  title: 'Recent news',
  icon: 'testimonial',
  category: 'urbanheat',
  edit: props => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "uha-admin"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "uha-admin__block-label"
    }, "Recent news"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "uha-admin--padded"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
      options: [{
        label: '3',
        value: '3'
      }, {
        label: '6',
        value: '6'
      }, {
        label: '9',
        value: '9'
      }, {
        label: '12',
        value: '12'
      }, {
        label: 'Show all',
        value: 'ALL'
      }],
      label: "Number of articles to display",
      value: props.attributes.numArticles,
      onChange: value => props.setAttributes({
        numArticles: value
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(CheckboxControl, {
      label: "Show newest articles first",
      checked: props.attributes.isNewestFirst,
      onChange: value => props.setAttributes({
        isNewestFirst: value
      })
    })));
  },
  save: props => props
};

/***/ }),

/***/ "./src/ext-news.js":
/*!*************************!*\
  !*** ./src/ext-news.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExternalNewsDataBlockArgs": function() { return /* binding */ ExternalNewsDataBlockArgs; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_icons */ "./src/_icons.js");


const {
  MediaUpload,
  MediaUploadCheck
} = wp.blockEditor;
const {
  Icon,
  Button,
  TextControl
} = wp.components;
const ExternalNewsDataBlockArgs = {
  title: 'External news data',
  icon: 'id-alt',
  attributes: {
    img: {
      type: 'number',
      source: 'meta',
      meta: 'ext_news__img'
    },
    img_url: {
      type: 'string',
      source: 'meta',
      meta: 'ext_news__img_url'
    },
    img_alt: {
      type: 'string',
      source: 'meta',
      meta: 'ext_news__img_alt'
    },
    source: {
      type: 'string',
      source: 'meta',
      meta: 'ext_news__source'
    },
    link: {
      type: 'string',
      source: 'meta',
      meta: 'ext_news__link'
    },
    date: {
      type: 'string',
      source: 'meta',
      meta: 'ext_news__date'
    }
  },
  edit: props => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "uha-admin uha-admin--padded"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
      onChange: value => props.setAttributes({
        date: value
      }),
      label: "Date of publication",
      help: "Hint: You can use a format like Aug 2, 2021",
      value: props.attributes.date,
      placeholder: "e.g., Aug 2, 2021"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
      onChange: value => props.setAttributes({
        source: value
      }),
      label: "News source",
      value: props.attributes.source,
      placeholder: "e.g., The Daily Bugle"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
      onChange: value => props.setAttributes({
        link: value
      }),
      label: "Link to external article:",
      value: props.attributes.link
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaUpload, {
      onSelect: media => props.setAttributes({
        img: media.id,
        img_url: media.url,
        img_alt: media.alt
      }),
      value: props.attributes.img,
      render: _ref => {
        let {
          open
        } = _ref;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
          onClick: open,
          className: "uha-admin-button"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Icon, {
          icon: _icons__WEBPACK_IMPORTED_MODULE_1__.Upload,
          className: "uha-admin-button__icon"
        }), "Attach article thumbnail image");
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: props.attributes.img_url,
      alt: props.attributes.img_alt
    }));
  },
  save: props => props
};

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
/* harmony import */ var _content_block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_content-block */ "./src/_content-block.js");
/* harmony import */ var _icons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_icons.js */ "./src/_icons.js");



const {
  __
} = wp.i18n;
const {
  Button,
  Icon,
  CheckboxControl
} = wp.components;
const {
  InnerBlocks
} = wp.blockEditor;
const HeroBlockArgs = {
  edit: props => {
    const graphicSide = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "uha-admin__container__side-content uha-admin__container__side-content--graphic-side"
    }, props.attributes.isVideo ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks, {
      template: [["core/embed", {
        providerNameSlug: "youtube"
      }]],
      templateLock: "all"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
      onClick: () => props.setAttributes({
        isVideo: !props.attributes.isVideo
      }),
      className: "uha-admin-button uha-admin__change-graphic"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Icon, {
      icon: _icons_js__WEBPACK_IMPORTED_MODULE_2__.SwitchPicture,
      className: "uha-admin-button__icon"
    }), "Attach an image instead")) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks, {
      template: [["core/image"]],
      templateLock: "all"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
      onClick: () => props.setAttributes({
        isVideo: !props.attributes.isVideo
      }),
      className: "uha-admin-button uha-admin__change-graphic"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Icon, {
      icon: _icons_js__WEBPACK_IMPORTED_MODULE_2__.SwitchVideo,
      className: "uha-admin-button__icon"
    }), "Embed a video instead")));
    const textSide = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "uha-admin__container__side-content uha-admin__container__side-content--text-side"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_content_block__WEBPACK_IMPORTED_MODULE_1__.ContentBlock, {
      props: props
    }));
    let swapButtonText;

    if (props.attributes.isVideo) {
      swapButtonText = props.attributes.isGraphicLeft ? "Video on the left. Click to swap sides." : "Video on the right. Click to swap sides.";
    } else {
      swapButtonText = props.attributes.isGraphicLeft ? "Image on the left. Click to swap sides." : "Image on the right. Click to swap sides.";
    }

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "uha-admin"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "uha-admin__block-label"
    }, "Hero block"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "uha-admin__container"
    }, props.attributes.isGraphicLeft ? [graphicSide, textSide] : [textSide, graphicSide]), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
      onClick: () => props.setAttributes({
        isGraphicLeft: !props.attributes.isGraphicLeft
      }),
      className: "uha-admin-button uha-admin__swap-sides"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Icon, {
      icon: _icons_js__WEBPACK_IMPORTED_MODULE_2__.Swap,
      className: "uha-admin-button__icon"
    }), __(swapButtonText)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(CheckboxControl, {
      label: "Gradient background",
      checked: props.attributes.isGradientBackground,
      className: "uha-admin__item",
      onChange: value => props.setAttributes({
        isGradientBackground: value
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(CheckboxControl, {
      label: "Large hero banner",
      checked: props.attributes.isVanguard,
      className: "uha-admin__item",
      onChange: value => props.setAttributes({
        isVanguard: value
      })
    }));
  },
  save: props => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks.Content, {
      props: props
    });
  },
  title: "Hero Block",
  category: 'urbanheat',
  icon: _icons_js__WEBPACK_IMPORTED_MODULE_2__.Hero
};

/***/ }),

/***/ "./src/link-card.js":
/*!**************************!*\
  !*** ./src/link-card.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LinkCardBlockArgs": function() { return /* binding */ LinkCardBlockArgs; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_icons */ "./src/_icons.js");


const {
  MediaUpload,
  MediaUploadCheck,
  RichText
} = wp.blockEditor;
const {
  Icon,
  Button,
  TextControl
} = wp.components;
const LinkCardBlockArgs = {
  title: 'Link Card',
  icon: _icons__WEBPACK_IMPORTED_MODULE_1__.Link,
  edit: props => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "uha-admin uha-link-card"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
      onChange: value => props.setAttributes({
        title: value
      }),
      label: "Link title",
      value: props.attributes.title
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
      onChange: value => props.setAttributes({
        linkUrl: value
      }),
      label: "Link URL",
      value: props.attributes.linkUrl
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      htmlFor: props.clientId + "-desc",
      className: "components-base-control__label"
    }, "Description"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      value: props.attributes.desc,
      onChange: value => props.setAttributes({
        desc: value
      }),
      id: props.clientId + '-desc',
      className: "uha-admin__rich-input uha-admin__input"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaUpload, {
      onSelect: media => props.setAttributes({
        imgId: media.id,
        imgUrl: media.url,
        imgAlt: media.alt
      }),
      value: props.attributes.imgId,
      render: _ref => {
        let {
          open
        } = _ref;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
          onClick: open,
          className: "uha-admin-button"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Icon, {
          icon: _icons__WEBPACK_IMPORTED_MODULE_1__.Upload,
          className: "uha-admin-button__icon"
        }), "Attach card image");
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: props.attributes.imgUrl,
      alt: props.attributes.imgAlt
    }));
  },
  save: props => null
};

/***/ }),

/***/ "./src/link-cards.js":
/*!***************************!*\
  !*** ./src/link-cards.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LinkCardsBlockArgs": function() { return /* binding */ LinkCardsBlockArgs; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_icons */ "./src/_icons.js");


const {
  InnerBlocks
} = wp.blockEditor;
const LinkCardsBlockArgs = {
  title: 'Link cards',
  icon: _icons__WEBPACK_IMPORTED_MODULE_1__.GridView,
  category: 'urbanheat',
  attributes: {},
  edit: props => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "uha-admin uha-profile-showcase"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks, {
      template: [["uha-data/link-card"]],
      allowedBlocks: ["uha-data/link-card"],
      renderAppender: InnerBlocks.ButtonBlockAppender
    }));
  },
  save: props => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks.Content, null);
  }
};

/***/ }),

/***/ "./src/logo-gallery.js":
/*!*****************************!*\
  !*** ./src/logo-gallery.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogoGalleryBlockArgs": function() { return /* binding */ LogoGalleryBlockArgs; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_icons */ "./src/_icons.js");


const {
  InnerBlocks
} = wp.blockEditor;
const LogoGalleryBlockArgs = {
  title: 'Logo gallery',
  icon: _icons__WEBPACK_IMPORTED_MODULE_1__.Stories,
  attributes: {},
  category: 'urbanheat',
  edit: props => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "uha-admin uha-logo-gallery"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks, {
      template: [["core/image"]],
      allowedBlocks: ["core/image"],
      renderAppender: InnerBlocks.ButtonBlockAppender
    }));
  },
  save: props => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks.Content, null)
};

/***/ }),

/***/ "./src/profile.js":
/*!************************!*\
  !*** ./src/profile.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileBlockArgs": function() { return /* binding */ ProfileBlockArgs; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_icons */ "./src/_icons.js");


const {
  MediaUpload,
  MediaUploadCheck,
  RichText
} = wp.blockEditor;
const {
  Icon,
  Button,
  TextControl
} = wp.components;
const ProfileBlockArgs = {
  title: 'Profile',
  icon: _icons__WEBPACK_IMPORTED_MODULE_1__.Portrait,
  edit: props => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "uha-admin uha-profile"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "uha-profile__info"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
      onChange: value => props.setAttributes({
        name: value
      }),
      label: "Name",
      value: props.attributes.name
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      htmlFor: props.clientId + "-desc",
      className: "components-base-control__label"
    }, "Description"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      value: props.attributes.desc,
      onChange: value => props.setAttributes({
        desc: value
      }),
      id: props.clientId + '-desc',
      className: "uha-admin__rich-input uha-admin__input"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "uha-profile__pic"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaUpload, {
      onSelect: media => {
        props.setAttributes({
          imgUrl: media.url,
          imgAlt: media.alt,
          imgId: media.id
        });
      },
      value: props.attributes.imgId,
      render: _ref => {
        let {
          open
        } = _ref;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
          onClick: open,
          "aria-hidden": "true",
          className: "uha-admin-button \r uha-profile__pic__button",
          variant: "secondary"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "uha-profile__pic__prev"
        }, props.attributes.imgUrl && props.attributes.imgUrl != "" ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "uha-profile__pic__prev__image"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
          src: props.attributes.imgUrl,
          alt: props.attributes.imgAlt,
          className: "uha-profile__pic__prev__image__img"
        })) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "uha-profile__pic__prev__image uha-profile__pic__prev__image--empty",
          "aria-hidden": "true"
        }, "No picture"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
          onClick: open,
          className: "uha-admin-button",
          variant: "secondary"
        }, "Choose profile picture", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "visually-hidden"
        }, props.attributes.imgUrl && props.attributes.imgUrl != "" ? "Current picture: " + props.attributes.imgUrl : "No picture chosen")));
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
      onClick: () => {
        props.setAttributes({
          imgUrl: null,
          imgAlt: null,
          imgId: null
        });
      },
      className: "uha-admin-button"
    }, "Clear picture")));
  },
  save: props => null
};

/***/ }),

/***/ "./src/profiles.js":
/*!*************************!*\
  !*** ./src/profiles.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileShowcaseBlockArgs": function() { return /* binding */ ProfileShowcaseBlockArgs; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_icons */ "./src/_icons.js");


const {
  InnerBlocks
} = wp.blockEditor;
const ProfileShowcaseBlockArgs = {
  title: 'Profile showcase',
  icon: _icons__WEBPACK_IMPORTED_MODULE_1__.People,
  attributes: {},
  category: 'urbanheat',
  edit: props => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "uha-admin uha-profile-showcase"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks, {
      template: [["uha-data/profile"]],
      allowedBlocks: ["uha-data/profile"],
      renderAppender: InnerBlocks.ButtonBlockAppender
    }));
  },
  save: props => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks.Content, null);
  }
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
/* harmony import */ var _ext_news__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ext-news */ "./src/ext-news.js");
/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hero */ "./src/hero.js");
/* harmony import */ var _ext_news_feed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ext-news-feed */ "./src/ext-news-feed.js");
/* harmony import */ var _profiles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profiles */ "./src/profiles.js");
/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile */ "./src/profile.js");
/* harmony import */ var _logo_gallery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logo-gallery */ "./src/logo-gallery.js");
/* harmony import */ var _link_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./link-card */ "./src/link-card.js");
/* harmony import */ var _link_cards__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./link-cards */ "./src/link-cards.js");








const {
  registerBlockType
} = wp.blocks;
registerBlockType("urbanheat/hero-block", _hero__WEBPACK_IMPORTED_MODULE_1__.HeroBlockArgs);
registerBlockType("uha-data/ext-news-data", _ext_news__WEBPACK_IMPORTED_MODULE_0__.ExternalNewsDataBlockArgs);
registerBlockType("urbanheat/ext-news-feed", _ext_news_feed__WEBPACK_IMPORTED_MODULE_2__.ExternalNewsFeedBlockArgs);
registerBlockType("urbanheat/profile-showcase", _profiles__WEBPACK_IMPORTED_MODULE_3__.ProfileShowcaseBlockArgs);
registerBlockType("uha-data/profile", _profile__WEBPACK_IMPORTED_MODULE_4__.ProfileBlockArgs);
registerBlockType("urbanheat/logo-gallery", _logo_gallery__WEBPACK_IMPORTED_MODULE_5__.LogoGalleryBlockArgs);
registerBlockType("uha-data/link-card", _link_card__WEBPACK_IMPORTED_MODULE_6__.LinkCardBlockArgs);
registerBlockType("urbanheat/link-cards", _link_cards__WEBPACK_IMPORTED_MODULE_7__.LinkCardsBlockArgs);
}();
/******/ })()
;
//# sourceMappingURL=index.js.map