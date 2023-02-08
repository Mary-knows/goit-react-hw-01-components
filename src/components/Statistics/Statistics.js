import PropTypes from 'prop-types';
import './Statistics.css';


const StatDetails = (props) => {
    return <section className="statistics">
        {props.title && <h2 className="title">{props.title}</h2>}

        <ul className="stat-list">
            {props.stats.map((data) => {
                return <li className="item" key={data.id}>
                    <span className="label">{data.label}</span>
                    <span className="percentage"> {data.percentage}%</span>
                    </li>
            })}
  </ul>
</section>
}


StatDetails.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    },
  )),

};

export default StatDetails;