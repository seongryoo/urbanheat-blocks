import {
  Portrait,
  AddPerson,
  Upload,
  Trash,
  People,
} from "./_icons";

import {
  getAttr,
  storeAttr
} from "./_attr-helpers";

const {
  Icon,
  Button,
  TextControl,
} = wp.components;

const {
  MediaUpload,
  MediaUploadCheck,
  InnerBlocks,
  RichText,
} = wp.blockEditor;

export const ProfileShowcaseBlockArgs = {
  title: 'Profile showcase',
  icon: People,
  attributes: {
    profilesArray: {
      type: 'string',
    },
  },
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
