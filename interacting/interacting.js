var tigger = { 
    character: 'Tigger',
    greet: function(){
        console.log('The wonderful thing about Tiggers is Tiggers are wonderful things!')
    }
};

var pooh = { character: 'Winnie the Pooh',
    greet: function(){
        console.log('Oh bother');
    }
};

var piglet = { character: 'Piglet',
    greet: function(){
        console.log("Oh d-d-d-d-dear! I wasn't expecting company!");
    }
};

var bees = { character: 'Bees',
    greet: function(){
        console.log('Oh bother');
    }
};

var owl = { character: 'Owl',
    greet: function(){
        console.log('owl is the most beautiful house ');
    }
};

var robin = { character: 'Christopher Robin',
    greet: function(){
        console.log('robin is the most beautiful house ');
    }
};

var rabbit = { character: 'Rabbit',
    greet: function(){
        console.log('rabbit is the most beautiful house ');
    }
};

var gopher = { character: 'Gopher',
    greet: function(){
        console.log('gopher is the most beautiful house ');
    }
};

var kanga = { character: 'Kanga',
    greet: function(){
        console.log('kanga is the most beautiful house ');
    }
};

var eeyore = { character: 'Eeyore',
    greet: function(){
        console.log('eeyore is the most beautiful house ');
    }
};

var heffalumps = { character: 'Heffalumps',
    greet: function(){
        console.log('heffalumps is the most beautiful house ');
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
    location: tigger
}

function move(direction){
    if (player.location[direction]==null){
        console.log('You can not go that way');
        console.log('**********************************************');
    }
    else{
        console.log("You are now at " +player.location[direction].character+ "'s house" );
        player.location=player.location[direction];
        player.location.greet();
        console.log('**********************************************');
    }
}

move('south');
move('north');
move('west');
move('north');
move('east');
move('east');
move('east');
move('east');
move('east');
move('west');
move('west');
move('north');
move('north');
move('east');
move('east');
move('north');



