import { ContentBlock } from "./_content-block";
import { Hero, Swap, SwitchPicture, SwitchVideo } from "./_icons.js";
const { __ } = wp.i18n;
const {
  TextareaControl,
  TextControl,
  CheckboxControl,
  SelectControl,
  Icon,
} = wp.components;
const {
  RichText,
} = wp.blockEditor;

export const ExternalNewsFeedBlockArgs = {
  title: 'Recent news',
  icon: 'testimonial',
  category: 'media',
  edit: (props) => {

    return (
      <div className="uha-admin">
        <span className="uha-admin__block-label">
          Recent news
        </span>
        <div className="uha-admin--padded">
          <SelectControl
            options={[
              { label: '3', value: '3' },
              { label: '6', value: '6' },
              { label: '9', value: '9' },
              { label: '12', value: '12' },
              { label: 'Show all', value: 'ALL' },
            ]}
            label="Number of articles to display"
            value={props.attributes.numArticles}
            onChange={(value) => props.setAttributes({ numArticles: value })}
          />
          <CheckboxControl
            label="Show newest articles first"
            checked={props.attributes.isNewestFirst}
            onChange={(value) => props.setAttributes({ isNewestFirst: value })}
          />
        </div>
      </div>
    );
  },
  save: (props) => null,
};