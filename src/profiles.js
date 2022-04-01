import { 
  Portrait,
  AddPerson,
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

export const ProfileShowcaseBlockArgs = {
  title: 'Profile showcase',
  icon: Portrait,
  attributes: {
    profilesArray: {
      type: 'string',
    },
  },
  edit: (props) => {
    const profilesArray = getAttr(props, "profilesArray");
    const handleNewBlankPerson = () => {
      const template = {
        imgId: "",
        imgUrl: "",
        imgAlt: "",
        name: "",
        desc: "",
      };
      let newPerson = template;
      profilesArray.push(newPerson);
      storeAttr(props, "profilesArray", profilesArray);
    };
    return (
      <>
        <p>Hello</p>
        {profilesArray.map((profile, personId) => {
          return (
            <div key={personId}>
              <TextControl
                onChange={(value) => {
                  profile.name = value;
                  storeAttr(props, "profilesArray", profilesArray);
                }}
                label={"Name" + personId}
                value={profile.name}
              />
            </div>
          );
        })}
        <Button onClick={handleNewBlankPerson} className="uha-admin-button">
          <Icon icon={AddPerson} className="uha-admin-button__icon" />
          Add bio
        </Button>
      </>
    );
  },
  save: (props) => {

  },
};
