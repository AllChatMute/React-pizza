import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";

const FullPizza = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pizza, setPizza] = useState({});

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const { data } = await axios.get(
          `https://66cf3d37901aab24842179de.mockapi.io/Items/${id}`
        );
        setPizza(data);
      } catch (error) {
        console.error(error);
        alert("Пицца не найдена!");
        navigate("/");
      }
    };
    fetchPizza();
  }, [id, navigate]);

  if (!pizza) {
    return <h1>Загрузка...</h1>;
  }
  return (
    <>
      <div className="container">
        <img src={pizza.imageUrl} alt="" />
        <h2>{pizza.title}</h2>
        <p>
          Далеко-далеко за словесными горами в стране гласных и согласных живут
          рыбные тексты.
        </p>
        <h4>{pizza.price} ₽</h4>
      </div>
    </>
  );
};

export default FullPizza;
