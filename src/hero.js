import { ContentBlock } from "./_content-block";
import { Hero, Swap, SwitchPicture, SwitchVideo } from "./_icons.js";

const { __ } = wp.i18n;
const {
  Button,
  Icon,
  CheckboxControl,
} = wp.components;

const {
  InnerBlocks,
} = wp.blockEditor;

export const HeroBlockArgs = {
  edit: (props) => {
    const graphicSide = (
      <div className="uha-admin__container__side-content uha-admin__container__side-content--graphic-side">
        {props.attributes.isVideo ? (
          <>
            <InnerBlocks
              template={[
                ["core/embed", { providerNameSlug: "youtube" }]
              ]}
              templateLock="all"
            />
            <Button
              onClick={() => props.setAttributes({ isVideo: !props.attributes.isVideo })}
              className="uha-admin-button uha-admin__change-graphic"
            >
              <Icon
                icon={SwitchPicture}
                className="uha-admin-button__icon"
              />
              Attach an image instead
            </Button>
          </>
        ) : (
          <>
            <InnerBlocks
              template={[
                ["core/image"]
              ]}
              templateLock="all"
            />
            <Button
              onClick={() => props.setAttributes({ isVideo: !props.attributes.isVideo })}
              className="uha-admin-button uha-admin__change-graphic"
            >
              <Icon
                icon={SwitchVideo}
                className="uha-admin-button__icon"
              />
              Embed a video instead
            </Button>
          </>
        )}
      </div>
    );
    const textSide = (
      <div className="uha-admin__container__side-content uha-admin__container__side-content--text-side">
        <ContentBlock
          props={props}
        />
      </div>
    );
    let swapButtonText;
    if (props.attributes.isVideo) {
      swapButtonText = props.attributes.isGraphicLeft ? 
        "Video on the left. Click to swap sides." : 
        "Video on the right. Click to swap sides.";
    } else {
      swapButtonText = props.attributes.isGraphicLeft ? 
        "Image on the left. Click to swap sides." : 
        "Image on the right. Click to swap sides.";
    }
    return (
      <div className="uha-admin">
        <span className="uha-admin__block-label">
          Hero block
        </span>
        <div className="uha-admin__container">
          {props.attributes.isGraphicLeft ? [graphicSide, textSide] : [textSide, graphicSide]}
        </div>
        <Button
          onClick={() => props.setAttributes({ isGraphicLeft: !props.attributes.isGraphicLeft })}
          className="uha-admin-button uha-admin__swap-sides"
        >
          <Icon
            icon={Swap}
            className="uha-admin-button__icon"
          />
          {__(swapButtonText)}
        </Button>
        <CheckboxControl
          label="Gradient background"
          checked={props.attributes.isGradientBackground}
          className="uha-admin__item"
          onChange={(value) => props.setAttributes({ isGradientBackground: value })}
        />
      </div>
    );
  },
  save: (props) => {
    return <InnerBlocks.Content />;
  },
  title: "Hero Block",
  category: "design",
  icon: Hero,
};