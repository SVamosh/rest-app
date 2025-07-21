
import "./style.css";
import { useEffect, useState, useMemo } from "react";
import { useParams, NavLink } from "react-router-dom";
import { getMealsFromCategory } from "./../../services/api";
import { Spinner } from './../../components/Spinner';
import { ID_MEAL } from "../../constants/constants";

function setIdMeal(id: string) {
    localStorage.setItem(ID_MEAL, JSON.stringify(id));
}

function Category() {
    const {id, category} = useParams();
    const [meals, setMeals] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const loadMealsFromCategory = async () => {
            try {
                setLoading(true);
                const mealsFromCategory = await getMealsFromCategory();
                setMeals(mealsFromCategory);
                setLoading(false);
            } catch (error) {
                console.log('error');
            } finally {
                setLoading(false);
            }
        };

       loadMealsFromCategory ();
    }, []);

    const filteredMeals = useMemo(() => {
        return meals.filter(meal => {
            return String(meal['strMeal']).toLowerCase().includes(searchTerm.toLowerCase());
        })
    }, [meals, searchTerm]);

    return (
        <div className="category">
            <input className="search__dish" 
                onChange={e => setSearchTerm(e.target.value)}
                value={searchTerm}
                placeholder="enter the name of dish" />
            
            {isLoading ? <Spinner /> :
                <ul className="category__list">
                    {filteredMeals.map(({strMeal, strMealThumb, idMeal}) => {
                        return (
                            <NavLink key={idMeal} className="category__link"
                             to={`/menu/${id}/${category}/${idMeal}`}
                             onClick={() => setIdMeal(idMeal)}>
                                <li key={idMeal} className="category__item">
                                    <img className="category__item-image" 
                                        src={strMealThumb} alt="meal" />
                                    <p className="category__item-text">
                                        {strMeal}
                                    </p>
                                </li>
                            </NavLink>
                        );
                    })}
                </ul>
            }

        </div>
    );
}

export { Category };