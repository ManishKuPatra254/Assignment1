import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import styles from './PageNumbers.module.css'

export function PageNumbers() {
    return (
        <Fragment>
            <div className={styles.main_page_number}>
                <Link ><button>Previous</button></Link>
                <Link to={'/'}><button>1</button></Link>
                <Link to={'/page2'}><button>2</button></Link>
                <Link to={'/page3'}><button>3</button></Link>
                <Link to={'/page4'}><button>4</button></Link>
                <Link to={'/page5'}><button>5</button></Link>
                <Link to={'/page6'}><button>6</button></Link>
                <Link to={'/page7'}><button>7</button></Link>
                <Link to={'/page8'}><button>8</button></Link>
                <Link to={'/page9'}><button>9</button></Link>
                <Link to={'/page10'}><button>10</button></Link>
                <Link><button>Next</button></Link>
            </div>
        </Fragment>
    )
}
