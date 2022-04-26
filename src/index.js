import { ExternalNewsDataBlockArgs } from "./ext-news";
import { HeroBlockArgs } from "./hero";
import { ExternalNewsFeedBlockArgs } from "./ext-news-feed";
import { ProfileShowcaseBlockArgs } from "./profiles";
import { ProfileBlockArgs } from "./profile";
import { LogoGalleryBlockArgs } from "./logo-gallery";
import { LinkCardBlockArgs } from "./link-card";
import { LinkCardsBlockArgs } from "./link-cards";

const { registerBlockType } = wp.blocks;

registerBlockType("urbanheat/hero-block", HeroBlockArgs);
registerBlockType("uha-data/ext-news-data", ExternalNewsDataBlockArgs);
registerBlockType("urbanheat/ext-news-feed", ExternalNewsFeedBlockArgs);
registerBlockType("urbanheat/profile-showcase", ProfileShowcaseBlockArgs);
registerBlockType("uha-data/profile", ProfileBlockArgs);
registerBlockType("urbanheat/logo-gallery", LogoGalleryBlockArgs);
registerBlockType("uha-data/link-card", LinkCardBlockArgs);
registerBlockType("urbanheat/link-cards", LinkCardsBlockArgs);
