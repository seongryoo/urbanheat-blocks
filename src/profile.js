import {
  Portrait,
  Upload,
} from "./_icons";

const {
  MediaUpload,
  MediaUploadCheck,
  RichText,
} = wp.blockEditor;

const {
  Icon,
  Button,
  TextControl,
} = wp.components;

export const ProfileBlockArgs = {
  title: 'Profile',
  icon: Portrait,
  edit: (props) => {
    return (
      <div className="uha-admin uha-profile">
        <div className="uha-profile__info">
          <TextControl
            onChange={(value) => props.setAttributes({ name: value })}
            label="Name"
            value={props.attributes.name}
          />
          <label
            htmlFor={props.clientId + "-desc"}
            className="components-base-control__label"
          >
            Description
          </label>
          <RichText
            value={props.attributes.desc}
            onChange={(value) => props.setAttributes({ desc: value })}
            id={props.clientId + '-desc'}
            className="uha-admin__rich-input uha-admin__input"
          />
        </div>
        <div className="uha-profile__pic">
          <MediaUploadCheck>
            <MediaUpload
              onSelect={(media) => {
                props.setAttributes({
                  imgUrl: media.url,
                  imgAlt: media.alt,
                  imgId: media.id,
                });
              }}
              value={props.attributes.imgId}
              render={({ open }) => (
                <>

                  <Button 
                    onClick={open} 
                    aria-hidden="true" 
                    className="uha-admin-button 
                               uha-profile__pic__button"
                    variant="secondary"
                    >
                    <div className="uha-profile__pic__prev">
                      {props.attributes.imgUrl && props.attributes.imgUrl != "" ? (
                        <div className="uha-profile__pic__prev__image">
                          <img 
                            src={props.attributes.imgUrl} 
                            alt={props.attributes.imgAlt} 
                            className="uha-profile__pic__prev__image__img" />
                        </div>
                      ) : (
                        <div 
                          className="uha-profile__pic__prev__image uha-profile__pic__prev__image--empty"
                          aria-hidden="true">
                          No picture
                        </div>
                      )}
                    </div>
                  </Button>
                  <Button onClick={open} className="uha-admin-button" variant="secondary">
                    Choose profile picture
                    <span className="visually-hidden">                      
                      {props.attributes.imgUrl && props.attributes.imgUrl != "" ? 
                        "Current picture: " + props.attributes.imgUrl : 
                        "No picture chosen"}
                    </span>
                  </Button>
                </>
              )}
            />
          </MediaUploadCheck>
          <Button
            onClick={() => {
              props.setAttributes({
                imgUrl: null,
                imgAlt: null,
                imgId: null,
              });
            }}
            className="uha-admin-button"
          >
            Clear picture
          </Button>
        </div>
      </div>
    );
  },
  save: (props) => null,
};
