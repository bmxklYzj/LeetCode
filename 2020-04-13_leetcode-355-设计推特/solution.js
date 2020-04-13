// https://leetcode-cn.com/problems/design-twitter/

/**
 * Initialize your data structure here.
 */
var Twitter = function() {
  this.user = {
    // userId: [],
  };
  this.post = [
    // {tweetId, userId}
  ];
};

/**
 * Compose a new tweet.
 * @param {number} userId
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
  this.post.unshift({tweetId, userId});
};

/**
 * Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent.
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
  let res = [];
//   console.log(this.post, this.user);
  for (let i = 0; i < this.post.length; i++) {
    if (res.length >= 10) {
      break;
    }
    if (this.post[i].userId === userId || (this.user[userId] && this.user[userId].findIndex(item => +item === this.post[i].userId) !== -1)) {
      res.push(this.post[i].tweetId);
    }
  }
  return res;
};

/**
 * Follower follows a followee. If the operation is invalid, it should be a no-op.
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
  if (this.user[followerId]) {
    this.user[followerId].push(followeeId);
  } else {
    this.user[followerId] = [followeeId];
  }
};

/**
 * Follower unfollows a followee. If the operation is invalid, it should be a no-op.
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
  if (this.user[followerId]) {
    const index = this.user[followerId].findIndex(item => +item === followeeId);
    if (index !== -1) {
      this.user[followerId].splice(index, 1);
    }
  }
};

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
