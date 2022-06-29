import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import * as React from 'react'
import App from "../App"
import About from '../pages/about'
import Archives from '../pages/archives'
import Posts from '../pages/posts'
import Tools from '../pages/tools'
import { useEffect } from 'react'

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

                    ></Route>
                    <Route
                        path="archives"
                        element={<Archives />}

                    ></Route>
                    <Route
                        path="about"
                        element={<About />}

                    ></Route>
                    <Route
                        path="tools"
                        element={<Tools />}

                    ></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}