import React from 'react';
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to={"/inputcustom"}>
                        Use inputs custom
                    </Link>
                </li>
                <li>
                    <Link to={"/textareacustom"}>
                        Use textareas custom
                    </Link>
                </li>
                <li>
                    <Link to={"/selectcustom"}>
                        Use selects custom
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default HomePage;