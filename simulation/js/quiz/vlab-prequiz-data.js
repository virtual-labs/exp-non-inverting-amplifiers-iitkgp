/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var prequizJSON = {
    "info": {
        "name": "Test Your Knowledge!!",
        "main": "<p>Think you're smart enough to be on Jeopardy? Find out with this super crazy knowledge quiz!</p>",
        "results": "<p>Learn More.</p>",
        "level1": "Jeopardy Ready",
        "level2": "Jeopardy Contender",
        "level3": "Jeopardy Amateur",
        "level4": "Jeopardy Newb",
        "level5": "Stay in school, kid..." // no comma here
    },
    "prequestions": [
        {// Question 1 - Multiple Choice, Single True Answer
            "preq": " OPAMP is a/an ",
            "prea": [
			 {"option": "Rectifier", "correct": false},
                {"option": "Oscillator ", "correct": false},              
                {"option": "  Differential Amplifier", "correct": true},
				{"option": " None of the above", "correct": false},// no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "preq": " The bandwidth of an ideal op-amp is infinite",
            "prea": [
                {"option": "False", "correct":false},
                {"option": " True", "correct": true}
				//{"option": "  Slight conduction and cut-off", "correct": false},
				//{"option": "  Cut-off and positive saturation", "correct": false}//no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 3 - Multiple Choice, Single True Answer
            "preq": " The gain of an op-amp voltage follower is unity",
            "prea": [
                {"option": " False", "correct": false},
                {"option": "True", "correct": true}
               // {"option": " 20µV", "correct": false},
				//{"option": "  200µV", "correct": false},// no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 4 - Multiple Choice, Single True Answer
            "preq": "  Ideal op-amp has infinite voltage gain",
            "prea": [
                {"option": "to receive zero noise voltage", "correct": false},
                {"option": "to obtain finit output voltage", "correct": true},
                {"option": "to contot the output voltage", "correct": false},
                {"option": " None of the above", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
       
        },	
       {// Question 5 - Multiple Choice, Single True Answer
            "preq": " Purpose of  an  operational amplifier is ",
            "prea": [
                {"option": "The basic role of an operational amplifier is to input the voltage difference between the two input pins.", "correct": false},
                {"option": "The basic role of an operational amplifier is to amplify and output the voltage difference between the two pins", "correct": true},
                {"option": " Both A and B", "correct": false},
                {"option": " None of the above", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
       
        }	
		
    ]
};
