import CategoryItem from "../category-item/category-item.component";
import "./directory.styles.scss";

const Directory = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => {
        const { id } = category;
        return <CategoryItem category={category} key={id} />;
      })}
    </div>
  );
};

export default Directory;
