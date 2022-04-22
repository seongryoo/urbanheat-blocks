import { Upload } from "./_icons";

const {
  MediaUpload,
  MediaUploadCheck,
} = wp.blockEditor;
const {
  Icon,
  Button,
  TextControl,
} = wp.components;

export const ExternalNewsDataBlockArgs = {
  title: 'External news data',
  icon: 'id-alt',
  attributes: {
    img: { type: 'number', source: 'meta', meta: 'ext_news__img' },
    img_url: { type: 'string', source: 'meta', meta: 'ext_news__img_url' },
    img_alt: { type: 'string', source: 'meta', meta: 'ext_news__img_alt' },
    source: { type: 'string', source: 'meta', meta: 'ext_news__source' },
    link: { type: 'string', source: 'meta', meta: 'ext_news__link' },
    date: { type: 'string', source: 'meta', meta: 'ext_news__date' },
  },
  edit: (props) => {
    return (
      <div className="uha-admin uha-admin--padded">
        <TextControl
          onChange={(value) => props.setAttributes({ date: value })}
          label="Date of publication"
          help="Hint: You can use a format like Aug 2, 2021"
          value={props.attributes.date}
          placeholder="e.g., Aug 2, 2021"
        />
        <TextControl
          onChange={(value) => props.setAttributes({ source: value })}
          label="News source"
          value={props.attributes.source}
          placeholder="e.g., The Daily Bugle"
        />
        <TextControl
          onChange={(value) => props.setAttributes({ link: value })}
          label="Link to external article:"
          value={props.attributes.link}
        />
        <MediaUploadCheck>
          <MediaUpload
            onSelect={(media) => props.setAttributes({
              img: media.id,
              img_url: media.url,
              img_alt: media.alt,
            })}
            value={props.attributes.img}
            render={({ open }) => (
              <Button onClick={open} className="uha-admin-button">
                <Icon icon={Upload} className="uha-admin-button__icon" />
                Attach article thumbnail image
              </Button>
            )}
          />
        </MediaUploadCheck>
        <img
          src={props.attributes.img_url}
          alt={props.attributes.img_alt}
        />
      </div>
    )
  },
  save: (props) => props,
}