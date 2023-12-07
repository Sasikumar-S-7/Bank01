import { Outlet, Link } from "react-router-dom";
import logo from "./logo.png";
import yono from "./yono.png";
import "./Layout.css";



const Layout = () => {
  return (
    <>
      
      

      <nav class="navbar navbar-expand-sm">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><img src={logo} alt="logo"></img></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavbar">
                <ul class="navbar-nav mx-4 mx-auto">
          <li class="nav-item menu px-4">
            <a class="nav-link " href="#">Personal</a>
          </li>
          <li class="nav-item menu px-3">
            <a class="nav-link" href="#">NRI</a>
          </li>
          <li class="nav-item menu px-3">
            <Link class="nav-link" to="/">Home</Link>
          </li>   
           <li class="nav-item menu px-3">
            <Link class="nav-link" to="/Blogs">Transaction</Link>
          </li>    
           <li class="nav-item menu px-3">
            <Link class="nav-link"to="/Contact">Deposit</Link>
          </li>    
           <li class="nav-item menu px-3">
            <Link class="nav-link" to="/NoPage">Balance</Link>
          </li> 
          <li class="nav-item menu px-2">
            <a class="nav-link" href="#"><img src={yono} alt="yno"></img></a>
          </li>    
        </ul>
        <form class="d-flex">
          <input style={{borderRadius:'0px'}} class="form-control" type="text" placeholder="Search"/>
          <button  style={{borderRadius:'0px'}} class="btn btn-primary" type="button">Search</button>
        </form>
      </div>
    </div>
  </nav>

  <div style={{cursor: 'pointer',padding: '0px',margin: '0px'}} class="d-none d-sm-block">
    <div style={{padding:'0px',margin:'0px'}} class="row">
  <div style={{borderRight: '2px solid white'}} class="col text-center text-bg-primary py-2">Accounts</div>
  <div  style={{borderRight: '2px solid white'}} class="col text-center text-bg-primary py-2">Investments & Deposits</div>
  <div  style={{borderRight: '2px solid white'}} class="col text-center text-bg-primary py-2">Loans</div>
  <div style={{borderRight: '2px solid white'}} class="col text-center text-bg-primary py-2">Cards</div>
  <div style={{borderRight: '2px solid white'}} class="col text-center text-bg-primary py-2">Digital</div>
  <div style={{borderRight: '2px solid white'}} class="col text-center text-bg-primary py-2">Information & Services</div>
  </div>
</div>

      <Outlet />


      <footer>
  <div class="footer-menu ps-4">
    <ul style={{padding: '0px',margin: '0px'}} class="p-2">
      <li class="px-2">About Us </li>
      <li class="px-2">Subsidiaries</li>
      <li class="px-2">Corporate Governance</li>
      <li class="px-2">Investor Relations</li>
      <li class="px-2">SBI In the News</li>
      <li class="px-2">Contact Us</li>
      <li class="px-2">Careers</li>
      <li class="px-2">Site Map</li>
      <li class="px-2">Disclaimer</li>
    </ul>
  </div>


  <div style={{padding:'0px',margin:'0px'}} class="container-fluid row footer-li">
    <div class="col">
      <h5 class=" text-warning ps-4">Home</h5>
      <ul class="text-white">
      <li> Forex Card Rates</li>
          <li>  Interest Rates</li>
            <li> Download Forms</li>
            <li>  Corporate Social Responsibility</li>
             <li>Sustainability and Business Responsibility Policy</li>
            <li>  Bank Calendar</li>
            <li>  RTI 2005</li>
             <li> Grahak Setu</li>
            <li> Equal Opportunity Policy for PWD</li>
      </ul>
    </div>
     <div class="col">
        <h5 class=" text-warning ps-4">NRI</h5>
      <ul  class="text-white">
      <li>Accounts</li>
      <li>Investments</li>
      <li>Loans</li>
      <li>Remittances</li>
      <li>Information</li>
      <li>Privacy Notice and Consent Forms</li>
      </ul>
     </div>
      <div class="col">
         <h5 class=" text-warning ps-4">Personal</h5>
      <ul class="text-white">
            <li>Savings Account</li>
      <li>Loans</li>
      <li>Investments & Deposits</li>
      <li>Cards</li>
      <li>Digital</li>
      <li>Information & Services</li>
      </ul>
      </div>
       <div class="col">
          <h5 class=" text-warning ps-4">International Banking</h5>
          <ul class="text-white">
         <li> Banking</li>
    <li>Credit Finance</li>
    <li>Services</li>
      </ul>
       </div>
        <div class="col">
           <h5 class="  text-warning ps-4">Business</h5>
      <ul class="text-white">
         <li>  CAG & MCG</li>
      <li>Current Account</li>
      <li>SME - Deposits</li>
      <li>SME - Loans</li>
      <li>Information</li>

      </ul>
        </div>
         <div class="col">
      <h5 class=" text-warning ps-4">Wealth Management</h5>
      <ul class="text-white">
      <li>SBI Wealth</li>
      <li>Products</li>
      </ul>
         </div>
  </div>
</footer>
      
    </>
  )
};

export default Layout;