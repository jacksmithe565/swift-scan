/*
Filename: sophisticatedCode.js
Description: This code demonstrates a sophisticated and complex implementation of a social media platform.
*/

// User class to represent a user on the platform
class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.posts = [];
    this.friends = [];
  }

  createPost(content) {
    const post = new Post(this, content);
    this.posts.push(post);
    return post;
  }

  addFriend(user) {
    this.friends.push(user);
    user.friends.push(this);
  }

  getNewsFeed() {
    let newsFeed = [];
    for (let post of this.posts) {
      newsFeed.push(post);
    }
    for (let friend of this.friends) {
      for (let post of friend.posts) {
        newsFeed.push(post);
      }
    }
    newsFeed.sort((a, b) => b.timestamp - a.timestamp);
    return newsFeed;
  }
}

// Post class to represent a post
class Post {
  constructor(user, content) {
    this.user = user;
    this.content = content;
    this.timestamp = Date.now();
  }
}

// Creating users
const john = new User("john_doe", "john@example.com", "password123");
const mary = new User("mary_smith", "mary@example.com", "abcdefg");

// Adding friends
john.addFriend(mary);

// Creating posts
john.createPost("Hello, world!");
mary.createPost("I'm having a great day!");
john.createPost("Just finished reading a good book.");

// Getting news feed for John
const johnNewsFeed = john.getNewsFeed();

// Displaying news feed
for (let post of johnNewsFeed) {
  console.log(post.user.username + ": " + post.content);
}