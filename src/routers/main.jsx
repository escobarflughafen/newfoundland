import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import * as React from 'react'
import App from "../App"
import About from '../pages/about'
import Archive from '../pages/archive'
import Posts from '../pages/posts'
import Tools from '../pages/tools'
import { useEffect } from 'react'
import Post from '../pages/post'

export default function MainRouter() {

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<App />}
                >
                    
                    <Route
                        path="posts"
                        element={<Posts />}

                    >
                        <Route
                            path="preview/:id"
                            element={<Post />}
                            ></Route>

                    </Route>
                    <Route
                        path="posts/:id"
                        element={<Post />}
                    >

                    </Route>
                    <Route
                        path="archive"
                        element={<Archive />}

                    ></Route>
                    <Route
                        path="about"
                        element={<About />}

                    ></Route>
                    <Route
                        path="tools"
                        element={<Tools />}

                    ></Route>
                    <Route
                        path=""
                        element={(<Navigate to="/posts" />)}
                        />
                </Route>
                <Route
                    path="/index"
                    element={(<Navigate to="/" />)}
                />
            </Routes>
        </BrowserRouter>
    )
}