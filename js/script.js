//stress, frustration, inner issue
var adjective = ["Bacterial", "Viral", "Acute", "Aseptic", "Benign", "Chronic", "Curative", "Palliative", "Radical", "Systemic", "Curative", "Advanced", "Asymptomatic", "Autoimmune", "Bariatric", "Clinical", "Congenital", "Contagious", "Curable", "Degenerative", "Febrile", "First-Degree", "Inactive", "Infectious", "Inflammatory", "Niggling", "Notifiable", "Opportunistic", "Primary", "Self-induced", "Self-inflicted", "Sporadic", "Suspected", "Waterborne", "Airborne"];
var noun1 = ["agent", "airline fare", "all-inclusive", "booking form", "business travel", "carrier", "charter", "coach tour", "code of conduct", "complimentary room", "concierge", "contractor", "courier", "customer", "day visitors", "double-room rate", "ecotour", "ethnic tour", "european plan", "fauna", "foreign flag", "human-made attraction:", "indirect air carrier", "land operator", "minimum land package", "motorcoach", "seasonality", "service provider", "shore excursion", "tour escort", "visitors", "waitlist", "wholesaler", "world heritage site", "zoning", "coffee addiction", "last minute editing", "bad hair day", "procrastination", "slow internet", "what to eat", "general uncertainty", "password forgotten", "crippling movie indecision", "after study black hole", "lack of skills", "leaving your pet at home", "devastating fear of missing out"];
var noun2 = ["stress", "pain", "mutation", "dizziness", "anxiety", "infection", "disorder", "frustration", "fever", "fatigue", "irritation", "discomfort", "numbness", "insomnia", "personal inner issues", "syndrom", "problem", "disease", "deformity", "panic"];
var desc = ["is a sexually transmitted condition, caused by contact with a person suffering from the active form of this malady.  It is characterised by compulsive blurb-fueled small talk at the office and a painless skin rash. The acute stage can be spotted by colleagues and diagnosed by physicians during the first days after onset of the symptoms. A characteristic nocturnal cough has been reported by neighbours. Thousands of algo-somatics users have found relief and comfort by exploring the possibility to buy the following products", "is a human condition, caused by contact with a person or animal suffering from the active infectious form of this malady. It is characterised by compulsive blurb-fueled small talk at the of", "test2"];
var ads =  [["https://images-na.ssl-images-amazon.com/images/I/61ddB4p4eJL._UX466_.jpg", "https://images-na.ssl-images-amazon.com/images/I/61q5ncS4cvL._SX522_.jpg", "https://images-na.ssl-images-amazon.com/images/I/81%2Bf-DOaI-L._SX522_.jpg"], ["https://images-na.ssl-images-amazon.com/images/I/61Tlygh4dQL._SX522_.jpg", "https://images-na.ssl-images-amazon.com/images/I/81ShO43RNCL._SL1500_.jpg", "https://images-na.ssl-images-amazon.com/images/I/51K82VXOzzL.jpg"], ["https://images-na.ssl-images-amazon.com/images/I/41shwew1khL._SX331_BO1,204,203,200_.jpg", "https://images-na.ssl-images-amazon.com/images/I/71C76jnVkeL._SL1208_.jpg", "https://images-na.ssl-images-amazon.com/images/I/715uKnA7uAL._SL1200_.jpg"]];
var outcome = 0; //yes: 1 stress, what: 2 frustration, 3: afraid inner issue
var loaded = false;



$(document).ready(function(){
    $("#content").load("html/landing.html");
    //for(let i=0;i<10;i++){
    //    console.log(generateSyndrome());
    //}
});

function changeScreen(str){
    //load page
    $("#content").load("html/"+str+".html");

    //if loading page
    if(str=="loading"){
        //change loading wheel strings
        $("#loading-wheel").ready(function(){
            $("#loading-wheel").html("Checked 17 of 22 providers");
            setTimeout(function(){
                $("#loading-wheel").html("Please wait, we are finding great fares for you");
            },2000);
            setTimeout(function(){
                $("#loading-wheel").html("Now checking 100.000 databases of airlines");
            },4000);

        });

        //change to result page
        setTimeout(function(){
            changeScreen("result");
            $("#syndrome").ready(function(){
                $("#syndrome").html(generateSyndrome());
                $("#result-text").html(getDescription());
                switch(outcome){
                    //stress
                    case 1: $("#result-img").attr("src", "img/stress.png");
                            break;
                    //frustration
                    case 2: $("#result-img").attr("src", "img/fear.png");
                            break;
                    //inner issue
                    case 3: $("#result-img").attr("src", "img/sadness.png");
                            break;
                }
                $("#ad-1").attr("src", ads[outcome-1][0]);
                $("#ad-2").attr("src", ads[outcome-1][1]);
                $("#ad-3").attr("src", ads[outcome-1][2]);
            });
        }, 600); //TODO 6000
    }
}

function getDescription(){
    let r = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    return desc[r];
}

function generateSyndrome(){
    return randElement(adjective) + " " + randElement(noun1) + " " + randElement(noun2);
}

function randElement(arr) {
    let min = 0;
    let max = arr.length - 1;
    return arr[Math.floor(Math.random() * (max - min + 1)) + min];
}

function clickRadio(id){
    switch(parseInt(id[0])){
        case 1: changeScreen("question2");
                break;
        case 2: changeScreen("question3");
                break;
        //bahamas
        case 3: changeScreen("question4");
                outcome = parseInt(id[1]);
                break;
        case 4: changeScreen("loading");
                break;
    }
}

function toggleAds(){
    $("#ads-container").toggle();
}
