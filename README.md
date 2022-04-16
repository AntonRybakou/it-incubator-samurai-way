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
    A(Redux/State.ts)--state-->B(Index.tsx);
        B-->C(&ltBrowserRouter/><br>&ltApp/><br>&ltBrowserRouter/>)
            C--.profilePage-->D(&ltProfile/>)
                D-->D1(&ltProfileInfo/>)
                D--.postsData-->D2(&ltMyPosts/>)
                    D2--postsData.map-->Post
            C--.dialogsPage-->E(&ltDialogs/>)
                E--.dialogsData.map-->E1[&ltDialogItem/>]
                E--.messagesData.map-->E2[&ltMessageItem/>]
            C-->F(&ltNews/>)
            C-->G(&ltMusic/>)
            C-->H(&ltSettings/>)
```