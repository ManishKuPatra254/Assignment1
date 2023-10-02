import React, { Fragment } from 'react'
import styles from './Page7.module.css';
import itemsdata7 from './Pagedata7.json';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import AttractionsOutlinedIcon from '@mui/icons-material/AttractionsOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

export function Page7() {
    return (
        <Fragment>
            <div className={styles.main_page1}>
                {
                    itemsdata7.itemsnumber7.map(items => (
                        <div className={styles.sub_page1} key={items.id}>
                            <img src={items.car_image} alt="" />
                            <div className={styles.car_names}>
                                <p>{items.car_name}</p>
                                <h4>{items.car_model_year}</h4>
                            </div>
                            <div className={styles.car_types}>
                                <p><PeopleAltOutlinedIcon sx={{ color: 'rgb(10, 170, 234)' }}  />{items.people_range}</p>
                                <p><LocalGasStationIcon sx={{ color: 'rgb(10, 170, 234)' }} />{items.car_type}</p>
                            </div>
                            <div className={styles.car_num}>
                                <p><SpeedOutlinedIcon sx={{ color: 'rgb(10, 170, 234)' }}  />{items.car_km}</p>
                                <p><AttractionsOutlinedIcon sx={{ color: 'rgb(10, 170, 234)' }} />{items.car_run}</p>
                            </div>
                            <hr />
                            <div className={styles.car_prices}>
                                <p>{items.car_price}</p>
                                <span><FavoriteBorderOutlinedIcon /></span>
                                <button>Rent now</button>

                            </div>
                        </div>
                    ))
                }
            </div>
        </Fragment>
    )
}
