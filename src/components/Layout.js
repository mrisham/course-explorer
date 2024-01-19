import Header from "./Header";
import { Grid } from "@mui/material";
import SearchBar from "./SearchBar";
import Body from "./Body";

const Layout = () => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={100}>
        <item>
          <Header />
        </item>
      </Grid>
      {/* <Grid marginTop={3} marginLeft={2} xs={100}>
        <item>
          <SearchBar width="70%" />
        </item>
      </Grid> */}
      <Grid marginTop={1} marginLeft={0} xs={100}>
        <item>
          <Body />
        </item>
      </Grid>
    </Grid>
  );
};

export default Layout;
