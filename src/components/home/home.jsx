import homeStyling from "../home/home.module.scss";

export default function HomePage() {
    return (
        <>
            <section className={`${homeStyling["sales-overview"]}`}>
                <h2>Sales Overview</h2>
                <div className={`${homeStyling["sales-container"]}`}>
                    <div className={`${homeStyling["sales-card"]}`}>
                        <h3>Today Sales</h3>
                        <p className={`${homeStyling["sales-value"]}`}>₹ 1000</p>
                    </div>
                    <div className={`${homeStyling["sales-card"]}`}>
                        <h3>Current Month Sales</h3>
                        <p className={`${homeStyling["sales-value"]}`}>₹ 4500</p>
                    </div>
                    <div className={`${homeStyling["sales-card"]}`}>
                        <h3>Current Year Sales</h3>
                        <p className={`${homeStyling["sales-value"]}`}>₹ 18000</p>
                    </div>
                </div>
                <div className={homeStyling.container}>
            <div className={homeStyling.table}>
                <div className={homeStyling['table-header']}>
                    <div className={homeStyling['header__item']}>
                        <a id="name" href="#">Name</a>
                    </div>
                    <div className={homeStyling['header__item']}>
                        <a id="wins" href="#">Wins</a>
                    </div>
                    <div className={homeStyling['header__item']}>
                        <a id="draws" href="#">Draws</a>
                    </div>
                    <div className={homeStyling['header__item']}>
                        <a id="losses" href="#">Losses</a>
                    </div>
                    <div className={homeStyling['header__item']}>
                        <a id="total" href="#">Total</a>
                    </div>
                </div>
                <div className={homeStyling['table-content']}>
                    <div className={homeStyling['table-row']}>
                        <div className={homeStyling['table-data']}>Tom</div>
                        <div className={homeStyling['table-data']}>2</div>
                        <div className={homeStyling['table-data']}>0</div>
                        <div className={homeStyling['table-data']}>1</div>
                        <div className={homeStyling['table-data']}>5</div>
                    </div>
                    <div className={homeStyling['table-row']}>
                        <div className={homeStyling['table-data']}>Dick</div>
                        <div className={homeStyling['table-data']}>1</div>
                        <div className={homeStyling['table-data']}>1</div>
                        <div className={homeStyling['table-data']}>2</div>
                        <div className={homeStyling['table-data']}>3</div>
                    </div>
                    <div className={homeStyling['table-row']}>
                        <div className={homeStyling['table-data']}>Harry</div>
                        <div className={homeStyling['table-data']}>0</div>
                        <div className={homeStyling['table-data']}>2</div>
                        <div className={homeStyling['table-data']}>2</div>
                        <div className={homeStyling['table-data']}>2</div>
                    </div>
                </div>
            </div>
        </div>
            </section>
        </>
    )
}