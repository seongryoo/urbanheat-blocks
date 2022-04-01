/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/_attr-helpers.js":
/*!******************************!*\
  !*** ./src/_attr-helpers.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAttr": function() { return /* binding */ getAttr; },
/* harmony export */   "storeAttr": function() { return /* binding */ storeAttr; }
/* harmony export */ });
const getAttr = (props, attr) => {
  if (props.attributes[attr] != '') {
    const theString = props.attributes[attr];

    try {
      const theJSON = JSON.parse(theString);
      return theJSON.data;
    } catch (e) {
      return [];
    }
  } else {
    const emptyArray = [];
    return emptyArray;
  }
}; // Helper method which stores JSON object as string attribute

const storeAttr = (props, attr, value) => {
  const theJSON = {
    data: value
  };
  const theString = JSON.stringify(theJSON);
  props.setAttributes({
    [attr]: theString
  });
};

/***/ }),

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
    className: "uha-admin__container__side-content__rich-input uha-admin__input"
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
/* harmony export */   "Hero": function() { return /* binding */ Hero; },
/* harmony export */   "Portrait": function() { return /* binding */ Portrait; },
/* harmony export */   "Swap": function() { return /* binding */ Swap; },
/* harmony export */   "SwitchPicture": function() { return /* binding */ SwitchPicture; },
/* harmony export */   "SwitchVideo": function() { return /* binding */ SwitchVideo; },
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
/* harmony import */ var _content_block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_content-block */ "./src/_content-block.js");
/* harmony import */ var _icons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_icons.js */ "./src/_icons.js");



const {
  __
} = wp.i18n;
const {
  TextareaControl,
  TextControl,
  CheckboxControl,
  SelectControl,
  Icon
} = wp.components;
const {
  RichText
} = wp.blockEditor;
const ExternalNewsFeedBlockArgs = {
  title: 'Recent news',
  icon: 'testimonial',
  category: 'media',
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
  save: props => null
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
  save: props => null
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
    }));
  },
  save: props => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks.Content, null);
  },
  title: "Hero Block",
  category: "design",
  icon: _icons_js__WEBPACK_IMPORTED_MODULE_2__.Hero
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
/* harmony import */ var _attr_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_attr-helpers */ "./src/_attr-helpers.js");



const {
  Icon,
  Button,
  TextControl
} = wp.components;
const ProfileShowcaseBlockArgs = {
  title: 'Profile showcase',
  icon: _icons__WEBPACK_IMPORTED_MODULE_1__.Portrait,
  attributes: {
    profilesArray: {
      type: 'string'
    }
  },
  edit: props => {
    const profilesArray = (0,_attr_helpers__WEBPACK_IMPORTED_MODULE_2__.getAttr)(props, "profilesArray");

    const handleNewBlankPerson = () => {
      const template = {
        imgId: "",
        imgUrl: "",
        imgAlt: "",
        name: "",
        desc: ""
      };
      let newPerson = template;
      profilesArray.push(newPerson);
      (0,_attr_helpers__WEBPACK_IMPORTED_MODULE_2__.storeAttr)(props, "profilesArray", profilesArray);
    };

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Hello"), profilesArray.map((profile, personId) => {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        key: personId
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
        onChange: value => {
          profile.name = value;
          (0,_attr_helpers__WEBPACK_IMPORTED_MODULE_2__.storeAttr)(props, "profilesArray", profilesArray);
        },
        label: "Name" + personId,
        value: profile.name
      }));
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
      onClick: handleNewBlankPerson,
      className: "uha-admin-button"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Icon, {
      icon: _icons__WEBPACK_IMPORTED_MODULE_1__.AddPerson,
      className: "uha-admin-button__icon"
    }), "Add bio"));
  },
  save: props => {}
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




const {
  registerBlockType
} = wp.blocks;
registerBlockType("urbanheat/hero-block", _hero__WEBPACK_IMPORTED_MODULE_1__.HeroBlockArgs);
registerBlockType("urbanheat/ext-news-data", _ext_news__WEBPACK_IMPORTED_MODULE_0__.ExternalNewsDataBlockArgs);
registerBlockType("urbanheat/ext-news-feed", _ext_news_feed__WEBPACK_IMPORTED_MODULE_2__.ExternalNewsFeedBlockArgs);
registerBlockType("urbanheat/profile-showcase", _profiles__WEBPACK_IMPORTED_MODULE_3__.ProfileShowcaseBlockArgs);
}();
/******/ })()
;
//# sourceMappingURL=index.js.map