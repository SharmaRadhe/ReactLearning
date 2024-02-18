// ############################################################## Episode 1 ##########################################################################
/**
 * Theory -
● What is Emmet?
● Difference between a Library and Framework?
● What is CDN? Why do we use it?
● Why is React known as React?
● What is crossorigin in script tag?
● What is diference between React and ReactDOM
● What is difference between react.development.js and react.production.js files via CDN?
● What is async and defer? 
 * 
 * 
 * 1. Emmet -> 
 * 			Emmet is a web development toolkit that greatly enhances HTML and CSS coding efficiency. 
 *  		It allows developers to write shorthand abbreviations that expand into full HTML or CSS code snippets. 
 *  		This can significantly speed up the process of writing and editing code.
 * ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 * 
 * 
 * 2. Libraray V/S Framework ->
 * 			Library: 
 * 					A library is a collection of pre-written code that can be used to perform specific tasks.
 * 					It provides functions and methods that a developer can call to accomplish certain actions. 
 * 					The developer has more control and freedom when using a library.
 *			
 * 			Framework: 
 * 					A framework is a more comprehensive set of tools, guidelines, and conventions that dictate the structure and flow of an application. 
 * 					It often imposes a specific architecture and provides a framework in which the developer builds their application. 
 * 					The developer has less control over the flow in a framework compared to a library.
 * ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 * 
 * 
 * 3. What is CDN? Why do we use it?
 * 			A CDN is a distributed network of servers that work together to deliver web content, such as images, stylesheets, scripts, and other assets, to users based on their geographic location.
 * 			CDNs help to 
 * 				1. Reduce latency
 * 				2. Speed up the loading time of web pages
 * 				3. Distribute the load across multiple Edge servers
 * 				4. Caching at Edge servers
 * 				5. Reduce traffic on main application / Main(Origin) Server
 * 				6. High Availability because if one edge server goes down then the content will be served from another edge server.
 * ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 * 
 * 
 * 4. Why is React known as React?
 * 			React is called React because it reflects the core idea of its architecture, which is to efficiently update and "react" to changes in the user interface. 
 * 			It is a JavaScript library for building user interfaces, developed by Facebook.
 * 
 * ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 * 
 * 
 * 5. What is crossorigin in script tag?
 * 			The crossorigin attribute in a script tag is used when loading scripts from external domains. 
 * 			It specifies whether the browser should make a cross-origin request when fetching the script. 
 * 			This attribute is relevant when dealing with Cross-Origin Resource Sharing (CORS) issues.
 * 
 * ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 * 
 * 
 * 6. What is diference between React and ReactDOM
 * 			React: 
 * 					The core library for building user interfaces. 
 * 				  	It provides the functionality for defining and rendering components, managing state, and handling events.
 * 
 * 			ReactDOM: 
 * 					A package that provides DOM-specific methods for React. 
 * 					It is responsible for rendering React components into the browser DOM. 
 * 					ReactDOM is specifically designed for web applications.
 * 
 *          MY Answer:
 * 					React is core which provides core methods and features for react.
 * 					but as we know that react also work for mobile apps so the DOM related methods for react placed in separate file called ReactDOM
 * 
 * ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 * 
 * 
 * 7. What is difference between react.development.js and react.production.js files via CDN?
 * 			react.development.js: 
 * 								This file is larger in size and includes development-specific warnings and error messages. 
 * 								It is meant for use during the development phase of a project and aids developers in identifying and fixing issues.
 * 			
 * 			react.production.js: 
 * 								This file is smaller in size and optimized for production. 
 * 								It excludes development warnings and is suitable for deployment to production environments to improve performance.
 * 
 * ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 * 
 * 
 * 8. What is async and defer?
 * 
 * 			Async: 
 * 					When the async attribute is added to a script tag, it means that the script will be downloaded asynchronously while the HTML parsing and rendering continue.
 * 					The script will be executed as soon as it is downloaded, regardless of whether the HTML parsing has completed or not.
 * 					It is commonly used for non-blocking scripts where the order of execution does not matter, and the script can run independently of the HTML structure.
 * 					
 * 										<script async src="example.js"></script>
 * 
 * 			Defer: 
 * 					When the defer attribute is added to a script tag, it also allows the script to be downloaded asynchronously, but with a key difference.
 * 					The script will be executed only after the HTML parsing is complete, just before the DOMContentLoaded event is fired.
 * 					Multiple scripts with defer will be executed in the order they appear in the HTML.
 * 
 * 										<script defer src="example.js"></script>
 * 
 * 			SUMMARY: 
 * 					In summary, both async and defer enable asynchronous loading of scripts,
 * 					 but async executes the script as soon as it's downloaded, 
 * 					 while defer delays execution until after the HTML parsing is complete.
 * 
 * ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 * 
 * // ############################################################## Episode 2 ##########################################################################
 * 
 * 
 * 
 * 
 * 
 */
