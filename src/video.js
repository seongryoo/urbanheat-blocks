import { ContentBlock } from "./_content-block";
import { Swap } from "./_icons.js";

const { __ } = wp.i18n;
const {
  Button,
  Icon,
} = wp.components;

const {
  InnerBlocks,
} = wp.blockEditor;

export const VideoBlockArgs = {
  edit: (props) => {
    const videoSide = (
      <div className="admin-flex__half">
        <InnerBlocks
          template={[
            ["core/embed", { providerNameSlug: "youtube" }]
          ]}
          templateLock="all"
        />
      </div>
    );
    const textSide = (
      <div className="admin-flex__half">
        <ContentBlock
          props={props}
        />
      </div>
    );
    return (
      <>
        <div className="admin-flex">
          {props.attributes.isVideoLeft ? [videoSide, textSide] : [textSide, videoSide]}
        </div>
        <Button
          onClick={() => props.setAttributes({ isVideoLeft: !props.attributes.isVideoLeft })}
          className="admin-button admin-hero__swap-sides"
        >
          <Icon
            icon={Swap}
            className="admin-button__icon"
          />
          {__(props.attributes.isVideoLeft ? "Video on the left. Click to swap sides." : "Video on the right. Click to swap sides.")}
        </Button>
      </>
    );
  },
  save: (props) => {
    return <InnerBlocks.Content />;
  },
  title: "Video Block",
  category: "design",
  icon: "youtube",
};