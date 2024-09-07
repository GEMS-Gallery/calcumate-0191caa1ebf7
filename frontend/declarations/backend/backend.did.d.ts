import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface Profile {
  'name' : string,
  'tweetCount' : bigint,
  'handle' : string,
  'followers' : bigint,
  'following' : bigint,
}
export interface Tweet {
  'id' : bigint,
  'retweets' : bigint,
  'content' : string,
  'author' : string,
  'likes' : bigint,
  'timestamp' : bigint,
  'handle' : string,
  'comments' : bigint,
}
export interface _SERVICE {
  'commentTweet' : ActorMethod<[bigint], boolean>,
  'createTweet' : ActorMethod<[string], Tweet>,
  'deleteTweet' : ActorMethod<[bigint], boolean>,
  'getProfile' : ActorMethod<[], Profile>,
  'getTweets' : ActorMethod<[], Array<Tweet>>,
  'likeTweet' : ActorMethod<[bigint], boolean>,
  'retweetTweet' : ActorMethod<[bigint], boolean>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
