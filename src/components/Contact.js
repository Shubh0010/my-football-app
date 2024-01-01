const Contact = () => {
  return (
    <div className="bg-green-100 pt-4 pl-4 pb-96">
      <h1 className="p-4 m-4 font-bold text-3xl">Email: shubhamnegi0010@gmail.com</h1>
      <form>
        <input className="p-4 m-4 border" type="text" placeholder="name"></input>
        <input className="p-4 m-4" type="text" placeholder="message"></input>
        <button className="border rounded-lg bg-gray-300 m-4 p-4" >Submit</button>
      </form>
    </div>
  )
}

export default Contact;