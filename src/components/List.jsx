import Card from "./Card";

const List = (props) => {
  return (
    <>
      {props.userInfo.length > 0 ? (
        <>
          {props.userInfo.map((info) => {
            return (
              <Card css={"card-mt"} key={info.email}>
                <div>
                  <p>Name: {info.name}</p>
                  <p>City: {info.city}</p>
                  <p>Email: {info.email}</p>
                </div>
              </Card>
            );
          })}
        </>
      ) : (
        <>
          <Card css={"card-mt"}>
            <p className="text-center">Add a new user</p>
          </Card>
        </>
      )}
    </>
  );
};

export default List;
