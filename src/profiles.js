import {
  People,
} from "./_icons";

const {
  InnerBlocks,
} = wp.blockEditor;

export const ProfileShowcaseBlockArgs = {
  title: 'Profile showcase',
  icon: People,
  attributes: {},
  category: 'urbanheat',
  edit: (props) => {
    return (
      <div className="uha-admin uha-profile-showcase">
        <InnerBlocks 
          template={[
            ["uha-data/profile"]
          ]}
          allowedBlocks={[
            "uha-data/profile"
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
