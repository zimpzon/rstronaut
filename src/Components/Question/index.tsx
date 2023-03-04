import "./index.css";

export interface IQuestionProps {
  optionA: string;
  optionB: string;
}

export function Question(props: IQuestionProps): JSX.Element {
  return (
    <>
      <div className="question">
        <div className="questionButtons">
          <button className="questionButton">{props.optionA}</button>
          <div className="questionButtonsDivider"></div>
          <button className="questionButton">{props.optionB}</button>
        </div>
      </div>
    </>
  );
}

export default Question;
