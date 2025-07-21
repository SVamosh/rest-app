
import "./style.css";
import { useEffect, useState } from "react";
import { getMealById } from "./../../services/api";
import { Spinner } from './../../components/Spinner';

function Food() {
    const [selectFood, setSelectFood] = useState({
        strMeal: '', strArea: '', strMealThumb: '', strIngredient1: '', strIngredient2: '', strIngredient3: ''
    });
    const [isLoading, setLoading] = useState(false);
    const {strMeal, strArea, strMealThumb, strIngredient1, strIngredient2, strIngredient3} = selectFood;

    useEffect(() => {
        const loadFood = async () => {
            try {
                setLoading(true);
                const [meal] = await getMealById();
                setSelectFood(meal);
                setLoading(false);
            } catch (error) {
                console.log('error');
            } finally {
                setLoading(false);
            }
        };

       loadFood ();
    }, []);

    return (
        <div className="food">
            {isLoading ? <Spinner /> :
                <div className="food__card">
                    <div className="food__info">
                        <h2 className="food__header">
                            {strMeal}
                        </h2>
                        <p className="food__tradition">
                            <span>Culinary tradition: </span>
                                {strArea}
                        </p>
                        <ul className="food__tags">
                            <li>#{strIngredient1}</li>
                            <li>#{strIngredient2}</li>
                            <li>#{strIngredient3}</li>
                        </ul>
                    </div>
                    {(strMealThumb === '') ? <img className="food__image" src="null" alt={strMeal} />
                    : <img className="food__image" src={strMealThumb} alt={strMeal} />}
                </div>
            }
        </div>
    );
}

export { Food };