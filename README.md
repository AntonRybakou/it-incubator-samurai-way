# Samurai way (ts)

### Библиотеки:

- **antd**
- **axios**
- **classnames**
- **formik**
- **gh-pages**
- **jest**
- **react** and **@types/react**
- **react-dom** and **@types/react-dom**
- **react-redux** and **@types/react-redux**
- **react-router-dom** and **@types/react-router-dom**
- **react-scripts**
- **react-test-renderer** and **@types/react-test-renderer**
- **redux**
- **redux-form** and **@types/redux-form**
- **redux-thunk**
- **reselect**
- **typescript**
- **uuid** and **@types/uuid**


## Внутри приложения:
```mermaid
  graph TD;
    A(Index.tsx)-->B(&ltBrowserRouter/>);
        B-->C(&ltApp/>)
            C-->D(&ltProfile/>)
                D-->D1(&ltProfileInfo/>)
                D-->D2(&ltMyPosts/>)
                    D2-->Post
            C-->E(&ltDialogs/>)
                E-->E1(&ltDialogItem/>)
                E-->E2(&ltMessageItem/>)
            C-->F(&ltNews/>)
            C-->G(&ltMusic/>)
            C-->H(&ltSettings/>)
```