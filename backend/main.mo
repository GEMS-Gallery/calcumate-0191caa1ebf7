import Bool "mo:base/Bool";

import Text "mo:base/Text";
import Array "mo:base/Array";
import Time "mo:base/Time";
import Int "mo:base/Int";

actor TwitterClone {
  type Tweet = {
    id: Int;
    author: Text;
    handle: Text;
    content: Text;
    likes: Int;
    retweets: Int;
    comments: Int;
    timestamp: Int;
  };

  type Profile = {
    name: Text;
    handle: Text;
    tweetCount: Int;
    following: Int;
    followers: Int;
  };

  var tweets : [Tweet] = [];
  var profile : Profile = {
    name = "John Doe";
    handle = "@johndoe";
    tweetCount = 0;
    following = 500;
    followers = 1500;
  };

  public func createTweet(content: Text) : async Tweet {
    let tweet : Tweet = {
      id = Time.now();
      author = profile.name;
      handle = profile.handle;
      content = content;
      likes = 0;
      retweets = 0;
      comments = 0;
      timestamp = Time.now();
    };
    tweets := Array.append<Tweet>([tweet], tweets);
    profile := {
      profile with
      tweetCount = profile.tweetCount + 1;
    };
    tweet
  };

  public query func getTweets() : async [Tweet] {
    tweets
  };

  public query func getProfile() : async Profile {
    profile
  };

  public func likeTweet(id: Int) : async Bool {
    tweets := Array.map<Tweet, Tweet>(tweets, func (t) {
      if (t.id == id) { { t with likes = t.likes + 1 } } else { t }
    });
    true
  };

  public func retweetTweet(id: Int) : async Bool {
    tweets := Array.map<Tweet, Tweet>(tweets, func (t) {
      if (t.id == id) { { t with retweets = t.retweets + 1 } } else { t }
    });
    true
  };

  public func commentTweet(id: Int) : async Bool {
    tweets := Array.map<Tweet, Tweet>(tweets, func (t) {
      if (t.id == id) { { t with comments = t.comments + 1 } } else { t }
    });
    true
  };

  public func deleteTweet(id: Int) : async Bool {
    let oldLen = tweets.size();
    tweets := Array.filter<Tweet>(tweets, func (t) { t.id != id });
    if (tweets.size() < oldLen) {
      profile := {
        profile with
        tweetCount = profile.tweetCount - 1;
      };
      true
    } else {
      false
    }
  };
}