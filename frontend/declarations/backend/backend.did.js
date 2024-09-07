export const idlFactory = ({ IDL }) => {
  const Tweet = IDL.Record({
    'id' : IDL.Nat,
    'retweets' : IDL.Nat,
    'username' : IDL.Text,
    'text' : IDL.Text,
    'likes' : IDL.Nat,
    'timestamp' : IDL.Int,
    'handle' : IDL.Text,
  });
  return IDL.Service({
    'createTweet' : IDL.Func([IDL.Text, IDL.Text, IDL.Text], [Tweet], []),
    'getTweets' : IDL.Func([], [IDL.Vec(Tweet)], ['query']),
    'likeTweet' : IDL.Func([IDL.Nat], [IDL.Bool], []),
    'retweetTweet' : IDL.Func([IDL.Nat], [IDL.Bool], []),
  });
};
export const init = ({ IDL }) => { return []; };
