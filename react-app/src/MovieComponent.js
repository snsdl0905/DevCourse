import './App.css';

export default function MovieComponent(props) {
  const {title, open} = props;
  return (
    <div>
      <h1>제목: {title} </h1>
      <h1>개봉: {open} </h1>
    </div>
  );
}

