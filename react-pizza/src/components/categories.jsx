import { useState } from "react";

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const categories = [
    { category: "Все", index: 0 },
    { category: "Мясные", index: 1 },
    { category: "Вегетарианская", index: 2 },
    { category: "Гриль", index: 3 },
    { category: "Острые", index: 4 },
    { category: "Закрытые", index: 5 },
  ];

  const handleChangeCategory = (index) => {
    setActiveCategory(index);
  };

  return (
    <>
      <div className="categories">
        <ul>
          {categories.map(({ category, index }) => (
            <li
              key={index}
              onClick={() => handleChangeCategory(index)}
              className={activeCategory === index ? "active" : ""}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Categories;
