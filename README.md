# Feb-2020-Deque-React-A11y-Example
Created with CodeSandbox


Notes by Alison Walden

Hey all, in case you couldn’t make it to this presentation, I took some notes including the URLs that were shared in the presentation. My notes are pasted below. But I take no responsibility if they don’t make sense 😊, use at your own discretion. As noted in our discussion after, some of the features described are only useful for the latest version of React.
 
Presenter: Mark Steadman, Deque
React and Accessibility webinar
 
(1) Quick React/Accessibility overview
React gets a bad reputation for accessibility because it's a framework (single page app). It is dynamically injected into the page. No refresh behind the scenes. Not all content is loaded into the DOM on load.
Having one page load causes issues for keyboard screen reader users.
The idea with React is to speed up sites by putting more power on the client side.
Dynamic data allows for more data to be put onto the page. Data usage goes faster with React.
 
(2) Myth of React and Accessibility
Stigma in the community that apps created in React are not accessible.
Lots of accessibility advocates but developers say that accessibility is a big challenge that can be almost impossible to achieve.
But, React can be accessible as any other framework out there. It just takes knowledge and a willingness to do so.
We CHOOSE to use semantic HTML. We can also choose to make React accessible.
 
(3) General accessibility issues
https://codesandbox.io/s/react-a11y-example-6x7my
https://6x7my.csb.app/focus (view)
 
a. Page/view titles
You can specify a specific page title on a React single page app (and change it when the screen changes). You can:
1. Within react, e.g. React-Document-Title
2. Declare the page title in javascript, document.title="whatever",
3. React-helmet, which allows you to set up the <head> tag.
 
b. Focus management (with dynamic content)
1. Use component lifecycle with div mount. Run javascript to control the focus. this.componentName.focus()
**EXAMPLE makes a non-interactive element get focus.
2. Modal: React-modal straight out of the box is 100% accessible. The problems come when they are customized. All you have to do is tell it when to show. Do whatever you want inside the modal. <Modal> tag. This modal prevents focus from going behind it with no extra code. Do the component lifecycle and use javascript to do other things.
3. Auto focus <input type="text" name="name" autoFocus /> (this is out of the box react, this puts focus on this element immediately as it is created). THIS SEEMS COOL. Here is the catch. If user goes backwards and tries to put focus in the input box again, it won't work. Autofocus by default only works on the first trigger. It only works on an input field.
 
WHAT DO I DO WITH FOCUS WHEN I CHANGE A PAGE IN REACT?
By default, it just goes wherever and does what it wants. You can tell it for every route where to go. E.g. you can tell it to go to the heading for each page. Other people put focus back in the header like a true page refresh.
 
c. Keyboard navigation and events (extra added markup)
1. E.g. Data added to a table. The data has a wrapper div that can break the semantics of the overall table. Because React forces you to wrap the injected content (in this case, <td> tags) with a wrapper element, and developers often choose something like a <div>. Instead of <div>, use <Fragment> wrappers in React. Then it can be semantically correct.
2. Custom tags. If you do custom components or custom tags, you cannot add aria or anything after the fact to a custom tag. It will be ignored by React. You need to add your role="button" and tabindex="0" on the actual component itself. <customtag role="button" tabindex="0"> is ignored.
3. Click events. Buttons work natively with the keyboard. But if you put a click event on a <div> that will not make it work with the keyboard. Also add an onKeyPress event with the same code as the onClick code. Yes, duplicate code. But seriously, when you can use semantic html, use it. It gives you so much more.
 
d. Dynamically added content (e.g. use of aria live and role="alert")
When single page apps in JS came about, the one thing that was really difficult to use was aria-live because the stuff is not in the DOM. The screen reader doesn't have time to catch up.
If you use a custom package out of the box or use the lazy load from React itself, the screen reader will have time to catch up and read it.
1. React Aria Live: Aria Live Announcer Package. There is a slight delay behind the scenes to let the screen reader catch up. <LiveAnnouncer> tag. This one works a little bit better than the second one. Make this work 100% of the time by lazy loading the component.
2. React A11y Announcer: Again gives a slight delay so the screen reader can catch up. <Announcer> tag.
3. Lazy Loading, suspense (only works on React 16 per Alison Hall).
 
e. Component libraries (packages)
Document & heading structure: Many packages are not accessibility tested, causing major issues in semantics of the page itself.
Buttons, tables, links marked up without native html tags: Most packages try to make the most out of CSS to design something slick. Many people choose ease of use for the developer.
Test for these issues first before you pick a package!
 
(4) Framework support for accessibility
a. React-axe
https://github.com/dequelabs/react-axe
Deque's wrapper for accessibility testing within your react project.
b. Eslint-plugin-jsx-a11y
ESLint plugin that identifies and enforces a number of accessibility rules directly in your JSX.
c. ReachUI
https://reacttraining.com/reachui
Accessible widgets that are simply plug and play are completely accessible. Includes Accordion, Dialogs, Tabs, Tooltips. Accessible out of the box. Tested by this speaker.
d. Semantic UI - React
https://react.semantic-ui-com/
Allows for easy creation and integration of inputs and widgets which is translated into semantic HTML.
Allows you to have custom tags and use the semantic UI to add attributes to make them into semantic HTML.
 
(5) SUMMARY
React can be as accessible as any application framework with the right knowledge and the right know-how.
If we continue to spread knowledge and awareness of the issues that come with JS frameworks like React, and also teach and guide others on how to remediate these issues, there is no limit as to how accessible this framework can be.
Support exists within the community for React accessibility.
 
(6) QUESTIONS & ANSWERS
 
Q1: How do you deal with a language switch from English to French on a single page application? The screen reader doesn't know the language has switched.
A1: Have a quick refresh of the page so the screen reader can pick it up. Otherwise the screen reader will struggle. OR React internationalization might have some other solutions for that.
 
Q2: Have you checked out the downshift library?
A2: No.
 
Q3: I'm trying to build a react app using material UI library. Is that accessible?
A3: React material library is about 70% accessible (similar to Angular Material). Watch out for some of the widgets because it does a lot of accessibility key commands that can get you into trouble. It will need some adjustments.
 
Q4: A lot of your recos involved simply using semantic elements, etc. Is that the case?
A4: A lot of people think you can't use semantics in react and that is not true. You should use semantics whenever possible.
 
Q5: How to get headings in correct hierarchy within react components?
A5: That is difficult. I suggest two things. If you use something like storybook, you can see where each component is going to lie on a page and set the headings accordingly. The other thing is to make your headings components in themselves then they can live outside of that. I know that sounds crazy but I've seen it a lot.
 
Q6: Do a lot of React rules apply to React Native?
A6: React Native has a lot of the same issues that I've mentioned here but it starts to trickle into mobile specific issues. Look into guidelines that tie to native mobile in WCAG.
 
Q7: Is the ESLint plugin for JSX, can we configure it to cover JS files as well?
A7: I believe so. Full disclosure, it has been awhile since I used that.
 
Q8: What is the difference between the Deque axe extension and the React-axe plugin?
A8: The difference is you're testing at component level vs. page level when you use React-axe. Otherwise it's the same. Use the page level one to see if the page works holistically. Use the plugin to simply test your component. Both use the axe core engine so it'll be consistent. I suggest doing that.
 
Q9: Out of Vue, React, and Angular, which is easiest for accessibility?
A9: Vue and React are tied, angular is right behind it. It's more difficult to use component life cycles with angular. I hate to answer this question. None of them are bad.
 
Q10: Accessible react components available online?
A10: There was, on a blog post, but it went away. So not anymore, unfortunately. Go look at packages themselves. A lot of people will tout that they are accessible. In that case, the odds of them being legit are higher, but you still need to test it. There is a little symbol to indicate that.
 
Q11: Is there a free integration tool to test single page applications?
A11: Axe integration for webdriver.js. Webdriver.js, webdriver.io, etc. allow you to see different pages and test them. You can get that flow testing.
