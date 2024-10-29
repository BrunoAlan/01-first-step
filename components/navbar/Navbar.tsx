// const temporalAsyncFunction = async () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Hello World!");
//     }, 1000);
//   });
// }

export const Navbar = async() => {
  // const text = await temporalAsyncFunction();

  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <span>Home</span>
      <div className="flex flex-1"/>
      <a className="mr-2" href="/about">About</a>
      <a className="mr-2" href="/contact">Contact</a>
      <a className="mr-2" href="/pricing" >Pricing</a>
    </nav>
  )
}