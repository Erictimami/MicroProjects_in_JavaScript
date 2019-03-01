users = [
    {
      fname: "Kermit",
      lname: "the Frog",
      languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
      interests: {
        music: ["guitar", "flute"],
        dance: ["tap", "salsa"],
        television: ["Black Mirror", "Stranger Things"]
      }
    },
    {
      fname: "Winnie",
      lname: "the Pooh",
      languages: ["Python", "Swift", "Java"],
      interests: {
        food: ["honey", "honeycomb"],
        flowers: ["honeysuckle"],
        mysteries: ["Heffalumps"]
      }
    },
    {
      fname: "Arthur",
      lname: "Dent",
      languages: ["JavaScript", "HTML", "Go"],
      interests: {
        space: ["stars", "planets", "improbability"],
        home: ["tea", "yellow bulldozers"]
      }
    }
];

function user_languages(users){
    var result=['', '', ''];
    for (var i=0; i<users.length; i++){
        var result_lang='';
        for(var j=0; j<users[i].languages.length; j++){
            if(j==0){
                result_lang+=users[i].languages[j];
            }
            else{
                if (j==users[i].languages.length-1){
                    result_lang+=' and '+users[i].languages[users[i].languages.length-1]+'.';
                }
                else{
                    result_lang+=', '+users[i].languages[j];
                }
            }  
        }
        result[i]+=users[i].fname+ ' '+users[i].lname+ ' knows '+result_lang;
        console.log(result[i])
    }
    return result;
}
user_languages(users);