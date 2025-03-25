import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./App.css"
import { Button } from "@/components/ui/button"
import AppLayout from "./layouts/app-layout"
import LandingPage from "./pages/Landing"
import OnBoarding from "./pages/onboarding"
import Joblisting from "./pages/job-listing"
import Job from "./pages/job"
import PostJobs from "./pages/PostJobs"
import SavedJobs from "./pages/savedJobs"
import MyJobs from "./pages/my-jobs"
import { ThemeProvider } from "./components/ui/theme.provider"



const router =createBrowserRouter([
    {
      element:<AppLayout />,
      children:[
        {
           path:'/',
           element:<LandingPage />
        },
        {
           path:'/onboarding',
           element:<OnBoarding />
        },
        {
           path:'/jobs',
           element:<Joblisting />
        },
        {
           path:'/job/:id',
           element:<Job />
        },
        {
           path:'/post-job',
           element:<PostJobs />
        },
        {
           path:'/saved-jobs',
           element:<SavedJobs />
        },
        {
           path:'/my-jobs',
           element:<MyJobs/>
        },
      ]
    }
])

function App() {
  return (
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
  <RouterProvider router={router} />
</ThemeProvider>
  )
    
  
}

export default App
