'use client'
import { useEffect, useState } from "react";
import Confetti from 'react-confetti'
import "./quiz.css"


function shuffleArray(array) {
  const newArray = array.slice();
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

const quiz = [
  {
    "question": "Qual dessas músicas NÃO é da banda Legião Urbana?",
    "alternatives": [
      "Tempo Perdido",
      "Eduardo e Mônica",
      "Pro dia nascer feliz",
      "Faroeste caboclo"
    ],
    "answer" : "Pro dia nascer feliz"
  },

  {
    "question": "Em que cidade a banda Charlie Brown Jr. foi formada?", 
    "alternatives": [
      "São Paulo",
      "Santos",
      "Belo Horizonte",
      "Curitiba"
    ],
    "answer" : "Santos"
  },

  {
    "question": "A música \"Anna Júlia\" foi um dos maiores sucessos de qual banda brasileira?",
     "alternatives": [
      "Los Hermanos",
      "Skank",
      "Jota Quest",
      "Capital Inicial"
    ],
     "answer" : "Los Hermanos"
  },

  {
    "question": "Qual cantor sertanejo ficou famoso com a música \"Meteoro\"?", 
    "alternatives": [
      "Gustavo Lima",
      "Luan Santana",
      "Jorge & Mateus",
      "Michel Teló"
    ],
    "answer" : "Luan Santana"
  },

  {
    "question": "Em qual banda Cazuza foi vocalista antes de seguir carreira solo?", 
    "alternatives": [
      "Titãs",
      "Barão Vermelho",
      "Paralamas do Sucesso",
      "Legião Urbana"
    ],
    "answer" : "Barão Vermelho"
  },

  {
    "question": "\"As It Was\" foi um dos maiores sucessos de 2022. Qual artista lançou essa música",
     "alternatives": [
      "Ed Sheeran",
      "Harry Styles",
      "Justin Bieber",
      "Sam Smith"
    ],
     "answer" : "Harry Styles"
  },

  {
    "question": " Complete a frase da música \"Evidências\" (Chitãozinho & Xororó)  \"Quando digo que deixei de te amar...\"",
     "alternatives": [
      "\"...É porque eu já esqueci\"",
      "\"...É porque eu gosto de mentir\"",
      "\"...É porque eu te amo\"",
      "\.. É porque eu sofri\""
    ],
     "answer" : "\"...É porque eu te amo\""
  },

  {
    "question": "Qual cantor é conhecido como \"O Poeta da MPB\"?",
     "alternatives": [
        "Chico Buarque",
        "Djavan",
        "Caetano Veloso",
        "Gilberto Gil"
      ],
     "answer" : "Chico Buarque"
  },

  {
    "question": " Qual música de rock incorporou elementos de música eletrônica nos anos 2000?",
     "alternatives": [
        "\"Numb\" - Linkin Park",
        "\"Don't Stop Believin\" - Journey",
        "\"Bohemian Rhapsody\" - Queen",
        "\"Smells Like Teen Spirit\" - Nirvana"
      ],
     "answer" : "\"Numb\" - Linkin Park"
  },

  {
    "question": "Qual dessas músicas NÃO é da banda O Terno?",
    "alternatives": [
      "Ai Ai Ai",
      "Anunciação",
      "O Leãozinho",
      "Eu Só Quero Um Xodó"
    ],
    "answer": "Eu Só Quero Um Xodó"
  },
  
  {
    "question": "Em que ano a música 'Shape of You' de Ed Sheeran foi lançada?",
    "alternatives": [
      "2015",
      "2016",
      "2017",
      "2018"
    ],
    "answer": "2017"
  },
  
  {
    "question": "Quem é o cantor da música 'Fazendo Música'?",
    "alternatives": [
      "Nando Reis",
      "Zeca Baleiro",
      "Cássia Eller",
      "Raul Seixas"
    ],
    "answer": "Nando Reis"
  },
  
  {
    "question": "Qual dessas músicas é do cantor Michael Jackson?",
    "alternatives": [
      "Like a Prayer",
      "Billie Jean",
      "Vogue",
      "Sweet Dreams"
    ],
    "answer": "Billie Jean"
  },
  
  {
    "question": "Em qual banda foi vocalista o cantor Freddie Mercury?",
    "alternatives": [
      "The Rolling Stones",
      "The Beatles",
      "Queen",
      "The Who"
    ],
    "answer": "Queen"
  },
  
  {
    "question": "Qual dessas músicas é de Cazuza?",
    "alternatives": [
      "Exagerado",
      "O Mundo é um Moinho",
      "Tocando em Frente",
      "Quero Ver"
    ],
    "answer": "Exagerado"
  },
  
  {
    "question": "Qual artista ficou famoso com a música 'Single Ladies'?",
    "alternatives": [
      "Ariana Grande",
      "Beyoncé",
      "Lady Gaga",
      "Rihanna"
    ],
    "answer": "Beyoncé"
  },
  
  {
    "question": "Qual dessas músicas pertence ao álbum 'The Dark Side of the Moon'?",
    "alternatives": [
      "Money",
      "Imagine",
      "Black Dog",
      "Comfortably Numb"
    ],
    "answer": "Money"
  },
  
  {
    "question": "Quem cantou a música 'Trem Bala'?",
    "alternatives": [
      "Ana Carolina",
      "Ana Vilela",
      "Isabela Taviani",
      "Ana Clara"
    ],
    "answer": "Ana Vilela"
  },
  
  {
    "question": "Em qual banda a cantora Courtney Love foi vocalista?",
    "alternatives": [
      "Hole",
      "Nirvana",
      "Soundgarden",
      "Pearl Jam"
    ],
    "answer": "Hole"
  }      
 
];





export default function Home() {

  let [level, setLevel] = useState(0);
  const [playing,setPlaying] = useState(false);
  let [score,setScore] = useState(0);
  const [shuffledQuiz, setShuffledQuiz] = useState([]);


  useEffect(() => {
    const shuffled = shuffleArray(quiz);
    setShuffledQuiz(shuffled);
  }, []);


  function restart(){
    shuffleArray(quiz);
    setScore(0);
    window.location.reload();
    
  }

  function nextLevel(answer){
    if(level < 9){
      if(shuffledQuiz[level].answer == answer){
        setScore(score += 1);
      }
      setLevel(level+=1);  
    }else{
      setPlaying(false);

    }
    
    

  }


  return (
    <div className="main">

      
      
      


      {
        playing &&
          <div>
            
            <div className="header">
              <h1>quiz musical</h1>
              <h1>level {level+1}</h1>
            </div>

            <div className="questions">
              <h2 className="questionTitle">{shuffledQuiz[level].question}</h2>
            </div>

            <div className="alternatives">
              <div onClick={()=> nextLevel(shuffledQuiz[level].alternatives[0])} className={"alternative"} >{shuffledQuiz[level].alternatives[0]}</div>
              <div onClick={()=> nextLevel(shuffledQuiz[level].alternatives[1])} className={"alternative"} >{shuffledQuiz[level].alternatives[1]}</div>
            </div>
            <div className="alternatives">
            <div onClick={()=> nextLevel(shuffledQuiz[level].alternatives[2])} className={"alternative"} >{shuffledQuiz[level].alternatives[2]}</div>
            <div onClick={()=> nextLevel(shuffledQuiz[level].alternatives[3])} className={"alternative"} >{shuffledQuiz[level].alternatives[3]}</div>
            </div>
          </div>
      }

      {
        !playing && level == 0 &&
        <div className={"container"}>
          <h1 className={"welcome-title"}>Bem-vindo!</h1>
          <button className={"start-button"} onClick={() => setPlaying(true)}>Começar Jogo</button>
        </div>
      }

      {
        !playing && level > 1 &&
          <div className={"final"}>
            <Confetti
              width={2000}
              height={600}
            />
            
            <h1>Parabéns por ter finalizado o quiz!</h1>
            <p>Você acertou {score}/10</p>
            
            <h2>Obrigado por jogar o nosso quiz! Esperamos que tenha se divertido.</h2>
            <button onClick={() => {setLevel(0);restart()}}>Voltar ao início</button>
            
          </div>
      }









    </div>
  );
}
