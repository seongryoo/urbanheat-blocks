import {
  Portrait,
  AddPerson,
  Upload,
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
  RichText,
} = wp.blockEditor;

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
      <form
        id="profile-showcase"
        className="uha-profile-showcase uha-admin"
        autocomplete="off"
      >
        <p>Hello</p>
        {profilesArray.map((profile, personId) => {
          return (
            <fieldset key={personId} form="profile-showcase" className="uha-profile-showcase__profile uha-admin__shaded-group">
              <legend className="visually-hidden">
                Profile {personId + 1}
              </legend>
              <div className="uha-profile-showcase__profile__flex">
                <div className="uha-profile-showcase__profile__flex__info">
                  <TextControl
                    onChange={(value) => {
                      profile.name = value;
                      storeAttr(props, "profilesArray", profilesArray);
                    }}
                    label="Name"
                    value={profile.name}
                  />

                  <div className="">
                    <label htmlFor={"prof-desc-" + (personId + 1)} className="components-base-control__label">
                      Description
                    </label>
                    <RichText
                      value={profile.desc}
                      onChange={(value) => {
                        profile.desc = value;
                        storeAttr(props, "profilesArray", profilesArray);
                      }} 
                      id={"prof-desc-" + (personId + 1)}
                      className="uha-admin__rich-input uha-admin__input"
                    />
                  </div>
                </div>
                <div className="uha-profile-pic">
                  <MediaUploadCheck>
                    <MediaUpload
                      onSelect={(media) => {
                        profile.imgUrl = media.url;
                        profile.imgAlt = media.alt;
                        profile.imgId = media.id;
                        storeAttr(props, "profilesArray", profilesArray);
                      }}
                      value={profile.imgId}
                      render={({ open }) => (
                        <Button onClick={open} className="uha-admin-button uha-profile-pic__button">
                          <div className="uha-profile-pic__prev">
                            {profile.imgId != "" ? (
                              <div className="uha-profile-pic__prev__image">
                                <img src={profile.imgUrl} alt={profile.imgAlt} className="uha-profile-pic__prev__image__img" />
                              </div>
                            ) : (
                              <div className="uha-profile-pic__prev__image uha-profile-pic__prev__image--empty">
                                No picture
                              </div>
                            )}
                          </div>
                          <div className="uha-profile-pic__text">
                            <Icon icon={Upload} className="uha-admin-button__icon" />
                            {profile.imgId == "" ? "Upload profile image" : "Change profile image"}
                          </div>
                        </Button>
                      )}
                    />
                  </MediaUploadCheck>
                </div>

              </div>
            </fieldset>
          );
        })}
        <Button onClick={handleNewBlankPerson} className="uha-admin-button">
          <Icon icon={AddPerson} className="uha-admin-button__icon" />
          Add new profile
        </Button>
      </form>
    );
  },
  save: (props) => {

  },
};
