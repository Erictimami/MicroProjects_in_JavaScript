

    var tigger = { character: 'Tigger'};
    var pooh = { character: 'Winnie the Pooh'};
    tigger.north = pooh;
    pooh.south = tigger;
    console.log(tigger);

    var piglet = { character: 'Piglet'};
    piglet.east = tigger.north;
    tigger.north.west = piglet;
    console.log(piglet);

    var bees = {character: 'Bees'};
    bees.west=tigger.north;
    tigger.north.east =bees;

    var owl = { character: 'Owl'};
    owl.south = tigger.north.west;
    tigger.north.east.north=owl;

    var robin = { character: 'Christopher Robin'};
    robin.south = tigger.north;
    tigger.north.north=robin;

    var rabbit = { character: 'Rabbit'};
    rabbit.south =  tigger.north.east;
    tigger.north.east.north=rabbit;

    var gopher = { character: 'Gopher'};
    gopher.west=tigger.north.east.north;
    tigger.north.east.north.east=gopher;

    var kanga = {character: 'Kanga'};
    kanga=tigger.north.north.north;
    tigger.north.north.north=kanga;

    var eeyore = {character: 'Eeyore'};
    eeyore.south=tigger.north.north.north;
    tigger.north.north.north=eeyore.south;

    var heffalumps = {character: 'Heffalumps'};
    heffalumps.west=eeyore;
    eeyore.east= heffalumps;
