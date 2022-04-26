import { Link, Upload } from "./_icons";

const {
  MediaUpload,
  MediaUploadCheck,
  RichText,
} = wp.blockEditor;

const {
  Icon,
  Button,
  TextControl,
} = wp.components;

export const LinkCardBlockArgs = {
  title: 'Link Card',
  icon: Link,
  edit: (props) => {
    return (
      <div className="uha-admin uha-link-card">
        <TextControl 
          onChange={(value) => props.setAttributes({title: value})}
          label="Link title"
          value={props.attributes.title}
        />
        <TextControl 
          onChange={(value) => props.setAttributes({linkUrl: value})}
          label="Link URL"
          value={props.attributes.linkUrl}
        />
        <label
          htmlFor={props.clientId + "-desc"}
          className="components-base-control__label">
          Description
        </label>
        <RichText
          value={props.attributes.desc}
          onChange={(value) => props.setAttributes({ desc: value })}
          id={props.clientId + '-desc'}
          className="uha-admin__rich-input uha-admin__input"
        />
        <MediaUploadCheck>
          <MediaUpload
            onSelect={(media) => props.setAttributes({
              imgId: media.id,
              imgUrl: media.url,
              imgAlt: media.alt,
            })}
            value={props.attributes.imgId}
            render={({ open }) => (
              <Button onClick={open} className="uha-admin-button">
                <Icon icon={Upload} className="uha-admin-button__icon" />
                Attach card image
              </Button>
            )}
          />
        </MediaUploadCheck>
        <img
          src={props.attributes.imgUrl}
          alt={props.attributes.imgAlt}
        />
      </div>
    )
  },
  save: (props) => null,
};
