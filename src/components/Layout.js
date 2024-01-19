import Header from "./Header";
import { Grid } from "@mui/material";
import Body from "./Body";

const Layout = () => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={100}>
        <item>
          <Header />
        </item>
      </Grid>
      <Grid marginTop={1} marginLeft={0} xs={100}>
        <item>
          <Body />
        </item>
      </Grid>
    </Grid>
  );
};

export default Layout;
