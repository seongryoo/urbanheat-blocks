import { ExternalNewsDataBlockArgs } from "./ext-news";
import { HeroBlockArgs } from "./hero";

const { registerBlockType } = wp.blocks;

registerBlockType("urbanheat/hero-block", HeroBlockArgs);
registerBlockType("urbanheat/ext-news-data", ExternalNewsDataBlockArgs);