const el = wp.element.createElement;
const Swap = el("svg", { xmlns: "http://www.w3.org/2000/svg", "enable-background": "new 0 0 24 24", height: "24px", viewBox: "0 0 24 24", width: "24px", fill: "#000000" }, el("g", null, el("rect", { fill: "none", height: "24", width: "24", x: "0" })), el("g", null, el("g", null, el("polygon", { points: "18,12 22,8 18,4 18,7 3,7 3,9 18,9" }), el("polygon", { points: "6,12 2,16 6,20 6,17 21,17 21,15 6,15" }))));
const Upload = el("svg", { xmlns: "http://www.w3.org/2000/svg", "enable-background": "new 0 0 24 24", height: "24px", viewBox: "0 0 24 24", width: "24px", fill: "#000000" }, el("g", null, el("rect", { fill: "none", height: "24", width: "24" })), el("g", null, el("path", { d: "M5,20h14v-2H5V20z M5,10h4v6h6v-6h4l-7-7L5,10z" })));

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { TextareaControl, Button, Icon, TextControl, CheckboxControl } = wp.components;
const { createElement } = wp.element;
const { MediaUpload, MediaUploadCheck, RichText } = wp.blockEditor;

registerBlockType( 'urbanheat/hero-block', {
    edit: (props) => {
      const sideImageUploadButton = el(
          MediaUploadCheck,
          {},
          el(
              MediaUpload,
              {
                  onSelect: (media) => {
                    props.setAttributes({
                      sideImageId: media.id,
                      sideImageUrl: media.url,
                      sideImageAlt: media.alt,
                    })
                  },
                  value: props.attributes.sideImageId,
                  render: ({open}) => {
                    return el(
                        Button,
                        {onClick: open},
                        [
                          el(Icon, {icon: Upload, className: 'admin-button__icon'}),
                          __( 'Upload image for hero block' )
                        ]
                    )
                  }
              }
          )
      );
      const sideImagePreview = el(
          'img',
          {
            src: props.attributes.sideImageUrl,
            alt: props.attributes.sideImageAlt,
          }
      );
      const headingContentInput = el(
          TextareaControl,
          {
            label: __( 'Hero block heading' ),
            placeholder: __( 'Add heading text to be displayed on one side of the hero block' ),
            value: props.attributes.headingContent,
            onChange: (value) => {
              props.setAttributes({headingContent: value});
            },
            className: 'admin-hero__input'
          }
      );
      const captionContentInput = el(
          RichText,
          {
            value: props.attributes.captionContent,
            onChange: (value) => props.setAttributes({captionContent: value}),
            id: 'caption-content',
            className: 'admin-hero__container__side-content__rich-input admin-hero__input',
          }
      )
      const captionContentInputLabel = el('label', {for: 'caption-content'}, 'Caption content to be displayed below heading');
      const captionContent = el('div', {className: 'admin-hero__input'}, [captionContentInputLabel, captionContentInput]);
      const callToActionTextInput = el(
        TextControl,
        {
          value: props.attributes.callToActionText,
          onChange: (value) => props.setAttributes({callToActionText: value}),
          label: 'Text to display on call-to-action button',
          className: 'admin-hero__input',
        }
      );
      const callToActionUrlInput = el(
        TextControl,
        {
          value: props.attributes.callToActionUrl,
          onChange: (value) => props.setAttributes({callToActionUrl: value}),
          label: 'Call-to-action URL',
          help: 'Type something like \'\/about\' or \'\/data\' in order to link to an internal page',
          type: 'url',
          className: 'admin-hero__input',
        }
      );
      const callToAction = [callToActionTextInput, callToActionUrlInput];
      const imageSide = el(
          'div',
          {
            className: 'admin-hero__container__side-content admin-hero__container__side-content--image-side',
          },
          [sideImageUploadButton, sideImagePreview]
      );
      const optionCaption = el(
          CheckboxControl, 
          {
            label: 'Display a caption below the heading',
            checked: props.attributes.isCaption,
            onChange: (value) => props.setAttributes({isCaption: value}), 
          }
      );
      const optionCallToAction = el(
          CheckboxControl, 
          {
            label: 'Display a call-to-action button',
            checked: props.attributes.isCallToAction,
            onChange: (value) => props.setAttributes({isCallToAction: value}), 
          }
      );
      const textSide = el(
          'div',
          {
            className: 'admin-hero__container__side-content admin-hero__container__side-content--text-side',
          },
          [
            headingContentInput, 
            optionCaption,
            !props.attributes.isCaption ? null : captionContent, 
            optionCallToAction,
            !props.attributes.isCallToAction ? null : callToAction,
          ]
      );
      const flipSides = el(
          Button,
          {
            onClick: () => {
              props.setAttributes({isImageLeft: !props.attributes.isImageLeft});
            }, 
            className: 'admin-button admin-hero__swap-sides'
          },
          [
            el(Icon, {icon: Swap, className: 'admin-button__icon'}), 
            __( props.attributes.isImageLeft ? 'Image on the left. Click to swap sides.' : 'Image on the right. Click to swap sides.' )]
      );
      const flexContainer = el(
          'div',
          {
            className: 'admin-hero__container'
          },
          props.attributes.isImageLeft ? [imageSide, textSide] : [textSide, imageSide]
      );
      return el(
          'div',
          {
            className: 'admin-hero'
          },
          [flexContainer, flipSides]
      );
    },
    save: (props) => {
      return null;
    },
    title: 'Hero Block',
    category: 'design',
    icon: 'superhero-alt',
  }
);