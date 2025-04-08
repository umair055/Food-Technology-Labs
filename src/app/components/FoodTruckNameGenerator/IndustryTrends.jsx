import { Grid, Typography, Card, CardContent, Chip } from "@mui/material";

export default function IndustryTrends() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h6" gutterBottom>
          Industry Trends
        </Typography>
        <Typography variant="body1" paragraph>
          Stay updated with the latest trends in the food truck industry.
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Popular Food Truck Cuisines in 2023
            </Typography>
            <Grid container spacing={1} sx={{ mt: 1 }}>
              <Grid item>
                <Chip label="Fusion Asian (23%)" color="hsl(152, 95%, 39%)" />
              </Grid>
              <Grid item>
                <Chip label="Plant-Based (18%)" />
              </Grid>
              <Grid item>
                <Chip label="Gourmet Burgers (15%)" />
              </Grid>
              <Grid item>
                <Chip label="Street Tacos (12%)" />
              </Grid>
              <Grid item>
                <Chip label="Artisanal Desserts (10%)" />
              </Grid>
              <Grid item>
                <Chip label="Mediterranean (8%)" />
              </Grid>
              <Grid item>
                <Chip label="Specialty Coffee (7%)" />
              </Grid>
              <Grid item>
                <Chip label="Others (7%)" variant="outlined" />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={6}>
        <Card sx={{ height: "100%" }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Regional Hotspots
            </Typography>
            <Typography variant="body2" paragraph>
              Top cities for food truck businesses:
            </Typography>
            <ol>
              <li>Los Angeles, CA</li>
              <li>Austin, TX</li>
              <li>Portland, OR</li>
              <li>New York City, NY</li>
              <li>Miami, FL</li>
            </ol>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={6}>
        <Card sx={{ height: "100%" }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Emerging Concepts
            </Typography>
            <Typography variant="body2" paragraph>
              Food truck concepts gaining popularity:
            </Typography>
            <ul>
              <li>Sustainable & Zero-Waste Food Trucks</li>
              <li>Breakfast-Only Concepts</li>
              <li>Global Street Food Fusion</li>
              <li>Specialty Dietary Focus (Keto, Paleo, etc.)</li>
              <li>Dessert & Beverage Specialization</li>
            </ul>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
