function feedback(){
    let numOfFeedbacks = 75;
    
    if(numOfFeedbacks>15){
        console.log("Forward it");
        return;
    }
    else {
        console.log("Trash");
        return;
    }
    console.log('THis is the Unreachable State.');
}