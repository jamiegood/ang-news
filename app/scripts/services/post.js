'use strict';

/*
Service talk to Firebase CRUD for post
 */
app.factory('Post', function($firebase, FIREBASE_URL) {

    //create firebase reference to our firebase for our posts
    var ref =  new Firebase(FIREBASE_URL + 'posts');
    //pass reference to firebase service
    var posts = $firebase(ref);

    // create obj with helper methods.
    // which use the firebase servicve methods

    var Post = {
        all: posts,
        create: function(post) {
            return posts.$add(post);
        },
        find: function(postId) {
            return posts.$child(postId);

        },
        delete: function(postId) {
            return posts.$remove(postId);
        }
    };

    return Post;
});