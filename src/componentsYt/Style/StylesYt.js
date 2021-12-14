const flexStyle = {
  display: "flex",
  justifyContent: "center",
};

const linkBase = {
  textDecoration: "none",
  marginLeft: "5px",
};
const LoginStyles = {
  gridItems: {
    marginTop: "8px",
    marginBottom: "8px",
  },
  content: ({ responsive }) => ({
    width: responsive ? "30%" : "80%",
    margin: "auto",
    padding: "20px",
  }),
  avatar: {
    backgroundColor: "red",
  },
  gridFlex: {
    ...flexStyle,
  },
  gridDivider: {
    ...flexStyle,
    marginTop: "30px",
  },
  link: {
    ...linkBase,
    display: "flex",
    color: "black",
  },
  linkNavbar: {
    ...linkBase,
    color: "white",
  },
  root: {
    backgroundColor: "red",
  },
  menuButton: {
    marginRight: "16px",
  },
  title: {
    flexGrow: 1,
  },
  ButtonLink: {
    color: "white",
    textTransform: "capitalize",
  },
  ButtonLinkActive: {
    borderBottom: "0.5px solid white",
  },
};
export default LoginStyles;
