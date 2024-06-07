// Imports the Portfolio.css to grant access to additional classNames
import '../styles/Portfolio.css';

function Portfolio() {

    return (
        <div className="portfolio">
            <h1>Portfolio</h1>
            <p>Here are some of my projects:</p>
            <ul>
                    <a href="https://github.com/username/project1" target="_blank" rel=""> Project 1 </a>
            </ul>
            <ul>
                    <a href="https://github.com/username/project2" target="_blank" rel=""> Project 2</a>
            </ul>
        </div>
    )
}

export default Portfolio;