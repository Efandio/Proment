import DashboardHeader from "./components/DashboardHeader"


function App() {

  return (
    <div className="w-screen h-screen bg-BackgroundLight flex">
      
{/* Sidebar Container */}
        <div className="w-full lg:w-[20vw] h-full border border-r-LightStroke bg-CardAndSidebar">
          
        </div>


{/* Main Content Container */}
        <div className="w-full h-full">

        {/* Header */}
          <div className="w-full h-[8vh] lg:h-[10vh] px-10 bg-CardAndSidebar border-b border-b-LightStroke flex items-center">
            <DashboardHeader />
          </div>

        {/* Content */}
          <div>
            
          </div>

        </div>

    </div>
  )
}

export default App
