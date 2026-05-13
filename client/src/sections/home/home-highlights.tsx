import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";

const highlights = [
  { title: "Chef-curated weekly menus", copy: "Seasonal dishes with balanced nutrition and restaurant-grade taste." },
  { title: "30-minute delivery windows", copy: "Fast, reliable slots that fit your workday and evening routine." },
  { title: "Fresh ingredients only", copy: "Local produce, lean proteins, and zero compromise on quality." },
];

export function HomeHighlights() {
  return (
    <Box component="section" sx={{ px: { xs: 2, md: 4 }, py: { xs: 8, md: 10 } }}>
      <Box sx={{ maxWidth: 1200, mx: "auto" }}>
        <Chip label="Why freshmeals" color="secondary" variant="outlined" sx={{ mb: 2 }} />
        <Typography variant="h3" sx={{ mb: 1 }}>Premium everyday meals, made effortless</Typography>
        <Typography color="text.secondary" sx={{ maxWidth: 640, mb: 5 }}>
          Designed for people who want healthy food without sacrificing flavor, time, or consistency.
        </Typography>

        <Grid container spacing={3}>
          {highlights.map((item) => (
            <Grid key={item.title} size={{ xs: 12, md: 4 }}>
              <Box sx={{ p: 3, border: "1px solid", borderColor: "divider", borderRadius: 3, height: "100%", bgcolor: "background.paper" }}>
                <Typography variant="h6" sx={{ mb: 1.5 }}>{item.title}</Typography>
                <Typography color="text.secondary">{item.copy}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
