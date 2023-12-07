import slide1 from "./slide1.jpg";
import slide2 from "./slide2.jpg";
import slide3 from "./slide3.jpg";
import slide4 from "./slide4.jpg";
import slide5 from "./slide5.jpg";
import slide6 from "./slide6.png";
import slide7 from "./slide7.jpg";
import card1  from "./card1.jpg";
import card2  from "./card2.jpeg";
import card3  from "./card2.jpg";
import card4  from "./card4.jpg";
import card5  from "./card5.jpg";
import card6  from "./card6.jpg";
import card7  from "./card7.jpg";
import card8  from "./card8.jpg";
  




function Home() {
    return (
      <>
      

     
<div id="demo" class="carousel slide" data-bs-ride="carousel">

 
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="4"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="5"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="6"></button>

  </div>
  
  
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={slide1} alt="Los Angeles" class="d-block" style={{width:'100%'}}/>
    </div>
    <div class="carousel-item">
      <img src={slide2} alt="Chicago" class="d-block" style={{width:'100%'}}/>
    </div>
    <div class="carousel-item">
      <img src={slide3} alt="New York" class="d-block" style={{width:'100%'}}/>
    </div>
    <div class="carousel-item">
      <img src={slide4} alt="New York" class="d-block" style={{width:'100%'}}/>
    </div>
    <div class="carousel-item">
      <img src={slide5} alt="New York" class="d-block" style={{width:'100%'}}/>
    </div>
    <div class="carousel-item">
      <img src={slide6} alt="New York" class="d-block" style={{width:'100%'}}/>
    </div>
    <div class="carousel-item">
      <img src={slide7} alt="New York" class="d-block" style={{width:'100%'}}/>
    </div>
  </div>
  
 
  <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>
</div>


<div style={{padding: '0px',margin: '0px'}} class="container-fluid row">
  <div class="col text-center">
    <div style={{fontSize: '13px'}}  class="bg-warning p-2 my-4  ">TRENDIND OFFERS @ SBI</div>
   </div>

   <div class="col text-center">
    <div style={{fontSize: '13px'}}  class="bg-warning p-2 my-4  ">TRENDIND OFFERS @ SBI</div>
   </div>

   <div class="col text-center">
    <div style={{fontSize: '13px'}}  class="bg-warning p-2 my-4 ">ANNOUNCEMENTS</div>
   </div>
</div>




<div class="container-fluid row">

  <div class="col text-center ">
   
    <div class="card my-3" style={{width:'400px',border:'0px'}}>
    <img class="card-img-top" src={card1} alt="Card image" style={{width:'100%'}}/>
    <div class="card-body">
      <p class=" float-end"><a href="#">View All Offers</a></p>
      
    </div>
  </div>
  </div>

  <div class="col text-center">
    
   <div class="card my-3" style={{width:'400px',border:'0px'}}>
    <img class="card-img-top" src={card2} alt="Card image" style={{width:'100%'}}/>
    <div class="card-body">
      <p class=" float-end"><a href="#">Show All</a></p>
      
    </div>
  </div>
  </div>

  <div id="anounce" class="col">
  <ul class=" my-3 ">
    <li>SBI API Hub</li>
     <li>Amrit Kalash Deposit</li>
      <li>"SBI WECARE"  Deposit Scheme for Senior Citizens</li>
       <li>"Sarvottam" (Non-Callable) Term Deposit</li>
        <li>Doorstep Banking Services</li>
         <li>TO BLOCK DEBIT CARD</li>
         <li>"Sarvottam" (Non-Callable) Term Deposit</li>

  </ul>    

  </div>
</div>

<div  class="container-fluid row">
  <div  class="col ">
  <div class="card " style={{width:'400px',border:'none'}}>
    <div class="card-body">
      <h4 class="card-title text-center">Personal Banking</h4>
      <p class="card-text text-center">Savings, Loans, Deposits and Services
Instant Support Online & Offline</p>
     
    </div>
    <img class="card-img-top zoom" src={card3} alt="Card image" style={{width:'100%',borderRadius:'0px'}}/>
    <a href="#" style={{borderRadius:'0px'}} class="btn btn-primary my-3 py-2">Learn More</a>
  </div>
  </div>
  <div class="col">
  <div class="card" style={{width:'400px',border:'none'}}>
    <div class="card-body">
      <h4 class="card-title text-center">Gold Loans</h4>
      <p class="card-text text-center">at best and low interest rates.
Instant disbursement of money</p>
     
    </div>
    <img class="card-img-top zoom" src={card4} alt="Card image" style={{width:'100%',borderRadius:'0px'}}/>
    <a href="#" style={{borderRadius:'0px'}} class="btn btn-primary my-3 py-2">Learn More</a>
  </div>
  </div>
  <div class="col">
  <div class="card" style={{width:'400px',border:'none'}}>
    <div class="card-body">
      <h4 class="card-title text-center">Insta Loans</h4>
      <p class="card-text text-center">Apply instantly for consumer loan in
few minutes with CUB’s insta loan portal</p>
     
    </div>
    <img class="card-img-top zoom" src={card5} alt="Card image" style={{width:'100%',borderRadius:'0px'}}/>
    <a href="#" style={{borderRadius:'0px'}} class="btn btn-primary my-3 py-2">Learn More</a>
  </div>
  </div>
</div>
<hr class="text-black"></hr>

<div class="container-fluid row">
  <div class="col ">
  <div class="card" style={{width:'400px',border:'none'}}>
    <div class="card-body">
      <h4 class="card-title text-center">Corporate Banking</h4>
      <p class="card-text text-center">Experience Ease of Business.
Customized services and dedicated support.</p>
     
    </div>
    <img class="card-img-top zoom" src={card6} alt="Card image" style={{width:'100%',borderRadius:'0px'}}/>
    <a href="#" style={{borderRadius:'0px'}} class="btn btn-primary my-3 py-2">Learn More</a>
  </div>
  </div>
  <div class="col">
  <div class="card" style={{width:'400px',border:'none'}}>
    <div class="card-body">
      <h4 class="card-title text-center">Agri Loans</h4>
      <p class="card-text text-center">Loans for Buying Cattle, Farm Equipments
Irrigation system and Agriculture needs</p>
     
    </div>
    <img class="card-img-top zoom" src={card7} alt="Card image" style={{width:'100%',borderRadius:'0px'}}/>
    <a href="#" style={{borderRadius:'0px'}} class="btn btn-primary my-3 py-2">Learn More</a>
  </div>
  </div>
  <div class="col">
  <div class="card" style={{width:'400px',border:'none'}}>
    <div class="card-body">
      <h4 class="card-title text-center">Tech Banking</h4>
      <p class="card-text text-center">Online Banking, Demat, Wealth Management
Point of Sale, FASTag, Soverign Gold Bond etc.</p>
     
    </div>
    <img class="card-img-top zoom" src={card8} alt="Card image" style={{width:'100%',borderRadius:'0px'}}/>
    <a href="#" style={{borderRadius:'0px'}} class="btn btn-primary my-3 py-2">Learn More</a>
  </div>
  </div>
</div>

<div class="number"></div>
      </>
  
    );
  }
  
  export default Home;
  