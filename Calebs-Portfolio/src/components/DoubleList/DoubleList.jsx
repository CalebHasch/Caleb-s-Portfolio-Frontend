import "./DoubleList.css";

export default function DoubleList({ list1, list2, title1 }) {
  return (
    <div className="double-list">
      <div>
        <h4>{title1}</h4>
        <ul className="double-list__list">
          {list1.map((item, i) => {
            return <li key={i}>{item}</li>;
          })}
        </ul>
      </div>
      <div>
        <h4>Links</h4>
        <ul className="double-list__list">
          <li key={0} className="double-list__list-link">
            <a className="double-list__link" href={list2.link1} target="_blank">
              {list2.link1Text}
            </a>
          </li>
          <li key={1} className="double-list__list-link">
            <a className="double-list__link" href={list2.link2} target="_blank">
              {list2.link2Text}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
