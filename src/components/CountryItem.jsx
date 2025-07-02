import styles from "./CountryItem.module.css";

function CountryItem({ country, flagEmojiToPNG }) {
  return (
    <li className={styles.countryItem}>
      <span>{flagEmojiToPNG(country.emoji)}</span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
