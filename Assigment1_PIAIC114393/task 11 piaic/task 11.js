
let celsius= 25;
let fahrenheit= 70;

const fahrenheitHandler=(c)=>{
let f= (c*9/5) + 32;
document.write(c + '\u00B0'+ " C is "+ f+ '\u00B0'+" F"+ "<br>" );
}

const celsiusHandler=(f)=>{
    let c= (f-32) * 5/9;
    document.write(f + '\u00B0'+ " F is "+ c+ '\u00B0' +"C" );
    }
    

fahrenheitHandler(celsius);
celsiusHandler(fahrenheit);
