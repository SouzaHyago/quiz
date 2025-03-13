'use client'
import { useState } from "react";
import "./quiz.css"

export default function Home() {

  const [level, setLevel] = useState(1);

  const quiz = {"questions" : [
      {"question": "qual o nome do lorem ipsum dollar sit amet", "alternatives": ["sadas","sad","asdasd","asdas"],"answer" : "test"},
      {"question": "", "alternatives": ["alternativa","ebbe","ibbi","obbo"],"answer" : "test"},
      {"question": "", "alternatives": ["","","",""],"answer" : "test"},
      {"question": "asdasd", "alternatives": ["","","",""],"answer" : "test"}
    
  ]}
    

  return (
    <div className="main">

      <div className="header">
        <h1>quiz musical</h1>
        <h1>level {level}</h1>
      </div>
      
      <div className="questions">
        <h2 className="questionTitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo debitis, rerum tenetur, totam atque recusandae architecto minima libero, eos accusamus nemo sit? Harum adipisci esse blanditiis necessitatibus vel velit cum!</h2>
      </div>

      
      <div className="alternatives">
        <div className={"alternative"}>{quiz.questions[0].alternatives[0]}</div>
        <div className={"alternative"}>{quiz.questions[0].alternatives[1]}</div>
      </div>
      <div className="alternatives">
        <div className={"alternative"}>{quiz.questions[0].alternatives[2]}</div>
        <div className={"alternative"}>{quiz.questions[0].alternatives[3]}</div>
      </div>




    </div>
  );
}
