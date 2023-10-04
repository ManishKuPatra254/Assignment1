import React, { Fragment } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import styles from './PageNumbers.module.css';

export function PageNumbers() {
    const { page } = useParams();
    const navigate = useNavigate();

    const latestPage = parseInt(page, 1) || 11;

    function activePages() {
        const activepages = [];
        const totalPages = 10;
        for (let i = 1; i <= totalPages; i++) {
            activepages.push(
                <Link key={i} to={`/page${i}`}>
                    <button className={i === latestPage ? 'active' : ''}>
                        {i}
                    </button>
                </Link>
            );
        }
        return activepages;
    }

    function previousPage() {
        if (latestPage > 1) {
            navigate(`/page${latestPage - 1}`);
        }
    }

    function nextPage() {
        if (latestPage < 10) {
            navigate(`/page${latestPage + 1}`);
        }
    }

    return (
        <Fragment>
            <div className={styles.main_page_number}>
                <button onClick={previousPage} disabled={latestPage === 1}>
                    Previous
                </button>
                {activePages()}
                <button onClick={nextPage} disabled={latestPage === 10}>
                    Next
                </button>
            </div>
        </Fragment>
    );
}
