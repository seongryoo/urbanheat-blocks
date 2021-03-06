const { __ } = wp.i18n;
const {
  TextareaControl,
  TextControl,
  CheckboxControl,
} = wp.components;
const {
  RichText,
} = wp.blockEditor;

export const ContentBlock = ({props}) => {
  return (
    <>
      <TextareaControl
        label={__("Hero block heading")}
        placeholder={__("Add heading text to be displayed on one side of the hero block")}
        value={props.attributes.headingContent}
        onChange={(value) => props.setAttributes({ headingContent: value })}
        className="uha-admin__input"
      />
      <CheckboxControl
        label="Display a caption below the heading"
        checked={props.attributes.isCaption}
        onChange={(value) => props.setAttributes({ isCaption: value })}
      />
      {props.attributes.isCaption ? (
        <div className="uha-admin__input uha-admin__option-group">
          <label htmlFor="caption-content" className="components-base-control__label">
            {__("Caption content to be displayed below heading")}
          </label>
          <RichText
            value={props.attributes.captionContent}
            onChange={(value) => props.setAttributes({ captionContent: value })}
            id="caption-content"
            className="uha-admin__rich-input uha-admin__input"
          />
        </div>
      ) : null}
      <CheckboxControl
        label="Display a call-to-action button"
        checked={props.attributes.isCallToAction}
        onChange={(value) => props.setAttributes({ isCallToAction: value })}
      />
      {props.attributes.isCallToAction ? (
        <div className="uha-admin__input uha-admin__option-group">
          <TextControl
            value={props.attributes.callToActionText}
            onChange={(value) => props.setAttributes({ callToActionText: value })}
            label="Text to display on call-to-action button"
            className="uha-admin__input"
          />
          <TextControl
            value={props.attributes.callToActionUrl}
            onChange={(value) => props.setAttributes({ callToActionUrl: value })}
            label="Call-to-action URL"
            help="Type something like '/about' or '/data' in order to link to an internal page"
            type="url"
            className="uha-admin__input"
          />
        </div>
      ) : null}
    </>
  )
};