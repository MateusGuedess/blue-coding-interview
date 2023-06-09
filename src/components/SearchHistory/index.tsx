import { useContext } from "react";
import { HistoryContext } from "../../contexts/HistoryContext";
import { Container } from "./style";
import { Link } from "react-router-dom";

function SearchHistory() {
  const { history } = useContext(HistoryContext);

  if (!history.length) {
    return (
      <Container>
        <Link to="/">Search</Link>
        <p>Doesn't exist results...</p>
      </Container>
    );
  } else {
    return (
      <Container>
        <Link to="/">Search</Link>
        {history.map((item, index) => (
          <p>
            {index + 1} - {item}
          </p>
        ))}
      </Container>
    );
  }
}

export default SearchHistory;
