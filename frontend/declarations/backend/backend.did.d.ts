import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface Tweet {
  'id' : bigint,
  'retweets' : bigint,
  'username' : string,
  'text' : string,
  'likes' : bigint,
  'timestamp' : bigint,
  'handle' : string,
}
export interface _SERVICE {
  'createTweet' : ActorMethod<[string, string, string], Tweet>,
  'getTweets' : ActorMethod<[], Array<Tweet>>,
  'likeTweet' : ActorMethod<[bigint], boolean>,
  'retweetTweet' : ActorMethod<[bigint], boolean>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
