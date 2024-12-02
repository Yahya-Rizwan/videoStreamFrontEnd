// eslint-disable-next-line react/prop-types
function Container({children}) {
    return (
      <div className="width-full max-w-7xl mx-auto px-4">
          {children} 
      </div>
    )
  }
  
  export default Container;