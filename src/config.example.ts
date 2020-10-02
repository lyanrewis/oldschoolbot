import { KlasaClientOptions } from 'klasa';

import {
	MongoDBConfig,
	PatreonConfig,
	ProviderConfig,
	RedditAppConfig,
	TwitterAppConfig
} from './lib/types';

export const botToken = '';
export const providerConfig: ProviderConfig | null = {
	default: 'json'
};
export const production = require('os').platform() === 'linux';
export const staging = false;

export const twitchClientID: string | null = null;
export const redditAppConfig: RedditAppConfig = null;
export const twitterAppConfig: TwitterAppConfig = null;
export const mongoDBConfig: MongoDBConfig = null;
export const patreonConfig: PatreonConfig = null;
export const customClientOptions: KlasaClientOptions = {
	prefix: '-'
};
export const sentryDSN: string | null = null;
