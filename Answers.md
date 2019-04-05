1.  Explain the differences between `client-side routing` and `server-side routing`.

Server-side routing - when visit a website browser makes a request to the server that contains the contents of the website. Once the request is done processing, your browser gets back the fully rendered HTML and displays it on the screen.If you then decide to visit a different page on the website, your browser will once again make another request for the new information. It doesn’t matter if the new page only has a few items that are different than the current page,the browser will ask for the entire new page and will re-render everything from the ground up.
Client-side routing - happens when the route is handled internally by the JavaScript that is loaded on the page. 
The key difference is that if you were to click on the link the page to load more content, the browser will not make another request to the server. You are rendering items with the browser, so it will instead use JavaScript to load the new content and React will make sure that only the new content is rendered. Everything else will be left alone.
This is much faster since you are only loading a very small section of the page to fetch the new content, instead of loading the entire page.

1.  What does HTTP stand for?

HTTP stands for Hyper Text Transfer Protocol. It's the set of rules used on the web for application functionality, for example, for create/read/update/delete operations.

1.  What does CRUD stand for?
CRUD stands for create, read, update, and delete. These are categories of operations performed in applications that are user facing and take data.

1.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

Create = POST to add or create new resources
Read   = GET  request specifying a URL that points to the desired resource
Update = PUT to make changes to specific resources
Delete = DELETE remove/delete data from the server

1.  Mention three tools we can use to make AJAX requests

Built in JavaScript method called fetch
A library called axios
JQuery library