import { Question } from "../../features/question";
import styles from "./Intro.module.css";

export function Intro(): JSX.Element {
  return (
    <>
      <h3>Hvilken sætning er korrekt?</h3>
      <Question
        optionA="Jeg køre en tur"
        optionB="Jeg kører en tur"
        onChoice={(c) => console.log(c)}
      ></Question>
    </>
  );
}

export default Intro;
