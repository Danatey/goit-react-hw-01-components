import PropTypes from 'prop-types';

import "./Statistics.css"

const Statistics = ({stats, title}) => {
    return (
        <section className="statistics">
            {title && <h2 className="title">{title}</h2>}
            <ul className="stat-list">
                {stats.map(({ id, label, percentage }) => (
                    <li key = {id} className="item">
                        <span className="label">{label}</span>
                        <span className="percentage">{percentage}</span>
                    </li>))
                }
            </ul>
        </section>
    )
}

Statistics.prototype = {
    title: PropTypes.string,
    stats: PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string,
        percentage: PropTypes.number,
  }),
}

export default Statistics