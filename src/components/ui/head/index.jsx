function HeadLarge({ variant, title }) {
  return <h1 className={`head-layouts ${variant}`}>{title}</h1>;
}

export function HeadMedium({ variant, title }) {
  return <h3 className={`head-layouts ${variant}`}>{title}</h3>;
}

export default HeadLarge;
