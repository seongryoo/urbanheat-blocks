import { ExternalNewsDataBlockArgs } from "./ext-news";
import { HeroBlockArgs } from "./hero";
import { ExternalNewsFeedBlockArgs } from "./ext-news-feed";
import { ProfileShowcaseBlockArgs } from "./profiles";
import { ProfileBlockArgs } from "./profile";

const { registerBlockType } = wp.blocks;

registerBlockType("urbanheat/hero-block", HeroBlockArgs);
registerBlockType("urbanheat/ext-news-data", ExternalNewsDataBlockArgs);
registerBlockType("urbanheat/ext-news-feed", ExternalNewsFeedBlockArgs);
registerBlockType("urbanheat/profile-showcase", ProfileShowcaseBlockArgs);
registerBlockType("urbanheat/profile", ProfileBlockArgs);
