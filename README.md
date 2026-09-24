# 🌐 Web Dev (Earners)

A personal **Web Development learning repository** containing lesson exercises, classwork, homework, assignments, notes, and small projects.

The repository follows a gradual learning path from **HTML and CSS** to **JavaScript, Git/GitHub, and Tailwind CSS**.

Most examples are intentionally kept **small and self-contained**, making them useful for revisiting concepts, experimenting with variations, and understanding how code behaves in a browser or JavaScript runtime.

---

## 📂 Repository Contents

| Folder / File            | Description                                                                                                                                                                                                                                         |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `HTML/`                  | HTML lessons covering page structure, lists, tables, forms, semantic tags, media tags, classwork, and homework.                                                                                                                                     |
| `CSS/`                   | CSS lessons covering selectors, fonts, colors, backgrounds, box model, display, positioning, units, Flexbox, Grid, transitions, transforms, animations, and responsive design.                                                                      |
| `JavaScript/`            | JavaScript lessons and practice covering fundamentals, conditions, loops, functions, built-in objects, arrays, objects, destructuring, spread/rest, modules, array methods, scope, lexical environments, execution context, hoisting, and closures. |
| `Git and GitHub/`        | Practice files and notes related to Git, GitHub, repositories, forking, and collaboration.                                                                                                                                                          |
| `TailwindCSS/`           | Tailwind CSS lesson examples, including responsive design and Tailwind CLI setup.                                                                                                                                                                   |
| `Projects/`              | Larger practice projects such as Mini Project, Tailwind Portfolio, and ThreadCo.                                                                                                                                                                    |
| `interviewQuestions.txt` | A collection of web development and programming interview questions.                                                                                                                                                                                |
| `.gitignore`             | Git ignore rules for dependencies and selected project directories.                                                                                                                                                                                 |

---

## 🗂️ How the Lessons Are Organized

Lessons are generally organized using a **lecture number + topic name** format.

For example:

```text
CSS/
├── Lec-13 Flexbox/
├── Lec-14 Grid/
└── Lec-15 Responsive Design/

JavaScript/
├── Lec-37 Closures/
├── Lec-38 Scope/
└── Lec-39 Execution Context/
```

### 📌 Common File Naming

* **`CW`** → Classwork
* **`HW`** → Homework
* **`Assignment`** → Practice questions or assignments
* **`index.html`** → Main HTML demonstration
* **`style.css`** → Stylesheet
* **`index.js`** → JavaScript demonstration

> Not every lesson follows exactly the same naming convention, so check the files inside the relevant lesson folder.

---

# 🚀 Opening and Running Examples

## 🌐 HTML & CSS

HTML and CSS examples can usually be opened directly in a browser.

For example:

```text
HTML/
└── Lec-01 Basics/
    └── index.html
```

Simply open the `.html` file in your browser.

If the page uses a CSS file, make sure the existing folder structure is preserved so that relative paths continue to work.

You can also use a local development server such as **Live Server** in Visual Studio Code.

---

## 🟨 JavaScript

### Browser-Based JavaScript

For JavaScript examples that interact with HTML or the browser:

1. Open the corresponding `.html` file.
2. Open the browser's **Developer Tools**.
3. Go to the **Console** tab.
4. Check the output.

### Node.js

Standalone JavaScript files that do not depend on browser APIs can be executed using Node.js.

Example:

```bash
node "JavaScript/Lec-37 Closures/index.js"
```

---

## 🎨 Tailwind CSS

Tailwind CSS examples have their own package configuration inside their respective lesson directories.

Navigate to the required lesson folder:

```bash
cd "TailwindCSS/<lesson-folder>"
```

Install the dependencies:

```bash
npm install
```

Run the development script:

```bash
npm run dev
```

For lessons that do not contain a `dev` script, check the lesson's `package.json` for the available Tailwind CLI command.

### 📄 Tailwind Files

In Tailwind-based lessons:

```text
input.css  → Source stylesheet
output.css → Generated CSS
```

Avoid manually editing `output.css` when it is generated by the Tailwind build process.

Instead, make changes in the source files and rebuild the CSS using the configured command.

---

# 💻 Projects

The `Projects/` directory contains larger practice projects where multiple concepts are combined into complete web pages and interfaces.

Current projects include:

* 🧩 **Mini Project**
* 🎨 **Tailwind Portfolio**
* 🛍️ **ThreadCo**

Each project may have its own setup requirements.

For project-specific instructions, open the project's `README.md` file if available.

---

# 🛠️ Requirements

To work with this repository, you will generally need:

* 🌐 A modern web browser
* 🟢 **Node.js** for standalone JavaScript or Tailwind CLI examples
* 📦 **npm** for installing dependencies
* 💻 **Visual Studio Code** — recommended, but not required
* 🔴 **Git** — recommended for version control

---

# 📌 Repository Structure

A simplified view of the repository:

```text
Web Dev (Earners)/
│
├── HTML/
│   ├── Lec-01 ...
│   ├── Lec-02 ...
│   └── ...
│
├── CSS/
│   ├── Lec-01 ...
│   ├── Lec-02 ...
│   └── ...
│
├── JavaScript/
│   ├── Lec-01 ...
│   ├── Lec-02 ...
│   └── ...
│
├── Git and GitHub/
│   ├── Practice/
│   └── Notes/
│
├── TailwindCSS/
│   ├── Lec-01 ...
│   ├── Lec-02 ...
│   └── ...
│
├── Projects/
│   ├── Mini Project/
│   ├── Tailwind Portfolio/
│   └── ThreadCo/
│
├── interviewQuestions.txt
├── .gitignore
└── README.md
```

---

# 🔧 Working with the Repository

When adding or modifying files:

### 📁 Keep Examples Organized

Keep examples inside their relevant lesson or project folders.

This helps preserve relative paths for:

* Images
* CSS files
* JavaScript files
* Other assets

### 📦 Dependencies

Keep dependencies local to the projects or lessons that require them.

Do **not** commit:

```text
node_modules/
```

### 🎨 Tailwind Generated Files

If `output.css` is generated by Tailwind, modify the source stylesheet instead of manually editing the generated file.

### 🔍 Git Status

The root `.gitignore` contains rules for ignored files and directories.

If a file does not appear when running:

```bash
git status
```

check `.gitignore` to make sure the file or directory is not being ignored intentionally.

---

# 🧭 Learning Path

The repository follows a **rough learning progression** rather than a strict course structure.

```text
HTML
  ↓
CSS
  ↓
JavaScript
  ↓
Git & GitHub
  ↓
Tailwind CSS
  ↓
Projects
```

### 1️⃣ HTML

Learn the fundamentals of web page structure:

* HTML elements
* Headings & paragraphs
* Lists
* Tables
* Forms
* Semantic HTML
* Media elements

### 2️⃣ CSS

Build styling and layout skills:

* Selectors
* Colors & fonts
* Box model
* Display
* Positioning
* Units
* Flexbox
* Grid
* Transitions
* Transforms
* Animations
* Responsive design

### 3️⃣ JavaScript

Learn programming and browser-side scripting:

* Variables
* Conditions
* Loops
* Functions
* Arrays
* Objects
* Built-in objects
* Array methods
* Destructuring
* Spread & Rest
* Modules
* Scope
* Lexical Environment
* Execution Context
* Hoisting
* Closures

### 4️⃣ Git & GitHub

Practice:

* Git basics
* Repository management
* Commits
* Branches
* GitHub
* Forking
* Collaboration
* Version control workflows

### 5️⃣ Tailwind CSS

Learn utility-first CSS and responsive interfaces using Tailwind CSS.

### 6️⃣ Projects

Finally, combine the concepts learned throughout the repository into complete projects and interfaces.

---

## 🎯 Purpose of This Repository

This repository serves as my personal **Web Development learning workspace**.

It is mainly used for:

* 📚 Learning new concepts
* ✍️ Practicing coding
* 🧪 Experimenting with different approaches
* 📝 Completing classwork and assignments
* 🔄 Revisiting previously learned topics
* 🚀 Building small projects
* 📈 Tracking my learning progress

---

> **Learning by building, experimenting, and improving — one concept at a time. 🚀**
