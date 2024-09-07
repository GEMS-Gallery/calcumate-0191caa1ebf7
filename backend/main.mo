import Bool "mo:base/Bool";
import Int "mo:base/Int";
import Nat "mo:base/Nat";

import Text "mo:base/Text";
import Array "mo:base/Array";
import Time "mo:base/Time";

actor TwitterClone {
  type Tweet = {
    id: Nat;
    text: Text;
    username: Text;
    handle: Text;
    likes: Nat;
    retweets: Nat;
    timestamp: Int;
  };

  var tweets : [Tweet] = [];
  var nextId : Nat = 0;

  public func createTweet(text: Text, username: Text, handle: Text) : async Tweet {
    let tweet : Tweet = {
      id = nextId;
      text = text;
      username = username;
      handle = handle;
      likes = 0;
      retweets = 0;
      timestamp = Time.now();
    };
    tweets := Array.append(tweets, [tweet]);
    nextId += 1;
    tweet
  };

  public query func getTweets() : async [Tweet] {
    Array.reverse(tweets)
  };

  public func likeTweet(id: Nat) : async Bool {
    tweets := Array.map<Tweet, Tweet>(tweets, func (t) {
      if (t.id == id) { { t with likes = t.likes + 1 } } else { t }
    });
    true
  };

  public func retweetTweet(id: Nat) : async Bool {
    tweets := Array.map<Tweet, Tweet>(tweets, func (t) {
      if (t.id == id) { { t with retweets = t.retweets + 1 } } else { t }
    });
    true
  };
}