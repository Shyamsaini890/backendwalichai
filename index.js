require("dotenv").config();
const express = require("express");
const app = express();

const githubdata = {
  login: "Shyamsaini890",
  id: 129372271,
  node_id: "U_kgDOB7YQbw",
  avatar_url: "https://avatars.githubusercontent.com/u/129372271?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/Shyamsaini890",
  html_url: "https://github.com/Shyamsaini890",
  followers_url: "https://api.github.com/users/Shyamsaini890/followers",
  following_url:
    "https://api.github.com/users/Shyamsaini890/following{/other_user}",
  gists_url: "https://api.github.com/users/Shyamsaini890/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/Shyamsaini890/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/Shyamsaini890/subscriptions",
  organizations_url: "https://api.github.com/users/Shyamsaini890/orgs",
  repos_url: "https://api.github.com/users/Shyamsaini890/repos",
  events_url: "https://api.github.com/users/Shyamsaini890/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/Shyamsaini890/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: "Shyam sunder",
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 23,
  public_gists: 0,
  followers: 6,
  following: 1,
  created_at: "2023-03-30T08:01:57Z",
  updated_at: "2025-12-30T07:38:19Z",
};

app.get("/", (req, res) => {
  res.send("home page");
});

app.get("/login", (req, res) => {
  res.send("login page");
});

app.get("/github", (req, res) => {
  res.json(githubdata);
});

app.listen(process.env.PORT, () => {
  console.log(`server listen on ${process.env.PORT} `);
});
