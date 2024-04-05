import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import BasicTable from "./BasicTable";

const DashboardContent = () => {
    return (
    <Grid container spacing={2} marginTop={2}>
      <Grid item xs={12} md={12}>
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Customer
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Main Menu
            </Typography>
            <BasicTable/>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
export default DashboardContent;


