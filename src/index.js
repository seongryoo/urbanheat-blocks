import { HeroBlockArgs } from "./hero";
import { VideoBlockArgs } from "./video";

const { registerBlockType } = wp.blocks;

registerBlockType("urbanheat/hero-block", HeroBlockArgs);
registerBlockType("urbanheat/video-block", VideoBlockArgs);