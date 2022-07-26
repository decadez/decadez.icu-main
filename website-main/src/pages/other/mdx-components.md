---
title: MDX 组件
---

这里用介绍了本项目封装的 MDX 组件。

<YouWillLearn isChapter={true}>这里项目里用到的封装的MDX组件</YouWillLearn>

<code>Recipes</code>

<Recipes titleText="菜谱步进器" titleId="examples-initializer">

### 方法一 {/* 方法一 */}

This example passes the initializer function, so the `createInitialTodos` function only runs during initialization. It does not run when component re-renders, such as when you type into the input.

<Sandpack>

```js
import { useState } from 'react';

function createInitialTodos() {
  const initialTodos = [];
  for (let i = 0; i < 50; i++) {
    initialTodos.push({
      id: i,
      text: 'Item ' + (i + 1),
    });
  }
  return initialTodos;
}

export default function TodoList() {
  const [todos, setTodos] = useState(createInitialTodos);
  const [text, setText] = useState('');

  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button
        onClick={() => {
          setText('');
          setTodos([
            {
              id: todos.length,
              text: text,
            },
            ...todos,
          ]);
        }}>
        Add
      </button>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </>
  );
}
```

</Sandpack>

<Solution />

### Passing the initial state directly {/* passing-the-initial-state-directly */}

This example **does not** pass the initializer function, so the `createInitialTodos` function runs on every render, such as when you type into the input. There is no observable difference in behavior, but this code is less efficient.

<Sandpack>

```js
import { useState } from 'react';

function createInitialTodos() {
  const initialTodos = [];
  for (let i = 0; i < 50; i++) {
    initialTodos.push({
      id: i,
      text: 'Item ' + (i + 1),
    });
  }
  return initialTodos;
}

export default function TodoList() {
  const [todos, setTodos] = useState(createInitialTodos());
  const [text, setText] = useState('');

  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button
        onClick={() => {
          setText('');
          setTodos([
            {
              id: todos.length,
              text: text,
            },
            ...todos,
          ]);
        }}>
        Add
      </button>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </>
  );
}
```

</Sandpack>

<Solution />

</Recipes>

<code>DeepDive</code>
<DeepDive />

```js {1}
test;
```

<code>Gotcha</code>
<Gotcha>
  <Link isLink={true}>副作用</Link>
</Gotcha>

<code>ConsoleBlock</code>
<ConsoleBlock level="error">
  Warning: Function components cannot be given refs. Attempts to access this ref
  will fail. Did you mean to use React.forwardRef()?
</ConsoleBlock>

<code>表格</code>
Functions passed to event handlers must be passed, not called. For example:

| passing a function (correct)           | calling a function (incorrect) |
|----------------------------------------|--------------------------------|
| `<button onClick={handleClick}>` | `<button onClick={handleClick()}>` |

<code>PackageImport</code>
<code>TerminalBlock</code>

<PackageImport>
<TerminalBlock>

npm install react

</TerminalBlock>

```js
// Importing a specific API:
import { useState } from 'react';

// Importing all APIs together:
import * as React from 'react';
```

</PackageImport>