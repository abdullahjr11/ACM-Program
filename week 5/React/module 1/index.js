/*
ReactDOM.render(<h1>HelloEveryone. Welcome to React world.</h1>,document.getElementById("root"))
*/
ReactDOM.render(
  <p>Hi, My name is Abdullah Javaid. I just started working on react.</p>,
  document.getElementById("root")
  
);
ReactDOM.render(<i>Add ordered list in an unordered lists.</i>,document.getElementById("list"))
ReactDOM.render(<ul><li>I am fond of:</li>
<ol><li>Football</li>
<li>Badminton</li></ol>
</ul>,document.getElementById("unorder"))

/*Nav bar like components*/
function MainContent(){
    return(
    <h1>I am learning React</h1>)
}
ReactDOM.render(
    <div>
        < nav/>
        <MainContent/>
    </div>,
    document.getElementById("nav")
)
/*
challenge is:
-create a new element
-give it a text context
-apply the class name
-render as a child
*/
const h4=document.createElement("h4")
h4.textContent="I don't know what's really happening ri ght NOW!"
h4.className="header"
document.getElementById("new").append(h4)

/* new challenge*/
const navbar = (
  <nav>
    <h1>Outakiro</h1>
    <ul>
      <li>About</li>
      <li>Pricing</li>
      <li>Contact</li>
    </ul>
  </nav>
)

ReactDOM.render(navbar, document.getElementById("navbar"));


