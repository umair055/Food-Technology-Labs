import { Grid, Typography, Card, CardContent, Button } from "@mui/material";

export default function BusinessTools() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h6" gutterBottom>
          Business Tools
        </Typography>
        <Typography variant="body1" paragraph>
          Access essential tools to streamline your food truck business
          operations.
        </Typography>
      </Grid>

      <Grid item xs={12} md={4}>
        <Card sx={{ height: "100%" }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Branding Guide
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Learn how to create a consistent brand identity for your food
              truck business.
            </Typography>
            <Button
              variant="outlined"
              sx={{
                mt: 2,
                borderColor: "hsl(152, 95%, 39%)", // border color
                color: "hsl(152, 95%, 39%)",
              }}
            >
              View Guide
            </Button>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={4}>
        <Card sx={{ height: "100%" }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Marketing Templates
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Ready-to-use marketing materials to promote your food truck.
            </Typography>
            <Button
              variant="outlined"
              sx={{
                mt: 2,
                borderColor: "hsl(152, 95%, 39%)", // border color
                color: "hsl(152, 95%, 39%)",
              }}
            >
              Browse Templates
            </Button>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={4}>
        <Card sx={{ height: "100%" }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Business Plan Creator
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Create a comprehensive business plan for your food truck venture.
            </Typography>
            <Button
              variant="outlined"
              sx={{
                mt: 2,
                borderColor: "hsl(152, 95%, 39%)", // border color
                color: "hsl(152, 95%, 39%)",
              }}
            >
              Start Planning
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
