
export default function NumberCounting() {

     // number counting
     let valueDispays = document.querySelectorAll(".num");
     let interval = 1000;
     valueDispays.forEach((valueDispay)=>{
         let startvalue = 0;
         let endValue =valueDispay.id;
     
         let duration = Math.floor(interval /endValue );
         let counter = setInterval(function(){
             startvalue += 1;
             valueDispay.textContent = startvalue;

             if( startvalue == endValue){
                 clearInterval(counter);
             }
         },duration);
 })
  return (
    <section className="numbers" id='about-as'>
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <h2 className='num' data-val="1287"  id='287'></h2>
                    <span>+</span>
                    <h5>SAVINGS</h5>
                </div>
                <div className="col-md-3">
                    <h2 className='num' data-val="5786" id='387'></h2>
                    <span>+</span>
                    <h5>PHOTOS</h5>
                </div>
                <div className="col-md-3">
                    <h2 className='num' data-val="1467" id='197'></h2>
                    <span>+</span>
                    <h5>ROCKETS</h5>
                </div>
                <div className="col-md-3">
                    <h2 className='num' data-val="1247" id='187'></h2>
                    <span>+</span>
                    <h5>GLOBES</h5>
                </div>
            </div>
        </div>
       </section>
  )
}
