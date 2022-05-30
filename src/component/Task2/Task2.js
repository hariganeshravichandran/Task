import { CardContent, Typography } from "@mui/material";
import React from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import "./style.css";

function Task2() {
  const [posts, setPosts] = React.useState([]);
  const [show, setShow] = React.useState(true);
  const [search, setSearch] = React.useState("");

  React.useEffect(() => {
    getPosts();
  }, []);

  const getPosts = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setPosts(response.data);
    });
  };

  const filterData = (e) => {
    setSearch(e.target.value);
    if (e.target.value) {
      let filteredArr = posts.filter(
        (data1) =>
          data1.id.toString().includes(e.target.value) ||
          data1.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
          data1.body.toLowerCase().includes(e.target.value)
      );
      setPosts(filteredArr);
    } else if (e.target.value === "") {
      setPosts(getPosts);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search...."
        onChange={filterData}
        className="search_input"
      />
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <button
          style={{
            width: "100px",
            height: "50px",
            fontSize: "20px",
            fontWeight: "bold",
          }}
          onClick={() => setShow(true)}
        >
          Table
        </button>
        <button
          style={{
            width: "100px",
            height: "50px",
            fontSize: "20px",
            fontWeight: "bold",
          }}
          onClick={() => setShow(false)}
        >
          Grid
        </button>
      </div>

      {show ? (
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {posts &&
              posts.map((post) => (
                <tr>
                  <td> {post.id} </td>
                  <td> {post.title} </td>
                  <td> {post.body} </td>
                </tr>
              ))}
          </tbody>
        </table>
      ) : (
        <div className="allignment">
          {posts.map((post) => (
            <Card style={{ margin: 20, width: "22.5%" }}>
              <CardContent>
                <Typography>
                  <div>
                    <h1>Title : {post.title} </h1>
                    <p>
                      <b>Description :</b> {post.body}{" "}
                    </p>
                  </div>
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

export default Task2;
