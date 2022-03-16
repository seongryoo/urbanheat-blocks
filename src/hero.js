import { Upload, Swap } from "./__icons.js";

const { __ } = wp.i18n;
const {
  TextareaControl,
  Button,
  Icon,
  TextControl,
  CheckboxControl,
} = wp.components;
const {
  MediaUpload,
  MediaUploadCheck,
  RichText,
} = wp.blockEditor;

export const HeroBlockArgs = {
  edit: (props) => {
    const imageSide = (
      <div className="admin-hero__container__side-content admin-hero__container__side-content--image-side">
        <MediaUploadCheck>
          <MediaUpload
            onSelect={(media) => {
              props.setAttributes({
                sideImageId: media.id,
                sideImageUrl: media.url,
                sideImageAlt: media.alt,
              });
            }}
            value={props.attributes.sideImageId}
            render={({ open }) => (
              <Button onClick={open}>
                <Icon
                  icon={Upload}
                  className={"admin-button__icon"}
                />
                {__("Upload image for hero block")}
              </Button>
            )}
          />
        </MediaUploadCheck>
        {props.sideImageId != 0 ? (
          <img
            src={props.attributes.sideImageUrl}
            alt={props.attributes.sideImageAlt}
          />
        ) : null}
      </div>
    );
    const textSide = (
      <div className="admin-hero__container__side-content admin-hero__container__side-content--text-side">
        <TextareaControl
          label={__("Hero block heading")}
          placeholder={__("Add heading text to be displayed on one side of the hero block")}
          value={props.attributes.headingContent}
          onChange={(value) => props.setAttributes({ headingContent: value })}
          className="admin-hero__input"
        />
        <CheckboxControl
          label="Display a caption below the heading"
          checked={props.attributes.isCaption}
          onChange={(value) => props.setAttributes({ isCaption: value })}
        />
        {props.attributes.isCaption ? (
          <div className="admin-hero__input">
            <label htmlFor="caption-content">
              {__("Caption content to be displayed below heading")}
            </label>
            <RichText
              value={props.attributes.captionContent}
              onChange={(value) => props.setAttributes({ captionContent: value })}
              id="caption-content"
              className="admin-hero__container__side-content__rich-input admin-hero__input"
            />
          </div>
        ) : null}
        <CheckboxControl
          label="Display a call-to-action button"
          checked={props.attributes.isCallToAction}
          onChange={(value) => props.setAttributes({ isCallToAction: value })}
        />
        {props.attributes.isCallToAction ? (
          <div className="admin-hero__input">
            <TextControl
              value={props.attributes.callToActionText}
              onChange={(value) => props.setAttributes({ callToActionText: value })}
              label="Text to display on call-to-action button"
              className="admin-hero__input"
            />
            <TextControl
              value={props.attributes.callToActionUrl}
              onChange={(value) => props.setAttributes({ callToActionUrl: value })}
              label="Call-to-action URL"
              help="Type something like '/about' or '/data' in order to link to an internal page"
              type="url"
              className="admin-hero__input"
            />
          </div>
        ) : null}
      </div>
    );
    return (
      <div className="admin-hero">
        <div className="admin-hero__container">
          {props.attributes.isImageLeft ? [imageSide, textSide] : [textSide, imageSide]}
        </div>
        <Button
          onClick={() => props.setAttributes({ isImageLeft: !props.attributes.isImageLeft })}
          className="admin-button admin-hero__swap-sides"
        >
          <Icon
            icon={Swap}
            className="admin-button__icon"
          />
          {__(props.attributes.isImageLeft ? "Image on the left. Click to swap sides." : "Image on the right. Click to swap sides.")}
        </Button>
      </div>
    )
  },
  save: (props) => {
    return null;
  },
  title: "Hero Block",
  category: "design",
  icon: "superhero-alt",
};