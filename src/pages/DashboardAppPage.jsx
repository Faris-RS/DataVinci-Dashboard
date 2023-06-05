import { Helmet } from "react-helmet-async";
import { faker } from "@faker-js/faker";
// @mui
import { useTheme } from "@mui/material/styles";
import { Grid, Container, Typography } from "@mui/material";
// sections
import {
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppCurrentSubject,
  AppConversionRates,
  Scorecard,
} from "../sections/@dashboard/app";
// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title> DataVinci Dashboard </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hello Faris, Welcome back
        </Typography>

        <Grid container spacing={3}>
          <Scorecard />

          <Grid item xs={12} md={8} lg={8} className="Graph">
            <AppWebsiteVisits
              title="Website Visits"
              subheader=""
              chartLabels={[
                "01/01/2003",
                "02/01/2003",
                "03/01/2003",
                "04/01/2003",
                "05/01/2003",
                "06/01/2003",
                "07/01/2003",
                "08/01/2003",
                "09/01/2003",
                "10/01/2003",
                "11/01/2003",
              ]}
              chartData={[
                {
                  name: "Students",
                  type: "area",
                  fill: "gradient",
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                  name: "Mentors",
                  type: "line",
                  fill: "solid",
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={4} lg={4} className="Graph">
            <AppCurrentVisits
              title="Sales by subject"
              chartData={[
                { label: "Mathematics", value: 4344 },
                { label: "Physics", value: 5435 },
                { label: "Chemistry", value: 1443 },
                { label: "Biology", value: 4443 },
              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.info.main,
                theme.palette.warning.main,
                theme.palette.error.main,
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4} className="Graph">
            <AppConversionRates
              title="Yearly Sales"
              subheader="6.33% Increase over last year"
              chartData={[
                { label: "2023", value: 638 },
                { label: "2022", value: 600 },
                { label: "2021", value: 680 },
                { label: "2020", value: 691 },
                { label: "2019", value: 580 },
                { label: "2018", value: 489 },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4} className="Graph">
            <AppCurrentSubject
              title="Mentor Distribution"
              chartLabels={["Mathematics", "Physics", "Chemistry", "Biology"]}
              chartData={[{ name: "Mentors", data: [66, 73, 75, 81] }]}
              chartColors={[...Array(6)].map(
                () => theme.palette.text.secondary
              )}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4} className="Graph">
            <AppOrderTimeline
              title="Order Timeline"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: [
                  "Munshid enrolled for Physics",
                  "Gokul enrolled for Mathematics",
                  "Ameen is now a Physics mentor",
                  "Rishad enrolled for Biology",
                  "Mufeeda is now a Mathematics mentor",
                ][index],
                type: `order${index + 1}`,
                time: faker.date.past(),
              }))}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
