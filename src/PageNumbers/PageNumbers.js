import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import styles from './PageNumbers.module.css'

export function PageNumbers() {
    return (
        <Fragment>
            <div className={styles.main_page_number}>
                <Link to={'/'}><button>Previous</button></Link>
                <Link><button>1</button></Link>
                <Link to={'/page2'}><button>2</button></Link>
                <Link><button>3</button></Link>
                <Link><button>4</button></Link>
                <Link><button>5</button></Link>
                <Link><button>6</button></Link>
                <Link><button>7</button></Link>
                <Link><button>8</button></Link>
                <Link><button>9</button></Link>
                <Link><button>10</button></Link>
                <Link><button>Next</button></Link>
            </div>
        </Fragment>
    )
}
