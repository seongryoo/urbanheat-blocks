import {
  GridView,
} from "./_icons";

const {
  InnerBlocks,
} = wp.blockEditor;

export const LinkCardsBlockArgs = {
  title: 'Link cards',
  icon: GridView,
  category: 'urbanheat',
  attributes: {},
  edit: (props) => {
    return (
      <div className="uha-admin uha-profile-showcase">
        <InnerBlocks 
          template={[
            ["uha-data/link-card"]
          ]}
          allowedBlocks={[
            "uha-data/link-card"
          ]}
          renderAppender={InnerBlocks.ButtonBlockAppender}
        />
      </div>
    );
  },
  save: (props) => {
    return <InnerBlocks.Content />;
  },
};
