import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Link from "next/link";
import { API_URL } from "../../lib/apollo";
import { Row, Col } from "reactstrap";

const Query = gql`
  {
    restaurants {
      id
      name
      description
      image {
        url
      }
      email
    }
  }
`;

export function RestaurantList(props) {
  const { loading, error, data } = useQuery(Query);

  return (
    <>
      {loading && (
        <>
          <p className="h4">loading......</p>
        </>
      )}
      {data?.restaurants && data?.restaurants.length && (
        <Row>
          <Col xs="6" sm="4" className="p-2">
            <p className="h5 text-center text-capitalize">
              {data.restaurants[0]["name"]}
            </p>
            <img
              src={`${API_URL}${data.restaurants[0]["image"][0]["url"]}`}
              alt="logo"
              className="img-fluid"
            />
          </Col>
        </Row>
      )}
      <p className="h3 p-2 text-center">
        <button className="btn btn-info p-3 text-capitalize">
          nuovo ristorante
        </button>
      </p>
    </>
  );
}
