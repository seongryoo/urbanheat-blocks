import { ContentBlock } from "./_content-block.js";
import { Upload, Swap } from "./_icons.js";

const { __ } = wp.i18n;
const {
  Button,
  Icon,
} = wp.components;
const {
  MediaUpload,
  MediaUploadCheck,
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
    const textSide = <ContentBlock props={props} />;
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