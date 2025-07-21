
import './style.css';
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getFoodCategories } from '../../services/api';
import { Spinner } from './../../components/Spinner';
//
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Menu() {
    const [menu, setMenu] = useState([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const loadFoodCategories = async () => {
            try {
                setLoading(true);
                const categoriesOfFood = await getFoodCategories();
                setMenu(categoriesOfFood);
                localStorage.setItem('key', JSON.stringify(categoriesOfFood));
                setLoading(false);
            } catch (error) {
                // console.log(error.name + ': ' + error.message);
            } finally {
                setLoading(false);
            }
        };

        loadFoodCategories();
    }, []);

    return (
        <div className="menu container">
            {isLoading ? <Spinner /> :
                <ul className="menu__list">
                    {menu.map(({strCategory, idCategory, strCategoryThumb}) => (
                        <Card sx={{ minWidth: 230, maxWidth: 400, backgroundColor: 'transparent' }}
                         key={idCategory}>
                            <CardMedia
                                sx={{ height: 200 }}
                                image={strCategoryThumb}
                                title={strCategory}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div"
                                 sx={{fontFamily: 'Oswald, sans-serif'}}>
                                    {strCategory}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <NavLink key={idCategory} className="menu__link" to={`/menu/${idCategory}`}>
                                    <Button sx={{color: '#ffffff'}} size="small">SEE DESCRIPTION</Button>
                                </NavLink>
                            </CardActions>
                        </Card>
                    ))}
                </ul>
            }
        </div>
    );
}

export { Menu };