import { useState } from "react";
import "./App.css";
import ArrowIcon from "./assets/images/icon-arrow.svg";
import {
    differenceInDays,
    differenceInMonths,
    differenceInYears,
} from "date-fns";

function App() {
    const [days, setDays] = useState("");
    const [months, setMonths] = useState("");
    const [years, setYears] = useState("");

    console.log(days);
    console.log(months);
    console.log(years);

    const diffInDays = differenceInDays(
        new Date(years, months, 31),
        new Date(years, months, days)
    );

    const diffInMonths = differenceInMonths(
        new Date(years, 12, 31),
        new Date(years, months, days)
    );

    const diffInYears = differenceInYears(
        new Date(2023, 12, 31),
        new Date(years, months, days)
    );

    return (
        <div className="wrapper">
            <div className="card">
                <form>
                    <div className="age">
                        <div>
                            <div>
                                <label
                                    style={
                                        days > 31
                                            ? { color: "red", opacity: "70%" }
                                            : {}
                                    }
                                >
                                    DAY
                                </label>
                            </div>
                            <input
                                type="number"
                                min="1"
                                max="31"
                                className="day"
                                placeholder="DD"
                                value={days}
                                onChange={(e) => setDays(e.target.value)}
                                style={
                                    days > 31 ? { border: "1px solid red" } : {}
                                }
                            />
                            <div>
                                <small className="errLabel">
                                    {days > 31 ? "Must be a valid day" : ""}
                                </small>
                            </div>
                        </div>
                        <div>
                            <div>
                                <label
                                    style={
                                        months > 12
                                            ? { color: "red", opacity: "70%" }
                                            : {}
                                    }
                                >
                                    MONTH
                                </label>
                            </div>
                            <input
                                type="number"
                                min="1"
                                max="12"
                                className="month"
                                placeholder="MM"
                                value={months}
                                onChange={(e) => setMonths(e.target.value)}
                                style={
                                    months > 12
                                        ? { border: "1px solid red" }
                                        : {}
                                }
                            />
                            <div>
                                <small className="errLabel">
                                    {months > 12 ? "Must be a valid month" : ""}
                                </small>
                            </div>
                        </div>
                        <div>
                            <div>
                                <label
                                    style={
                                        years > 2023
                                            ? { color: "red", opacity: "70%" }
                                            : {}
                                    }
                                >
                                    YEAR
                                </label>
                            </div>
                            <input
                                type="number"
                                min="1900"
                                max="2023"
                                className="year"
                                placeholder="YYYY"
                                value={years}
                                onChange={(e) => setYears(e.target.value)}
                                style={
                                    years > 2023
                                        ? { border: "1px solid red" }
                                        : {}
                                }
                            />
                            <div>
                                <small className="errLabel">
                                    {years > 2023 ? "Must be a valid year" : ""}
                                </small>
                            </div>
                        </div>
                    </div>
                    <div className="arrow">
                        <article className="border"></article>
                        <article className="arrowIcon">
                            <img src={ArrowIcon} />
                        </article>
                    </div>
                    <div className="ageContent">
                        <p className="years">
                            <span>{!years ? "--" : diffInYears}</span> years
                        </p>
                        <p className="months">
                            <span>{!months ? "--" : diffInMonths}</span> months
                        </p>
                        <p className="days">
                            <span>{!days ? "--" : diffInDays}</span> days
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default App;
