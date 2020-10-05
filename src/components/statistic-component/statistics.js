import React from "react";
import styles from "./statistic.module.css";
import PropTypes from "prop-types";

function Statistics({ title, stats }) {
  const bgColor = () => {
    return (
      "#" +
      ("000022" + Math.floor(Math.random() * 16777216).toString(16)).substr(-6)
    );
  };

  return (
    <section className={styles.section}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.statList}>
        {stats.map((stat) => (
          <li
            key={stat.id}
            style={{
              backgroundColor: bgColor(),
            }}
            className={styles.statItem}
          >
            <span className={styles.lable}>{stat.label}</span>
            <span className={styles.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.defaultPrors = {
  title: "",
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
