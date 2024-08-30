import PropTypes from "prop-types";

const Categories = ({ value, onChangeCategory }) => {
  const categories = [
    { category: "Все", index: 0 },
    { category: "Мясные", index: 1 },
    { category: "Вегетарианская", index: 2 },
    { category: "Гриль", index: 3 },
    { category: "Острые", index: 4 },
    { category: "Закрытые", index: 5 },
  ];

  return (
    <>
      <div className="categories">
        <ul>
          {categories.map(({ category, index }) => (
            <li
              key={index}
              onClick={() => onChangeCategory(index)}
              className={value === index ? "active" : ""}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

Categories.propTypes = {
  value: PropTypes.number.isRequired,
  onChangeCategory: PropTypes.func.isRequired,
};
export default Categories;
