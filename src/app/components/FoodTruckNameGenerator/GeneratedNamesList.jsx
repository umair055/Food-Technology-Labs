import {
  Box,
  Typography,
  IconButton,
  Card,
  CardContent,
  Paper,
} from "@mui/material";
import { ContentCopy, Download, Share } from "@mui/icons-material";
export default function GeneratedNamesList({
  names,
  onCopyName,
  onExportNames,
}) {
  return (
    <Paper elevation={1} sx={{ p: 3, borderRadius: 2, height: "100%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="h6">Generated Names</Typography>

        {names.length > 0 && (
          <Box>
            <IconButton onClick={onExportNames} title="Export Names">
              <Download />
            </IconButton>
            <IconButton title="Share Names">
              <Share />
            </IconButton>
          </Box>
        )}
      </Box>

      {names.length > 0 ? (
        <Box sx={{ mt: 2 }}>
          {names.map((name, index) => (
            <Card key={index} sx={{ mb: 2, bgcolor: "grey.50" }}>
              <CardContent
                sx={{
                  py: 2,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="body1">{name}</Typography>
                <IconButton
                  size="small"
                  onClick={() => onCopyName(name)}
                  title="Copy to clipboard"
                >
                  <ContentCopy fontSize="small" />
                </IconButton>
              </CardContent>
            </Card>
          ))}
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "70%",
          }}
        >
          <Typography variant="body1" color="text.secondary">
            Enter your food truck concept and click "Generate Names" to see
            results
          </Typography>
        </Box>
      )}
    </Paper>
  );
}
