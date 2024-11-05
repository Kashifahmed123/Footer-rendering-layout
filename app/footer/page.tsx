import Link from "next/link"
export default function Footer (){
    return (
        <footer 
        style = {{
            backgroundColor: "Blue",
  color: "white",
  textAlign: "center",
  padding: "5px",
  marginTop: "bottom",
  width: "100%",
  height: "50px",
           }}
        >
          <Link href = "/" style = {{ color : "white"}}>For home page please click here</Link>
           <p>
           This site is drafted by Kashif Ahmed, active student of GIAIC, the IT Initative of Governer Sindh Kamran Khan Tessori</p> 
        
        </footer>
        
    )
}
