import "./index.css";

export interface IMainViewProps {
  optionA: string;
  optionB: string;
  onChoice: (option: string) => void;
}

export function MainView(props: IMainViewProps): JSX.Element {
  return <></>;
}

export default MainView;
