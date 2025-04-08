import { Box, Typography, Paper, Divider, Chip } from "@mui/material"


export default function GenerationHistory({ history, onCopyName }) {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Generation History
      </Typography>

      {history.length > 0 ? (
        <Box sx={{ mt: 2 }}>
          {history.map((entry, index) => (
            <Paper key={index} sx={{ p: 2, mb: 2 }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                <Typography variant="subtitle1" fontWeight="bold">
                  Concept: {entry.concept}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {entry.timestamp}
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Style: {entry.style.charAt(0).toUpperCase() + entry.style.slice(1)}
              </Typography>
              <Divider sx={{ my: 1 }} />
              <Box sx={{ mt: 1 }}>
                {entry.names.map((name, nameIndex) => (
                  <Chip key={nameIndex} label={name} sx={{ m: 0.5 }} onClick={() => onCopyName(name)} />
                ))}
              </Box>
            </Paper>
          ))}
        </Box>
      ) : (
        <Typography variant="body1" color="text.secondary">
          No generation history yet. Generate some names to see them here.
        </Typography>
      )}
    </Box>
  )
}

