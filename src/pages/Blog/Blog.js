import React from "react";
import { useTitle } from "../../hooks/useTitle";

const Blog = () => {
  useTitle("Blog");
  return (
    <div className="min-h-screen my-12">
      <h2 className="text-center font-bold text-3xl text-secondary">
        Welcome to this Blog
      </h2>
      <div className="">
        <div className="container px-4 py-6 mx-auto rounded-lg shadow-lg">
          <div className="flex items-center justify-between"></div>
          <div className="mt-3">
            <p className="text-2xl font-bold hover:underline">
              Different ways to manage a state in React Application
            </p>
            <p className="mt-2 text-lg">
              Every React component has a built-in state. This state is an
              object which stores the property values that belong to a
              component. State is able to keep data from different components
              in-sync because each state update re-renders all relevant
              components <br />
              There are four main types of state you need to properly manage in
              your React apps: <br />
              <li>Local State</li>
              <li>Global State</li>
              <li>Server State</li>
              <li>URL state</li>
              <br />
              <span className="font-bold">Local (UI) state - </span> Local state
              is data we manage in one or another component. Local state is most
              often managed in React using the useState hook.For example, local
              state would be needed to show or hide a modal component or to
              track values for a form component, such as form submission, when
              the form is disabled and the values of a form's inputs. <br />
              <span className="font-bold">Global (UI) state - </span> Global
              state is data we manage across multiple components. Global state
              is necessary when we want to get and update data anywhere in our
              app, or in multiple components at least. A common example of
              global state is authenticated user state. If a user is logged into
              our app, it is necessary to get and change their data throughout
              our application.
              <br />
              <span className="font-bold">Server state - </span> Data that comes
              from an external server that must be integrated with our UI state.
              Server state is a simple concept, but can be hard to manage
              alongside all of our local and global UI state.
              <br />
              <span className="font-bold">URL state - </span> Data that exists
              on our URLs, including the pathname and query parameters. URL
              state is often missing as a category of state, but it is an
              important one. In many cases, a lot of major parts of our
              application rely upon accessing URL state. Try to imagine building
              a blog without being able to fetch a post based off of its slug or
              id that is located in the URL!
              <br />
            </p>
          </div>
        </div>
      </div>

      <div className="">
        <div className="container px-4 py-6 mx-auto rounded-lg shadow-lg">
          <div className="flex items-center justify-between"></div>
          <div className="mt-3">
            <p className="text-2xl font-bold hover:underline">
              How does prototypical inheritance work
            </p>
            <p className="mt-2 text-lg">
              <span>
                In programming, we often want to take something and extend it.
                For instance, we have a user object with its properties and
                methods, and want to make admin and guest as slightly modified
                variants of it. We'd like to reuse what we have in user, not
                copy/reimplement its methods, just build a new object on top of
                it. Prototypal inheritance is a language feature that helps in
                that.{" "}
              </span>
              <br /> <br />
              <span>
                prototypical inheritance refers to the ability to access object
                properties from another object. We use a JavaScript prototype to
                add new properties and methods to an existing object
                constructor. We can then essentially tell our JS code to inherit
                properties from a prototype. Prototypical inheritance allows us
                to reuse the properties or methods from one JavaScript object to
                another through a reference pointer function.{" "}
              </span>
              <br />
              <br />
              <span>
                All JavaScript objects inherit properties and methods from a
                prototype:
                <li>Date objects inherit from Date.prototype.</li>
                <li> Array objects inherit from Array.prototype.</li>
                <li>Player objects inherit from Player.prototype.</li>
                <br />
                The Object.prototype is on top of the prototype inheritance
                chain.Date objects, Array objects, and Player objects all
                inherit from Object.prototype.
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="">
        <div className="container px-4 py-6 mx-auto rounded-lg shadow-lg">
          <div className="flex items-center justify-between"></div>
          <div className="mt-3">
            <p className="text-2xl font-bold hover:underline">
              What is a unit test? Why should we write unit test?
            </p>
            <p className="mt-2 text-lg">
              A unit test is a way of testing a unit - the smallest piece of
              code that can be logically isolated in a system. In most
              programming languages, that is a function, a subroutine, a method
              or property. The isolated part of the definition is important
              <br />
              <span className="my-4 font-bold text-xl">
                Importance of Unit testing <br />
              </span>
              <li>
                Unit testing is an exclusively development-oriented thing. It's
                the one thing you can do early in the development process that
                constitutes discipline and rigor in action
              </li>
              <li>
                Cyclomatic complexity, as the name implies, is measure of code
                complexity. The question is how many paths you can take through
                a code block. The more conditional statements you have, the more
                complex the code block is. The more complex the code, the more
                difficult it is to achieve high degrees of unit-test coverage.
                Unless you go through the unit testing exercise, you may not
                become aware of such complexity.
              </li>
              <li>
                You can test units or functions of your project in isolation.
                Unit tests act as documentation for your code.{" "}
              </li>
              <li>
                {" "}
                They enable you to catch bugs early in the development process.
                Automated unit tests help a great deal with regression testing.
                They detect code smells in your codebase.
              </li>
            </p>
          </div>
        </div>
      </div>

      <div className="">
        <div className="container px-4 py-6 mx-auto rounded-lg shadow-lg">
          <div className="flex items-center justify-between"></div>
          <div className="mt-3">
            <p className="text-2xl font-bold hover:underline">
              React vs Angular vs Vue
            </p>
            <div className="mt-2 text-lg">
              <span className="my-4 font-bold text-3xl">
                React <br />
              </span>
              React is a UI Libray. React can be used as a UI library to render
              elements, without enforcing a specific project structure, and
              that's why it's not strictly a framework. <br />
              <span className="font-bold text-xl text-green-800">Pros.</span>
              <li>Fast loading of new data.</li>
              <li>One file contains both markup and logic (JSX).</li>
              <li>Enables the separation of data and presentation.</li>
              <li>
                Smooth work of the app, even with complex underlying operations
                or database queries.
              </li>
              <span className="font-bold text-xl text-red-800">Cons.</span>
              <li>It is just a JavaScript library, not a framework</li>
              <li>No possibility to implement MVC architecture.</li>
              <li>
                Frequently insufficient for developing a web app and
                necessitating the use of other libraries. .
              </li>
            </div>
            <div className="mt-2 text-lg">
              <span className="my-4 font-bold text-3xl">
                Angular <br />
              </span>
              Angular.js is an MVC framework. A major disadvantage of Angular is
              that it uses a regular DOM, and thus, the entire tree structure of
              the HTML tags is updated, which massively impacts the loading
              time. <br />
              <span className="font-bold text-xl text-green-800">Pros.</span>
              <li>Allows MVC architecture.</li>
              <li>Good maintainability</li>
              <li>Web applications built with Angular perform very well.</li>
              <li>
                Angular provides a basic framework for developing web
                applications and manages them without additional libraries.
              </li>
              <span className="font-bold text-xl text-red-800">Cons.</span>
              <li>Reloads the complete HTML tags tree structure.</li>
              <li>Slow loading time due to the Ionic app.</li>
              <li>
                Because of the given framework, Angular is relatively stiff and
                inflexible.
              </li>
            </div>
            <div className="mt-2 text-lg">
              <span className="my-4 font-bold text-3xl">
                Vue
                <br />
              </span>
              Vue.js is a JavaScript-based progressive framework for creating
              single-page applications. It was created with scalability and
              incrementality in mind, as well as ease of integration with other
              view layer frameworks. Vue is built from the bottom up to be
              progressively adaptable, unlike other monolithic frameworks <br />
              <span className="font-bold text-xl text-green-800">Pros.</span>
              <li>
                A list of tools and libraries (Vue.js official CLI, Development
                Tools, Vue Loader, Vue Router).
              </li>
              <li>Flexibility and simplicity in the utilization.</li>
              <li>
                Reusable in the terms of adding numerous reactive components to
                the existing code.
              </li>
              <span className="font-bold text-xl text-red-800">Cons.</span>
              <li>it allows poor code, making it difficult to debug and test.</li>
              <li>Lack of scalability</li>
              <li>
              While the ecosystem is pretty wide, and there are all the required tools to start developing with Vue, it’s still not as big as React or Angular
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
