S3 Angular Crawler Test
=======================

Trying to figure out how to configure an Angular.js app that is hosted on AWS S3 so that the search engines can crawl it.

* hash
 - Using "#" in the urls to determine the app's state.
* hashBang
 - Using "#!" in the urls to determine the app's state.
* pushState
 - The urls look normal. 
 - Using "#" in the urls to determine the app's state.
* pushBang
 - The urls look normal. 
 - Using "#!" in the urls to determine the app's state.

= Push State Info
To make the deep links in an Angular.js app work, the web server need be configured to handle a url that would normally return a 404 error into a rewrite or redirect to the base file for the app. Since the S3 server doens't have a rewrite directive, you need to configure it with a redirect directive. The browser will end up making another request to the web server with a url that the app can understand and create the desired state. Usually this means inserting a "#" or "#!" into the url.

= GoogleBot
Google's web crawler handles the javascript on web pages and will try to index the content after the page has been fully rendered. With the AWS S3 server in the mix, I haven't been able to figure how to get the deep content indexed. The default route is always rendered. It appears that the web crawler drops the portion of the url after the "#" or "#!" when it receives the redirect. 
