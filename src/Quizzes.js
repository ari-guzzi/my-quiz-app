const quizzes = [
  {
    "id": 1,
    "name": "Addition",
    "category": "Math",
    "questions": [
      {
        "type": "multipleChoice",
        "question": "What is 5 + 7?",
        "options": [
          "10",
          "12",
          "13",
          "14"
        ],
        "correctAnswer": "12"
      },
      {
        "type": "freeResponse",
        "question": "What is 15 + 23?",
        "correctAnswer": "38"
      },
      {
        "type": "trueOrFalse",
        "question": "Is 2 + 2 equal to 4?",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True"
      },
      {
        "type": "multipleChoice",
        "question": "Which of these equals 9 + 6?",
        "options": [
          "14",
          "15",
          "16",
          "17"
        ],
        "correctAnswer": "15"
      },
      {
        "type": "freeResponse",
        "question": "Add 100 and 250.",
        "correctAnswer": "350"
      }
    ]
  },
  {
    "id": 2,
    "name": "Multiplication",
    "category": "Math",
    "questions": [
      {
        "type": "multipleChoice",
        "question": "What is 3 x 4?",
        "options": [
          "7",
          "10",
          "12",
          "14"
        ],
        "correctAnswer": "12"
      },
      {
        "type": "freeResponse",
        "question": "What is 6 multiplied by 7?",
        "correctAnswer": "42"
      },
      {
        "type": "trueOrFalse",
        "question": "Is 8 x 2 equal to 16?",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True"
      },
      {
        "type": "multipleChoice",
        "question": "What is 9 x 3?",
        "options": [
          "27",
          "29",
          "30",
          "31"
        ],
        "correctAnswer": "27"
      },
      {
        "type": "freeResponse",
        "question": "What is 11 times 11?",
        "correctAnswer": "121"
      }
    ]
  },
  {
    "id": 3,
    "name": "Equations",
    "category": "Math",
    "questions": [
      {
        "type": "multipleChoice",
        "question": "Solve: x + 3 = 7",
        "options": [
          "2",
          "3",
          "4",
          "5"
        ],
        "correctAnswer": "4"
      },
      {
        "type": "freeResponse",
        "question": "Solve for x: 2x = 10",
        "correctAnswer": "5"
      },
      {
        "type": "trueOrFalse",
        "question": "The equation x - 2 = 2 has the solution x = 4.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True"
      },
      {
        "type": "multipleChoice",
        "question": "If x = 3, what is x^2?",
        "options": [
          "6",
          "9",
          "12",
          "15"
        ],
        "correctAnswer": "9"
      },
      {
        "type": "freeResponse",
        "question": "Solve for x: 3x + 2 = 11",
        "correctAnswer": "3"
      }
    ]
  },
  {
    "id": 4,
    "name": "Fractions",
    "category": "Math",
    "questions": [
      {
        "type": "multipleChoice",
        "question": "What is 1/2 + 1/4?",
        "options": [
          "1/2",
          "2/4",
          "3/4",
          "1"
        ],
        "correctAnswer": "3/4"
      },
      {
        "type": "freeResponse",
        "question": "Simplify: 4/8",
        "correctAnswer": "1/2"
      },
      {
        "type": "trueOrFalse",
        "question": "Is 2/4 equal to 1/2?",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True"
      },
      {
        "type": "multipleChoice",
        "question": "What is 3/5 + 1/5?",
        "options": [
          "2/5",
          "3/5",
          "4/5",
          "5/5"
        ],
        "correctAnswer": "4/5"
      },
      {
        "type": "freeResponse",
        "question": "What is 5/10 simplified?",
        "correctAnswer": "1/2"
      }
    ]
  },
  {
    "id": 5,
    "name": "American Civil War",
    "category": "History",
    "questions": [
      {
        "type": "multipleChoice",
        "question": "Who was the president of the Union during the Civil War?",
        "options": [
          "Jefferson Davis",
          "Abraham Lincoln",
          "Ulysses S. Grant",
          "Andrew Johnson"
        ],
        "correctAnswer": "Abraham Lincoln"
      },
      {
        "type": "freeResponse",
        "question": "What year did the Civil War begin?",
        "correctAnswer": "1861"
      },
      {
        "type": "trueOrFalse",
        "question": "The Emancipation Proclamation freed all slaves in the U.S.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "False"
      },
      {
        "type": "multipleChoice",
        "question": "Which side won the Civil War?",
        "options": [
          "Union",
          "Confederacy",
          "Both",
          "Neither"
        ],
        "correctAnswer": "Union"
      },
      {
        "type": "freeResponse",
        "question": "In what year did the Civil War end?",
        "correctAnswer": "1865"
      }
    ]
  },
  {
    "id": 6,
    "name": "American Revolution",
    "category": "History",
    "questions": [
      {
        "type": "multipleChoice",
        "question": "Who wrote the Declaration of Independence?",
        "options": [
          "George Washington",
          "Thomas Jefferson",
          "Benjamin Franklin",
          "John Adams"
        ],
        "correctAnswer": "Thomas Jefferson"
      },
      {
        "type": "freeResponse",
        "question": "What year did the American Revolution start?",
        "correctAnswer": "1775"
      },
      {
        "type": "trueOrFalse",
        "question": "The Boston Tea Party happened before the war began.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True"
      },
      {
        "type": "multipleChoice",
        "question": "Which country helped the colonies defeat Britain?",
        "options": [
          "Spain",
          "France",
          "Germany",
          "Italy"
        ],
        "correctAnswer": "France"
      },
      {
        "type": "freeResponse",
        "question": "What treaty ended the American Revolution?",
        "correctAnswer": "Treaty of Paris"
      }
    ]
  },
  {
    "id": 7,
    "name": "French Revolution",
    "category": "History",
    "questions": [
      {
        "type": "multipleChoice",
        "question": "Who was the King of France during the French Revolution?",
        "options": [
          "Louis XIV",
          "Louis XV",
          "Louis XVI",
          "Napoleon"
        ],
        "correctAnswer": "Louis XVI"
      },
      {
        "type": "freeResponse",
        "question": "What year did the French Revolution begin?",
        "correctAnswer": "1789"
      },
      {
        "type": "trueOrFalse",
        "question": "The storming of the Bastille occurred in 1789.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True"
      },
      {
        "type": "multipleChoice",
        "question": "Which document was written during the revolution?",
        "options": [
          "Declaration of the Rights of Man",
          "Napoleonic Code",
          "Magna Carta",
          "Constitution"
        ],
        "correctAnswer": "Declaration of the Rights of Man"
      },
      {
        "type": "freeResponse",
        "question": "Who led the Reign of Terror?",
        "correctAnswer": "Robespierre"
      }
    ]
  },
  {
    "id": 10, 
    "name": "Physics", 
    "category": "Science", 
    "questions": [
      {
        "type": "multipleChoice", 
        "question": "What is the unit of force?", 
        "options": ["Newton", "Joule", "Watt", "Pascal"], 
        "correctAnswer": "Newton"
      }, 
      {
        "type": "freeResponse", 
        "question": "What is the acceleration due to gravity on Earth (in m/s²)?", 
        "correctAnswer": "9.8"
      }, 
      {
        "type": "trueOrFalse", "question": "Velocity is a scalar quantity.", 
        "options": ["True", "False"], 
        "correctAnswer": "False"
      }, 
      {
        "type": "multipleChoice", 
        "question": "What is the formula for kinetic energy?", 
        "options": ["1/2mv²", "mv", "ma", "mgh"], "correctAnswer": "1/2mv²"
      }, {
        "type": "freeResponse", 
        "question": "What is the symbol for frequency?", 
        "correctAnswer": "f"
      }
    ]
  },
{
  "id": 11,
  "name": "Chemistry",
  "category": "Science",
  "questions": [
    {
      "type": "multipleChoice",
      "question": "What is H2O?",
      "options": [
        "Hydrogen peroxide",
        "Water",
        "Hydrochloric acid",
        "Oxygen"
      ],
      "correctAnswer": "Water"
    },
    {
      "type": "freeResponse",
      "question": "What is the atomic number of carbon?",
      "correctAnswer": "6"
    },
    {
      "type": "trueOrFalse",
      "question": "All metals are solid at room temperature.",
      "options": [
        "True",
        "False"
      ],
      "correctAnswer": "False"
    },
    {
      "type": "multipleChoice",
      "question": "Which of the following is a noble gas?",
      "options": [
        "Oxygen",
        "Nitrogen",
        "Argon",
        "Chlorine"
      ],
      "correctAnswer": "Argon"
    },
    {
      "type": "freeResponse",
      "question": "What is the pH of a neutral substance?",
      "correctAnswer": "7"
    }
  ]
},
{
  "id": 12,
  "name": "Biology",
  "category": "Science",
  "questions": [
    {
      "type": "multipleChoice",
      "question": "What is the powerhouse of the cell?",
      "options": [
        "Nucleus",
        "Ribosome",
        "Mitochondria",
        "Golgi body"
      ],
      "correctAnswer": "Mitochondria"
    },
    {
      "type": "freeResponse",
      "question": "What molecule carries genetic information?",
      "correctAnswer": "DNA"
    },
    {
      "type": "trueOrFalse",
      "question": "Photosynthesis occurs in animal cells.",
      "options": [
        "True",
        "False"
      ],
      "correctAnswer": "False"
    },
    {
      "type": "multipleChoice",
      "question": "Which organ is responsible for pumping blood?",
      "options": [
        "Lungs",
        "Brain",
        "Heart",
        "Kidney"
      ],
      "correctAnswer": "Heart"
    },
    {
      "type": "freeResponse",
      "question": "What is the process by which plants make food?",
      "correctAnswer": "Photosynthesis"
    }
  ]
},
{"id": 13, "name": "Music", "category": "Pop Culture", "questions": [{"type": "multipleChoice", "question": "Who is known as the King of Pop?", "options": ["Elvis Presley", "Freddie Mercury", "Michael Jackson", "Prince"], "correctAnswer": "Michael Jackson"}, {"type": "freeResponse", "question": "Which artist released the album 1989?", "correctAnswer": "Taylor Swift"}, {"type": "trueOrFalse", "question": "Beyoncé was a member of Destiny's Child.", "options": ["True", "False"], "correctAnswer": "True"}, {"type": "multipleChoice", "question": "Which instrument has keys, pedals, and strings?", "options": ["Guitar", "Violin", "Drum", "Piano"], "correctAnswer": "Piano"}, {"type": "freeResponse", "question": "What is the term for speed in music?", "correctAnswer": "Tempo"}]},
{"id": 14, "name": "Movies", "category": "Pop Culture", "questions": [{"type": "multipleChoice", "question": "Which movie won Best Picture at the 2020 Oscars?", "options": ["1917", "Joker", "Parasite", "Ford v Ferrari"], "correctAnswer": "Parasite"}, {"type": "freeResponse", "question": "Who directed the movie Inception?", "correctAnswer": "Christopher Nolan"}, {"type": "trueOrFalse", "question": "The movie Titanic was released in 1997.", "options": ["True", "False"], "correctAnswer": "True"}, {"type": "multipleChoice", "question": "Who plays Iron Man in the Marvel movies?", "options": ["Chris Evans", "Chris Hemsworth", "Robert Downey Jr.", "Tom Holland"], "correctAnswer": "Robert Downey Jr."}, {"type": "freeResponse", "question": "What is the name of the hobbit played by Elijah Wood?", "correctAnswer": "Frodo"}]},
{"id": 15, "name": "TV Shows", "category": "Pop Culture", "questions": [{"type": "multipleChoice", "question": "Which show features a character named Eleven?", "options": ["The Witcher", "Breaking Bad", "Stranger Things", "Lost"], "correctAnswer": "Stranger Things"}, {"type": "freeResponse", "question": "In Friends, what is the name of Ross's second wife?", "correctAnswer": "Emily"}, {"type": "trueOrFalse", "question": "The Office originally aired in the UK.", "options": ["True", "False"], "correctAnswer": "True"}, {"type": "multipleChoice", "question": "What show takes place in the fictional town of Hawkins?", "options": ["Riverdale", "Stranger Things", "Twin Peaks", "Euphoria"], "correctAnswer": "Stranger Things"}, {"type": "freeResponse", "question": "Who is the main character in Breaking Bad?", "correctAnswer": "Walter White"}]},
{"id": 16, "name": "English Grammar", "category": "Language", "questions": [{"type": "multipleChoice", "question": "Which of these is a noun?", "options": ["Run", "Blue", "Apple", "Quickly"], "correctAnswer": "Apple"}, {"type": "freeResponse", "question": "What is the past tense of go?", "correctAnswer": "went"}, {"type": "trueOrFalse", "question": "An adjective modifies a noun.", "options": ["True", "False"], "correctAnswer": "True"}, {"type": "multipleChoice", "question": "Which sentence is grammatically correct?", "options": ["She go to school", "They goes to school", "He goes to school", "We goes to school"], "correctAnswer": "He goes to school"}, {"type": "freeResponse", "question": "What punctuation ends a question?", "correctAnswer": "Question mark"}]},
{"id": 17, "name": "Spanish Basics", "category": "Language", "questions": [{"type": "multipleChoice", "question": "How do you say Hello in Spanish?", "options": ["Hola", "Bonjour", "Ciao", "Hallo"], "correctAnswer": "Hola"}, {"type": "freeResponse", "question": "Translate Thank you into Spanish.", "correctAnswer": "Gracias"}, {"type": "trueOrFalse", "question": "Adiós means Goodbye in Spanish.", "options": ["True", "False"], "correctAnswer": "True"}, {"type": "multipleChoice", "question": "What is the Spanish word for apple?", "options": ["Banana", "Manzana", "Pera", "Uva"], "correctAnswer": "Manzana"}, {"type": "freeResponse", "question": "What does sí mean?", "correctAnswer": "Yes"}]},
{"id": 18, "name": "French Basics", "category": "Language", "questions": [{"type": "multipleChoice", "question": "How do you say Hello in French?", "options": ["Hola", "Ciao", "Bonjour", "Hallo"], "correctAnswer": "Bonjour"}, {"type": "freeResponse", "question": "Translate Thank you into French.", "correctAnswer": "Merci"}, {"type": "trueOrFalse", "question": "Oui means No in French.", "options": ["True", "False"], "correctAnswer": "False"}, {"type": "multipleChoice", "question": "What is the French word for bread?", "options": ["Pain", "Fromage", "Lait", "Beurre"], "correctAnswer": "Pain"}, {"type": "freeResponse", "question": "What does au revoir mean?", "correctAnswer": "Goodbye"}]}
];

export default quizzes;