import './AnimatedLetters';

export default function AnimatedLetters({ letterClass, strArray, idx }) {
  return (
    <span>
      {strArray.map((char, i) => (
        <span key={char + i} className={`${letterClass}`}>
          {char}
        </span>
      ))}
    </span>
  );
}
