export const idlFactory = ({ IDL }) => {
  const Tweet = IDL.Record({
    'id' : IDL.Int,
    'retweets' : IDL.Int,
    'content' : IDL.Text,
    'author' : IDL.Text,
    'likes' : IDL.Int,
    'timestamp' : IDL.Int,
    'handle' : IDL.Text,
    'comments' : IDL.Int,
  });
  const Profile = IDL.Record({
    'name' : IDL.Text,
    'tweetCount' : IDL.Int,
    'handle' : IDL.Text,
    'followers' : IDL.Int,
    'following' : IDL.Int,
  });
  return IDL.Service({
    'commentTweet' : IDL.Func([IDL.Int], [IDL.Bool], []),
    'createTweet' : IDL.Func([IDL.Text], [Tweet], []),
    'deleteTweet' : IDL.Func([IDL.Int], [IDL.Bool], []),
    'getProfile' : IDL.Func([], [Profile], ['query']),
    'getTweets' : IDL.Func([], [IDL.Vec(Tweet)], ['query']),
    'likeTweet' : IDL.Func([IDL.Int], [IDL.Bool], []),
    'retweetTweet' : IDL.Func([IDL.Int], [IDL.Bool], []),
  });
};
export const init = ({ IDL }) => { return []; };
