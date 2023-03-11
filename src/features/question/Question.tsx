import styles from "./Question.module.css";

export interface IQuestionProps {
  optionA: string;
  optionB: string;
  onChoice: (option: string) => void;
}

export function Question(props: IQuestionProps): JSX.Element {
  return (
    <>
      <div className={styles.question}>
        <div className={styles.questionButtonsLayout}>
          <button
            className={styles.questionButton}
            onClick={() => props.onChoice(props.optionA)}
          >
            {props.optionA}
          </button>
          <div className={styles.questionButtonsDivider}></div>
          <button
            className="questionButton"
            onClick={() => props.onChoice(props.optionB)}
          >
            {props.optionB}
          </button>
        </div>
      </div>
    </>
  );
}
