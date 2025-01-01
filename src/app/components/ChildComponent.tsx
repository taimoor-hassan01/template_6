const ChildComponent = (props: any) => {
    console.log(props)
      return (
      <div className="border p-5 w-3/12">

          <h1 className="text-5xl p-2">
              {props.furName}
          </h1>      


          <p className="text-3xl p-2">{props.image}</p>


          
      </div>
    )
  }
  
  export default ChildComponent