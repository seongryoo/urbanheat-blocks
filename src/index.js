const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { Button, Icon } = wp.components;
const { MediaUpload, MediaUploadCheck } = wp.blockEditor;
registerBlockType( 'urbanheat/hero-block', {
  edit: (props) => {
    const sideImageUploadButton = (
      <MediaUploadCheck>
        <MediaUpload
          onSelect={(media) => {
            props.setAttributes({
              sideImageId: media.id,
              sideImageUrl: media.url,
              sideImageAlt: media.alt,
            });
          }}
          value={props.attributes.sideImageId}
          render={({open}) => (
            <Button onClick={open}>
              <Icon
                icon={Upload}
                className={'admin-button__icon'}
              />
              __( 'Upload image for hero block' )
            </Button>
          )}
        />

      </MediaUploadCheck>
    )
  }
} )