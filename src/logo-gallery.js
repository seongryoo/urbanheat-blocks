import { Stories } from "./_icons";

const { InnerBlocks } = wp.blockEditor;

export const LogoGalleryBlockArgs = {
  title: 'Logo gallery',
  icon: Stories,
  attributes: {},
  edit: (props) => {
    return (
      <div className="uha-admin uha-logo-gallery">
        <InnerBlocks 
          template={[
            ["core/image"]
          ]}
          allowedBlocks={[
            "core/image"
          ]}
          renderAppender={InnerBlocks.ButtonBlockAppender}
        />
      </div>
    );
  },
  save: (props) => <InnerBlocks.Content />,
};
