import { lazy, Suspense } from "react"
import { Route, Routes } from "react-router-dom";

const SignUp = lazy(() => import("./pages/signup/index"));


function App() {

  return (
    <Suspense fallback={<p>Loading</p>}>
      <Routes>
        <Route path="/" element={<SignUp />}/>
        <Route path="/login" element={<p>This is page of Login</p> }/>
        <Route path="/*" element={<p>Something went wrong</p>}/>
      </Routes>
    </Suspense>
  )
}

export default App
