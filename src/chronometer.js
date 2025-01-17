class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  
    
  }

  start(printTimeCallback) {

    if (!this.intervalId) {
      
      this.intervalId = setInterval(() => {
       
        this.currentTime++;

        
        if (typeof printTimeCallback === "function") {
          
          printTimeCallback(this.currentTime);
        }
      }, 1000);
    }
  }

  getMinutes() {
    let minutes= Math.floor(this.currentTime/60)
   
    if(this.currentTime>=60){

      return minutes++
    }
    else {
      return 0 
    }
  
  }
  

  getSeconds() {
    const remainSeconds= this.currentTime % 60

    return remainSeconds
   
   
  
  }

  computeTwoDigitNumber(value) {

  let string = value.toString()

  if(string.length === 1){
    string= "0" + string;
  }

  return string.slice(-2);
  }

  stop() {
   
    clearInterval(this.intervalId)
  }

  reset() {
    
    return this.currentTime=0
  }

  split() {

const min = this.getMinutes();
const sec= this.getSeconds();
const minutes= this.computeTwoDigitNumber(min);
const seconds= this.computeTwoDigitNumber(sec)


return `${minutes}:${seconds}`      

    
 

  }
}
