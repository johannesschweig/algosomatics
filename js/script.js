var adjective = ["Bacterial", "Viral", "Acute", "Aseptic", "Benign", "Chronic", "Curative", "Palliative", "Radical", "Systemic", "Curative", "Advanced", "Asymptomatic", "Autoimmune", "Bariatric", "Clinical", "Congenital", "Contagious", "Curable", "Degenerative", "Febrile", "First-Degree", "Inactive", "Infectious", "Inflammatory", "Niggling", "Notifiable", "Opportunistic", "Primary", "Self-induced", "Self-inflicted", "Sporadic", "Suspected", "Waterborne", "Airborne"];
var noun1 = ["agent", "airline fare", "all-inclusive", "booking form", "business travel", "carrier", "charter", "coach tour", "code of conduct", "complimentary room", "concierge", "contractor", "courier", "customer", "day visitors", "double-room rate", "ecotour", "ethnic tour", "european plan", "fauna", "foreign flag", "human-made attraction:", "indirect air carrier", "land operator", "minimum land package", "motorcoach", "seasonality", "service provider", "shore excursion", "tour escort", "visitors", "waitlist", "wholesaler", "world heritage site", "Zoning", "Coffee addiction", "Last minute editing", "Bad hair day", "Procrastination", "Slow internet", "What to eat", "General uncertainty", "Password forgotten", "crippling movie indecision", "After study black hole", "Lack of skills", "Leaving your pet at home", "devastating fear of missing out"];
var noun2 = ["stress", "pain", "mutation", "dizziness", "anxiety", "infection", "disorder", "frustration", "fever", "fatigue", "irritation", "discomfort", "numbness", "insomnia", "personal inner issues", "syndrom", "problem", "disease", "deformity", "panic"];
var loaded = false;

$(document).ready(function(){
    $("#content").load("html/landing.html");
    for(let i=0;i<10;i++){
        console.log(generateSyndrome());
    }
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
            },500);
            setTimeout(function(){
                $("#loading-wheel").html("Now checking 100.000 databases of airlines");
            },1500);

        });

        //change to result page
        setTimeout(function(){
            changeScreen("result");
            $("#syndrome").ready(function(){
                $("#syndrome").html(generateSyndrome());
            });
        }, 3000);
    }
}

function generateSyndrome(){
    return randElement(adjective) + " " + randElement(noun1) + " " + randElement(noun2);
}

function randElement(arr) {
    let min = 0;
    let max = arr.length - 1;
    return arr[Math.floor(Math.random() * (max - min + 1)) + min];
}
