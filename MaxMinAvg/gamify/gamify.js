var tigger = { 
    character: 'Tigger',
    greet: function(){
        console.log('The wonderful thing about Tiggers is Tiggers are wonderful things!')
    },
    pick_up: function(){
        console.log("No honey here. Go to the Bees's house !");
    }
};

var pooh = { character: 'Winnie the Pooh',
    greet: function(){
        console.log('Oh bother');
    },
    pick_up: function(){
        console.log("No honey here. Go to the Bees's house !");
    }
};

var piglet = { character: 'Piglet',
    greet: function(){
        console.log("Oh d-d-d-d-dear! I wasn't expecting company!");
    },
    pick_up: function(){
        console.log("No honey here. Go to the Bees's house !");
    }
};

var bees = { character: 'Bees',
    greet: function(){
        console.log('Oh bother');
    },
    pick_up: function(){
        player.honey = true;
        console.log('True means: You just picked up the honey for delivering');
    }
};

var owl = { character: 'Owl',
    greet: function(){
        console.log('owl is the most beautiful house ');
    },
    pick_up: function(){
        console.log("No honey here. Go to the Bees's house !");
    }
};

var robin = { character: 'Christopher Robin',
    greet: function(){
        console.log('robin is the most beautiful house ');
    },
    pick_up: function(){
        console.log("No honey here. Go to the Bees's house !");
    }
};

var rabbit = { character: 'Rabbit',
    greet: function(){
        console.log('rabbit is the most beautiful house ');
    },
    pick_up: function(){
        console.log("No honey here. Go to the Bees's house !");
    }
};

var gopher = { character: 'Gopher',
    greet: function(){
        console.log('gopher is the most beautiful house ');
    },
    pick_up: function(){
        console.log("No honey here. Go to the Bees's house !");
    }
};

var kanga = { character: 'Kanga',
    greet: function(){
        console.log('kanga is the most beautiful house ');
    },
    pick_up: function(){
        console.log("No honey here. Go to the Bees's house !");
    }
};

var eeyore = { character: 'Eeyore',
    greet: function(){
        console.log('eeyore is the most beautiful house ');
    },
    pick_up: function(){
        console.log("No honey here. Go to the Bees's house !");
    }
};

var heffalumps = { character: 'Heffalumps',
    greet: function(){
        console.log('heffalumps is the most beautiful house ');
    },
    pick_up: function(){
        console.log("No honey here. Go to the Bees's house !");
    }
};



tigger.north = pooh;

pooh.north = robin;
pooh.south =  tigger;
pooh.west = piglet;
pooh.east = bees;

piglet.north = owl;
piglet.east = pooh;

bees.north = rabbit;
bees.west = pooh;

robin.north = kanga;
robin.south = pooh;
robin.west = owl;
robin.east = rabbit;

rabbit.south = bees;
rabbit.west = robin;
rabbit.east = gopher;

gopher.west = rabbit;

owl.south = piglet;
owl.east = robin;

kanga.south = robin;
kanga.north = eeyore;

eeyore.south = kanga;
eeyore.east = heffalumps;

var player = {
    location: tigger,
    honey: false
};

var house_goal ='';
function move(direction){
    if (player.location[direction]==null){
        console.log('**********************************************');
        console.log('You can not go that way');
        console.log('**********************************************');
    }
    else{
        console.log('**********************************************');
        console.log("You are now at " +player.location[direction].character+ "'s house" );
        player.location=player.location[direction];
        player.location.greet();
        console.log('**********************************************');
    }
}

function mission(){
    var rand = parseInt(Math.random() * 10);
    var houses=[tigger, piglet, pooh, bees, owl, robin, rabbit, gopher, kanga, eeyore, heffalumps];
    console.log('$$$$$$$$$$$$$$$$$$$$$$_Misssion_$$$$$$$$$$$$$$$$$$$$$$$$$');
    console.log(houses[rand].character+ "'s house needs honey. Your mission is to find the honey and to deliver it there.");
    console.log('$$$$$$$$$$$$$$$$$$$$$$_Misssion_$$$$$$$$$$$$$$$$$$$$$$$$$');
    // house_goal = houses[rand];
    house_goal = owl;
    console.log(house_goal)
    return house_goal;
}

function drop(){
    if (player.honey == true && player.location==house_goal){
        console.log("####################_Mission_Completed_######################");
        console.log("!!!Congratulations!!! You completed the mission. You just got the promotion");
        console.log("####################_Mission_Completed_######################");
        player.honey = false;
    }
    else{
        console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
        console.log("You still have to find the honey and/or to deliver it to "+house_goal.character+"'s house");
        console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
    }
}
mission();

move('south');
move('north');
player.location.pick_up();
move('west');
move('north');
player.location.pick_up();
drop();
move('east');
move('east');
move('south');
player.location.pick_up();
move('west');
move('west');
move('north');
drop();




