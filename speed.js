function calculate() {

    const speed=document.nodeValue

let points=0;

    if (speed<=70) {
        print("OK")
        
    }else{
        points = Math.floor((speed - 70) / 5);
         
        if (points > 12) {
            print('Lisence Suspended');
            
        }
    }
    
    
}