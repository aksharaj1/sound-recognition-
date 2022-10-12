//https://teachablemachine.withgoogle.com/models/oD1bLEUam/

function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/oD1bLEUam/model.json", modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error,results){
if(error){
console.log(error);
}
else{
    console.log(results);
    random_number_r=Math.floor(Math.random()* 255) + 1;
    random_number_g=Math.floor(Math.random()* 255) + 1;
    random_number_b=Math.floor(Math.random()* 255) + 1;

    document.getElementById("result_label").innerHTML = "I can hear - "+ results[0].label;
    document.getElementById("result_confidence").innerHTML= "Accuracy - "+(results[0].confidence * 100).toFixed(2)+"%";
    document.getElementsById("result_label").style.color = "rgb("+random_number_r + "," + random_number_g + "," + random_number_b + ")";
    document.getElementsById("result_confidence").style.color = "rgb("+random_number_r + "," + random_number_g + "," + random_number_b + ")";

    image1=document.getElementsById("alien_1");
    image2=document.getElementsById("alien_2");
    image3=document.getElementsById("alien_3");
    image4=document.getElementsById("alien_4");

    if(results[0].label == ""){

    }
}
}





