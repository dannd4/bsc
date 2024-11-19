### React

React là một thư viện Javascript dùng để xây dựng giao diện người dùng (UI).

React xây dựng giao diện người dùng dưới dạng các component, mỗi component đóng gói và quản lý trạng thái của riêng chúng, sau đó kết hợp lại để tạo ra các giao diện phức tạp.

Ví dụ, bạn có thể tạo các component như "Header", "Sidebar", "Content", "Footer",... Mỗi component này có thể chứa các phần tử HTML, các trạng thái, xử lý sự kiện và cách hiển thị riêng biệt. Sau đó kết hợp chúng lại để tạo nên giao diện tổng thể của trang web.

```jsx
function Home() {
  return (
    <>
      <Header />
      <Sidebar />
      <Content />
      <Footer />
    </>
  );
}
```

React là một thư viện declarative (khai báo), nó giúp việc tạo giao diện có tính tương tác cao trở nên dễ dàng. Với mỗi trạng thái của ứng dụng, bạn chỉ cần mô tả giao diện người dùng cuối cùng mà bạn muốn, React sẽ tự động cập nhật và hiển thị giao diện đó khi dữ liệu thay đổi.

##### React Component vs React Element

React Component đơn giản là một hàm Javascript trả về một phần tử React (React element) mô tả những gì sẽ được hiển thị trên giao diện

React Element là thành phần nhỏ nhất của React, nó là một đối tượng Javascript mô tả những gì được hiển thị trên giao diện người dùng. React Element được tạo bằng cách gọi hàm `React.createElement(type, props, ...children)`

```js
React.createElement("button", props: { className: 'primary' }, "Click me");

{
  type: 'button',
  props: { className: 'primary' },
  children: 'Click me'
}
```

- type: Đây có thể là một phần tử HTML (VD: div, span, p,...) hoặc các component khác.
- props: Là một object chứa các thuộc tính của phần tử (VD: id, style,...)
- ...children: đại diện cho các phần tử lồng nhau bên trong một phần tử cha. Chúng có thể là các phần tử React khác, chuỗi hoặc số

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Hello React!</title>
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <script>
      function Welcome() {
        return React.createElement(
          "div",
          { id: "hello-world" },
          React.createElement("h1", null, "Hello World")
        );
      }

      // Phương thức render() để hiển thị component React vào cây DOM
      ReactDOM.createRoot(document.getElementById("root")).render(
        React.createElement(Welcome)
      );
    </script>
  </body>
</html>
```

##### Sử dụng JSX để tạo React Element

JSX (JavaScript XML) là một phần quan trọng và độc đáo của React, nó cho phép bạn tạo các phần tử React mà không cần sử dụng phương thức `React.createElement()`. JSX giảm bớt và đơn giản hóa cú pháp khi làm việc với React, giúp mã nguồn trở nên dễ đọc và dễ hiểu hơn.

```jsx
// Cú pháp tạo element với React.createElement()
React.createElement(
  "div",
  { id: "hello-world" },
  React.createElement("h1", null, "Hello World")
);

// Tương đương là cú pháp tạo element với JSX
<div id="hello-world">
  <h1>Hello World</h1>
</div>;
```

Tuy nhiên JSX không phải là Javascript thuần, nó cần được biên dịch thành mã Javascript thông thường trước khi chạy trên trình duyệt. Để biên dịch mã JSX, bạn cần sử dụng một công cụ biên dịch như Babel hoặc typescript.

### Cài đặt và công cụ

Node và NPM

- Thay vì cài đặt trực tiếp nên sử dụng [volta](https://volta.sh/) hoặc [nvm](https://github.com/nvm-sh/nvm) để quản lý phiên bản nodejs.

Webpack và Babel

- Thông thường khi xây dựng ứng dụng React, bạn sẽ sử dụng Webpack để quản lý các module và Babel để biên dịch mã JSX thành mã Javascript thông thường. Tuy nhiên việc cấu hình Webpack và Babel có thể phức tạp, và đòi hỏi kiến thức về cả hai công cụ.

Vite

- [Vite](https://vite.dev/) được tạo ra như một công cụ build front-end "thế hệ mới", cung cấp trải nghiệm nhanh hơn và gọn gàng hơn để phát triển ứng dụng web hiện đại với React, Vue và một số framework khác.
- Sử dụng vite có thể giúp bạn tạo và chạy một project React mà không cần cấu hình phức tạp.
- Cú pháp tạo project react typescript: `npm create vite@latest bsc-react -- --template react-ts`

Browser Extension

- [React Developer Tools](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)

### JSX

Nhìn thoáng qua, JSX không khác nhiều so với HTML, nhưng thực chất là một cú pháp mở rộng của Javascript. Khi viết mã JSX, bạn có thể sử dụng các biểu thức Javascript bên trong nó, điều này làm cho nó trở nên cực kỳ mạnh mẽ.

Vì JSX là một phần của Javascript nên nó sử dụng chuẩn quy tắc đặt tên camelCase cho thuộc tính thay vì dùng tên thuộc tính gốc của HTML. Đối với các thuộc tính HTML bị trùng tên với từ khóa JavaScript sẽ được đổi tên. Ví dụ: class -> className, for -> htmlFor

```jsx
<h1 className="title">Hello World!!!<div>

<label htmlFor="username">Username</label>
<input type="text" id="username" />
```

- Dấu ngoặc nhọn {} cho phép bạn viết các biểu thức JavaScript bên trong JSX

```jsx
function Profile() {
  const user = { name: "Alice", imgUrl: "..." };
  return (
    <div>
      <h1>{user.name}</h1>
      <img className="avatar" src={user.imageUrl} />
    </div>
  );
}
```

- Trong JSX, bạn phải bao bọc tất cả các phần tử trong một phần tử cha duy nhất.
- Có thể sử dụng thẻ Fragment để bao bọc các phần tử con mà không cần thêm thẻ div.

```jsx
// Đúng
<div>
  <h1>Hello World!!!</h1>
  <h1>Hello World!!!</h1>
</div>

// Đúng
<>
  <h1>Hello World!!!</h1>
  <h1>Hello World!!!</h1>
</>

// Sai
<h1>Hello World!!!</h1>
<h2>Hello World!!!</h2>
```

### Conditional rendering

- Conditional rendering trong React là quá trình hiển thị các phần giao diện người dùng khác nhau dựa trên điều kiện nào đó. Điều này cho phép bạn quyết định xem phần nào của giao diện nên được hiển thị dựa trên trạng thái hoặc dữ liệu của ứng dụng.

- Sử dụng if else

```jsx
function App() {
  const isLoggedIn = true;

  if (isLoggedIn) {
    return (
      <div>
        <h1>Welcome back</h1>
        <button>Logout</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Please login</h1>
      <button>Login</button>
    </div>
  );
}
```

- Sử dụng toán tử 3 ngôi

```jsx
function App() {
  const isLoggedIn = true;

  return (
    <div>{isLoggedIn ? <button>Logout</button> : <button>Login</button>}</div>
  );
}
```

- Sử dụng &&

```jsx
function App() {
  const isLoggedIn = true;
  return (
    <div>
      {isLoggedIn && <button>Logout</button>}
      {!isLoggedIn && <button>Login</button>}
    </div>
  );
}
```

### List and keys

- List là một tính năng cho phép bạn hiển thị danh sách các phần tử tương tự nhau trong một cấu trúc dữ liệu. Ví dụ: danh sách các bài viết, danh sách các sản phẩm, danh sách các người dùng,...
- Dùng phương thức map để chuyển đổi mảng dữ liệu của bạn thành một mảng các phần tử JSX hoặc Component.

```jsx
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

function App() {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

- Giá trị của key phải là một chuỗi hoặc số xác định duy nhất cho mỗi phần tử trong mảng. Tránh sử dụng chỉ số của mảng (index) làm key trừ khi danh sách đó không bao giờ thay đổi hoặc sắp xếp lại.

- Cần cung cấp thuộc tính key cho mỗi phần tử trong mảng để React có thể xác định xem phần tử nào đã thay đổi, thêm hoặc xóa. Nếu không có key, React sẽ không thể biết chắc chắn phần tử nào đã thay đổi, thêm mới hoặc bị xóa. Điều này dẫn đến việc React phải cập nhật lại toàn bộ danh sách mỗi khi render, dù chỉ một vài phần tử thay đổi.

### Events

- React cho phép bạn thêm các trình xử lý sự kiện (Event handlers) vào JSX.
- Các trình xử lý sự kiện trong React được đặt tên bằng camelCase. Ví dụ: onClick, onChange, onSubmit,...
- Các hàm chức năng chỉ được truyền vào trình xử lý sự kiện, không được gọi.

```jsx
<button onClick={handleClick}>
  Clicker
</button>

<input onChange={handleChange}>
```

- Trong trường hợp nếu hàm chức năng cần nhận vào tham số, ta viết dạng nội tuyến bằng cách sử dụng arrow function.

```jsx
const showMessage = (message) => {
  alert(message);
};

return <button onClick={() => showMessage("Hello React")}>Show Message</button>;
```

- Tất cả sự kiện đều nhận được một đối số là event, nó là một đối tượng có các thuộc tính và phương thức giúp xử lý sự kiện. Quan trọng nhất là `event.currentTarget` là một tham chiếu đến phần tử DOM mà sự kiện được gọi.

```jsx
const handleChange = (event) => {
  console.log(event.currentTarget.value);
};

return <input onChange={handleChange} />;
```

### Props

- Các component trong React sử dụng props để giao tiếp với nhau.
- Props là một đối tượng (object) chứa các thuộc tính (properties) được truyền từ một component cha (parent component) đến một component con (child component). Các props này có thể là bất kỳ giá trị nào, từ kiểu dữ liệu đơn giản như chuỗi (string) hoặc số (number), cho đến các đối tượng phức tạp hơn.

```jsx
// Truyền props cho component con
function App() {
  return <Welcome name="John" age={30} />;
}

// Nhận props trong component con
function Welcome(props) {
  return (
    <div>
      My name is {props.name} and I am {props.age} years old.
    </div>
  );
}
```

- Ngoài ra bởi vì props là một object, nên ta có thể sử dụng object destructuring để lấy các thuộc tính cần thiết

```jsx
function Welcome({ name, age }) {
  return (
    <div>
      My name is {name} and I am {age} years old.
    </div>
  );
}
```

- Trong React, bạn có thể truyền một hàm (function) làm prop cho một component. Khi một component nhận được một hàm làm prop, nó có thể gọi hàm đó và truyền các tham số vào để thực hiện các hành động cụ thể.

  - Giúp gọi tới hàm xử lý của component cha khi một sự kiện xảy ra trong component con.
  - Giúp truyền dữ liệu từ component con lên component cha.

```jsx
// Truyền hàm xử lý sự kiện cho component con
function App() {
  const handleShowMessage = (message) => {
    alert(message);
  };
  return <Welcome onShowMessage={handleShowMessage} />;
}

// Nhận hàm xử lý sự kiện trong component con
function Welcome({ onShowMessage }) {
  const handleClick = () => {
    onShowMessage("Hello");
  };
  return <button onClick={handleClick}>Show message</button>;
}
```

- Trong React, prop children là một prop đặc biệt cho phép truyền các thành phần (components) hoặc các phần tử (elements) làm con của một component.

```jsx
function ParentComponent() {
  return (
    <ChildComponent>
      <h1>Hello</h1>
      <p>This is a child component.</p>
    </ChildComponent>
  );
}

function ChildComponent(props) {
  return (
    <div>
      <h2>Child Component</h2>
      {props.children}
    </div>
  );
}
```

- Một số lưu ý:
  - Props là chỉ đọc (read-only), không thể thay đổi giá trị của props trong component con.
  - Nếu một component nhận được một prop không được truyền vào, giá trị của prop đó sẽ là undefined. Để tránh việc này, ta có thể khai báo giá trị mặc định cho prop bằng cách sử dụng cú pháp sau: `function Welcome({ name = "John" })`

### State

- Một số nội dung trên màn hình sẽ cập nhật theo tương tác của người dùng. Ví dụ như khi người dùng click vào button "Show" sẽ hiển thị nội dung ẩn, khi click vào button "Buy" sẽ đưa sản phẩm vào giỏ hàng,...Component cần lưu trữ trạng thái của nó để biết được nội dung hiển thị là gì, sản phẩm nào đã được thêm vào giỏ hàng. Trong React dữ liệu để lưu trữ trạng thái của component được gọi là State.
- Thuật ngữ:
  - render: là quá trình component tạo các thành phần UI.
  - re-render: là quá trình component được chạy lại để tạo lại các thành phần UI.

##### Khai báo một biến bình thường trong component là không đủ

- Component Couter khởi tạo một biến count với giá trị là 0, nhấn vào nút Increment sẽ thay đổi giá trị của count bằng cách tăng lên một đơn vị. Tuy nhiên giao diện sẽ không hiển thị giá trị của count thay đổi.
  - Các thay đổi đối với biến cục bộ sẽ không kích hoạt re-render, nghĩa là khi nhấn vào nút Increment, giá trị của count sẽ được tăng lên một đơn vị nhưng không có gì thay đổi trên giao diện.
  - Các biến cục bộ không được chia sẻ giữa các lần re-render, nghĩa là mỗi lần render, biến count sẽ được khởi tạo lại về giá trị 0.

```jsx
function Counter() {
  let count = 0;
  const handleIncrement = () => {
    count++;
    console.log(count);
  };
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}
```

##### Để cập nhật một component với dữ liệu mới, hai điều cần phải xảy ra:

- Dữ liệu được giữ lại giữa các lần render.
- Kích hoạt để component được re-render lại với dữ liệu mới.

##### Hook `useState`

- `useState` là một React Hook cung cấp cho chúng ta hai điều trên:

  - Một biến trạng thái (state) để giữ lại dữ liệu giữa các lần render.
  - Một hàm setter để cập nhật giá trị của state và kích hoạt re-render lại component.

- Cú pháp: `const [count, setCount] = useState(0)`. useState nhận vào một tham số là giá trị khởi tạo của state, và trả về một mảng gồm 2 phần tử: giá trị của state và hàm setter để cập nhật giá trị của state. Cú pháp [count, setCount] được gọi là array destructuring, cho phép đọc giá trị của mảng theo thứ tự.

```jsx
function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}
```

- Một số quy tắc khi sử dụng hooks:
  - Chỉ gọi hooks từ React function component. Không được gọi hooks từ các hàm bình thường.
  - Chỉ gọi hooks ở cấp độ cao nhất của component. Không được gọi hooks trong các vòng lặp, các hàm con hay các hàm xử lý sự kiện.

##### Hook useReducer

- Hook `useReducer` là một hook giúp quản lý state cho component. Nó giống với hook `useState` nhưng thay vì quản lý một biến state đơn lẻ, `useReducer` quản lý một biến state phức tạp hơn, có thể là một object hoặc một mảng.
- Cú pháp: `const [state, dispatch] = useReducer(reducer, initialState)`
  - Tham số reducer là một hàm nhận vào 2 tham số là state hiện tại và action, trả về state mới. Action là một object chứa các thuộc tính type và payload. Type là một chuỗi định danh cho action, payload là dữ liệu được truyền vào để thực hiện action.
  - Tham số initialState là giá trị khởi tạo cho state.
  - Kết quả trả về là một mảng gồm 2 phần tử: state hiện tại và hàm dispatch.

```jsx
// Khởi tạo state
const initialState = { count: 0 };

// Khai báo reducer
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </>
  );
}
```

### State vs Props

| State                                                              | Props                                                                      |
| ------------------------------------------------------------------ | -------------------------------------------------------------------------- |
| State được sử dụng để lưu trữ và quản lý trạng thái của component. | Props được sử dụng để truyền dữ liệu giữa các component                    |
| State được tạo và quản lý bởi component thông qua hook `useState`  | Props được truyền vào component thông qua thuộc tính                       |
| State chỉ có thể được thay đổi bởi component tạo ra nó             | Props là chỉ đọc, không thể thay đổi giá trị của props trong component con |
| State thay đổi sẽ gây ra việc re-render component                  | Props thay đổi sẽ gây ra việc re-render component                          |

### Effect

- Khi xây dựng giao diện, một số component cần tương tác với các hệ thống bên ngoài React. Ví dụ khi một component được hiển thị ta muốn gọi API để lấy dữ liệu từ server, thao tác với DOM,... Những hành động này được gọi là side effect (hiệu ứng phụ).

- Trước khi nói về Effect, ta cần nhớ lại hai khái nhiệm trong component:

  - Rendering: là quá trình bạn sử dụng props và state và trả về jsx để hiển thị giao diện người dùng. Quá trình này chỉ đơn thuần tính toán và trả về kết quả mà không làm gì khác.
  - Event handlers: là quá trình bạn viết các hàm để xử lý các hành động do người dùng gây ra (ví dụ nhấp chuột, nhập liệu,...). Xử lý sự kiện có thể đơn thuần là cập nhật một input hoặc có thể chứa các side effect như gọi API mua hàng.

- Trong một số trường hợp ta cần nhiều hơn như thế, bạn hãy xem xét trường hợp một component `Cart` khi được hiển thị, nó phải gọi API lấy những sản phẩm đã được thêm vào giỏ hàng và hiển thị ra cho người dùng thấy. Việc gọi API như đã đề cập ở trên là một side effect (không thuộc về React) vì vậy nó không thể xảy ra trong quá trình render. Tuy nhiên cũng không có một sự kiện cụ thể vào như là nhấp chuột để gây ra việc hiển thị những sản phẩm đó.

- Effect là cơ chế cho phép bạn thực hiện các side effect được gây ra bởi quá trình component hiển thị mà không cần thông qua một sự kiện cụ thể.
  - Thêm sản phẩm vào giỏ hàng là một sự kiện vì nó được gây ra trực tiếp bởi người dùng nhấp chuột vào nút "Thêm".
  - Tuy nhiên việc thiết lập hiển thị sản phẩm trong giỏ hàng là một "Effect" vì nó không được gây ra bởi người dùng mà là do quá trình hiển thị component `Cart`.

##### Hook useEffect

- React cung cấp hook `useEffect` để tạo ra các Effect trong component.
- Cú pháp: `useEffect(callback, dependencies)`

  - Tham số thứ nhất là một callback function chứa các side effect.
  - Tham số thứ hai là một mảng chứa các giá trị phụ thuộc (dependencies).

- Dựa vào tham số thứ 2 của useEffect mà ta sẽ chia ra làm 3 trường hợp sử dụng:

  - `useEffect(callback, [])` với phụ thuộc là một mảng rỗng, thì useEffect sẽ chỉ gọi hàm `callback` một lần duy nhất sau khi component render lần đầu. Thường được sử dụng để thực hiện các tác vụ như lấy dữ liệu từ API.

  ```jsx
  function MyComponent() {
    const [data, setData] = useState([]);

    // Sử dụng hook useEffect để fech data khi component được khởi tạo
    useEffect(() => {
      async function fetchData() {
        const response = await axios.get(`https://example.com/api`);
        setData(response.data);
      }

      fetchData();
    }, []);

    return (
      <div>
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    );
  }
  ```

  - `useEffect(callback, [a, b])` với phụ thuộc là một mảng chứa nhiều giá trị, thì useEffect sẽ gọi hàm `callback` sau khi component render lần đầu và sau các lần render tiếp theo nếu một trong các giá trị trong mảng thay đổi. Thường được sử dụng để đọc giá trị mới thay đổi của state hoặc prop và thực hiện các tác vụ phụ thuộc vào giá trị đó.

    - Ví dụ: khi giá trị của state searchTerm thay đổi, ta cần lấy dữ liệu mới từ API.

    ```jsx
    function MyComponent() {
      const [searchTerm, setSearchTerm] = useState("");
      const [data, setData] = useState([]);

      // Sử dụng hook useEffect để gọi hàm fetch data khi component khởi tạo và khi giá trị searchTerm thay đổi
      useEffect(() => {
        async function fetchData() {
          const response = await axios.get(
            `https://example.com/api?search=${searchTerm}`
          );
          setData(response.data);
        }

        fetchData();
      }, [searchTerm]);

      return (
        <div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <ul>
            {data.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      );
    }
    ```

    - Ví dụ: Theo dõi giá trị của props để thực hiện một hành động nào đó

    ```jsx
    function MyComponent({ name }) {
      // Sử dụng hook useEffect để theo dõi giá trị của props name
      useEffect(() => {
        alert(`Giá trị mới của prop name: ${name}`);
      }, [name]);

      return <div>MyComponent</div>;
    }
    ```

  - `useEffect(callback)` với mảng phụ thuộc không dược khai báo, thì useEffect sẽ gọi hàm `callback` mỗi khi component render. Trường hợp này không được khuyến khích sử dụng vì có thể gây ra các vấn đề về hiệu suất hoặc vòng lặp vô hạn nếu bạn không cẩn thận. Vì vậy, bạn nên truyền một mảng phụ thuộc là array rỗng hoặc array chứa các giá trị mà bạn muốn hàm callback của useEffect chạy lại khi chúng thay đổi.

##### Effect cleanup

- Một số side effect cần phải được dọn dẹp trước khi component bị xóa khỏi DOM, để tránh bị memory leak. Ví dụ: trong callback effect bạn có thực hiện thao tác đăng ký sự kiện, bạn cần phải hủy đăng ký sự kiện đó trước khi component bị xóa khỏi DOM. Để làm điều này, bạn cần sử dụng effect cleanup. Nếu hàm callback của `useEffect(callback, deps)` return về một hàm, thì nó được coi là effect cleanup.

- Effect cleanup hoạt động như sau:
  - Sau khi render lần đầu, useEffect() gọi hàm callback và return về hàm cleanup.
  - Trong các lần render tiếp theo, nếu mảng phụ thuộc bị thay đổi, trước khi gọi lại hàm callback thì useEffect sẽ gọi hàm cleanup đã được hàm callback return về ở lần thực thi trước đó. Mục đích của hàm cleanup này là để giải phóng các tài nguyên được sử dụng trong hàm callback của useEffect trước đó.
  - Cuối cùng, trước khi component bị huỷ bỏ, useEffect gọi hàm cleanup của lần thực thi cuối cùng.

```jsx
useEffect(() => {
  // Các trường hợp cần thực hiện effect cleanup để tránh memory leak như event listeners, timers, subscriptions, websockets,...

  const handleMouseMove = (event) => {
    console.log(event.clientX, event.clientY);
  };
  document.addEventListener("mousemove", handleMouseMove);

  const timer = setInterval(() => {
    console.log("Hello");
  }, 1000);

  return () => {
    document.removeEventListener("mousemove", handleMouseMove);

    clearInterval(timer);
  };
}, []);
```

- Xử lý race condition khi gọi API. Ví dụ trường hợp khi người dùng chuyển trang một cách nhanh chóng, mỗi lần giá trị thay đổi sẽ gọi API để lấy dữ liệu mới. Tuy nhiên, do việc gọi API là một tác vụ bất đồng bộ, nên có thể xảy ra trường hợp API request sau cùng trả về trước request trước đó, dẫn đến việc hiển thị dữ liệu không chính xác. Ta cần phải hủy bỏ request cũ khi có request mới được gọi bằng cách sử dụng effect cleanup.

```jsx
const [posts, setPosts] = useState([]);
const [page, setPage] = useState(1);

useEffect(() => {
  const controller = new AbortController();

  async function fetchPosts() {
    const response = await axios.get(`https://example.com/api/posts`, {
      signal: controller.signal,
      params: { page, limit: 10 },
    });

    setPosts(response.data);
  }

  fetchPosts();

  return () => {
    controller.abort();
  };
}, [page]);
```

##### Component lifecycle

- Một component trong React sẽ trải qua các giai đoạn khác nhau trong quá trình hoạt động.

  - Mounting: là giai đoạn khi component được khởi tạo và hiển thị lần đầu tiên trên DOM.
  - Updating: là giai đoạn khi component được cập nhật thông qua việc thay đổi props hoặc state.
  - Unmounting: là giai đoạn khi component bị xóa khỏi DOM.

- Việc nắm được các giai đoạn này sẽ giúp bạn hiểu rõ hơn về cách hoạt động của React và sử dụng useEffect một cách hiệu quả.
  ![useEffect](https://github.com/user-attachments/assets/ba01c47e-b236-489b-9dfd-089ea07abc4a)

### Refs

- Thông thường dể quản lý việc hiển thị trong component ta thường dùng state. Tuy nhiên trong một số trường hợp ta cần truy cập trực tiếp đến các phần tử DOM để thực hiện một số thao tác như focus vào input, thay đổi kích thước của một phần tử, lấy giá trị của một phần tử,...
- Refs là một cơ chế cho phép ta truy cập trực tiếp đến các phần tử DOM hoặc các component trong React.

##### Hook useRef

- Cú pháp: `const ref = useRef(initialValue)`

  - Tham số initialValue là giá trị khởi tạo cho ref.
  - Kết quả trả về là một đối tượng ref.

- Để truy cập đến phần tử DOM:

```jsx
function MyComponent() {
  // Khai báo một ref
  const inputRef = useRef();

  useEffect(() => {
    // Sử dụng ref để thao tác với DOM.
    inputRef.current.focus();
  }, []);

  // Sử dụng ref để tham chiếu đến phần tử DOM
  return <input type="text" ref={inputRef} />;
}
```

- Ngoài ra, refs còn được sử dụng để lưu trữ giá trị của một biến trong component. Điểm khác biệt so với state là refs không gây ra việc render lại component khi giá trị của biến thay đổi.

```jsx
function MyComponent() {
  // Khai báo một ref
  const countRef = useRef(0);
  // Khai báo một state
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => countRef.current++}>
        Ref: {countRef.current}
      </button>
      <button onClick={() => setCount(count + 1)}>State: {count}</button>
    </div>
  );
}
```

#### Custom Hooks

- Custom hooks là những hooks mà bạn tự tạo ra để thực hiện một chức năng riêng biệt. Đây là một kĩ thuật để chia sẻ logic được tạo lại giữa các component. Nó giúp tái sử dụng code và giảm sự lặp lại trong ứng dụng của bạn.
- Custom hooks thực chất là các hàm bắt đầu bằng từ khóa `use` và có thể gọi đến các hooks khác (Các hooks mặc định của React như useState, useEffect, useRef,... hoặc các custom hooks của bạn). VD: `useCounter`, `useDebounce`, ...

```jsx
function useCounter(initialCount = 0) {
  const [count, setCount] = useState(initialCount);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return { count, increment, decrement };
}

function Counter() {
  const { count, increment, decrement } = useCounter(0);

  return (
    <>
      Count: {count}
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </>
  );
}
```

### Performance hooks

React cung cấp một số function và hooks để tối ưu hiệu suất của component.

#### Memo

`memo` là một hàm dùng để tối ưu hóa hiệu suất của các component bằng cách ghi nhớ (memoization) component đó, giúp tránh render lại không cần thiết khi các props của component không thay đổi. Điều này đặc biệt hữu ích trong những ứng dụng lớn, nơi mà việc render lại các component không cần thiết có thể gây ra hiệu suất chậm chạp.

Cú pháp: `const MemoizedComponent = memo(Component, compareFn?)`

- Component: là component mà bạn muốn memo.
- compareFn: Một hàm chấp nhận hai đối số props trước đó và props mới của component. Nếu hàm này trả về true, component sẽ không được render lại. Thông thường bạn sẽ không cần chỉ định hàm này, React sẽ so sánh từng prop với Object.is.

Ví dụ: skip re-render khi props không thay đổi

```jsx
const Profile = memo(({ name }) => {
  return <div>Hello, {name}</div>;
});
Profile.displayName = "Profile";
```

Ví dụ: Chỉ định một hàm so sánh props

```jsx
const Chart = memo(
  ({ points }) => {
    return <div>...</div>;
  },
  (prevProps, nextProps) => {
    return (
      prevProps.points.length === nextProps.points.length &&
      prevProps.points.every(
        (point, index) => point.x === nextProps.points[index].x
      )
    );
  }
);
Chart.displayName = "Chart";
```

#### useCallback

`useCallback` là một hook trong React giúp bạn tối ưu hóa hiệu suất của các component bằng cách ghi nhớ (memoization) các định nghĩa hàm giữa các lần render. Việc này giúp tránh tạo lại một hàm mới trong mỗi lần render, trừ khi các dependencies của hàm đó thay đổi. Điều này đặc biệt hữu ích khi bạn truyền hàm đó làm prop xuống các component con hoặc sử dụng nó trong các hook khác (như useEffect) mà phụ thuộc vào hàm đó.

Cú pháp: `const memoizedCallback = useCallback(fn, dependencies)`

- fn: là hàm mà bạn muốn được ghi nhớ
- dependencies: tương tự như useEffect, là một mảng chứa các giá trị mà hàm fn phụ thuộc vào. Trong các lần render tiếp theo, nếu các giá trị trong mảng không thay đổi, hàm fn sẽ không được tạo lại.

Nếu bạn truyền một hàm vào một component con, bạn cần sử dụng useCallback để tránh component con render lại mỗi lần render component cha.

```jsx
function Account({ userId, ...props }) {
  // Nói cho React ghi nhớ hàm handleSubmit giữa các lần render nếu userId không thay đổi
  const handleSubmit = useCallback(() => {
    // Gọi API để lưu thông tin người dùng
  }, [userId]);

  return (
    <div>
      ...
      <UserForm onSubmit={handleSubmit} />
    </div>
  );
}

// Skip re-render khi props không thay đổi
const UserForm = memo(({ onSubmit }) => {
  return <form onSubmit={onSubmit}>...</form>;
});
```

Nếu bạn cần cập nhật state dựa vào state trước đó từ một callback đã được ghi nhớ, bạn cần đặt state đó vào mảng phụ thuộc của useCallback. Hoặc bạn có thể loại bỏ state ra khỏi mảng phụ thuộc bằng cách truyền một hàm cập nhật thay khi cập nhật state.

```jsx
function Cart() {
  const [items, setItems] = useState([]);

  const addItem = useCallback(
    (item) => {
      setItems([...items, item]);
    },
    [items]
  );

  const removeItem = useCallback((item) => {
    setItems((items) => items.filter((i) => i.id !== item.id));
  }, []);
}
```

Nếu bạn cần gọi một hàm bên trong useEffect, bạn cần đặt hàm đó vào mảng phụ thuộc của useEffect. Tuy nhiên, nó sẽ khiến useEffect gọi lại mỗi lẩn render. Để giải quyết vấn đề này, bạn có thể bọc hàm mà bạn cần gọi từ một Effect vào useCallback:

```jsx
function Posts({ userId }) {
  const [posts, setPosts] = useState([]);

  const fetchPosts = useCallback(() => {
    // Gọi API để lấy dữ liệu
  }, [userId]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);
}
```

Nếu bạn đang viết một custom hook, lời khuyên là nên bọc bất kì hàm nào mà nó trả về vào useCallback.

```jsx
function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const on = useCallback(() => setValue(true), []);
  const off = useCallback(() => setValue(false), []);
  const toggle = useCallback(() => setValue((value) => !value), []);

  return [value, { on, off, toggle }];
}
```

#### useMemo

`useMemo` là một Hook trong React cho phép bạn ghi nhớ kết quả của một phép tính giữa các lần render. Điều này giúp tránh tính toán lại giá trị mà không cần thiết giữa các lần render.

Cú pháp: `const memoizedValue = useMemo(calculateValue, dependencies)`

- calculateValue: là hàm tính toán và trả về một giá trị mà bạn muốn ghi nhớ.
- dependencies: tương tự như useEffect, là một mảng chứa các giá trị được sử dụng trong hàm calculateValue. Nếu các giá trị trong mảng không thay đổi, kết quả của hàm calculateValue sẽ không được tính lại.

```jsx
function ExpensiveComponent({ chartData }) {
  const [count, setCount] = useState(0);

  const expensiveCalculation = useMemo(() => {
    // Tính toán giá trị tốn kém
  }, [chartData]);
}
```

### Context

- Thông thường, ta sẽ dùng `props` để truyền dữ liệu từ component cha sang component con. Tuy nhiên, việc truyền props có thể trở nên dài dòng và bất tiện nếu bạn phải truyền chúng thông qua nhiều lớp component ở giữa hoặc nếu nhiều component trong ứng dụng của bạn cần sử dụng một giá trị prop giống nhau.
  ![state-share](https://github.com/dannd4/bc55-react/assets/45675930/a5d522e6-f5eb-44de-81d2-cf91e605b0e6)

- Context cho phép component cha cung cấp dữ liệu cho toàn bộ component con bên dưới nó một cách trực tiếp mà không cần truyền thông qua các lớp component ở giữa.
  ![context](https://github.com/dannd4/bc55-react/assets/45675930/bdb656e8-cafb-4566-aa20-75f4acb546cd)

- Ví dụ: Trong ứng dụng của bạn có nhiều component cần truy cập vào dữ liệu người dùng hiện tại. Thay vì truyền dữ liệu người dùng thông qua props, bạn có thể sử dụng Context để cung cấp dữ liệu người dùng cho toàn bộ ứng dụng.

  - Tạo context:

  ```jsx
  // UserContext.js

  // Khởi tạo context
  const UserContext = React.createContext();

  // Khởi tạo provider
  export function CurrentUserProvider({ children }) {
    const [user, setUser] = useState(null);

    const login = (email, password) => {
      // Gọi API để đăng nhập
      const response = await axios.post(`https://example.com/api/login`, {
        email,
        password,
      });
      // Cập nhật biến trạng thái user với dữ liệu mới
      setUser(response.data);
    };

    const logout = () => {
      // Cập nhật biến trạng thái user với giá trị null
      setUser(null);
    };

    return (
      <UserContext.Provider value={{ user, login, logout }}>
        {children}
      </UserContext.Provider>
    );
  }

  // Tạo custom hook để sử dụng context
  export function useCurrentUser() {
    const context = useContext(UserContext);
    if (context === undefined) {
      throw new Error("useUser must be used within a UserProvider");
    }
    return context;
  }
  ```

  - Khai báo provider ở component cha

  ```jsx
  function App() {
    return (
      <CurrentUserProvider>
        <Login />
        <Profile />
      </CurrentUserProvider>
    );
  }
  ```

  - Sử dụng Context trong các component con

  ```jsx
  function Login() {
    const [values, setValues] = useState({ email: "", password: "" });

    const { login } = useCurrentUser();

    const handleSubmit = (event) => {
      event.preventDefault();
      login(values);
    };

    return <form onSubmit={handleSubmit}>...</form>;
  }

  function Profile() {
    const { user, logout } = useCurrentUser();

    return (
      <div>
        <p>Email: {user.email}</p>
        <button onClick={logout}>Logout</button>
      </div>
    );
  }
  ```

### Redux

Redux là một thư viện giúp quản lý global state cho các ứng dụng javascript, đặc biệt được biết đến khi kết hợp với React. Nó giúp bạn quản lý state của ứng dụng một cách dễ dàng và hiệu quả hơn.
Tương tự như context, Redux cũng giúp bạn truyền dữ liệu giữa các component mà không cần thông qua các lớp component ở giữa. Tuy nhiên, Redux cung cấp một cơ chế để quản lý state của toàn bộ ứng dụng, giúp bạn dễ dàng theo dõi và cập nhật state.
Redux gồm 3 thành phần chính:

- Store: Là nơi lưu trữ state của toàn bộ ứng dụng. Store trong Redux là một object chứa toàn bộ state tree của ứng dụng. Chỉ có duy nhất một store trong một ứng dụng Redux. Store cung cấp các phương thức để:
  - Truy cập state thông qua getState()
  - Cập nhật state thông qua dispatch(action)
  - Đăng ký listener thông qua subscribe(listener)
  - Hủy đăng ký listener được trả về bởi subscribe(listener)
- Action: Là một plain object có thuộc tính type để mô tả những gì đã xảy ra trong ứng dụng.
- Reducer: Là các hàm thực thi các thay đổi state (trong store) dựa theo các thông tin trong action. Reducer nhận hai tham số là state hiện tại và action, và trả về một state mới.

![Redux](https://redux.js.org/assets/images/ReduxDataFlowDiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif)

Để sử dụng Redux trong React, ta cần cài đặt các thư viện sau:

- `@reduxjs/toolkit` thư viện chính để làm việc với redux.
- `react-redux` thư viện giúp kết nối react với redux.

Các bước để sử dụng Redux trong React:

- Cấu hình redux store:

```jsx
// store.js
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({ reducer });

function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export default store;
```

- Kết nối redux store với react component:

```jsx
// index.js
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

- Sử dụng các hooks useSelector và useDispatch trong component để lấy state và dispatch action:

```jsx
// Counter.jsx
import { useSelector, useDispatch } from "react-redux";

function Counter() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
    </div>
  );
}
```

### Cách tổ chức code trong Redux

- Trong Redux, chia file là một phần quan trọng trong việc tổ chức code. Bạn có thể chia các thành phần của Redux thành các file riêng biệt để giữ cho code dễ đọc và dễ bảo trì hơn. Dưới đây là một số cách chia file trong Redux:

  - Reducers: Mỗi reducer quản lý một phần của state và cập nhật nó dựa trên loại action và thông tin được đưa ra. Để giữ cho code được tổ chức tốt, bạn có thể chia các reducers thành các file riêng biệt, mỗi file quản lý một phần của state. Ví dụ: nếu bạn có một ứng dụng quản lý các task, bạn có thể chia reducers thành file taskReducer.js để quản lý trạng thái của các task, file userReducer.js để quản lý trạng thái của người dùng.
  - Action Creators: Một quy ước phổ biến khác là thay vì tạo các object ở những nơi bạn dispatch các actions, bạn nên viết các hàm tạo ra các action đó. Mỗi hàm này được gọi là action creator. Ví dụ: nếu bạn có một ứng dụng quản lý các task, bạn có thể chia các action creator thành file taskActions.js để quản lý các action liên quan đến task, và file userActions.js để quản lý các action liên quan đến người dùng.

  ```jsx
  // taskActions.js
  export function addTodo(text) {
    return {
      type: "ADD_TODO",
      payload: text,
    };
  }

  // AddTodo.jsx
  import { addTodo } from "./taskActions";
  dispatch(addTodo("Use Redux"));
  ```

  - Action types: Một quy ước khác là đặt tên cho các action types. Điều này giúp bạn tránh các lỗi khi gõ tên action type. Ví dụ: nếu bạn có một ứng dụng quản lý các task, bạn có thể chia các action types thành file taskContants.js để quản lý các action types liên quan đến task, và file userContants.js để quản lý các action types liên quan đến người dùng.

  ```jsx
  // taskContants.js
  export const ADD_TODO = "ADD_TODO";
  export const REMOVE_TODO = "REMOVE_TODO";

  // taskActions.js
  import { ADD_TODO, REMOVE_TODO } from "./taskContants";

  export function addTodo(text) {
    return {
      type: ADD_TODO,
      payload: text,
    };
  }
  ```

## 18. Redux middleware

- Redux middleware là một lớp trung gian giữa việc dispatch một action và khi action đó được xử lý bởi reducer trong Redux. Middleware cho phép bạn mở rộng hoặc thay đổi hành vi của Redux trong quá trình xử lý action. Mỗi middleware được thiết kế để chỉnh sửa hoặc trung gian giữa các action đi qua nó, như vậy, middleware cho phép bạn thực hiện các chức năng bổ sung, chẳng hạn như ghi log hoặc thực hiện các xử lý bất đồng bộ, mà không làm thay đổi trực tiếp hành vi của Redux.

- Tự tạo một middleware:

```jsx
const loggerMiddleware = (store) => (next) => (action) => {
  console.log("Action: ", action);
  console.log("Previous state: ", store.getState());
  next(action);
  console.log("Next state: ", store.getState());
};

// store.js
import { configureStore } from "@reduxjs/toolkit";
import loggerMiddleware from "./middleware/loggerMiddleware";
import rootReducer from "./reducers";

const store = configureStore({
  reducer: rootReducer,
  // Mặc định Redux Toolkit sẽ thêm một số middleware vào store, để thêm middleware vào store, ta sử dụng cú pháp sau:
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware),
});

export default store;
```

- Trường hợp phổ biến nhất để sử dụng middleware là khi bạn muốn thực hiện các xử lý bất đồng bộ. Để thực hiện điều này, bạn có thể sử dụng một trong những thư viện middleware sau: `redux-thunk`, `redux-saga`, `redux-observable`.

  - `redux-thunk`: Cho phép dispatch một function thay vì một object. Function này sẽ nhận vào hai tham số là dispatch và getState.

  ```jsx
  // userActions.js
  // Thay vì return về một object, ta return về một function, function này nhận vào hai tham số là dispatch và getState
  // Ta có thể thực hiện các xử lý bất đồng bộ trong function này, sau đó dispatch một action bình thường để cập nhật state
  export const getUser = () => (dispatch, getState) => {
    try {
      dispatch({ type: "GET_USER_PENDING" });
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      dispatch({ type: "GET_USER_FULLFILED", payload: response.data });
    } catch (error) {
      dispatch({ type: "GET_USER_REJECTED", payload: error });
    }
  };

  // userReducer.js
  const initialState = {
    loading: false,
    data: null,
    error: null,
  };

  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_USER_PENDING":
        return {
          ...state,
          loading: true,
        };
      case "GET_USER_FULLFILED":
        return {
          ...state,
          loading: false,
          data: action.payload,
        };
      case "GET_USER_REJECTED":
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };

  // User.jsx
  import { getUser } from "./action";

  function User() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    useEffect(() => {
      dispatch(getUser());
    }, []);

    return (
      <div>
        {user.loading && <p>Loading...</p>}
        {user.error && <p>{user.error}</p>}
        {user.data && <p>{user.name}</p>}
      </div>
    );
  }
  ```

## 19. Redux toolkit

- Redux Toolkit là một thư viện cung cấp các công cụ và tiện ích hỗ trợ việc sử dụng Redux một cách hiệu quả. Redux Toolkit được thiết kế để giảm thiểu độ phức tạp và lặp lại trong việc viết Redux, nó bao gồm các hàm mà bạn có thể sử dụng để tạo các action, reducer, middleware, store, và các hàm khác mà bạn có thể sử dụng để tối ưu hóa việc viết mã của bạn.

- Tạo store khi chưa sử dụng Redux toolkit:

```jsx
// store.js
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import userReducer from "./reducers/userReducer";
import taskReducer from "./reducers/taskReducer";

const rootReducer = combineReducers({
  user: userReducer,
  task: taskReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
```

- Tạo store khi đã sử dụng Redux toolkit:

```jsx
// store.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import taskReducer from "./reducers/taskReducer";

// Mặc định redux hỗ trợ sẵn redux-devtools, redux-thunk nên không cần setup gì thêm.
const store = configureStore({
  reducer: {
    user: userReducer,
    task: taskReducer,
  },
});
```

- Hàm createSlice: là một hàm để tạo reducers và actions một cách đơn giản và hiệu quả.

```jsx
// userSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Khi sử dụng createSlice, bạn chỉ cần truyền vào một object bao gồm các thuộc tính:
// - name: tên của reducer
// - initialState: các giá trị khởi tạo ban đầu
// - reducers: các hàm reducers để xử lý các action tương ứng. createSlice sẽ tự động sinh ra các actions tương ứng và các reducers cho từng action đó.
const countSlice = createSlice({
  name: "count",
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
  },
});

export const { increment, decrement } = countSlice.actions;

export default countSlice.reducer;
```

- Hàm createAsyncThunk: là một hàm để tạo ra các action bất đồng bộ một cách đơn giản và hiệu quả.

```jsx
// userSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Khi sử dụng createAsyncThunk, bạn cần truyền vào 2 tham số:
// - name: tên của action
// - payloadCreator: hàm để thực hiện các xử lý bất đồng bộ

// Khi sử dụng createAsyncThunk, nó sẽ tự động sinh ra 3 action tương ứng:
// - pending: action này sẽ được dispatch khi hàm payloadCreator được gọi
// - fulfilled: action này sẽ được dispatch khi hàm payloadCreator được thực thi thành công và return về một giá trị
// - rejected: action này sẽ được dispatch khi hàm payloadCreator được thực thi thất bại và throw ra một lỗi
export const getUser = createAsyncThunk("user/getUser", async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
});

// Để sử dụng các action được sinh ra bởi createAsyncThunk, ta chỉ cần truyền vào thuộc tính extraReducers của createSlice
// Trong thuộc tính extraReducers, ta sẽ truyền vào một object builder, trong đó ta sẽ sử dụng các hàm addCase để xử lý các action được sinh ra bởi createAsyncThunk
const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    data: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(getUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
```
