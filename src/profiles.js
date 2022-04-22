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
  edit: (props) => {
    return (
      <div className="uha-admin uha-profile-showcase">
        <InnerBlocks 
          template={[
            ["urbanheat/profile"]
          ]}
          allowedBlocks={[
            "urbanheat/profile"
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
