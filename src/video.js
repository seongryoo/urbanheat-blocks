const {
  InnerBlocks,
} = wp.blockEditor;

export const VideoBlockArgs = {
  edit: (props) => {
    return (
      <>
        <InnerBlocks 
          template={[
            ["core/embed", {providerNameSlug: "youtube"}]
          ]}
          templateLock="all"
        />
      </>
    );
  },
  save: (props) => {
    return null;
  },
  title: "Video Block",
  category: "design",
  icon: "youtube",
};