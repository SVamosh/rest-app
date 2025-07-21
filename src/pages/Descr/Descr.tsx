
import "./style.css";
import { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";

function Descr() {
    const {id} = useParams();
    type Meal = {
        idCategory?: string,
        strCategory?: string,
        strCategoryThumb?: string,
        strCategoryDescription?: string
    }
    const [meal, setMeal] = useState({});
    const {idCategory, strCategory, strCategoryThumb, strCategoryDescription}: Meal = meal;

    useEffect(() => {
        const saved = localStorage.getItem('key');
        if (saved !== null) {
            const initialValue = JSON.parse(saved);
            for (let elem of initialValue) {
                if (elem.idCategory === id) {
                    setMeal(elem);
                    localStorage.setItem('category', JSON.stringify(elem.strCategory));
                }
            }
        }
    }, [id]);

    return (
        <div className="meal" key={idCategory}>
            <div className="meal__info">
                <h2 className="meal__header">{strCategory}</h2>
                <img className="meal__image" src={strCategoryThumb} alt={strCategory}/>
                <p className="meal__text">{strCategoryDescription}</p>
            </div>

            <div className="meal__link">
                <NavLink to={`/menu/${idCategory}/${strCategory}`}>
                    If you want to see the list of dishes in this category please click here
                </NavLink>
            </div>
        </div> 
    );
}

export { Descr };