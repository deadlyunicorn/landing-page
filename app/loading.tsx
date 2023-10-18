const LoadingPage = () => {

  return ( 
    <aside 
      className="
        flex flex-col items-center justify-center
        fixed left-0 top-0 bg-gradient-to-b overflow-hidden
        from-slate-950 to-black from-85%
        w-[100vw] h-[100vh] backdrop-blur-md"
      aria-label="loading page">

        <div className="h-2 
        relative
        overflow-hidden
        flex items-center 
        rounded-full
        w-[240px] ">
          <div className="
            w-full h-1 mx-4 rounded-full overflow-hidden relative">
            <div className="
            loading_bar w-10 h-1
            bg-slate-200 absolute rounded-full"/>
             
          </div>
         
        </div>
    
    </aside>
  )
}

export default LoadingPage;